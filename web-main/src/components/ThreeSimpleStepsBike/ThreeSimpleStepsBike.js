import { Container } from "@material-ui/core";
import SectionTitle from "@components/SectionTitle";
import React from "react";
import styled from "styled-components";
import Iconbox from "@components/IconBox/IconBox";
import SubmitDetails from "@assets/bikepage/submitDetails.svg";
import Search from "@assets/bikepage/search.svg";
import SellBike from "@assets/bikepage/sellBike.svg";

const content = [
  {
    id: 1,
    icon: SubmitDetails,
    heading: "Submit your Bike Details",
    info: "Fill up bike information form and get an instant estimated price range for your two-wheeler.",
  },
  {
    id: 2,
    icon: Search,
    heading: "Free inspection",
    info: "Valuator will visit your location for free inspection and determine the final price",
  },
  {
    id: 3,
    icon: SellBike,
    heading: "Sell Your Bike",
    info: "Receive instant payment in your bank account and we take care of RC transfer.",
  },
];

function ThreeSteps() {
  return (
    <ThreeStepsDiv>
      <Container>
        <StepsDiv>
          <TitleDiv>
            <SectionTitle title1="Sell Your Bike in" title2="3 Simple steps" />
          </TitleDiv>

          <Steps>
            {content.map((item, index) => (
              <Iconbox
                key={index}
                classbox="icon-box"
                BoxIcon={item.icon}
                BoxTitle={item.heading}
                BoxDescription={item.info}
              />
            ))}
          </Steps>
        </StepsDiv>
      </Container>
    </ThreeStepsDiv>
  );
}

const ThreeStepsDiv = styled.div`
  padding-top: 58px;
  padding-bottom: 35px;
  @media (max-width: 425px) {
    padding-top: 50px;
  }
`;

const TitleDiv = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;
  @media (max-width: 425px) {
    padding: 20px 30px;
  }
`;

const StepsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  filter: drop-shadow(0px 2px 4.5px rgba(0, 0, 0, 0.16));
  border-radius: 6px;
  background-color: #fff;
  @media (max-width: 425px) {
  }
  @media (max-width: 320px) {
  }
`;

const Steps = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin: 0 auto;

  & .icon-box {
    position: relative;
    max-width: 33.33%;
    margin-top: 20px;
    padding: 0 48px 20px;
    > div {
      > h3 {
        padding-bottom: 23px;
      }
      > p {
        color: #707070;
        padding-bottom: 44px;
      }
    }
    &:not(:last-child):before {
      position: absolute;
      content: " ";
      top: 15%;
      right: 0;
      width: 1px;
      height: 70%;
      background: #cecece;
    }
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;

    .icon-box {
      max-width: 33.33%;
      padding: 0 10px 20px;
      > div {
        > h3 {
          font-size: 15px;
          padding-bottom: 5px;
        }
        > p {
          font-size: 11px;
          padding-bottom: 20px;
        }
      }
    }
  }

  @media (max-width: 425px) {
    .icon-box {
      max-width: 290px;
      margin: 10px auto 0;
      > div {
        > p {
          padding-bottom: 20px;
        }
      }
      &:not(:last-child):before {
        position: absolute;
        content: " ";
        top: inherit;
        bottom: 0;
        right: 5%;
        width: 90%;
        height: 1px;
        background: #cecece;
      }
    }
  }
`;

export default ThreeSteps;
