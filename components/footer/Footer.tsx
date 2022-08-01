import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 993px;
  height: 192px;
  color: white;
  display: flex;
  align-items: center;
  font-size: 13px;
  line-height: 1.85;
  .content {
    margin-left: 32.7px;
  }
  @media screen and (max-width: 1365px) {
    width: 720px;
    height: 282px;
    flex-direction: column;
    box-sizing: border-box;
    padding-top: 64px;
    text-align: center;
    .content {
      margin-left: 0;
      margin-top: 17px;
      font-size: 12px;
      line-height: 1.75;
    }
  }
`;
type FootProps = {
  agent: string;
};
function Footer({ agent }: FootProps) {
  return (
    <Wrapper>
      <img src="/assets/footer.svg" alt="Aju" />
      <div className="content">
        사업자등록번호 112-81-55296 | 대표자 전상현 <br /> 주소 경상북도 구미시
        형곡로 8길 14, 201호, 301호 |{agent !== "pc" ? <br /> : undefined}{" "}
        전화문의 054-455-2326 <br /> (주)아주건설. All rights reserved.
      </div>
    </Wrapper>
  );
}

export default Footer;
