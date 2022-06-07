import React from "react";
import SectionTitle from "@components/SectionTitle";
import styled from "styled-components";
import Square from "../../assets/1-square.svg";
import ACI from "../../assets/2-aci.svg";
import DBBL from "../../assets/3-dbbl.svg";
import DBL from "../../assets/4-dbl.svg";
import Orion from "../../assets/5-orion.svg";
import BanglaMeat from "../../assets/6-bengalmeat.svg";
import Link3 from "../../assets/7-link3.svg";
import AIUB from "../../assets/8-aiub.svg";

const content = [Square, ACI, DBBL, DBL, Orion, BanglaMeat, Link3, AIUB];

function ServicePartners() {
  return (
    <PartnerDiv>
      <PartnerContainer>
        <SectionTitle title1="Our Valued" title2="Partners" />
        <div className="items-container">
          {content.map((item,index) => (
            <CardDiv key={index}>
              <img src={item} alt="Partners"/>
            </CardDiv>
          ))}
        </div>
      </PartnerContainer>
    </PartnerDiv>
  );
}

const PartnerDiv = styled.div`
  background-color: #efefef;
  padding: 58px 0;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    padding: 42px 0;
  }
`;

const PartnerContainer = styled.div`
  max-width: 1080px;
  margin: auto;
  padding: 0 24px;
  .items-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: 768px) {
      gap: 25px;
      justify-content: flex-start;
    }

    @media (max-width: 767px) {
      justify-content: space-around;
      gap: 10px;
    }

    @media (max-width: 425px) {
      justify-content: space-between;
    }
  }
`;

const CardDiv = styled.div`
  width: calc(12%);
  height: 130px;
  border-radius: 3px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > img {
    height: 70%;
    width: 70%;
  }
  @media (max-width: 1024px) {
    // width: 115px;
  }
  @media (max-width: 768px) {
    width: 22%;
  }

  @media (max-width: 425px) {
    width: 48%;
  }
  @media (max-width: 300px) {
    width: 45%;
  }

  @media (max-width: 280px) {
    width: 47%;
  }
`;

export default ServicePartners;
