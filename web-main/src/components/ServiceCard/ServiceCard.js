
import React from "react";
// import { useState } from "react";
// import { Container, IconButton } from "@material-ui/core";
// import SectionTitle from "@components/SectionTitle";
import ButtonWithIcon from "@components/ButtonWithIcon";
import Taka from "@assets/taka2.svg";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
// const InsuranceSvg = require("@assets/insurance.svg");
// const ShoppingSvg = require("@assets/shopping-cart.svg");
// import { ReactComponent as InsuranceSvg } from "@assets/insurance.svg";
// import { ReactComponent as ShoppingSvg } from "@assets/shopping-cart.svg";
import InsuranceSvg from "@assets/insurance.svg";
import ShoppingSvg from "@assets/shopping-cart.svg";

function ServiceCard(props) {
  // console.log(props.price);
  const history = useHistory();
  return (
    <AuctionDiv onClick={props.modalClick}>
      <div className="image-box">
        <img src={props.auctionImage} alt="Auction" />
      </div>
      <div className="content-box">
        <h2>{props.AucTitle}</h2>
        <p>
          {props.startFrom}
          <img src={Taka} alt="taka icon"></img>
          <strong>{props.price} </strong>
        </p>
        {props.AuctionSheet ? (
          <ButtonWithIcon text="verify now" />
        ) : (
          <div className="button-set">
            <button onClick={() => props.addToCart(props.serviceId, props.AucTitle, props.auctionImage, props.price)}>
              <ButtonWithIcon
                icon={ShoppingSvg}
                text="add to cart"
                serviceId={props.serviceId}
                serviceTitle={props.AucTitle}
              />
            </button>
            <button
              onClick={() => {
                props.addToCart(props.serviceId, props.AucTitle, props.auctionImage, props.price);
                history.push("/checkout");
              }}
            >
              <ButtonWithIcon icon={InsuranceSvg} text="buy now" />
            </button>
          </div>
        )}
      </div>
    </AuctionDiv>
  );
}

const AuctionDiv = styled.div`
  position: relative;
  text-align: center;
  width: calc(33.33% - 20px);
  overflow: hidden;
  border-radius: 5px;
  margin-bottom: 30px;
  box-shadow: 0px 3px 3.5px rgba(0, 0, 0, 0.16);
  background: #fff;
  > .image-box {
    max-height: 285px;
    overflow: hidden;
    img {
      width: calc(100% + 20px);
      margin-left: -10px;
      transition: all 0.25s ease-in-out;
    }
  }
  :hover {
    > .image-box {
      img {
        transform: scale(1.5);
        transition: all 0.25s ease-in-out;
      }
    }
  }
  @media (max-width: 1023px) {
    width: calc(50% - 10px);
    margin-bottom: 20px;
  }
  @media (max-width: 620px) {
    width: 100%;
    margin-bottom: 15px;
  }
  .content-box {
    background: #fff;
    padding: 20px 0;
  }
  p {
    font-size: 14px;
    line-height: 16px;
    color: #989898;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    img {
      padding-left: 5px;
    }
  }
  strong {
    font-size: 16px;
    line-height: 16px;
    color: #f06424;
    font-weight: 600;
    margin: 0 3px;
  }
  h2 {
    width: 100%;
    font-size: 20px;
    line-height: 16px;
    font-weight: 600;
    padding-bottom: 13px;
    @media (max-width: 480px) {
      font-size: 13px;
      line-height: 15px;
    }
  }
  .button-set {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    max-width: 300px;
    button {
      border: none;
      background-color: transparent;
      margin: 0 5px;
      :hover {
        background-color: #f06424;
        border-radius: 4px;
      }
    }
  }
`;

export default ServiceCard;
