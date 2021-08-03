import styled from "styled-components";
export const NoticeTop = styled.div`
  width: 100%;
  height: 230px;
  background-image: url("/assets/notice-top.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: -webkit-image-set(
    url("/assets/notice-top@2x.jpg") 2x,
    url("/assets/notice-top@3x.jpg") 3x
  );
  color: white;
  font-size: 30px;
  font-weight: bold;
  padding-top: 144px;
  box-sizing: border-box;
  text-align: center;
  @media screen and (max-width: 1365px) {
    font-size: 24px;
    padding-top: 140px;
  }
`;
export const NoticeBody = styled.div`
  background-color: #f2f3f7;
  width: 100%;
  height: 1209px;
  @media screen and (max-width: 1365px) {
    height: 1595px;
  }
`;
export const Wrapper = styled.div`
  width: 993px;
  margin: 0 auto;
  height: 100%;
  box-sizing: border-box;
  padding-top: 63px;
  @media screen and (max-width: 1365px) {
    padding-top: 47px;
    width: 720px;
  }
  @media screen and (max-width: 767px) {
    width: 320px;
  }
`;
export const BodyTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  .title {
    font-size: 23px;
    font-weight: bold;
    line-height: 1.43;
  }
  .search {
    display: flex;
    width: 320px;
    height: 50px;
    background-color: white;
    border-radius: 5px;
    align-items: center;
    justify-content: space-between;
    padding: 14px 16px;
    box-sizing: border-box;
    & > img {
      width: 24px;
    }
    input {
      border: 0;
      width: 90%;
      background-color: transparent !important;
      font-family: "Noto Sans KR";
      font-size: 15px;
      font-weight: 500;
    }
    input::placeholder,
    textarea::placeholder {
      font-size: 15px;
      font-weight: 500;
      color: #bfbfbf;
    }

    input:focus {
      outline: none;
    }
  }
  @media screen and (max-width: 1365px) {
    justify-content: center;
    .title {
      display: none;
    }
  }
`;
export const NoticeList = styled.div`
  margin-top: 41px;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(10, 65px);
  row-gap: 12px;
  .card {
    background-color: white;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding-left: 18px;
    padding-right: 27px;
    .left {
      display: flex;
      align-items: center;
      .num {
        width: 53px;
        height: 25px;
        border-radius: 50px;
        background-color: #a50006;
        color: white;
        font-size: 14px;
        font-weight: 500;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 12px;
        font-weight: normal;
      }
      .title {
        font-size: 16px;
        font-weight: bold;
      }
    }
    .time {
      font-size: 13px;
      font-weight: bold;
      color: #989898;
    }
  }
  @media screen and (max-width: 1365px) {
    margin-top: 31px;
    row-gap: 10px;
    grid-template-rows: repeat(10, 111px);
    .card {
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      .left {
        flex-direction: column;
        align-items: flex-start;
        .title {
          margin: 6px 0;
        }
      }
    }
  }
`;
export const BtnSection = styled.div`
  margin-top: 58px;
  display: flex;
  justify-content: center;
  & > img {
    cursor: pointer;
  }
  .page {
    display: grid;
    grid-template-columns: repeat(2, 30px);
    margin: 0 27.5px;
    column-gap: 4px;
    & > div {
      cursor: pointer;
      font-size: 13px;
      width: 30px;
      height: 30px;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .now {
      background-color: #434343;
      color: white;
    }
    .next {
      background-color: white;
      color: #434343;
      border: solid 1px #dbdbdb;
    }
  }
`;
export const EmtySearch = styled.div`
  width: 100%;
  height: 126px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    width: 46px;
  }
  .emty-title {
    color: #bfbfbf;
    font-weight: bold;
    font-size: 16px;
    margin-top: 7.3px;
  }
  @media screen and (max-width: 1365px) {
    height: 111px;
  }
`;
