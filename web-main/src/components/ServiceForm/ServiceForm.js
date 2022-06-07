import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, TextField } from "@material-ui/core";
import styled from "styled-components";
import { api } from "@configs/configs";

export default function ServiceForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  console.log(errors);
  const [status, setStatus] = useState("notSubmitted");
  const onSubmit = async (data) => {
    if (data) {
      setStatus("loading");
      await api
        .post(`api/services/create/`, {
          ...data,
          service_type: props.title,
        })
        .then((res) => {
          setStatus("loading");
          if (res.status === 201) {
            console.log(res);
            setStatus("success");
          }
        })
        .catch((err) => {
          // setStatus("fail");
        });
    }
    
    reset();
  };

  return (
    <ServiceFormContainer>
      <h3>{props.title}</h3>

      {status === "notSubmitted" && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            id="outlined-size-small"
            variant="outlined"
            size="small"
            type="text"
            label="Customer Name"
            {...register("customer_name", { required: true, maxLength: 80 })}
          />
          <Error>{errors.customer_name && <p>Name is required.</p>}</Error>

          <TextField
            id="outlined-size-small"
            variant="outlined"
            size="small"
            type="number"
            label="Customer Mobile"
            {...register("customer_mobile", {
              required: true,
              minLength: 11,
              maxLength: 11,
              pattern: /01/i,
            })}
          />
          <Error>
            {errors.customer_mobile &&
              errors.customer_mobile.type === "pattern" && (
                <p>Invalid mobile number</p>
              )}
            {errors.customer_mobile &&
              errors.customer_mobile.type === "required" && (
                <p>Mobile Number is required</p>
              )}
            {errors.customer_mobile &&
              errors.customer_mobile.type === "minLength" && (
                <p>Mobile Number should consist of 11 digits</p>
              )}
            {errors.customer_mobile &&
              errors.customer_mobile.type === "maxLength" && (
                <p>Mobile Number should consist of 11 digits</p>
              )}
          </Error>

          <TextField
            id="outlined-size-small"
            variant="outlined"
            size="small"
            type="text"
            label="Customer Email"
            {...register("customer_email", {
              required: true,
              pattern: /^\S+@\S+$/i,
            })}
          />
          <Error>
            {errors.customer_email &&
              errors.customer_email.type === "pattern" && (
                <p>Invalid patttern</p>
              )}
            {errors.customer_email &&
              errors.customer_email.type === "required" && (
                <p>Email required</p>
              )}
          </Error>

          <TextField
            id="outlined-size-small"
            variant="outlined"
            size="small"
            type="text"
            label="Customer Address"
            {...register("address", { required: false })}
          />
          <Error>{errors.address && <p>Address is required.</p>}</Error>

          <TextField
            id="outlined-size-small"
            variant="outlined"
            size="small"
            type="text"
            label="Make"
            {...register("car_make", { required: false })}
          />
          <Error>{errors.car_make && <p>Make is required.</p>}</Error>

          <TextField
            id="outlined-size-small"
            variant="outlined"
            size="small"
            type="text"
            label="Model"
            {...register("car_model", { required: false })}
          />
          <Error>{errors.car_model && <p>Model is required.</p>}</Error>

          <TextField
            id="outlined-size-small"
            variant="outlined"
            size="small"
            type="number"
            label="Model Year"
            {...register("car_year", { required: false })}
          />
          <Error>{errors.car_year && <p>Model is required.</p>}</Error>

          <Button type="submit">Purchase</Button>
        </form>
      )}
      <div>
        {status === "success" && (
          <b style={{ color: "green", fontSize: "16px" }}>
            Thank you! We will contact you soon!
          </b>
        )}
        {status === "loading" && (
          <b style={{ color: "#ebae34", fontSize: "16px" }}>
            Please wait for a moment...
          </b>
        )}
      </div>
    </ServiceFormContainer>
  );
}

const ServiceFormContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  > form {
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    input[type="number"] {
      -moz-appearance: textfield;
    }
    > div {
      width: 100%;
    }
    > button {
      width: 100%;
      background-color: #f06425;
      color: #fff;
      border: 2px solid #f06425;
      &:hover {
        color: #f06425;
        font-weight: 700;
      }
    }
    @media (max-width: 767px) {
      width: 300px;
      > div {
        width: 250px;
      }
      > button {
        width: 250px;
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
