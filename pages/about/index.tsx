import React from "react";
import styled from "styled-components";
import Footer from "../footer/Footer";
import { useSelector } from "react-redux";
import { RootState } from "../reducer";
import styles from "../../styles/Home.module.css";
import Header from "../header/Header";

const S2_Layout = [
  { title: "공장신축 및 개축공사", sub: "공장 / 창고 등의 조립식 건축공사" },

  { title: "상가 및 주택 신축공사", sub: "공장 / 창고 등의 조립식 건축공사" },

  {
    title: "기존 건축물 내외부 리모델링",
    sub: "공장 / 창고 등의 조립식 건축공사",
  },

  { title: "기타 토목공사", sub: "공장 / 창고 등의 조립식 건축공사" },

  { title: "부동산 개발업", sub: "공장 / 창고 등의 조립식 건축공사" },

  { title: "부동산 임대업", sub: "공장 / 창고 등의 조립식 건축공사" },
];
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
`;
const Top = styled.div`
  padding-top: 144px;
  box-sizing: border-box;
  width: 100%;
  height: 230px;
  background-image: url("/assets/about-top.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: -webkit-image-set(
    url("/assets/about-top@2x.jpg") 2x,
    url("/assets/about-top@3x.jpg") 3x
  );
  .title {
    font-size: 30px;
    font-weight: bold;
    color: white;
    text-align: center;
  }
`;

const Section1 = styled.div`
  height: 535px;
  display: flex;
  width: 993px;
  margin: 0 auto;
  align-items: center;
  .left {
    .title {
      font-size: 32px;
      font-weight: bold;
      line-height: 1.5;
    }
    .grey-bar {
      width: 405px;
      height: 1px;
      background-color: #bfbfbf;
      margin-top: 24.5px;
      margin-bottom: 16.5px;
    }
    .sub {
      font-size: 15px;
      color: #434343;
      line-height: 1.73;
    }
  }
  img {
    width: 588px;
    height: 222px;
  }
`;

const Section2 = styled.div`
  background-image: url("/assets/about-s2.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: -webkit-image-set(
    url("/assets/about-s2@2x.jpg") 2x,
    url("/assets/about-s2@3x.jpg") 3x
  );
  width: 100%;
  height: 763px;
  .wrapper {
    width: 993px;
    height: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    padding-top: 107px;
    .title {
      font-size: 32px;
      font-weight: bold;
      span {
        color: #a50006;
      }
    }
    .content {
      margin-top: 18px;
      font-size: 15px;
      font-weight: normal;
      line-height: 1.73;
      span {
        font-weight: bold;
      }
    }
    .card-wrapper {
      margin-top: 64px;
      display: grid;
      grid-template-columns: repeat(3, 321px);
      row-gap: 16px;
      column-gap: 14px;
      .card {
        background-color: white;
        width: 100%;
        height: 147px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        .card-title {
          font-size: 23px;
          font-weight: bold;
        }
        .card-sub {
          margin-top: 4px;
          font-size: 16px;
        }
      }
    }
  }
`;
function index() {
  const agent = useSelector(
    (state: RootState) => state.config.identification.agent
  );
  return (
    <Wrapper>
      <Header agent={agent} />
      <Top>
        <div className="title">회사소개</div>
      </Top>
      <Section1>
        <div className="left">
          <div className="title">
            사소한 부분이라도 <br /> 내 집처럼 꼼꼼하게
          </div>
          <div className="grey-bar" />
          <div className="sub">
            저희 아주는 회사 설립 때부터 내 집, 내 공장을 짓는
            <br /> 다는 창립이념을 바탕으로 어느 누구도 자신의 집을 <br /> 대충
            짓지 않듯이 고객의 입장에서 내 집을 짓는다는 <br /> 마음을 가지고
            사소한 부분이라도 대충 지나치지 않<br /> 을 각오와 다짐으로 회사
            상호를 아주로 정했습니다.
          </div>
        </div>
        <img
          src="/assets/about-s1.png"
          srcSet="/assets/about-s1@2x.png 2x ,/assets/about-s1@3x.png 3x"
          alt="image"
        />
      </Section1>
      <Section2>
        <div className="wrapper">
          <div className="title">
            <span>신용과 정직</span>이 바탕인 기업
          </div>
          <div className="content">
            고객과의 인연을 소중히 생각하며 기업의 이익에 앞서 신용과 정직을
            바탕으로 고객에 <br /> 대한 의무를 우선하는 윤리경영을 통하여
            고객에게 신뢰받는 기업이 될 것을 약속드리며 <br /> 당사의 발전하는
            모습을 지켜봐 주시고 격려해 주시기 바랍니다. <br /> 감사합니다.{" "}
            <br />
            <br /> <span>(주)아주산업개발 대표이사 전상현</span>
          </div>
          <div className="card-wrapper">
            {S2_Layout.map(({ title, sub }, idx) => {
              return (
                <div key={idx} className="card">
                  <div className="card-title">{title}</div>
                  <div className="card-sub">{sub}</div>
                </div>
              );
            })}
          </div>
        </div>
      </Section2>
      <footer className={styles.footer}>
        <Footer agent={agent} />
      </footer>
    </Wrapper>
  );
}

export default index;
