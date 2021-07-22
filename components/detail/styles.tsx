import styled from "styled-components";

export const Body = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  padding-bottom: 235px;
  .wrapper {
    width: 992px;
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
