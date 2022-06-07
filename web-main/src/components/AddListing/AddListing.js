import React from "react";

import CameraBlack from "../../assets/images/camera-black.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";

const lang =
  sessionStorage.getItem("lang") && sessionStorage.getItem("lang") != "null" ? sessionStorage.getItem("lang") : "en";
const langVariables = JSON.parse(sessionStorage.getItem("langVariables"));

// eslint-disable-next-line
function AddListing(props) {
  return (
    <AddIcon>
      <Link to="/sell-now">
        <span>
          {langVariables !== null
            ? langVariables["sell_now"]
              ? langVariables["sell_now"].lang_content
              : "Sell Now"
            : "Sell Now"}
        </span>
        <img src={CameraBlack} alt="camera icon" />
      </Link>
    </AddIcon>
  );
}

/** @deprecated unused */
const UploadIcon = styled.div`
  background: #f06425;
  width: 70px;
  height: 70px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 50%;
  margin-top: -40px;
  position: relative;
  ${"" /* border: 3px solid #fff; */}
  p {
    color: #fff;
    font-size: 8px;
    letter-spacing: 0px;
    line-height: 11px;
    color: #ffffff;
    font-weight: 700;
    text-transform: uppercase;
    padding-top: 2px;
  }
  a {
    text-decoration: none;
  }
`;

const AddIcon = styled.div`
  position: fixed;
  bottom: 45px;
  right: 32px;
  width: 150px;
  height: 150px;
  background: #f06425;
  border-radius: 50%;
  text-align: center;
  line-height: 150px;
  z-index: 999;
  border: 2px solid #f06425;
  box-shadow: inset 0 0 0px 4px #fff;
  @media (max-width: 1023px) {
    display: none;
  }
  @media (max-width: 767px) {
    width: 80px;
    height: 80px;
    line-height: 80px;
    bottom: 55px;
    right: 8px;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-decoration: none;
    color: #fff;
    height: 100%;
  }
  span {
    display: block;
    line-height: 15px;
    font-size: 20px;
    font-weight: 600;
    padding-bottom: 10px;
    @media (max-width: 767px) {
      font-size: 12px;
      padding-bottom: 3px;
    }
  }
  img {
    width: 50px;
    @media (max-width: 767px) {
      width: 20px;
    }
  }
`;

export default AddListing;
