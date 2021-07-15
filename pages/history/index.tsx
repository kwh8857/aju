import React, { useState, useCallback, useEffect } from "react";
import { Top, List, dummy } from "../../components/history/style";
import { useSelector } from "react-redux";
import { RootState } from "../../reducer";
import styles from "../../styles/Home.module.css";
import Footer from "../footer/Footer";
import Header from "../header/Header";
function Index() {
  const agent = useSelector(
    (state: RootState) => state.config.identification.agent
  );
  const [isHead, setIsHead] = useState(false);

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
            return <div key={idx}>{title}</div>;
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
