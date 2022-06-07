import React, { useState, Fragment } from "react";
import styled from 'styled-components';
import { makeStyles, Button, Paper } from "@material-ui/core";
import { Link,useHistory } from "react-router-dom";
import WhatsNewBg from "../../assets/bikepage/what-new-bg.png";
import takaIcon from "../../assets/taka.svg";
import { useLocalStorage } from 'react-use';

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
      maxWidth: "inherit",
      width: "100%",
      margin: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      minHeight: "330px",
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
    backgroundImage:
      "linear-gradient(180deg, rgba(233,233,233,0.5) 0%, #ffffff 100%)",
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

function BikeCardPopular(props) {
  // console.log("bik-card==", props.car);
  // const dateTime = props.car.created_at.split("T");
  // const date = dateTime[0];
  const [compareBikeList, setCompareBikeList] = useLocalStorage('compare-bike-list', []);
  const carList = localStorage.getItem('compare-car-list');
  const history = useHistory();
  const id = props.car.bike_id;
  const [bike] = useState(props.car);
  // console.log(bike);
  const classes = useStyles();
  const slug = `${bike.bike_manufacturer.maker_name}-${bike.model_name.model_name}`;


  const handleBikeToCompare = (e) => {
    e.preventDefault();
    
    if(carList !== null ){
      window.localStorage.removeItem("compare-car-list");
    }
    
    console.log("bike Compare button clicked", id);

    if (compareBikeList.length === 3) {
      compareBikeList.shift();
    }

    compareBikeList.push(props.car);
    setCompareBikeList([...compareBikeList]);

    history.push({
      pathname: "/compare-bike",
      state: { 
        carData: props.car,
      },
      // search: `?car_id=${id}`,
    });

  }

  return (
    <Fragment>
      <Paper className={classes.paper}>
        <Link
          to={{
            pathname: `/bike-details/${slug}`,
            state: {
              bike_id: id,
            },
            search: `?bike_id=${id}`,
          }}
        >
          <div className={classes.thumbnailBox}>
            <div className={classes.Imageroot}>
              <img
                src={bike.images ? bike.images.image_url : WhatsNewBg}
                alt=""
              />
            </div>
          </div>
        </Link>

        <div className={classes.modelBox}>
          <Link
            to={{
              pathname: `/bike-details/${slug}`,
              state: {
                bike_id: id,
              },
              search: `?bike_id=${id}`,
            }}
            style={{ textDecoration: "none", color: "#333" }}
          >
            {bike.bike_manufacturer && (
              <h4 className={classes.carModel}>
                {bike.bike_manufacturer.maker_name} &nbsp;
                {bike.model_name.model_name}
              </h4>
            )}
          </Link>
        </div>
        <div className={classes.carPriceButton}>
          <strong>
            <img src={takaIcon} alt="" /> <span> {`${Math.trunc(bike.fixed_price).toLocaleString("en-IN")}`} </span>
          </strong>
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
            <Button className={classes.viewMore} variant="outlined" fullWidth>
              View more
            </Button>
          </Link>
        </div>
        <CompareButton onClick={handleBikeToCompare}>Compare</CompareButton>
      </Paper>
    </Fragment>
  );
}

const CompareButton = styled.button`
    font-family: "Open Sans";
    position: absolute;
    top: 5px;
    left: 200px;
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

    @media(max-width: 1024px){
        left: 150px;
    }

    @media(max-width: 768px){
        left: 135px;
    }

    @media(max-width: 425px){
        left: 155px;
    }

    @media(max-width: 375px){
        left: 175px;
    }

    @media(max-width: 375px){
        left: 145px;
    }
`;

export default BikeCardPopular;
