import React, { useState } from "react";
import styled from "styled-components";
import Typing from "react-typing-animation";
import QuestionMain from "Components/Question/QuestionMain";
import WindowNav from "Components/ResultWindow/WindowNav";
import ProgressBar from "Components/ProgressBar";
import Footer from "Components/ResultWindow/Footer";

const typeSpeed = 20;

const QuestionWindow = (props) => {
  const [loading, setLoading] = useState(false);
  // const [postData, setPostData] = useState([]);
  const [practice, setPractice] = useState([]);

  const getLoadingStatus = (status) => {
    setTimeout(setLoading(status), 2000);
  };

  const getData = (typeData) => {
    //postData 는 문제(키:벨류)/ type는 type
    const result = [practice, typeData];
    setPractice(result);
  };

  const getKeyValue = (quesData, id) => {
    setPractice({ ...practice, [quesData]: id });
  };

  return (
    <QuestionsWrapper>
      <WindowNav title="Front..? Back..?" />
      <QuestionsContainer>
        <QuestionMainDiv>
          <Typing speed={typeSpeed}>
            <span>준비되셨나요 . . . ?</span>
            <Typing.Backspace
              count={18}
              speed={typeSpeed * 2}
              delay={typeSpeed * 40}
            />
          </Typing>
          <Typing speed={typeSpeed}>
            <span>
              <Typing.Delay ms={typeSpeed * 100} />
              자, 그럼 당신의 성향을 알려줄 BF - TEST 를 시작하겠습니다. . . !!!
            </span>
            <Typing.Backspace
              count={50}
              speed={typeSpeed}
              delay={typeSpeed * 50}
            />
          </Typing>
          <Typing speed={typeSpeed}>
            <span>
              <Typing.Delay ms={typeSpeed * 380} />
              ⚠️ 선택 시 다시 선택하실 수 없으니 신중히 선택해주시기 바랍니다.
              ⚠️
            </span>
            <Typing.Backspace
              count={50}
              speed={typeSpeed * 2}
              delay={typeSpeed * 50}
            />
          </Typing>

          <QuestionMain
            getLoadingStatus={(status) => getLoadingStatus(status)}
            getData={(type) => {
              getData(type);
            }}
            loading={loading}
            getKeyValue={(quesData, id) => getKeyValue(quesData, id)}
          ></QuestionMain>
          {loading && <ProgressBar postData={practice} loading={loading} />}
        </QuestionMainDiv>
        <Footer />
      </QuestionsContainer>
    </QuestionsWrapper>
  );
};

export default QuestionWindow;

// 추후에 컴포넌트로 사용될 시 이 컴포넌트를 감싸는 div는 position:relative 를 가지고 있어야한다.

const QuestionsWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  border: 2px solid #000000;
  box-shadow: 13px 10px 0px -1px rgba(74, 79, 79, 1);
  transform: translate(-50%, -50%);

  @media only screen and (max-width: 720px) {
    width: 100vw;
    height: 100vh;
  }
`;

const QuestionsContainer = styled.div`
  width: 700px;

  @media only screen and (max-width: 720px) {
    width: 100vw;
    box-shadow: none;
    border: none;
  }
`;

// window header

// window
const QuestionMainDiv = styled.div`
  width: 100%;
  height: 626px;
  // border: 3px solid black;
  border-top: 3px;
  background-color: #244c88;
  position: relative;
  padding: 10px;
  span {
    color: white;
    font-size: 18px;
  }
  @media only screen and (max-width: 720px) {
    width: 100vw;
    height: 100vh;
  }
  span {
    @media only screen and (max-width: 320px) {
      font-size: 16px;
    }
  }
`;
