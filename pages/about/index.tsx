import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import Footer from "../footer/Footer";
import { useSelector } from "react-redux";
import { RootState } from "../../reducer";
import styles from "../../styles/Home.module.css";
import Header from "../header/Header";
import { server } from "../../components/config/config";
import { useRouter } from "next/dist/client/router";

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
  @media screen and (max-width: 767px) {
    .title {
      font-size: 24px;
    }
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
  @media screen and (max-width: 1365px) {
    width: 720px;
    height: 739px;
    flex-direction: column;
    text-align: center;
    padding-top: 82px;
    box-sizing: border-box;
    .left {
      .title {
        font-size: 26px;
      }
      .sub {
        margin-top: 19px;
        line-height: 1.87;
        margin-bottom: 55px;
      }
    }
  }
  @media screen and (max-width: 767px) {
    width: 320px;
    height: 855px;
    .left {
      .sub {
        line-height: 1.87;
        margin-bottom: 35px;
      }
    }
    img {
      width: 190px;
      height: 437px;
    }
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
      white-space: pre-line;
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
  @media screen and (max-width: 1365px) {
    height: 998px;
    .wrapper {
      width: 720px;
      padding-top: 91px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      .title {
        font-size: 26px;
      }
      .card-wrapper {
        margin-top: 68px;
        grid-template-columns: repeat(2, 321px);
        row-gap: 25px;
        column-gap: 25px;
      }
    }
  }
  @media screen and (max-width: 767px) {
    height: 1493px;
    .wrapper {
      width: 320px;
      .content {
        margin-top: 20px;
      }
      .card-wrapper {
        margin-top: 68px;
        grid-template-columns: 321px;
        row-gap: 21px;
      }
    }
  }
`;

const Section3 = styled.div`
  height: auto;
  width: 100%;
  background-color: white;
  .wrapper {
    padding-top: 73.3px;
    padding-bottom: 68.3px;
    height: 100%;
    width: 993px;
    margin: 0 auto;
    display: flex;
    .left {
      margin-right: 67px;
      white-space: nowrap;
      .top {
        width: 94px;
        height: 31px;
        background-color: #a50006;
        font-size: 14px;
        font-weight: bold;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .title {
        font-size: 32px;
        font-weight: bold;
        margin-top: 15px;
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      .card {
        padding: 9px 0;
        border-bottom: solid 1px #afafaf;
        display: flex;
        width: 812.5px;
        align-items: center;
        .card-title {
          width: 157px;
          text-align: center;
          font-size: 12px;
          font-weight: bold;
        }
        .card-sub {
          font-size: 12px;
          white-space: pre-line;
        }
      }
      .five {
        padding-bottom: 26.3px;
        padding-top: 18.7px;
        .card-sub {
          line-height: 1.92;
        }
      }
      .one {
        border-top: solid 2px #434343;
      }
    }
  }
  @media screen and (max-width: 1365px) {
    .wrapper {
      width: 720px;
      flex-direction: column;
      align-items: center;
      .left {
        margin-right: 0;
        margin-bottom: 20px;
        .title {
          font-size: 25px;
          margin-top: 13px;
        }
      }
      .right {
        .card {
          width: 320px;
          .card-title {
            width: 130px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    .wrapper {
      width: 320px;
    }
  }
`;
const Section4 = styled.div`
  width: 100%;
  height: 974px;
  background-image: url("/assets/about-s3.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: -webkit-image-set(
    url("/assets/about-s3@2x.jpg") 2x,
    url("/assets/about-s3@3x.jpg") 3x
  );
  .wrapper {
    width: 993px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    padding-top: 159.2px;
    box-sizing: border-box;
    .left {
      transform: translateY(-45px);
      color: white;
      .step {
        width: 94px;
        height: 31px;
        background-color: #a50006;
        font-size: 14px;
        font-weight: bold;

        display: flex;
        align-items: center;
        justify-content: center;
      }
      .title {
        line-height: 1.5;
        margin-top: 9.2px;
        font-size: 32px;
        font-weight: bold;
      }
    }
    .right {
      position: relative;
      width: 597px;
      color: white;
      margin-left: 161px;
      .dashed-bar {
        top: 15px;
        position: absolute;
        left: 156.3px;
        border: none;
        height: 540px;
        border-left: 1px dashed white;
      }
      .year-card {
        display: flex;
        align-items: start;
        .year-left {
          display: flex;
          align-items: center;
          .year {
            font-size: 26px;
            font-weight: bold;
            margin-right: 13px;
          }
          .white-bar {
            height: 1px;
            width: 57px;
            border: none;
            border-top: 1px solid white;
            margin: unset;
          }
          .white-circle {
            width: 12px;
            height: 12px;
            border-radius: 12px;
            background-color: white;
            margin-left: 20px;
          }
        }
        .month-list {
          padding-top: 5px;
          box-sizing: border-box;
          margin-left: 26px;
          margin-bottom: 64.7px;
          .month-card {
            font-size: 16px;

            display: flex;
            b {
              width: 50px;
            }
            .month-sub {
              line-height: 1.63;
              font-weight: normal;
              white-space: nowrap;
            }
          }
        }
        .one {
          margin-bottom: 63px;
        }
        .two {
          margin-bottom: 37.5px;
        }
        .six {
          margin-bottom: 0;
        }
      }
    }
  }
  @media screen and (max-width: 1365px) {
    height: 1182px;
    .wrapper {
      width: 720px;
      flex-direction: column;
      align-items: center;
      padding-top: 85px;

      .left {
        text-align: center;
        transform: unset;
        display: flex;
        flex-direction: column;
        align-items: center;
        .step {
          width: 96px;
        }
        .title {
          font-size: 25px;
          margin-top: 17px;
        }
      }
      .right {
        width: 320px;
        margin-left: 0;
        margin-top: 72.5px;
        .dashed-bar {
          top: 10px;
          left: 113px;
          height: 628px;
        }
        .year-card {
          .year-left {
            .year {
              font-size: 20px;
              margin-right: 10px;
            }
            .white-bar {
              width: 40px;
            }
            .white-circle {
              margin-left: 10px;
            }
          }
          .month-list {
            margin-left: 8px;
            margin-bottom: 51.5px;
            .month-card {
              font-size: 13px;
              display: flex;
              b {
                width: 38px;
              }
              .month-sub {
                width: 187px;
                line-height: 1.54;
                white-space: pre-line;
              }
            }
            .point {
              margin-bottom: 10px;
            }
          }
          .one {
            margin-bottom: 51.5px;
          }
          .two {
            margin-bottom: 52px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    .wrapper {
      width: 320px;
    }
  }
`;
const Section5 = styled.div`
  width: 100%;
  background-color: #f7f7f7;
  height: 1122px;
  .wrapper {
    padding-top: 131px;
    box-sizing: border-box;
    width: 993px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    .top {
      background-color: #a50006;
      width: 94px;
      height: 31px;
      color: white;
      font-size: 14px;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 7.2px;
    }
    .title {
      font-size: 28px;
      font-weight: bold;
      white-space: nowrap;
    }
    .image {
      width: 790px;
      height: 275px;
    }
    .bottom {
      margin-top: 80px;
      display: grid;
      row-gap: 14px;
      .box {
        position: relative;
        white-space: nowrap;
        padding-left: 62px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        width: 993px;
        height: 130px;
        border-radius: 10px;
        background-color: white;
        overflow: hidden;
        .red {
          position: absolute;
          left: 0;
          width: 9px;
          height: 100%;
          background-color: #a50006;
        }
        .title {
          font-size: 26px;
          font-weight: bold;
        }
        hr {
          height: 85px;
          margin-top: 0;
          margin-bottom: 0;
          margin-left: 52px;
          margin-right: 32px;
          width: 1px;
        }
        .content {
          font-size: 14px;
          white-space: pre-line;
          font-weight: normal;
          line-height: 1.73;
          color: #434343;
        }
      }
    }
  }
  @media screen and (max-width: 1365px) {
    height: 1040px;
    .wrapper {
      padding-top: 114px;
      width: 720px;
      .top {
        margin-bottom: 17px;
      }
      .title {
        font-size: 25px;
        text-align: center;
        white-space: pre-line;
      }
      .image {
        width: 674px;
        height: 235px;
        margin-top: 53px;
      }
      .bottom {
        margin-top: 85px;
        column-gap: 25px;
        grid-template-columns: 320px 320px;
        .box {
          white-space: nowrap;
          padding-left: 0;
          padding-top: 26px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 320px;
          height: 228px;
          .red {
            position: absolute;
            top: 0;
            width: 100%;
            height: 9px;
          }
          .title {
            font-size: 18px;
          }
          hr {
            height: 1px;
            margin: 13.5px 0px;
            width: 285px;
          }
          .content {
            font-size: 13px;
            line-height: 1.71;
          }
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    height: 1550px;
    .wrapper {
      width: 320px;
      .top {
        margin-bottom: 17px;
      }
      .title {
        font-size: 25px;
      }
      .image {
        width: 245px;
        height: 505px;
      }
      .bottom {
        margin-top: 113px;
        grid-template-columns: 320px;
        row-gap: 17px;
        .box {
          position: relative;
          white-space: nowrap;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          width: 320px;
          height: 228px;
          .red {
            left: 0;
            top: 0;
            width: 100%;
            height: 9px;
          }
        }
      }
    }
  }
`;
interface ArrType {
  title: string;
  sub: string;
}
interface S4Type {
  year: string;
  list: Array<ArrType>;
}
type propType = {
  s2: Array<ArrType>;
  s3: Array<ArrType>;
  s4: Array<S4Type>;
};

export async function getStaticProps() {
  const res = await fetch(`/api/hello`);
  const result = await res.json();
  return { props: { s2: result.s2, s3: result.s3, s4: result.s4 } };
}

function Index({ s2, s3, s4 }: propType) {
  const route = useRouter();
  const agent = useSelector(
    (state: RootState) => state.config.identification.agent
  );
  const [isHead, setIsHead] = useState(false);
  const __scrollHandle = useCallback(() => {
    if (window.scrollY <= 157) {
      if (isHead) {
        setIsHead(false);
      }
    }
    if (window.scrollY >= 158) {
      if (!isHead) {
        setIsHead(true);
      }
    }
  }, [isHead]);
  useEffect(() => {
    document.addEventListener("scroll", __scrollHandle);
    return () => {
      document.removeEventListener("scroll", __scrollHandle);
    };
  }, [__scrollHandle]);
  if (route.isFallback) {
    return <div></div>;
  }
  return (
    <Wrapper>
      <Header agent={agent} isHead={isHead} />
      <Top>
        <div className="title">회사소개</div>
      </Top>
      <Section1>
        <div className="left">
          <div className="title">
            사소한 부분이라도 <br /> 내 집처럼 꼼꼼하게
          </div>
          {agent === "pc" ? <div className="grey-bar" /> : undefined}
          <div className="sub">
            저희 아주는 회사 설립 때부터 내 집, 내 공장을 짓는
            <br /> 다는 창립이념을 바탕으로 어느 누구도 자신의 집을 <br /> 대충
            짓지 않듯이 고객의 입장에서 내 집을 짓는다는 <br /> 마음을 가지고
            사소한 부분이라도 대충 지나치지 않<br /> 을 각오와 다짐으로 회사
            상호를 아주로 정했습니다.
          </div>
        </div>
        <img
          src={`/assets/about-s1${agent === "mobile" ? "mb" : ""}.png`}
          srcSet={`/assets/about-s1${
            agent === "mobile" ? "mb" : ""
          }@2x.png 2x ,/assets/about-s1${
            agent === "mobile" ? "mb" : ""
          }@3x.png 3x`}
          alt="image"
        />
      </Section1>
      <Section2>
        <div className="wrapper">
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
      </Section2>
      <Section3>
        <div className="wrapper">
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
      </Section3>
      <Section4>
        <div className="wrapper">
          <div className="left">
            <div className="step">주요연혁</div>
            <div className="title">
              아주종합건설 <br /> 주요연혁
            </div>
          </div>
          <div className="right">
            <hr className="dashed-bar" />
            {s4.map(({ year, list }: S4Type, idx) => {
              return (
                <div className="year-card" key={idx}>
                  <div className="year-left">
                    <div className="year">{year}</div>
                    <hr className="white-bar" />
                    <div className="white-circle" />
                  </div>
                  <div
                    className={`month-list  ${
                      idx === 0
                        ? "one"
                        : idx === 1
                        ? "two"
                        : idx === 6
                        ? "six"
                        : ""
                    }`}
                  >
                    {list.map(({ title, sub }, idx) => {
                      return (
                        <div
                          className={`month-card ${
                            agent !== "pc" && idx !== list.length - 1
                              ? "point"
                              : ""
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
      </Section4>
      <Section5>
        <div className="wrapper">
          <div className="top">조직도</div>
          <div className="title">아주종합건설 {`\n`} 회사조직도</div>

          <img
            src={`/assets/about-s5${agent === "mobile" ? "mb" : ""}.png`}
            srcSet={`/assets/about-s5${
              agent === "mobile" ? "mb" : ""
            }@2x.png 2x ,/assets/about-s5${
              agent === "mobile" ? "mb" : ""
            }@3x.png 3x`}
            alt="image"
            className="image"
          />

          <div className="bottom">
            <div className="box">
              <div className="red" />
              <div className="title">관리부</div>
              <hr />
              <div className="content">
                {agent === "pc"
                  ? "저희 아주는 회사 설립 때부터 내 집, 내 공장을 짓는다는 창립이념을 바탕으로 어느 누구도 자신의 집을 대충 짓지 않듯이 고객의 입\n장에서 내 집을 짓는다는 마음을 가지고 사소한 부분이라도 대충 지나치지 않을 각오와 다짐으로 회사 상호를 아주로 정했습니다."
                  : "저희 아주는 회사 설립 때부터 내 집, 내 공장을 짓는다\n는 창립이념을 바탕으로 어느 누구도 자신의 집을 대충\n 짓지 않듯이 고객의 입장에서 내 집을 짓는다는 마음을\n 가지고 사소한 부분이라도 대충 지나치지 않을 각오와\n 다짐으로 회사 상호를 아주로 정했습니다."}
              </div>
            </div>
            <div className="box">
              <div className="red" />
              <div className="title">공사부</div>
              <hr />
              <div className="content">
                {agent === "pc"
                  ? "저희 아주는 회사 설립 때부터 내 집, 내 공장을 짓는다는 창립이념을 바탕으로 어느 누구도 자신의 집을 대충 짓지 않듯이 고객의 입\n장에서 내 집을 짓는다는 마음을 가지고 사소한 부분이라도 대충 지나치지 않을 각오와 다짐으로 회사 상호를 아주로 정했습니다."
                  : "저희 아주는 회사 설립 때부터 내 집, 내 공장을 짓는다\n는 창립이념을 바탕으로 어느 누구도 자신의 집을 대충\n 짓지 않듯이 고객의 입장에서 내 집을 짓는다는 마음을\n 가지고 사소한 부분이라도 대충 지나치지 않을 각오와\n 다짐으로 회사 상호를 아주로 정했습니다."}
              </div>
            </div>
          </div>
        </div>
      </Section5>
      <footer className={styles.footer}>
        <Footer agent={agent} />
      </footer>
    </Wrapper>
  );
}

export default Index;
