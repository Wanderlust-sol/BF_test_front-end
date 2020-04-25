import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import WindowNav from "Components/ResultWindow/WindowNav";
import AboutDetail from "Components/About/AboutDetail";
import InfoData from "./AboutData";
import MEMBERS from "Images/About/members.jpg";
import CLICK from "Images/About/click.svg";

const About = () => {
  const [info, setInfo] = useState({});
  const [detail, setDetail] = useState(false);

  const Data = { InfoData }.InfoData;

  const goToDetail = (id) => {
    setDetail(!detail);
    setInfo(Data[id]);
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
        <ImageWrapper>
          <Rainbow>
            {Data.map((card) => {
              return (
                <Color
                  className={card.color}
                  key={card.id}
                  onClick={() => goToDetail(card.id)}
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
        </ImageWrapper>
        {detail && <AboutDetail data={info} />}
      </Section>
    </AboutWrapper>
  );
};

export default About;

const AboutWrapper = styled.div`
  width: 750px;
  height: auto;
  border: 2px solid #000000;
  box-shadow: 13px 10px 0px -1px rgba(74, 79, 79, 1);
  position: absolute;
  top: 150px;
  left: 30%;
  z-index: 99;
`;

const Section = styled.div`
  width: 100%;
  height: auto;
  background: #244c88;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.div`
  width: 95%;
  font-size: 15px;
  color: #ffffff;
  line-height: 1.2;
  letter-spacing: 1px;
  text-align: justify;
`;

const ImageWrapper = styled.div`
  width: 65%;
  height: 350px;
  margin: 20px auto 15px;
  background: url(${MEMBERS}) no-repeat center center;
  background-size: cover;
  position: relative;
`;

const Rainbow = styled.div`
  width: 100%;
  height: 20px;
  position: absolute;
  bottom: 0;
  display: flex;
  z-index: 999;
`;

const Color = styled.div`
  width: calc(100% / 7);
  height: 100%;
  text-align: center;
  cursor: pointer;

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
  bottom: 0;
  left: -50px;
  animation: ${drop} 1.5s linear infinite;

  h3 {
    color: #ffffff;
    margin-bottom: 15px;
    transform: rotate(-30deg);
  }

  img {
    width: 40px;
    height: auto;
  }
`;
