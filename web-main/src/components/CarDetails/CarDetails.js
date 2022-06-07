import React from "react";
import styled from "styled-components";
import Divider from "@material-ui/core/Divider";
import TakaIcon from "../../assets/takawhite.svg";

export default function CarDetails(props) {
  const dateTime = props.car.created_at.split(" ");
  const date = dateTime[0];
  const time = dateTime[1];
  const splittedDate = date.split("-");
  const year = splittedDate[0];
  const month = splittedDate[1];
  const day = splittedDate[2];
  const monthName = months[parseInt(month - 1)];


  return (
    <Main className="main">
      <Col className="col">
        <Name>
          {props.car.car_manufacturer.maker_name}&nbsp;
          {props.car.model_name.model_name}&nbsp;
          {props.car.grade === "-" ? null : props.car.grade}&nbsp;
          {props.car.car_year}
        </Name>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            lineHeight: "16px",
          }}
        >
          {/* <P>
            {monthName} {day}, {year}
          </P> */}

          {/* <Divider orientation="vertical" flexItem /> */}
          <P>
            Category:{" "}
            {props.car.car_type && (
              <span style={{ color: "#f06424" }}>
                {props.car.car_type.car_type}
              </span>
            )}
          </P>
          {props.car.car_type && props.car.car_type.car_type === "Used" && (
            <Divider orientation="vertical" flexItem />
          )}
          {props.car.car_type && props.car.car_type.car_type === "Used" && (
            <P>
              Registration:{" "}
              {props.car.registration_year !== "-" && (
                <span style={{ color: "#f06424" }}>
                  {props.car.registration_year}
                </span>
              )}
            </P>
          )}
          {/* <Divider orientation="vertical" flexItem /> */}
          {/* <P>Views: 666</P> */}
        </div>
      </Col>
      {/* {(props.car.call_for_price === "-" ||
        props.car.call_for_price === "no" ||
        props.car.call_for_price === null) &&
        props.car.fixed_price && ( */}
      <Price className="price">
        {props.car.fixed_price.toLocaleString("en-IN")}
        &nbsp;
        <img src={TakaIcon} style={{ color: "#fff", height: "20px" }}></img>
      </Price>
      {/* )} */}
      {/* {props.car.call_for_price === "yes" && (
        <Price className="price">Call for Price &nbsp;</Price>
      )} */}
    </Main>
  );
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Main = styled.div`
  &.main {
    height: 64px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
    @media (max-width: 767px) {
      height: auto;
      flex-direction: column;
    }
  }
`;

const Col = styled.div`
  &.col {
    display: flex;
    flex-direction: Column;
    height: 64px;
    @media (max-width: 767px) {
      height: auto;
      margin-bottom: 30px;
    }
  }
`;

const Name = styled.p`
  font-size: 25px;
  color: #f06424;
  font-weight: 700;
  font-family: "Open Sans";
  padding: 0px;
  margin: 0px;
  padding-bottom: 20px;
`;

const P = styled.p`
  font-size: 16px;
  color: #646464;
  font-weight: 600;
  font-family: "Open Sans";
  line-height: 1;
`;

const Price = styled.div`
  &.price {
    width: 200px;
    height: 64px;
    background-color: #f06424;
    color: white;
    position: relative;
    text-align: left;
    line-height: 64px;
    padding-left: 10px;
    font-size: 25px;
    color: #ffffff;
    font-weight: 600;
    font-family: "Open Sans";
    @media (max-width: 767px) {
      width: 75%;
      max-width: 350px;
    }
  }
  &.price:before {
    content: "";
    width: 0;
    height: 0;
    border-left: 60px solid transparent;
    border-bottom: 64px solid #f06424;
    position: absolute;
    left: -60px;
    right: 0px;
    @media (max-width: 767px) {
      left: inherit;
      right: -60px;
      border-left: none;
      border-right: 60px solid transparent;
      margin-bottom: 30px;
    }
  }
`;
