import React from "react";
import styled from "styled-components";
import { Container } from "@material-ui/core";
import CardContent from "./cardMission";
import Search from "@assets/about-us/Search.svg";
import Safe from "@assets/about-us/Safe.svg";
import Market from "@assets/about-us/Market.svg";
import Battery from "@assets/about-us/Battery.svg";
import Trophy from "@assets/about-us/Trophy.svg";
import Setting from "@assets/about-us/Setting.svg";

function mission(props) {
  return (
    <Container maxWidth="lg">
      <Title>
        {props.langVariables !== null
          ? props.langVariables["au_our"]
            ? props.langVariables["au_our"].lang_content
            : "Our"
          : "Our"}{" "}
        <span style={{ color: "#f06424" }}>
          {props.langVariables !== null
            ? props.langVariables["au_mission"]
              ? props.langVariables["au_mission"].lang_content
              : "Mission"
            : "Mission"}
        </span>
      </Title>
      <MissionDiv>
        <CardContent
          image={Trophy}
          description={
            props.langVariables !== null
              ? props.langVariables["au_num_one"]
                ? props.langVariables["au_num_one"].lang_content
                : "No.1 retailer"
              : "No.1 retailer"
          }
          // otherLine={(props.langVariables !== null) ? ((props.langVariables['au_num_one2']) ? props.langVariables['au_num_one2'].lang_content : "by Volume") : "by Volume"}
        />

        <CardContent
          image={Search}
          description={
            props.langVariables !== null
              ? props.langVariables["au_bench"]
                ? props.langVariables["au_bench"].lang_content
                : "Benchmark for Car"
              : "Benchmark for Car"
          }
          // otherLine={(props.langVariables !== null) ? ((props.langVariables['au_bench2']) ? props.langVariables['au_bench2'].lang_content : "Enthusiasts") : "Enthusiasts"}
        />

        <CardContent
          image={Safe}
          description={
            props.langVariables !== null
              ? props.langVariables["au_safe_secure"]
                ? props.langVariables["au_safe_secure"].lang_content
                : "Safe and Secure"
              : "Safe and Secure"
          }
          // otherLine={(props.langVariables !== null) ? ((props.langVariables['au_safe_secure2']) ? props.langVariables['au_safe_secure2'].lang_content : "Listings & Transactions") : "Listings & Transactions"}
        />

        <CardContent
          image={Market}
          description={
            props.langVariables !== null
              ? props.langVariables["au_large_market"]
                ? props.langVariables["au_large_market"].lang_content
                : "Largest Market"
              : "Largest Market"
          }
          // otherLine={(props.langVariables !== null) ? ((props.langVariables['au_large_market2']) ? props.langVariables['au_large_market2'].lang_content : "In Bangladesh") : "In Bangladesh"}
        />

        <CardContent
          image={Setting}
          description={
            props.langVariables !== null
              ? props.langVariables["au_swift"]
                ? props.langVariables["au_swift"].lang_content
                : "Swift Action &"
              : "Swift Action &"
          }
          // otherLine={(props.langVariables !== null) ? ((props.langVariables['au_swift2']) ? props.langVariables['au_swift2'].lang_content : "Response") : "Response"}
        />

        <CardContent
          image={Battery}
          description={
            props.langVariables !== null
              ? props.langVariables["au_energize"]
                ? props.langVariables["au_energize"].lang_content
                : "Energize all"
              : "Energize all"
          }
          // otherLine={(props.langVariables !== null) ? ((props.langVariables['au_energize2']) ? props.langVariables['au_energize2'].lang_content : "Stakeholders") : "Stakeholders"}
        />
      </MissionDiv>
    </Container>
  );
}

const MissionDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 50px 0px;
  margin-left: -10px;
  margin-right: -10px;
  @media (max-width: 992px) {
    padding: 20px 0px;
    margin-left: -5px;
    margin-right: -5px;
  }
`;

const Title = styled.p`
  padding-top: 50px;
  font-size: 32px;
  line-height: 34px;
  color: #000000;
  font-weight: 700;
  font-family: "Open Sans";
`;

export default mission;
