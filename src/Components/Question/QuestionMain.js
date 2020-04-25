import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
// import Typing from "react-typing-animation";
// import TypingEffect from "Components/TypingEffect";

// const typeSpeed = 50;
const QuestionMain = (props) => {
  const [quesData, setData] = useState({});
  const [quesNum, setQuesNum] = useState(1);
  const [quesNumUrl, setQuesNumUrl] = useState(1);
  const [pickedData, setPickData] = useState({});
  // const [loading, setLoading] = useState(false);
  const [sendResult, setSendResult] = useState(false);
  // const [sec, setSec] = useState(10);
  // const [apperChoice, setAppearChoice] = useState(false);
  // const [finished, setFinished] = useState(false);
  // const typeRef = useRef(null);

  const clickChoice = (index) => {
    // setFinished(false);
    // 밑에 두 줄은 마지막 문제일 때, 결과보내는 용
    setSendResult(true);

    setQuesNum(quesNum + 1, console.log("문제에 찍히는 놈 : ", quesNum + 1));
    //quesNumUrl를 이용해서 데이터 통신을 해야힘
    setQuesNumUrl(quesNumUrl + 1);

    setPickData({ ...pickedData, [quesData.id]: quesData.choice[index].id });
    console.log("들어가는 벨류값", {
      ...pickedData,
      [quesData.id]: quesData.choice[index].id,
    });

    // if (quesNum > 13) {
    //   //결과보기로 컴포넌트 체인지
    //   props.getLoadingStatus(true);
    // } else
    if (quesNum === 13) {
      if (quesNumUrl === 14) {
        if (index === 0) {
          setPickData({ ...pickedData, type: "A" });

          props.getData(pickedData);
          props.getLoadingStatus(true);
        } else {
          setPickData({ ...pickedData, type: "B" });
          props.getData(pickedData);
          props.getLoadingStatus(true);
        }
      } else if (quesNumUrl === 15) {
        setPickData(
          { ...pickedData, type: "A" },
          console.log("타입들어가는지 확인중", pickedData)
        );
        props.getData(pickedData);
        props.getLoadingStatus(true);
      } else {
        setPickData(
          { ...pickedData, type: "B" },
          console.log("타입들어가는지 확인중", pickedData)
        );
        props.getData(pickedData);
        props.getLoadingStatus(true);
      }
    } else {
      if (quesNumUrl === 11) {
        if (index === 0) {
          setQuesNumUrl(quesNumUrl + 1);
          console.log("11번문제 1번 선택", quesNumUrl + 1);
        } else {
          setQuesNumUrl(quesNumUrl + 2);
          console.log("11번문제 2번 선택", quesNumUrl + 2);
        }
      } else if (quesNumUrl === 12) {
        if (index === 0) {
          setQuesNumUrl(quesNumUrl + 3);
          console.log("12번문제 1번 선택", quesNumUrl + 3);
        } else {
          setQuesNumUrl(quesNumUrl + 2);
          console.log("12번문제 2번 선택", quesNumUrl + 2);
        }
      } else if (quesNumUrl === 13) {
        if (index === 0) {
          setQuesNumUrl(quesNumUrl + 1);
          console.log("13번문제 1번 선택", quesNumUrl + 1);
        } else {
          setQuesNumUrl(quesNumUrl + 3);
          console.log("12번문제 2번 선택", quesNumUrl + 3);
        }
      }
    }
  };

  console.log("타입들어가는지 확인중", pickedData);
  const fetchFirstQuestion = async () => {
    try {
      const gotFirstQues = await axios.get(
        // `http://localhost:3000/Data/question${quesNum}.json`
        // `http://10.58.6.69:8000/poll/${quesNum}`
        `http://52.79.185.94:8000/poll/${quesNumUrl}`
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
    } else if (quesNum > 13) {
      console.log("나나나");
      props.getData(pickedData);
      props.getLoadingStatus(true);
    } else {
      fetchFirstQuestion();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quesNum]);

  return quesData.choice ? (
    <QBoxWrapper loading={props.loading}>
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
          {/* {quesNum < 14 ? (
            <div>
              {quesNum}. {quesData.question}
            </div>
          ) : (
            ""
          )} */}
          <div>
            {quesNum}. {quesData.question}
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
            <QImg src={quesData.image_url}></QImg>
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
  margin: 35px auto 0 auto;
  display: ${(props) => (props.loading ? "none" : "block")};
`;

const QBoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const QuestionBox = styled.div`
  font-size: 20px;
  color: white;
  line-height: 35px;
`;

const QImgBox = styled.div`
  margin: 0 auto;
  margin-top: 10px;
`;

const QImg = styled.img`
  width: 400px;
  height: 300px;
  // background-image: ${(props) => `url(${props.img})`};
  // background-repeat: none;
  // background-size: cover;
`;
const TextSelectBox = styled.div``;

const SelectOutLineDiv = styled.div`
  width: 100%;
  border: 1px solid white;
  margin-top: 20px;
  padding: 2px;
  display: ${(props) => (props.display ? "block" : "none")};
  display: block;
`;

const TextSelect = styled.div`
  color: white;
  border: 1px solid white;
  font-size: 18px;
  padding: 13px;
  &:hover {
    color: #244c88;
    background-color: white;
  }
  cursor: pointer;
`;
