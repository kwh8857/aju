import React, { useState, useCallback, useEffect } from "react";
import { Top, List, dummy } from "../../components/history/style";
import { useSelector } from "react-redux";
import { RootState } from "../../reducer";
import styles from "../../styles/Home.module.css";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Image from "next/image";
import Link from "next/link";
function Index() {
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
      <Header agent={agent} isHead={isHead} />
      <Top>공사실적</Top>
      <List>
        {dummy.map(
          (
            {
              title,
              sub,
              image,
            }: { title: string; sub: string; image: string },
            idx
          ) => {
            return (
              <div key={idx} className="card">
                <div className="back">
                  <Image
                    src={image}
                    className="img-wrapper"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    placeholder="blur"
                    blurDataURL="https://us.123rf.com/450wm/jakkapan/jakkapan1604/jakkapan160400006/54923627-%EC%B6%94%EC%83%81-%ED%9A%8C%EC%83%89-%EB%B0%B0%EA%B2%BD-%EB%AA%A8%EC%85%98-%EB%B8%94%EB%9F%AC-%ED%9A%A8%EA%B3%BC.jpg?ver=6"
                  />
                </div>
                <div className="bottom">
                  <div className="left">
                    <div className="title">{title}</div>
                    <div className="content">{sub}</div>
                  </div>
                  <div className="right">
                    <Link href={`/detail/history-${idx}`}>
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

export default Index;
