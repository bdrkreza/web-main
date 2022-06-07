import React from "react";
import styled from "styled-components";

function SectionTitle(props) {
  return (
    <TitleDiv>
      {props.title1}
      <span>&nbsp;{props.title2}</span>
    </TitleDiv>
  );
}
const TitleDiv = styled.p`
  font-size: 32px;
  line-height: 32px;
  color: #000000;
  font-weight: 700;
  padding-bottom: 20px;
  text-align: left;
  span {
    color: #f06425;
    text-transform: capitalize;
  }
  @media (max-width: 767px) {
    font-size: 18px;
    padding-bottom: 5px;
  }
  @media (max-width: 340px) {
    font-size: 14px;
  }
`;

export default SectionTitle;
