import React from "react";
import styled from "styled-components";

function CarName(props) {
  return (
    <NameDiv>
      <h1>
        {props.car.car_manufacturer.maker_name}&nbsp;
        {props.car.model_name.model_name}&nbsp;
        {props.car.grade === "-" ? null : props.car.grade}&nbsp;
        {props.car.car_year}
      </h1>
    </NameDiv>
  );
}

const NameDiv = styled.div`
  margin-top: 195px;
  margin-bottom: 10px;
  font-family: "Open Sans";
  width: 100%;
  h1 {
    font-size: 40px;
    line-height: 50px;
    color: #000000;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    margin-top: 130px;
    h1 {
      display: none;
      font-size: 30px;
    }
  }

  @media (max-width: 708px) {
    h1 {
      font-size: 30px;
    }
  }

  @media (max-width: 578px) {
    // margin-top: 110px;
    h1 {
      font-size: 24px;
      line-height: 35px;
    }
  }

  // @media(max-width: 375px){
  //   h1{
  //     font-size: 20px;
  //   }
  // }

  @media (max-width: 375px) {
    h1 {
      font-size: 17px;
    }
  }
`;

export default CarName;
