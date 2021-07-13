import React, { useEffect, useCallback } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
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
  .logo {
    cursor: pointer;
  }
  @media screen and (max-width: 1366px) {
    padding: 0 32px;
  }
`;
const MenuStyle = styled.div`
  display: grid;
  column-gap: 48px;
  grid-template-columns: repeat(4, auto);
  font-size: 13px;
  font-weight: bold;
  @media screen and (max-width: 1366px) {
    display: flex;
    column-gap: 0;
    cursor: pointer;
  }
`;
type HeadProps = {
  agent: string;
};
function Header({ agent }: HeadProps) {
  const dispatch = useDispatch();

  const __updateAgent = useCallback(() => {
    if (
      agent !== "tablet" &&
      767 < window.innerWidth &&
      window.innerWidth < 1366
    ) {
      // console.log('pc to mobile!');
      dispatch({
        type: "CONFIG/UPDATE/AGENT",
        payload: "tablet",
      });
    }
    if (agent !== "pc" && window.innerWidth > 1365) {
      // console.log('mobile to pc!');
      dispatch({
        type: "CONFIG/UPDATE/AGENT",
        payload: "pc",
      });
    }
    if (agent !== "mobile" && window.innerWidth < 768) {
      dispatch({
        type: "CONFIG/UPDATE/AGENT",
        payload: "mobile",
      });
    }
  }, [agent, dispatch]);
  useEffect(() => {
    __updateAgent();
    window.addEventListener("resize", __updateAgent);
    return () => {
      window.removeEventListener("resize", __updateAgent);
    };
  }, [__updateAgent]);
  return (
    <HeadStyle>
      <Link href={"/"}>
        <img src="/assets/logo.svg" alt="Aju" className="logo" />
      </Link>
      <MenuStyle>
        {agent === "pc" ? (
          menu_layout.map(({ link, title }, idx) => {
            return (
              <Link href={link} key={idx}>
                <a>{title}</a>
              </Link>
            );
          })
        ) : (
          <div className="menu-icon">
            <img src="/assets/menu.svg" alt="메뉴" />
          </div>
        )}
      </MenuStyle>
    </HeadStyle>
  );
}

export default Header;
