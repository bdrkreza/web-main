import React, { Fragment } from "react";
import { Link, useHistory } from "react-router-dom";
//import _ from "lodash";
import { makeStyles, Paper, IconButton, Typography, Box, Button } from "@material-ui/core";
import styled from "styled-components";

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
    minHeight: "380px",
    overflow: "hidden",
    position: "relative",
    boxShadow: "none",
    marginTop: "10px",
    marginBottom: "10px",
    "&:hover": {
      boxShadow: "0px 1px 10px 2px rgba(0,0,0,0.16)",
    },
    [theme.breakpoints.down("sm")]: {
      minHeight: "403px",
    },
    [theme.breakpoints.down("xs")]: {
      // width: "330px",
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
    "& img": {
      maxWidth: "inherit",
      minWidth: "300px",
      // width: "auto",
      width: "90px",
      height: "60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      [theme.breakpoints.down("sm")]: {
        height: "170px",
        minWidth: "235px",
      },
    },
  },
  thumbnailBox: {
    position: "relative",
    cursor: "pointer",
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
    textAlign: "left",
    "& h3": {
      fontSize: "14px",
      color: "#555",
      fontWeight: "600",
      textAlign: "left",
    },
    "& h4": {
      fontSize: "18px",
      fontWeight: "700",
      color: "#f06424",
      textAlign: "left",
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
    fontSize: "15px",
    lineHeight: "24px",
    color: "#555",
    fontWeight: "600",
  },
  carModel: {
    fontSize: "13px",
    lineHeight: "24px",
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
    textAlign: "left",
    padding: "12px 15px",
    [theme.breakpoints.down("sm")]: {
      padding: "10px 10px",
    },
    "& label": {
      color: "#000",
    },
    "& strong": {
      fontSize: "18px",
      padding: "6px 0",
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
      textAlign: "left",
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

const CarCardForRecentlyAdded = (props) => {
  const classes = useStyles();
  const history = useHistory();
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
  const slug = `/${props.pathName}/car-details/${props.car.car_manufacturer.maker_name}-${modelname}-${props.car.car_year}/?car_id=${props.car.car_id}`;

  const handleRedirect = () => {
    //logic goes here
  };

  return (
    <Fragment>
      <PaperDiv>
        <a href={slug} style={{ display: "flex", textDecoration: "none", color: "#333" }}>
          {/* <div className={classes.thumbnailBox}> */}
          {/* <span className={classes.cartype}>
              {props.car.car_body_type.body_name}
            </span> */}
          {/* <div className="image-box"> */}
          <img src={props.car.images.image_url} className="image" alt="Car" />
          {/* </div> */}
          {/* </div> */}
          <div className="description">
            <div className="car-info">
              <h3>
                {props.car.car_manufacturer.maker_name} {props.car.model_name.model_name}&nbsp;{" "}
                {props.car.model_name.release_year === "-" ? null : props.car.model_name.release_year}
              </h3>
              {/* <h3 className={classes.carModel}>
                      {props.car.model_name.release_year === "-"
                      ? null
                      : props.car.model_name.release_year}
                  </h3> */}
                  <p>৳ {Math.trunc(props.car.fixed_price).toLocaleString("en-IN")}</p>
              {/* {props.car.call_for_price === "yes" ? (
                <p>Call For Price</p>
              ) : (
                <p>৳ {Math.trunc(props.car.fixed_price).toLocaleString("en-IN")}</p>
              )} */}
            </div>
          </div>
        </a>

        {/* <div className={classes.modelBox}>
          <Link
            to={{
              pathname: `${slug}`,
              state: {
                car_id: props.car.car_id,
              },
              search: `?car_id=${props.car.car_id}`,
            }}
            style={{ textDecoration: "none", color: "#333" }}
          >
            <h3>{props.car.car_manufacturer.maker_name}</h3>
            <h4 className={classes.carModel}>
              {props.car.model_name.model_name}&nbsp;
              {props.car.model_name.release_year === "-"
                ? null
                : props.car.model_name.release_year}
            </h4>
          </Link>
          <p style={{ color: "#f06425"}}>{Math.trunc(props.car.fixed_price).toLocaleString("en-IN")}</p>

        </div> */}
        {/* <p className={classes.carDescription}>{props.car.description} </p> */}
        {/* <Box display="flex" className={classes.ratings}>
            <Box style={{ marginBottom: "10px" }}>
              {_.range(4).map((star) => (
                <RatingStar key={star} />
              ))}
            </Box>
            <Box style={{ padding: "5px" }}>{carrating}8/10</Box>
          </Box> */}
        {/* <hr /> */}
      </PaperDiv>
    </Fragment>
  );
};

const PaperDiv = styled.div`
  // min-height: 380px;
  overflow: hidden;
  position: relative;
  box-shadow: none;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;

  .image {
    height: 98px;
    width: 150px;
  }

  .description {
    display: flex;
    flex-direction: column;
    .car-info {
      padding-top: 10px;
      padding-left: 10px;
      h3 {
        font-size: 15px;
        line-height: 16px;
        color: #646464;
        font-weight: 600;
      }
      p {
        padding-top: 5px;
        font-size: 15px;
        line-height: 16px;
        color: #f06424;
        font-weight: 700;
      }
    }
  }
  // .image-box{
  //   max-width: inherit;
  //   height: 200px;
  //   min-width: 120px;
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  // }

  @media (max-width: 1024px) {
    .image {
      height: 100px;
      width: 100px;
    }
  }

  @media (max-width: 425px) {
    .image {
      height: 100px;
      width: 140px;
    }
  }
`;
export default CarCardForRecentlyAdded;
