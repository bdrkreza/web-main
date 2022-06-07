import React from "react";
import styled from "styled-components";
import { Container } from "@material-ui/core";
// import Pic from "@assets/Terms/Terms.svg";

function CoverPhoto(props) {
  return (
    <CoverPic>
      <Container maxWidth="lg">
        <div className="text">
          <h1>
            {props.langVariables !== null
              ? props.langVariables["terms"]
                ? props.langVariables["terms"].lang_content
                : "TERMS & CONDITIONS"
              : "TERMS & CONDITIONS"}
          </h1>
        </div>
      </Container>
    </CoverPic>
  );
}

const CoverPic = styled.div`
  font-family: "Open Sans", sans-serif;
  margin-top: 158px;
  display: flex;
  flex-direction: row;
  .text {
    margin-left: 30px;
    margin-top: 50px;
    h1 {
      color: black;
      font-size: 30px;
      font-weight: 800;
    }
  }

  @media (max-width: 768px) {
    margin-top: 85px;
    margin-left: 25px;
    .text {
      margin-left: 10px;
    }
  }

  @media (max-width: 767px) {
    margin-top: 90px;
    margin-left: 24px;
  }

  @media (max-width: 425px) {
    margin-top: 105px;
    margin-left: 5px;
    .text {
      margin-top: 30px;
      h1 {
        font-size: 20px;
      }
    }
  }
`;

export default CoverPhoto;
