import React from "react";
import { Container } from "@material-ui/core";
import styled from "styled-components";
import Camry from "@assets/about-us/camry_car.svg";
import parse from "html-react-parser";
import { List, ListItem, ListItemText } from "@mui/material";
// import { api } from "@configs/configs";
// import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

function MarketPlace(props) {
  return (
    <Container maxWidth="lg">
      <MarketDiv>
        <TextDiv className="text">
          <Title>
            {props.langVariables !== null
              ? props.langVariables["au_worlds_largest"]
                ? props.langVariables["au_worlds_largest"].lang_content
                : "World's Largest"
              : "World's Largest"}{" "}
            <span style={{ color: "#f06424" }}>
              {props.langVariables !== null
                ? props.langVariables["au_auto_market"]
                  ? props.langVariables["au_auto_market"].lang_content
                  : "Automotive Marketplace"
                : "Automotive Marketplace"}
            </span>
          </Title>
          <P>
            {props.langVariables !== null
              ? props.langVariables["au_desc"]
                ? parse(props.langVariables["au_desc"].lang_content)
                : parse(
                    "Bhalogari.com is the leading brand and most reliable online auto marketplace developed by Bhalo Ventures Limited. Bhalogari.com was founded in 2021. Our headquarter is in Dhaka (Bangladesh). It’s mission is to bring ease and delight in car buying and selling process. Bhalogari offers a bouquet of reliable tools and services to help car consumers decide on buying the right car, at the right price and from the right partner."
                  )
              : parse(
                  "Bhalogari.com is the leading brand and most reliable online auto marketplace developed by Bhalo Ventures Limited. Bhalogari.com was founded in 2021. Our headquarter is in Dhaka (Bangladesh). It’s mission is to bring ease and delight in car buying and selling process. Bhalogari offers a bouquet of reliable tools and services to help car consumers decide on buying the right car, at the right price and from the right partner."
                )}
          </P>
          <Title>
            {" "}
            Our <span style={{ color: "#f06424" }}>Key Features</span>
          </Title>
          <p>
            <List>
              <ListItem>
                <ListItemText primary="- Buy Car (Brand New Car, Reconditioned Car, Used Car)" />
              </ListItem>
              <ListItem>
                <ListItemText primary="- Sell Car (Brand New Car, Reconditioned Car, Used Car)" />
              </ListItem>
              <ListItem>
                <ListItemText primary="- Buy Bike" />
              </ListItem>
              <ListItem>
                <ListItemText primary="- Verify Auction Sheet" />
              </ListItem>
              <ListItem>
                <ListItemText primary="- Car Servicing at your doorstep" />
              </ListItem>
            </List>
          </p>
          <br /> <br />
          <p>
            {props.langVariables !== null
              ? props.langVariables["au_desc2"]
                ? parse(props.langVariables["au_desc2"].lang_content)
                : parse(
                    "Besides innovative and prompt technical solutions, certified partners, genuine product listing with authentic information are at the core of Bhalogari.com. The platform carries rich automotive content such as expert reviews, detailed specs, and prices, comparisons as well as videos and pictures of all car brands and models available in Bangladesh."
                  )
              : parse(
                  "Besides innovative and prompt technical solutions, certified partners, genuine product listing with authentic information are at the core of Bhalogari.com. The platform carries rich automotive content such as expert reviews, detailed specs, and prices, comparisons as well as videos and pictures of all car brands and models available in Bangladesh."
                )}
          </p>
          <br /> <br />
          <P className="">
            {props.langVariables !== null
              ? props.langVariables["au_desc3"]
                ? parse(props.langVariables["au_desc3"].lang_content)
                : parse(
                    "Our vision is to construct a transparent ecosystem for consumers and car manufacturers, dealers, re-sellers to ensure the most reliable and enjoyable car buying and selling experience."
                  )
              : parse(
                  "Our vision is to construct a transparent ecosystem for consumers and car manufacturers, dealers, re-sellers to ensure the most reliable and enjoyable car buying and selling experience."
                )}
          </P>
        </TextDiv>
        <ImageDiv>
          <Img src={Camry}></Img>
        </ImageDiv>
      </MarketDiv>
    </Container>
  );
}

const MarketDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 100px;
  justify-content: space-between;
  &:before {
    content: "";
    width: 0;
    height: 0;
    border-left: 700px solid transparent;
    border-bottom: 420px solid #e8e8e8;
    position: absolute;
    z-index: -999;
    right: 0px;
    @media (max-width: 1440px) {
      border-left: 850px solid transparent;
      border-bottom: 500px solid #e8e8e8;
    }
    @media (max-width: 1024px) {
      border-left: 700px solid transparent;
      border-bottom: 500px solid #e8e8e8;
    }
    @media (max-width: 1023px) {
      border-left: 80vw solid transparent;
      border-bottom: 350px solid #e8e8e8;
    }
    @media (max-width: 768px) {
      border-left: 80vw solid transparent;
      border-bottom: 400px solid #e8e8e8;
    }
    @media (max-width: 425px) {
      border-left: 80vw solid transparent;
      border-bottom: 730px solid #e8e8e8;
    }
  }
  @media (max-width: 1024px) {
    gap: 50px;
  }
`;

const TextDiv = styled.div``;

const Title = styled.p`
  padding-top: 50px;
  font-size: 32px;
  line-height: 60px;
  color: #000000;
  font-weight: 700;
  font-family: "Open Sans";
  padding-bottom: 30px;
  @media (max-width: 1024px) {
    line-height: 40px;
  }
`;

const P = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #646464;
  font-weight: 400;
  font-family: "Open Sans";
  text-align: left;
  @media (max-width: 1440px) {
  }
`;

const ImageDiv = styled.div`
    display flex;
    align-items: center;
  margin-right: -250px;
  @media (max-width: 1440px) {
    margin-right: -50px;
  }
  @media (max-width: 1024px) {
    margin-right: 0px;
  }
  @media (max-width: 1023px) {
    display: none
  }
`;

const Img = styled.img`
  height: 420px;
  width: 560px;
  @media (max-width: 1024px) {
    height: 240px;
    width: 384px;
  }
`;

export default MarketPlace;
