import React from "react";
import styled from "styled-components";
import { Github } from "@styled-icons/boxicons-logos";
import { Instagram } from "@styled-icons/boxicons-logos";
import WindowNav from "Components/ResultWindow/WindowNav";
import BG from "Images/AboutDetail/BG.png";

const AboutDetail = ({ data }) => {
  return (
    <DetailWrapper>
      <WindowNav title={data.name} />
      <Section>
        {data.img && (
          <Image src={require(`Images/AboutDetail/${data.img}`)}></Image>
        )}
        <TextWrapper>
          <Name>{data.name}</Name>
          <Position>{data.position} </Position>
          <LinkWrapper>
            <Link>
              <GithubIcon />
              <a
                className="github"
                href={data.git}
                target="_blank"
                rel="noopener noreferrer"
              >
                GITHUB
              </a>
            </Link>
            <Link>
              <InstaIcon />
              <a href={data.insta} target="_blank" rel="noopener noreferrer">
                INSTAGRAM
              </a>
            </Link>
          </LinkWrapper>
        </TextWrapper>
      </Section>
    </DetailWrapper>
  );
};

export default AboutDetail;

const DetailWrapper = styled.div`
  width: 350px;
  border: 2px solid #000000;
  background: #699584;
  position: absolute;
  top: 15%;
  right: -35%;
  z-index: 999;

  @media only screen and (max-width: 1025px) {
    right: 5%;
  }

  @media only screen and (max-width: 420px) {
    right: 50%;
    transform: translateX(50%);
  }

  @media only screen and (max-width: 380px) {
    width: 90%;
    top: 8%;
  }
`;

const Section = styled.div`
  width: 100%;
  height: auto;
  background: url(${BG}) no-repeat center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 230px;
  height: 230px;
  border-radius: 50%;
  margin-top: 50px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0 40px;
  width: 100%;
  min-width: 230px;
`;

const Name = styled.div`
  font-size: 50px;
`;

const Position = styled.div`
  font-size: 25px;
  margin-top: 10px;
`;

const LinkWrapper = styled.div`
  font-size: 20px;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 230px;
`;

const Link = styled.div`
  margin-top: 3px;
  display: flex;
  justify-content: center;
  width: 100%;
  min-width: 230px;
  max-height: 20px;

  a {
    cursor: pointer;
  }
  .github {
    margin-left: 3px;
  }
`;

const GithubIcon = styled(Github)`
  width: 20px;
  height: auto;
  cursor: pointer;
`;

const InstaIcon = styled(Instagram)`
  width: 20px;
  height: auto;
  cursor: pointer;
`;
