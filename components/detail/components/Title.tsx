import React, { forwardRef, Ref, useEffect, useRef } from "react";
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
`;
function Title({ content }: Props) {
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (contentRef) {
      const cop =content.current as HTMLDivElement
      cop.innerHTML = content;
    }
    return () => {
    }
  }, [contentRef])

  return <Wrapper ref={contentRef}>{content}</Wrapper>
;
}

export default Title;
