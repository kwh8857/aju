import React, { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import { useSelector } from "react-redux";
import { RootState } from "../../reducer";
import Header from "../header/Header";
import { Top } from "../../components/history/style";
import { NoticeTop } from "../../components/notice/style";
import { Body } from "../../components/detail/styles";
import styles from "../../styles/Home.module.css";
import Footer from "../footer/Footer";
import Title from "../../components/detail/components/Title";
import Image from "../../components/detail/components/Image";
import Video from "../../components/detail/components/Video";
import Summary from "../../components/detail/components/Summary";
import {getDetail, getEditor} from "../../firebase/store"
import { GetStaticPaths, GetStaticProps, GetStaticPropsResult } from "next";
type Props = {
  data:any;
};
 const dummy = [
    {
      type: "TITLE",
      content: `국가는 노인과 청소년의 복지향상을 위한 정책을 실시할 의무를 진다. 언론·출판에 대한 허가나 검열과 집회·결사에 대한 허가는 인정되지 아니한다. 학교교육 및 평생교육을 포함한 교육제도와 그 운영, 교육재정 및 교원의 지위에 관한 기본적인 사항은 법률로 정한다. 신체장애자 및 질병·노령 기타의 사유로 생활능력이 없는 국민은 법률이 정하는 바에 의하여 국가의 보호를 받는다. 대통령은 제3항과 제4항의 사유를 지체없이 공포하여야 한다.
원장은 국회의 동의를 얻어 대통령이 임명하고, 그 임기는 4년으로 하며, 1차에 한하여 중임할 수 있다. 모든 국민은 근로의 권리를 가진다. 국가는 사회적·경제적 방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며, 법률이 정하는 바에 의하여 최저임금제를 시행하여야 한다.`,
    },
    {
      type: "IMAGE",
      content: {
        resize:
          "https://firebasestorage.googleapis.com/v0/b/steadee-pf.appspot.com/o/editor%2F2XMK6LOdBcH9cNZLIaik%2F378dn51x644521sts211.jpg-resize?alt=media&token=35a6edfa-9ccb-4963-99e1-c8243dcacd50",
        url:
          "https://firebasestorage.googleapis.com/v0/b/steadee-pf.appspot.com/o/editor%2FWuIFA9Ihv746CxRkg9n4%2F%E1%84%83%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3%20(10).jpeg?alt=media&token=b4562d4c-bc81-4b96-992d-7f073a8d0654",
      },
    },
    {
      type: "VIDEO",
      content:
        "https://firebasestorage.googleapis.com/v0/b/steadee-pf.appspot.com/o/editor%2Fvideo%2F89a03a0368e918.mp4%2Fvideo?alt=media&token=99e78130-1152-492b-832a-92bc85412f10",
    },
    {
      type: "SUMMARY",
      content: {
        text: "이것이 내용이라는 거싱다 하하하하하하하하하하하핳",
        image: [
          {
            resize:
              "https://firebasestorage.googleapis.com/v0/b/steadee-pf.appspot.com/o/editor%2FWuIFA9Ihv746CxRkg9n4%2F%E1%84%83%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3%20(8).jpeg?alt=media&token=c6da68d2-ec1e-4047-8629-5c2ee3364dc8",
            url:
              "https://firebasestorage.googleapis.com/v0/b/steadee-pf.appspot.com/o/editor%2FWuIFA9Ihv746CxRkg9n4%2F%E1%84%83%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3%20(8).jpeg?alt=media&token=c6da68d2-ec1e-4047-8629-5c2ee3364dc8",
          },
          {
            resize:
              "https://firebasestorage.googleapis.com/v0/b/steadee-pf.appspot.com/o/editor%2FWuIFA9Ihv746CxRkg9n4%2F%E1%84%83%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3%20(9).jpeg-resize?alt=media&token=fd984b12-1fed-4df7-a1d7-9b0f1df0e6b5",
            url:
              "https://firebasestorage.googleapis.com/v0/b/steadee-pf.appspot.com/o/editor%2FWuIFA9Ihv746CxRkg9n4%2F%E1%84%83%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3%20(9).jpeg?alt=media&token=ee9aa46a-2ef0-41bc-b5d2-45c89e77f3c4",
          },
          {
            resize:
              "https://firebasestorage.googleapis.com/v0/b/steadee-pf.appspot.com/o/editor%2FWuIFA9Ihv746CxRkg9n4%2F%E1%84%83%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3%20(11).jpeg-resize?alt=media&token=411e5884-c8c0-4a19-b8da-0ee321c8cf3a",
            url:
              "https://firebasestorage.googleapis.com/v0/b/steadee-pf.appspot.com/o/editor%2FWuIFA9Ihv746CxRkg9n4%2F%E1%84%83%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3%20(11).jpeg?alt=media&token=e33668b4-e679-4594-96db-656c1acb446e",
          },
        ],
      },
    },
  ];
function Detail(
 {data}:Props
  ) {
  const {
    state,
    template,
    timestamp
  }=data
  const agent = useSelector(
    (state: RootState) => state.config.identification.agent
  );
  const [isHead, setIsHead] = useState(false);

  const __scrollHandle = useCallback(() => {
    if (window.scrollY <= 163) {
      if (isHead) {
        setIsHead(false);
      }
    }
    if (window.scrollY >= 164) {
      if (!isHead) {
        setIsHead(true);
      }
    }
  }, [isHead, agent]);

  useEffect(() => {
    document.addEventListener("scroll", __scrollHandle);
    return () => {
      document.removeEventListener("scroll", __scrollHandle);
    };
  }, [__scrollHandle]);
  return (
    <div
      style={{
        width: "100%",
        height: "auto",
      }}
    >
      <Header agent={agent} isHead={isHead} />
      {state === "portfolio" ? (
        <Top>공사실적</Top>
      ) : (
        <NoticeTop>공지사항</NoticeTop>
      )}
      <Body>
        <div className="wrapper">
          <div className="top">
            <div className="title">명절연휴안내</div>
            <div className="time-wrapper">
              <div className="time">2020.02.05 ~ 2021.02.05</div>
              <div className="view">조회수 342</div>
            </div>
            <div className="grey-bar" />
          </div>
          <div className="templates">
            {template.map(({ type, content }:{type:string; content:string;}, idx:number) => {
              if (type === "TITLE") {
                return <Title key={idx} content={content} />;
              } else if (type === "IMAGE") {
                return <Image key={idx} content={content} />;
              } else if (type === "VIDEO") {
                return <Video key={idx} content={content} />;
              } else if (type === "SUMMARY") {
                return <Summary key={idx} content={content} />;
              }
            })}
          </div>
        </div>
      </Body>
      <footer className={styles.footer}>
        <Footer agent={agent} />
      </footer>
    </div>
  );
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes


export const getStaticPaths: GetStaticPaths<any> = async (context) => {
  
   const popo = await getEditor().then((res)=>{
      return res
  })

  const paths = await popo.map((post:string,idx:number)=>({
   params:{id:post}
  }))
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps(params:{params:{id:string}}): Promise<GetStaticPropsResult<Props>> {
  const temId = params.params.id.split("-")
    let data
   await getDetail(temId[1]).then((result)=>{
      data = result
    })
    console.log(data)
    return {
        props: {
            data,
        },
    };
}


export default Detail;
