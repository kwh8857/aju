import React from "react";
import styled from "styled-components";

type cardProps = {
  title: string;
  image: string;
  sub: string;

  index: number;
};
const LeftCard = styled.div`
  width: 533px;
  height: 355px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  cursor: pointer;
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
`;
const RightCard = styled.div`
  width: 460px;
  height: 355px;
  background-color: red;
  position: relative;
  cursor: pointer;
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
`;
function MainCard({ title, image, sub, index }: cardProps) {
  const filt = index % 2;
  if (filt === 0) {
    return (
      <LeftCard
        style={{
          backgroundImage: `linear-gradient(to top, rgb(5,10,10),15%, rgba(84, 84, 84, 0)),url(${image});`,
        }}
      >
        <Bottom>
          <div className="title">{title}</div>
          <img src="/assets/white-plus.svg" alt="이동" />
        </Bottom>
      </LeftCard>
    );
  } else if (index === 1) {
    return (
      <SecondCard>
        <div className="title">
          아주종합건설 <br /> 공사실적
        </div>
        <div className="sub">
          어느 누구도 자신의 집을 대충 짓지 않듯이 <br /> 내 집처럼 고객의
          입장에서 함께합니다
        </div>
        <div className="btn">
          공사실적 전체보기
          <img src="/assets/card-shortarrow.svg" alt="arrow" />
        </div>
      </SecondCard>
    );
  } else {
    return (
      <RightCard
        style={{
          backgroundImage: `linear-gradient(to top, rgb(5,10,10),15%, rgba(84, 84, 84, 0)),url(${image});`,
          height: index === 5 ? "483px" : undefined,
        }}
      >
        <Bottom>
          <div className="title">{title}</div>
          <img src="/assets/white-plus.svg" alt="이동" />
        </Bottom>
      </RightCard>
    );
  }
}

export default MainCard;
