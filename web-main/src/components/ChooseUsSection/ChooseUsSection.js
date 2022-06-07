import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import SectionTitle from "../../components/SectionTitle";
import IconBox from "@components/IconBox";
import styled from "styled-components";

const content = [
  {
    id: 1,
    icon: "./assets/quality.svg",
    title: "Quality AT OUR CORE",
    description:
      "Emphasis on quality always keeps us one step ahead in the market.",
  },
  {
    id: 2,
    icon: "./assets/equipment.svg",
    title: "BEST EQUIPMENT",
    description:
      "State of the art facilities & equipment ensures highest level of efficiency.",
  },
  {
    id: 3,
    icon: "./assets/standard.svg",
    title: "PROFESSIONAL STANDARDS",
    description:
      "Our trained professionals ensure highest quality standards to fix your car.",
  },
];

function ChooseUsSection() {
  return (
    <BhaloBuyHere>
      <Container maxWidth="lg">
        <SectionTitle title1="Why" title2="Choose Us?" />
        <BhalogariDiv>
          {content.map((item, index) => (
            <IconBox
              key={index}
              classbox="each-icon-box"
              BoxIcon={item.icon}
              BoxTitle={item.title}
              BoxDescription={item.description}
            />
          ))}
        </BhalogariDiv>
      </Container>
    </BhaloBuyHere>
  );
}

const BhaloBuyHere = styled.div`
  max-width: 1032px;
  margin: auto;
  padding-bottom: 40px;
  @media (max-width: 767px) {
    padding-top: 25px;
    padding-bottom: 25px;
  }
`;

const BhalogariDiv = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  border-radius: 5px;
  & .each-icon-box {
    position: relative;
    max-width: 25%;
    margin-top: 5px;
    padding: 0;
    h3 {
      font-size: 17px;
      position: relative;
      padding-bottom: 30px;
      &:before {
        position: absolute;
        content: " ";
        bottom: 15px;
        left: 50%;
        margin-left: -29px;
        width: 58px;
        height: 2px;
        background: #f06424;
      }
    }
  }
  @media (max-width: 1024px) {
    & .each-icon-box {
      max-width: 33%;
      padding: 0 20px;
      h3 {
        font-size: 14px;
      }
    }
  }

  @media (max-width: 767px) {
    flex-wrap: wrap;
    .each-icon-box {
      max-width: 100%;
      padding: 0 20%;
    }
  }
  @media (max-width: 420px) {
    align-items: baseline;
    h3 {
      font-size: 16px;
      padding: 5px 0;
    }
    .each-icon-box {
      max-width: 100%;
      margin: auto;
      padding: 0 10%;
    }
  }
`;

export default ChooseUsSection;
