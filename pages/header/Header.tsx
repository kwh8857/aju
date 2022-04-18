import React, { useEffect, useCallback } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducer";
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
  box-sizing: border-box;
  padding: 0 75px;
  z-index: 1000;
  transition: background-color 0.2s ease-in-out;
  & > .wrapper {
    width: 100%;
    max-width: 1224px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      cursor: pointer;
    }
  }

  @media screen and (max-width: 1365px) {
    padding: 0 32px;
  }
`;
const MenuStyle = styled.div`
  display: grid;
  column-gap: 45px;
  grid-template-columns: repeat(4, auto);
  font-size: 16px;
  font-weight: bold;
  @media screen and (max-width: 1365px) {
    display: flex;
    column-gap: 0;
    cursor: pointer;
  }
`;
type HeadProps = {
  agent: string;
  isHead: boolean;
};

function Header({ agent, isHead }: HeadProps) {
  const dispatch = useDispatch();
  const isMenu = useSelector((state: RootState) => state.config.isMenu);
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
    <HeadStyle
      style={
        isHead && !isMenu
          ? {
              backgroundColor: "white",
            }
          : undefined
      }
    >
      <div className="wrapper">
        <Link href={"/"}>
          <img
            src={`/assets/logo${isHead && !isMenu ? "black" : ""}.svg`}
            alt="Aju"
            className="logo"
          />
        </Link>
        <MenuStyle>
          {agent === "pc" ? (
            menu_layout.map(({ link, title }, idx) => {
              return (
                <Link href={link} key={idx}>
                  <a style={isHead && !isMenu ? { color: "black" } : undefined}>
                    {title}
                  </a>
                </Link>
              );
            })
          ) : (
            <div
              className="menu-icon"
              onClick={() => {
                dispatch({
                  type: "CONFIG/MENU/CHANGE",
                  payload: !isMenu,
                });
              }}
            >
              <img
                src={`/assets/menu${
                  isMenu ? "-cancel" : isHead ? "black" : ""
                }.svg`}
                alt="메뉴"
              />
            </div>
          )}
        </MenuStyle>
      </div>
    </HeadStyle>
  );
}

export default Header;
