import React from "react";
import styled from "styled-components";

const MainStyle = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function main() {
  return <MainStyle>메인</MainStyle>;
}

export default main;
