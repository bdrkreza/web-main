import React, { useEffect, useState, Suspense } from "react";
import { Container, Divider } from "@material-ui/core";
import CheckoutForm from "@components/CheckoutForm/CheckoutForm";
import { Link } from "react-router-dom";
import Taka from "@assets/taka.svg";
import styled from "styled-components";
import { api } from "@configs/configs";
// import ServiceImage from "./service.png";
// import Pica from "pica";
// import ShippingAddress from '@components/ShippingAddress/ShippingAddress';

const renderLoader = () => <p>Loading</p>;

const Checkout = (props) => {
  // console.debug(props);
  const [submit, setSubmit] = useState(false);
  const [formdata, setFormdata] = useState([]);
  const [formOpen, setFormOpen] = useState();
  const [newAddress, setNewAddress] = useState(false);
  const [click, setClick] = useState();
  const user_id = localStorage.getItem("user_id");
  const [checked, setChecked] = useState(false);
  const [count, setCount] = useState(0);

  const onCheckClick = () => {
    setChecked(!checked);
  };

  useEffect(async () => {
    await api
      .get("api/services/get-addresses/" + user_id)
      .then((res) => {
        // console.log(res);
        if (res.status === 200) {
          // console.log(res.data);
          setFormdata(res.data.result);

          if (formdata.length > 0) {
            console.log(formdata.length);
            setFormOpen(false);
          }
        } else {
          // setFormOpen(true);
        }
      })
      .catch((err) => {
        // setFormOpen(true);
        console.error(err);
      });
  }, []);

  const purchaseClick = async () => {
    setCount(count + 1);
    if (checked && newAddress) {
      let product_name = "";
      props.serviceList.map((item) => {
        product_name = product_name + "&" + item.title;
      });
      let service_products = [];
      props.serviceList.map((item) => {
        service_products.push(item.serviceId);
      });
      const params = {
        first_name: newAddress.first_name,
        last_name: newAddress.last_name,
        cus_phone: newAddress.mobile,
        cus_email: newAddress.email,
        cus_country: "Bangladesh",
        cus_city: "",
        cus_add1: newAddress,
        make: newAddress.make,
        model: newAddress.model,
        model_year: newAddress.year,
        total_amount: props.totalPrice,
        multi_card_name: "",
        shipping_method: "NO",
        num_of_item: props.totalCount,
        product_name: product_name,
        product_category: "Service",
        product_profile: "General",
        cart: props.serviceList,
        registered_id: user_id,
        service_type: "Car servicing",
        // service_products: props.serviceList,
      };
      // console.log(newAddress);
      await api.post("/api/services/create-service/", { ...params }).then((res) => {
        console.log(res);
        window.location = res.data.GatewayPageURL;
      });
    }
  };

  return (
    <Div>
      <Suspense fallback={renderLoader()}>
        <Container>
          <CartDiv>
            <FormDiv>
              <div className="header">
                <p className="header-text">Shipping Address</p>
                <button variant="outlined" onClick={() => setFormOpen(true)} className="new-button">
                  + New Address
                </button>
              </div>

              <Divider style={{ marginBottom: "15px" }} />
              <CheckoutForm
                submit={submit}
                formdata={formdata}
                formOpen={formOpen}
                selectAddress={setClick}
                click={click}
                setFormOpen={setFormOpen}
                setFormdata={setFormdata}
                setNewAddress={setNewAddress}
              />
            </FormDiv>
            <SummaryDiv>
              <div className="total-price-container">
                <p className="header">Order Summary</p>
                <Divider />
                <div className="list-item">
                  <p>Cart Subtotal</p>
                  <b>
                    <img src={Taka} alt="taka" /> {props.totalPrice}{" "}
                  </b>
                </div>
                <Divider />
                <div className="list-item">
                  <p className="header">Order Total</p>
                  <b>
                    <img src={Taka} alt="taka" /> {props.totalPrice}{" "}
                  </b>
                </div>
              </div>
              <div className="items-container">
                <p className="header">{props.totalCount} items in cart</p>
                <Divider />

                {props.serviceList.map((item, index) => (
                  <div className="list-item" key={index}>
                    <img src={item.image} alt={item.title} />
                    <div>
                      <p>{item.title}</p>
                      <p>
                        {item.count}x{item.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <input type="checkbox" onClick={onCheckClick} />
                <label className="terms" htmlFor="terms">
                  {" "}
                  I read and agreed to the{" "}
                  <Link to="/terms-conditions" target="_blank">
                    Terms and Conditions
                  </Link>
                  ,{" "}
                  <Link to="/refund-policy" target="_blank">
                    Privacy Policy
                  </Link>{" "}
                  &{" "}
                  <Link to="/privacy-policies" target="_blank">
                    Refund Policy
                  </Link>
                </label>
              </div>
              <div>
                <Error>{!checked && count > 0 && <b> - Please agree to the terms and conditions</b>}</Error>
                <Error>{!newAddress && <b> - Select an address</b>}</Error>
              </div>

              <button className="button" onClick={purchaseClick}>
                Purchase Now
              </button>
            </SummaryDiv>
          </CartDiv>
        </Container>
      </Suspense>
    </Div>
  );
};

export default Checkout;

const Div = styled.div`
  padding: 58px 0px;
  padding-top: 240px;
  filter: drop-shadow(0px 3px 2.5px rgba(0, 0, 0, 0.16));
  background-color: #ecf0f1;
  button {
    cursor: pointer;
    width: 50%;
    border-radius: 10px;
    background-color: #e2e2e2;
    border: none;
    .shipping-address {
      color: #fff;
      padding: 10px;
      font-size: 14px;
      letter-spacing: 1px;
      line-height: 45px;
      font-weight: 600;
      text-transform: uppercase;
      border-radius: 10px;
      background-color: #e2e2e2;
    }
  }

  @media (max-width: 768px) {
    padding-top: 130px;
  }
`;

const CartDiv = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const FormDiv = styled.div`
  padding: 20px;
  width: 70%;
  background-color: #ffffff;
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 20px;
    .new-button {
      width: 140px;
      font-size: 14px;
      border-radius: 3px;
      padding: 9px 5px;
      :hover {
        background-color: #f06425;
        color: #fff;
        transition: all 0.3s ease-in-out;
      }
    }

    .header-text {
      font-size: 24px;
    }
    p {
      padding-top: 5px;
      font-size: 14px;
      letter-spacing: 1px;
      line-height: 24px;
      color: #555555;
      font-weight: 700;
      font-family: "Open Sans";
    }
  }
  @media (max-width: 767px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    .header {
      .new-button {
        width: inherit;
        border-radius: 5px;
      }
      .header-text {
        font-size: 14px;
      }
    }
  }

  @media (max-width: 320px) {
    .header {
      .header-text {
        font-size: 10px;
      }
      .new-button {
        .shipping-address {
          font-size: 10px;
        }
      }
    }
  }
`;

const SummaryDiv = styled.div`
  width: 30%;
  background-color: #fcddce;
  padding: 47px 16px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 50px;
  .total-price-container {
    width: 100%;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    .header {
      font-size: 16px;
      letter-spacing: 1px;
      line-height: 14px;
      color: #555555;
      font-weight: 600;
      font-family: "Open Sans";
      margin-bottom: 10px;
    }
    .list-item {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
  .items-container {
    width: 100%;
    flex-direction: column;
    justify-content: start;
    align-items: start;

    .header {
      font-size: 13px;
      letter-spacing: 0px;
      line-height: 14px;
      color: #636363;
      font-weight: 600;
      font-family: "Open Sans";
    }
    .list-item {
      display: flex;
      flex-direction: row;
      gap: 20px;
      align-items: center;
      img {
        width: 70px;
        height: 50px;
        border-radius: 3px;
      }
      p {
        font-size: 12px;
        line-height: 16px;
        color: #707070;
        font-weight: 600;
        font-family: "Open Sans";
      }
    }
  }
  label {
    font-size: 12px;
    padding-left: 5px;
    a {
      color: #f06425;
    }
  }
  button {
    width: 100%;
    height: 65px;
    border-radius: 10px;
    color: #fff;
    padding: 4px;
    height: 59px;
    font-size: 18px;
    letter-spacing: 1px;
    line-height: 45px;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 10px;
    background-color: #ff7c40;
    border: 3px solid #ff7c40;
    box-shadow: inset 0 0 0px 2px white;
    margin-top: 0px;
    transition: all 0.3s ease-in-out;
    :hover {
      background-color: #fff;
      color: #ff7c40;
      box-shadow: inset 0 0 0px 2px #ff7c40;
      border: 3px solid #fff;
      transition: all 0.3s ease-in-out;
    }
  }
  p {
    margin: 10px 0;
  }
  hr {
    width: 100%;
    background-color: #ffbb9c;
  }

  @media (max-width: 767px) {
    width: 100%;
  }

  @media (max-width: 480px) {
  }
`;
const Error = styled.div`
  b {
    color: red;
    font-size: 10px;
  }
`;
