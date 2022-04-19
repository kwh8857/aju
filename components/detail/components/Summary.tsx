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
  padding-bottom: 86.5px;
  .top {
    display: flex;
    & > .main-img {
      width: 671px;
      height: 490px;
      position: relative;
      margin-right: 31px;
      img {
        max-width: 100%;
      }
    }
    & > .content {
      width: 290px;
      height: 490px;
      font-size: 17px;
      font-weight: normal;
      line-height: 2.06;
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
    padding-bottom: 55px;
    .top {
      & > .main-img {
        width: 480px;
        height: 480px;
        margin-right: 15px;
      }
      .content {
        width: 220px;
        min-height: 130px;
        height: auto;
        font-size: 16px;
      }
    }
    .bottom {
      .list {
        margin-top: 39px;
        grid-template-columns: repeat(6, 110px);
        column-gap: 13px;
        .list-card {
          height: 120px;
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    .top {
      flex-direction: column;
      & > .main-img {
        width: 320px;
        height: 320px;
      }
      & > .content {
        width: 100%;
      }
    }
    .bottom {
      & > .list {
        grid-template-columns: repeat(3, 100px);
        gap: 9px;
        & > .list-card {
          height: 100px;
        }
      }
    }
  }
`;

function Summary({ content: { text, images } }: Props) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [now, setNow] = useState(images[0] ? images[0] : "");
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.innerHTML = text;
    }
    return () => {};
  }, [contentRef]);
  return (
    <Wrapper>
      <div className="top">
        <div className="main-img">
          {now.img ? (
            <Image
              src={now.img}
              layout="fill"
              placeholder="blur"
              objectFit="cover"
              objectPosition="center"
              blurDataURL={now.resize}
            />
          ) : undefined}
        </div>
        <div className="content" ref={contentRef}></div>
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

export default Summary;
