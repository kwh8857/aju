import React, { useState, useCallback, useEffect } from "react";
import { Top, List } from "../../components/history/style";
import { useSelector } from "react-redux";
import { RootState } from "../../reducer";
import styles from "../../styles/Home.module.css";

import Header from "../header/Header";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { getPrt } from "../../firebase/store";
import Footer from "../../components/footer/Footer";
import Card from "../../components/history/Card";
function Index({ data }: { data: any }) {
  const agent = useSelector(
    (state: RootState) => state.config.identification.agent
  );
  const [isHead, setIsHead] = useState(false);

  const __scrollHandle = useCallback(() => {
    if (window.scrollY <= 163) {
      if (isHead) {
        setIsHead(false);
      }
    }
    if (window.scrollY >= 164) {
      if (!isHead) {
        setIsHead(true);
      }
    }
  }, [isHead, agent]);
  useEffect(() => {
    document.addEventListener("scroll", __scrollHandle);
    return () => {
      document.removeEventListener("scroll", __scrollHandle);
    };
  }, [__scrollHandle]);
  return (
    <div>
      <Head>
        <title> 아주 건설 : 공사실적</title>
        <meta
          name="description"
          content="아주종합건설 공사실적 페이지입니다."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="아주종합건설" />
        <meta
          property="og:description"
          content="내 집, 내 공장을 짓는다는 마음으로 아주종합건설 공사실적"
        />
        <meta property="og:image" content="/ogtag.jpg" />
        <link rel="canonical" href="https://www.ajoo.co.in/"></link>
        <meta name="subject" content="(주)아주종합건설" />
        <meta name="title" content="(주)아주종합건설" />
        <meta name="author" content="(주)아주종합건설" />
        <meta
          name="keywords"
          content="종합건설기업,아주건설,구미,구미 건설기업"
        />
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
      <h1 style={{ display: "none" }}>아주종합건설 공사실적</h1>
      <h2 style={{ display: "none" }}>아주건설</h2>
      <h3 style={{ display: "none" }}>구미</h3>
      <h4 style={{ display: "none" }}>종합건설기업</h4>
      <h5 style={{ display: "none" }}>공사실적</h5>
      <Header agent={agent} isHead={isHead} />
      <Top>공사실적</Top>
      <List>
        {data.map(
          (
            {
              title,
              sub,
              image: { url, resize },
              timestamp,
            }: {
              title: string;
              sub: string;
              timestamp: number;
              image: {
                url: string;
                resize: string;
              };
            },
            idx: number
          ) => {
            return (
              <Card
                key={idx}
                title={title}
                sub={sub}
                url={url}
                resize={resize}
                timestamp={timestamp}
              />
            );
          }
        )}
      </List>
      <footer className={styles.footer}>
        <Footer agent={agent} />
      </footer>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  let data;
  await getPrt().then((result) => {
    data = result;
  });
  return {
    props: {
      data,
    },
  };
};
export default Index;
