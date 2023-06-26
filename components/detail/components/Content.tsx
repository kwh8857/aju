import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Image from "next/image";

interface ImType {
  resize: string;
  img: string;
}
type Props = {
  agent: string;
  content:
    | any
    | {
        text?: string;
        image?: Array<ImType>;
      };
};

const Wrapper = styled.div`
  width: 100%;
  border-bottom: solid 1px #dbdbdb;
  padding: 86.5px 0;
  .top {
    & > .main-img {
      width: 100%;
      height: 744px;
      position: relative;
      img {
        max-width: 100%;
      }
    }
  }
  .bottom {
    margin-top: 39px;
    .list {
      display: grid;
      grid-template-columns: repeat(6, 153px);
      column-gap: 15px;
      .list-card {
        cursor: pointer;
        width: 100%;
        height: 153px;
        position: relative;
      }
    }
  }
  @media screen and (max-width: 1365px) {
    padding-bottom: 48.7px;
    .top {
      width: 100%;
      justify-content: center;
      & > .main-img {
        max-width: 100%;
        width: fit-content;
        height: fit-content;
        margin-right: unset;
      }
    }
    .bottom {
      width: 100%;
      margin-top: 39px;
      .list {
        width: 100%;
        grid-template-columns: repeat(6, 151px);
        column-gap: 15px;
        overflow-x: scroll;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none;
        .list-card {
          height: 151px;
        }
      }
      .list::-webkit-scrollbar {
        display: none;
      }
    }
    & > .content {
      & > p {
        margin: unset;
        font-family: "Noto Sans KR", sans-serif !important;
      }
    }
  }
  @media screen and (max-width: 767px) {
    .top {
      flex-direction: column;
      & > .content {
        width: 100%;
      }
    }
    .bottom {
      & > .list {
        grid-template-columns: repeat(6, 97px);
        column-gap: 10px;
        & > .list-card {
          height: 97px;
        }
      }
    }
    & > .content {
      margin-top: 27px;
    }
  }
`;

function Content({ content: { images }, agent }: Props) {
  const [now, setNow] = useState(images[0] ? images[0] : "");

  return (
    <Wrapper>
      <div className="top">
        <div className="main-img">
          {now.img ? (
            agent === "pc" ? (
              <Image
                src={now.img}
                layout="fill"
                placeholder="blur"
                objectFit="cover"
                objectPosition="center"
                blurDataURL={now.resize}
              />
            ) : (
              <img src={now.img} alt="" />
            )
          ) : undefined}
        </div>
      </div>
      <div className="bottom">
        <div className="list">
          {images.map(({ resize, img }: ImType, idx: number) => {
            return (
              <div
                key={idx}
                className="list-card"
                onClick={() => {
                  setNow({ img, resize });
                }}
              >
                <Image
                  src={img}
                  layout="fill"
                  placeholder="blur"
                  objectFit="cover"
                  objectPosition="center"
                  blurDataURL={resize}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}

export default Content;
