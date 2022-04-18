import styled, { css } from "styled-components";

export const Top = styled.div`
  width: 100%;
  height: 230px;
  background-image: url("/assets/history-top.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: -webkit-image-set(
    url("/assets/history-top@2x.jpg") 2x,
    url("/assets/history-top@3x.jpg") 3x
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
interface BodyIn {
  open: boolean;
  length: number;
}

export const BodyWrapper = styled.div<BodyIn>`
  background-color: white;
  width: 100%;
  min-height: 1100px;
  & > .wrapper {
    display: flex;
    width: 993px;
    margin: 0 auto;
    padding-top: 88px;
    padding-bottom: 190px;
    & > .year-wrapper {
      padding: 0 7.8px;
      box-sizing: border-box;
      position: sticky;
      left: 0;
      height: fit-content;
      background-color: #f7f7f7;
      display: grid;
      width: 153px;
      border-radius: 5px;
      & > .nowyear {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 46px;
        cursor: pointer;
        color: #bfbfbf;
        font-size: 15px;
        font-weight: bold;
        border-bottom: solid 1px #dbdbdb;
      }

      & > .on {
        color: #434343;
      }
      & > .year-kind {
        height: 100%;
        display: grid;
        grid-auto-rows: 46px;
        .year {
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #bfbfbf;
          font-size: 15px;
          font-weight: bold;
          border-bottom: solid 1px #dbdbdb;
        }
        & > .on {
          color: #434343;
        }
      }
    }
  }
  @media screen and (max-width: 1365px) {
    min-height: 1000px;
    & > .wrapper {
      width: 720px;
      flex-direction: column;
      align-items: center;
      padding: 109px 0;
      position: relative;
      & > .year-wrapper {
        height: ${(props) => (props.open ? `${props.length * 42}px` : "41px")};
        overflow: hidden;
        padding: 0 11px 0 12px;
        position: absolute;
        left: 39.5%;
        top: 27px;
        z-index: 300;
        transition: height 0.2s ease-in-out;
        & > .nowyear {
          justify-content: space-between;
          font-size: 14px;
          height: 42px;
          color: #434343;
          & > img {
            width: 13.6px;
          }
        }
        & > .year-kind {
          width: 100%;
          top: 42px;
          grid-auto-rows: 42px;
          padding: 0 12px;
          box-sizing: border-box;
          & > .year {
            width: 100%;
            font-size: 14px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    & > .wrapper {
      width: 320px;
      & > .year-wrapper {
        left: 25%;
      }
    }
  }
`;
interface Cat {
  category: number;
}
export const Category = styled.div<Cat>`
  background-color: white;
  padding-top: 33px;
  display: flex;
  align-items: center;
  flex-direction: column;
  & > .button-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 196px);
    & > button {
      cursor: pointer;
      padding: 10px 0;
      font-size: 18px;
      font-weight: bold;
    }
    & > .one {
      color: ${(p) => (p.category === 0 ? "#a50006" : "#bfbfbf")};
    }
    & > .two {
      color: ${(p) => (p.category === 1 ? "#a50006" : "#bfbfbf")};
    }
  }
  & > .bar-wrapper {
    width: 388px;
    height: 1px;
    background-color: #bfbfbf;
    position: relative;
    & > .bar {
      transition: left 0.3s ease-in-out;
      width: 192px;
      height: 3px;
      background-color: #a50006;
      position: absolute;
      left: ${(p) => `${p.category * 196}px`};
      top: 0;
    }
  }
  @media screen and (max-width: 767px) {
    & > .button-wrapper {
      grid-template-columns: repeat(2, 157.2px);
      & > button {
        font-size: 15px;
      }
    }
    & > .bar-wrapper {
      box-sizing: border-box;
      width: 314.4px;
      & > .bar {
        width: 157.2px;
        left: ${(p) => `${p.category * 157.2}px`};
      }
    }
  }
`;
export const List = styled.div`
  width: fit-content;
  background-color: white;
  display: grid;
  margin-left: 15px;
  grid-template-columns: repeat(3, 266.7px);
  gap: 26.7px 12.5px;
  justify-content: center;
  & > a {
    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      .back {
        width: 100%;
        position: relative;
        height: 177.2px;
        img {
          z-index: -1;
        }
      }
      .back:hover {
        & > div {
          background-image: linear-gradient(
            to top,
            rgb(30, 34, 34),
            35%,
            rgba(84, 84, 84, 0)
          );
        }
      }
      & > .title {
        margin-top: 16.2px;
        font-size: 13px;
        font-weight: bold;
      }
    }
  }
  @media screen and (max-width: 1365px) {
    grid-template-columns: repeat(3, 231.7px);
    margin-left: unset;
    gap: 50px 16.3px;
    margin-top: unset;
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: 320px;
    gap: 54px 0;
    .card {
      .bottom {
        .left {
          .content {
            width: 300px;
          }
        }
      }
    }
  }
`;
