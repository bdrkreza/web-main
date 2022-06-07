import React from "react";
import styled from "styled-components";

function More() {
  return (
    <CarLoanDiv>
      <h1>Coming soon..</h1>
    </CarLoanDiv>
  );
}
const CarLoanDiv = styled.div`
  margin-top: 230px;
  h1 {
    margin: 0;
    color: #777;
    font-size: 2rem;
    text-align: center;
    min-height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 767px) {
    margin-top: 100px;
    h1 {
      min-height: 70px;
    }
  }
`;

export default More;
