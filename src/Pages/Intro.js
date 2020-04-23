import React, { useEffect, useState } from "react";
import styled from "styled-components";
import figlet from "figlet";
import standard from "figlet/importable-fonts/Standard.js";
import Typing from "react-typing-animation";
import Grain from "img/grain.png";

const Intro = () => {
  const [mainText, setMainText] = useState("");
  const getText = () => {
    figlet.parseFont("Standard", standard);

    figlet.text(
      "BF-TEST",
      {
        font: "Standard"
      },
      function (err, data) {
        console.log(data);
        setMainText(data);
      }
    );
  };

  useEffect(() => getText(), []);

  return (
    <>
      <IntroWrapper>
        <GrainBg></GrainBg>
        <Typing speed={50}>
          <TypedText>
            BF 테스트에 오신걸 환영합니다.
            <br />
            이 테스트를 통해 자신의 성향이 프론트엔드와 백엔드중 어디에 더
            가까운지 알아보세요.
            <br />
            <br />
            *경고*
            <br />이 테스트는 그저 테스트일 뿐이므로 참고만 해주시기 바랍니다.
          </TypedText>
        </Typing>
        <MainText>
          <code>{mainText}</code>
        </MainText>
      </IntroWrapper>
    </>
  );
};

export default Intro;

const IntroWrapper = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const GrainBg = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${Grain});
  z-index: 40;
  animation: grainAnimation 1s steps(4) infinite;

  @keyframes grainAnimation {
    0% {
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
    }
    10% {
      -webkit-transform: translate(-5%, -5%);
      transform: translate(-5%, -5%);
    }
    20% {
      -webkit-transform: translate(-10%, 5%);
      transform: translate(-10%, 5%);
    }
    30% {
      -webkit-transform: translate(5%, -10%);
      transform: translate(5%, -10%);
    }
    40% {
      -webkit-transform: translate(-5%, 15%);
      transform: translate(-5%, 15%);
    }
    50% {
      -webkit-transform: translate(-10%, 5%);
      transform: translate(-10%, 5%);
    }
    60% {
      -webkit-transform: translate(15%, 0);
      transform: translate(15%, 0);
    }
    70% {
      -webkit-transform: translate(0, 10%);
      transform: translate(0, 10%);
    }
    80% {
      -webkit-transform: translate(-15%, 0);
      transform: translate(-15%, 0);
    }
    90% {
      -webkit-transform: translate(10%, 5%);
      transform: translate(10%, 5%);
    }
    100% {
      -webkit-transform: translate(5%, 0);
      transform: translate(5%, 0);
    }
  }
`;

const TypedText = styled.p`
  color: #60bb5e;
  font-size: 18px;
  position: absolute;
  /* left: 370px; */
  /* top: 180px; */
  top: 0;
  z-index: 100;
  line-height: 30px;
  display: flex;
  align-items: center;
`;

const MainText = styled.pre`
  color: #60bb5e;
  font-size: 25px;
  position: absolute;
  left: 50%;
  top: 350px;
  transform: translateX(-50%);
  z-index: 100;
  font-family: monospace;
  animation: blinker 0.4s infinite;

  @keyframes blinker {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
