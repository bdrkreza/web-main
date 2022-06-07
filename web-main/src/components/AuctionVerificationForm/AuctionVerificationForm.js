import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

import { Link } from "react-router-dom";
import { api } from "@configs/configs";
import styled from "styled-components";
import { useForm } from "react-hook-form";

export default function AuctionVerificationForm(props) {
  const user_id = localStorage.getItem("user_id");
  const [status, setStatus] = useState("notSubmitted");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    if (data) {
      setStatus("loading");
      const dataParams = {
        ...data,
        total_amount: 699, // the amount goes to SSL checkout page
        cus_name: `${data.cus_name}-${user_id}`,
        cus_city: "",
        cus_country: "Bangladesh",
        shipping_method: "NO",
        multi_card_name: "",
        num_of_item: 1,
        chassis_no: props.chassis_no,
        auction_key: props.data.key,
        product_name: `Auction Sheet(CM-${props.data.car_maker}, M-${props.data.car_model}, Y-${props.data.car_year}, C-${props.data.car_color})`,
        product_category: "Document",
        product_profile: "General",
      };
      await api
        .get(`/api/payment/make-payment/`, { params: dataParams })
        .then((res) => {
          if (res.status === 200) {
            setStatus("success");
            props.auctionModalHandler();
            window.location = res.data.GatewayPageURL;
          }
        })
        .catch((err) => {
          if (err.response.status === 406) {
            setStatus("fail");
          }
        });
    }
    reset();
  };
  return (
    <DivContainer>
      <AuctionContainer>
        <Price className="price">
          Payment Amount:{" "}
          <span>
            <del>800</del> 699 BDT  {/*the amount goes to SSL checkout page*/}
          </span>
        </Price>
        <img src={props.data.image} alt="" />
        <table width="250px">
          <tbody>
            <tr>
              <td width="40%">Model:</td>
              <td width="60%">
                <b>{props.data.car_model}</b>
              </td>
            </tr>
            <tr>
              <td width="40%">Year:</td>
              <td width="60%">
                <b>{props.data.car_year}</b>
              </td>
            </tr>
            <tr>
              <td width="40%">Color:</td>
              <td width="60%">
                <b>{props.data.car_color}</b>
              </td>
            </tr>
          </tbody>
        </table>
      </AuctionContainer>
      {/* {status === "notSubmitted" && ( */}
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            required
            id="outlined-size-small"
            variant="outlined"
            size="small"
            label="Name"
            {...register("cus_name", { required: true, maxLength: 80 })}
          />
          <Error>{errors.cus_name && <p>Name is required.</p>}</Error>

          <TextField
            required
            id="outlined-size-small"
            variant="outlined"
            size="small"
            label="Email"
            {...register("cus_email", {
              required: true,
              pattern: /^\S+@\S+$/i,
            })}
          />
          <Error>{errors.cus_email && <p>Invalid email pattern</p>}</Error>

          <TextField
            required
            id="outlined-size-small"
            variant="outlined"
            size="small"
            type="number"
            label="Mobile Number"
            {...register("cus_phone", {
              required: true,
              minLength: 11,
              maxLength: 11,
              pattern: /01/i,
            })}
          />
          <Error>{errors.cus_phone && <p>Invalid mobile number</p>}</Error>
          <TextField
            required
            id="outlined-size-small"
            variant="outlined"
            size="small"
            type="text"
            label="Address"
            {...register("cus_add1", { required: true, maxLength: 80 })}
          />
          <Error>{errors.cus_add1 && <p>Address id is required</p>}</Error>
          <TermsCheck>
            <input
              type="checkbox"
              placeholder="Terms"
              id="terms"
              {...register("terms", { required: true })}
            />
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
          </TermsCheck>
          <Error>
            {errors.terms && (
              <p>
                You must agree to the terms and conditions, privacy policy &
                refund policy
              </p>
            )}
          </Error>

          <Button type="submit">Purchase</Button>
        </form>
      </FormContainer>
      {/* )} */}
    </DivContainer>
  );
}

const DivContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 20px;
  @media (max-width: 767px) {
    flex-direction: column;
    padding: 10px;
  }
`;
const AuctionContainer = styled.div`
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0px;
  > img {
    width: 150px;
    height: 100px;
  }
  > .price span del {
    color: #ccc;
    font-weight: 400;
    font-size: 14px;
  }
  > div {
    > table {
      font-size: 16px;
    }
    > button {
      cursor: pointer;
      transition: all 0.3s ease-in-out;
    }
  }
`;
const Price = styled.div`
  margin-bottom: 10px;
  width: 300px;
  border: 2px solid #f06425;
  @media (max-width: 767px) {
    width: 230px;
  }
  > span {
    color: #f06425;
    font-weight: 700;
  }
`;
const FormContainer = styled.div`
  > form {
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-left: 50px;
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    input[type="number"] {
      -moz-appearance: textfield;
    }
    @media (max-width: 1023px) {
      width: 300px;
    }
    @media (max-width: 767px) {
      width: 90%;
      margin: 0px auto;
      margin-top: 30px;
    }
    > button {
      background-color: #f06425;
      color: #fff;
      border: 2px solid #f06425;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      &:hover {
        color: #f06425;
        font-weight: 700;
      }
    }
  }
`;
const TermsCheck = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  label {
    font-size: 13px;
    &.terms {
      margin-top: 12px;
    }
    a {
      text-decoration: underline;
      color: #f06425;
      transition: all 0.3s ease-in-out;
      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

const Error = styled.p`
  height: 10px;
  > p {
    font-size: 12px;
    color: red;
    font-weight: 700;
    line-height: 12px;
  }
`;
