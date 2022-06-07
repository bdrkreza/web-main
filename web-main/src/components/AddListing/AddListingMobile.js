import React from "react";

// import CameraBlack from "../../assets/images/camera-black.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";

function AddListingMobile() {
  const langVariables = JSON.parse(sessionStorage.getItem("langVariables"));
  return (
    <UploadIcon>
      <Link to="/sell-now">
        <div className="grid grid-cols-1 place-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="35.719" height="35.47" viewBox="0 0 35.719 35.47">
            <path
              id="ic_add_circle_24px"
              d="M19.859,2A17.736,17.736,0,1,0,37.719,19.735,17.8,17.8,0,0,0,19.859,2Zm8.93,19.509H21.645V28.6H18.073V21.509H10.93V17.962h7.144V10.868h3.572v7.094h7.144Z"
              transform="translate(-2 -2)"
              fill="#fff"
            />
          </svg>
          <p>
            {langVariables !== null
              ? langVariables["sell_now"]
                ? langVariables["sell_now"].lang_content
                : "Sell Now"
              : "Sell Now"}
          </p>
        </div>
      </Link>
    </UploadIcon>
  );
}

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

export default AddListingMobile;
