import React, { useState, useCallback, useEffect } from "react";
import Header from "../header/Header";
import { useSelector } from "react-redux";
import { RootState } from "../reducer";
import { Top, Section1, Section2 } from "./style/style";
import { boxlayout, mblayout } from "./layout/layout";
import styles from "../../styles/Home.module.css";
import Footer from "../footer/Footer";
function index() {
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
      <Top>문의 / 연락</Top>
      <Section1>
        <div className="top">
          {agent !== "tablet"
            ? boxlayout.map(({ title, content, image }, idx) => {
                return (
                  <div
                    key={idx}
                    className="box"
                    style={{
                      backgroundImage: `url(/assets/${image}${
                        agent !== "pc" ? "-mb" : ""
                      }.svg)`,
                    }}
                  >
                    <div className="title">{title}</div>
                    <div className="content">{content}</div>
                  </div>
                );
              })
            : mblayout.map(({ title, content, image }, idx) => {
                return (
                  <div
                    key={idx}
                    className="box"
                    style={{
                      backgroundImage: `url(/assets/${image}${
                        agent !== "pc" ? "-mb" : ""
                      }.svg)`,
                    }}
                  >
                    <div className="title">{title}</div>
                    <div className="content">{content}</div>
                  </div>
                );
              })}
        </div>
        <div className="bottom">
          <div className="card">
            <img src="/assets/red-check.svg" alt="check" />
            <div>
              메일주소로 문의시&nbsp;<b>영업일 1일 이내</b>&nbsp;{"\n"}답변드릴
              예정입니다
            </div>
          </div>
          <div className="card">
            <img src="/assets/red-check.svg" alt="check" />
            <div>
              영업시간은&nbsp;<b>평일 9시~19시</b>&nbsp;입니다
            </div>
          </div>
          <div className="card">
            <img src="/assets/red-check.svg" alt="check" />
            <div>
              급한 업무의 경우 되도록이면&nbsp;<b>전화</b>로{"\n"} 연락
              부탁드립니다
            </div>
          </div>
        </div>
      </Section1>
      <Section2>
        <div className="wrapper">
          <div className="top">
            <div className="title">오시는길</div>
            <div className="top-right">
              <div className="address-wrapper">
                <img src="/assets/white-pin.svg" alt="pin" />
                <div className="address">경북 구미시 형곡로 8길 14, 301호</div>
              </div>
              <div className="clip">주소복사</div>
            </div>
          </div>
          <div className="map"></div>
        </div>
      </Section2>
      <footer className={styles.footer}>
        <Footer agent={agent} />
      </footer>
    </div>
  );
}

export default index;