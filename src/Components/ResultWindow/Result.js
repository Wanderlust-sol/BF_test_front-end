import styled from "styled-components";
import WindowNav from "./WindowNav";
import React, { useEffect } from "react";

const Result = (props) => {
  useEffect(() => {}, []);

  // const FecthData = () => {
  //   fetch("10.58.6.69:8000/poll/result", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       answer: {
  //         "1": 1,
  //         "2": 3,
  //         "3": 5,
  //         "4": 7,
  //         "5": 10,
  //       },
  //       type: "A",
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => console.log(res));
  // };
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
            FRONT-END
          </TypeResultBox>
        </TypeContainer>
        <ResultContainer>
          <CardContainer>
            <CardBox>
              <CardImg src="https://images.velog.io/images/carminchameleon/post/7c135c61-c37d-448b-92f6-a237f2e1718c/image.png"></CardImg>
            </CardBox>
          </CardContainer>
          <ContentContainer>
            <ContentWrapper>
              <ContentInner>
                <TypeName>디자이너 갬성 물씬~ 완벽주의자 프론트엔드</TypeName>
                <TypeContents>
                  css는 미안해ㅜㅜ 대신 기능은 내가 책임져보겠다구우~! 눈으로
                  무언가를 만들어 내는 것도 좋지만 로직을 생각하면 마음이
                  설레이는 당신. 새로운 웹 사이트를 보면 빨리 저 기능을
                  구현해보고 싶어 마음이 콩닥콩닥 합니다. 기능은 좋지만 css 만질
                  생각에 머리가 지끈거린다구요? 너무 걱정하지 마세요~ 지금은
                  완벽하지 않아도 괜찮아요~ css는 하다보면 익숙해 질 거예요.
                </TypeContents>
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
            <FitTypeName>천사표, 나는 다 좋아요 백엔드</FitTypeName>
          </TypeResultBox>
        </RecommendContainer>
        <ShareBox>
          <GlobeIcon src="https://images.velog.io/images/carminchameleon/post/6ec8b50f-b0dc-41aa-90a5-f50adac0fcb9/image.png"></GlobeIcon>
        </ShareBox>
      </Body>
    </Container>
  );
};

export default Result;

const Container = styled.div`
  margin: 0 auto;
  width: 50%;
  height: 60%;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: start;
  -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);

  @media only screen and (max-width: 415px) {
    width: 100vw;
    height: 100vh;
    box-shadow: none;
    margin: 0;
    padding: 0;
  }
`;
const Body = styled.div`
  width: 100%;
  height: 93%;
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
const TypeResultBox = styled.div``;
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
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
  }
  @media only screen and (max-width: 415px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const CardContainer = styled.div`
  margin-left: 10px;
  @media only screen and (max-width: 415px) {
    margin: 0;
  }
`;

const CardBox = styled.div`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 1024px) {
    justify-content: center;
    margin-bottom: 10px;
  }
  @media only screen and (max-width: 415px) {
    justify-content: center;
    margin-bottom: 10px;
  }
`;

const CardImg = styled.img`
  width: 186px;
  height: 266px;
  @media only screen and (max-width: 415px) {
    width: 50%;
    height: 50%;
  }

  @media only screen and (max-width: 375px) {
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
`;
const ContentWrapper = styled.div`
  width: 93%;
  border: 1.5px solid white;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ContentInner = styled.div`
  height: 96%;
  width: 98%;
  border: 1.5px solid white;
  margin: 3px auto;
  text-align: center;
  @media only screen and (max-width: 415px) {
    height: 97%;
    width: 98%;
  }
`;

const TypeName = styled.div`
  border: 2px dotted white;
  margin: 10px;
  line-height: 1.9rem;
  font-size: 1rem;
  @media only screen and (max-width: 1175px) {
    font-size: 0.8rem;
    line-height: 1.2rem;
    letter-spacing: 0.3px;
  }
  @media only screen and (max-width: 415px) {
    font-size: 0.9rem;
    line-height: 1.9rem;
  }
`;

const TypeContents = styled.div`
  text-align: justify;
  font-size: 0.9em;
  margin: 10px;
  line-height: 1.4rem;
  letter-spacing: 0.4px;

  @media only screen and (max-width: 1175px) {
    font-size: 0.7rem;
    line-height: 1.2rem;
    letter-spacing: 0.3px;
  }
  @media only screen and (max-width: 415px) {
    font-size: 0.9rem;
    line-height: 1.2rem;
    letter-spacing: 0.3px;
  }
`;

const RecommendContainer = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  font-size: 1.2rem;
  line-height: 1.6rem;
  color: white;
  position: relative;
  margin-bottom: 10px;
  @media only screen and (max-width: 415px) {
    font-size: 1.2rem;
    line-height: 1.2rem;
    margin-bottom: 0px;
  }
`;

const FitTypeName = styled.span`
  font-size: 1.2rem;
  @media only screen and (max-width: 415px) {
    font-size: 1rem;
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
  }
`;

const GlobeIcon = styled.img`
  width: 55px;
  margin-right: 10px;
  height: 55px;
`;
