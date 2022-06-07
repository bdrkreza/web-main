import React, { useState, useEffect } from "react";
// import AuctionSheet from '@components/AuctionSheet';
import CloseIcon from "@material-ui/icons/Close";
// import './PopupNew.css';
import styled from "styled-components";

import { Container, Grid, Dialog, makeStyles, Button, TextField } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useForm } from "react-hook-form";
import { api } from "@configs/configs";
import { useHistory } from "react-router-dom";
import PopupSvg from "../../assets/banner/popup.svg";
//import PopupPng from '../../assets/banner/pop-up.jpeg';
import PopupPng from "../../assets/banner/popup-bg.png";
import takaIcon from "../../assets/taka.svg";
// import PopupSvg from "https://bhalogari-static.s3.ap-southeast-1.amazonaws.com/media/banner/pop_up_2_07092021.svg";

const PopupNew = () => {
  const PopupImg = "http://dev.valogari.com/static/media/banner4.882ea2bf.jpg";

  const [open, setOpen] = React.useState(false);
  const [ispopup, setIspopup] = useState(true);

  const handlePopup = () => {
    setIspopup(false);
    setOpen(true);
  };
  const handlePopupClose = () => {
    setIspopup(false);
  };

  const handleClose = () => {
    console.log("object");
    setOpen(false);
  };

  const history = useHistory();
  // const classes = useStyles();
  const [chassisNumber, setChassisNumber] = useState(0);
  const [redirect, setRedirect] = useState(false);
  const [data, setData] = useState();
  const [valid, setValid] = useState(true);
  const [noContent, setNoContent] = useState(true);
  const [errMsg, setErrMsg] = useState(true);

  const [popups, setPopups] = useState([]);

  const {
    register,
    formState: { errors },
    reset,
  } = useForm({ mode: "onChange" });

  const onChangeHandler = (e) => {
    setValid(true);
    setNoContent(true);
    // const data = e.target.value;
    setChassisNumber(e.target.value);
    setValid(true);
    setNoContent(true);
  };

  useEffect(() => {
    try {
      (async () => {
        const {
          data: { res },
        } = await api.get(`api/site-images/site-image-upload/?image_for=popup&lang_code=en`);
        if (Array.isArray(res)) {
          setPopups(res);
        }
      })();
    } catch (err) {
      console.log("My Error : " + err);
    }
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (valid) {
      await api
        .post(`/api/auctions/chassis-number/`, {
          chassis_no: chassisNumber,
        })
        .then((res) => {
          if (res.status === 200) {
            setData(res.data.result[0]);
            setRedirect(true);
          } else if (res.status === 204) {
            setValid(false);
            setErrMsg("Sorry! No Record is found for this Chassis No.");
          }
        })
        .catch((err) => {
          if (err.response.status === 406) {
            setValid(false);
            setErrMsg("Invalid chassis number");
          }
        });
    }
  };

  if (redirect) {
    history.push({
      pathname: "/auctionsheet-check",
      state: { data: data, chassis_no: chassisNumber },
    });
  }

  return (
    <>
      <Div className={ispopup ? "popup-new" : "popup-new d-none"}>
        <div className="clickable-area" onClick={handlePopupClose} />
        {/* <div className="image-block" style={{ backgroundImage: `url(${PopupImg})` }}> */}
        <div className="image-block">
          {popups.map((popup) => (
            <img src={popup.image_url} onClick={handlePopup} alt="Popup" />
          ))}

          {/* <img src={PopupPng} alt="popup" onClick={handlePopup}/> */}
          <CloseIcon className="close-icon" onClick={handlePopupClose} />
          <div className="form-block">
            <h3>Verify Your Auction Sheet</h3>
            <div className="list-items">
              <span>Actual Auction Grade</span>
              <span>Authentic Mileage</span>
              <span>Repair Details</span>
              <span>Accident History</span>
            </div>
            <form className="form-area">
              <TextField
                id="AuctionField"
                variant="outlined"
                type="text"
                placeholder="XXT250-543232"
                size="small"
                className=""
                onChange={onChangeHandler}
              />
              <Button onClick={submitHandler} type="submit" className="">
                Submit
              </Button>
            </form>
            {!valid && (
              <Error className="error">
                <p>{errMsg}</p>
              </Error>
            )}
            {valid && <p>Avoid the Hassle of dealing with foreign sites</p>}
          </div>
        </div>
      </Div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      />
    </>
  );
};
const Div = styled.div`
  &.popup-new {
    position: fixed;
    z-index: 3000;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    // background-color: rgba(0,0,0,0.5);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .clickable-area {
      position: absolute;
      z-index: 4000;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      width: 100%;
    }
    .image-block {
      position: relative;
      z-index: 6000;
      width: 75%;
      max-width: 600px;
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 100%;
        pointer-events: none;
      }
      .close-icon {
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;
        z-index: 9999;
      }
      .form-block {
        position: absolute;
        text-align: center;
        top: 30px;
        h3 {
          font-size: 24px;
          color: #f06424;
        }
        .list-items {
          display: flex;
          justify-content: center;
          font-size: 12px;
          padding: 10px 0;
          font-weight: 600;
          color: #000;
          span {
            position: relative;
            padding-left: 20px;
            &::before {
              content: "";
              position: absolute;
              height: 6px;
              width: 6px;
              background: #000;
              top: 50%;
              transform: translateY(-50%);
              left: 8px;
              border-radius: 2px;
            }
          }
        }
        .form-area {
          background: #da5320;
          width: 323px;
          margin: 0 auto;
          height: 32px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 99px;
          div > div > input {
            height: 26px;
            padding: 0 10px;
            font-size: 14px;
            border-top-left-radius: 99px;
            border-bottom-left-radius: 99px;
            background: #fff;
            width: 188px;
          }
          div > div > fieldset {
            border-top-left-radius: 99px;
            border-bottom-left-radius: 99px;
            border-width: 0;
          }
          button {
            span {
              padding: 0 20px;
              color: #fff;
              text-transform: capitalize;
              font-size: 16px;
            }
          }
        }
        p {
          font-size: 12px;
          padding-top: 6px;
          font-weight: 600;
        }
        .error {
          height: 0;
        }
      }
    }
    &.d-none {
      display: none !important;
    }
    @media (max-width: 800px) {
      .image-block {
        height: 440px;
        background: #fff;
        align-items: flex-end;
        img {
          width: 100%;
        }
        .form-block {
          top: 50px;
          h3 {
            font-size: 18px;
          }
          .list-items {
            flex-wrap: wrap;
          }
          .form-area {
            width: 266px;
            div > div > input {
              width: 130px;
            }
          }
        }
      }
    }
    @media (max-width: 700px) {
      .image-block {
        height: 440px;
      }
    }
    @media (max-width: 600px) {
      .image-block {
        height: 380px;
      }
    }
    @media (max-width: 500px) {
      .image-block {
        height: 340px;
      }
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
export default PopupNew;
