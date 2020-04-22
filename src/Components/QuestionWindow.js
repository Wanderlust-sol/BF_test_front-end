import React from "react";
import styled from "styled-components";
import BFICON from "Images/Group6.png";
import Typing from "react-typing-animation";

const typeSpeed = 50;

const QuestionWindow = (props) => {
  return (
    <QuestionsWrapper>
      <QuestionsContainer>
        {/* header*/}
        <QuestionsHeader>
          <BFIconDiv></BFIconDiv>
          <HeadContent>Front...? Back...?</HeadContent>
          <ButtonBox>
            <CloseButtonDiv></CloseButtonDiv>
          </ButtonBox>
        </QuestionsHeader>
        {/* main */}
        <QuestionMainDiv>
          <Typing speed={typeSpeed}>
            <span>준비되셨나요 . . . ?</span>
            {/* <Typing.Reset count={1} delay={1100} /> */}
            <Typing.Backspace
              count={18}
              speed={typeSpeed * 2}
              delay={typeSpeed * 12}
            />
          </Typing>
          <Typing speed={typeSpeed}>
            <span>
              <Typing.Delay ms={typeSpeed * 100} />
              자, 그럼 당신의 성향을 알려줄 BF -{" "}
              <Typing.Delay ms={typeSpeed * 20} />
              TEST 를 시작하겠습니다. . . !!!
            </span>
            {/* <Typing.Reset count={20} delay={typeSpeed * 55} /> */}
            <Typing.Backspace
              count={typeSpeed}
              speed={typeSpeed}
              delay={typeSpeed * 44}
            />
          </Typing>
        </QuestionMainDiv>
      </QuestionsContainer>
    </QuestionsWrapper>
  );
};

export default QuestionWindow;

const QuestionsWrapper = styled.div``;

const QuestionsContainer = styled.div`
  box-shadow: 13px 10px 0px -1px rgba(74, 79, 79, 1);
  width: 700px;
`;

// window header

const QuestionsHeader = styled.div`
  width: 698px;
  background: #fdfd96;
  border: 3px solid #000000;
  padding: 8px 0;
  display: flex;
  align-items: center;
  position: relative;
`;

const HeadContent = styled.span`
  font-family: Aldrich;
  font-size: 30px;
  color: black;
  margin-left: 10px;
`;

const BFIconDiv = styled.div`
  margin-left: 10px;
  background-image: url(${BFICON});
  background-position: center;
  background-repeat: none;
  background-size: cover;
  width: 33px;
  height: 33px;
`;

const ButtonBox = styled.div`
  position: absolute;
  right: 10px;
`;

const CloseButtonDiv = styled.div`
  width: 36px;
  border: 3px solid #000000;
  background-color: transparent;
`;

// window
const QuestionMainDiv = styled.div`
  width: 678px;
  height: 626px;
  border: 3px solid black;
  border-top: 0px;
  background-color: black;
  position: relative;
  padding: 10px;
  span {
    color: white;
    font-size: 20px;
  }
`;
