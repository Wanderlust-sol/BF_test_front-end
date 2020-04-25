import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
// import Typing from "react-typing-animation";
// import TypingEffect from "Components/TypingEffect";

// const typeSpeed = 50;
const QuestionMain = (props) => {
  const [quesData, setData] = useState({});
  const [quesNum, setQuesNum] = useState(1);
  const [pickedData, setPickData] = useState({});
  const [sendResult, setSendResult] = useState(false);
  // const [sec, setSec] = useState(10);
  // const [apperChoice, setAppearChoice] = useState(false);
  // const [finished, setFinished] = useState(false);
  // const typeRef = useRef(null);

  const clickChoice = (index) => {
    // setFinished(false);
    // 테스트용 if문
    if (quesData.id === 7) {
      setSendResult(true);
      console.log("테스트 테스트 마지막 입니다.");
    } else {
      setQuesNum(
        quesNum + 1,
        console.log("버튼 클릭할 때 찍히는 넘 : ", quesNum)
      );
      setPickData({ ...pickedData, [quesData.id]: quesData.choice[index].id });
      console.log("들어가는 벨류값", {
        ...pickedData,
        [quesData.id]: quesData.choice[index].id,
      });
    }
  };

  // const a = new Typing();
  // console.log(a);

  // 시간 딜레이 시키는 메소드
  // const appearQues = () => {
  //   setTimeout(changeAppearChoice, 1000);
  // };

  //display 바꾸기 위해서 state의 토글 값 바꾸는 메소드
  // const changeAppearChoice = (boolean) => {
  //   setAppearChoice(boolean);
  // };

  //1초에 1씩 뺸다.
  // const interval = setInterval(() => {
  //   setSec((sec) => sec - 1);
  //   console.log(sec);
  // }, 1000);

  const fetchFirstQuestion = async () => {
    console.log("여기인가?");
    try {
      const gotFirstQues = await axios.get(
        // `http://localhost:3000/Data/question${quesNum}.json`
        `http://10.58.6.69:8000/poll/${quesNum}`
      );
      const data = await gotFirstQues.data.question_data;
      console.log("받아지는 데이ㅓ: ", data);
      console.log("질문: ", data.question, "초이스들:", data.choice);

      setData(data);
      // setAppearChoice(false);
    } catch (error) {
      console.log(error);
      alert("다시 시도 바랍니다.");
    }
  };

  // setTimeout을 데이터 통신에 사용하는 것이 아닌 id값을 가지고 1일때, setTimeout을 해준다.
  useEffect(() => {
    if (quesNum === 1) {
      setTimeout(() => {
        fetchFirstQuestion();
      }, 8500);
    } else {
      fetchFirstQuestion();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quesNum]);

  // const appearQues = () => {
  //   setFinished(true);
  //   setTimeout(() => {
  //     changeAppearChoice(true);
  //   }, 1000);
  // };

  return quesData.choice ? (
    <QBoxWrapper>
      <QBoxContainer>
        <QuestionBox>
          {/* <button onClick={CLICK_A}>gpd</button>
          <button onClick={CLICK_R}>gpd</button>
          <button onClick={CLICK_U}>gpd</button>
          <button onClick={CLICK_E}>gpd</button> */}
          {/* <Typing ref={typeRef} speed={typeSpeed} onFinishedTyping={appearQues}>
            >{quesData.question}
          </Typing> */}
          {/********** 컴포넌트 분리함 **********/}
          {/* {finished ? ( */}
          <div>
            {quesData.id}. {quesData.question}
          </div>
          {/* ) : (
            <TypingEffect
              speed={typeSpeed}
              changeAppearChoice={changeAppearChoice}
              question={quesData.question}
              onFinishedTyping={appearQues}
            />
          )} */}

          {/* >{quesData.question} */}
        </QuestionBox>
        {quesData.image_url ? (
          <QImgBox>
            <QImg img={quesData.image_url}></QImg>
          </QImgBox>
        ) : (
          ""
        )}
        {/* const a = () => {} */}
        <TextSelectBox>
          <SelectOutLineDiv onClick={() => clickChoice(0)}>
            <TextSelect>{quesData.choice[0].choice}</TextSelect>
          </SelectOutLineDiv>
          <SelectOutLineDiv onClick={() => clickChoice(1)}>
            <TextSelect>{quesData.choice[1].choice}</TextSelect>
          </SelectOutLineDiv>
        </TextSelectBox>
      </QBoxContainer>
    </QBoxWrapper>
  ) : (
    <div></div>
  );
};
export default QuestionMain;

const QBoxWrapper = styled.div`
  width: 90%;
  margin: 50px auto 0 auto;
`;

const QBoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const QuestionBox = styled.div`
  font-size: 28px;
  color: white;
  line-height: 35px;
`;

const QImgBox = styled.div``;

const QImg = styled.div`
  width: 30%;
  height: 30%;
  background-image: ${(props) => `url(${props.img})`};
  background-repeat: none;
  background-size: cover;
`;
const TextSelectBox = styled.div``;

const SelectOutLineDiv = styled.div`
  width: 100%;
  border: 1px solid white;
  margin: 40px 0;
  padding: 2px;
  display: ${(props) => (props.display ? "block" : "none")};
  display: block;
`;

const TextSelect = styled.div`
  color: white;
  border: 1px solid white;
  font-size: 25px;
  padding: 10px;
  &:hover {
    color: #244c88;
    background-color: white;
  }
  cursor: pointer;
`;
