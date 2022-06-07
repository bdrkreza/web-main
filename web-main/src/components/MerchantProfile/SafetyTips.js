import React from "react";
import styled from "styled-components";

export default function SafetyTips() {
  return (
    <Main>
      <Title>
        safety tips <span style={{ color: "#f06424" }}>for VIEWING</span>
      </Title>
      <OL>
        <li>Use Safe location to meet seller</li>
        <li>Avoid cash transaction</li>
        <li>Beware of unrealistic offers</li>
      </OL>
    </Main>
  );
}

const Main = styled.div`
  margin-top: 20px;
  padding: 30px 0px;
  display: flex;
  // width: 344px;
  flex-direction: column;
  background-color: #f8f8f8;
  border: 1px solid #d9d9d9;
  border-radius: 5px;

  @media(max-width: 1024px){
    // width: 290px;
  }

  @media(max-width: 767px){
    margin-left: 0px;
  }
  @media(max-width: 425px){
    margin-left: 0px;
    width: 100%;
    padding: 20px 0px 10px 0px;
  }
`;
const Title = styled.p`
  font-size: 20px;
  color: #000000;
  font-weight: 700;
  font-family: "Open Sans";
  text-align: left;
  text-transform: uppercase;
  margin: 0px;
  margin-left: 30px;

  @media(max-width: 1024px){
    font-size: 17px;
  }

  @media(max-width: 425px){
    padding: 0px 20px 10px 20px;
  }
`;
const OL = styled.ol`
  font-size: 14px;
  line-height: 24px;
  color: #646464;
  font-weight: 400;
  font-family: "Open Sans";
  text-align: left;
  list-style-position: inside;
  padding: 20px 40px;

  @media(max-width: 425px){
    padding: 10px 45px;
  }
`;
