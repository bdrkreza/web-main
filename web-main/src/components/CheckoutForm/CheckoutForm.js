import React, { useEffect, useState } from "react";

import AddressForm from "@components/AddressForm/AddressForm";
import { api } from "@configs/configs";
import styled from "styled-components";
import { useForm } from "react-hook-form";

function CheckoutForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // console.log(props.formdata);

  const onSubmit = async (data) => {
    const user_id = localStorage.getItem("user_id");
    if (data) {
      await api
        .post(`api/services/create-address/`, {
          ...data,
          registered_id: parseInt(user_id, 10),
        })
        .then((res) => {
          if (res.status === 201) {
            props.setFormOpen(false);
            api.get("api/services/get-addresses/" + user_id).then((res) => {
              props.setFormdata(res.data.result);
            });
          }
        })
        .catch((err) => { });
    }
    reset();
  };

  return (
    <CheckDiv>
      {props.formOpen && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="First name"
            {...register("first_name", { required: true, maxLength: 80 })}
          />
          <input
            type="text"
            placeholder="Last name"
            {...register("last_name", { required: true, maxLength: 100 })}
          />
          <input
            type="tel"
            placeholder="Mobile number"
            {...register("mobile", {
              required: true,
              minLength: 6,
              maxLength: 12,
              pattern: /^(?:\+88|88)?(01[3-9]\d{8})$/,
            })}
          />

          <input
            type="text"
            placeholder="Email"
            {...register("email", {
              required: true,
              pattern: /^\S+@\S+$/i,
            })}
          />
          <div className="make-model-year">
            <input
              type="text"
              placeholder="Make"
              {...register("make", { required: true, maxLength: 80 })}
            />
            <input
              type="text"
              placeholder="Model"
              {...register("model", { required: true, maxLength: 80 })}
            />
            <input
              type="text"
              placeholder="Model Year"
              {...register("year", { required: true, maxLength: 80 })}
            />

          </div>
          <div className="address-button">
            <textarea
              placeholder="Address"
              {...register("address", { required: true })}
            />

            <div>
              <button type="submit">
                <p className="button">Save Address</p>
              </button>
            </div>
          </div>

        </form>
      )}
      {props.formdata && (
        <AddressForm
          formdata={props.formdata}
          selectAddress={props.selectAddress}
          setNewAddress={props.setNewAddress}
          click={props.click}
        />
      )}
    </CheckDiv>
  );
}

const CheckDiv = styled.div`
  form {
    height: 370px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 20px;
    text-align: left;
    font-size: 18px;
    color: #9d9d9d;
    font-weight: 400;
    padding: 9px;
    justify-content: space-between;
    .make-model-year {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: calc(50% - 10px);
      input {
        width: 100%;
      }
    }
    .address-button {
      width: calc(50% - 10px);
      textarea {
        width: 100%;
      }
    }
    input {
      padding-left: 10px;
      width: calc(50% - 10px);
      height: 53px;
      border-radius: 4px;
      background-color: #ffffff;
      border: 1px solid #c4c4c4;
    }
    textarea {
      resize: none;
      padding-left: 10px;
      width: calc(50% - 10px);
      height: 116px;
      border-radius: 4px;
      background-color: #ffffff;
      border: 1px solid #c4c4c4;
    }
    hr {
      width: 100%;
    }
    p {
      padding-right: 20px;
    }
    button {
      display: block;
      width: 100%;
      border-radius: 10px;
      background-color: #ff7c40;
      border: 3px solid #ff7c40;
      margin-top: 20px;
      .button {
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
        border: 3px solid #ffffff;
      }
    }
  }
  @media (max-width: 767px) {
    form {
      height: inherit;
      padding: 9px 0;
      margin-top: 15px;
      input {
        width: 100%;
        margin-top: 10px;
      }
      textarea {
        width: 100%;
      }
      button {
        display: block;
        width: 100%;
      }
      hr {
        margin-top: 0px;
      }
      .address-button {
        width: 100%;
        margin-top: 15px;
        input {
          margin-bottom: 15px;
        }
      }
      .make-model-year {
        width: 100%;
      }
    }
  }
`;

export default CheckoutForm;
