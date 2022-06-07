import React from "react";
import styled from "styled-components";
import Image1 from "../../assets/about-us/IMG_5877.svg";
import Image2 from "../../assets/about-us/IMG_7347.svg";
import { Container } from "@material-ui/core";
import Card from "./cardNews";

function News() {
  return (
    <NewsDiv>
      <Container maxWidth="lg">
        <h1>
          In the <span className="news">News</span>
        </h1>

        <CardContainer>
          <Card
            image={Image2}
            text="This Start-up is on an Acquisition Spree to Expand into Southeast Asia's ..."
            description="WITH its auto financing business already revving up profits - used car marketplace Carro is now eyeing a wholesale digital banking licence to expand the business"
          />
          <Card
            image={Image1}
            text="This Start-up is on an Acquisition Spree to Expand into Southeast Asia's ..."
            description="WITH its auto financing business already revving up profits - used car marketplace Carro is now eyeing a wholesale digital banking licence to expand the business"
          />
          <Card
            image={Image1}
            text="This Start-up is on an Acquisition Spree to Expand into Southeast Asia's ..."
            description="WITH its auto financing business already revving up profits - used car marketplace Carro is now eyeing a wholesale digital banking licence to expand the business"
          />
        </CardContainer>
      </Container>
    </NewsDiv>
  );
}

const NewsDiv = styled.div`
  font-family: "Open Sans", sans-serif;
  background-color: #efefef;
  margin-bottom: 60px;
  h1 {
    padding-top: 30px;
    font-size: 32px;
    line-height: 32px;
    color: #000000;
    font-weight: 700;
    .news {
      color: #f06424;
    }
  }
  @media (max-width: 767px) {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    h1 {
      font-size: 23px;
      text-align: center;
      font-size: 50px;
    }
  }
  @media (max-width: 320px) {
    padding-top: 0px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    h1 {
      font-size: 23px;
      text-align: center;
      font-size: 50px;
    }
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 25px;
  @media (max-width: 767) {
    justify-content: flex-start;
  }
`;

export default News;
