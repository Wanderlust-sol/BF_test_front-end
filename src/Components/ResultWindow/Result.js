import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import WindowNav from "./WindowNav";
import Footer from "./Footer";

const Result = (props) => {
  const [type, setType] = useState([]);
  const [typeName, setTypeName] = useState("");

  useEffect(() => {
    fetchMockData();
  });
  const handleType = (name) => {
    const lastLetter = name[name.length - 3];
    if (lastLetter === "풀") {
      setTypeName("Full-Stack Developer");
    } else if (lastLetter === "트") {
      setTypeName("Front-End Developer");
    } else {
      setTypeName("Back-End Developer");
    }
  };

  const fetchMockData = () => {
    fetch("http://localhost:3000/Data/result.json")
      .then((res) => res.json())
      .then((res) => {
        setType(res.result);
        handleType(res.result.name);
      });
  };

  const handleContribute = () => {
    alert("contribute window");
  };

  return (
    <Container>
      <WindowNav></WindowNav>
      <Body>
        <TypeContainer>
          <TypeTitleBox>
            <TitleName>Your BF test result is: </TitleName>
          </TypeTitleBox>
          <TypeResultBox>
            <Arrow>→</Arrow>
            <Wave>~ </Wave>
            <TitleName>{typeName}</TitleName>
          </TypeResultBox>
        </TypeContainer>
        <ResultContainer>
          <CardContainer>
            <CardBox>
              <CardImg src={type.image_url}></CardImg>
            </CardBox>
          </CardContainer>
          <ContentContainer>
            <ContentWrapper>
              <ContentInner>
                <TypeName>{type.name}</TypeName>
                <TypeContents>{type.description} </TypeContents>
              </ContentInner>
            </ContentWrapper>
          </ContentContainer>
        </ResultContainer>
        <RecommendContainer>
          <TypeTitleBox>
            <TitleName>Your ideal project team member is: </TitleName>
          </TypeTitleBox>
          <TypeResultBox>
            <Arrow>→</Arrow>
            <Wave style={{ color: "#D7AEF7" }}>~ </Wave>
            <FitTypeName>{type.dev_fit}</FitTypeName>
          </TypeResultBox>
        </RecommendContainer>
        <ShareBox>
          <GlobeIcon
            id="captureBtn"
            onClick={() => {
              handleContribute();
            }}
            src="https://user-images.githubusercontent.com/53595582/80277881-12635800-872d-11ea-8377-ecf69598ed36.png"
          ></GlobeIcon>
        </ShareBox>
      </Body>
    </Container>
  );
};

export default Result;

const Container = styled.div`
  margin: 0 auto;
  width: 700px;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: start;
  box-shadow: 13px 10px 0px -1px rgba(74, 79, 79, 1);
  z-index: 10;
  @media only screen and (max-width: 415px) {
    width: 100%;
    height: 100%;
    box-shadow: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
`;

const Body = styled.div`
  width: 100%;
  border: 1px solid black;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media only screen and (max-width: 415px) {
    width: 100%;
    height: 100%;
    posiiton: relative;
  }
`;

const TypeContainer = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: white;
  position: relative;
  @media only screen and (max-width: 415px) {
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
`;
const TypeTitleBox = styled.div``;

const TitleName = styled.span``;
const TypeResultBox = styled.span``;
const Arrow = styled.span`
  margin-right: 4px;
`;

const Wave = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
  color: #39dbaa;
`;

const ResultContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  @media only screen and (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
  }
  @media only screen and (max-width: 415px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const CardContainer = styled.div`
  margin-left: 2%;
  @media only screen and (max-width: 415px) {
    margin: 0;
  }
`;

const CardBox = styled.div`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 970px) {
    justify-content: center;
    margin-bottom: 10px;
  }
  @media only screen and (max-width: 415px) {
    justify-content: center;
    margin-bottom: 10px;
  }
`;

const CardImg = styled.img`
  width: 246px;
  height: 326px;

  @media only screen and (max-width: 415px) {
    width: 50%;
    height: 50%;
  }
  @media only screen and (max-height: 667px) and (max-width: 375px) {
    width: 44%;
    height: 44%;
  }

  @media only screen and (max-width: 375px) and (min-height: 668px) {
    width: 246px;
    height: 326px;
  }
`;

const ContentContainer = styled.div`
  color: white;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  max-height: 326px;

  @media only screen and (max-width: 415px) {
  }
  /* iphone 6/7/8 size */
  @media only screen and (max-width: 375px) and (max-height: 667px) {
    min-height: 198px;
  }
  /* iphone X size */
  @media only screen and (max-width: 375px) and (min-height: 668px) {
    min-height: 214px;
  }
`;
const ContentWrapper = styled.div`
  width: 93%;
  border: 1.5px solid white;
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 2px;
`;

const ContentInner = styled.div`
  height: 100%;
  border: 1.5px solid white;
  text-align: center;
  @media only screen and (max-width: 415px) {
    height: 95%;
    width: 98%;
  }
`;

const TypeName = styled.div`
  border: 2px dotted white;
  margin: 10px;
  line-height: 2rem;
  font-size: 1.2rem;

  @media only screen and (max-width: 415px) {
    font-size: 0.9rem;
    line-height: 1.5rem;
  }
  /* iphone 6/7/8 size */
  @media only screen and (max-width: 375px) and (max-height: 667px) {
    font-size: 0.8rem;
    line-height: 1.6rem;
  }
  /* iphone X size */
  @media only screen and (max-width: 375px) and (min-height: 668px) {
  }
`;

const TypeContents = styled.div`
  text-align: justify;
  font-size: 1.2em;
  margin: 10px;
  line-height: 1.4rem;
  letter-spacing: 0.4px;
  @media only screen and (max-width: 415px) {
    font-size: 0.9rem;
    line-height: 1rem;
  }
  /* iphone 6/7/8 size */
  @media only screen and (max-width: 375px) and (max-height: 667px) {
    font-size: 0.7rem;
  }
  /* iphone X size */
  @media only screen and (max-width: 375px) and (min-height: 668px) {
  }
`;

const RecommendContainer = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  font-size: 1.6rem;
  line-height: 2rem;
  color: white;
  position: relative;
  margin-bottom: 10px;
  @media only screen and (max-width: 415px) {
    font-size: 1.2rem;
    line-height: 1.2rem;
    margin-bottom: 0px;
  }
  @media only screen and (max-width: 970px) {
  }
`;

const FitTypeName = styled.span`
  font-size: 1.2rem;
  @media only screen and (max-width: 970px) {
    font-size: 1.1rem;
  }
  @media only screen and (max-width: 415px) {
    font-size: 0.9rem;
  }
`;

const ShareBox = styled.div`
  display: none;

  @media only screen and (max-width: 415px) {
    display: inline-block;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    cursor: pointer;
  }
`;

const GlobeIcon = styled.img`
  width: 55px;
  margin-right: 10px;
  height: 55px;
  @media only screen and (max-width: 415px) {
    width: 50px;
    height: 50px;
  }
  @media only screen and (max-width: 375px) and (max-height: 667px) {
    width: 50px;
    height: 50px;
  }
  /* iphone X size */
  @media only screen and (max-width: 375px) and (min-height: 668px) {
    width: 65px;
    height: 65px;
  }
`;
