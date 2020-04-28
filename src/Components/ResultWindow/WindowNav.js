import React from "react";
import { connect } from "react-redux";
import {
  closeDetail,
  closeAbout,
  closeResult,
  closeQuestion,
} from "Redux/Actions";
import styled from "styled-components";
import LOGO from "Images/Group6.png";
import CLOSEICON from "Images/Nav/close.png";
import EXPANDICON from "Images/Nav/expand.png";
import MINICON from "Images/Nav/min.png";

const WindowNav = (props) => {
  const {
    detail,
    about,
    title,
    res,
    ques,
    closeDetail,
    closeAbout,
    closeResult,
    closeQuestion,
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
      <NavLeft>
        <img className="logo" src={LOGO} alt="logo" />
        <div>{title}</div>
      </NavLeft>
      <NavRight>
        <Min src={MINICON}></Min>
        <Expand src={EXPANDICON}></Expand>
        <Close
          src={CLOSEICON}
          onClick={() => {
            handleClose();
          }}
        ></Close>
      </NavRight>
    </NavContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    detail: state.controlDetail.detail,
    about: state.controlAbout.about,
    res: state.controlResult.res,
    ques: state.controlQuestion.ques,
  };
};

export default connect(mapStateToProps, {
  closeDetail,
  closeAbout,
  closeResult,
  closeQuestion,
})(WindowNav);

const NavContainer = styled.nav`
  width: 100%;
  height: 30px;
  font-size: 26px;
  background-color: #fdfd96;
  border-bottom: 2px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLeft = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;

  .logo {
    width: 23px;
    height: auto;
    cursor: pointer;
  }

  div {
    font-size: 24px;
    margin-left: 10px;
  }

  @media only screen and (max-width: 415px) {
    margin-left: 2px;

    .logo {
      width: 1.3rem;
    }
    div {
      font-size: 1.3rem;
      margin-left: 5px;
      margin-bottom: 2px;
    }
  }
`;

const NavRight = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 415px) {
    margin-right: 5px;
  }
`;

const Min = styled.img`
  width: 23px;
  height: auto;
  cursor: pointer;

  @media only screen and (max-width: 415px) {
    width: 21px;
  }
`;

const Expand = styled.img`
  width: 23px;
  height: auto;
  margin: 0 5px;
  cursor: pointer;

  @media only screen and (max-width: 415px) {
    width: 21px;
  }
`;
const Close = styled.img`
  width: 23px;
  height: auto;
  cursor: pointer;

  @media only screen and (max-width: 415px) {
    width: 21px;
  }
`;
