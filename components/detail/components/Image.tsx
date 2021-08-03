import React from "react";
import styled from "styled-components";
import ImageComponent from "next/image";

const Temimg = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  margin: 0 auto;
  margin-bottom: 43px;
  img {
    max-width: 100%;
    width: 100%;
    height: 100%;
  }
`;
type Props = {
  content:
    | any
    | {
        resize?: string;
        url?: string;
      };
  width: number | undefined;
  height: number | undefined;
};
function Image({ content: { resize, url }, width, height }: Props) {
  console.log(width);
  return (
    <Temimg style={{ width: `${width}px`, height: `${height}px` }}>
      <ImageComponent
        className="custom"
        src={url}
        layout="fill"
        objectFit="contain"
        objectPosition="center"
        sizes="(max-width: 767px)320px,(max-width: 1365px)720Px ,992px"
        placeholder="blur"
        blurDataURL={resize}
      />
    </Temimg>
  );
}

export default Image;
