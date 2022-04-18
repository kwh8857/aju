import React, { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
function S1({ agent }: { agent: string }) {
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
      ref={dom}
      style={{ opacity: 0, transform: "translate3d(0, 3%, 0)" }}
    >
      <div className="left">
        <div className="title">
          사소한 부분이라도 <br /> 내 집처럼 꼼꼼하게
        </div>
        {agent === "pc" ? <div className="grey-bar" /> : undefined}
        <div className="sub">
          저희 아주는 회사 설립 때부터 내 집, 내 공장을 <br /> 짓는다는
          창립이념을 바탕으로 어느 누구도 자신의 <br /> 집을 대충 짓지 않듯이
          고객의 입장에서 내 집을 <br /> 짓는다는 마음을 가지고 사소한
          부분이라도 대충
          <br /> 지나치지 않을 각오와 다짐으로 회사 상호를 <br /> 아주로
          정했습니다.
        </div>
      </div>
      <Image
        loading="eager"
        src={`/assets/about-s1${agent === "mobile" ? "mb" : ""}@3x.png`}
        width={agent !== "mobile" ? 588 : 193}
        height={agent !== "mobile" ? 222 : 437}
        alt="image"
        placeholder="blur"
        blurDataURL={`/assets/about-s1${agent === "mobile" ? "mb" : ""}.png`}
      />
    </div>
  );
}

export default S1;
