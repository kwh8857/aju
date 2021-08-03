import React, { useCallback, useEffect, useRef } from "react";
function S5({ agent }: { agent: string }) {
  const dom = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(
    ([entry]) => {
      const { current } = dom;
      if (current && entry.isIntersecting) {
        current.style.transitionProperty = "opacity ,transform";
        current.style.transitionDuration = "0.7s";
        current.style.transitionTimingFunction = "ease";
        current.style.transitionDelay = `0.2s`;
        current.style.opacity = "1";
        current.style.transform = "translate3d(0, 0, 0)";
      }
    },
    [dom]
  );

  useEffect(() => {
    let observer: any;
    const { current } = dom;
    if (current) {
      observer = new IntersectionObserver(handleScroll, {
        threshold: 0.2,
        root: null,
        rootMargin: "0px",
      });
      observer.observe(current);

      return () => observer && observer.disconnect();
    }
  }, [handleScroll, dom]);
  return (
    <div
      className="wrapper"
      style={{ opacity: 0, transform: "translate3d(0, 5%, 0)" }}
      ref={dom}
    >
      <div className="top">조직도</div>
      <div className="title">아주종합건설 {`\n`} 회사조직도</div>

      <img
        src={`/assets/about-s5${agent === "mobile" ? "mb" : ""}.png`}
        srcSet={`/assets/about-s5${
          agent === "mobile" ? "mb" : agent === "tablet" ? "tb" : ""
        }@2x.png 2x ,/assets/about-s5${
          agent === "mobile" ? "mb" : agent === "tablet" ? "tb" : ""
        }@3x.png 3x`}
        alt="image"
        className="image"
      />

      <div className="bottom">
        <div className="box">
          <div className="red" />
          <div className="title">관리부</div>
          <hr />
          <div className="content">
            {agent === "pc"
              ? "저희 아주는 회사 설립 때부터 내 집, 내 공장을 짓는다는 창립이념을 바탕으로 어느 누구도 자신의 집을 대충 짓지 않듯이 고객의 입\n장에서 내 집을 짓는다는 마음을 가지고 사소한 부분이라도 대충 지나치지 않을 각오와 다짐으로 회사 상호를 아주로 정했습니다."
              : "저희 아주는 회사 설립 때부터 내 집, 내 공장을 짓는다\n는 창립이념을 바탕으로 어느 누구도 자신의 집을 대충\n 짓지 않듯이 고객의 입장에서 내 집을 짓는다는 마음을\n 가지고 사소한 부분이라도 대충 지나치지 않을 각오와\n 다짐으로 회사 상호를 아주로 정했습니다."}
          </div>
        </div>
        <div className="box">
          <div className="red" />
          <div className="title">공사부</div>
          <hr />
          <div className="content">
            {agent === "pc"
              ? "저희 아주는 회사 설립 때부터 내 집, 내 공장을 짓는다는 창립이념을 바탕으로 어느 누구도 자신의 집을 대충 짓지 않듯이 고객의 입\n장에서 내 집을 짓는다는 마음을 가지고 사소한 부분이라도 대충 지나치지 않을 각오와 다짐으로 회사 상호를 아주로 정했습니다."
              : "저희 아주는 회사 설립 때부터 내 집, 내 공장을 짓는다\n는 창립이념을 바탕으로 어느 누구도 자신의 집을 대충\n 짓지 않듯이 고객의 입장에서 내 집을 짓는다는 마음을\n 가지고 사소한 부분이라도 대충 지나치지 않을 각오와\n 다짐으로 회사 상호를 아주로 정했습니다."}
          </div>
        </div>
      </div>
    </div>
  );
}

export default S5;
