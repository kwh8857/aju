import styled from "styled-components";

export const Top = styled.div`
  width: 100%;
  height: 230px;
  background-image: url("/assets/question-top.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: -webkit-image-set(
    url("/assets/question-top@2x.jpg") 2x,
    url("/assets/question-top@3x.jpg") 3x
  );
  font-size: 36px;
  font-weight: bold;
  color: white;
  padding-top: 141px;
  box-sizing: border-box;
  text-align: center;
  @media screen and (max-width: 1365px) {
    font-size: 24px;
    padding-top: 140px;
  }
`;
export const Section1 = styled.div`
  width: 100%;
  height: 620px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 85px;
  box-sizing: border-box;

  .top {
    display: grid;
    grid-template-columns: repeat(4, 237px);
    column-gap: 15px;

    .box {
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      width: 100%;
      height: 218px;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 16px 17px 20px 20px;
      box-sizing: border-box;
      .title {
        font-size: 24px;
        font-weight: bold;
      }
      .content {
        text-align: right;
        font-size: 17px;
        font-weight: bold;
        white-space: pre-line;
        line-height: 1.47;
      }
    }
  }
  .bottom {
    width: 993px;
    height: 124px;
    background-color: #f2f3f7;
    margin-top: 45px;
    padding-top: 17px;
    box-sizing: border-box;
    padding-left: 24px;
    display: grid;
    row-gap: 9px;
    grid-template-rows: repeat(3, 24px);
    .card {
      display: flex;
      align-items: center;
      font-size: 16px;
      font-weight: normal;
      color: #434343;
      img {
        margin-right: 5px;
      }
    }
  }
  @media screen and (max-width: 1365px) {
    height: 730px;
    padding-top: 50.5px;
    .top {
      grid-template-columns: repeat(2, 320px);
      column-gap: 26px;
      row-gap: 25px;
      .box {
        height: 188px;
      }
    }
    .bottom {
      width: 666px;
      height: 139px;
      margin-top: 50.5px;
      padding-left: 9px;
      row-gap: 14px;
      .card {
        font-size: 14px;
      }
    }
  }
  @media screen and (max-width: 767px) {
    height: 1168px;
    .top {
      grid-template-columns: 320px;
      row-gap: 18px;
    }
    .bottom {
      width: 320px;
      height: 175px;
      margin-top: 18.4px;
      row-gap: 15px;
      padding-top: 17px;
      grid-template-rows: 40px 20px 40px;
      .card {
        font-size: 14px;
        white-space: pre-line;
        text-align: left;
        align-items: flex-start;
      }
    }
  }
`;
export const Section2 = styled.div`
  height: 926px;
  width: 100%;
  background-color: #434343;
  padding-top: 85px;
  box-sizing: border-box;
  color: white;
  .wrapper {
    width: 993px;
    height: 100%;
    margin: 0 auto;
    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .title {
        font-size: 32px;
        font-weight: bold;
      }
      .top-right {
        display: flex;
        align-items: center;
        .address-wrapper {
          display: flex;
          align-items: center;
          .address {
            margin-left: 1px;
            font-size: 16px;
            font-weight: 500;
          }
        }
        .clip {
          font-size: 14px;
          font-weight: bold;
          color: #434343;
          width: 102px;
          height: 34px;
          background-color: #f2f3f7;
          border-radius: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 13px;
          cursor: pointer;
        }
      }
    }
    .map {
      height: 656px;
      width: 100%;
      background-color: white;
      margin-top: 36px;
    }
  }
  @media screen and (max-width: 1365px) {
    height: 624px;
    padding-top: 63px;
    .wrapper {
      width: 666px;
      .top {
        flex-direction: column;
        justify-content: unset;
        .title {
          font-size: 25px;
        }
        .top-right {
          width: 100%;
          flex-direction: column;
          margin-top: 17.2px;
          .clip {
            margin-left: 0;
            width: 119px;
            height: 40px;
            font-size: 15px;
            margin-top: 18px;
          }
        }
      }
      .map {
        height: 309px;
        margin-top: 38px;
      }
    }
  }
  @media screen and (max-width: 767px) {
    .wrapper {
      width: 320px;
    }
  }
`;
