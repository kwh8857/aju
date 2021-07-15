import styled from "styled-components";

export const Top = styled.div`
  width: 100%;
  height: 230px;
  background-image: url("/assets/history-top.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: -webkit-image-set(
    url("/assets/history-top@2x.jpg") 2x,
    url("/assets/history-top@3x.jpg") 3x
  );
  color: white;
  font-size: 30px;
  font-weight: bold;
  padding-top: 144px;
  box-sizing: border-box;
  text-align: center;
`;
export const List = styled.div`
  width: 100%;
  min-height: 1641px;
  background-color: white;
  padding-top: 88px;
  padding-bottom: 190px;
`;

export const dummy = [
  {
    title: "화성그랜드파크 시공",
    sub: `내 집, 내 공장을 짓는다는 마음으로
함께하는 종합건설기업 (주) 아주산업개발`,
    image: "https://idoojin.co.kr/template/design/main/main1.jpg",
  },
  {
    title: "화성그랜드파크 시공",
    sub: `내 집, 내 공장을 짓는다는 마음으로
함께하는 종합건설기업 (주) 아주산업개발`,
    image: "https://idoojin.co.kr/template/design/main/main1.jpg",
  },
  {
    title: "화성그랜드파크 시공",
    sub: `내 집, 내 공장을 짓는다는 마음으로
함께하는 종합건설기업 (주) 아주산업개발`,
    image: "https://idoojin.co.kr/template/design/main/main1.jpg",
  },
];
