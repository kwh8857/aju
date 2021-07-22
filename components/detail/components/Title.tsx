import React from "react";
import styled from "styled-components";

type Props = {
  content: string | object;
};
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 45px;
  font-size: 17px;
  font-weight: normal;
  line-height: 2.06;
`;
function Title({ content }: Props) {
  return <Wrapper>{content}</Wrapper>;
}

export default Title;
