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
      <div className="title">(주)아주건설 {`\n`} 회사조직도</div>

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
            {arr1.map(({ title, sub }, idx) => {
              return (
                <div className="subject-wrapper" key={idx}>
                  <div className="team">{title}</div>
                  <div className="subject">{sub}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="box">
          <div className="red" />
          <div className="title">공사부</div>
          <hr />
          <div className="content">
            {arr2.map(({ title, sub }, idx) => {
              return (
                <div className="subject-wrapper" key={idx}>
                  <div className="team">{title}</div>
                  <div className="subject">{sub}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default S5;

const arr1 = [
  {
    title: "관리팀",
    sub: "총무/회계, 관급입찰, 하도급계약, 운영지원",
  },
  {
    title: "구매팀",
    sub: "구매 관리",
  },
  {
    title: "견적팀",
    sub: "도면접수, 견적작성",
  },
];

const arr2 = [
  {
    title: "공사팀",
    sub: "공사관리, 공사시공, 품질관리, 리모델링",
  },
  {
    title: "공무팀",
    sub: "외주관리, 엽업관리, 고객관리, 환경안전",
  },
  {
    title: "설계및디자인",
    sub: "도면설계, 3D",
  },
];
