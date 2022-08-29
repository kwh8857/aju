import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "./header/Header";
import styled from "styled-components";
import MainCard from "../components/MainCard";
import { formatDate } from "../lib/factory";
import Footer from "../components/footer/Footer";
import { useSelector } from "react-redux";
import { RootState } from "../reducer";
import { useEffect, useCallback, useState, useMemo, useRef } from "react";
import Link from "next/link";
import { GetServerSideProps } from "next";
import { getMain } from "../firebase/store";

// 스타일 영역
const Section1 = styled.div`
  width: 100%;
  height: 767px;
  .wrapper {
    position: relative;
    width: 100%;
    height: 767px;
    background-image: url("/assets/main.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: -webkit-image-set(
      url("/assets/main@2x.png") 2x,
      url("/assets/main@3x.png") 3x
    );
  }
  @media screen and (max-width: 1365px) {
    height: 894px;
    .wrapper {
      height: 65.6vw;
    }
  }
  @media screen and (max-width: 767px) {
    height: 427px;
    .wrapper {
      height: 100%;
    }
  }
`;
const Container = styled.div`
  max-width: 1366px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  color: white;
  padding-top: 238px;
  padding-left: 186px;
  box-sizing: border-box;
  .left {
    white-space: nowrap;
    font-size: 35px;
    line-height: 1.37;
    font-weight: bold;
    position: relative;
    div {
      font-weight: normal;
      font-size: 16px;
      margin-top: 8px;
      line-height: 1.63;
    }
    img {
      margin-top: 45px;
      cursor: pointer;
    }
    .mute {
      margin-left: 9px;
    }
    .main-video {
      bottom: 0;
      left: 100%;
      width: 50.5vw;
      height: 29.7vw;
      margin-left: 54px;
      position: absolute;
      min-height: 529px;
      min-width: 871px;
      max-height: 686px;
      max-width: 1167px;
      video {
        width: 100%;
        height: 100%;
        object-fit: fill;
      }
    }
  }

  @media screen and (max-width: 1365px) {
    max-width: 768px;
    flex-direction: column;
    align-items: center;
    padding-top: 136px;
    padding-left: 0;
    .left {
      text-align: center;
      font-size: 24px;
      div {
        margin-top: 14px;
        font-size: 14px;
      }
      img {
        margin-top: 50px;
      }
    }
  }
  @media screen and (max-width: 767px) {
    max-width: 320px;
  }
`;
const MainVideo = styled.div`
  width: 768px;
  /* margin: 0 auto; */
  height: 467px;

  position: absolute;
  top: 427px;
  .wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  @media screen and (max-width: 767px) {
    position: unset;
    width: 100%;
    height: 61vw;
  }
`;
const Section2 = styled.div`
  max-width: 993px;
  padding-top: 145px;
  padding-bottom: 134px;
  display: grid;
  grid-template-columns: 533px 460px;

  @media screen and (max-width: 1365px) {
    max-width: 720px;
    padding-top: 117px;
    padding-bottom: 109px;
    grid-template-columns: 360px 360px;
    grid-template-rows: 240px;
  }
  @media screen and (max-width: 767px) {
    max-width: 360px;
    padding-top: 0;
    padding-bottom: 90px;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
const Section3 = styled.div`
  width: 100%;
  padding: 87px 186px 152px 186px;
  background-color: #f2f3f7;
  display: flex;
  justify-content: center;
  align-items: center;
  .wrapper {
    width: 993px;
    height: 100%;
    display: flex;
    .left {
      background-color: white;
      width: 657px;
      height: 306px;
      box-sizing: border-box;
      padding: 22px 29px 32px 32px;
      .left-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 22px;
        font-weight: bold;
      }
      .notice {
        white-space: nowrap;

        margin-top: 25px;
        max-height: 184px;
        display: grid;
        row-gap: 20px;
        .notice-card {
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 15px;
          font-weight: 500;
          .title {
            text-overflow: ellipsis;
            overflow: hidden;
            color: #434343;
          }
          .time {
            color: #bfbfbf;
          }
        }
      }
    }
    .right {
      padding: 27px 23.5px 38px 29.5px;
      box-sizing: border-box;
      margin-left: 15px;
      color: white;
      width: 321px;
      height: 306px;
      background-image: url("/assets/main-call.jpg");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-image: -webkit-image-set(
        url("/assets/main-call@2x.jpg") 2x,
        url("/assets/main-call@3x.jpg") 3x
      );
      .white-bar {
        width: 100%;
        height: 1px;
        background-color: white;
      }
      .top {
        display: flex;
        align-items: center;
        span {
          margin-left: 3px;
          font-size: 22px;
          font-weight: bold;
        }
      }
      .content {
        font-size: 17px;
        font-weight: bold;
        margin-top: 13.3px;
        margin-bottom: 51.7px;
        line-height: 1.71;
        height: 54px;
      }
      .sub {
        font-size: 15px;
        font-weight: 500;
        margin-top: 14.8px;
      }
    }
  }
  @media screen and (max-width: 1365px) {
    padding: 101px 24px 134px 24px;
    .wrapper {
      width: 720px;
      .left {
        background-color: white;
        width: 381px;
        height: 326px;
        padding: 29px 26px 37px 28px;
        .left-top {
          a {
            width: 34px;
            height: 34px;

            & > img {
              width: 100%;
            }
          }
        }
        .notice {
          margin-top: 26px;
          max-height: 184px;
          row-gap: 25px;
          .notice-card {
            font-size: 14px;
            .title {
              width: 182px;
            }
          }
        }
      }
      .right {
        padding: 27px 26.7px 60px 26.7px;
        margin-left: 19px;
        width: 320px;
        height: 326px;
        .sub {
          font-size: 14px;
          margin-top: 14.5px;
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    padding: 71px 20px 190px 20px;
    .wrapper {
      flex-direction: column;
      width: 320px;
      .left {
        width: 100%;
      }
      .right {
        margin-top: 28px;
        margin-left: 0;
      }
    }
  }
`;

function Home({ data: { prt, notice } }: { data: any }) {
  const VideoRef = useRef<HTMLVideoElement>(null);
  const agent = useSelector(
    (state: RootState) => state.config.identification.agent
  );
  const [isHead, setIsHead] = useState(false);
  const [isPause, setIsPause] = useState(true);
  const [isMute, setIsMute] = useState(true);
  const __scrollHandle = useCallback(() => {
    if (
      agent === "pc"
        ? window.scrollY <= 690
        : agent === "tablet"
        ? window.scrollY <= 599
        : window.scrollY <= 550
    ) {
      if (isHead) {
        setIsHead(false);
      }
    }
    if (
      agent === "pc"
        ? window.scrollY >= 691
        : agent === "tablet"
        ? window.scrollY >= 600
        : window.scrollY >= 551
    ) {
      if (!isHead) {
        setIsHead(true);
      }
    }
  }, [isHead, agent]);
  const __changeMute = useCallback(() => {
    if (VideoRef.current) {
      if (VideoRef.current.muted) {
        VideoRef.current.muted = false;
      } else {
        VideoRef.current.muted = true;
      }
      setIsMute(VideoRef.current.muted);
    }
  }, []);
  const __changeVideo = useCallback(() => {
    if (VideoRef.current) {
      if (VideoRef.current.paused) {
        VideoRef.current.play();
      } else {
        VideoRef.current.pause();
      }
      setIsPause(!VideoRef.current.paused);
    }
  }, []);
  const section2Data = useMemo(() => {
    const pat = prt.slice();
    if (agent === "mobile") {
      pat.splice(0, 0, {
        title: "아주종합건설 \n공사실적",
        sub: "어느 누구도 자신의 집을 대충 짓지 않듯이\n 내 집처럼 고객의 입장에서 함께합니다",
      });
    } else {
      pat.splice(1, 0, {
        title: "아주종합건설 \n공사실적",
        sub: "어느 누구도 자신의 집을 대충 짓지 않듯이\n 내 집처럼 고객의 입장에서 함께합니다",
      });
    }
    return pat;
  }, [prt, agent]);
  useEffect(() => {
    document.addEventListener("scroll", __scrollHandle);
    return () => {
      document.removeEventListener("scroll", __scrollHandle);
    };
  }, [__scrollHandle]);

  return (
    <div className={styles.container}>
      <Head>
        <title>(주)아주건설</title>
        <meta
          name="description"
          content="내 집, 내 공장을 짓는다는 마음으로 아주종합건설"
        />
        <link rel="canonical" href="https://www.ajoo.co.in/"></link>
        <meta name="subject" content="(주)아주종합건설" />
        <meta name="title" content="(주)아주종합건설" />
        <meta name="author" content="(주)아주종합건설" />
        <meta
          name="keywords"
          content="아주종합건설,아주산업개발,구미 건설회사,구미 공장공사,건축,건설회사"
        />
        <meta
          name="classification"
          content="내 집, 내 공장을 짓는다는 마음으로 아주종합건설"
        ></meta>
        <meta property="og:title" content="(주)아주종합건설" />
        <meta
          property="og:description"
          content="내 집, 내 공장을 짓는다는 마음으로 아주종합건설"
        />
        <meta property="og:image" content="/ogtag.jpg" />
        <meta property="og:url" content="https://www.ajoo.co.in/" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="favicon/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="favicon/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="favicon/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="favicon/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="favicon/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="favicon/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="favicon/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="favicon/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="favicon/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="favicon/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <h1 style={{ display: "none" }}>아주종합건설</h1>
      <h2 style={{ display: "none" }}>아주산업개발</h2>
      <h3 style={{ display: "none" }}>구미 건설회사</h3>
      <h4 style={{ display: "none" }}>구미 공장공사</h4>
      <h5 style={{ display: "none" }}>건축</h5>
      <h6 style={{ display: "none" }}>건설회사</h6>
      <Header agent={agent} isHead={isHead} />
      <main className={styles.main}>
        <Section1>
          <div className="wrapper">
            <Container>
              <div className="left">
                내 집, 내 공장을 <br /> 짓는다는 마음으로 <br /> (주)아주건설
                <br />
                <div>
                  내 집, 내 공장을 짓는다는 마음으로 <br /> 함께하는
                  종합건설기업 아주종합건설
                </div>
                <img
                  src={`/assets/${isPause ? "pause" : "play"}.svg`}
                  alt="재생"
                  onClick={__changeVideo}
                />
                <img
                  src={`/assets/mute-${isMute ? "on" : "off"}.svg`}
                  className="mute"
                  alt="음소거"
                  onClick={__changeMute}
                />
                {agent === "pc" ? (
                  <div className="main-video">
                    <video
                      ref={VideoRef}
                      autoPlay
                      muted
                      loop={true}
                      playsInline
                    >
                      <source
                        src="https://firebasestorage.googleapis.com/v0/b/ajoo-office.appspot.com/o/ajoo.mp4?alt=media&token=a37266e5-0abf-4a27-9c37-f2078562c982"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                ) : undefined}
              </div>
            </Container>
          </div>
        </Section1>
        {agent !== "pc" ? (
          <MainVideo>
            <div className="wrapper">
              <video ref={VideoRef} autoPlay muted loop={true} playsInline>
                <source
                  src="https://firebasestorage.googleapis.com/v0/b/ajoo-office.appspot.com/o/ajoo.mp4?alt=media&token=a37266e5-0abf-4a27-9c37-f2078562c982"
                  type="video/mp4"
                />
              </video>
            </div>
          </MainVideo>
        ) : undefined}
        <Section2>
          {section2Data.map(
            (
              {
                image,
                title,
                sub,
                state,
                timestamp,
              }: {
                image: any;
                title: string;
                sub: any;
                state: string;
                timestamp: number;
              },
              idx: number
            ) => {
              return (
                <MainCard
                  image={image ? image : ""}
                  sub={sub ? sub : ""}
                  title={title}
                  key={idx}
                  state={state}
                  index={idx}
                  agent={agent}
                  timestamp={timestamp}
                />
              );
            }
          )}
        </Section2>
        <Section3>
          <div className="wrapper">
            <div className="left">
              <div className="left-top">
                <span>공지사항</span>
                <Link href="/notice">
                  <a>
                    <img src="/assets/grey-plus.svg" alt="더보기" />
                  </a>
                </Link>
              </div>
              <div className="notice">
                {notice.map(
                  (
                    { title, timestamp }: { title: string; timestamp: number },
                    idx: number
                  ) => {
                    return (
                      <Link key={idx} href={`/detail/notice-${timestamp}`}>
                        <a className="notice-card">
                          <span className="title">{title}</span>
                          <span className="time">
                            {formatDate(timestamp, ".")}
                          </span>
                        </a>
                      </Link>
                    );
                  }
                )}
              </div>
            </div>
            <div className="right">
              <div className="top">
                <img src="/assets/white-call.svg" alt="call" />
                <span>문의</span>
              </div>
              <div className="white-bar" style={{ marginTop: "9.7px" }} />
              <div className="content">
                Call 054-455-2326 <br /> Fax &nbsp;054-458-2327
              </div>
              <div className="top">
                <img src="/assets/white-pin.svg" alt="gps" />
                <span>오시는 길</span>
              </div>
              <div className="white-bar" style={{ marginTop: "10px" }} />
              <div className="sub">경북 구미시 형곡로 8길 14, 301호</div>
            </div>
          </div>
        </Section3>
      </main>
      <footer className={styles.footer}>
        <Footer agent={agent} />
      </footer>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  let data;
  await getMain().then((result) => {
    data = result;
  });
  return {
    props: {
      data,
    },
  };
};
export default Home;
