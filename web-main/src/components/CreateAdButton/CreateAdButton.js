import React from "react";
// import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import CameraBlack from "../../assets/images/camera-black.svg";

function CreateAdButton(props) {
  const lang = sessionStorage.getItem("lang");
  const langVariables = JSON.parse(sessionStorage.getItem("langVariables"));

  return (
    <AdLink>
      <span>{langVariables !== null ? langVariables["buy_now"].lang_content : "Buy Now"}</span>
      <ul>
        <li>
          <Link to="/used-car">{langVariables !== null ? langVariables["used_car"].lang_content : "Used Car"}</Link>
        </li>
        <li>
          <Link to="/reconditioned-car">
            {langVariables !== null ? langVariables["reconditioned_car"].lang_content : "Reconditioned Car"}
          </Link>
        </li>
        <li>
          <Link to="/new-car">{langVariables !== null ? langVariables["new_car"].lang_content : "New Car"}</Link>
        </li>
        <li>
          <Link to="/bikes">{langVariables !== null ? langVariables["bikes"].lang_content : "Bikes"}</Link>
        </li>
      </ul>
    </AdLink>
  );
}

const Styled = {};

const AdLink = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  color: #f06424;
  text-align: center;
  border-radius: 22px;
  background: #fff;
  padding: 0px 25px;
  line-height: 44px;
  height: 44px;
  box-shadow: 0px 2px 3.5px rgba(0, 0, 0, 0.16);
  font-family: "Open sans", sans-serif;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  &:hover {
    color: #fff;
    background: #f06424;
    ul {
      display: block;
    }
  }
  &:before {
    position: absolute;
    content: "";
    left: -24px;
    top: 3px;
    width: 1px;
    height: 38px;
    background: #c2c2c2;
  }

  ul {
    position: absolute;
    right: 0;
    top: 44px;
    min-width: 180px;
    list-style: none;
    background: #fff;
    z-index: 999;
    border-radius: 10px;
    display: none;
    text-align: left;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
    li {
      a {
        text-decoration: none;
        display: block;
        padding: 5px 10px;
        color: #555;
        font-weight: 400;
        line-height: 24px;
        text-transform: capitalize;
        letter-spacing: 0px;

        &:hover {
          background: #e8e8e8;
        }
      }
    }
  }
  @media (max-width: 1023px) {
    display: none;
  }
`;
export default CreateAdButton;
