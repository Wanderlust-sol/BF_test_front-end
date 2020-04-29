import React, { useState } from "react";
import { connect } from "react-redux";
import { openDetail } from "Redux/Actions";
import styled, { keyframes } from "styled-components";
import WindowNav from "Components/ResultWindow/WindowNav";
import AboutDetail from "Components/About/AboutDetail";
import InfoData from "./AboutData";
import MEMBERS from "Images/About/members.jpg";
import CLICK from "Images/About/click.svg";
import Footer from "Components/ResultWindow/Footer";

const About = (props) => {
  const { detail, openDetail } = props;
  const [info, setInfo] = useState({});

  const Data = { InfoData }.InfoData;

  const handleOpenDetail = (id) => {
    setInfo(Data[id]);
    openDetail();
  };

  return (
    <AboutWrapper>
      <WindowNav title="About" />
      <Section>
        <Text>
          <br />
          안녕하세요!
          <br />
          BF Test는 위코드 6기 수강생 7명이 모여 진행한 토이 프로젝트입니다.
          <br />
          <br />
          코딩의 코자도 모르던 저희는 위코드를 통해 처음 코딩을 배우게 되었고,
          백엔드와 프론트엔드를 선택하는 과정에서 어려움을 겪었습니다.
          <br />
          <br />
          저희뿐만 아니라 코딩을 배우고자 결심하신 많은 분이 같은 고민을 겪었을
          거라 생각했습니다. 그런 여러분들의 고민을 조금이나마 덜어드리고자 이번
          프로젝트를 준비하게 됐습니다.
          <br />
          <br />
          단순히 개인의 성향을 알아보는 심리 테스트이기 때문에 크게 의미 부여는
          삼가해주세요! 참고용으로 가볍게 즐겨주시길 바랍니다.
          <br />
          <br />
          그럼 다들 멋진 개발자로 성장하시길 응원합니다!!
          <br />
        </Text>
        <ImgWrapper>
          <img src={MEMBERS} alt="members" />
          <Rainbow>
            {Data.map((card) => {
              return (
                <Color
                  className={card.color}
                  key={card.id}
                  onClick={() => handleOpenDetail(card.id)}
                >
                  {card.name}
                </Color>
              );
            })}
          </Rainbow>
          <Click>
            <h3>click here</h3>
            <img className="click" src={CLICK} alt="click" />
          </Click>
        </ImgWrapper>
        {detail && <AboutDetail data={info} />}
      </Section>
      <Footer />
    </AboutWrapper>
  );
};

//내가 사용하고 싶은 state값 불러오기
// ex) detail오픈하려면 reducer -> controlDetail에 있는 detail state값 가져와야해
const mapStateToProps = (state) => {
  return {
    detail: state.controlDetail.detail,
  };
};

export default connect(mapStateToProps, { openDetail })(About);

const AboutWrapper = styled.div`
  width: 750px;
  height: auto;
  border: 2px solid #000000;
  box-shadow: 13px 10px 0px -1px rgba(74, 79, 79, 1);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;

  @media only screen and (max-width: 415px) {
    width: 100vw;
    height: 100vh;
    margin: 0;
  }
`;

const Section = styled.div`
  width: 100%;
  height: auto;
  background: #244c88;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 415px) {
    height: 100%;
  }
`;

const Text = styled.div`
  width: 95%;
  font-size: 15px;
  color: #ffffff;
  line-height: 1.2;
  letter-spacing: 1px;

  @media only screen and (max-width: 415px) {
    height: 42%;
    overflow: scroll;
  }

  @media only screen and (max-width: 320px) {
    font-size: 0.8rem;
  }
`;

const ImgWrapper = styled.div`
  width: 60%;

  img {
    width: 100%;
    height: auto;
    margin: 20px auto 0;
  }

  @media only screen and (max-width: 420px) {
    width: 80%;
  }
`;

const Rainbow = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 10px;
  display: flex;

  @media only screen and (max-width: 420px) {
    margin-bottom: 0;
  }
`;

const Color = styled.div`
  width: calc(100% / 7);
  height: 100%;
  text-align: center;
  cursor: pointer;

  @media only screen and (max-width: 420px) {
    font-size: 0.7rem;
    line-height: 1.7;
  }

  @media only screen and (max-width: 380px) {
    font-size: 0.6rem;
    line-height: 1.9;
  }

  &.red {
    background: red;
  }
  &.orange {
    background: orange;
  }
  &.yellow {
    background: yellow;
  }
  &.green {
    background: green;
  }
  &.blue {
    background: blue;
  }
  &.navy {
    background: navy;
  }
  &.purple {
    background: purple;
  }
`;

const drop = keyframes`
from {
  opacity: 1;
}
to {
 opacity: 0;
}
`;

const Click = styled.div`
  position: absolute;
  bottom: 25px;
  left: 100px;
  animation: ${drop} 1.5s linear infinite;

  h3 {
    color: #ffffff;
    transform: rotate(-30deg);
  }

  img {
    width: 40px;
    height: auto;
  }

  @media only screen and (max-width: 420px) {
    display: none;
  }
`;
