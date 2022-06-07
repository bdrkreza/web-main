import React from "react";
import styled from "styled-components";
import { Container, Grid } from "@material-ui/core";
import Choose from "@assets/about-us/Choose.png";
import ChooseCard from "./chooseCard";
import Honesty from "@assets/about-us/honesty.svg";
import Money from "@assets/about-us/Money.svg";
import Maintenance from "@assets/about-us/Maintenance.svg";
import Invoice from "@assets/about-us/invoice.svg";

function choose(props) {
  return (
    <ChooseDiv>
      <Container maxWidth="lg">
        <Div>
          <TextDiv>
            <Title>
              {props.langVariables !== null
                ? props.langVariables["au_why_choose"]
                  ? props.langVariables["au_why_choose"].lang_content
                  : "Why Choose"
                : "Why Choose"}
              <p style={{ color: "#f06424" }}>
                {props.langVariables !== null
                  ? props.langVariables["au_bhalogari"]
                    ? props.langVariables["au_bhalogari"].lang_content
                    : "Bhalogari?"
                  : "Bhalogari?"}
              </p>
            </Title>
            <Description className="para">
              {props.langVariables !== null
                ? props.langVariables["au_why_choose_desc"]
                  ? props.langVariables["au_why_choose_desc"].lang_content
                  : "If you are a collector of authentic, standard, classic cars,\n" +
                    "              bhalogari.com is your don’t-miss destination. The online database\n" +
                    "              and advanced search tools of bhalogari.com helps you to locate\n" +
                    "              your dream car within a few seconds."
                : "If you are a collector of authentic, standard, classic cars,\n" +
                  "              bhalogari.com is your don’t-miss destination. The online database\n" +
                  "              and advanced search tools of bhalogari.com helps you to locate\n" +
                  "              your dream car within a few seconds."}
            </Description>
          </TextDiv>
          <CardDiv>
            <Section1>
              <ChooseCard
                CardClass="grayBg"
                image={Honesty}
                heading={
                  props.langVariables !== null
                    ? props.langVariables["au_we_trusted"]
                      ? props.langVariables["au_we_trusted"].lang_content
                      : "We're trusted by Thousands"
                    : "We're trusted by Thousands"
                }
                description={
                  props.langVariables !== null
                    ? props.langVariables["au_we_trusted_desc"]
                      ? props.langVariables["au_we_trusted_desc"].lang_content
                      : "We have compiled recommended information that you want to know to buy your car."
                    : "We have compiled recommended information that you want to know to buy your car."
                }
              />
              <ChooseCard
                CardClass="whiteBg"
                image={Maintenance}
                heading={
                  props.langVariables !== null
                    ? props.langVariables["au_latest_eq"]
                      ? props.langVariables["au_latest_eq"].lang_content
                      : "Latest Equipments Workshop"
                    : "Latest Equipments Workshop"
                }
                description={
                  props.langVariables !== null
                    ? props.langVariables["au_latest_eq_desc"]
                      ? props.langVariables["au_latest_eq_desc"].lang_content
                      : "After you've selected a car, We arrange a viewing to seller location or one of our points."
                    : "After you've selected a car, We arrange a viewing to seller location or one of our points."
                }
              />
            </Section1>
            <Section2>
              <ChooseCard
                CardClass="whiteBg"
                image={Money}
                heading={
                  props.langVariables !== null
                    ? props.langVariables["au_easy_auto"]
                      ? props.langVariables["au_easy_auto"].lang_content
                      : "Easy Auto Finance Facilities"
                    : "Easy Auto Finance Facilities"
                }
                description={
                  props.langVariables !== null
                    ? props.langVariables["au_latest_eq_desc"]
                      ? props.langVariables["au_latest_eq_desc"].lang_content
                      : "After you've selected a car, We arrange a viewing to seller location or one of our points."
                    : "After you've selected a car, We arrange a viewing to seller location or one of our points."
                }
              />
              <ChooseCard
                CardClass="grayBg"
                image={Invoice}
                heading={
                  props.langVariables !== null
                    ? props.langVariables["au_veh_serv"]
                      ? props.langVariables["au_veh_serv"].lang_content
                      : "Vehicle Service & Maintenance"
                    : "Vehicle Service & Maintenance"
                }
                description={
                  props.langVariables !== null
                    ? props.langVariables["au_veh_serv_desc"]
                      ? props.langVariables["au_veh_serv_desc"].lang_content
                      : "We have compiled recommended information that you want to know to buy your car."
                    : "We have compiled recommended information that you want to know to buy your car."
                }
              />
            </Section2>
          </CardDiv>
        </Div>
      </Container>
    </ChooseDiv>
  );
}

const ChooseDiv = styled.div`
  margin-top: 58px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: "Open Sans", sans-serif;
  overflow: hidden;
  background-image: url(${Choose});
  background-size: cover;
  display: flex;
  position: relative;
  &:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.35);
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  @media (max-width: 767px) {
    max-width: 100vw;
    padding: 0px 50px;
  }
`;

const Title = styled.p`
  padding-top: 50px;
  font-size: 33px;
  letter-spacing: 2px;
  line-height: 40px;
  color: #fff;
  font-weight: 700;
  font-family: "Open Sans";
  padding-bottom: 30px;
`;

const Description = styled.p`
  width: 480px;
  font-size: 14px;
  line-height: 24px;
  color: #ffffff;
  font-weight: 400;
  font-family: "Open Sans";
  text-align: left;
  @media (max-width: 767px) {
    width: auto;
  }
`;

const CardDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 15px;
  position: relative;
`;
const Section1 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  padding-right: 15px;
  @media (max-width: 767px) {
    flex-direction: row;
    padding-right: 0px;
  }
  .grayBg {
    background: #f2eee2;
  }
  .whiteBg {
    background: #707070;
    color: white;
  }
`;
const Section2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 96px;
  @media (max-width: 767px) {
    flex-direction: row;
    margin-top: 0px;
  }
  .grayBg {
    background: #f2eee2;
  }
  .whiteBg {
    background: #707070;
    color: white;
  }
`;

export default choose;
