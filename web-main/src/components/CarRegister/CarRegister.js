import React from "react";
import styled from "styled-components";

function CarRegister(props) {
  return (
    <CarReg>
      <p>Car Registered</p>
      <span>100k+</span>
    </CarReg>
  );
}

const CarReg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('./assets/car-reg-bg.svg')no-repeat;
  background-size: 75% 80px;
  background-position: center right;
  background-size: 70% 60px;
  background-position: center right;
  padding: 10px 0;
  max-width: 220px;
  margin-left: 80px;
  @media (max-width: 1200px) {
    margin-left: 30px;
  }
  @media (max-width: 1100px) {
    margin-left: 20px;
  }
   span {
     font-size: 40px;
     color: #f06425;
     font-weight: 700;
   }
   p {
    font-size: 16px;
    line-height: 18px;
    color: #676767;
    font-weight: 400;
    font-family: "Open Sans";
    text-align: right;
    padding-right: 5px;
   }
`;
export default CarRegister;
