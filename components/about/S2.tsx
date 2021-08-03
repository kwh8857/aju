import React, { useCallback, useEffect, useRef } from "react";

interface two {
  title: string;
  sub: string;
}

function S2({ s2, agent }: { s2: Array<two>; agent: string }) {
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
      <div className="title">
        <span>신용과 정직</span>이 바탕인 기업
      </div>
      <div className="content">
        {agent === "pc"
          ? " 고객과의 인연을 소중히 생각하며 기업의 이익에 앞서 신용과 정직을 바탕으로 고객에\n 대한 의무를 우선하는 윤리경영을 통하여 고객에게 신뢰받는 기업이 될 것을 약속드리며 \n 당사의 발전하는 모습을 지켜봐 주시고 격려해 주시기 바랍니다. \n 감사합니다."
          : agent === "tablet"
          ? " 고객과의 인연을 소중히 생각하며 기업의 이익에\n 앞서 신용과 정직을 바탕으로 고객에  대한 의무를 \n우선하는 윤리경영을 통하여 고객에게 신뢰받는\n 기업이 될 것을 약속드리며 당사의 발전하는 모습을 \n지켜봐 주시고 격려해 주시기 바랍니다. \n 감사합니다."
          : " 고객과의 인연을 소중히 생각하며 기업의 이익에 앞서 신용과 정직을 바탕으로 고객에  대한 의무를 우선하는 윤리경영을 통하여 고객에게 신뢰받는 기업이 될 것을 약속드리며 \n 당사의 발전하는 모습을 지켜봐 주시고 격려해 주시기 바랍니다. \n 감사합니다."}
        <br />
        <br /> <span>(주)아주산업개발 대표이사 전상현</span>
      </div>
      <div className="card-wrapper">
        {s2.map(({ title, sub }, idx) => {
          return (
            <div key={idx} className="card">
              <div className="card-title">{title}</div>
              <div className="card-sub">{sub}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default S2;
