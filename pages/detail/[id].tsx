import React, { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import { useSelector } from "react-redux";
import { RootState } from "../../reducer";
import Header from "../header/Header";
import { Top } from "../../components/history/style";
import { NoticeTop } from "../../components/notice/style";
function Detail() {
  const route = useRouter();
  const { id } = route.query;

  const type = id?.toString().split("-")[0];
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
      {type === "history" ? (
        <Top>공사실적</Top>
      ) : (
        <NoticeTop>공지사항</NoticeTop>
      )}
    </div>
  );
}

export default Detail;
