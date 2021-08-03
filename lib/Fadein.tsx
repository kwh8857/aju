import { useRef, useCallback, useEffect } from "react";

export const useScrollFadeIn = (delay: number) => {
  const dom = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(
    ([entry]) => {
      const { current } = dom;
      if (current && entry.isIntersecting) {
        current.style.transitionProperty = "opacity ,transform";
        current.style.transitionDuration = "0.7s";
        current.style.transitionTimingFunction = "ease";
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = "1";
        current.style.transform = "translate3d(0, 0, 0)";
      }
    },
    [dom, delay]
  );

  useEffect(() => {
    let observer: any;
    const { current } = dom;

    observer = new IntersectionObserver(handleScroll, {
      threshold: 0.3,
      root: null,
      rootMargin: "0px",
    });
    observer.observe(current);

    return () => observer && observer.disconnect();
  }, [handleScroll]);

  return {
    ref: dom,
    style: {
      opacity: 0,
      transform: "translate3d(0, 10%, 0)",
    },
  };
};
