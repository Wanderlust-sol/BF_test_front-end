import React from "react";
import styled from "styled-components";

const Footer = (data) => {
  const goToWecode = () => {
    window.open("https://wecode.co.kr/");
  };

  return (
    <FooterContainer onClick={() => goToWecode()}>
      <WecodeIconBox>
        <WecodeIcon src="https://images.velog.io/images/carminchameleon/post/066341e6-998e-428d-aa8e-3ec98410ff0d/image.png"></WecodeIcon>
      </WecodeIconBox>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  display: none;
  @media only screen and (max-width: 415px) {
    border-top: 2px solid black;
    width: 100%;
    height: 30px;
    display: block;
    background-color: #0312ef;
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
    z-index: 99999;
  }
`;

const WecodeIconBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;
const WecodeIcon = styled.img`
  width: 70px;
  height: 13px;
`;
