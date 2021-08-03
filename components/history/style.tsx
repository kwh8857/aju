import styled from "styled-components";

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
export const List = styled.div`
  width: 100%;
  min-height: 1641px;
  background-color: white;
  padding-top: 88px;
  padding-bottom: 190px;
  display: grid;
  grid-template-columns: 993px;
  row-gap: 80px;
  justify-content: center;
  .card {
    display: flex;
    flex-direction: column;
    .back {
      width: 100%;
      position: relative;
      height: 291px;

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
    .bottom {
      margin-top: 22px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      .left {
        .title {
          font-size: 23px;
          font-weight: bold;
          margin-bottom: 9px;
        }
        .content {
          font-size: 15px;
          font-weight: normal;
          line-height: 1.53;
          white-space: pre-line;
          width: 700px;
          height: 44px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }

      .right {
        .btn {
          width: 131px;
          height: 40px;
          border: solid 1px #a50006;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          color: #a50006;
          cursor: pointer;
          img {
            margin-left: 9.5px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1365px) {
    min-height: 1916px;
    padding-top: 69px;
    padding-bottom: 181px;
    grid-template-columns: 720px;
    .card {
      .back {
        height: 320px;
      }
      .bottom {
        flex-direction: column;
        align-items: center;
        justify-content: unset;
        .left {
          text-align: center;
          margin-bottom: 24.2px;
          .content {
            width: 650px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: 320px;
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
