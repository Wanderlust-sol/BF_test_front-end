import React, { useState } from "react";
import styled from "styled-components";
import Typing from "react-typing-animation";
import BFICON from "Images/Group6.png";
import QuestionMain from "Components/Question/QuestionMain";
import WindowNav from "Components/ResultWindow/WindowNav";
import TestBox from "Components/TestBox";

const typeSpeed = 20;

const QuestionWindow = (props) => {
  const [loading, setLoading] = useState(false);

  const getLoadingStatus = (status) => {
    setTimeout(setLoading(status), 2000);
  };

  return (
    <QuestionsWrapper>
      <QuestionsContainer>
        <WindowNav title="Front...? Back...?" />
        {/* header*/}
        {/* <QuestionsHeader>
          <BFIconDiv></BFIconDiv>
          <HeadContent>Front...? Back...?</HeadContent>
          <ButtonBox>
            <CloseButtonDiv></CloseButtonDiv>
          </ButtonBox>
        </QuestionsHeader> */}
        {/* main */}
        <QuestionMainDiv>
          {/* {!loading ? (
            <> */}
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
              자, 그럼 당신의 성향을 알려줄 BF -
              <Typing.Delay ms={typeSpeed * 20} />
              TEST 를 시작하겠습니다. . . !!!
            </span>
            <Typing.Backspace
              count={50}
              speed={typeSpeed}
              delay={typeSpeed * 100}
            />
          </Typing>
          {/********** 타이핑 되는 부분 question layout 완성하고 나서 복구해야함 -끝 *********/}
          {/* <TestContainerDiv> */}
          {/* <TestBox /> */}
          {/* </TestContainerDiv> */}
          <QuestionMain
            getLoadingStatus={(status) => getLoadingStatus(status)}
            getData={(data) => {
              props.getData(data);
            }}
            loading={loading}
          ></QuestionMain>
          {/* </>
          ) : (
            ""
          )} */}
        </QuestionMainDiv>
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
  transform: translate(-50%, -50%);
`;

const QuestionsContainer = styled.div`
  box-shadow: 13px 10px 0px -1px rgba(74, 79, 79, 1);
  width: 700px;
  border: 3px solid #000000;
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
    font-size: 20px;
  }
`;
