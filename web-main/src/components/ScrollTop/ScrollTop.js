import React, { useState } from "react";
import Upward from "../../assets/images/Arrow.svg";
import styled from "styled-components";

function Arrow (props) {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 1000) {
      setVisible(true);
    } else if (scrolled <= 1000) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <ArrowButton
      onClick={scrollToTop}
      style={{ display: visible ? "flex" : "none" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
      >
        <path
          id="ic_arrow_upward_24px"
          d="M4,12l1.41,1.41L11,7.83V20h2V7.83l5.58,5.59L20,12,12,4Z"
          transform="translate(-4 -4)"
        />
      </svg>
      <p>TOP</p>
    </ArrowButton>
  );
}

const ArrowButton = styled.div`
  z-index: 1000;
  color: #fff;
  background: #f06424;
  line-height: 20px;
  border-radius: 7px;
  text-align: center;
  cursor: pointer;
  position: fixed;
  bottom: 0px;
  right: 60px;
  fill: #fff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.32);
  transition: all ease-in-out 0.5s;
  display: flex;
  padding-left: 10px;
  padding-right: 10px;
  @media (max-width: 1024px) {
    right: 60px;
    bottom: 5px;
    text-align: center;
    padding-right: 0;
    opacity: 0.9;
    background: #ccc;
    box-shadow: none;
  }

  @media(max-width: 767px){
    right: 30px;
  }

  svg {
    margin: 10px 10px 10px 0;
  }
  p {
    padding: 12px 5px 12px 15px;
    line-height: 10px;
    display: block;
    font-size: 13px;
    margin: auto;
    font-weight: 700;
    border-left: 1px solid #fff;
    &:hover {
      transition: all ease-in-out 0.5s;
      svg {
        fill: #f06424;
        transition: all ease-in-out 0.5s;
      }
      span {
        color: #f06424;
        transition: all ease-in-out 0.5s;
      }
    }
    @media (max-width: 767px) {
      display: none !important;
    }
  }
  
`
export default Arrow;
