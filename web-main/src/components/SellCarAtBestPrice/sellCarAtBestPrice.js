import React, { useState } from "react";
import {
  Container,
  Typography,
  Card,
  TextField,
  InputAdornment,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import Background from "https://bhalogari-static.s3.ap-southeast-1.amazonaws.com/sitestaticimg/assets/toyota-1920.png";
// import styled from "styled-components";
// import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import { useHistory } from "react-router-dom";
import { api } from "@configs/configs";
import { Redirect } from "react-router-dom";
import BangladeshFlag from "../../assets/bangladesh.svg";

const sellCar = {
  bgImg:
    "url('https://bhalogari-static.s3.ap-southeast-1.amazonaws.com/media/banner/1920_16092021.webp')",
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  background: {
    backgroundImage: `${sellCar.bgImg}`,
    padding: "110px 0",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    "&:before": {
      position: "absolute",
      content: "''",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "20px 0",
    },
  },

  sellCarAtBestPrice: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      alignContent: "center",
    },
  },
  leftpart: {
    flex: "1 1 45%",
    paddingLeft: "10%",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      flex: "1 1 50%",
      paddingLeft: "0%",
    },
  },
  rightpart: {
    flex: "1 1 25%",
    paddingLeft: "5%",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "0%",
    },
  },
  title: {
    fontSize: "60px",
    lineHeight: "70px",
    color: "#ffffff",
    fontWeight: "700",
    paddingLeft: "10px",
    paddingRight: "50px",
    fontFamily: "Open Sans",
    [theme.breakpoints.down("md")]: {
      fontSize: "45px",
      lineHeight: "50px",
      paddingLeft: "0",
      paddingRight: "0",
      height: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      margin: "auto",
    },
  },
  list: {
    fontSize: "16px",
    lineHeight: "32px",
    color: "#ffffff",
    fontWeight: "600",
    fontFamily: "Open Sans",
    listStyle: "none",
    paddingLeft: "10px",
    "& li": {
      padding: "0",
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: "0",
      paddingRight: "0",
    },
  },
  listIcon: {
    color: "#fff",
    width: "40px",
  },
  formCard: {
    width: "300px",
    height: "330px",
    borderRadius: "10px",
    filter: "drop-shadow(0px 2px 3.5px rgba(255,255,255,0.2))",
    backgroundColor: "#ffffff",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      padding: "15px",
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
    width: "260px",
    borderRadius: "3px",
    backgroundColor: "#ffffff",
    margin: "auto",
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
    width: "260px",
    height: "48px",
    borderRadius: "3px",
    backgroundColor: "#f06424",
    margin: "auto",
    color: "#fff",
    fontSize: "14px",
    letterSpacing: "1px",
    fontWeight: "600",
    fontFamily: "'Open sans', sans-serif",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#f06424",
      border: "1px solid #f06424",
    },
  },
  alert: {
    color: "red",
    fontWeight: "700",
    paddingBottom: "10px",
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
  
  // eslint-disable-next-line
  const onClickHandler = async (e) => {
    if (localStorage.getItem("access_token") === null) {
      if (number === null) {
        history.push("/login");
      } else {
        if (number.toString().length == 11) {
          await api
            .post("api/user/send-otp/", {
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
      history.push("/sell-now");
    }
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
    <div className={classes.background}>
      <Container className={classes.sellCarAtBestPrice}>
        <div className={classes.leftpart}>
          {/* <Typography className={classes.title}>
            Sell your Car at the
            <span style={{ color: "#f06424" }}>&nbsp;Best Price</span>
          </Typography>
          <br />
          <List className={classes.list}>
            <ListItem>
              <ListItemIcon className={classes.listIcon}>
                <DoneOutlineIcon />
              </ListItemIcon>
              <p>Post your Ad for Free in 3 Easy Steps</p>
            </ListItem>
            <ListItem>
              <ListItemIcon className={classes.listIcon}>
                <DoneOutlineIcon />
              </ListItemIcon>
              <p>Get Genuine offers from Verified Buyers</p>
            </ListItem>
            <ListItem>
              <ListItemIcon className={classes.listIcon}>
                <DoneOutlineIcon />
              </ListItemIcon>
              <p>Sell your car Fast at the Best Price</p>
            </ListItem>
          </List> */}
        </div>
        <div className={classes.rightpart}>
          <Card className={classes.formCard}>
            <Typography className={classes.formText}>
              Want to add your Car in our listing?
            </Typography>
            {/* <form type="submit" method="POST"> */}
            <TextField
              id="outlined-number"
              label="Enter Your Mobile Number"
              type="number"
              color="secondary"
              inputlabelprops={{
                shrink: true,
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img src={BangladeshFlag} className={classes.flag} alt="Start"/>
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
      </Container>
    </div>
  );
}
