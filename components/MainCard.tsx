import React, { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

type cardProps = {
  title: string;
  image: {
    url:string;
    resize:string;
  };
  sub: string;
  agent: string;
  index: number;
  state:string;
  timestamp:number;
};
const LeftCard = styled.div`

  width: 100%;
  height: 355px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  cursor: pointer;
  z-index: 2;
  .image-wrapper {
    & > div {
      background-image: linear-gradient(
        to top,
        rgb(5, 10, 10),
        15%,
        rgba(84, 84, 84, 0)
      );
    }
   &> div:hover{
        background-image: linear-gradient(
        to top,
        rgb(5, 10, 10),
        40%,
        rgba(84, 84, 84, 0)
      );
   }
    img {
      z-index: -1;
    }
  }

  @media screen and (max-width: 1365px) {
    height: 240px;
  }
`;
const SecondCard = styled.div`
  padding: 74.2px 0 69px 55px;
  box-sizing: border-box;
  .title {
    font-size: 26px;
    font-weight: bold;
    line-height: 1.42;
  }
  .sub {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    margin-top: 8px;
  }
  .btn {
    width: 163px;
    height: 46px;
    background-color: #a50006;
    margin-top: 35.8px;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: white;
    font-weight: normal;
    padding: 0 13.6px;
    box-sizing: border-box;
    cursor: pointer;
    justify-content: space-between;
  }
  @media screen and (max-width: 1365px) {
    padding: 0 0 51px 46px;
    height: 240px;
    .title {
      font-size: 24px;
      line-height: 1.33;
    }
    .sub {
      margin-top: 13px;
      font-size: 14px;
      line-height: 1.71;
    }
    .btn {
      margin-top: 19px;
    }
  }
  @media screen and (max-width: 767px) {
    padding: unset;
    height: 355px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .sub {
      margin-top: 14px;
    }
    .btn {
      margin-top: 21px;
    }
  }
`;
const RightCard = styled.div`
  width: 100%;
  height: 355px;
  position: relative;
  cursor: pointer;
  z-index: 2;
  .image-wrapper {
    & > div {
      background-image: linear-gradient(
        to top,
        rgb(5, 10, 10),
        15%,
        rgba(84, 84, 84, 0)
      );
    }
   &> div:hover{
        background-image: linear-gradient(
        to top,
        rgb(5, 10, 10),
        40%,
        rgba(84, 84, 84, 0)
      );
   }
    img {
      z-index: -1;
    }
  }
  @media screen and (max-width: 1365px) {
    height: 278px;
  }
  @media screen and (max-width: 767px) {
    height: 240px;
  }
`;
const Bottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  padding: 0 22px 23px 22px;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  .title {
    color: white;
    font-size: 18px;
    font-weight: bold;
  }
  @media screen and (max-width: 1365px) {
    padding: 0 20px 18px 21px;
    .title {
      font-size: 14px;
    }
    img {
      width: 29px;
    }
  }
`;
function MainCard({ title, image, sub, index, agent,state,timestamp }: cardProps) {
  const filt = index % 2;
      const dom = useRef<HTMLDivElement>(null);

      const handleScroll = useCallback(
    ([entry]) => {
      const {current} = dom
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
    let observer :any;
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
  }, [handleScroll,dom]);
  if (filt === 0 && sub.length === 0) {
    return (
      <div ref={dom} style={{  opacity: 0,
      transform: "translate3d(0, 30%, 0)",}}>
        <Link href={`/detail/${state}-${timestamp}`}>
        <a >
          <LeftCard
            style={{
              transform:
                agent === "tablet" && index === 4
                  ? `translateY(-38px)`
                  : undefined,
            }}
          >
            <div className="image-wrapper">
              <Image
                 loading='eager'
                className="test"
                src={image.url}
                sizes="(max-width: 1365px)360Px ,533px"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                placeholder="blur"
                blurDataURL={image.resize}
               quality={30}
              />
            </div>
            <Bottom>
              <div className="title">{title}</div>
              <img src="/assets/white-plus.svg" alt="이동" />
            </Bottom>
          </LeftCard>
        </a>
      </Link>
      </div>
    );
  } else if (sub.length > 1) {
    return (
      <div ref={dom} style={{  opacity: 0,
      transform: "translate3d(0, 30%, 0)",}}>
      <SecondCard >
        <div className="title">
          아주종합건설 <br /> 공사실적
        </div>
        <div className="sub">
          어느 누구도 자신의 집을 대충 짓지 않듯이 <br /> 내 집처럼 고객의
          입장에서 함께합니다
        </div>
        <Link href="/history">
          <a className="btn">
            공사실적 전체보기
            <img src="/assets/card-shortarrow.svg" alt="arrow" />
          </a>
        </Link>
      </SecondCard>
      </div>

    );
  } else {
    return (
      <div ref={dom} style={{  opacity: 0,
      transform: "translate3d(0, 30%, 0)",}}>
        <Link href={`/detail/${state}-${timestamp}`}>
        <a >
          <RightCard
            style={{
              height:
                index === 5
                  ? agent === "pc"
                    ? "483px"
                    : "378px"
                  : index === 3 && agent === "mobile"
                  ? "278px"
                  : undefined,
            }}
          >
            <div className="image-wrapper">
              <Image
                loading='eager'
                src={image.url}
                layout="fill"
                quality={30}
                objectFit="cover"
                objectPosition="center"
                sizes="(max-width: 1365px)360Px ,533px"
                placeholder="blur"
                blurDataURL={image.resize}
              />
            </div>
            <Bottom>
              <div className="title">{title}</div>
              <img src="/assets/white-plus.svg" alt="이동" />
            </Bottom>
          </RightCard>
        </a>
      </Link>
      </div>
    );
  }
}

export default MainCard;
