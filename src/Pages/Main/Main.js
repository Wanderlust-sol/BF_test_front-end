import React, { useState } from "react";
import { connect } from "react-redux";
import {
  openAbout,
  openQuestion,
  closeAbout,
  closeDetail,
  closeResult,
  showResult,
} from "Redux/Actions";
import styled from "styled-components";
import Nav from "Components/Nav";
import Question from "Components/Question/QuestionWindow";
import Result from "Components/ResultWindow/Result";
import About from "Components/About/About";
import Footer from "Components/ResultWindow/Footer";
import QUIZ from "Images/Main/quiz.png";
import COMPUTER from "Images/Main/computer.png";
import WECODE from "Images/Main/WeTV.png";
import RECORD from "Images/Main/Record.png";
import { type } from "os";

const Main = (props) => {
  const {
    res,
    openQuestion,
    ques,
    about,
    openAbout,
    closeAbout,
    closeDetail,
    closeResult,
    showResult,
  } = props;

  const [postData, setPostData] = useState({});

  const getData = (postData) => {
    setPostData(postData);
  };

  const goToWecode = () => {
    window.open("https://wecode.co.kr/");
  };

  console.log(
    "❤️으이구우 또 열어봤네 또 열어봤어!! 뭐가 그렇게 궁금한데? 콘솔 닫고 테스트에 집중해 ❤️"
  );
  return (
    <MainWrapper>
      <Nav />
      <Section>
        <IconWrapper>
          <Icon
            onClick={() => {
              openQuestion();
              closeDetail();
              closeAbout();
              closeResult();
            }}
          >
            <img className="test" src={QUIZ} alt="computer" />
            <Text>Test</Text>
          </Icon>
          <Icon onClick={() => showResult()}>
            <img className="record" src={RECORD} alt="record" />
            <Text>Result</Text>
          </Icon>
          <Icon onClick={() => openAbout()}>
            <img className="computer" src={COMPUTER} alt="computer" />
            <Text>Contributors</Text>
          </Icon>
          <Icon onClick={() => goToWecode()}>
            <img className="wecode" src={WECODE} alt="wecode" />
            <Text>Wecode</Text>
          </Icon>
        </IconWrapper>
        {ques && <Question />}
        {res && <Result />}
        {about && <About />}
      </Section>
      <Footer />
    </MainWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    res: state.controlResult.res,
    about: state.controlAbout.about,
    ques: state.controlQuestion.ques,
  };
};

export default connect(mapStateToProps, {
  openAbout,
  openQuestion,
  closeAbout,
  closeDetail,
  closeResult,
  showResult,
})(Main);

const MainWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  border: 2px solid #000000;
  overflow: hidden;
`;

const Section = styled.div`
  width: 100%;
  height: 100%;
  background: #29bbbb;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 415px) {
    height: calc(100% - 60px);
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 100px;
  left: 40px;

  @media only screen and (min-width: 500px) and (max-width: 780px) {
    top: 50px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  @media only screen and (max-width: 415px) {
    top: 20px;
    left: 10px;
  }
`;

const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  @media only screen and (min-width: 500px) and (max-width: 780px) {
    margin-right: 10px;
  }

  .test {
    width: 70px;
    height: auto;
    margin-bottom: 5px;
    cursor: pointer;

    @media only screen and (max-width: 420px) {
      width: 50px;
    }
  }

  .record {
    width: 60px;
    height: auto;
    margin-bottom: 7px;
    cursor: pointer;

    @media only screen and (max-width: 420px) {
      width: 45px;
    }
  }

  .computer {
    width: 80px;
    height: auto;
    cursor: pointer;

    @media only screen and (max-width: 420px) {
      width: 60px;
    }
  }

  .wecode {
    width: 70px;
    height: auto;
    margin-bottom: 5px;
    cursor: pointer;

    @media only screen and (max-width: 420px) {
      width: 50px;
    }
  }
`;

const Text = styled.div`
  width: 100px;
  height: 19px;
  font-size: 14px;
  text-align: center;
  line-height: 19px;
  background: #fabdfc;
  border: 1px solid #000000;
  cursor: pointer;

  @media only screen and (max-width: 420px) {
    width: 80px;
    font-size: 12px;
    line-height: 17px;
  }
`;
