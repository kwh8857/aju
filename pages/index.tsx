import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "./header/Header";
import styled from "styled-components";
import MainCard from "./components/MainCard";
import { formatDate } from "./lib/factory";
import Footer from "./footer/Footer";
import { useSelector } from "react-redux";
import { RootState } from "./reducer";
//레이아웃 영역
const section2Mb = [
  {
    title: "아주종합건설 \n공사실적",
    sub:
      "어느 누구도 자신의 집을 대충 짓지 않듯이\n 내 집처럼 고객의 입장에서 함께합니다",
  },
  {
    title: "화성그랜드파크 시공",
    image:
      "https://images.pexels.com/photos/1323615/pexels-photo-1323615.jpeg?cs=srgb&dl=pexels-macki-ladrera-1323615.jpg&fm=jpg",
  },
  {
    title: "화성그랜드파크 시공",
    image:
      "https://cdn.crowdpic.net/detail-thumb/thumb_d_17EDE2C64AF7BFD76367AEE581408A6E.jpg",
  },
  {
    title: "화성그랜드파크 시공",
    image:
      "https://cdn.crowdpic.net/detail-thumb/thumb_d_3499D019D11D061A2C923EE589C60365.jpg",
  },
  {
    title: "화성그랜드파크 시공",
    image:
      "https://www.su-wan.co.kr/wp-content/uploads/2021/03/main_visual.png",
  },
  {
    title: "화성그랜드파크 시공",
    image: "https://www.shillahotels.com/images/en/hub/sub/seoulMainImg.jpg",
  },
];
const section2Layout = [
  {
    title: "화성그랜드파크 시공",
    image:
      "https://images.pexels.com/photos/1323615/pexels-photo-1323615.jpeg?cs=srgb&dl=pexels-macki-ladrera-1323615.jpg&fm=jpg",
  },
  {
    title: "아주종합건설 \n공사실적",
    sub:
      "어느 누구도 자신의 집을 대충 짓지 않듯이\n 내 집처럼 고객의 입장에서 함께합니다",
  },
  {
    title: "화성그랜드파크 시공",
    image:
      "https://cdn.crowdpic.net/detail-thumb/thumb_d_17EDE2C64AF7BFD76367AEE581408A6E.jpg",
  },
  {
    title: "화성그랜드파크 시공",
    image:
      "https://cdn.crowdpic.net/detail-thumb/thumb_d_3499D019D11D061A2C923EE589C60365.jpg",
  },
  {
    title: "화성그랜드파크 시공",
    image:
      "https://www.su-wan.co.kr/wp-content/uploads/2021/03/main_visual.png",
  },
  {
    title: "화성그랜드파크 시공",
    image: "https://www.shillahotels.com/images/en/hub/sub/seoulMainImg.jpg",
  },
];
const noticeArr = [
  { title: "아주종합건설의 다양한 소식을 만나보세요", time: Date.now() },
  { title: "아주종합건설의 다양한 소식을 만나보세요", time: Date.now() },
  { title: "아주종합건설의 다양한 소식을 만나보세요", time: Date.now() },
  { title: "아주종합건설의 다양한 소식을 만나보세요", time: Date.now() },
  { title: "아주종합건설의 다양한 소식을 만나보세요", time: Date.now() },
];
// 스타일 영역
const Section1 = styled.div`
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
  @media screen and (max-width: 1366px) {
    height: 427px;
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
  }
  .main-video {
    width: 871px;
    height: 529px;
    margin-left: 54px;
    background-image: url("https://data.1freewallpapers.com/download/tall-buildings-in-the-city.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
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
  width: 100%;
  /* margin: 0 auto; */
  height: 467px;
  background-image: url("https://data.1freewallpapers.com/download/tall-buildings-in-the-city.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
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
        & > img {
          cursor: pointer;
        }
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
          & > img {
            cursor: pointer;
            width: 34px;
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

function Home() {
  const agent = useSelector(
    (state: RootState) => state.config.identification.agent
  );
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header agent={agent} />
      <main className={styles.main}>
        <Section1>
          <Container>
            <div className="left">
              내 집, 내 공장을 <br /> 짓는다는 마음으로 <br /> 아주종합건설
              <br />
              <div>
                내 집, 내 공장을 짓는다는 마음으로 <br /> 함께하는 종합건설기업
                (주) 아주산업개발
              </div>
              <img src="/assets/pause.svg" alt="재생" />
            </div>
            {agent === "pc" ? <div className="main-video"></div> : undefined}
          </Container>
        </Section1>
        {agent !== "pc" ? <MainVideo /> : undefined}
        <Section2>
          {agent !== "mobile"
            ? section2Layout.map(({ image, title, sub }, idx) => {
                return (
                  <MainCard
                    image={image ? image : ""}
                    sub={sub ? sub : ""}
                    title={title}
                    key={idx}
                    index={idx}
                    agent={agent}
                  />
                );
              })
            : section2Mb.map(({ image, title, sub }, idx) => {
                return (
                  <MainCard
                    image={image ? image : ""}
                    sub={sub ? sub : ""}
                    title={title}
                    key={idx}
                    index={idx}
                    agent={agent}
                  />
                );
              })}
        </Section2>
        <Section3>
          <div className="wrapper">
            <div className="left">
              <div className="left-top">
                <span>공지사항</span>
                <img src="/assets/grey-plus.svg" alt="더보기" />
              </div>
              <div className="notice">
                {noticeArr.map(({ title, time }, idx) => {
                  return (
                    <div key={idx} className="notice-card">
                      <span className="title">{title}</span>
                      <span className="time">{formatDate(time, ".")}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="right">
              <div className="top">
                <img src="/assets/white-call.svg" alt="call" />
                <span>문의</span>
              </div>
              <div className="white-bar" style={{ marginTop: "9.7px" }} />
              <div className="content">
                Call 010-1234-1234 <br /> Fax &nbsp;054-123-4567
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

export default Home;
