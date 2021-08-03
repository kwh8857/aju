import React, { useCallback, useEffect, useRef } from "react";
interface ArrType {
  title: string;
  sub: string;
}
interface S4Type {
  year: string;
  list: Array<ArrType>;
}
function S4({ s4, agent }: { s4: any; agent: string }) {
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
      <div className="left">
        <div className="step">주요연혁</div>
        <div className="title">
          아주종합건설 <br /> 주요연혁
        </div>
      </div>
      <div className="right">
        <hr className="dashed-bar" />
        {s4.map(({ year, list }: S4Type, idx: number) => {
          return (
            <div className="year-card" key={idx}>
              <div className="year-left">
                <div className="year">{year}</div>
                <hr className="white-bar" />
                <div className="white-circle" />
              </div>
              <div
                className={`month-list  ${
                  idx === 0 ? "one" : idx === 1 ? "two" : idx === 6 ? "six" : ""
                }`}
              >
                {list.map(({ title, sub }, idx) => {
                  return (
                    <div
                      className={`month-card ${
                        agent !== "pc" && idx !== list.length - 1 ? "point" : ""
                      }`}
                      key={idx}
                    >
                      <b>{title}</b>
                      <div className="month-sub">{sub} </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default S4;
