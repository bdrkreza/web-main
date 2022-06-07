import CameraBlack from "../../assets/images/camera-black.svg";
import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

export default function ProfileMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [fixed, setFixed] = React.useState(false);
  const changeStyle = () => {
    if (window.scrollY >= 100) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  window.addEventListener("scroll", changeStyle);

  return (
    <Menu className="menu">
      <ul>
        <li>
          <Link to="/profile-view" style={{ textDecoration: "none" }}>
            View Profile
          </Link>
        </li>
        <li>
          <Link to="/profile-edit" style={{ textDecoration: "none" }}>
            Edit Profile
          </Link>
        </li>
        <li>
          <Link to="/uploaded-cars" style={{ textDecoration: "none" }}>
            Uploaded Cars
          </Link>
        </li>
      </ul>
      <ul className="car-upload ">
        <li>
          <Link to="/sell-now" style={{ textDecoration: "none" }}>
            <svg
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 605.113 605.113"
            >
              <g>
                <g>
                  <path
                    d="M529.473,113.459h-56.729l-18.91-37.82C442.695,53.628,436.91,37.82,416.016,37.82H189.097
                      c-20.895,0-27.797,18.04-37.82,37.819l-18.91,37.82H75.639C33.867,113.459,0,147.326,0,189.098v302.556
                      c0,41.771,33.867,75.639,75.639,75.639h453.835c41.771,0,75.639-33.867,75.639-75.639V189.098
                      C605.111,147.327,571.244,113.459,529.473,113.459z M302.556,491.654c-83.543,0-151.278-67.734-151.278-151.277
                      s67.735-151.278,151.278-151.278c83.543,0,151.278,67.735,151.278,151.278S386.1,491.654,302.556,491.654z"
                  />
                  <path
                    d="M302.556,226.918c-62.667,0-113.459,50.792-113.459,113.459c0,62.668,50.792,113.459,113.459,113.459
			              c62.667,0,113.459-50.791,113.459-113.459S365.223,226.918,302.556,226.918z"
                  />
                </g>
              </g>
            </svg>
            Sell Now
          </Link>
        </li>
      </ul>
      <ul className="desktop-view">
        <li>
          <Link to="/contact-us" style={{ textDecoration: "none" }}>
            Contact Us
          </Link>
          <Link to="/faq-support" style={{ textDecoration: "none" }}>
            FAQ and Support
          </Link>
        </li>
      </ul>
    </Menu>
  );
}

const Menu = styled.div`
  border-radius: 5px;

  @media(max-width: 960px) and  (min-width: 774px){
    width: 100%;
    position: relative;
    top: -135px;
    left: 3px;
  }
  @media (max-width: 768px) {
    padding-bottom: 70px;
    margin-bottom: 20px;
    position: relative;
    top: 40px;
  }
  &.fixed {
    top: 190px;
  }
  ul {
    border-radius: 5px;
    background-color: #f5f6f8;
    overflow: hidden;
    width: 250px;
    color: #555555;
    font-size: 20px;
    list-style-type: none;
    position: relative;
    li {
      a {
        color: rgb(85, 85, 85);
        padding: 16px 20px 16px 30px;
        display: block;
        font-size: 16px;
        border-bottom: 1px solid rgb(238, 238, 238);
        &:hover {
          color: #fff;
          background: #f06425;
        }
      }
    }
    &.desktop-view {
      margin-top: 20px;
      @media(max-width: 960px) and  (min-width: 774px){
        display: none;
      }
      @media (max-width: 768px) {
        display: none;
      }
    }

    &.car-upload {
      height: 50px;
      margin-top: 20px;
      background: #f06425;
      border-radius: 5px;
      li {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        svg {
          width: 20px;
          height: 20px;
          fill: #fff;
          margin-right: 10px;
        }
        &:hover {
          background: #fff;
          a {
            background: #fff;
            color: #f06425;
          }
          svg {
            fill: #f06425;
          }
        }
        a {
          color: #fff;
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: start;
          &:hover {
            color: #f06425;
            background: #fff;
          }
          @media (max-width: 960px) {
            justify-content: center;
          }
        }
      }
    }
    @media(max-width: 960px) and  (min-width: 774px){
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-around; 
    }
    @media (max-width: 768px) {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
  }
`;
