import React from "react";
import styled from "styled-components";

function FloaingFooter() {
  return (
    <StFooter>
      <StFooterBox>
        <StButton />
      </StFooterBox>
    </StFooter>
  );
}

const StFooter = styled.footer`
  width: 100%;
  height: 5.5rem;
  background: rgb(250, 250, 253);
  box-shadow: rgb(234 233 241) 0px -1px 0px 0px;
  position: absolute;
  left: 0px;
  bottom: 0px;
`;

const StFooterBox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  width: 1024px;
  margin: auto;
`;

const StButton = styled.div`
  height: 3.5rem;
  width: 10rem;
  color: rgb(255, 255, 255);
  font-size: 20px;
  font-weight: 700;
  border-radius: 2px;
  background: rgb(255, 80, 88);
  position: relative;

  ::before {
    content: "등록하기";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default FloaingFooter;
