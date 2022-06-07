import { Button, Divider, makeStyles, Box } from "@material-ui/core";
import React from "react";

import { ReactSVG } from "react-svg";
import Taka from "../../assets/taka.svg";
import _ from "lodash";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  cardClass: {
    display: "flex",
  },
  cardTop: {},
  cartype: {},
  imgDiv: {},
  button: {},
}));

const FeaturedNewCarCard = (props) => {
  const classes = useStyles();
  const dateTime = props.bike.created_at.split("T");
  const date = dateTime[0];
  const id = props.bike.bike_id;

  let modelname = "XXXXXX";
  if (props.bike.bike_manufacturer && "model_name" in props.bike && "maker_name" in props.bike.bike_manufacturer) {
    modelname = props.bike?.model_name?.model_name.replace(" ", "-");
  } else {
    console.debug("Car without model name", props.bike);
    return <>{/* <h1>Incomplete Infor</h1> */}</>;
  }
  const slug = `/bike-details/${props.bike.bike_manufacturer.maker_name}-${modelname}/?bike_id=${id}`;

  return (
    <BikeCardDiv className={props.listView ? "listView" : "gridView"}>
      <a href={slug}>
        <ImgDiv className={props.listView ? "listImgDiv" : "gridImgDiv"}>
          <Img className={props.listView ? "listImg" : "gridImg"} src={props.bike.images.image_url}></Img>

          {/* {props.listView &&
            (props.bike.call_for_price === "-" ||
              props.bike.call_for_price === "no" ||
              props.bike.call_for_price === null) &&
            props.bike.fixed_price && (
              <BikePrice>
                <img src={Taka} style={{ height: "14px", width: "14px" }} alt="taka" />
                <span className={classes.cartype}>{Math.trunc(props.bike.fixed_price).toLocaleString("en-IN")}</span>
              </BikePrice>
            )} */}
          {/* {props.bike.call_for_price === "yes" && <BikePrice>Call for Price &nbsp;</BikePrice>} */}
          <BikePrice>
            <img src={Taka} style={{ height: "14px", width: "14px" }} alt="taka" />
            <span className={classes.cartype}>{Math.trunc(props.bike.fixed_price).toLocaleString("en-IN")}</span>
          </BikePrice>
        </ImgDiv>
      </a>

      {props.listView && <Divider orientation="vertical" style={{ marginLeft: "50px" }} flexItem />}
      <BikeDetails className={props.listView ? "listviewdetails" : "gridviewdetails"}>
        {props.bike.bike_manufacturer && (
          <BikeModel className={props.listView ? "rightalign" : "carmodel"}>
            {props.bike.bike_manufacturer.maker_name}&nbsp;{props.bike.model_name.model_name}&nbsp;
            {props.bike.grade === "-" ? "" : props.bike.grade}
          </BikeModel>
        )}

        <Detail className="detail">
          <Price>
            {" "}
            <img src={Taka} style={{ height: "16px", width: "16px" }} alt="taka" />
            {Math.trunc(props.bike.fixed_price).toLocaleString("en-IN")}
          </Price>

          {/* {props.bike.call_for_price === "yes" ? (
            <Price>Call For Price</Price>
          ) : (
            <Price>
              {" "}
              <img src={Taka} style={{ height: "16px", width: "16px" }} alt="taka" />
              {Math.trunc(props.bike.fixed_price).toLocaleString("en-IN")}
            </Price>
          )} */}
        </Detail>
      </BikeDetails>
    </BikeCardDiv>
  );
};

const BikeCardDiv = styled.div`
  opacity: 1;
  &.gridView {
    width: calc(25% - 27px);
    border-radius: 5px;
    background-color: #d8d8d859;
    border: 1px solid #d8d8d8;
    margin: 15px 10px 15px 15px;
    display: flex;
    position: relative;
    padding-bottom: 10px;
    flex-direction: column;
    top: 0px;
    overflow: hidden;
    transition: all 0.35s ease-out;
    &:hover {
      box-shadow: 0px 3px 10px #b9b9b9;
      transition: all 0.35s ease-out;
    }
    @media (max-width: 992px) {
      width: calc(33% - 20px);
      margin: 10px;
    }
    @media (max-width: 767px) {
      width: calc(50% - 30px);
    }
    @media (max-width: 450px) {
      width: calc(100% - 30px);
      max-width: 300px;
    }
  }
  &.listView {
    width: 868px;
    padding: 20px;
    border-radius: 10px;
    position: relative;
    display: flex;
    flex-direction: row;
    @media (max-width: 1024px) {
      width: 600px;
      height: auto;
    }
    &:hover {
      box-shadow: 5px 5px 5px grey;
      transition: all 0.2s ease-out;
    }
  }
`;
const ImgDiv = styled.div`
  height: 170px;
  background: rgba(238, 238, 238, 0.25);
  margin-bottom: 10px;
  padding: 10px;
  overflow: hidden;
  &.gidImgDiv {
    width: 100%;
    margin-bottom: 20px;
  }
  &.listImgDiv {
    width: 285px;
    height: 184px;
    margin-bottom: 20px;
  }
  @media (max-width: 992px) {
    height: 145px;
  }
  @media (max-width: 767px) {
    height: 170px;
  }
`;
const Img = styled.img`
  &.gridImg {
    width: 100%;
    margin: 0 auto;
    display: flex;
    object-fit: cover;
    height: 150px;
    border-radius: 5px;
    @media (max-width: 992px) {
      height: 145px;
    }
    @media (max-width: 767px) {
      height: 150px;
    }
  }
  &.listImg {
    width: 245px;
    height: 144px;
    display: flex;
    border-radius: 10px;
  }
`;

const BikeDetails = styled.div`
  display: grid;
  &.gridviewdetails {
    grid-template-areas:
      "carname"
      "carmodel"
      "detail"
      "icons";
    width: 100%;
    margin: 0 auto;
  }
  &.listviewdetails {
    grid-template-areas:
      "carmodel carname"
      "detail icons";
    width: 90%;
    height: 70%;
    margin: 0 auto;
    padding: 20px 30px;
    text-wrap: break-word;
    line-height: 30px;
  }
`;
const CarName = styled.div`
  &.carname {
    grid-area: carmodel;
    font-size: 20px;
    line-height: 21px;
    color: #f06424;
    font-weight: 700;
    font-family: "Open Sans";
    cursor: pointer;
    text-decoration: none;
    padding: 0 8px 0 15px;
  }
`;
const BikeModel = styled.div`
  &.carmodel {
    grid-area: carname;
    font-size: 15px;
    line-height: 24px;
    color: #555555;
    font-weight: 600;
    font-family: "Open Sans";
    padding: 0 8px 0 15px;
    word-break: break-word;
  }
  &.rightalign {
    grid-area: carname;
    font-size: 14px;
    line-height: 24px;
    color: #555555;
    font-weight: 600;
    font-family: "Open Sans";
    text-align: right;
  }
`;
const BikePrice = styled.p`
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  font-family: Open Sans;
  text-align: center;
  background: transparent;
  border: 1px solid #f06424;
  border-radius: 20px;
  padding: 5px 7px;
  margin-top: 10px;
  margin-left: 20px;
  margin: revert;
`;

const Price = styled.p`
  padding: 5px 0px;
  font-size: 16px;
  line-height: 10px;
  color: #000000;
  font-weight: 700;
  font-family: "Open Sans";
  margin: revert;
  margin: 0;

  @media (max-width: 425px) {
    padding: 5px 8px;
  }
`;

const DetailText = styled.p`
  font-size: 16px;
  line-height: 20px;
  color: #555555;
  font-weight: 400;
  font-family: "Open Sans";
  margin: 6px 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  @media (max-width: 992px) {
    font-size: 14px;
    margin: 4px 0;
  }
`;

const Detail = styled.div`
  &.detail {
    grid-area: detail;
    padding: 0 15px;
    @media (max-width: 1100px) {
      padding: 0 8px;
      width: calc(100% - 13px);
    }
    @media (max-width: 992px) {
      padding: 0 8px;
      width: calc(100% - 13px);
    }
  }
`;

const Icons = styled.div`
  width: 100%;
  grid-area: icons;
  &.gridicons {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding-top: 10px;
    padding-bottom: 10px;
    @media (max-width: 1100px) {
      width: calc(100% - 30px);
    }
    @media (max-width: 992px) {
      width: calc(100% - 13px);
    }
  }
  &.listicons {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: flex-end;
  }
`;

const Icon = styled.div`
  display: flex;
  &.gridicon {
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    width: 25%;
  }
  &.listicon {
    flex-direction: row-reverse;
    justify-content: space-evenly;
    align-items: center;
    gap: 10px;
  }
`;

const Svg = styled(ReactSVG)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #dedede;
  line-height: 20px;
  text-align: center;
`;

const CardButton = styled(Button)`
  text-transform: uppercase;
  &.gridbutton {
    width: 100%;
    height: 43px;
    border-radius: 0px 0px 5px 5px;
    background-color: #e8e8e8;
    font-size: 14px;
    color: #f06424;
    font-weight: 600;
    font-family: "Open Sans";
    margin: 0px;
    padding: 0px;
    filter: none;
    position: absolute;
    bottom: 0px;
    &:hover {
      color: #e8e8e8;
      background-color: #f06424;
      transition: all 0.2s ease-out;
    }
  }
  &.listbutton {
    height: 43px;
    border: none;
    background-color: transparent;
    font-size: 14px;
    color: #f06424;
    opacity: 1;
    font-weight: 600;
    font-family: "Open Sans";
    position: absolute;
    text-decoration: underline;
    top: calc(100% - 50px);
    left: calc(100% - 140px);
    filter: none;
  }
`;

const A = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #555555;
`;
const IconTitle = styled.p`
  font-size: 12px;
  line-height: 22px;
  color: #555555;
  font-weight: 400;
  font-family: "Open Sans";
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
export default FeaturedNewCarCard;
