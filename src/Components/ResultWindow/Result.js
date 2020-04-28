import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled, { keyframes } from "styled-components";
import WindowNav from "./WindowNav";
import About from "Components/About/About";
import Footer from "./Footer";
import Alert from "./Alert";
const Result = (props) => {
  const { type } = props;
  const [typeName, setTypeName] = useState("");
  const [about, setAbout] = useState(false);
  const [data, getData] = useState(false);
  useEffect(() => {
    if (props.type.name !== undefined) {
      getData(true);
      handleType(type.name);
    } else {
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type.name]);

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

  return (
    <Container>
      <WindowNav title="Result"></WindowNav>
      {data ? (
        <BodyWrapper>
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
          </Body>
          <ShareBox>
            <GlobeIcon
              onClick={() => {
                setAbout(true);
              }}
              src="https://user-images.githubusercontent.com/53595582/80459619-94da5a80-896d-11ea-804c-ebecc535d637.png"
            ></GlobeIcon>
          </ShareBox>
        </BodyWrapper>
      ) : (
        <Alert></Alert>
      )}

      {about && <About />}
      <Footer />
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    type: state.getResult,
  };
};

export default connect(mapStateToProps)(Result);

const Container = styled.div`
  margin: 0 auto;
  width: 700px;
  border: 2px solid black;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: start;
  box-shadow: 13px 10px 0px -1px rgba(74, 79, 79, 1);
  z-index: 10;

  @media only screen and (max-width: 415px) {
    width: 100vw;
    height: 100vh;
    box-shadow: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    overflow-y: scroll;
    border-left: 0;
    border-right: 0;
  }
`;

const BodyWrapper = styled.div`
  @media only screen and (max-width: 415px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media only screen and (max-width: 415px) {
  }
`;

const TypeContainer = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  font-size: 22px;
  line-height: 1.9rem;
  color: white;
  position: relative;
  @media only screen and (max-width: 415px) {
    margin-top: 0px;
    font-size: 1.2rem;
    line-height: 1rem;
  }
`;
const TypeTitleBox = styled.div``;

const TitleName = styled.span`
  font-size: 22px;
  @media only screen and (max-width: 415px) {
    font-size: 1.1rem;
    line-height: 1.2rem;
  }
  @media only screen and (max-width: 320px) and (min-height: 568px) {
    font-size: 0.8rem;
    line-height: 1rem;
  }
  @media only screen and (max-width: 320px) and (min-height: 568px) {
    font-size: 0.8rem;
  }
`;
const TypeResultBox = styled.span``;

const Arrow = styled.span`
  margin-right: 4px;
`;

const Wave = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 19px;
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
    display: block;
  }
  @media only screen and (max-width: 375px) and (max-height: 667px) {
    display: block;
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
  @media only screen and (max-width: 700px) {
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
  @media only screen and (max-width: 700px) {
    width: 226px;
    height: 306px;
  }
  @media only screen and (max-width: 415px) {
    width: 50%;
    height: 50%;
  }
  @media only screen and (max-height: 667px) and (max-width: 375px) {
    width: 44%;
    height: 44%;
  }
  @media only screen and (max-width: 375px) and (min-height: 668px) {
    width: 226px;
    height: 306px;
  }
  @media only screen and (max-width: 320px) and (min-height: 568px) {
    width: 40%;
    height: 40%;
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
  }
`;

const TypeName = styled.div`
  border: 2px dotted white;
  margin: 10px;
  line-height: 2rem;
  font-size: 18px;
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
  @media only screen and (max-width: 320px) and (min-height: 568px) {
    font-size: 0.6rem;
    line-height: 0.9rem;
  }
`;

const TypeContents = styled.div`
  text-align: justify;
  font-size: 17px;
  margin: 10px;
  line-height: 1.4rem;
  letter-spacing: 0.4px;
  @media only screen and (max-width: 415px) {
    font-size: 0.9rem;
    line-height: 1.1rem;
  }
  /* iphone 6/7/8 size */
  @media only screen and (max-width: 375px) and (max-height: 667px) {
    font-size: 0.8rem;
  }
  /* iphone X size */
  @media only screen and (max-width: 375px) and (min-height: 668px) {
    font-size: 1rem;
  }
  /* iphone se, 5 */
  @media only screen and (max-width: 320px) and (min-height: 568px) {
    font-size: 0.6rem;
    margin-bottom: 0px;
    margin-top: 0px;
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

  @media only screen and (max-width: 320px) and (min-height: 568px) {
    margin-top: 4px;
  }
`;

const FitTypeName = styled.span`
  font-size: 19px;
  @media only screen and (max-width: 970px) {
    font-size: 1.1rem;
  }
  @media only screen and (max-width: 415px) {
    font-size: 0.9rem;
  }
  @media only screen and (max-width: 320px) and (min-height: 568px) {
    font-size: 0.7rem;
    line-height: 0.8rem;
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

const ShareBox = styled.div`
  display: none;
  @media only screen and (max-width: 415px) {
    /* position: absolute;
    right: -10px; */
    /* bottom: 3px; */
    display: inline-block;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    cursor: pointer;
    animation: ${drop} 1.5s linear infinite;
  }
`;

const GlobeIcon = styled.img`
  width: 55px;
  margin-right: 10px;
  height: 55px;
  @media only screen and (max-width: 415px) {
    width: 65px;
    height: 65px;
  }
  @media only screen and (max-width: 375px) and (max-height: 667px) {
    width: 65px;
    height: 65px;
  }
  /* iphone X size */
  @media only screen and (max-width: 375px) and (min-height: 668px) {
    width: 65px;
    height: 65px;
  }
`;
