import React, { useEffect, useRef } from "react";
import styled from "styled-components";

type Props = {
  content: string | any;
};
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 45px;
  font-size: 17px;
  font-weight: normal;
  line-height: 2.06;
  font[size="1"] {
    font-size: 13px;
  }

  font[size="2"] {
    font-size: 15px;
  }

  font[size="3"] {
    font-size: 17px;
  }

  font[size="4"] {
    font-size: 19px;
  }

  font[size="5"] {
    font-size: 21px;
  }

  font[size="6"] {
    font-size: 23px;
  }

  font[size="7"] {
    font-size: 25px;
  }
`;
function Title({ content }: Props) {
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.innerHTML = content;
    }
    return () => {};
  }, [contentRef]);

  return <Wrapper ref={contentRef}>{content}</Wrapper>;
}

export default Title;
