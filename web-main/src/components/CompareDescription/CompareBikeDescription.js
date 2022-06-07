import React from 'react';
import styled from "styled-components";
import { Container } from "@material-ui/core";
import SectionTitle from "../SectionTitle";


function CompareBikeDescription() {
  return (
    <CompareDiv>
      <Container maxWidth="lg">
        <div className="texts">
          <SectionTitle title1="Compare" title2="Bikes" />
          <p className="description">
            Bike comparison is now simpler than ever, compare multiple bikes side by side to find the right vehicle for
            you. Instantly compare bike features, expert & user ratings. 
          </p>
        </div>
      </Container>
    </CompareDiv>
  )
}

const CompareDiv = styled.div`
    font-family: 'Open Sans';
    .texts{
        margin: 0px;
        margin-top: 65px;
        margin-bottom: 15px;
        display: flex;
        flex-direction: column;

    .description {
      // padding-left: 170px;
      font-size: 19px;
      line-height: 32px;
      color: #000000;
      font-weight: 400;
      position: relative;
    }
  }

  @media (max-width: 1024px) {
    .texts {
      .description {
        font-size: 19px;
        line-height: 24px;
        :before {
          top: -16%;
          height: 130%;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .texts {
      display: flex;
      .description {
        font-size: 14px;
        :before {
          top: 5%;
          left: 45px;
          height: 90%;
        }
      }
    }
  }

    @media(max-width: 767px){
        .texts{
            margin-top: 40px;
        }
    }

  @media (max-width: 425px) {
    .texts {
      .description {
        font-size: 14px;
      }
    }
  }

`;

export default CompareBikeDescription;