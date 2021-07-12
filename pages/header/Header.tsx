import React, { useEffect, useCallback } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useSelector } from "react-redux";
const menu_layout = [
  { title: "회사소개", link: "/about" },
  { title: "공사실적", link: "/history" },
  { title: "공지사항", link: "/notice" },
  { title: "문의/연락", link: "/question" },
];
const HeadStyle = styled.div`
  position: fixed;
  width: 100%;
  height: 64px;
  top: 0;
  left: 0;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 75px;
`;
const MenuStyle = styled.div`
  display: grid;
  column-gap: 48px;
  grid-template-columns: repeat(4, auto);
  font-size: 13px;
  font-weight: bold;
`;
function Header() {
  const __updateAgent = useCallback(
    () => {
      // if (agent === "pc") {
      //   if (window.innerWidth < 1280) {
      //     // console.log('pc to mobile!');
      //     dispatch({
      //       type: __UPDATE_AGENT__,
      //       payload: "mobile",
      //     });
      //   }
      // } else {
      //   if (window.innerWidth > 1280) {
      //     // console.log('mobile to pc!');
      //     dispatch({
      //       type: __UPDATE_AGENT__,
      //       payload: "pc",
      //     });
      //   }
      // }
    },
    [
      // agent, dispatch
    ]
  );
  const test = useSelector((state) => state);
  console.log(test);
  useEffect(() => {
    window.addEventListener("resize", __updateAgent);
    return () => {
      window.removeEventListener("resize", __updateAgent);
    };
  }, [__updateAgent]);
  return (
    <HeadStyle>
      <img src="/assets/logo.svg" alt="Aju" />
      <MenuStyle>
        {menu_layout.map(({ link, title }, idx) => {
          return (
            <Link href={link} key={idx}>
              <a>{title}</a>
            </Link>
          );
        })}
      </MenuStyle>
    </HeadStyle>
  );
}

export default Header;
