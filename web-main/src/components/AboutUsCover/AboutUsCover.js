import React from "react";
import { Container } from "@material-ui/core";
import styled from "styled-components";
import CoverPic from "@assets/about-us/CoverPic.svg";

function AboutUsCover(props) {
  return (
    <ImageDiv>
      <Container maxWidth="lg">
        <div className="texts">
          <h2>
            {props.langVariables !== null
              ? props.langVariables["about_us"]
                ? props.langVariables["about_us"].lang_content
                : "About Us"
              : "About Us"}
          </h2>
        </div>
      </Container>
    </ImageDiv>
  );
}

const ImageDiv = styled.div`
  font-family: "Open Sans", sans-serif;
  margin-top: 235px;
  display: flex;
  flex-direction: row;
  // background-image: url(${CoverPic});
  // background-size: cover;
  // height: 235px;
  position: relative;
  @media (max-width: 992px) {
    margin-top: 58px;
  }
  @media (max-width: 768px) {
    margin-top: 155px;
  }
  .texts {
    position: absolute;
    top: 50%;
    color: black;
    margin-top: -18px;

    h2 {
      font-size: 32px;
      padding-bottom: 10px;
      margin: 0px;
    }
    p {
      font-size: 16px;
      margin: 0px;
    }
  }
`;

export default AboutUsCover;
