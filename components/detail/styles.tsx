import styled from "styled-components";

export const Body = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  padding-bottom: 235px;
  .wrapper {
    width: 1224px;
    margin: 0 auto;
    padding-top: 58px;
    box-sizing: border-box;
    .top {
      .title {
        font-size: 33px;
        font-weight: bold;
      }
      .time-wrapper {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        color: #7c7c7c;
      }
      .grey-bar {
        width: 100%;
        height: 1px;
        background-color: #bfbfbf;
        margin-top: 25px;
      }
    }
    .templates {
      padding-top: 25px;
      box-sizing: border-box;
      font[size="1"] {
        font-size: 13px;
      }

      font[size="2"] {
        font-size: 15px;
      }

      font[size="3"] {
        font-size: 17px;
      }

      font[size="4"] {
        font-size: 19px;
      }

      font[size="5"] {
        font-size: 21px;
      }

      font[size="6"] {
        font-size: 23px;
      }

      font[size="7"] {
        font-size: 25px;
      }
    }
  }
  @media screen and (max-width: 1365px) {
    .wrapper {
      width: 720px;
      .top {
        .title {
          font-size: 23px;
        }
        .time-wrapper {
          margin-top: 23px;
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
