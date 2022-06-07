import React, { useState, useEffect } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import styled from "styled-components";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MediaObject from "@components/MediaObject";
import CancelIcon from "@material-ui/icons/Cancel";
import ButtonWithIcon from "@components/ButtonWithIcon";
import { useHistory } from "react-router-dom";

function CartBox(props) {
  const history = useHistory();
  // const [subTotal, setSubTotal] = useState(0);

  return (
    <CartDiv>
      <ShoppingCartIcon />
      <span>{props.totalCount}</span>
      <div className={props.totalCount > 0 ? "hover-box" : "hidden"}>
        {props.serviceList.map((item, i) => (
          <MediaObject
            key={i}
            imageLeft={item.image}
            mediaTitle={item.title}
            mediaSubTitle={item.count + "x" + item.price}
            mediaClass="cart-item"
            // onClickFunction={props.removeItem}
            close={
              <CancelIcon onClick={() => props.removeService(item.serviceId)} />
            }
          />
        ))}
        <div className="subtotal">
          Subtotal: <strong>{props.totalPrice}</strong>
        </div>
        <div className="button-set">
          <button
            onClick={() => {
              history.push("/cart");
            }}
          >
            <ButtonWithIcon text="view cart" btnClass="view-btn" />
          </button>
          <button
            onClick={() => {
              history.push("/checkout");
            }}
          >
            <ButtonWithIcon text="Checkout" btnClass="view-btn" />
          </button>
        </div>
      </div>
    </CartDiv>
  );
}

const CartDiv = styled.div`
  position: relative;
  &:before {
    position: absolute;
    content: "";
    right: -24px;
    top: 3px;
    width: 1px;
    height: 38px;
    background: #c2c2c2;
    @media (max-width: 1023px) {
      content: none;
    }
  }
  > svg {
    display: block;
    width: 39px;
    height: 39px;
    border-radius: 50%;
    color: #f06424;
    background: #fff;
    line-height: 48px;
    text-align: center;
    box-shadow: 0px 2px 3.5px rgba(0, 0, 0, 0.16);
    padding: 0 8px;
    box-sizing: border-box;
    transition: all ease-in-out 0.4s;
  }
  > span {
    position: absolute;
    top: -8px;
    left: 22px;
    background: #f06424;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    font-size: 11px;
    display: block;
    text-align: center;
    line-height: 18px;
  }
  &:hover {
    .hover-box {
      height: auto;
      overflow: inherit;
      transition: all ease-in-out 0.5s;
      .cart-item,
      .subtotal {
        opacity: 1;
        transition: all ease-in-out 0.75s;
      }
      .button-set {
        opacity: 1;
        transition: all ease-in-out 1.5s;
      }
      @media (max-width: 1023px) {
        display: none;
      }
    }
  }
  @media (max-width: 1100px) {
    &:before {
      right: -18px;
    }
  }
  @media (max-width: 1023px) {
    margin-top: 5px;
    svg {
      width: 35px;
      height: 35px;
    }
    span {
      top: -4px;
      left: 25px;
      width: 14px;
      height: 14px;
      display: block;
      font-size: 12px;
      color: #fff;
      padding-left: 0px;
      line-height: 14px;
    }
  }
  .hover-box {
    position: absolute;
    top: 48px;
    left: 0;
    min-width: 260px;
    box-shadow: 0px 3px 3.5px rgba(0, 0, 0, 0.16);
    border-radius: 5px;
    background: #fff;
    z-index: 999;
    height: 0;
    overflow: hidden;
    transition: all ease-in-out 0.5s;
    &:before {
      position: absolute;
      content: "";
      left: 15px;
      top: -10px;
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-bottom: 10px solid #fff;
    }
    button {
      border: none;
      background-color: transparent;
    }
    .cart-item {
      opacity: 0;
      padding: 10px 0;
      margin: 0 12px;
      border-bottom: 0.5px solid #d4d4d4;
      transition: all ease-in-out 0.75s;
    }
    .media-image {
      margin-right: 10px;
      width: 70px;
      height: 45px;
      overflow: hidden;
      img {
        width: 100%;
      }
    }

    h3 {
      font-size: 12px;
      line-height: 16px;
      color: #707070;
      font-weight: 600;
    }
    p {
      font-size: 11px;
      line-height: 16px;
      color: #707070;
      font-weight: 400;
      padding-top: 2px;
    }
    svg {
      display: block;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      color: #9d9d9d;
      background: #fff;
      line-height: 14px;
      text-align: center;
      position: absolute;
      top: 16px;
      right: -4px;
    }
    .subtotal {
      text-align: center;
      font-size: 12px;
      line-height: 16px;
      color: #707070;
      font-weight: 600;
      padding: 10px 0;
      border-bottom: 0.5px solid #d4d4d4;
      margin: 0 12px;
      opacity: 0;
    }
    .button-set {
      opacity: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      max-width: 300px;
      transition: all ease-in-out 0.35s;
      .view-btn {
        background: #f06424;
        min-width: 110px;
        margin: 15px 12px;
        span {
          color: #fff;
        }
      }
    }
  }
  .hidden {
    display: none;
  }
`;

export default CartBox;
