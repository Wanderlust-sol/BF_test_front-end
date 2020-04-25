import React from "react";
import styled from "styled-components";
import WindowNav from "Components/ResultWindow/WindowNav";
import BG from "Images/AboutDetail/BG.png";
import AIDEN from "Images/AboutDetail/Aiden.png";

const Detail = () => {
  return (
    <DetailWrapper>
      <WindowNav title="Name" />
      <Section>
        <Image src={AIDEN} alt="img"></Image>
        <TextWrapper>
          <Name>AIDEN</Name>
          <Position>Front-end </Position>
          <Github>GITHUB</Github>
        </TextWrapper>
      </Section>
    </DetailWrapper>
  );
};

export default Detail;

const DetailWrapper = styled.div`
  width: 350px;
  border: 2px solid #000000;
  background: #699584;
  position: absolute;
  top: 200px;
  right: 10%;
  z-index: 999;
`;

const Section = styled.div`
  width: 100%;
  height: 500px;
  background: url(${BG}) no-repeat center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 350px;
  height: auto;
  border-radius: 50%;
  margin-top: 50px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Name = styled.div`
  font-size: 50px;
`;

const Position = styled.div`
  font-size: 20px;
`;

const Github = styled.div`
  font-size: 20px;
`;
