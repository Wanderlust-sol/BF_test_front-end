import React from "react";
import styled from "styled-components";
import Nav from "Components/Nav";
import Recycle from "Images/Main/trash.png";
import Computer from "Images/Main/computer.png";

const Main = () => {
  return (
    <MainWrapper>
      <Nav />
      <Section>
        <IconWrapper>
          <Icon>
            <img className="recycle" src={Recycle} alt="computer" />
            <Text>Recycle Bin</Text>
          </Icon>
          <Icon>
            <img className="computer" src={Computer} alt="computer" />
            <Text>Contributor</Text>
          </Icon>
        </IconWrapper>
      </Section>
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  border: 2px solid #000000;
`;

const Section = styled.div`
  width: 100%;
  height: 100%;
  background: #29bbbb;
  position: relative;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 100px;
  left: 40px;
`;

const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;

  .recycle {
    width: 60px;
    height: auto;
    margin-bottom: 5px;
  }

  .computer {
    width: 80px;
    height: auto;
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
`;
