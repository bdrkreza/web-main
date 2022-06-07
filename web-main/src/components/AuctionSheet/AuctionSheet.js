import React, { useState } from "react";

import { Button, TextField, makeStyles } from "@material-ui/core";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
// import {api} from "@configs/configs";
// import {api} from "/src/configs/configs"
import { api } from "@configs/configs";

import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  AuctionSheetInput: {
    height: "47px",
    borderRadius: "5px 0 0 5px",
    padding: "0",
    minWidth: "280px",
    "& input": {
      width: "300px",
      height: "43px",
      margin: "0",
      fontSize: "16px",
      textTransform: "uppercase",
      padding: "0 10px",
      background: "#fff",
      border: "2px solid #ea6431",
      borderRadius: "5px 0 0 5px",
    },
    [theme.breakpoints.down("xs")]: {
      minWidth: "100%",
      "& input": {
        borderRadius: "5px",
        width: "100%",
      },
    },
  },
  btn: {
    background: "#f06425",
    fontSize: "18px",
    color: "#fff",
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: "600",
    letterSpacing: "0.5px",
    padding: "8px 20px",
    margin: "0 0 0 -3px",
    borderRadius: "0 8px 8px 0",
    height: "47px",
    transition: "all ease-in-out 0.3s",
    "&:hover": {
      background: "#c54e19",
      color: "#fff",
      transition: "all ease-in-out 0.3s",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "8px 30px",
      width: "100%",
      marginTop: "10px",
      borderRadius: "5px",
    },
  },
  formMain: {
    marginTop: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    [theme.breakpoints.down("xs")]: {
      flexWrap: "wrap",
    },
  },
}));

function AuctionSheet(props) {
  const history = useHistory();
  const classes = useStyles();
  const [chassisNumber, setChassisNumber] = useState(0);
  const [redirect, setRedirect] = useState(false);
  const [data, setData] = useState();
  const [valid, setValid] = useState(true);
  const [noContent, setNoContent] = useState(true);
  const {
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onChangeHandler = (e) => {
    setValid(true);
    setNoContent(true);
    // const data = e.target.value;
    setChassisNumber(e.target.value);
    setValid(true);
    setNoContent(true);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    localStorage.setItem('req_chassis', '' + chassisNumber);
    await api
      .post(`/api/auctions/chassis-number/`, {
        chassis_no: chassisNumber,
      })
      .then((res) => {
        if (res.status === 200) {
          setData(res.data.result[0]);
          setRedirect(true);
        } else if (res.status === 204) {
          setNoContent(false);
        }
      })
      .catch((err) => {
        if (err.response.status === 406) {
          setValid(false);
        }
      });
  };

  if (redirect) {
    history.push({
      pathname: "/auctionsheet-check",
      state: { data: data, chassis_no: chassisNumber },
    });
  }

  return (
    <ModalBox>
      <h3>VERIFY YOUR AUCTION SHEET RIGHT HERE, RIGHT NOW!</h3>
      <p>Avoid the hassle of dealing with foreign auction sites</p>
      <b>Input your chassis number</b>
      <form className={classes.formMain}>
        <TextField
          id="AuctionField"
          variant="outlined"
          type="text"
          placeholder="XXT250-543232"
          size="small"
          className={classes.AuctionSheetInput}
          onChange={onChangeHandler}
        />
        <Button
          onClick={submitHandler}
          type="submit"
          className={classes.btn}
          endIcon={<ArrowForwardIosIcon color="white" fontSize="small" />}
        >
          SUBMIT
        </Button>
      </form>
      <Error>{!valid && <p>Invalid chassis number</p>}</Error>
      <Error>{!noContent && <p>Sorry! No Record is found for this Chassis No.</p>}</Error>
    </ModalBox>
  );
}

const ModalBox = styled.div`
  background: #efefef;
  padding: 30px;
  width: 100%;
  h3 {
    font-size: 32px;
    font-weight: 700;
    line-height: 40px;
    max-width: 480px;
  }
  p {
    font-size: 16px;
    padding: 15px 0;
  }
  @media (max-width: 480px) {
    padding: 30px 10px;
    h3 {
      font-size: 20px;
      line-height: 24px;
    }
  }
`;
const Error = styled.div`
  height: 14px;
  > p {
    font-size: 12px;
    color: red;
    font-weight: 700;
    line-height: 12px;
  }
`;
export default AuctionSheet;
