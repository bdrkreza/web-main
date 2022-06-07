import React from "react";
import styled from "styled-components";
import BodyType from "../../assets/carDetails/bodyType.svg";
import Drive from "../../assets/carDetails/drive.svg";
import Engine from "../../assets/carDetails/engine.svg";
import FuelType from "../../assets/carDetails/fuelType.svg";
import FuelEconomy from "../../assets/carDetails/fuelEconomy.svg";
import Milage from "../../assets/carDetails/milage.svg";
import Transmission from "../../assets/carDetails/transmission.svg";
import Color from "../../assets/carDetails/color.svg";
import InteriorColor from "../../assets/carDetails/interiorColor.svg";
import ExteriorColor from "../../assets/carDetails/exteriorColor.svg";
import Calendar from "../../assets/carDetails/calendar.svg";
import Seat from "../../assets/carDetails/seat2.svg";
import CallVolume from "../../assets/carDetails/callVolume.svg";
import {
    Container,
    Typography,
    Divider,
    Checkbox,
    TextField,
    Button,
    FormControlLabel,
  } from "@material-ui/core";

export default function MailCarDetails(props) {
  return (
    <Main>

      <Div>
        <RowItem>
            <FormControlLabel
                  control={<Checkbox name={0} />}
                  label="Request for quotation"
                />
        </RowItem>
        <RowItem>
            <FormControlLabel
                  control={<Checkbox name={1} />}
                  label="Check inventory"
                />
        </RowItem>
      
        <RowItem>
            <FormControlLabel
                  control={<Checkbox name={2} />}
                  label="Request to visit"
                />
        </RowItem>
        <RowItem>
            <FormControlLabel
                  control={<Checkbox name={4} />}
                  label="Status check"
                />
        </RowItem>
        <RowItem>
            <FormControlLabel
                  control={<Checkbox name={5} />}
                  label="Others"
                />
        </RowItem>

      <Buttons type="submit">Send Email</Buttons>
      </Div>
    </Main>
  );
}

const Main = styled.div`
  margin-left: -32px;
  width: 344px;
  margin-top: 20px;
  padding: 30px;
  display: flex;
  background-color: #fff1eb;
  border-radius: 5px;
  @media (max-width: 1024px) {
    width: 290px;
  }
  @media (max-width: 767px) {
    margin-left: 0px;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media(max-width: 425px){
    margin-left: 0px;
    width: 100%;
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
  flex-wrap: wrap;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    border-right: none;
    width: 100%;
    height: auto;
    padding-top: 20px;
  }

  @media(max-width: 425px){
    padding-top: 0px;
  }
`;

const Divv = styled.div`
  display: flex;
  // width: 50%;
  float: right;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-top: 2rem;
  & span {
      color: #777;
      font-weight: 600;
  }

  @media (max-width: 600px) {
    // justify-content: flex-start;
    // height: auto;
    // padding-top: 20px;
    display: none;
  }
`;

const RowItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  // width: 33.33%;
  white-space: nowrap;
  // justify-content: flex-start;
  // padding: 20px 0px;
  // &:nth-child(3n) {
  //   padding-left: 20px;
  // }
  // &:nth-child(3n-1) {
  //   padding-left: 20px;
  // }
  & label{
    font-size: 13px;
    line-height: 16px;
    color: #646464;
    font-weight: 400;
    & span {
        // font-size: 14px;
    }
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
  // &:nth-child(3n)::after {
  //   content: none;
  // }
  @media (max-width: 600px) {
    width: 50%;
    margin: 0px;
    padding: 20px 0px;
    // &::after {
    //   content: none;
    // }
    // &:nth-child(odd)::after {
    //   content: "";
    //   position: absolute;
    //   top: 20px;
    //   right: 0;
    //   left: inerit;
    //   height: 40px;
    // }
    // &:nth-child(even) {
    //   padding-left: 20px;
    // }
    // &:nth-child(odd) {
    //   padding-left: 0px;
    // }
  }

  @media(max-width: 425px){
    padding: 0px;
  }
`;
const RowText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 15px;
  margin-right: 0px;
`;
const P = styled.p`
  font-size: 18px;
  color: #646464;
  font-weight: 400;
  font-family: "Open Sans";
  margin: 0px;
`;

const Img = styled.img`
  height: 200px;
  width: 250px;
  border-radius: 5px;
`;

const Imgs = styled.img`
  height: 20px;
`;

const Buttons = styled.button`
  margin-top: 4px;
  width: 260px;
  height: 46px;
  line-height: 42px;
  border-radius: 5px;
  border-color: transparent;
  background-color: #f06424;
  font-size: 16px;
  letter-spacing: 2px;
  color: #ffffff;
  font-weight: 700;
  text-transform: uppercase;

  @media(max-width: 1024px){
    width: 195px;
  }
  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

  }
`;

const BtnCall = styled.a`
  width: 260px;
  height: 46px;
  line-height: 42px;
  border-radius: 4px;
  border-color: transparent;
  background-color: #666;
  font-size: 16px;
  letter-spacing: 2px;
  color: #ffffff;
  font-weight: 700;
  text-decoration: none;
  padding: 10px;

  @media (max-width: 425px) {
    ${"" /* margin-left: 25px; */}
  }
`;
