import React from "react";
import styled from "styled-components";

function chooseCard(props) {
  return (
    <Card className={props.CardClass}>
      <img src={props.image} alt={props.image} />
      <h3>{props.heading}</h3>
      <p>{props.description}</p>
    </Card>
  );
}

const Card = styled.div`
  margin-bottom: 15px;
  width: 220px;
  padding: 24px 22px 28px 20px;
  h3 {
    margin: 0px;
  }
  p {
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
  }
  @media (max-width: 767px) {
    width: 50%;
    margin-bottom: 0px;
  }

  @media (min-width: 320px) {
  }
`;

export default chooseCard;
