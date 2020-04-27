import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Nav from "Components/Nav";
import About from "Components/About/About";
import Question from "Components/Question/QuestionWindow";
import Result from "Components/ResultWindow/Result";
import Footer from "Components/ResultWindow/Footer";
import RECYCLE from "Images/Main/trash.png";
import COMPUTER from "Images/Main/computer.png";
import WECODE from "Images/Main/WeTV.png";

const Main = (props) => {
  const { res } = props;
  const [postData, setPostData] = useState({});
  const [about, setAbout] = useState(false);

  const getData = (postData) => {
    setPostData(postData);
  };

  const goToWecode = () => {
    window.open("https://wecode.co.kr/");
  };

  return (
    <MainWrapper>
      <Nav />
      <Section>
        <IconWrapper>
          <Icon>
            <img className="recycle" src={RECYCLE} alt="computer" />
            <Text>Recycle Bin</Text>
          </Icon>
          <Icon onClick={() => setAbout(!about)}>
            <img className="computer" src={COMPUTER} alt="computer" />
            <Text>Contributor</Text>
          </Icon>
          <Icon onClick={() => goToWecode()}>
            <img className="wecode" src={WECODE} alt="computer" />
            <Text>Wecode</Text>
          </Icon>
        </IconWrapper>
        {/* <Question /> */}
        {about && <About />}
        {!res ? <Question /> : <Result />}
      </Section>
      <Footer />
    </MainWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    res: state.controlResult.res,
  };
};

export default connect(mapStateToProps)(Main);

const MainWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  border: 2px solid #000000;
  /* overflow: scroll; */
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
    /* background: #244c88; */
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

  /* @media only screen and (max-width: 415px) {
    display: none;
  } */
`;

const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  @media only screen and (min-width: 500px) and (max-width: 780px) {
    margin-right: 10px;
  }

  .recycle {
    width: 60px;
    height: auto;
    margin-bottom: 5px;
    cursor: pointer;
  }

  .computer {
    width: 80px;
    height: auto;
    cursor: pointer;
  }

  .wecode {
    width: 70px;
    height: auto;
    margin-bottom: 5px;
    cursor: pointer;
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
`;
