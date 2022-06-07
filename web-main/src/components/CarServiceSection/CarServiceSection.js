import React from "react";
import { Container, Box } from "@material-ui/core";
import styled from "styled-components";
import ServiceObject from "../ServiceObject/ServiceObject";

const content = [
  {
    id: 1,
    icon: "./assets/Car-Wash.svg",
    title: "Car Wash and Detailing",
    description:
      "Get door-step car wash, polishing and coating services from Bhalogari and it takes less than a minute to book.",
  },
  {
    id: 2,
    icon: "./assets/Car-Oil.svg",
    title: "Oil Change",
    description:
      "Our certified technicians will replace the recommended engine oil, install a new oil filter, and check all fluid levels on your vehicle.",
  },
  {
    id: 3,
    icon: "./assets/Car-Engine.svg",
    title: "Engine Diagnostics & Repair",
    description: "Our skilled professionals ensure the best and reliable Engine Diagnostic and Repair Services.",
  },
  {
    id: 4,
    icon: "./assets/Car-Air.svg",
    title: "Car A/C & Repair",
    description:
      "Our specialists will void the air conditioning system of the old refrigerant and recharge the system with a new refrigerant in your car.",
  },
  {
    id: 5,
    icon: "./assets/Car-Battery.svg",
    title: "Car Battery Repairs",
    description:
      "Bhalogari trained professionals will follow rigorous inspection processes to ensure effective battery repairing and maintenance services.",
  },
  {
    id: 6,
    icon: "./assets/Car-Auction.svg",
    title: "Verified Auction sheet",
    description: "Instantly get the original Auction Sheet Verified by Bhalogari before buying your desired car.",
  },
];

function CarServiceSection() {
  return (
    <Container maxWidth="lg">
      <ContentDiv>
        <Box className="box-items">
          {content.map((item, index) => (
            <ServiceObject key={index} title={item.title} pic={item.icon} description={item.description} />
          ))}
        </Box>
      </ContentDiv>
    </Container>
  );
}

const ContentDiv = styled.div`
  padding-top: 58px;
  padding-bottom: 33px;
  .box-items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    & > div {
      width: calc(33.33% - 20px);
      margin-bottom: 20px;
    }
  }

  @media (max-width: 992px) {
    .box-items {
      & > div {
        width: calc(50% - 10px);
      }
    }
  }

  @media (max-width: 520px) {
    .box-items {
      & > div {
        width: 100%;
      }
    }
  }
`;

export default CarServiceSection;
