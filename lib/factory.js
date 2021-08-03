export function formatDate(date, type) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();
  if (parseInt(month) < 10) month = "0" + month;
  if (parseInt(day) < 10) day = "0" + day;
  return [year, month, day].join(type);
}

// import { useRef, useCallback, useEffect } from "react";

// export const useScrollFadeIn = (delay) => {
//   const dom = useRef();

//   const handleScroll = useCallback(
//     ([entry]) => {
//       const { current } = dom;
//       if (entry.isIntersecting) {
//         current.style.transitionProperty = "opacity ,transform";
//         current.style.transitionDuration = "0.7s";
//         current.style.transitionTimingFunction = "ease";
//         current.style.transitionDelay = `${delay}s`;
//         current.style.opacity = 1;
//         current.style.transform = "translate3d(0, 0, 0)";
//       }
//     },
//     [dom, delay]
//   );

//   useEffect(() => {
//     let observer;
//     const { current } = dom;

//     if (current) {
//       observer = new IntersectionObserver(handleScroll, {
//         threshold: 0.2,
//         root: null,
//         rootMargin: "0px.",
//       });
//       observer.observe(current);

//       return () => observer && observer.disconnect();
//     }
//   }, [handleScroll]);

//   return {
//     ref: dom,
//     style: {
//       opacity: 0,
//       transform: "translate3d(0, 30%, 0)",
//     },
//   };
// };
