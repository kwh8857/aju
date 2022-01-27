import React, { useState, useCallback, useEffect } from "react";
import styles from "../../styles/Home.module.css";
import Footer from "../../components/footer/Footer";
import { useSelector } from "react-redux";
import { RootState } from "../../reducer";
import Header from "../header/Header";
import {
  NoticeTop,
  NoticeBody,
  Wrapper,
  BodyTop,
  NoticeList,
  BtnSection,
  EmtySearch,
} from "../../components/notice/style";
import Link from "next/link";
import { formatDate } from "../../lib/factory";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { getNotice } from "../../firebase/store";

interface dataFace {
  title: string;
  timestamp: number;
  index: number;
}

function Index({ data }: { data: Array<dataFace> }) {
  const length = parseInt(String(data.length / 10));
  const agent = useSelector(
    (state: RootState) => state.config.identification.agent
  );
  const [isHead, setIsHead] = useState(false);
  const [paging, setPaging] = useState(1);
  const [ogList, setOgList] = useState(data);
  const [List, setList] = useState<dataFace[]>([]);
  const __changePaging = useCallback(
    (type: string) => {
      if (type === "plus") {
        setPaging(paging + 1);
      } else {
        setPaging(paging - 1);
      }
    },
    [paging]
  );

  const __scrollHandle = useCallback(() => {
    if (window.scrollY <= 157) {
      if (isHead) {
        setIsHead(false);
      }
    }
    if (window.scrollY >= 158) {
      if (!isHead) {
        setIsHead(true);
      }
    }
  }, [isHead]);
  const __searchTitle = useCallback(
    (e) => {
      if (e.target.value) {
        const searching = data.filter(({ title }, idx) =>
          title.includes(e.target.value)
        );
        setOgList(searching);
      } else {
        setOgList(data);
      }
    },
    [data]
  );
  useEffect(() => {
    document.addEventListener("scroll", __scrollHandle);
    return () => {
      document.removeEventListener("scroll", __scrollHandle);
    };
  }, [__scrollHandle]);
  useEffect(() => {
    const clone = ogList.slice();
    const filt = clone.slice(
      parseInt(`${paging > 1 ? paging - 1 : ""}0`),
      parseInt(`${paging === 0 ? 1 : paging}0`)
    );
    setList(filt);

    return () => {};
  }, [paging, ogList]);
  return (
    <div>
      <Head>
        <title> 아주 건설 : 공지사항</title>
        <meta name="description" content="아주 건설 공지사항 페이지입니다" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="아주건설" />
        <meta
          property="og:description"
          content="내 집, 내 공장을 짓는다는 마음으로 아주종합건설 공지사항"
        />
        <meta property="og:image" content="/ogtag.jpg" />
        <h1 style={{ display: "none" }}>아주종합건설 공지사항</h1>
        <h2 style={{ display: "none" }}>아주산업개발</h2>
        <h3 style={{ display: "none" }}>구미</h3>
        <h4 style={{ display: "none" }}>종합건설기업</h4>
        <h5 style={{ display: "none" }}>공사실적</h5>
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
      <Header agent={agent} isHead={isHead} />
      <NoticeTop>공지사항</NoticeTop>
      <NoticeBody>
        <Wrapper>
          <BodyTop>
            <div className="title">
              아주종합건설의 <br /> 다양한 소식을 만나보세요
            </div>
            <div className="search">
              <input
                type="text"
                placeholder="검색어를 입력해주세요"
                onChange={__searchTitle}
              />
              <img src="/assets/grey-search.svg" alt="검색" />
            </div>
          </BodyTop>
          <NoticeList>
            {List.length > 0 ? (
              List.map(({ title, timestamp, index }, idx) => {
                return (
                  <Link href={`/detail/notice-${timestamp}`} key={idx}>
                    <a className="card">
                      <div className="left">
                        <div className="num">{data.length - index}</div>
                        <div className="title">{title}</div>
                      </div>
                      <div className="time">{formatDate(timestamp, ".")}</div>
                    </a>
                  </Link>
                );
              })
            ) : (
              <EmtySearch>
                <img src="/assets/search-emty.svg" alt="X" />
                <div className="emty-title">검색결과가 존재하지 않습니다</div>
              </EmtySearch>
            )}
          </NoticeList>
          <BtnSection>
            <img
              src="/assets/left-arrow.svg"
              alt="뒤로가기"
              className="left"
              onClick={() => {
                if (paging > 1) {
                  __changePaging("minus");
                }
              }}
            />
            <div
              className="page"
              style={
                length !== 0 && paging <= length
                  ? undefined
                  : {
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }
              }
            >
              <div className="now">{paging}</div>
              {length !== 0 && paging <= length ? (
                <div
                  className="next"
                  onClick={() => {
                    __changePaging("plus");
                  }}
                >
                  {paging + 1}
                </div>
              ) : undefined}
            </div>
            <img
              src="/assets/right-arrow.svg"
              alt="더보기"
              className="right"
              onClick={() => {
                if (length !== 0 && paging <= length) {
                  __changePaging("plus");
                }
              }}
            />
          </BtnSection>
        </Wrapper>
      </NoticeBody>
      <footer className={styles.footer}>
        <Footer agent={agent} />
      </footer>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  let data;
  await getNotice().then((res) => {
    data = res;
  });
  return {
    props: {
      data,
    },
  };
};
export default Index;
