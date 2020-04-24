import React from "react";
import styled from "styled-components";

const Contributor = () => {
  return (
    <Container>
      <Nav></Nav>
    </Container>
  );
};

export default Contributor;

const Container = styled.div`
  width: 700px;
  height: 650px;
  border: 2px solid #000000;
  margin: 100px;
`;

const Nav = styled.div`
  width: 100%;
  height: 40px;
  background: #fdfd96;
  border-bottom: 2px solid #000000;
`;
