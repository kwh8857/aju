import React, { useCallback, useEffect, useRef } from "react";

interface three {
  title: string;
  sub: string;
}

function S3({ s3 }: { s3: Array<three> }) {
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
      style={{ opacity: 0, transform: "translate3d(0, 5%, 0)" }}
    >
      <div className="left">
        <div className="top">회사개요</div>
        <div className="title">회사개요</div>
      </div>
      <div className="right">
        {s3.map(({ title, sub }, idx) => {
          return (
            <div
              key={idx}
              className={`${
                idx === 0 ? "card one" : idx === 5 ? "card five" : "card"
              }`}
            >
              <div className="card-title">{title}</div>
              <div className="card-sub">{sub}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default S3;
