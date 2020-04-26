import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";

const TestBox = props => {
  const [ani, setAni] = useState(false);
  const [num, setNum] = useState(0);

  const changeAni = () => {
    //   increase num
    const interval = setInterval(() => {
      setNum(num => num + 1);
      console.log(num);
    }, 1000);

    setAni(!ani);
    console.log(ani);
    return () => {
      clearInterval(interval);
    };
  };

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCounter(counter + 1);
  //     }, 1000);

  //     return () => {
  //       clearInterval(interval);
  //     };
  //   });

  return (
    <TestBoxWrapper>
      <h1 style={{ color: "white" }}>{num}</h1>
      <SampleButton onClick={changeAni}></SampleButton>
      <AniDiv ani={ani}></AniDiv>
    </TestBoxWrapper>
  );
};

export default TestBox;

const TestBoxWrapper = styled.div`
  width: 100%;
  //   나중에 지울거임
  height: 300px;
  border: 1px dashed white;
  display: flex;
  align-items: flex-end;
  position: relative;
`;

const SampleButton = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid white;
  cursor: pointer;
`;

const AniWrapper = styled.div`
  height: 15px;
  padding: 2px;
  border: 1px solid white;
  position: absolute;
  bottom: 0;
`;

const AniDiv = styled.div`
  height: 10px;
  background-color: white;
  position: absolute;
  bottom: 0;
  ${props => {
    if (props.ani) {
      return css`
        animation-name: ${verticalCover};
        animation-duration: 5s;
      `;
    }
  }}
`;

const verticalCover = keyframes`
0%{
  width:0%;
}
4%{
    width:0%;
}
5%{
width:5%;
}
9%{
    width:5%;
}
10%{
    width:10%;
}
14%{
    width:7%;
}
15%{
    widht:15%;
}
19%{
    width:15%;
}
20%{
    width:20%;
}
24%{
    width:17%;
}
25%{
  width:25%;
}
29%{
    width:24%;
}
30%{
    width:30%;
}
34%{
    width:30%;
}
35%{
    width:35%;
}
74%{
    width:70%;
}
75%{
    width:75%;
}
79%{
    widht:73%;
}
80%{
    width:80%;
}
89%{
    width:90%;
}
90%{
    width:95%;
}
100% {
  width:100%;
}
`;
