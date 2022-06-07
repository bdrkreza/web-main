import React from "react";
import styled from "styled-components";
import { Container } from "@material-ui/core";
import SectionTitle from "@components/SectionTitle";
import CompareCard from "@components/CompareCard/CompareCard";

function CompareBodyType() {
  return (
    <Container maxWidth="lg">
      <BodyDiv>
        <SectionTitle title1="Compare Cars by" title2="Body Type" />

        <div className="compare-div">
          <CompareCard />
          <CompareCard />
        </div>
      </BodyDiv>
    </Container>
  );
}

const BodyDiv = styled.div`
  margin-top: 65px;
  .compare-div {
    display: flex;
    justify-content: space-between;
    padding-top: 35px;
  }

  @media (max-width: 1024px) {
    .compare-div {
      display: flex;
      justify-content: space-between;
    }
  }

  @media (max-width: 768px) {
    padding-top: 5px;
    .compare-div {
      display: flex;
      justify-content: space-between;
    }
  }

  @media (max-width: 767px) {
    margin-top: 10px;
    .compare-div {
      display: flex;
      flex-direction: column;
      padding-top: 0px;
    }
  }
`;

export default CompareBodyType;
