import React, { useState, useCallback, useEffect } from "react";
import styles from "../../styles/Home.module.css";
import Footer from "../footer/Footer";
import { useSelector } from "react-redux";
import { RootState } from "../../reducer";
import Header from "../header/Header";
import {
  NoticeTop,
  NoticeBody,
  Wrapper,
  BodyTop,
  NoticeList,
  dummy,
  BtnSection,
} from "../../components/notice/style";
import Link from "next/link";
import { formatDate } from "../../lib/factory";

function Index() {
  const agent = useSelector(
    (state: RootState) => state.config.identification.agent
  );
  const [isHead, setIsHead] = useState(false);
  const [paging, setPaging] = useState(1);
  const __changePaging = useCallback(
    (type: string) => {
      console.log(paging);
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
  useEffect(() => {
    document.addEventListener("scroll", __scrollHandle);
    return () => {
      document.removeEventListener("scroll", __scrollHandle);
    };
  }, [__scrollHandle]);
  return (
    <div>
      <Header agent={agent} isHead={isHead} />
      <NoticeTop>공지사항</NoticeTop>
      <NoticeBody>
        <Wrapper>
          <BodyTop>
            <div className="title">
              아주종합건설의 <br /> 다양한 소식을 만나보세요
            </div>
            <div className="search">
              <input type="text" placeholder="검색어를 입력해주세요" />
              <img src="/assets/grey-search.svg" alt="검색" />
            </div>
          </BodyTop>
          <NoticeList>
            {dummy.map(({ title, timestamp }, idx) => {
              return (
                <Link href={`/detail/notice-${idx}`} key={idx}>
                  <a className="card">
                    <div className="left">
                      <div className="num">{dummy.length - idx}</div>
                      <div className="title">{title}</div>
                    </div>
                    <div className="time">{formatDate(timestamp, ".")}</div>
                  </a>
                </Link>
              );
            })}
          </NoticeList>
          <BtnSection>
            <img
              src="/assets/left-arrow.svg"
              alt="뒤로가기"
              className="left"
              onClick={() => {
                __changePaging("minus");
              }}
            />
            <div className="page">
              <div className="now">{paging}</div>
              <div
                className="next"
                onClick={() => {
                  __changePaging("plus");
                }}
              >
                {paging + 1}
              </div>
            </div>
            <img
              src="/assets/right-arrow.svg"
              alt="더보기"
              className="right"
              onClick={() => {
                __changePaging("plus");
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

export default Index;
