// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  s2: Array<object>;
  s3: Array<object>;
  s4: Array<object>;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const S2_Layout = [
    { title: "공장신축 및 개축공사", sub: "공장 / 창고 등의 조립식 건축공사" },

    { title: "상가 및 주택 신축공사", sub: "공장 / 창고 등의 조립식 건축공사" },

    {
      title: "기존 건축물 내외부 리모델링",
      sub: "공장 / 창고 등의 조립식 건축공사",
    },

    { title: "기타 토목공사", sub: "공장 / 창고 등의 조립식 건축공사" },

    { title: "부동산 개발업", sub: "공장 / 창고 등의 조립식 건축공사" },

    { title: "부동산 임대업", sub: "공장 / 창고 등의 조립식 건축공사" },
  ];
  const S3_Layout = [
    { title: "회사명", sub: "(주)아주산업개발" },
    { title: "사업자등록번호", sub: "513-81-15880" },
    { title: "대표이사", sub: "전상현" },
    { title: "설립일", sub: "1999년 7월 15일" },
    { title: "소재지", sub: "경북 구미시 형곡로 8길 14, 301호" },
    {
      title: "주요사업내용",
      sub: `·공장신축 및 개축공사
·상가 및 주택 신축공사
·기존건축물 내 외부 리모델링 공사
·기타 토목공사
·부동산 개발업
·부동산 임대업`,
    },
  ];
  const S4_Layout = [
    { year: "1998", list: [{ title: "10월", sub: "아주건설 설립" }] },
    {
      year: "1999",
      list: [
        { title: "7월", sub: "(주)아주산업개발로\n 법인 설립 및 상호변경" },
        { title: "12월", sub: "자본금증자\n (자본금 3억 500만원)" },
        { title: "12월", sub: "건축공사업\n 면허취득 (16-0026호)" },
      ],
    },
    {
      year: "2004",
      list: [{ title: "12월", sub: "자본금증자\n (자본금 5억 500만원)" }],
    },
    {
      year: "2008",
      list: [
        { title: "3월", sub: "납세자의 날 표창장 수여 \n(구미 세무서장)" },
      ],
    },
    {
      year: "2013",
      list: [
        {
          title: "3월",
          sub: "납세자의 날 표창장 수여 \n(대구 지방국세청장)",
        },
      ],
    },
    {
      year: "2016",
      list: [
        {
          title: "4월",
          sub: "본사사옥 구입 및 이전",
        },
      ],
    },
    {
      year: "2020",
      list: [
        {
          title: "6월",
          sub: "관계회사 (주) 아주종합건설\n 설립 (자본금 5억)",
        },
        {
          title: "7월",
          sub: "(주) 아주 종합건설 건축\n 공사업 면허 취득 (16-0745)",
        },
        {
          title: "10월",
          sub: "경쟁력강화를 위해 건설사업\n부분 분할로 (주)아주건설 설립",
        },
      ],
    },
  ];
  res.status(200).json({ s2: S2_Layout, s3: S3_Layout, s4: S4_Layout });
}
