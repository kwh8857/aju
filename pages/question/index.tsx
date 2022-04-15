import React, { useState, useCallback, useEffect } from "react";
import Header from "../header/Header";
import { useSelector } from "react-redux";
import { RootState } from "../../reducer";
import { Top, Section1, Section2 } from "../../components/question/style/style";
import { boxlayout, mblayout } from "../../components/question/layout/layout";
import styles from "../../styles/Home.module.css";
import Footer from "../../components/footer/Footer";
import Head from "next/head";
declare global {
  interface Window {
    kakao: any;
  }
}
function Index() {
  const agent = useSelector(
    (state: RootState) => state.config.identification.agent
  );
  const [isHead, setIsHead] = useState(false);
  const __clipboard = useCallback(() => {
    navigator.clipboard
      .writeText("경북 구미시 형곡로 8길 14, 301호")
      .then(() => {
        alert("주소가 복사되었습니다");
      })
      .catch(() => {});
  }, []);
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
    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=	912e13d0226b4d857a7a74e749e1a888`;

    document.head.appendChild(mapScript);
    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(
            36.11607295051233,
            128.33130730236442
          ),
        };
        const map = new window.kakao.maps.Map(container, options);
        const markerPosition = new window.kakao.maps.LatLng(
          36.11607295051233,
          128.33130730236442
        );
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);
    return () => mapScript.removeEventListener("load", onLoadKakaoMap);
  }, []);

  return (
    <div>
      <Head>
        <title>아주종합건설</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="아주건설" />
        <meta property="og:description" content="믿고 맡기는 아주건설" />
        <meta property="og:image" content="/ogtag.jpg" />
        <meta property="og:url" content="https://www.ajoo.co.in/" />

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
      <h1 style={{ display: "none" }}>아주종합건설 문의/연락</h1>
      <h2 style={{ display: "none" }}>구미 건설기업</h2>
      <h3 style={{ display: "none" }}>경북 구미시</h3>
      <h4 style={{ display: "none" }}>종합건설기업</h4>
      <h5 style={{ display: "none" }}>연락처</h5>
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
          {/* <div className="card">
            <img src="/assets/red-check.svg" alt="check" />
            <div>
              메일주소로 문의시&nbsp;<b>영업일 1일 이내</b>&nbsp;{"\n"}답변드릴
              예정입니다
            </div>
          </div> */}
          <div className="card">
            <img src="/assets/red-check.svg" alt="check" />
            <div>
              영업시간은&nbsp;<b>평일 9시~18시</b>&nbsp;입니다
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
                <div className="address" id="copy-address">
                  경북 구미시 형곡로 8길 14, 301호
                </div>
              </div>
              <div className="clip" onClick={__clipboard}>
                주소복사
              </div>
            </div>
          </div>
          <div className="map" id="map"></div>
        </div>
      </Section2>
      <footer className={styles.footer}>
        <Footer agent={agent} />
      </footer>
    </div>
  );
}

export default Index;
