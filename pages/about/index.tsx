import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import { useSelector } from "react-redux";
import { RootState } from "../../reducer";
import styles from "../../styles/Home.module.css";
import Header from "../header/Header";
// import { server } from "../../components/config/config";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import S1 from "../../components/about/S1";
import S2 from "../../components/about/S2";
import S3 from "../../components/about/S3";
import S4 from "../../components/about/S4";
import S5 from "../../components/about/S5";
import S6 from "../../components/about/S6";

const Wrapper = styled.div`
  background-color: white;
  overflow: hidden;
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
  width: 100%;
  background-color: white;
  .wrapper {
    width: 993px;
    height: 100%;
    margin: 0 auto;
    align-items: center;
    background-color: white;
    display: flex;
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
  }
  @media screen and (max-width: 1365px) {
    height: 739px;
    .wrapper {
      width: 720px;
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
  }
  @media screen and (max-width: 767px) {
    height: 905px;
    .wrapper {
      width: 320px;
      .left {
        .sub {
          line-height: 1.87;
          margin-bottom: 35px;
        }
      }
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
  height: 420px;
  .wrapper {
    width: 993px;
    height: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    /* .card-wrapper {
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
    } */
  }
  @media screen and (max-width: 1365px) {
    height: 450px;
    .wrapper {
      width: 720px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      .title {
        font-size: 26px;
      }
      /* .card-wrapper {
        margin-top: 68px;
        grid-template-columns: repeat(2, 321px);
        row-gap: 25px;
        column-gap: 25px;
      } */
    }
  }
  @media screen and (max-width: 767px) {
    height: 460px;
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
      display: grid;
      column-gap: 44.2px;
      grid-template-columns: repeat(2, 365.8px);
      & > .card-wrapper {
        display: flex;
        flex-direction: column;
        .card {
          padding: 10px 0;
          border-bottom: solid 1px #afafaf;
          display: flex;
          width: 100%;
          align-items: center;
          column-gap: 42.4px;
          .card-title {
            width: 100px;
            text-align: center;
            font-size: 13px;
            font-weight: bold;
            white-space: nowrap;
          }
          .card-sub {
            font-size: 13px;
            white-space: pre-line;
            line-height: 1.92;
          }
        }
        & > .six {
          border-bottom: unset;
        }
        .one {
          border-top: solid 2px #434343;
        }
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
        margin-bottom: 19px;
        .title {
          font-size: 25px;
          margin-top: 13px;
        }
      }
      .right {
        column-gap: unset;
        row-gap: 43px;
        grid-template-columns: 320px;
        & > .card-wrapper {
          .card {
            width: 320px;
            column-gap: 36.5px;
            .card-title {
              width: 92px;
              font-size: 12px;
            }
            & > .card-sub {
              font-size: 12px;
            }
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
        height: 590px;
        border-left: 1px dashed white;
      }
      .year-card {
        display: flex;
        align-items: start;
        .year-left {
          display: flex;
          align-items: center;
          .year {
            color: #a50006;
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
      /* width: 790px;
      height: 275px; */
      margin-top: 46.8px;
    }
    .bottom {
      margin-top: 80px;
      display: grid;
      grid-template-columns: repeat(2, 378px);
      column-gap: 34px;
      .box {
        position: relative;
        white-space: nowrap;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 244px;
        border-radius: 10px;
        background-color: white;
        overflow: hidden;
        padding: 28px 20.8px 0 20.8px;
        .red {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 11px;
          background-color: #a50006;
          z-index: 100;
        }
        .title {
          font-size: 23px;
          font-weight: bold;
        }
        hr {
          height: 1px;
          width: 336.5px;
          margin-top: 15.4px;

          margin-bottom: 20.6px;
          width: 100%;
        }
        .content {
          display: grid;
          row-gap: 12px;
          & > .subject-wrapper {
            display: flex;
            align-items: center;
            font-size: 14px;
            column-gap: 8.2px;
            & > .team {
              width: 87px;
              height: 31px;
              background-color: #bfbfbf;
              border-radius: 50px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: bold;
              color: #42454a;
            }
            & > .subject {
              color: #595b60;
              font-weight: 500;
            }
          }
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
        margin-top: 53px;
      }
      .bottom {
        margin-top: 85px;
        column-gap: 29px;
        grid-template-columns: 320px 320px;
        .box {
          white-space: nowrap;
          padding: 24px 17.5px 0 17.5px;
          width: 320px;
          height: 207px;
          .red {
            height: 9px;
          }
          .title {
            font-size: 20px;
          }
          hr {
            height: 1px;
            margin-top: 12.5px;
            margin-bottom: 17.5px;
          }
          .content {
            row-gap: 10px;
            & > .subject-wrapper {
              font-size: 12px;
              column-gap: 6.7px;
              & > .team {
                width: 74px;
                height: 26px;
              }
            }
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
        margin-top: 75px;
      }
      .bottom {
        margin-top: 113px;
        grid-template-columns: 320px;
        row-gap: 27px;
        .box {
          position: relative;
          white-space: nowrap;
          height: 207px;
        }
      }
    }
  }
`;
const Section6 = styled.div`
  width: 100%;
  height: 768px;
  background-color: #f7f7f7;
  & > .wrapper {
    width: 993px;
    margin: 0 auto;
    box-sizing: border-box;
    padding-top: 82.3px;
    & > .sub {
      width: 94px;
      height: 31px;
      background-color: #a50006;
      font-size: 14px;
      font-weight: bold;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    & > .title {
      font-size: 32px;
      margin-top: 15px;
      margin-bottom: 37px;
      font-weight: bold;
    }
    & > .list {
      display: grid;
      row-gap: 27.4px;
      & > .card {
        align-items: center;
        display: flex;
        column-gap: 25px;
        & > .category {
          width: 212px;
          height: 56px;
          background-color: #595757;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: bold;
          color: white;
        }
        & > .content {
          display: flex;
          flex-direction: column;
          row-gap: 3px;
          & > .title {
            font-size: 16px;
            font-weight: bold;
          }
          & > .sub {
            font-size: 14px;
            color: #434343;
          }
        }
      }
      & > .card:nth-child(even) {
        & > .category {
          background-color: #a50006;
        }
      }
    }
  }
  @media screen and (max-width: 1365px) {
    & > .wrapper {
      width: 720px;
      padding-top: 95px;
      display: flex;
      flex-direction: column;
      align-items: center;
      & > .sub {
        width: 96px;
      }
      & > .title {
        font-size: 25px;
        margin-top: 17px;
        margin-bottom: 52.3px;
      }
      & > .list {
        & > .card {
          column-gap: 18.7px;
          & > .category {
            width: 171.5px;
            height: 56px;
            font-size: 15px;
          }
          & > .content {
            row-gap: 4px;
            & > .title {
              font-size: 15px;
            }
            & > .sub {
              font-size: 13px;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    height: 1279px;
    & > .wrapper {
      width: 320px;
      padding-top: 195.7px;
      & > .title {
        margin-top: 13px;
        margin-bottom: 48.3px;
      }
      & > .list {
        row-gap: 46.7px;
        & > .card {
          flex-direction: column;
          column-gap: unset;
          row-gap: 13.8px;
          & > .category {
            height: 39.5px;
          }
          & > .content {
            text-align: center;
            & > .sub {
              line-height: 1.64;
              white-space: pre-line;
            }
          }
        }
      }
    }
  }
`;
const s2 = [
  { title: "???????????? ??? ????????????", sub: "?????? / ?????? ?????? ????????? ????????????" },

  { title: "?????? ??? ?????? ????????????", sub: "?????? / ?????? ?????? ????????? ????????????" },

  {
    title: "?????? ????????? ????????? ????????????",
    sub: "?????? / ?????? ?????? ????????? ????????????",
  },

  { title: "?????? ????????????", sub: "?????? / ?????? ?????? ????????? ????????????" },

  { title: "????????? ?????????", sub: "?????? / ?????? ?????? ????????? ????????????" },

  { title: "????????? ?????????", sub: "?????? / ?????? ?????? ????????? ????????????" },
];
const s3 = [
  { title: "?????????", sub: "(???)??????????????????" },
  { title: "?????????????????????", sub: "513-81-15880" },
  { title: "????????????", sub: "?????????" },
  { title: "?????????", sub: "1999??? 7??? 15???" },
  { title: "?????????", sub: "?????? ????????? ????????? 8??? 14, 301???" },
  { title: "????????????/????????????", sub: "054-455-2326 / 054-458-2327" },
  {
    title: "??????????????????",
    sub: `????????? ????????? 
????????? ?????????
????????? ?????????
?????? ?????? ?????????`,
  },
];
const s3_1 = [
  { title: "?????????", sub: "(???)????????????" },
  { title: "?????????????????????", sub: "112-81-55296" },
  { title: "????????????", sub: "?????????" },
  { title: "?????????", sub: "2020??? 11??? 1???" },
  { title: "?????????", sub: "?????? ????????? ????????? 8??? 14, 201???" },
  { title: "????????????/????????????", sub: "054-455-2326 / 054-458-2327" },
  {
    title: "??????????????????",
    sub: `???????????? ??? ????????????
?????? ??? ?????? ????????????
??????????????? ??? ?????? ???????????? ??????
?????? ???????????? ??? ????????? ?????? ??????`,
  },
];
const s4 = [
  { year: "1998", list: [{ title: "10???", sub: "???????????? ??????" }] },
  {
    year: "1999",
    list: [
      { title: "7???", sub: "(???)?????????????????????\n ?????? ?????? ??? ????????????" },
      { title: "12???", sub: "???????????????\n (????????? 3??? 500??????)" },
      { title: "12???", sub: "???????????????\n ???????????? (16-0026???)" },
    ],
  },
  {
    year: "2004",
    list: [{ title: "12???", sub: "???????????????\n (????????? 5??? 500??????)" }],
  },
  {
    year: "2008",
    list: [{ title: "3???", sub: "???????????? ??? ????????? ?????? \n(?????? ????????????)" }],
  },
  {
    year: "2013",
    list: [
      {
        title: "3???",
        sub: "???????????? ??? ????????? ?????? \n(?????? ??????????????????)",
      },
    ],
  },
  {
    year: "2016",
    list: [
      {
        title: "4???",
        sub: "???????????? ?????? ??? ??????",
      },
    ],
  },
  {
    year: "2020",
    list: [
      // {
      //   title: "6???",
      //   sub: "???????????? (???) ??????????????????\n ?????? (????????? 5???)",
      // },
      // {
      //   title: "7???",
      //   sub: "(???) ?????? ???????????? ??????\n ????????? ?????? ?????? (16-0745)",
      // },
      {
        title: "11???",
        sub: "?????????????????? ?????? ??????????????????\n??? (???)??????????????? ??????????????????",
      },
    ],
  },
];
const s6 = [
  {
    category: "?????? ?? ?????? ?? ????????????",
    title: "?????? ?? ?????? ?? ????????????",
    sub: "?????? ??? ??????  |  ?????? ??? ??????  |  ?????? ?????????",
    mbsub: `?????? ??? ??????  |  ?????? ??? ??????  |  ?????? ?????????`,
  },
  {
    category: "???????????? ??????",
    title: "???????????? ??????",
    sub: "?????? ?????? ?????? ??? ?????? ????????????  |  ????????? ??????  |  ?????? ???????????? ?????? ??? ????????? ??????",
    mbsub:
      "?????? ?????? ?????? ??? ?????? ????????????  |  ????????? ?????? \n?????? ???????????? ?????? ??? ????????? ??????",
  },
  {
    category: "????????? ?????? ?????? ??????",
    title: "????????? ?????? ?????? ??????",
    sub: "?????? ????????? ??? ??????  |  ?????? ??? ??????  |  ?????? ??? ??????  | ?????? ??? ??????  |  ?????? ??? ??????",
    mbsub:
      "?????? ????????? ??? ??????  |  ?????? ??? ??????  |  ?????? ??? ?????? \n?????? ??? ??????  |  ?????? ??? ??????",
  },
  {
    category: "?????? ??????",
    title: "?????? ??????",
    sub: "?????? ??????  |  ???????????? ??????  |  ????????? ??????  |  ?????? ?????? ??????",
    mbsub: "?????? ??????  |  ???????????? ?????? \n????????? ??????  |  ?????? ?????? ??????",
  },
  {
    category: "????????????",
    title: "????????????",
    sub: "????????? ??????  |  ????????? ??????  |  ????????? ??????  |  ?????? ?????? ??????",
    mbsub: "????????? ??????  |  ????????? ?????? \n????????? ??????  |  ?????? ?????? ??????",
  },
];

function Index() {
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
      <Head>
        <title>(???)????????????</title>
        <meta
          name="description"
          content="?????????????????? ???????????? ??????????????????."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="??????????????????" />
        <meta property="og:description" content="?????????????????? ????????????" />
        <meta property="og:image" content="/ogtag.jpg" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="favicon/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="favicon/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="favicon/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="favicon/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="favicon/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="favicon/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="favicon/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="favicon/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="favicon/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="favicon/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <h1 style={{ display: "none" }}>?????????????????? ????????????</h1>
      <h2 style={{ display: "none" }}>??????????????????</h2>
      <h3 style={{ display: "none" }}>??????</h3>
      <h4 style={{ display: "none" }}>??????????????????</h4>
      <h5 style={{ display: "none" }}>????????????</h5>
      <Header agent={agent} isHead={isHead} />
      <Top>
        <div className="title">????????????</div>
      </Top>
      <Section1>
        <S1 agent={agent} />
      </Section1>
      <Section2>
        <S2 s2={s2} agent={agent} />
      </Section2>
      <Section3>
        <S3 s3={s3} s3_1={s3_1} />
      </Section3>
      <Section6>
        <S6 agent={agent} s6={s6} />
      </Section6>
      <Section4>
        <S4 s4={s4} agent={agent} />
      </Section4>
      <Section5>
        <S5 agent={agent} />
      </Section5>
      <footer className={styles.footer}>
        <Footer agent={agent} />
      </footer>
    </Wrapper>
  );
}

export default Index;
