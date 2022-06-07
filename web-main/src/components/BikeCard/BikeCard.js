import React, { useState } from "react";
import { Button, Divider } from "@material-ui/core";
import { Link,useHistory } from "react-router-dom";
import styled from "styled-components";
import { ReactSVG } from "react-svg";
import Milage from "../../assets/carListPageIcons/milage.svg";
import Fuel from "../../assets/carListPageIcons/fuel.svg";
import Calendar from "../../assets/carListPageIcons/calendar.svg";
import Used from "../../assets/carListPageIcons/transmission.svg";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Taka from "../../assets/taka.svg";
import WhatsNewBg from "../../assets/bikepage/what-new-bg.png";
import { useLocalStorage } from 'react-use';

function BikeCard(props) {
  // console.log("bik-card==", props.car);
  const [compareBikeList, setCompareBikeList] = useLocalStorage('compare-bike-list', []);
  const carList = localStorage.getItem('compare-car-list');
  const dateTime = props.car.created_at.split("T");
  const date = dateTime[0];
  const id = props.car.bike_id;
  // console.log(id);
  const [bike] = useState(props.car);
  const history = useHistory();
  // const slug = bike.bike_name.split(" ")[1]
  //   ? `${bike.bike_name.split(" ")[0]}-${bike.bike_name.split(" ")[1]}`
  //   : bike.bike_name;
  const slug = `${bike.bike_manufacturer.maker_name}-${bike.model_name.model_name}`;

  const handleBikeToCompare = (e) => {
    e.preventDefault();

    // if(carList !== null ){
    //   window.localStorage.removeItem("compare-car-list");
    // }
    
    // console.log("bike Compare button clicked", id);

    if (compareBikeList.length === 3) {
      compareBikeList.shift();
    }

    compareBikeList.push(props.car);
    setCompareBikeList([...compareBikeList]);

    history.push({
      pathname: "/compare-car",
      state: { 
        carData: props.car,
      },
      // search: `?car_id=${id}`,
    });
  }

  return (
    <CarCardDiv className={props.listView ? "listView" : "gridView"}>
      <Link
        to={{
          pathname: `/bike-details/${slug}`,
          state: {
            bike_id: id,
          },
          search: `?bike_id=${id}`,
        }}
      >
        <ImgDiv className={props.listView ? "listImgDiv" : "gridImgDiv"}>
          <Img
            className={props.listView ? "listImg" : "gridImg"}
            src={bike.images ? bike.images.image_url : WhatsNewBg}
          />
        </ImgDiv>
      </Link>
      <Divider orientation="vertical" style={{ marginLeft: "50px" }} flexItem />
      <Cardetails
        className={props.listView ? "listviewdetails" : "gridviewdetails"}
      >
        <Link
          to={{
            pathname: `/bike-details/${slug}`,
            state: {
              bike_id: id,
            },
            search: `?bike_id=${id}`,
          }}
          style={{ textDecoration: "none" }}
        >
          {bike.model_name && (
            <CarName className="carname">
              {bike.model_name.model_name}
              {/* Honda CB trigger 2017 */}
            </CarName>
          )}
        </Link>
        {bike.bike_manufacturer && (
          <CarModel className={props.listView ? "rightalign" : "carmodel"}>
            {bike.bike_manufacturer.maker_name}
            {/* CB Trigger */}
          </CarModel>
        )}

        <Detail className="detail">
          {!props.listView && bike.fixed_price && (
            <Price>
              <img
                src={Taka}
                alt=""
                style={{ height: "18px", width: "18px" }}
              ></img>
              {Math.trunc(bike.fixed_price).toLocaleString("en-IN")}
              {/* 180000 */}
            </Price>
          )}
          {bike.bike_type && (
            <DetailText>
              Category: &nbsp;{" "}
              <A href="#">
                <b>{bike.bike_type.type_name}</b>
              </A>
            </DetailText>
          )}
          {bike.model_name && (
            <DetailText>
              Model year: &nbsp; {bike.model_name.release_year}
            </DetailText>
          )}
          {bike.author && (
            <DetailText>
              Author: &nbsp;<b>{bike.author}</b>
            </DetailText>
          )}
          {bike.bike_location !== "-" && (
            <DetailText>
              Location: &nbsp;
              {bike.bike_location}{" "}
            </DetailText>
          )}
        </Detail>
        <Icons className={props.listView ? "listicons" : "gridicons"}>
          <Icon className={props.listView ? "listicon" : "gridicon"}>
            <Svg src={Milage} />
            {bike.milage && <IconTitle>{bike.mileage}</IconTitle>}
          </Icon>
          <Icon className={props.listView ? "listicon" : "gridicon"}>
            <Svg src={Fuel} />
            {bike.bike_fuel && (
              <IconTitle>{bike.bike_fuel.fuel_type}</IconTitle>
            )}
          </Icon>
          <Icon className={props.listView ? "listicon" : "gridicon"}>
            <Svg src={Calendar} />
            {date && <IconTitle>{date}</IconTitle>}
          </Icon>
          <Icon className={props.listView ? "listicon" : "gridicon"}>
            <Svg src={Used} />
            {bike.transmission_type === "A" && <IconTitle>Automatic</IconTitle>}
            {bike.transmission_type === "M" && <IconTitle>Manual</IconTitle>}
          </Icon>
        </Icons>
      </Cardetails>
      <Link
        to={{
          pathname: `/bike-details/${slug}`,
          state: {
            bike_id: id,
          },
          search: `?bike_id=${id}`,
        }}
        style={{ textDecoration: "none" }}
      >
        <CardButton className={props.listView ? "listbutton" : "gridbutton"}>
          Buy now
          <NavigateNextIcon />
        </CardButton>
      </Link>
      <CompareButton onClick={handleBikeToCompare}>Compare</CompareButton>
    </CarCardDiv>
  );
}
const CarCardDiv = styled.div`
  opacity: 1;
  &.gridView {
    width: calc(25% - 30px);
    border-radius: 5px;
    background-color: #ffffff;
    border: 1px solid #d8d8d8;
    margin: 15px 15px 15px 15px;
    position: relative;
    padding-bottom: 43px;
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
    // object-fit: cover;
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

const CompareButton = styled.button`
    font-family: "Open Sans";
    position: absolute;
    top: 15px;
    left: 20px;
    padding: 8px;
    border-radius: 5px;
    background-color: #f06424;
    border: 1px solid #F06424;
    color: white;
    font-size: 14px;

    &:hover{
      color: #f06424;
      background-color: white;
      border: white;
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
    font-size: 22px;
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
    font-size: 14px;
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
export default BikeCard;
