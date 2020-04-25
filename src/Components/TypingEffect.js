import React, { useRef, useEffect } from "react";
// import styled from "styled-components";
import Typing from "react-typing-animation";

const TypingEffect = (props) => {
  //   const prevQuesRef = useRef(props.question);

  //   useEffect(() => {
  //     prevQuesRef.current = props.question;
  //   });

  //   const prevQues = prevQuesRef.current;
  //   console.log(prevQues, prevQuesRef.current, props.question);
  //   const appearQues = () => {
  //     setTimeout(change, 1000);
  //   };

  //   const change = () => {
  //     props.changeAppearChoice(true);
  //   };
  console.log(props.question);
  return (
    <Typing speed={props.speed} onFinishedTyping={props.onFinishedTyping}>
      >{props.question}
      {/* {prevQues !== props.question && <Typing.Reset />} */}
    </Typing>
  );
};
export default TypingEffect;
