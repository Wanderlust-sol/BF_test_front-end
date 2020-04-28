import React from "react";
import styled from "styled-components";
import ALERTICON from "../../Images/Result/alert.png";

const Alert = () => {
  return (
    <AlertWindow>
      <IconBox>
        <AlertIcon src={ALERTICON}></AlertIcon>
      </IconBox>
      <AlertMessage>테스트를 진행해주세요</AlertMessage>
    </AlertWindow>
  );
};
export default Alert;

const AlertWindow = styled.div`
  margin: 10px;
  color: white;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 415px) {
    margin: 0px;
    width: 100%;
    height: 100%;
    box-shadow: none;
    padding-top: 55%;
    display: block;
  }
`;
const IconBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const AlertIcon = styled.img`
  width: 60px;
  height: 100%;
  max-height: 60px;
`;

const AlertMessage = styled.div`
  margin: 10px;
  text-align: center;
  line-height: 1.5rem;
  font-size: 1.3rem;
  @media only screen and (max-width: 415px) {
    margin: 20px;
  }
`;
