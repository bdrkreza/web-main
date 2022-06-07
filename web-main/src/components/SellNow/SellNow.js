import React from "react";
// import { MdDirectionsBike } from "react-icons/md";
// import { FaCar } from "react-icons/fa";
import { Container, makeStyles } from "@material-ui/core";
import CarUpload from "@components/CarUpload/CarUpload";
import BikeUpload from "@components/BikeUpload";
// import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
// import RadioButtonUncheckedRoundedIcon from '@material-ui/icons/RadioButtonUncheckedRounded';
import SellCarFAQ from "../SellCarFAQ/SellCarFAQ";

// eslint-disable-next-line
const useStyles = makeStyles((theme) => ({
  carBuild: {
    marginTop: "180px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: "30px 0px",

    "@media(max-width: 1023px)": {
      marginTop: "100px",
    },
  },
  textDiv1: {
    paddingBottom: "0px",
    "& p": {
      "& span": {
        color: "red",
      },
    },
  },
  title: {
    fontSize: "20px",
    color: "#000000",
    fontWeight: 700,
    fontFamily: "Open Sans",
    paddingBottom: "20px",
    textTransform: "uppercase",
  },

  switchContainer: {
    margin: "10px 0 0 0",
    maxWidth: "430px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-evenly",
    fontSize: "16px",
    fontWeight: 600,
    borderRadius: "5px",
    border: "1px solid #e8e8e8",
    boxShadow: "0 2px 4px rgb(0 0 0 / 16%)",
    "& span": {
      minHeight: "40px",
      lineHeight: "40px",
      padding: "6px 30px",
      margin: "10px",
      display: "flex",
      alignItems: "center",
      border: "2px solid #f06425",
      borderRadius: "5px",
      "@media(max-width: 480px)": {
        lineHeight: "24px",
        textAlign: "center",
        padding: "6px 18px",
      }
    },
    "@media(max-width: 480px)": {
      lineHeight: "24px",
      textAlign: "center",
    }
  },

  sellActive: {
    border: "0px solid transparent !important",
    borderRadius: "5px",
    color: "#ffffff",
    // background: "-moz-linear-gradient(left,  #fc8a19 0%, #f06425 100%)",
    // background: "-webkit-linear-gradient(left,  #fc8a19 0%,#f06425 100%)", 
    background: "linear-gradient(to right,  #fc8a19 0%,#f06425 100%)",
    filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#fc8a19', endColorstr='#f06425',GradientType=1 )", 
  },
  whichCar: {
    fontSize: "20px",
    marginTop: "20px",
    fontWeight: 600,
    fontFamily: "Open Sans",

  },
 
}));

const SellNow = () => {
  const classes = useStyles();
  const [tab, setTab] = React.useState(false);

  const handleTab = (state) => {
    if (state === 1) setTab(true);
    else setTab(false);
  };

  return (
    <div>
      <Container maxWidth="lg">
        <div className={classes.carBuild}>
          <div className={classes.textDiv}>
            <div className={classes.textDiv1}>
              <h4 className={classes.title}>BUILD YOUR AD</h4>
              <p>
                You are currently creating a free ad. Items marked with{" "}
                <span>*</span> are required fields.
              </p>
            </div>
            <div className={classes.whichCar}>
              What you want to sell?
            </div>
            <div className={classes.switchContainer}>
              <span
                onClick={() => handleTab(2)}
                className={[!tab && classes.sellActive]}
              >
                Want to Sell Car
              </span>
              <span
                onClick={() => handleTab(1)}
                className={[tab && classes.sellActive]}
              >
                Want to Sell Bike
              </span>
            </div>
          </div>
        </div>
      </Container>
      {!tab && <CarUpload />}
      {tab && <BikeUpload />}
      <SellCarFAQ />
    </div>
  );
};

export default SellNow;
