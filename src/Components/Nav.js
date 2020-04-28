import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LOGO from "Images/Group6.png";
import BTR from "Images/Nav/BTR.png";
import SUN from "Images/Nav/SUN.png";
import MOON from "Images/Nav/Moon.png";

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
        <img className="logo" src={LOGO} alt="logo" />
        <div>Test</div>
      </NavLeft>
      <NavRight>
        {hour >= 7 && hour < 18 ? (
          <img className="sun" src={SUN} alt="sun" />
        ) : (
          <img className="moon" src={MOON} alt="moon" />
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
  height: 35px;
  font-size: 26px;
  background: #fdfd96;
  border-bottom: 2px solid #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 415px) {
    height: 30px;
  }
`;

const NavLeft = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;

  .logo {
    width: 25px;
    height: auto;
    cursor: pointer;
  }

  div {
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
  font-size: 26px;
  margin-right: 10px;
  display: flex;
  align-items: center;

  .sun {
    width: 25px;
    height: auto;
  }

  .moon {
    width: 10px;
    height: auto;
    transform: rotate(45deg);
    margin-right: 5px;
  }

  .battery {
    width: 40px;
    height: auto;
    margin: 0 10px;
  }

  @media only screen and (max-width: 415px) {
    margin-right: 5px;
    .sun {
      width: 1.3rem;
    }

    .moon {
      width: 0.4rem;
    }

    .battery {
      width: 2.3rem;
      margin: 0 3px;
    }
    div {
      font-size: 1.3rem;
      margin-bottom: 2px;
    }
  }
`;
