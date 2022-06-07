import React from "react";
import _ from "lodash";
import { makeStyles, Button, Divider } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { ReactSVG } from "react-svg";
import Milage from "../../assets/carListPageIcons/milage.svg";
import Fuel from "../../assets/carListPageIcons/fuel.svg";
import Calendar from "../../assets/carListPageIcons/calendar.svg";
import Used from "../../assets/carListPageIcons/transmission.svg";
// import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Taka from "../../assets/taka.svg";
// import Transmission from "../../assets/carListPageIcons/shifter.svg";


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
  const dateTime = props.car.created_at.split("T");
  const date = dateTime[0];
  const id = props.car.car_id;
  const history = useHistory();
  console.log(props.car);

  const modelname = props.car.model_name.model_name.split(" ")[1]
    ? `${props.car.model_name.model_name.split(" ")[0]}-${
      props.car.model_name.model_name.split(" ")[1]
    }`
    : props.car.model_name.model_name;

  const slug = `${props.car.car_manufacturer.maker_name}-${modelname}-${props.car.car_year}`;

  const handleEdit = () => {
    history.push({
      pathname: `car-update/${slug}`,
      state: {
        carId: id
      },
      search: `?car_id=${id}`
    });
  }


  return (
    <CarCardDiv className={props.listView ? "listView" : "gridView"}>
      <Link
        to={{
          pathname: `${props.car.created_by}/car-details/${slug}`,
          state: {
            car_id: id,
          },
          search: `?car_id=${id}`,
        }}
      >
        <ImgDiv className={props.listView ? "listImgDiv" : "gridImgDiv"}>
          <Img
            className={props.listView ? "listImg" : "gridImg"}
            src={props.car.images.image_url}
          ></Img>

          {props.listView && (
            <CarPrice>
              <img src={Taka} style={{ height: "14px", width: "14px" }} alt="Taka"/>
              <span className={classes.cartype}>{Math.trunc(props.car.fixed_price).toLocaleString("en-IN")}</span>
            </CarPrice>
          )}
        </ImgDiv>
      </Link>

      {props.listView && (
        <Divider
          orientation="vertical"
          style={{ marginLeft: "50px" }}
          flexItem
        />
      )}
      <Cardetails
        className={props.listView ? "listviewdetails" : "gridviewdetails"}
      >
        <Link
          to={{
            pathname: `${props.car.created_by}/car-details/${slug}`,
            state: {
              car_id: id,
            },
            search: `?car_id=${id}`,
          }}
          style={{ textDecoration: "none" }}
        >
          <CarName className="carname">
            {/* {props.car.car_manufacturer.maker_name}&nbsp; */}
            {props.car.model_name.model_name}&nbsp;
            {props.car.grade === "-" ? "" : props.car.grade}
          </CarName>
        </Link>
        <CarModel className={props.listView ? "rightalign" : "carmodel"}>
          {props.car.car_manufacturer.maker_name}
        </CarModel>

        <Detail className="detail">
          {!props.listView && (
            <Price>
              <img src={Taka} style={{ height: "18px", width: "18px" }} alt="Taka"/>
              {Math.trunc(props.car.fixed_price).toLocaleString("en-IN")}
            </Price>
          )}
          <DetailText>
            Category: &nbsp;{" "}
            <A href="#">
              <b>{props.car.car_type.type_name}</b>
            </A>
          </DetailText>
          {props.car.model_name && (
            <DetailText>Model year: &nbsp; {props.car.car_year}</DetailText>
          )}
          {props.car.car_location !== null && (
            <DetailText>
              Location: &nbsp;
              {props.car.car_location.city.district_name}{" "}
            </DetailText>
          )}
        </Detail>
        <Icons className={props.listView ? "listicons" : "gridicons"}>
          <Icon className={props.listView ? "listicon" : "gridicon"}>
            <Svg src={Milage} />
            <IconTitle>{props.car.mileage}</IconTitle>
          </Icon>
          <Icon className={props.listView ? "listicon" : "gridicon"}>
            <Svg src={Fuel} />
            <IconTitle>{props.car.car_fuel.fuel_type}</IconTitle>
          </Icon>
          <Icon className={props.listView ? "listicon" : "gridicon"}>
            <Svg src={Calendar} />
            <IconTitle>{date}</IconTitle>
          </Icon>
          <Icon className={props.listView ? "listicon" : "gridicon"}>
            <Svg src={Used} />
            {props.car.transmission_type === "A" && (
              <IconTitle>Automatic</IconTitle>
            )}
            {props.car.transmission_type === "M" && (
              <IconTitle>Manual</IconTitle>
            )}
          </Icon>
        </Icons>
        <EditButton onClick={() => handleEdit()}>Edit</EditButton>
      </Cardetails>
      <Link
        to={{
          pathname: `${props.car.created_by}/car-details/${slug}`,
          state: {
            car_id: id,
          },
          search: `?car_id=${id}`,
        }}
        style={{ textDecoration: "none" }}
      ></Link>
    </CarCardDiv>
  );
};
const EditButton = styled.button`
  width: 90%;
  height: 50px;
  border-radius: 3px;
  background-color: #f06425;
  font-size: 14px;
  letter-spacing: 1px;
  color: #ffffff;
  font-weight: 600;
  box-shadow: none;
  border: 1px solid #f06425;
  font-family: Open Sans;
  margin: 5px auto;
  cursor: pointer;
`;
const CarCardDiv = styled.div`
  opacity: 1;
  &.gridView {
    width: calc(33.33% - 30px);
    border-radius: 5px;
    background-color: #ffffff;
    border: 1px solid #d8d8d8;
    margin: 15px 15px 15px 15px;
    position: relative;
    background-image: linear-gradient(
      180deg,
      rgba(233, 233, 233, 0.5) 0%,
      #ffffff 50%
    );
    display: flex;
    flex-direction: column;
    top: 0px;
    overflow: hidden;
    transition: all 0.35s ease-out;
    &:hover {
      box-shadow: 0px 3px 10px #b9b9b9;
      transition: all 0.35s ease-out;
    }
    @media (max-width: 1024px) {
      width: calc(33% - 20px);
      margin: 10px;
    }
    @media (max-width: 992px) {
      width: calc(50% - 20px);
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
    background-image: linear-gradient(
      180deg,
      rgba(237, 238, 242, 0) 0%,
      #edeef2 100%
    );
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
    height: 170px;
    @media (max-width: 992px) {
      height: 145px;
    }
    @media (max-width: 767px) {
      height: 170px;
    }
  }
  &.listImg {
    width: 245px;
    height: 144px;
    display: flex;
  }
`;

const Cardetails = styled.div`
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
    padding: 0 15px;
  }
`;
const CarModel = styled.div`
  &.carmodel {
    grid-area: carname;
    font-size: 16px;
    line-height: 24px;
    color: #555555;
    font-weight: 600;
    font-family: "Open Sans";
    padding: 0 15px;
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
const CarPrice = styled.p`
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
  font-size: 18px;
  line-height: 10px;
  color: #000000;
  font-weight: 700;
  font-family: "Open Sans";
  margin: revert;
  margin: 0;
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
