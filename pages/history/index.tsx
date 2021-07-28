import React, { useState, useCallback, useEffect } from "react";
import { Top, List } from "../../components/history/style";
import { useSelector } from "react-redux";
import { RootState } from "../../reducer";
import styles from "../../styles/Home.module.css";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { GetStaticProps } from "next";
import {getPrt} from "../../firebase/store"
function Index({data}:{data:any}) {
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
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header agent={agent} isHead={isHead} />
      <Top>공사실적</Top>
      <List>
        {data.map(
          (
            {
              title,
              sub,
              image:{
                url,resize
              },
              timestamp
            }: { title: string; sub: string; timestamp:number; image:{
              url:string;
              resize:string;
            }},
            idx:number
          ) => {
            return (
              <div key={idx} className="card">
                <div className="back">
                  <Image
                    src={url}
                    quality={30}
                    priority={true}
                    className="img-wrapper"
                    layout="fill"
                    objectFit="cover"
                     loading='eager'
                    objectPosition="center"
                    sizes="(max-width: 767px) 480px,(max-width: 1365px)720Px ,993px"
                    placeholder="blur"
                    blurDataURL={resize}
                  />
                </div>
                <div className="bottom">
                  <div className="left">
                    <div className="title">{title}</div>
                    <div className="content">{sub}</div>
                  </div>
                  <div className="right">
                    <Link href={`/detail/portfolio-${timestamp}`}>
                      <a className="btn">
                        자세히보기
                        <img src="/assets/red-arrow.svg" alt="상세보기" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
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

export const getStaticProps: GetStaticProps = async ( )=>{
let data
await getPrt().then((result)=>{
  data =result
})
  return {
    props:{
      data
    }
  }
}
export default Index;
