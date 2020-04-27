import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import figlet from "figlet";
import standard from "figlet/importable-fonts/Standard.js";
import Typing from "react-typing-animation";
import Grain from "Images/grain.png";
import Mono from "Styles/Fonts/monospace.ttf";

const Intro = props => {
  const [mainText, setMainText] = useState("");
  const [count, setCount] = useState(5);
  const [finishType, setFinishType] = useState(false);
  const [finishCount, setFinishCount] = useState(false);

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

  const countingNum = () => {
    setCount(count - 1);

    if (count === 0) {
      setFinishCount(true);
    }
  };

  const delayTime = () => {
    setTimeout(() => {
      setFinishType(true);
    }, 500);
  };
  const startClick = () => {
    props.history.push("/main");
  };

  useEffect(() => getText(), []);
  return (
    <>
      <IntroWrapper>
        <GrainBg />
        <TypingBox>
          {!finishCount && (
            <Typing
              speed={30}
              onFinishedTyping={() => {
                delayTime();
              }}
              className="tying-text"
            >
              <TypedText finishType={finishType}>
                옛날 옛적에, 코딩의 코자도 모르던 사람들이 위코드를 통해 처음
                코딩을 배우게 되었습니다.
                <br />
                <br />
                그런데 시련은 생각보다 빨리 찾아왔습니다.
                <br />
                백엔드와 프론트엔드를 선택하는 갈림길에 서고야 만 것이죠...
                <br />
                <br />
                서로를 부둥켜 안고 눈물 흘렸던 이들은 길고 긴 고민 끝에 한 가지
                결심을 하고 각자 길을 떠납니다.
                <br />
                <br />
                휼륭한 개발자가 되어 다시 만나서 이 어려움을 해결할 전설의
                테스트를 만들겠다는 결심이었죠.
                <br />
                <br />
                .<br />
                .<br />
                .<br />
                <br />
                2020년 4월, 훌륭한 프론트엔드와 백엔드 개발자로 성장한 이들이
                결심을 이루기 위해 모였습니다.
                <br />
                <br />
                기대되지 않나요?
                <br />
                프론트엔드와 백엔드 중 당신의 성향에 맞는 포지션을 찾아주는
                전설의 심리테스트!
                <br />
                <br />
                지금 바로 BF 테스트의 세계로 여러분을 초대합니다!
              </TypedText>
            </Typing>
          )}
          {finishType && (
            <Typing
              speed={300}
              loop={count === -1 ? false : true}
              onFinishedTyping={() => {
                countingNum();
              }}
            >
              <TypedNum>{count}</TypedNum>
              <Typing.Backspace count={1} delay={500} />
            </Typing>
          )}
        </TypingBox>
        {finishCount && (
          <MainWrapper>
            <MainText>
              <code>{mainText}</code>
            </MainText>
            <StartBox onClick={startClick}>START</StartBox>
          </MainWrapper>
        )}
      </IntroWrapper>
    </>
  );
};

export default withRouter(Intro);

const IntroWrapper = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  @media only screen and (max-width: 415px) {
    font-size: 1rem;
  }
`;

const GrainBg = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${Grain});
  z-index: 2;
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

const TypingBox = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const TypedText = styled.p`
  color: #60bb5e;
  font-size: 20px;
  line-height: 30px;
  position: absolute;
  left: 20px;
  top: 20px;
  z-index: 100;

  @media only screen and (max-width: 415px) {
    display: ${props => props.finishType && "none"};
    font-size: 15px;
    width: 90%;
    line-height: 1rem;
  }

  @media only screen and (min-width: 416px) and (max-width: 970px) {
    display: ${props => props.finishType && "none"};
    font-size: 15px;
    width: 90%;
    line-height: 1rem;
  }
`;

const TypedNum = styled.span`
  color: #60bb5e;
  font-size: 23px;
  line-height: 30px;
  position: absolute;
  left: 520px;
  top: 560px;
  z-index: 100;

  @media only screen and (max-width: 415px) {
    font-size: 145px;
    left: 42%;
    top: 46%;
    line-height: 20px;
  }

  @media only screen and (min-width: 416px) and (max-width: 970px) {
    display: ${props => props.finishType && "none"};
    font-size: 145px;
    left: 45%;
    top: 46%;
    line-height: 20px;
  }
`;

const MainWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainText = styled.pre`
  color: #60bb5e;
  font-size: 30px;
  font-family: monospace Mono;
  animation: blinker 0.4s infinite;

  @font-face {
    font-family: Mono;
    font-weight: 400;
    src: url(${Mono});
  }

  @media only screen and (max-width: 415px) {
    font-size: 1rem;
  }

  @media only screen and (min-width: 416px) and (max-width: 970px) {
    font-size: 1.5rem;
  }

  @keyframes blinker {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const StartBox = styled.div`
  width: 150px;
  height: 45px;
  color: #60bb5e;
  font-size: 35px;
  border: 2px solid #60bb5e;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  cursor: pointer;
  animation: startblinker 0.4s infinite;

  @keyframes startblinker {
    0% {
      color: #60bb5e;
      border: 2px solid #60bb5e;
    }
    50% {
      color: black;
      background-color: #60bb5e;
    }
    100% {
      color: #60bb5e;
      border: 2px solid #60bb5e;
    }
  }
`;
