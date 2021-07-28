import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

interface ImType {
  resize: string;
  img: string;
}
type Props = {
  content:
    | any
    | {
        text?: string;
        image?: Array<ImType>;
      };
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  border-bottom: solid 1px #dbdbdb;
  padding-bottom: 45.5px;
  .left {
    width: 503px;
    height: 490px;
    position: relative;
    img {
      max-width: 100%;
    }
  }
  .right {
    margin-left: 35px;
    .content {
      width: 454px;
      height: 332px;
      font-size: 17px;
      font-weight: normal;
      line-height: 2.06;
    }
    .list {
      margin-top: 15px;
      display: grid;
      grid-template-columns: repeat(3, 143px);
      column-gap: 13px;
      .list-card {
        cursor: pointer;
        width: 100%;
        height: 143px;
        position: relative;
      }
    }
  }
  @media screen and (max-width: 1365px) {
    flex-direction: column;
    align-items: center;
    padding-bottom: 44px;
    .left {
      width: 720px;
      height: 702px;
    }
    .right {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: 0;
      margin-top: 38px;
      .content {
        width: 720px;
        min-height: 130px;
        height: auto;
      }
      .list {
        margin-top: 27px;
        grid-template-columns: repeat(3, 100px);
        column-gap: 9px;
        .list-card {
          height: 100px;
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    .left {
      width: 100%;
      height: 320px;
    }
    .right {
      .content {
        width: 100%;
      }
    }
  }
`;

function Summary({ content: { text, images } }: Props) {
  const [now, setNow] = useState(images[0] ? images[0] : "");
  return (
    <Wrapper>
      <div className="left">
        {now.img? 
        <Image
          src={now.img}
          layout="fill"
          placeholder="blur"
          objectFit="cover"
          objectPosition="center"
          blurDataURL={now.resize}
        />
      : undefined }
      </div>
      <div className="right">
        <div className="content">{text}</div>
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
