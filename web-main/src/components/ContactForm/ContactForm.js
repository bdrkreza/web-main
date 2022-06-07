import React from "react";
import styled from "styled-components";
import Title from "@components/SectionTitle/SectionTitle";
import { TextField, InputAdornment, Snackbar } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { api } from "@configs/configs";
// import Dropdown from "../Dropdown/Dropdown";
import MuiAlert from "@material-ui/lab/Alert";

function ContactForm(props) {
  const [snackMsg, setSnakMsg] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    if (data) {
      await api.post(`api/collections/contact/`, data);
    }
    setSnakMsg(`thank you ${data.name} for your enquiry`);
    reset();
    setOpen(true);
  };

  const [state] = React.useState({
    vertical: "top",
    horizontal: "center",
  });

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const { vertical, horizontal } = state;

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <ContactDiv>
      <Title
        title1={
          props.langVariables !== null
            ? props.langVariables["cu_always_here"]
              ? props.langVariables["cu_always_here"].lang_content
              : "Always Here"
            : "Always Here"
        }
        title2={
          props.langVariables !== null
            ? props.langVariables["cu_for_you"]
              ? props.langVariables["cu_for_you"].lang_content
              : "For You"
            : "For You"
        }
      />
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        onClose={handleClose}
        autoHideDuration={3000}
        open={open}
        message={snackMsg}
        key={vertical + horizontal}
      >
        <Alert onClose={handleClose} severity="success">
          {snackMsg}
        </Alert>
      </Snackbar>
      <div>
        <p>
          {props.langVariables !== null
            ? props.langVariables["cu_ask_us"]
              ? props.langVariables["cu_ask_us"].lang_content
              : "Ask us anything"
            : "Ask us anything"}
        </p>
      </div>
      <form className="form-field" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <TextField
            className="input-field"
            label={
              props.langVariables !== null
                ? props.langVariables["name"]
                  ? props.langVariables["name"].lang_content
                  : "Your Name"
                : "Your Name"
            }
            variant="outlined"
            placeholder=""
            rows={4}
            {...register("name", { required: true, maxLength: 80 })}
          />
          {errors.name && <p>Name is required.</p>}
        </div>

        <div className="form-group">
          <TextField
            className="input-field"
            label={
              props.langVariables !== null
                ? props.langVariables["email"]
                  ? props.langVariables["email"].lang_content
                  : "Your Email"
                : "Your Email"
            }
            variant="outlined"
            placeholder="example@gmail.com"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && <p>Email is required.</p>}
        </div>

        <div className="form-group">
          <TextField
            className="input-field"
            label={
              props.langVariables !== null
                ? props.langVariables["mobile"]
                  ? props.langVariables["mobile"].lang_content
                  : "Your Mobile Number"
                : "Your Mobile Number"
            }
            variant="outlined"
            placeholder=""
            rows={4}
            InputProps={{
              startAdornment: <InputAdornment position="start">+88</InputAdornment>,
            }}
            {...register("contact_number", {
              required: true,
              maxLength: 11,
              pattern: /^(?:\+88|88)?(01[3-9]\d{8})$/,
            })}
          />
          {errors.contact_number && <p>Mobile Number is not valid.</p>}
        </div>
        <div className="form-group">
          <TextField
            className="input-field"
            label={
              props.langVariables !== null
                ? props.langVariables["address"]
                  ? props.langVariables["address"].lang_content
                  : "Your Address"
                : "Your Address"
            }
            variant="outlined"
            placeholder=""
            {...register("area", { required: true })}
          />
          {errors.area && <p>Please put your area</p>}
        </div>
        <div className="form-group">
          <TextField
            className="input-field-message"
            label={
              props.langVariables !== null
                ? props.langVariables["message"]
                  ? props.langVariables["message"].lang_content
                  : "Enter Message"
                : "Enter Message"
            }
            variant="outlined"
            placeholder="Please share your feedback what can we improve?"
            multiline
            rows={4}
            {...register("message", { required: true })}
          />
          {errors.message && <p>Please write your message on the box</p>}
        </div>
        <Button type="submit">
          {props.langVariables !== null
            ? props.langVariables["submit"]
              ? props.langVariables["submit"].lang_content
              : "Submit"
            : "Submit"}
        </Button>
      </form>
    </ContactDiv>
  );
}

const ContactDiv = styled.div`
  padding-top: 0;
  padding-left: 40px;
  display: flex;
  flex-direction: column;
  .form-group {
    position: relative;
    margin-bottom: 40px;
    & > p {
      position: absolute;
      bottom: -20px;
      left: 15px;
      color: red;
    }
  }
  .success {
    font-size: 16px;
    color: #f06424;
  }
  @media (max-width: 1250px) {
    padding-left: 15px;
    padding-right: 15px;
  }
  @media (max-width: 767px) {
    padding-left: 25px;
    padding-right: 25px;
  }
  & form {
    max-width: 580px;
    @media (max-width: 767px) {
      width: 100%;
    }
  }
  & > p {
    font-size: 24px;
    line-height: 32px;
    color: #000000;
    font-weight: 700;
    padding-bottom: 8px;
  }
  & > div {
    & > p {
      font-size: 16px;
      color: #9e9e9e;
      font-weight: 400;
    }
  }
  & .form-field {
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    .input-field {
      width: 100%;
      padding-bottom: 0px;
    }
    .input-field-message {
      width: 100%;
      height: 120px;
    }
  }
`;

const Button = styled.button`
  margin-top: 4px;
  width: 260px;
  height: 46px;
  line-height: 48px;
  border-radius: 4px;
  background-color: #f06424;
  font-size: 16px;
  letter-spacing: 2px;
  color: #ffffff;
  font-weight: 700;
  text-transform: uppercase;

  @media (max-width: 425px) {
    ${"" /* margin-left: 25px; */}
  }
`;

export default ContactForm;
