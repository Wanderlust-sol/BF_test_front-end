import React from "react";
import styled from "styled-components";

const Alert = () => {
  return (
    <AlertWindow>
      <AlertMessage>⚠️ 테스트를 진행해주세요 ⚠️</AlertMessage>
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

const AlertMessage = styled.div`
  margin: 10px;
  text-align: center;
  line-height: 1.4rem;
  font-size: 1.2rem;
`;
