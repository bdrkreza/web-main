import React, { Fragment, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import _ from "lodash";
import { makeStyles, Paper, IconButton, Typography, Box, Button } from "@material-ui/core";
import RatingStar from "../../components/RatingStar/RatingStar";
import takaIcon from "../../assets/taka.svg";
import takaIconGray from "../../assets/takagray.svg";
import styled from "styled-components";
import { useLocalStorage } from "react-use";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "16px 0",
    padding: "10px",
    fontSize: "18px",
    fontWeight: "500",
    fontFamily: "Open Sans",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  paper: {
    borderRadius: "5px",
    backgroundColor: "#ffffff",
    border: "1px solid #d8d8d8",
    minHeight: "350px",
    overflow: "hidden",
    position: "relative",
    boxShadow: "none",
    marginTop: "10px",
    marginBottom: "10px",
    "&:hover": {
      boxShadow: "0px 1px 10px 2px rgba(0,0,0,0.16)",
    },
    [theme.breakpoints.down("sm")]: {
      minHeight: "330px",
      // maxWidth: "255px",
      maxWidth: "inherit",
      width: "100%",
      margin: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      minHeight: "330px",
      // maxWidth: "255px",
      maxWidth: "inherit",
      width: "100%",
      margin: "auto",
    },
  },

  typography: {
    "&.MuiTypography-root": {
      fontSize: "18px",
      color: "#000000",
      fontFamily: "Open Sans",
      fontWeight: 700,
    },
  },

  cartype: {
    fontSize: "14px",
    lineHeight: "16px",
    color: "#ffffff",
    fontWeight: 400,
    fontFamily: "Open Sans",
    textAlign: "center",
    background: "#24d1f0",
    borderRadius: "20px",
    padding: "5px 12px",
    position: "absolute",
    top: "12px",
    left: "12px",
  },

  Imageroot: {
    [theme.breakpoints.down("sm")]: {
      height: "170px",
      minWidth: "inherit",
      width: "100%",
    },
    "& img": {
      maxWidth: "inherit",
      minWidth: "300px",
      width: "auto",
      height: "200px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      [theme.breakpoints.down("sm")]: {
        height: "auto",
        minWidth: "inherit",
        width: "100%",
      },
    },
  },
  thumbnailBox: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "200px",
    marginBottom: "10px",
    overflow: "hidden",
    backgroundImage: "linear-gradient(180deg, rgba(233,233,233,0.5) 0%, #ffffff 100%)",
    "& p": {
      position: "absolute",
      top: "0",
      left: "0",
    },
    [theme.breakpoints.down("sm")]: {
      height: "170px",
    },
  },
  modelBox: {
    padding: "0 15px",
    "& h3": {
      fontSize: "14px",
      color: "#555",
      fontWeight: "600",
    },
    "& h4": {
      fontSize: "16px",
      fontWeight: "600",
      color: "#f06424",
      padding: "5px 0 0 0",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
    },
    "& hr": {
      border: "0px solid",
      borderBottom: "1px solid #ccc",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0 10px",
    },
  },
  carName: {
    fontSize: "14px",
    lineHeight: "24px",
    color: "#555",
    fontWeight: "600",
  },
  carModel: {
    textAlign: "left",
    fontSize: "18px",
    lineHeight: "24px",
    color: "#f06424",
    fontWeight: 700,
    fontFamily: "Open Sans",
    padding: "7px 0",
  },
  carDescription: {
    display: "-webkit-box",
    WebkitLineClamp: "2",
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    marginBottom: "10px",
    lineHeight: "24px",
    fontSize: "14px",
    color: "#555",
  },
  ratings: {
    fontSize: "14px",
  },
  carPriceButton: {
    padding: "0px 15px",
    [theme.breakpoints.down("sm")]: {
      padding: "10px 10px",
    },
    "& label": {
      color: "#000",
    },
    "& strong": {
      fontSize: "16px",
      padding: "5px 0 11px",
      color: "#4e4e4e",
      display: "flex",
      alignItems: "center",
      justifyContent: "start",
      "& img": {
        display: "inline-block",
      },
      "& span": {
        paddingLeft: "5px",
        paddingRight: "5px",
        [theme.breakpoints.down("sm")]: {
          paddingLeft: "2px",
          paddingRight: "2px",
        },
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "16px",
      },
    },
    "& p": {
      color: "#777",
      "& strong": {
        fontWeight: "500",
        padding: "0 0 15px 0",
      },
    },
  },
  viewMore: {
    border: "1px solid #f06424",
    color: "#f06424",
    padding: "8px 0",
    textTransform: "capitalize",
    fontSize: "16px",
    fontWeight: "600",
    width: "100%",
    marginTop: "10px",
    marginLeft: "0px",
    fontFamily: '"Open Sans", sans-serif',
    "&:hover": {
      background: "#f06424",
      color: "#fff",
    },
  },
}));

const PopularBrandCard = (props) => {
  const classes = useStyles();
  const {
    cartype,
    image,
    carname,
    carmodel,
    cardesc,
    carstar,
    carrating,
    currencytype,
    carprice,
    carsaving,
    carreview,
  } = props.car;

  const modelname = props.car.model_name.model_name.split(" ")[1]
    ? `${props.car.model_name.model_name.split(" ")[0]}-${props.car.model_name.model_name.split(" ")[1]}`
    : props.car.model_name.model_name;
  const slug = `${props.car.car_manufacturer.maker_name}-${modelname}-${props.car.car_year}`;
  const id = props.car.car_id;

  const handleRedirect = () => {
    //logic
  };

  const [compareCarList, setCompareCarList] = useLocalStorage("compare-car-list", []);
  const bikeList = localStorage.getItem("compare-bike-list");
  const lang = sessionStorage.getItem("lang");
  const langVariables = JSON.parse(sessionStorage.getItem("langVariables"));
  const history = useHistory();

  const handleSelectCarToCompare = (e) => {
    e.preventDefault();
    // console.debug("handleSelectCarToCompare",props.car);
    // if(bikeList !== null){
    //     window.localStorage.removeItem('compare-bike-list');
    // }
    // Add to localstorage
    if (compareCarList.length === 3) {
      compareCarList.shift();
    }
    compareCarList.push(props.car);
    setCompareCarList([...compareCarList]);

    history.push({
      pathname: "/compare-car",
      state: {
        carData: props.car,
      },
      // search: `?car_id=${id}`,
    });
  };

  return (
    <Fragment>
      <Paper className={classes.paper}>
        <Link
          to={{
            pathname: `${props.pathName}/car-details/${slug}`,
            state: {
              car_id: id,
            },
            search: `?car_id=${id}`,
          }}
        >
          <div className={classes.thumbnailBox}>
            <span className={classes.cartype}>{props.car.car_body_type.body_name}</span>
            {/* <button>Compare</button> */}
            <div className={classes.Imageroot}>
              <img src={props.car.images.image_url} alt="Car" />
            </div>
          </div>
        </Link>

        <div className={classes.modelBox}>
          <Link
            to={{
              pathname: `${props.pathName}/car-details/${slug}`,
              state: {
                car_id: id,
              },
              search: `?car_id=${id}`,
            }}
            style={{ textDecoration: "none", color: "#333" }}
          >
            <h4 className={classes.carModel}>
              {props.car.car_manufacturer.maker_name}&nbsp;
              {props.car.model_name.model_name}&nbsp;
              {props.car.grade}&nbsp;
              {props.car.model_name.release_year === "-" ? null : props.car.model_name.release_year}
            </h4>
          </Link>
        </div>

        <div className={classes.carPriceButton}>
          <strong>
          <div>
                <img src={takaIcon} alt="Taka" />{" "}
                <span style={{ color: "#000000" }}>
                  {" "}
                  {`${Math.trunc(props.car.fixed_price).toLocaleString("en-IN")}`}{" "}
                </span>
              </div>

            {/* {props.car.call_for_price === "yes" ? (
              <Price style={{ color: "#000000" }}>Call for Price &nbsp;</Price>
            ) : (
              <div>
                <img src={takaIcon} alt="Taka" />{" "}
                <span style={{ color: "#000000" }}>
                  {" "}
                  {`${Math.trunc(props.car.fixed_price).toLocaleString("en-IN")}`}{" "}
                </span>
              </div>
            )} */}

            {/* <img src={takaIcon} /> <span> {`${props.car.price_to}`} </span> */}
          </strong>
          <Link
            to={{
              pathname: `${props.pathName}/car-details/${slug}`,
              state: {
                car_id: id,
              },
              search: `?car_id=${id}`,
            }}
            style={{ textDecoration: "none" }}
          >
            <Button className={classes.viewMore} variant="outlined" fullWidth>
              {langVariables !== null ? langVariables["view_more"].lang_content : "View more"}
            </Button>
          </Link>
        </div>
        <CompareButton onClick={handleSelectCarToCompare}>Compare</CompareButton>
      </Paper>
    </Fragment>
  );
};

const Price = styled.p`
  padding: 5px 0px;
  font-size: 18px;
  line-height: 10px;
  //   color: #000000;
  font-weight: 700;
  font-family: "Open Sans";
  margin: revert;
  margin: 0;
`;

const CompareButton = styled.button`
  font-family: "Open Sans";
  position: absolute;
  top: 5px;
  left: 200px;
  padding: 8px;
  border-radius: 5px;
  background-color: #f06424;
  border: 1px solid #f06424;
  color: white;
  font-size: 14px;

  &:hover {
    color: #f06424;
    background-color: white;
    border: white;
  }

  @media (max-width: 1024px) {
    left: 150px;
  }

  @media (max-width: 768px) {
    left: 135px;
  }

  @media (max-width: 425px) {
    left: 155px;
  }

  @media (max-width: 375px) {
    left: 175px;
  }

  @media (max-width: 375px) {
    left: 145px;
  }
`;

export default PopularBrandCard;
