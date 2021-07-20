import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

type cardProps = {
  title: string;
  image: string;
  sub: string;
  agent: string;
  index: number;
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
function MainCard({ title, image, sub, index, agent }: cardProps) {
  const filt = index % 2;
  if (filt === 0 && sub.length === 0) {
    return (
      <Link href={`/detail/history-${index}`}>
        <a>
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
                className="test"
                src={image}
                sizes="(max-width: 1365px)360Px ,533px"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                placeholder="blur"
                blurDataURL="https://us.123rf.com/450wm/jakkapan/jakkapan1604/jakkapan160400006/54923627-%EC%B6%94%EC%83%81-%ED%9A%8C%EC%83%89-%EB%B0%B0%EA%B2%BD-%EB%AA%A8%EC%85%98-%EB%B8%94%EB%9F%AC-%ED%9A%A8%EA%B3%BC.jpg?ver=6"
              />
            </div>
            <Bottom>
              <div className="title">{title}</div>
              <img src="/assets/white-plus.svg" alt="이동" />
            </Bottom>
          </LeftCard>
        </a>
      </Link>
    );
  } else if (sub.length > 1) {
    return (
      <SecondCard>
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
    );
  } else {
    return (
      <Link href={`/detail/history-${index}`}>
        <a>
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
                src={image}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                sizes="(max-width: 1365px)360Px ,533px"
                placeholder="blur"
                blurDataURL="https://us.123rf.com/450wm/jakkapan/jakkapan1604/jakkapan160400006/54923627-%EC%B6%94%EC%83%81-%ED%9A%8C%EC%83%89-%EB%B0%B0%EA%B2%BD-%EB%AA%A8%EC%85%98-%EB%B8%94%EB%9F%AC-%ED%9A%A8%EA%B3%BC.jpg?ver=6"
              />
            </div>
            <Bottom>
              <div className="title">{title}</div>
              <img src="/assets/white-plus.svg" alt="이동" />
            </Bottom>
          </RightCard>
        </a>
      </Link>
    );
  }
}

export default MainCard;
