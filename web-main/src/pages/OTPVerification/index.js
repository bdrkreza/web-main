import React, { useEffect, useState, Suspense } from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import BhalogariLogo from "../../assets/BG-logo.png";
import { api } from "@configs/configs";
// import Background from "../../assets/background.svg";
import { useHistory } from "react-router-dom";
import CountUp from "react-countup";
import Cryptr from "cryptr";
import CircularProgress from "@material-ui/core/CircularProgress";
import validator from "validator";
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
    justifyContent: "space-evenly",
    width: "300px",
    height: "620px",
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
    height: "35%",
    padding: "20px",
  },
  form: {
    height: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  resendCounter: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    textDecoration: "underline",
    color: "#f06424",
    marginBottom: "5px",
  },
  alert: {
    color: "red",
    fontWeight: "500",
    paddingBottom: "10px",
    fontSize: "12px",
  },
  otpVerifyText: {
    fontSize: "9px",
    // marginBottom: "10px",
    color: "red",
    letterSpacing: "0.5px",
  },
}));

const renderLoader = () => <p>Loading</p>;

const OtpVerification = () => {
  const classes = useStyles();
  const history = useHistory();
  const cryptr = new Cryptr(process.env.REACT_APP_SECRET_KEY);
  const [contact_number, setContact_number] = useState(localStorage.getItem("contact_number"));
  const [otp_number, setOtp_number] = useState("");
  const [user_mail1, setMail] = useState("");
  const [user_mail, setEmailError] = useState("");
  const [user_pass, setPass] = useState("");

  const [redirectToProfile, setRedirectToProfile] = useState(false);
  const [redirectToPassword, setRedirectToPassword] = useState(false);
  // const [ProfileUpdate, setRedirectToProfileUpdate] = useState(false);
  const [redirectToProfileView, setRedirectToProfileView] = useState(false);
  const [redirectToSelf, setRedirectToSelf] = useState(false);
  const [resendButton, setResendButton] = useState(false);
  const [otpNotMatched, setOtpNotMatched] = useState(false);
  const [otpTimeOut, setOtpTimeOut] = useState(false);
  const [PassError, setPassError] = useState("");
  const [status, setStatus] = useState("not submitted");
  const [forgetPass, setForgetPass] = useState("");
  let counter = 120;

  const handleChange = (e) => {
    e.preventDefault();
    setOtp_number(e.target.value);
    setOtpTimeOut(false);
    setOtpNotMatched(false);
  };
  const handleChangeMail = (e) => {
    e.preventDefault();
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setMail(e.target.value);
      setEmailError("");

      // console.log(email)
    } else {
      setEmailError("Enter valid Email!");
    }
    // setMail(e.target.value);
    // setOtpTimeOut(false);
    // setOtpNotMatched(false);
  };
  const handleChangePass = (e) => {
    e.preventDefault();
    const pass = e.target.value;
    // console.log(pass)
    if (pass.length >= 6) {
      setPass(e.target.value);
      setPassError("");

      // console.log(email)
    } else {
      setPassError("Password must be al least 6 characters long");
    }

    // if(pass.length < 6){
    //   setPassError("password must be 6 or more digit")
    //   setPass(e.target.value);
    // }
    // setOtpTimeOut(false);
    // setOtpNotMatched(false);
  };

  const forget_pass = localStorage.getItem("forget_pass");
  console.log("valueof ", forget_pass);
  // if(forget_pass==true){
  //   setForgetPass("forget");
  //   console.log("forget pass= ",forgetPass )
  // }

  const handleSubmit = async (e) => {
    setStatus("loading");
    e.preventDefault();
    await api
      .post("api/user/verify-otp/", {
        otp_number: otp_number,
        contact_number: contact_number,
        user_email: user_mail1,
        password: user_pass,
      })
      .then((res) => {
        // console.log(res)
        if (res.status === 200) {
          // console.log(res)
          setStatus("otp matched");
          const encryptedToken = cryptr.encrypt(res.data.token.access);
          localStorage.setItem("access_token", encryptedToken);
          localStorage.setItem("user_id", res.data.user_id);
          localStorage.setItem("logged", 1);
          history.push("/profile-edit");
          // if (res.data.user === "new user") setRedirectToProfile(true);
          // if (res.data.user === "new user") history.push("/password");
          // else if (res.data.user === "existing user") {
          //   // setRedirectToProfileView(true);
          //   localStorage.setItem("logged", 1);
          //   history.push("/profile-view");
          // }
        }
      })
      .catch((err) => {
        console.log(err);
        setTimeout(() => {
          setStatus("not loading");
          if (err.response.status === 406) {
            setOtpNotMatched(true);
          } else if (err.response.status === 408) {
            setOtpTimeOut(true);
          }
        }, 1000);
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
          setRedirectToSelf(true);
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
    if (redirectToPassword) history.push("/password");
    // else if (redirectToProfile) history.push("/profile-edit");
    else if (redirectToProfileView) history.push("/profile-edit");
    else if (redirectToSelf) return window.location.reload();
  }, [redirectToProfile, redirectToProfileView, redirectToSelf]);

  return (
    <div className={classes.loginContainer}>
      <Suspense fallback={renderLoader()}>
        <div className={classes.loginCard}>
          <img src={BhalogariLogo} className={classes.logo} alt="Bhalogari" />
          <p>{contact_number}</p>
          <p className={classes.otpVerifyText}>OTP sent to mobile device. Please enter OTP to confirm.</p>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
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
            />
            <br></br>
            {forget_pass !== "yes" ? (
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
            ) : (
              ""
            )}
            <span
              style={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              {user_mail}
            </span>
            <br></br>
            {forget_pass !== "yes" ? (
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
            ) : (
              <TextField
                required
                id="outlined-number"
                label="Reset Password"
                type="password"
                color="secondary"
                inputlabelprops={{
                  shrink: true,
                }}
                variant="outlined"
                className={classes.input}
                onChange={handleChangePass}
              />
            )}
            <br></br>
            <p className={classes.alert}>{PassError}</p>
            <br></br>

            <div className={classes.resendCounter}>
              <a
                style={{
                  cursor: "pointer",
                  visibility: resendButton ? "visible" : "hidden",
                }}
                onClick={resendOTP}
                name="resend"
                id="resend-otp"
                value="1"
              >
                Resend OTP
              </a>
              <CountUp start={120} end={0} duration={120} useEasing={false} suffix="s"></CountUp>
            </div>

            <button type="submit" className={classes.loginRegButton}>
              {status === "loading" && <CircularProgress color="#000" size={30} style={{ margin: "5px 0px" }} />}
              {status !== "loading" && <p>Verify OTP</p>}
            </button>
          </form>
          {otpNotMatched && <p className={classes.alert}>OTP not matched</p>}
          {otpTimeOut && <p className={classes.alert}>OTP expired</p>}
        </div>
      </Suspense>
    </div>
  );
};

export default OtpVerification;
