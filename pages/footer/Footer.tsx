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
`;
function Footer() {
  return (
    <Wrapper>
      <img src="/assets/footer.svg" alt="Aju" />
      <div className="content">
        사업자등록번호 123-45-12345 | 대표자 홍길동 <br /> 주소 서울특별시
        강남구 테헤란로 123 | 문의 mintedlab@naver.com <br /> ©Mintedlab. All
        rights reserved.
      </div>
    </Wrapper>
  );
}

export default Footer;
