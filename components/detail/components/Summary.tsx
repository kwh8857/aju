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
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    & > .main-img {
      height: 490px;
      position: relative;
      img {
        max-width: 100%;
      }
    }
    & > .content {
      background-color: #f5f6f8;
      padding: 20px 30px;
      white-space: pre-wrap;
      word-wrap: break-word;
      height: 490px;
      overflow-y: hidden;
      & > p {
        margin: unset;
        font-family: "Noto Sans KR", sans-serif !important;
      }
    }
  }
  @media screen and (max-width: 1365px) {
    padding-bottom: 48.7px;
    .top {
      width: 100%;
      justify-content: center;
      display: flex;
      & > .main-img {
        width: 100%;
        height: unset;
        display: flex;
      }
    }
    & > .content {
      padding: 20px;
      background-color: #f5f6f8;
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
  }
`;

function Summary({ content: { text, img }, agent }: Props) {
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.innerHTML = text;
    }
    return () => {};
  }, [contentRef, agent]);
  return (
    <Wrapper>
      <div className="top">
        <div className="main-img">
          {img.img ? (
            agent === "pc" ? (
              <Image
                src={img.img}
                layout="fill"
                placeholder="blur"
                objectFit="cover"
                objectPosition="center"
                blurDataURL={img.resize}
              />
            ) : (
              <img src={img.img} alt="" />
            )
          ) : undefined}
        </div>
        {agent === "pc" ? (
          <div className="content" ref={contentRef}></div>
        ) : undefined}
      </div>
      {agent !== "pc" ? (
        <div className="content" ref={contentRef}></div>
      ) : undefined}
    </Wrapper>
  );
}

export default Summary;
