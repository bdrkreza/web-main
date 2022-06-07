import React from "react";
import { makeStyles, Container, Button, Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { useForm } from "react-hook-form";
import { api } from "@configs/configs";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: "58px",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    backgroundColor: "#f8f8f8",
    position: "relative",
    "@media(max-width: 767px)": {
      marginTop: "10px",
    },
    "&:before": {
      position: "absolute",
      content: '" "',
      top: "0",
      right: "0",
      width: "48%",
      height: "100%",
      backgroundColor: "#707070",
      "@media(max-width: 767px)": {
        width: "100%",
      },
    },
    "&:after": {
      position: "absolute",
      content: '" "',
      bottom: "0",
      right: "48%",
      height: "100%",
      borderBottom: "166px solid #707070",
      borderLeft: "166px solid transparent",
      "@media(max-width: 767px)": {
        display: "none",
      },
    },
  },
  email: {
    position: "relative",
    width: "45%",
    "@media(max-width: 767px)": {
      width: "100%",
      maxWidth: "320px",
      marginTop: "25px",
    },
    "& .required": {
      position: "absolute",
      bottom: "-24px",
      left: "4%",
      zIndex: "9",
      visibility: "visible",
    },
    "& .success": {
      position: "absolute",
      bottom: "-24px",
      left: "4%",
      zIndex: "9",
      visibility: "visible",
      color: "#fdb69b",
    },
  },
  date: {
    fontFamily: "Open Sans",
    fontWeight: "700",
    fontSize: "22px",
    lineHeight: "30px",
    color: "#000000",
    margintLeft: "50px",
    padding: "2rem",
    marginLeft: "18rem",
  },
  newsletter: {
    maxWidth: "1100px",
    margin: "auto",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    paddingTop: "58px",
    paddingBottom: "58px",
    "& p": {
      fontSize: "22px",
      fontWeight: "700",
      maxWidth: "240px",
      "@media(max-width: 767px)": {
        color: "#fff",
      },
    },
    "@media(max-width: 767px)": {
      flexDirection: "column",
      paddingTop: "25px",
      paddingBottom: "25px",
    },
  },
  subscribe: {
    width: "100%",
    maxWidth: "415px",
    height: "44px",
    border: "0px solid",
    backgroundColor: "#ffffff",
    paddingLeft: "20px",
    outline: "none",
    borderRadius: "22px 0 0 22px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      borderRadius: "22px",
      maxWidth: "inherit",
    },
  },
  btn: {
    position: "absolute",
    right: "0",
    top: "0",
    textAlign: "center",
    fontSize: "12px",
    height: "44px",
    width: "112px",
    borderRadius: "24px",
    border: "2px solid #fff",
    backgroundColor: "#f06424",
    color: "#ffffff",
    fontWeight: "600",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#f06424",
      border: "2px solid #f06424",
    },
  },
}));

function BhaloUpdate() {
  const classes = useStyles();
  const [snackMsg, setSnakMsg] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onChange" });

  const onSubmit = async (data) => {
    if (data) {
      await api.post(`api/collections/newsletter/`, data);
    }
    setSnakMsg("Thank you for subscribe our newsletter");
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
    <div className={classes.root}>
      <Container maxWidth="lg">
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
        <div className={classes.newsletter}>
          <div>
            <p>Get Latest Updates & Offers from Bhalogari</p>
          </div>

          <div className={classes.email}>
            <form className="form-field" onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="Please enter your email..."
                className={classes.subscribe}
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              {errors.email && (
                <span className="required">Email is required.</span>
              )}
              <Button
                type="submit"
                className={classes.btn}
                startIcon={<MailOutlineIcon color="primary" _color="white" fontSize="large" />}
              >
                SUBMIT
              </Button>
              <div></div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default BhaloUpdate;
