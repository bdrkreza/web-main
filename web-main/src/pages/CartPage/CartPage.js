import React, { Suspense } from "react";
import { Container, Divider } from "@material-ui/core";
import styled from "styled-components";
// import ServiceImage from "./service.png";
import Taka from "../../assets/taka.svg";
import { Link } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

const renderLoader = () => <p>Loading</p>;

const CartPage = (props) => {
  console.log("service : ", props.serviceList);

  return (
    <Div>
      <Suspense fallback={renderLoader()}>
        <Container>
          <CartDiv>
            <ListDiv>
              <div className="header">
                <p>My Shopping Cart</p>
                <p>{props.totalCount} Items</p>
              </div>
              <Divider />
              <div className="thead">
                <p style={{ width: "40%" }}>Service Details</p>
                <p>Quantity</p>
                <p>Price</p>
                <p>Total</p>
              </div>

              {props.serviceList.map((service, i) => (
                <div key={i} className="tbody">
                  <CloseIcon
                    className="cross-button"
                    onClick={() => {
                      props.removeService(service.serviceId);
                    }}
                  />
                  <div className="imgdiv">
                    <img src={service.image} alt={service.title} />
                    <p>{service.title}</p>
                  </div>
                  <div className="inc-dec">
                    <button
                      onClick={() => {
                        props.decrementService(service.serviceId);
                      }}
                    >
                      -
                    </button>
                    <p>{service.count}</p>
                    <button
                      onClick={() => {
                        props.addToCart(service.serviceId, service.title, service.image, service.price);
                      }}
                    >
                      +
                    </button>
                  </div>
                  <p>
                    <img src={Taka} alt="Taka" />
                    {service.price}
                  </p>
                  <p>
                    <img src={Taka} alt="Taka" />
                    {service.price * service.count}
                  </p>
                </div>
              ))}
              <Link to="/service">
                <KeyboardBackspaceIcon />
                Continue Shopping
              </Link>
            </ListDiv>
            <TotalPriceDiv>
              <p>Cart subtotal</p>
              <h1>
                <img src={Taka} alt="Taka" />
                {props.totalPrice}
              </h1>

              <Link className="button" to="/checkout">
                Proceed to Checkout
              </Link>
            </TotalPriceDiv>
          </CartDiv>
        </Container>
      </Suspense>
    </Div>
  );
};

export default CartPage;

const Div = styled.div`
  padding: 58px 0px;
  padding-top: 240px;
  filter: drop-shadow(0px 3px 2.5px rgba(0, 0, 0, 0.16));
  background-color: #ecf0f1;
  @media (max-width: 1023px) {
    padding-top: 140px;
  }
`;

const CartDiv = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const ListDiv = styled.div`
  padding: 58px;
  width: 70%;
  background-color: #ffffff;
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 30px;
    p {
      font-size: 24px;
      letter-spacing: 1px;
      line-height: 24px;
      color: #555555;
      font-weight: 700;
      font-family: "Open Sans";
      @media (max-width: 1023px) {
        font-size: 20px;
      }
      @media (max-width: 499px) {
        font-size: 18px;
      }
    }
  }
  .thead {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
    text-align: left;
    font-size: 18px;
    color: #9d9d9d;
    font-weight: 400;
    font-family: "Open Sans";
    p {
      padding-right: 20px;
      @media (max-width: 1023px) {
        padding-right: 10px;
        font-size: 16px;
      }
      @media (max-width: 499px) {
        padding-right: 10px;
        font-size: 14px;
      }
    }
  }
  .tbody {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    border-radius: 5px;
    padding: 5px;
    filter: drop-shadow(0px 3px 3.5px rgba(0, 0, 0, 0.05));
    background-color: #ffffff;
    border: 1px solid #000000;
    p {
      padding-right: 20px;
      @media (max-width: 1023px) {
        font-size: 14px;
        padding-right: 10px;
      }
      @media (max-width: 1023px) {
        padding-right: 0px;
      }
    }
    .imgdiv {
      display: flex;
      flex-direction: row;
      justify-content: start;
      align-items: center;
      gap: 20px;
      width: 40%;
      img {
        width: 100px;
        @media (max-width: 1023px) {
          width: 80px;
        }
        @media (max-width: 499px) {
          width: 60px;
        }
      }
      @media (max-width: 1023px) {
        gap: 10px;
        font-size: 12px;
      }
      @media (max-width: 499px) {
        align-items: start;
        flex-direction: column;
        gap: 5px;
      }
    }
    .inc-dec {
      display: flex;
      flex-direction: row;
      align-items: center;
      p {
        padding: 5px;
        min-width: 25px;
        text-align: center;
      }
      button {
        width: 30px;
        height: 30px;
        border: none;
        cursor: pointer;
        transition: all ease-in-out 0.5s;
        :hover {
          background: #f06425;
          transition: all ease-in-out 0.5s;
          color: #fff;
        }
      }
      @media (max-width: 499px) {
        flex-direction: column;
        button {
          // background-color: transparent;
        }
      }
    }
    .cross-button {
      cursor: pointer;
      position: absolute;
      right: -10px;
      top: -10px;
      width: 20px;
      height: 20px;
      color: #fff;
      padding: 3px;
      background-color: #9d9d9d;
      border-radius: 50%;
    }
  }
  a {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 18px;
    line-height: 18px;
    color: #ff7c40;
    font-weight: 600;
    font-family: "Open Sans";
    text-decoration: none;
  }
  @media (max-width: 768px) {
    padding: 24px;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const TotalPriceDiv = styled.div`
  width: 30%;
  background-color: #fcddce;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding-left: 58px;
  h1 {
    img {
      height: 24px;
      padding-right: 5px;
    }
  }
  p {
    font-size: 14px;
    letter-spacing: 2px;
    line-height: 14px;
    color: #555555;
    font-weight: 600;
    font-family: "Open Sans";
    text-transform: uppercase;
  }
  div {
    display: flex;
    flex-direction: row;
    gap: 5px;
    p {
      font-size: 10px;
      letter-spacing: 0;
      color: #000000;
      font-weight: 400;
      font-family: "Open Sans";
      text-transform: none;
      a {
        color: #f06425;
        text-decoration: none;
      }
    }
  }
  .button {
    color: #fff;
    font-size: 14px;
    background-color: #f06425;
    text-decoration: none;
    margin: 20px 0px;
    padding: 7px 12px;
    border-radius: 20px;
    border: 2px solid #fff;
  }
  @media (max-width: 900px) {
    padding-left: 24px;
  }
  @media (max-width: 767px) {
    padding: 0px;
    padding-top: 24px;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;
