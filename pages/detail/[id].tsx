import React, { useState, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducer";
import Header from "../header/Header";
import { Top } from "../../components/history/style";
import { NoticeTop } from "../../components/notice/style";
import { Body } from "../../components/detail/styles";
import styles from "../../styles/Home.module.css";
import Footer from "../../components/footer/Footer";
import Title from "../../components/detail/components/Title";
import Image from "../../components/detail/components/Image";
import Video from "../../components/detail/components/Video";
import Summary from "../../components/detail/components/Summary";
import { getDetail, getEditor, updateHit } from "../../firebase/store";
import { GetStaticPaths, GetStaticPropsResult } from "next";
import { formatDate } from "../../lib/factory";
import Head from "next/head";
type Props = {
  data: any;
};

function Detail({ data }: Props) {
  const { state, template, timestamp, title, hit } = data;
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
  useEffect(() => {
    //조회수 업데이트
    updateHit(timestamp);
    return () => {};
  }, [timestamp]);
  return (
    <div
      style={{
        width: "100%",
        height: "auto",
      }}
    >
      <Head>
        <title>(주)아주건설</title>
        <meta name="description" content="아주 건설 공사실적 페이지입니다." />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="아주건설" />
        <meta property="og:description" content="믿고 맡기는 아주건설" />
        <meta property="og:image" content="/ogtag.jpg" />
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
      {state === "portfolio" ? (
        <Top>공사실적</Top>
      ) : (
        <NoticeTop>공지사항</NoticeTop>
      )}
      <Body>
        <div className="wrapper">
          <div className="top">
            <div className="title">{title}</div>
            <div className="time-wrapper">
              <div className="time">{formatDate(timestamp, ".")}</div>
              <div className="view">조회수 {hit ? hit : 0}</div>
            </div>
            <div className="grey-bar" />
          </div>
          <div className="templates">
            {template.map(
              (
                {
                  type,
                  content,
                  width,
                  height,
                }: {
                  type: string;
                  content: string;
                  width: number;
                  height: number;
                },
                idx: number
              ) => {
                if (type === "TITLE") {
                  return <Title key={idx} content={content} />;
                } else if (type === "IMAGE") {
                  return (
                    <Image
                      key={idx}
                      content={content}
                      width={width}
                      height={height}
                    />
                  );
                } else if (type === "VIDEO") {
                  return <Video key={idx} content={content} />;
                } else if (type === "SUMMARY") {
                  return <Summary key={idx} content={content} agent={agent} />;
                }
              }
            )}
          </div>
        </div>
      </Body>
      <footer className={styles.footer}>
        <Footer agent={agent} />
      </footer>
    </div>
  );
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

// export const getStaticPaths: GetStaticPaths<any> = async (context) => {

//    const popo = await getEditor().then((res)=>{
//       return res
//   })

//   const paths = await popo.map((post:string,idx:number)=>({
//    params:{id:post}
//   }))
//   return {
//     paths,
//     fallback: false
//   }
// }

export async function getServerSideProps(params: {
  params: { id: string };
}): Promise<GetStaticPropsResult<Props>> {
  const temId = params.params.id.split("-");
  let data;
  await getDetail(temId[1]).then((result) => {
    data = result;
  });
  return {
    props: {
      data,
    },
  };
}

export default Detail;
