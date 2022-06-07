import React, { useEffect, useState, Suspense } from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import BhalogariLogo from "../../assets/BG-logo.png";
import { api } from "@configs/configs";
import Cryptr from "cryptr";
import { useHistory } from "react-router-dom";
// import validator from "validator";
// import Background from "../../assets/background.svg";
// import CountUp from "react-countup";
// import CircularProgress from "@material-ui/core/CircularProgress";

// eslint-disable-next-line
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  loginContainer: {
    // background: `url(${Background})`,
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
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // justifyContent: "space-evenly",
    width: "300px",
    height: "420px",
    borderRadius: "10px",
    filter: "drop-shadow(0px 1px 3.5px rgba(0, 0, 0, 0.16))",
  },
  input: {
    width: "260px",
    borderRadius: "3px",
    backgroundColor: "#ffffff",
    fontSize: "16px",
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
    marginTop: "20px",
  },
  resendCounter: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    textDecoration: "underline",
    color: "#f06424",
  },
  alert: {
    color: "red",
    fontWeight: "700",
    paddingBottom: "10px",
  },
  otpVerifyText: {
    fontSize: "9px",
    marginBottom: "10px",
    color: "red",
    letterSpacing: "0.5px",
  },
}));

const renderLoader = () => <p>Loading</p>;

const OtpVerification = () => {
  const classes = useStyles();
  const history = useHistory();
  const cryptr = new Cryptr(process.env.REACT_APP_SECRET_KEY);
  // eslint-disable-next-line
  const [contact_number, setContact_number] = useState(localStorage.getItem("contact_number"));
  // eslint-disable-next-line
  const [otp_number, setOtp_number] = useState("");
  // eslint-disable-next-line
  const [user_mail1, setMail] = useState("");
  // eslint-disable-next-line
  const [user_mail, setEmailError] = useState("");
  const [user_pass, setPass] = useState("");

  // eslint-disable-next-line
  const [redirectToProfile, setRedirectToProfile] = useState(false);
  // eslint-disable-next-line
  const [redirectToPassword, setRedirectToPassword] = useState(false);
  const [redirectToProfileView, setRedirectToProfileView] = useState(false);
  // eslint-disable-next-line
  const [redirectToSelf, setRedirectToSelf] = useState(false);
  const [resendButton, setResendButton] = useState(false);
  const [otpNotMatched, setOtpNotMatched] = useState(false);
  const [otpTimeOut, setOtpTimeOut] = useState(false);
  const [status, setStatus] = useState("not submitted");
  const [otpVerification, setRedirectOTPVerification] = useState(false);
  let counter = 120;

  /** @deprecated unused */
  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setOtp_number(e.target.value);
  //   setOtpTimeOut(false);
  //   setOtpNotMatched(false);
  // };

  // const handleChangeMail = (e) => {
  //   e.preventDefault();
  //   console.log("dukse");
  //   var email = e.target.value;

  //   if (validator.isEmail(email)) {
  //     setMail(e.target.value);
  //     setEmailError("");

  //     // console.log(email)
  //   } else {
  //     setEmailError("Enter valid Email!");
  //   }
  //   // setMail(e.target.value);
  //   // setOtpTimeOut(false);
  //   // setOtpNotMatched(false);
  // };

  const handleChangePass = (e) => {
    e.preventDefault();
    setPass(e.target.value);
    // setOtpTimeOut(false);
    // setOtpNotMatched(false);
  };

  const handleSubmit = async (e) => {
    setStatus("loading");
    e.preventDefault();
    await api
      .post("api/user/verify-password/", {
        // otp_number: otp_number,
        contact_number: contact_number,
        user_email: user_mail1,
        password: user_pass,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          console.log(res);
          setStatus("password matched");
          const encryptedToken = cryptr.encrypt(res.data.token.access);
          localStorage.setItem("access_token", encryptedToken);
          localStorage.setItem("user_id", res.data.user_id);
          localStorage.setItem("update", 1);

          if (res.data.user === "existing user") {
            setRedirectToProfileView(true);
            localStorage.setItem("logged", 1);
            history.push("/profile-view");
          }
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 401) {
          console.log("password not matched");
          setOtpNotMatched(true);
        } else if (err.response.status === 406) {
          console.log("not acceptable");
          setOtpTimeOut(true);
        }
      });
  };

  const resendOTP = async (e) => {
    e.preventDefault();
    await api
      .post("api/user/resend-otp/", {
        contact_number: contact_number,
      })
      .then((res) => {
        if (res.status === 200) {
          // setRedirectToSelf(true);
          setRedirectOTPVerification(true);
          localStorage.setItem("forget_pass", "yes");
          history.push("/otp_verification");
        }
      });
  };

  useEffect(() => {
    setInterval(() => {
      if (counter == 0) {
        setResendButton(true);
        return;
      }
      counter = counter - 1;
    }, 1000);
  });

  useEffect(() => {
    if (redirectToProfileView) history.push("/profile-view");
    // else if(otpVerification) history.push("/otp_verification");
    else if (redirectToSelf) return window.location.reload();
  }, [redirectToProfile, redirectToProfileView, redirectToSelf]);

  return (
    <div className={classes.loginContainer}>
      <Suspense fallback={renderLoader()}>
        <div className={classes.loginCard}>
          <img src={BhalogariLogo} className={classes.logo} alt="Bhalogari" />
          <p>{contact_number}</p>
          {/* <p className={classes.otpVerifyText}>
          OTP sent to mobile device. Please enter OTP to confirm.
        </p> */}
          <form className={classes.form} onSubmit={handleSubmit}>
            {/* <TextField
            required
            id="outlined-number"
            label="Enter OTP to Confirm"
            type="number"
            color="secondary"
            inputlabelprops={{
              shrink: true,
            }}
            variant="outlined"
            className={classes.input}
            onChange={handleChange}
          /><br></br>
          <TextField
            required
            id="outlined-number"
            label="Please Enter Email"
            type="text"
            color="secondary"
            inputlabelprops={{
              shrink: true,
            }}
            variant="outlined"
            className={classes.input}
            onChange={handleChangeMail}
          />
          <span style={{
          fontWeight: 'bold',
          color: 'red',
          }}>{user_mail}</span>
          <br></br> */}
            <TextField
              required
              id="outlined-number"
              label="Please Enter Password"
              type="password"
              color="secondary"
              inputlabelprops={{
                shrink: true,
              }}
              variant="outlined"
              className={classes.input}
              onChange={handleChangePass}
            />
            {/*<br></br>*/}

            <a
              style={{
                cursor: "pointer",
                textDecoration: "underline",
                color: "red",
                // visibility: resendButton ? "visible" : "hidden",
              }}
              onClick={resendOTP}
              name="resend"
              id="resend-otp"
              value="1"
            >
              Forget Password?
            </a>

            {/* <CountUp
              start={120}
              end={0}
              duration={120}
              useEasing={false}
              suffix="s"
            ></CountUp> */}
            {/* </div> */}

            <button type="submit" className={classes.loginRegButton}>
              Verify
              {/* {status === "loading" && (
              <CircularProgress
                color="#000"
                size={30}
                style={{ margin: "5px 0px" }}
              />
            )} */}
              {/* {status !== "loading" && <p>Verify</p>} */}
            </button>
            <br></br>
          </form>

          {otpNotMatched && <p className={classes.alert}>password not mathced</p>}
          {otpTimeOut && <p className={classes.alert}>OTP expired</p>}
        </div>
      </Suspense>
    </div>
  );
};

export default OtpVerification;
