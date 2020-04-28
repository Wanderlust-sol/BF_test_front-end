import React from "react";
import { connect } from "react-redux";
import {
  closeDetail,
  closeAbout,
  closeResult,
  closeQuestion
} from "Redux/Actions";
import styled from "styled-components";
import BFICON from "Images/Group6.png";
import CLOSEICON from "Images/Nav/close.png";
import EXPANDICON from "Images/Nav/expand.png";
import MINICON from "Images/Nav/min.png";

const WindowNav = props => {
  const {
    detail,
    about,
    title,
    res,
    ques,
    closeDetail,
    closeAbout,
    closeResult,
    closeQuestion
  } = props;

  const handleClose = () => {
    if (detail) {
      closeDetail();
    } else if (about) {
      closeAbout();
    } else if (res) {
      closeResult();
    } else if (ques) {
      closeQuestion();
    }
  };

  return (
    <NavContainer>
      <TitleSection>
        <LogoBox>
          <Logo></Logo>
        </LogoBox>
        <MenuBox>
          <Menu>{title}</Menu>
        </MenuBox>
      </TitleSection>
      <ControlSection>
        <ControlBox>
          <Min src={MINICON}></Min>
        </ControlBox>
        <ControlBox>
          <Expand src={EXPANDICON}></Expand>
        </ControlBox>
        <ControlBox>
          <Close
            src={CLOSEICON}
            onClick={() => {
              handleClose();
            }}
          ></Close>
        </ControlBox>
      </ControlSection>
    </NavContainer>
  );
};

const mapStateToProps = state => {
  return {
    detail: state.controlDetail.detail,
    about: state.controlAbout.about,
    res: state.controlResult.res,
    ques: state.controlQuestion.ques
  };
};

export default connect(mapStateToProps, {
  closeDetail,
  closeAbout,
  closeResult,
  closeQuestion
})(WindowNav);

const NavContainer = styled.nav`
  width: 100%;
  height: 30px;
  border-bottom: 2px solid black;
  background-color: #fdfd96;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (max-width: 415px) {
    height: 30px;
  }
  @media only screen and (max-width: 720px) {
  }
`;

const TitleSection = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LogoBox = styled.div`
  margin-left: 2px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Logo = styled.div`
  width: 23px;
  height: 23px;
  margin: 0px auto;
  background-image: url(${BFICON});
  background-position: center;
  background-repeat: none;
  background-size: cover;

  @media only screen and (max-width: 375px) and (max-height: 667px) {
    width: 1.5rem;
    height: 1.5rem;
  }
  @media only screen and (max-width: 320px) and (min-height: 568px) {
    width: 1.4rem;
    height: 1.4rem;
  }
`;

const MenuBox = styled.div`
  padding-left: 5px;
  height: 100%;
`;

const Menu = styled.div`
  font-size: 1.5rem;
  line-height: 1.9rem;
  @media only screen and (max-width: 415px) {
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 415px) {
    font-size: 1.3rem;
  }
  /* 5, se size */
  @media only screen and (max-width: 320px) and (min-height: 568px) {
    font-size: 1.2rem;
  }
`;

const ControlSection = styled.div`
  width: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 3px;
`;

const ControlBox = styled.div`
  width: 25%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 3px;
`;

const Min = styled.img`
  margin: 0 auto;
  width: 23px;
  height: 23px;
  margin-right: 3px;
  cursor: pointer;
  @media only screen and (max-width: 415px) {
    width: 21px;
    height: 21px;
    margin: 0 auto;
  }
`;

const Expand = styled.img`
  margin: 0 auto;
  width: 23px;
  height: 23px;
  margin-right: 3px;
  cursor: pointer;
  @media only screen and (max-width: 415px) {
    width: 21px;
    height: 21px;
    margin: 0 auto;
  }
`;
const Close = styled.img`
  margin: 0 auto;
  width: 23px;
  height: 23px;
  margin-right: 3px;
  cursor: pointer;
  @media only screen and (max-width: 415px) {
    width: 21px;
    height: 21px;
    margin: 0 auto;
  }
`;
