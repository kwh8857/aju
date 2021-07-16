import React, { useEffect, useCallback } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reducer";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
const menu_layout = [
  { title: "회사소개", link: "/about" },
  { title: "공사실적", link: "/history" },
  { title: "공지사항", link: "/notice" },
  { title: "문의/연락", link: "/question" },
];
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #2f2f2f;
  position: fixed;
  z-index: 900;
  overflow: hidden;
  touch-action: none;
  left: 100%;
  transition: left 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  a {
    color: white;
    width: 72px;
    height: 74px;
    border-bottom: solid 1px #dbdbdb;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 17px;
    font-weight: bold;
  }
  .un {
    border: 0;
  }
`;
function MbMenu() {
  const dispatch = useDispatch();
  const isMenu = useSelector((state: RootState) => state.config.isMenu);
  const agent = useSelector(
    (state: RootState) => state.config.identification.agent
  );
  const route = useRouter();
  const __close = useCallback(() => {
    dispatch({
      type: "CONFIG/MENU/CHANGE",
      payload: false,
    });
  }, [dispatch]);
  useEffect(() => {
    if (isMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
    return () => {};
  }, [isMenu]);
  useEffect(() => {
    if (agent !== "pc") {
      __close();
    }
    return () => {};
  }, [route.pathname, __close, agent]);
  return (
    <Wrapper style={isMenu ? { left: 0 } : undefined}>
      {menu_layout.map(({ title, link }, idx) => {
        return (
          <Link key={idx} href={link}>
            <a className={idx === 3 ? "un" : ""}>{title}</a>
          </Link>
        );
      })}
    </Wrapper>
  );
}

export default MbMenu;
