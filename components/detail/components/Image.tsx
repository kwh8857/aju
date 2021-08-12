import React, { useState } from "react";
import styled from "styled-components";
import ImageComponent from "next/image";

const Temimg = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  margin-bottom: 43px;
  img {
    max-width: 100%;
  }
`;
type Props = {
  content:
    | any
    | {
        resize?: string;
        url?: string;
      };
  width: number;
  height: number;
};
function Image({ content: { resize, url }, width, height }: Props) {
  const [now, setNow] = useState(resize);

  return (
    <Temimg style={{ height }}>
      <img
        src={url}
        style={{ display: "none" }}
        onLoad={() => {
          setNow(url);
        }}
        alt=""
      />
      <img src={now} alt="" />
    </Temimg>
  );
}

export default Image;
