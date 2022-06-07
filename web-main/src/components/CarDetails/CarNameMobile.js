import React from "react";
import styled from "styled-components";

function CarNameMobile(props) {
  return (
    <NameDiv>
      <div>
        <h1>{props.car.car_manufacturer.maker_name}&nbsp;</h1>
        <h2>
          {props.car.model_name.model_name}&nbsp;
          {props.car.grade === "-" ? null : props.car.grade}&nbsp;
          {props.car.car_year}
        </h2>
      </div>
    </NameDiv>
  );
}

const NameDiv = styled.div`
  //   margin-bottom: 10px;
  font-family: "Open Sans";
  //   width: 100%;
  @media screen and (min-width: 767px) {
    div {
      display: none;
    }
  }

  @media (max-width: 768px) {
    // margin-top: 10px;
    h1 {
      line-height: 2.25;
      font-weight: 800;
      font-size: 40px;
    }
    h2 {
        line-height: 0.375;
        font-weight: 600;
        font-size: 25px;
      }
  }

  //   @media (max-width: 708px) {
  //     h1 {
  //       font-size: 30px;
  //     }
  //   }

    @media (max-width: 578px) {
      // margin-top: 110px;
      h1 {
        line-height: 2.25;
        font-weight: 800;
        font-size: 30px;
      }
      h2 {
          line-height: 0.375;
          font-weight: 600;
          font-size: 25px;
        }
    }

//   @media (max-width: 375px) {
//   }

//   @media (max-width: 375px) {
//     h1 {
//       font-size: 17px;
//     }
  }
`;

export default CarNameMobile;
