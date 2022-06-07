import React from "react";
import styled from "styled-components";
import Car1 from "../../assets/carDetails/car1.png";

export default function RecentAds() {
  return (
    <Main>
      <Title>
        recent <span style={{ color: "#f06424" }}>ads</span>
      </Title>
      <Card>
        <Img src={Car1}></Img>
        <Name>
          <P>mercedes-benz cls amg s wagon</P>
          <P style={{ color: "#f06424" }}>1,00,00,000 BDT</P>
        </Name>
      </Card>
      <Card>
        <Img src={Car1}></Img>
        <Name>
          <P>mercedes-benz cls amg s wagon</P>
          <P style={{ color: "#f06424" }}>1,00,00,000 BDT</P>
        </Name>
      </Card>
      <Card>
        <Img src={Car1}></Img>
        <Name>
          <P>mercedes-benz cls amg s wagon</P>
          <P style={{ color: "#f06424" }}>1,00,00,000 BDT</P>
        </Name>
      </Card>
      <Card>
        <Img src={Car1}></Img>
        <Name>
          <P>mercedes-benz cls amg s wagon</P>
          <P style={{ color: "#f06424" }}>1,00,00,000 BDT</P>
        </Name>
      </Card>
    </Main>
  );
}

const Main = styled.div`
  margin-top: 40px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;
  border: 1px solid #d9d9d9;
`;
const Title = styled.p`
  font-size: 20px;
  color: #000000;
  font-weight: 700;
  font-family: "Open Sans";
  text-align: left;
  text-transform: uppercase;
  margin: 0px;
`;

const P = styled.p`
  font-size: 14px;
  line-height: 24px;
  color: #646464;
  font-weight: 600;
  font-family: "Open Sans";
  text-align: left;
  text-transform: uppercase;
  margin: 0px;
`;
const Card = styled.div`
  padding: 5px 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
  }
`;
const Name = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
const Img = styled.img`
  height: 60px;
  width: 90px;
  margin-right: 10px;
`;
