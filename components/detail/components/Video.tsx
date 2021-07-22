import React from "react";
import styled from "styled-components";

type Props = {
  content:
    | any
    | {
        resize?: string;
        url?: string;
      };
};
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
  margin-bottom: 45px;
  video {
    max-width: 100%;
  }
`;
function Video({ content }: Props) {
  return (
    <Wrapper>
      <video src={content} controls></video>
    </Wrapper>
  );
}

export default Video;
