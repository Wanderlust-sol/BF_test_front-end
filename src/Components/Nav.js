import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "Images/Group6.png";
import BTR from "Images/Nav/BTR.png";
import Sun from "Images/Nav/SUN.png";
import Moon from "Images/Nav/Moon.png";

const Nav = () => {
  const [time, setTime] = useState("");

  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const timeCheck = () => {
    setTime(
      `${hour < 10 ? `0${hour}` : hour}:${
        minute < 10 ? `0${minute}` : minute
      }:${second < 10 ? `0${second}` : second}`
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      timeCheck();
    }, 1000);
    return () => clearInterval(interval);
  }, [timeCheck]);

  return (
    <NavWrapper>
      <NavLeft>
        <img className="logo" src={Logo} alt="logo" />
        <div>Test</div>
      </NavLeft>
      <NavRight>
        {hour >= 7 && hour <= 18 ? (
          <img src={Sun} alt="sun" />
        ) : (
          <img src={Moon} alt="moon" />
        )}
        <img className="battery" src={BTR} alt="battery" />
        <div>{time}</div>
      </NavRight>
    </NavWrapper>
  );
};

export default Nav;

const NavWrapper = styled.div`
  width: 100%;
  height: 40px;
  font-size: 30px;
  background: #fdfd96;
  border-top: 2px solid #000000;
  border-bottom: 2px solid #000000;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
`;

const NavLeft = styled.div`
  margin-left: 15px;
  display: flex;

  .logo {
    width: 30px;
    height: auto;
  }

  div {
    margin-left: 10px;
  }
`;

const NavRight = styled.div`
  margin-right: 15px;
  display: flex;
  align-items: center;

  img {
    width: auto;
    height: 35px;
  }

  .battery {
    width: 50px;
    height: auto;
    margin: 0 10px;
  }
`;
