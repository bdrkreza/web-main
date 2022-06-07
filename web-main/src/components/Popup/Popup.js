import React, { Component, useState } from "react";
import {
  Grid,
  Container,
  Typography,
  Card,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  InputAdornment,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import Background from "https://bhalogari-static.s3.ap-southeast-1.amazonaws.com/sitestaticimg/assets/toyota-1920.png";
import styled from "styled-components";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import { useHistory } from "react-router-dom";
import { api } from "@configs/configs";
import { Redirect } from "react-router-dom";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import BangladeshFlag from "../../assets/bangladesh.svg";

const sellCar = {
  bgImg:
    "url('https://bhalogari-static.s3.ap-southeast-1.amazonaws.com/sitestaticimg/assets/toyota-1920.png')",
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  background: {
    position: "fixed",
    maxWidth: "728px",
    bottom: "3px",
    left: "50%",
    zIndex: "1000",
    transform: "translateX(-50%)",
    [theme.breakpoints.down("sm")]: {
      display: "none !important",
    },
    [theme.breakpoints.down("xs")]: {},
  },

  sellCarAtBestPrice: {
    height: "90px",
    width: "728px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    flexWrap: "wrap",
    background: "url('../../assets/pop-up-banner.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    [theme.breakpoints.down("sm")]: {
      alignContent: "center",
    },
    [theme.breakpoints.down("xs")]: {
      width: "320px",
      height: "70px",
      background: "#f06424",
    },
  },
  title: {
    fontSize: "45px",
    lineHeight: "50px",
    color: "#ffffff",
    fontWeight: "700",
    paddingLeft: "10px",
    paddingRight: "50px",
    fontFamily: "Open Sans",
    [theme.breakpoints.down("md")]: {
      fontSize: "35px",
      lineHeight: "40px",
      paddingLeft: "0",
      paddingRight: "0",
      height: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
      lineHeight: "30px",
      width: "auto",
      margin: "auto",
      paddingBottom: "10px",
    },
  },
  formCard: {
    width: "200px",
    height: "84px",
    marginRight: "3px",
    padding: "0",
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    borderRadius: "0",
    [theme.breakpoints.down("md")]: {
      // width: "100%",
      // padding: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      // padding: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "50px",
      flexDirection: "row",
    },
  },
  formText: {
    width: "260px",
    fontSize: "26px",
    lineHeight: "36px",
    color: "#000000",
    fontWeight: "700",
    fontFamily: "Open Sans",
    margin: "auto",
  },
  input: {
    width: "90%",
    borderRadius: "3px",
    backgroundColor: "#ffffff",
    margin: "5px auto 5px",
    height: "30px",
    "& input[type=number]": {
      fontSize: "18px",
      "-moz-appearance": "textfield",
    },
    "& input[type=number]::-webkit-outer-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
    "& input[type=number]::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
  },
  button: {
    width: "90%",
    height: "29px",
    borderRadius: "3px",
    backgroundColor: "#f06424",
    margin: "3px auto 0",
    color: "#fff",
    fontSize: "13px",
    letterSpacing: "1px",
    fontWeight: "600",
    fontFamily: "'Open sans', sans-serif",
    boxShadow: "none",
    [theme.breakpoints.down("xs")]: {
      height: "40px",
      width: "60%",
    },
  },
  rightpart: {
    "& b": {
      display: "none",
      [theme.breakpoints.down("xs")]: {
        display: "block",
        color: "#fff",
        margin: "5px",
      },
    },
  },
  alert: {
    color: "red",
    fontWeight: "700",
    paddingBottom: "10px",
  },
  closeButton: {
    position: "absolute",
    top: "-10px",
    right: "-10px",
    textDecoration: "none",
    zIndex: "11",
    borderBottom: "0px solid",
    "& svg": {
      fill: "#fff",
      background: "#f06425",
      borderRadius: "50%",
    },
  },
  flag: {
    height: "30px",
    width: "30px",
  },
}));

export default function SellCarAtBestPrice() {
  const history = useHistory();
  const classes = useStyles();
  const [number, setNumber] = useState(null);
  const [redirect, setRedirect] = useState(false);
  const [wrongNumber, setWrongNumber] = useState(false);
  const [close, setClose] = useState(false);
  const onClickHandler = async (e) => {
    if (localStorage.getItem("access_token") === null) {
      if (number === null) {
        history.push("/login");
      } else {
        if (number.toString().length == 11) {
          await api
            .post(`api/user/send-otp/`, {
              contact_number: number,
            })
            .then((res) => {
              if (res.status === 200) {
                setRedirect(true);
              }
            })
            .catch((err) => {
              if (err.response.status === 406) {
                setWrongNumber(true);
              }
            });
        } else {
          setWrongNumber(true);
        }
      }
      // history.push("/login");
    } else {
      history.push("/add-car");
    }
  };

  const onClose = (e) => {
    setClose(true);
  };

  const onChangeHandler = (e) => {
    setNumber(e.target.value);
    setWrongNumber(false);
  };

  if (redirect) {
    localStorage.setItem("contact_number", number);
    return <Redirect to={{ pathname: "/otp_verification" }} />;
  }
  return (
    <div
      className={classes.background}
      style={{ display: close ? "none" : "flex" }}
    >
      <button className={classes.closeButton} onClick={onClose}>
        <HighlightOffIcon />
      </button>
      <div className={classes.sellCarAtBestPrice}>
        <div className={classes.rightpart}>
          <b>Sell Now!</b>
          <Card className={classes.formCard}>
            <TextField
              id="outlined-number"
              label="Mobile Number"
              type="number"
              color="secondary"
              size="small"
              inputlabelprops={{
                shrink: true,
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img src={BangladeshFlag} className={classes.flag} />
                    <p style={{ fontSize: "18px", paddingLeft: "5px" }}>+88</p>
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              className={classes.input}
              onChange={onChangeHandler}
            />
            {wrongNumber && (
              <p className={classes.alert}>Invalid Contact Number</p>
            )}
            <Button
              variant="contained"
              className={classes.button}
              onClick={onClickHandler}
            >
              GET STARTED
            </Button>
            {/* </form> */}
          </Card>
        </div>
      </div>
    </div>
  );
}
