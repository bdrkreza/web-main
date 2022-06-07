import React, { useState, Suspense } from "react";
import { Helmet } from "react-helmet";
import { InputAdornment, TextField } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import { api } from "@configs/configs";
import BangladeshFlag from "../../assets/bangladesh.svg";
import BhalogariLogo from "../../assets/BG-logo.png";
import { Redirect } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

// eslint-disable-next-line
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  loginContainer: {
    // background: `url(https://bhalogari-static.s3.ap-southeast-1.amazonaws.com/sitestaticimg/assets/background.svg)`,
    backgroundColor: "#eafcfc",
    paddingTop: "235px",
    paddingBottom: "35px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "bottom",
  },
  loginCard: {
    backgroundColor: "white",
    // backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "300px",
    height: "400px",
    borderRadius: "10px",
    filter: "drop-shadow(0px 1px 3.5px rgba(0, 0, 0, 0.16))",
  },
  input: {
    width: "260px",
    borderRadius: "3px",
    backgroundColor: "#ffffff",

    color: "#707070",
    fontWeight: "600",
    fontFamily: "Open Sans",
    textAlign: "center",
    margin: "auto",
    "& input[type=number]": {
      fontSize: "18px",
      "-moz-appearance": "textfield",
    },
    "& input[type=number]::-webkit-outer-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
    "& input[type=number]::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
  },
  loginRegButton: {
    width: "265px",
    height: "50px",
    borderRadius: "3px",
    backgroundColor: "#f06424",
    fontSize: "14px",
    letterSpacing: "1px",
    color: "#ffffff",
    fontWeight: "600",
    boxShadow: "none",
    border: "1px solid #f06424",
    fontFamily: "Open Sans",
    margin: "auto",
    cursor: "pointer",
  },
  logo: {
    height: "50%",
    padding: "20px",
  },
  form: {
    height: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    "& .conditionText": {
      fontSize: "10px",
      padding: "0 20px",
      color: "#555555",
    },
  },
  alert: {
    color: "red",
    fontWeight: "700",
    paddingTop: "3px",
    paddingBottom: "3px",
    paddingLeft: "20px",
  },
  Example: {
    color: "#464646",
    fontSize: "11px",
    fontWeight: "400",
    paddingBottom: "10px",
    textAlign: "center",
  },
  flag: {
    height: "30px",
    width: "30px",
  },
}));

const renderLoader = () => <p>Loading</p>;

const LoginPage = (props) => {
  const classes = useStyles();
  const [contact_number, setContact_number] = useState("");
  const [redirect, setRedirect] = useState(false);

  const [redirectPass, setRedirectPass] = useState(false);

  const [wrongNumber, setWrongNumber] = useState(false);
  const [example, setExample] = useState(false);
  const [status, setStatus] = useState("not submitted");
  const [notacceptable, setNotacceptable] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    // const number = e.target.value;
    setContact_number(e.target.value);
    // setContact_number(number.slice(-11));
    setWrongNumber(false);
  };

  const handleClick = () => {
    setExample(true);
  };

  const handleSubmit = async (e) => {
    setStatus("loading");
    e.preventDefault();

    if (
      contact_number.toString().length == 11 ||
      contact_number.toString().length == 14 ||
      contact_number.toString().includes("@")
    ) {
      const contact_no = contact_number.slice(-11);
      let isnum = /^\d+$/.test(contact_no);

      if (isnum && contact_no.startsWith("01")) {
        setContact_number(contact_no);
        // console.log(contact_no)
      } else if (contact_number.toString().includes("@")) {
        setContact_number(contact_number);
        // console.log(contact_number)
      } else {
        setWrongNumber(true);
        setStatus("not loading");
        return;
      }

      await api
        .post("api/user/send-otp/", {
          contact_number: contact_number,
        })
        .then((res) => {
          console.log(res.status);
          if (res.status === 200) {
            // setStatus("otp-req");
            setRedirectPass(true);
          } else if (res.status === 201) {
            setStatus("otp-sent");
            setRedirect(true);
          } else if (res.status === 205) {
            setStatus("otp-sent");
            setRedirect(true);
          }
        })
        .catch((err) => {
          if (err.response.status === 406) {
            setNotacceptable("Enter contact number for signup");
            setStatus("not loading");
          }
        });
    } else {
      setWrongNumber(true);
    }
  };

  if (localStorage.getItem("access_token") !== null) {
    if (props.location.state) {
      if (props.location.state.from === "login") {
        return <Redirect to={{ pathname: "/profile-view" }} />;
      }
    }
  }

  if (redirect) {
    localStorage.setItem("contact_number", contact_number);
    localStorage.setItem("forget_pass", "no");
    return <Redirect to={{ pathname: "/otp_verification" }} />;
  } else if (redirectPass) {
    localStorage.setItem("contact_number", contact_number);
    return <Redirect to={{ pathname: "/password" }} />;
  }

  return (
    <div className={classes.loginContainer}>
      <Suspense fallback={renderLoader()}>
        <Helmet>
          <meta name="keywords" content="Sell Used Car" />
          <meta name="description" content="Sell used car at a good price" />
        </Helmet>
        <div className={classes.loginCard}>
          <img src={BhalogariLogo} className={classes.logo} alt="Sell Used Car" />
          <form className={classes.form} onSubmit={handleSubmit}>
            {/* <PhoneInput
            country={"us"}
            value={this.state.phone}
            onChange={(phone) => this.setState({ phone })}
          /> */}
            <TextField
              required
              id="outlined"
              label="Enter Your Mobile Number or Email"
              type="text"
              color="secondary"
              // defaultValue={+88}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img src={BangladeshFlag} className={classes.flag} alt="Email" />
                    <p style={{ fontSize: "18px", paddingLeft: "5px" }}></p>
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{
                shrink: true,
                style: { fontSize: "0.97rem" },
              }}
              variant="outlined"
              className={classes.input}
              onChange={handleChange}
              onClick={handleClick}
            />
            {notacceptable && <p className={classes.alert}>Enter contact number for signup</p>}
            {example && <p className={classes.Example}>e.g: +8801700702641 / someone@example.com</p>}
            <p className="conditionText">
              *Mobile is required for Registration and Mobile/Email for Login
              {/* *By tapping Login/Registration, an SMS will be sent. Message and
            data rates may apply. */}
            </p>
            {wrongNumber && <p className={classes.alert}>Invalid Contact Number or Email</p>}

            <button type="submit" className={classes.loginRegButton}>
              {status === "loading" && <CircularProgress color="#000" size={30} style={{ margin: "5px 0px" }} />}
              {status !== "loading" && <p>Login / Registration</p>}
            </button>

            {/* <div style={{'display': 'flex','alignItems': 'center', 'justifyContent': 'center', 'marginBottom': '10px'}}>
            <div class="fb-login-button" data-width="" data-size="large" data-button-type="continue_with" data-layout="default" data-auto-logout-link="true" data-use-continue-as="true">
            </div>

          </div> */}
            {/* <div class="g-signin2" data-onsuccess="onSignIn"></div>
          <a href="#" onclick="signOut();">Sign out</a> */}
          </form>
        </div>
      </Suspense>
    </div>
  );
};

export default LoginPage;
