import React from "react";
import styled from "styled-components";
import WindowNav from "./WindowNav";

const Result = (props) => {
  return (
    <ResultWrapper>
      <Container>
        <WindowNav></WindowNav>
        <Body>
          <TypeContainer>
            <TypeTitleBox>
              <UserName>Carmin</UserName>
              <TitleName>'s BF test result: </TitleName>
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
                  <TypeName>기브미관심 귀여운 답정너 프론트엔드 </TypeName>
                  <TypeContents>
                    디자인이랑도 놀고 싶고 데이터랑도 놀고 싶은 당신은 욕심쟁이
                    우후훗~ 어짜피 다 하게 될 거 좀 더 끌리는 걸 먼저
                    배워볼까나~ 뭘 해도 잘 할 당신! 지금은 내면의 목소리에 조금
                    더 귀를 기울여보면 어떨까요?
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
        </Body>
      </Container>
    </ResultWrapper>
  );
};

export default Result;

const ResultWrapper = styled.div`
  width: 100%;
  height: 100vh;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #29bbbb;
`;

const Container = styled.div`
  margin: 0 auto;
  width: 50%;
  height: 60%;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;
const Body = styled.div`
  width: 100%;
  height: 93%;
  border: 1px solid black;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const TypeContainer = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: white;
  position: relative;
`;
const TypeTitleBox = styled.div``;

const UserName = styled.span`
  color: #fabdfc;
`;

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
`;

const CardContainer = styled.div`
  margin-left: 10px;
`;

const CardBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const CardImg = styled.img`
  width: 186px;
  height: 266px;
`;

const ContentContainer = styled.div`
  height: 100%;
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
  height: 260px;
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
`;

const TypeName = styled.div`
  border: 2px dotted white;
  margin: 10px;
  line-height: 1.9rem;
  font-size: 1.2rem;
`;

const TypeContents = styled.div`
  text-align: justify;
  font-size: 1.1em;
  margin: 10px;
  line-height: 1.4rem;
`;

const RecommendContainer = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: white;
  position: relative;
`;

const FitTypeName = styled.span`
  font-size: 1.2rem;
`;
