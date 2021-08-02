import React, { useState, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducer";
import Header from "../header/Header";
import { Top } from "../../components/history/style";
import { NoticeTop } from "../../components/notice/style";
import { Body } from "../../components/detail/styles";
import styles from "../../styles/Home.module.css";
import Footer from "../footer/Footer";
import Title from "../../components/detail/components/Title";
import Image from "../../components/detail/components/Image";
import Video from "../../components/detail/components/Video";
import Summary from "../../components/detail/components/Summary";
import {getDetail, getEditor, updateHit} from "../../firebase/store"
import { GetStaticPaths,  GetStaticPropsResult } from "next";
import { formatDate } from "../../lib/factory";
type Props = {
  data:any;
};
 
function Detail(
 {data}:Props
  ) {

  const {
    state,
    template,
    timestamp,
    title,
    hit
  }=data
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
    updateHit(timestamp)
    return () => {
    }
  }, [timestamp])
  return (
    <div
      style={{
        width: "100%",
        height: "auto",
      }}
    >
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
              <div className="time">{formatDate(timestamp,".")}</div>
              <div className="view">조회수 {hit? hit : 0}</div>
            </div>
            <div className="grey-bar" />
          </div>
          <div className="templates">
            {template.map(({ type, content }:{type:string; content:string;}, idx:number) => {
              if (type === "TITLE") {
                return <Title key={idx} content={content} />;
              } else if (type === "IMAGE") {
                return <Image key={idx} content={content} />;
              } else if (type === "VIDEO") {
                return <Video key={idx} content={content} />;
              } else if (type === "SUMMARY") {
                return <Summary key={idx} content={content} />;
              }
            })}
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


export const getStaticPaths: GetStaticPaths<any> = async (context) => {
  
   const popo = await getEditor().then((res)=>{
      return res
  })

  const paths = await popo.map((post:string,idx:number)=>({
   params:{id:post}
  }))
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps(params:{params:{id:string}}): Promise<GetStaticPropsResult<Props>> {
  const temId = params.params.id.split("-")
    let data
   await getDetail(temId[1]).then((result)=>{
      data = result
    })
    return {
        props: {
            data,
        },
    };
}


export default Detail;
