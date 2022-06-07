import React from "react";
import styled from "styled-components";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Background from "../../assets/carListBanner.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bannerContainer: {
    position: "relative",
    height: "100%",
  },
}));

const BannerBackground = styled.div`
  width: 100vw;
  height: 350px;
  margin-top: 185px;
  background-color: #efefef;
  background-image: url(${Background});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  &:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
  }
  @media (max-width: 992px) {
    margin-top: 95px;
    background-position: center;
  }
  @media (max-width: 767px) {
    height: 300px;
    background-size: cover;
    background-position: center;
  }
  @media (max-width: 480px) {
    height: 95px;
    background-size: cover;
  }
`;
const BannerContainer = styled.div`
  min-height: 100px;
  display: flex;
  align-items: center;
  @media (max-width: 767px) {
    min-height: 190px;
  }
  @media (max-width: 480px) {
    min-height: 115px;
  }
`;
const CarsForSaleTitle = styled.h1`
  font-size: 30px;
  color: black;
  font-weight: 800;
  font-family: "Open Sans";
  position: relative;

  @media (max-width: 425px) {
    font-size: 24px;
  }

  @media (max-width: 375px) {
    font-size: 21px;
  }

  @media (max-width: 375px) {
    font-size: 17px;
  }
`;

export default function Banner(props) {
  const classes = useStyles();
  return (
    <div>
      <BannerBackground>
        <Container maxWidth="lg" className={classes.bannerContainer}>
          <BannerContainer>
            <CarsForSaleTitle>{props.title} CARS FOR SALE</CarsForSaleTitle>
          </BannerContainer>
        </Container>
      </BannerBackground>
    </div>
  );
}
