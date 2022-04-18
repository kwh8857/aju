import React, { useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
function Card({
  title,
  sub,
  url,
  resize,
  timestamp,
}: {
  title: string;
  sub: string;
  url: string;
  resize: string;
  timestamp: number;
}) {
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
    <Link href={`/detail/portfolio-${timestamp}`}>
      <a>
        <div
          className="card"
          ref={dom}
          style={{ opacity: 0, transform: "translate3d(0, 30%, 0)" }}
        >
          <div className="back">
            <Image
              src={url}
              quality={30}
              priority={true}
              className="img-wrapper"
              layout="fill"
              objectFit="cover"
              loading="eager"
              objectPosition="center"
              sizes="(max-width: 767px) 480px,(max-width: 1365px)720Px ,993px"
              placeholder="blur"
              blurDataURL={resize}
            />
          </div>
          <div className="title">{title}</div>
        </div>
      </a>
    </Link>
  );
}

export default Card;
