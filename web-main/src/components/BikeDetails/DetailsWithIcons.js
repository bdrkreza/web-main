import React from "react";
import styled from "styled-components";
import BodyType from "../../assets/bikeDetails/motorcycle.svg";
import Engine from "../../assets/bikeDetails/engine.svg";
import FuelType from "../../assets/carDetails/fuelType.svg";
import FuelTankCapacity from "../../assets/bikeDetails/fuel-tank-capacity.svg";
import Milage from "../../assets/carDetails/milage.svg";
import Gear from "../../assets/bikeDetails/gear.svg";
import Color from "../../assets/carDetails/color.svg";
import Brake from "../../assets/bikeDetails/brake.svg";
import Suspension from "../../assets/bikeDetails/suspension.svg";
import Cooling from "../../assets/bikeDetails/cooling.svg";

export default function DetailsWithIcons(props) {
  return (
    <Main>
      <Title>
        Bike <span style={{ color: "#f06424" }}>Details</span>
      </Title>
      <Div>
        <RowItem>
          <Img src={BodyType} />
          <RowText>
            <P>Body</P>
            <P style={{ color: "#000" }}>
              {props.bike.bike_body_type && (
                <b>{props.bike.bike_body_type.body_name}</b>
              )}
            </P>
          </RowText>
        </RowItem>
        <RowItem>
          <Img src={Engine} />
          <RowText>
            <P>Engine Capacity</P>
            <P style={{ color: "#000" }}>
              {props.bike.engine_capacity && (
                <b>{props.bike.engine_capacity} cc</b>
              )}
            </P>
          </RowText>
        </RowItem>
        <RowItem>
          <Img src={FuelTankCapacity} />
          <RowText>
            <P>Fuel Efficiency</P>
            <P style={{ color: "#000" }}>
              <b>{props.bike.fuel_tank}</b>
            </P>
          </RowText>
        </RowItem>
        <RowItem>
          <Img src={Milage} />
          <RowText>
            <P>Mileage</P>
            <P style={{ color: "#000" }}>
              <b>{props.bike.mileage}</b>
            </P>
          </RowText>
        </RowItem>

        <RowItem>
          <Img src={Color} />
          <RowText>
            <P>Bike Color</P>
            <P style={{ color: "#000" }}>
              {/* <b>Black</b> */}
              {props.bike.bike_color && (
                <b>{props.bike.bike_color.bike_color}</b>
              )}
            </P>
          </RowText>
        </RowItem>
        <RowItem>
          <Img src={FuelType} />
          <RowText>
            <P>Fuel Type</P>
            <P style={{ color: "#000" }}>
              {props.bike.bike_fuel && <b>{props.bike.bike_fuel.fuel_type}</b>}
            </P>
          </RowText>
        </RowItem>
        <RowItem>
          <Img src={Gear} />
          <RowText>
            <P>Gear</P>

            <P style={{ color: "#000" }}>
              <b>{props.bike.gear.gear}</b>
            </P>
          </RowText>
        </RowItem>

        {/* <RowItem>
          <Img src={Ignition} />
          <RowText>
            <P>Ignition</P>
            <P style={{ color: "#000" }}>
              {props.bike.ignition && <b>{props.bike.ignition.ignition}</b>}
            </P>
          </RowText>
        </RowItem> */}
        <RowItem>
          <Img src={Brake} />
          <RowText>
            <P>Front Brake</P>
            <P style={{ color: "#000" }}>
              {props.bike.front_brake && (
                <b>{props.bike.front_brake.front_brake}</b>
              )}
            </P>
          </RowText>
        </RowItem>
        <RowItem>
          <Img src={Brake} />
          <RowText>
            <P>Rear Brake</P>
            <P style={{ color: "#000" }}>
              {props.bike.rear_brake && (
                <b>{props.bike.rear_brake.rear_brake}</b>
              )}
            </P>
          </RowText>
        </RowItem>
        <RowItem>
          <Img src={Suspension} />
          <RowText>
            <P>Front Suspension</P>
            <P style={{ color: "#000" }}>
              {props.bike.front_suspension && (
                <b>{props.bike.front_suspension.front_suspension}</b>
              )}
            </P>
          </RowText>
        </RowItem>
        <RowItem>
          <Img src={Suspension} />
          <RowText>
            <P>Rear Suspension</P>
            <P style={{ color: "#000" }}>
              {props.bike.rear_suspension && (
                <b>{props.bike.rear_suspension.rear_suspension}</b>
              )}
            </P>
          </RowText>
        </RowItem>
        <RowItem>
          <Img src={Cooling} />
          <RowText>
            <P>Cooling</P>
            <P style={{ color: "#000" }}>
              {props.bike.cooling && <b>{props.bike.cooling.cooling}</b>}
            </P>
          </RowText>
        </RowItem>
      </Div>
    </Main>
  );
}

const Main = styled.div`
  padding: 20px;
  background-color: #f6f6f6;
  margin-top: 25px;
  margin-right: 65px;
  @media (max-width: 767px) {
    margin-top: 15px;
  }
`;

const Title = styled.p`
  font-size: 20px;
  color: #000000;
  font-weight: 700;
  font-family: "Open Sans";
`;
const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-left: 40px;

  @media (max-width: 600px) {
    justify-content: flex-start;
    height: auto;
    padding-top: 20px;
  }
`;
const RowItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 33.333%;
  justify-content: flex-start;
  padding: 20px 0px;
  &:nth-child(3n) {
    padding-left: 20px;
  }
  &:nth-child(3n-1) {
    padding-left: 20px;
  }
  // &::after {
  //   content: "";
  //   position: absolute;
  //   top: 20px;
  //   right: 0;
  //   left: inerit;
  //   height: 40px;
  //   width: 1px;
  //   background: #777;
  // }
  &:nth-child(3n)::after {
    content: none;
  }
  @media (max-width: 600px) {
    width: 50%;
    margin: 0px;
    padding: 20px 0px;
    // &::after {
    //   content: none;
    // }
    &:nth-child(odd)::after {
      content: "";
      position: absolute;
      top: 20px;
      right: 0;
      left: inerit;
      height: 40px;
      width: 1px;
      background: #777;
    }
    &:nth-child(even) {
      padding-left: 20px;
    }
    &:nth-child(odd) {
      padding-left: 0px;
    }
  }
`;
const RowText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 15px;
  margin-right: 0px;
`;
const P = styled.p`
  font-size: 14px;
  color: #646464;
  font-weight: 400;
  font-family: "Open Sans";
  margin: 0px;
`;

const Img = styled.img`
  height: 30px;
  width: 30px;
`;
