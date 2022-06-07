import React from "react";
import styled from "styled-components";

function IconBox(props) {
  return (
    <IconDiv className={props.classbox}>
      <ImageDiv>
        <img src={props.StepImage} alt={props.StepImage} />
      </ImageDiv>

      <IconContent>
        <ImageDiv>
          <img src={props.BoxIcon} alt={props.BoxIcon} />
        </ImageDiv>
        <h3>{props.BoxTitle}</h3>
        <p>{props.BoxDescription} </p>
      </IconContent>
    </IconDiv>
  );
}
const ImageDiv = styled.div`
display: flex;
justify-content: center;
`;

const IconDiv = styled.div`
  text-align: center;
  position: relative;
  max-width: 250px;
  & > img {
    position: absolute;
    top: 0;
    left: 20px;
  }
`;
const IconContent = styled.div`
  padding-top: 50px;
  img {
  }
  h3 {
    padding-top: 35px;
    padding-bottom: 20px;
    font-size: 18px;
    font-weight: 700;
    line-height: 30px;
    color: #000;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    color: #000;
  }
  @media (max-width: 767px) {
    padding-top: 15px;
  }
  @media (max-width: 425px) {
    padding-top: 35px;
    h3 {
      padding-top: 10px;
    }
  }
`;

export default IconBox;
