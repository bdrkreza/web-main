import React, { useState } from "react";
import styled from "styled-components";
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Container,
  Fade,
  FormControlLabel,
  Grid,
  MenuItem,
  Select,
  Snackbar,
  Typography,
  makeStyles,
} from "@material-ui/core";
import Joi from "joi-browser";
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import MuiAlert from "@material-ui/lab/Alert";
import MultiImageUpload from "@components/MultipleImageUpload/MultiImageUpload";
import RenderInput from "@components/common/Input";
import SimpleSelect from "@components/Dropdown/CaruploadDropdown";
import UploadBanner from "@assets/banner/banner4.jpeg";
import _ from "lodash";
import { api } from "@configs/configs";
import { useHistory, useParams } from "react-router-dom";

const UpdateDiv = styled.div`
  margin-top: 190px;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    "&.MuiButton-root": {
      width: "150px",
      height: "42px",
      borderRadius: "9px",
      backgroundColor: "#f06424",
      color: "#fff",
    },
  },
  outerContainer: {
    backgroundImage: `url(${UploadBanner})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "400px",
    display: "none",
    [theme.breakpoints.down("xs")]: {
      height: "200px",
    },
  },
  margin: {
    margin: theme.spacing(1),
  },
  addCar: {
    height: "inherit",
    position: "relative",
    color: "red",
  },
  addCarText: {
    position: "absolute",
    left: "24px",
    bottom: "60px",
    fontSize: "30px",
    color: "#ffffff",
    fontWeight: "px",
    fontFamily: "Open Sans",
  },
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
  textTitle: {
    fontSize: "14px",
    color: "#fff",
    fontWeight: 400,
    fontFamily: "Open Sans",
    lineHeight: "27px",
    paddingLeft: "20px",
    height: "27px",
    background: `linear-gradient(180deg, #000000 -150%, #646464  100%)`,
  },
  imageUploadContainer: {
    backgroundColor: "#eee",
    padding: "10px 5px 20px",
    borderRadius: "5px",
  },

  paper: {
    padding: "16px 0 16px 24px",
    width: "100%",
    margin: "0px auto",
    fontSize: "20px",
    color: "#000000",
    fontWeight: 700,
    fontFamily: "Open Sans",
    textTransform: "uppercase",
  },
  paperTitle: {
    padding: "16px 0",
    width: "100%",
    margin: "0px auto",
    fontSize: "20px",
    color: "#000000",
    fontWeight: 700,
    fontFamily: "Open Sans",
    textTransform: "uppercase",
  },
  imageDiv: {
    width: "95%",
    margin: "0px auto",
    height: "90%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    borderRadius: "5px",
    backgroundColor: "#f6f6f6",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      // height: "260px",
    },
  },

  imageBox: {
    top: "15px",
    left: "15px",
    width: "calc(100% - 30px)",
    border: "1px dashed #707070",
    height: "calc(100% - 30px)",
    overflow: "hidden",
    position: "absolute",
    borderRadius: "5px",
  },

  imageBoxContent: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  imageBoxContentText: {
    fontSize: "16px",
    color: "#000000",
    fontWeight: 600,
    fontFamily: "Open Sans",
    margin: "20px 0px 30px 0px",
    textAlign: "center",
  },

  dropdown: {
    width: "calc(100% - 25px)",
    "& .MuiSelect-select": {
      backgroundColor: "#fff",
      paddingLeft: "10px",
      fontSize: "14px",
    },
    "&:hover": {
      color: "#f06424",
    },

    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },

  carBodyDropdown: {
    width: "100%",
    height: "40px",
    borderRadius: "3px",
    border: "1px solid #ccc",
    padding: "4px",

    "&:hover": {
      color: "#f06424",
    },
  },

  optionTitle: {
    fontSize: "14px",
    color: "#000000",
    fontWeight: 700,
    fontFamily: "Open Sans",
    paddingBottom: "3px",
  },

  option: {
    marginBottom: "15px",
    paddingRight: "0px",
    "& .MuiFormHelperText-root": {
      margin: "0",
      position: "absolute",
      bottom: "-20px",
      fontSize: "11px",
      lineHeight: "12px",
    },
    [theme.breakpoints.down("sm")]: {
      flex: "1 1 48%",
      maxWidth: "48%",
    },
    [theme.breakpoints.down("xs")]: {
      flex: "1 1 98%",
      maxWidth: "98%",
    },
    "&.inputBoxInner": {
      display: "flex",
      flexDirection: "column",
      width: "calc(100% - 25px)",
    },
  },
  newText: {
    width: "100%",
  },

  smallImageBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: "10px",
    marginLeft: "21px",
    marginRight: "21px",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "10px",
      marginRight: "10px",
    },
  },

  smallImageBoxChild: {
    width: "120px",
    height: "auto",
    textAlign: "center",
    backgroundColor: "#f6f6f6",
    padding: "2px",
    margin: "0 5px",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      width: "17%",
      margin: "0",
    },
  },
  imageCancelIcon: {
    position: "absolute",
    top: "-8px",
    right: "-7px",
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    backgroundColor: "#ED5B36",
    color: "#ffffff",
    textAlign: "center",
    zIndex: "9",
  },
  cancel: {
    position: "relative",
  },
  cancelIcon: {
    position: "absolute",
    top: "-150%",
    right: "-200%",
  },
  smallImageBoxChildDiv: {
    width: "80px",
    height: "auto",
    padding: "5px",
    [theme.breakpoints.down("xs")]: {
      width: "45px",
    },
  },
  //image preview
  previewImageDiv: {
    position: "relative",
    height: "100%",
  },

  previewImage: {
    width: "100%",
    objectFit: "cover",
    height: "375px",
    [theme.breakpoints.down("sm")]: {
      height: "260px",
    },
  },
  previewImageIcon: {
    width: "100px",
    height: "100px",
    padding: "6px",
    position: "absolute",
    top: "50%",
    left: "50%",
    background: "#ffffff",
    border: "2px solid #fff",
    borderRadius: "50%",
    transform: "translate(-50%,-50%)",
    cursor: "pointer",
    "&:hover": {
      background: "#f06425",
    },
    [theme.breakpoints.down("sm")]: {
      width: "120px",
      height: "120px",
    },
  },

  // -------------------Car Details---------------------------------//
  carDetailsContainer: {
    margin: "30px 0px",
    boxShadow: "0px 1px 5px 2px rgb(0 0 0 / 16%)",
    backgroundColor: "#ffffff",
    borderRadius: "5px",
  },
  carDetailsHeading: {
    padding: "40px 0px 0px 24px",
    fontSize: "20px",
    color: "#000000",
    fontWeight: 700,
    fontFamily: "Open Sans",
    [theme.breakpoints.down("xs")]: {
      padding: "40px 0px 0px 10px",
    },
  },
  carDetails: {
    padding: "10px 25px",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      padding: "30px 4px 30px 4px",
    },
  },
  carDetailsRow: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: "60px",
    marginBottom: "10px",
    padding: "0 0 0 15px",
    flex: "1 1 33%",
    maxWidth: "320px",
    "& .MuiFormControl-root": {
      width: "100%",
      "& .MuiSelect-select": {
        paddingRight: "0",
        fontSize: "14px",
      },
    },
    [theme.breakpoints.down("sm")]: {
      flex: "1 1 40%",
    },
    [theme.breakpoints.down("xs")]: {
      flex: "1 1 100%",
      maxWidth: "inherit",
      padding: "0",
    },
  },

  carDetailsRowNewIssue: {
    width: "calc(33% - 10px)",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: "28px",
    "& .MuiFormHelperText-root": {
      margin: "0",
      position: "absolute",
      top: "40px",
      lineHeight: "12px",
    },
    "& > .MuiFormControl-root": {
      width: "100%",
      "& .MuiSelect-select": {
        paddingRight: "0",
        paddingLeft: "8px",
        fontSize: "14px",
      },
    },
    [theme.breakpoints.down("sm")]: {
      width: "calc(50% - 10px)",
    },
    [theme.breakpoints.down("xs")]: {
      width: "calc(100% - 20px)",
      marginLeft: "10px",
    },
  },
  carDetailIconDivNew: {
    width: "30%",
    minWidth: "165px",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
      minWidth: "125px",
    },
  },

  carDetailIcon: {
    marginRight: "20px",
    width: "16px",
    "& img": {
      width: "15px",
    },
  },

  carDetailIconDiv: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    "& .MuiCheckbox-colorSecondary.Mui-checked": {
      color: "#f06425",
    },
  },
  carFeatureIconDiv: {
    "& .MuiCheckbox-colorSecondary.Mui-checked": {
      color: "#f06425",
    },
  },

  // --------------------------Car Details End------------------------------//
  // --------------------------Car Features Start--------------------------//
  carFeatureContainer: {
    backgroundColor: "#efefef",
    padding: "30px 15px",
    borderRadius: "5px",
  },
  carFeaturesHeading: {
    padding: "12px 0px 0px 0",
    fontSize: "20px",
    color: "#000000",
    fontWeight: 700,
    fontFamily: "Open Sans",
    marginBottom: "10px",
  },
  carFeaturesSubHeading: {
    padding: "25px 0px 20px 10px",
    fontSize: "14px",
    color: "#646464",
    fontWeight: 400,
    fontFamily: "Open Sans",
  },
  carFeaturesMain: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    "& > div": {
      flex: "1 1 33%",
      [theme.breakpoints.down("sm")]: {
        flex: "1 1 50%",
      },
      [theme.breakpoints.down("xs")]: {
        flex: "1 1 100%",
      },
    },
  },

  // ------------------------ Car Features End ----------------------------//
  // ------------------------ Car Price Start -----------------------------//
  carPriceContainer: {
    padding: "30px 20px",
    background: "#efefef",
    margin: "50px 0",
    borderRadius: "5px",
  },
  carPriceInput: {
    position: "relative",
    width: "96%",
    height: "110px",
    backgroundColor: "#555555",
    [theme.breakpoints.down("xs")]: {
      height: "120px",
    },
  },
  carPriceFormControl: {
    width: "70%",
    position: "absolute",
    top: "22%",
    left: "20%",
  },
  carPriceText: {
    padding: "0px 0px 15px 0",
  },
  priceInput: {
    width: "100%",
    height: "42px",
    backgroundColor: "#ffffff",
    borderRadius: "0",
    paddingLeft: "10px",
  },
  priceInputField: {
    width: "100%",
    height: "42px",
    backgroundColor: "#ffffff",
    borderRadius: "0",
    paddingLeft: "10px",
    border: "1px solid #f06424",
  },
  priceInputLabel: {
    fontSize: "15px",
    color: "#505050",
    fontWeight: 600,
    fontFamily: "Open Sans",
    display: "inline-block",
    paddingBottom: "10px",
  },
  newInputItem: {
    opacity: "1",
    background: "#fff",
    "&.inputItemInner > div": {
      borderRadius: "0",
      "& .MuiOutlinedInput-inputMarginDense": {
        padding: "6.5px 10px",
        textTransform: "uppercase",
        border: "1px solid #f06424",
        "&::placeholder": {
          textTransform: "capitalize !important",
        },
      },
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "transparent",
      },
    },
    "&.gradeClass": {
      "& .MuiOutlinedInput-inputMarginDense": {
        textTransform: "inherit !important",
      },
    },
    "& input::placeholder": {
      fontSize: "14px",
      opacity: "1",
    },
  },
  // -------------------------- Car Price End ---------------------------------------//
  //--------------------------- Car Video Link Start -------------------------------//
  carVideoLinkContainer: {
    backgroundColor: "#f6f6f6",
    padding: "30px 10px",
  },
  videoLinkHeading: {
    marginBottom: "27px",
  },
  linkInput: {
    width: "100%",
    height: "62px",
    paddingLeft: "10px",
    boxSizing: "border-box",
    borderWidth: "0px",
  },
  linkInputDiv: {
    position: "relative",
  },
  linkInputDivRight: {
    position: "relative",
    marginBottom: "10px",
    "& .ck-content": {
      minHeight: "62px",
      maxHeight: "62px",
      border: "0px solid",
      paddingLeft: "10px",
      "& .ck-placeholder": {
        fontSize: "11px",
        padding: "13px",
      },
    },
    "& .ck-toolbar": {
      display: "none",
    },
  },
  linkInputIcon: {
    position: "absolute",
    top: "50%",
    right: "10px",
    transform: "translateY(-11px)",
    cursor: "pointer",
    "&:hover": {
      transition: ".2s ease-in-out",
    },
  },
  ckEditorDiv: {
    marginTop: "-15px",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "15px",
  },
  ckEditorAddIcon: {
    fontSize: "14px",
    color: "#ffffff",
    background: "#000000",
    fontWeight: 800,
    fontFamily: "Open Sans",
  },

  ckEditorText: {
    fontSize: "14px",
    color: "#646464",
    fontWeight: 600,
    fontFamily: "Open Sans",
    height: "100px",
  },
  askingPriceNewInner: {
    display: "flex",
    alignItems: "start",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  equalWidth: {
    margin: "7px 0",
    width: "calc(33% - 10px)",
    position: "relative",
    "@media(max-width:767px)": {
      width: "100%",
    },
  },

  // ------------------------ Car Button Start-----------------------------------//
  buttonContainer: {
    width: "calc(33% - 10px)",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    padding: "2px 0px 0",
    marginTop: "32px",
    "@media(max-width:767px)": {
      width: "100%",
    },
  },
  buttonLoader: {
    position: "absolute",
    left: "50%",
    top: "20%",
  },
  button: {
    borderRadius: "3px",
    backgroundColor: "#f06424",
    width: "100%",
    padding: "15px",
    fontSize: "16px",
    fontWeight: "500",
    marginTop: "0px",
    color: "#fff",
    border: "2px solid #f06424",
    "&:hover": {
      backgroundColor: "#f06424",
      border: "2px solid #fff",
    },
  },
  uploadOptions: {
    paddingLeft: "15px",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: " row",
      flexWrap: "wrap",
      marginTop: "25px",
      justifyContent: "space-between",
    },
  },
  loader: {
    position: "absolute",
    top: "32%",
    left: "0",
    display: "flex",
    justifyContent: "center",
  },
  carVideoLinkInner: {
    paddingRight: "20px",
  },
  addScroll: {
    overflowX: "scroll",
  },
  snackMsg: {
    paddingLeft: "30px",
    paddingTop: "10px",
    color: "red",
    fontSize: "12px",
  },
}));

const Placeholder = ({ children }) => {
  return <div>{children}</div>;
};

const CarUpdate = () => {
  const history = useHistory();
  const classes = useStyles();
  const [flag, setFlag] = React.useState(false);
  const [redirect, setRedirect] = React.useState(false);
  let inputImage = React.useRef();
  const [images, setImages] = React.useState([]);
  const [video, setVideo] = React.useState(1);
  const [carFeatures, setCarFeatures] = React.useState([]);

  // ---------Choose Car Model Start--------------///
  const [carType, setcarType] = React.useState([]);
  const [carMakers, setCarMakers] = React.useState([]);
  const [carModels, setCarModels] = React.useState([]);
  const [carLocations, setCarLocations] = React.useState([]);
  const [years, setYears] = React.useState([]);
  const [type, setType] = React.useState("");
  const [regYear, setRegYear] = React.useState("");
  const [maker, setMaker] = React.useState("");
  const [model, setModel] = React.useState("");
  const [carGrade, setCarGrade] = React.useState("");
  const [year, setYear] = React.useState("");
  const [answer, setAnswer] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [carEngineNumber, setCarEngineNumber] = React.useState("");
  const [carChasisNumber, setCarChasisNumber] = React.useState("");
  const [carRegistrationNumber, setCarRegistrationNumber] = React.useState("");
  const [imgScroll, setImgScroll] = React.useState(6);

  // --------Choose Car Modle End -------------//

  // -------- Car Details Start ---------------//

  const [carDetailBody, setCarDetailBody] = React.useState([]);
  const [carDetailFuelType, setCarDetailFuelType] = React.useState([]);
  const [seat, setSeat] = React.useState();
  const [carMileage, setCarMileage] = React.useState("");
  const [carDetailFuelEconomy, setCarDetailFuelEconomy] = React.useState([]);
  const [carDetailInteriorColor, setCarDetailInteriorColor] = React.useState([]);
  const [carDetailExteriorColor, setCarDetailExteriorColor] = React.useState([]);
  const [carBody, setCarBody] = React.useState("");
  const [carEngine, setCarEngine] = React.useState();
  const [carFuelType, setCarFuelType] = React.useState("");
  const [carInteriorColor, setCarInteriorColor] = React.useState("");
  const [carExteriorColor, setCarExteriorColor] = React.useState("");
  const [carLocation, setCarLocation] = React.useState("");
  const [carStatus, setCarStatus] = React.useState("");
  const [carTransmission, setCarTransmission] = React.useState([
    { id: "A", title: "Automatic" },
    { id: "M", title: "Manual" },
  ]);

  const [carCallForPrice, setCarCallForPrice] = React.useState([
    { id: "no", title: "No" },
    { id: "yes", title: "Yes" },
  ]);

  const [carStatusList, setCarStatusList] = React.useState([
    { id: "out_of_stock", title: "Out of Stock" },
    { id: "active", title: "Active" },
    { id: "sold", title: "Sold" },
  ]);

  const [driveList] = React.useState([
    { id: 1, option: "Front Wheel Drive (FWD)" },
    { id: 2, option: "Rear Wheel Drive (RWD)" },
    { id: 3, option: "All Wheel Drive (AWD)" },
    { id: 4, option: "4-Wheel Drive (4WD)" },
  ]);
  const [drive, setDrive] = React.useState("");
  const [transmission, setTransmission] = React.useState("");

  // ---------Car Details End ----------------//

  const [askingPrice, setAskingPrice] = React.useState({
    price: undefined,
    sale_price: undefined,
    custom_price: "no",
  });

  const [oldAskingPrice, setOldAskingPrice] = React.useState({
    price: undefined,
    sale_price: undefined,
  });

  const [videoLink, setVideoLink] = React.useState({
    video1: "",
    video2: "",
  });

  const videoName = ["video1", "video2"];

  const [modelOptions] = React.useState([
    {
      title: "Condition*",
      selectText: "Select Condition",
    },
    {
      title: "Maker*",
      selectText: "Select Maker",
    },
    {
      title: "Model*",
      selectText: "Select Model",
    },
    {
      title: "Car Grade/Package",
      selectText: "Car Grade",
    },
    {
      title: "Model Year",
      selectText: "Select Year",
    },
    {
      title: "Engine Number",
      selectText: "Engine Number",
    },
    {
      title: "Chassis Number*",
      selectText: "Chassis Number",
    },
    {
      title: "Registration Year",
      selectText: "Select Registration Year",
    },
    {
      title: "Registration Number",
      selectText: "Registration Number",
    },
  ]);

  const queryParams = new URLSearchParams(window.location.search);
  const carId = queryParams.get("car_id");

  const [isRegYear, setIsRegYear] = React.useState(false);
  const [isUsed, setIsUsed] = React.useState(false);
  const handleType = (e) => {
    if (type !== "") {
      setMaker("");
      setModel("");
      setYear("");
    }
    const value = e.target.value;
    if (e.target.name === "car_type" && value === 2) {
      setIsRegYear(true);
      setIsUsed(true);
    } else if (e.target.name === "car_type" && (value === 1 || value === 3)) {
      setIsRegYear(false);
      setIsUsed(false);
    }
    propertyValidationHelper("type", value);
    setType(value);
  };

  const [state] = React.useState({
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal } = state;

  // TODO Suspect unused
  // const handleChange = (e) => {
  //     const value = e.target.value;
  //     propertyValidationHelper("carTitle", value);
  //     setCarTitle(value);
  // };

  const handleMaker = (e) => {
    const value = e.target.value;
    propertyValidationHelper("maker", value);
    setMaker(value);
  };

  const handleDriveDropdown = (event) => {
    setDrive(event.target.value);
  };

  const handleModel = (e) => {
    const value = e.target.value;
    propertyValidationHelper("model", value);
    setModel(value);
  };

  const handleCarGrade = (e) => {
    setCarGrade(e.target.value);
  };

  const handleYear = (e) => {
    setYear(e.target.value);
  };

  //----------------------------- validation start ------------------------------------//

  const [inputErrors, setError] = React.useState({});

  const schema = isUsed
    ? {
        carChasisNumber: Joi.string()
          .max(20)
          .regex(/^[a-zA-Z-0-9]+$/)
          .label("Chassis"),
        carEngineNumber: Joi.string()
          .max(20)
          .regex(/^[a-zA-Z-0-9]+$/)
          .allow("")
          .label("Engine No"),
        carRegistrationNumber: Joi.string()
          .max(20)
          .regex(/^[a-zA-Z-0-9]+$/)
          .allow("")
          .label("Registration No"),
        type: Joi.number().required().label("Type"),
        maker: Joi.number().required().label("Maker"),
        model: Joi.number().required().label("Model"),
        price: Joi.number().positive().integer().min(100000).max(500000000).required().label("Price"),
        carMileage: Joi.number().min(-1).max(999999).allow("").label("Mileage"),
        seat: Joi.number().positive().integer().min(1).max(45).allow("").label("Seat"),
        carEngine: Joi.number().precision(2).min(660).max(9999).allow("").label("Engine Capacity"),
        carBody: Joi.number().required().label("Body Type"),
        carFuelType: Joi.number().required().label("Fuel Type"),
        registration_year: isRegYear
          ? Joi.required().label("Registration Year")
          : Joi.allow().label("Registration Year"),
        sale_price: Joi.number().positive().integer().min(100000).max(500000000).required().label("Sale Price"),
      }
    : {
        carChasisNumber: Joi.string()
          .max(20)
          .regex(/^[a-zA-Z-0-9]+$/)
          .required()
          .label("Chassis"),
        carEngineNumber: Joi.string()
          .max(20)
          .regex(/^[a-zA-Z-0-9]+$/)
          .allow("")
          .label("Engine No"),
        carRegistrationNumber: Joi.string()
          .max(20)
          .regex(/^[a-zA-Z-0-9]+$/)
          .allow("")
          .label("Registration No"),
        type: Joi.number().required().label("Type"),
        maker: Joi.number().required().label("Maker"),
        model: Joi.number().required().label("Model"),
        price: Joi.number().positive().integer().min(100000).max(500000000).required().label("Price"),
        carMileage: Joi.number().min(-1).max(999999).allow("").label("Mileage"),
        seat: Joi.number().positive().integer().min(1).max(45).allow("").label("Seat"),
        carEngine: Joi.number().precision(2).min(660).max(9999).allow("").label("Engine Capacity"),
        carBody: Joi.number().required().label("Body Type"),
        carFuelType: Joi.number().required().label("Fuel Type"),
        registration_year: isRegYear
          ? Joi.required().label("Registration Year")
          : Joi.allow().label("Registration Year"),
        sale_price: Joi.number().positive().integer().min(100000).max(500000000).required().label("Sale Price"),
      };

  const propertyValidationHelper = (name, value) => {
    const errors = { ...inputErrors };
    const errorMessage = propertyValidate(name, value);
    if (errorMessage) errors[name] = errorMessage;
    else delete errors[name];
    setError(errors);
  };

  const propertyValidate = (name, value) => {
    const obj = { [name]: value };
    const singleSchema = { [name]: schema[name] };
    const { error } = Joi.validate(obj, singleSchema);

    return error ? error.details[0].message : null;
  };

  // ------------------------------ Asking Price limit validation ------------------------------//

  React.useEffect(() => {
    if (parseInt(askingPrice.price) > 0 && parseInt(askingPrice.sale_price) > parseInt(askingPrice.price)) {
      setError({
        ...inputErrors,
        sale_price: "Sale Price must be less than asking price!",
      });
    } else if (parseInt(askingPrice.price) < parseInt(askingPrice.sale_price)) {
      if (Object.keys(inputErrors).includes("sale_price")) {
        delete inputErrors["sale_price"];
      }
    } else if (parseInt(askingPrice.price) > parseInt(askingPrice.sale_price)) {
      if (Object.keys(inputErrors).includes("sale_price")) {
        delete inputErrors["sale_price"];
      }
    }
  }, [askingPrice.sale_price, askingPrice.price]);

  // ----------------------------- Asking Price limit validation ------------------------------//

  const validate = () => {
    const inputs = isUsed
      ? {
          // carEngineNumber: carEngineNumber,
          // carChasisNumber: carChasisNumber,
          type: type,
          maker: maker,
          model: model,
          price: askingPrice.price,
          carFuelType: carFuelType,
          carBody: carBody,
          sale_price: askingPrice.sale_price,
          registration_year: regYear,
          carEngine: carEngine,
        }
      : {
          // carEngineNumber: carEngineNumber,
          carChasisNumber: carChasisNumber,
          type: type,
          maker: maker,
          model: model,
          price: askingPrice.price,
          carFuelType: carFuelType,
          carBody: carBody,
          sale_price: askingPrice.sale_price,
          registration_year: regYear,
          carEngine: carEngine,
        };

    const { error } = Joi.validate(inputs, schema, { abortEarly: false });
    if (!error) return null;

    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = `${item.context.label} is required!`;
    }

    return Object.keys(errors).length === 0 ? {} : errors;
  };

  // ---------------------------------- Validation Ends here -----------------------------//

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validate();
    setError(errors || {});
    if (errors) {
      setSnackMsg("Please fill out the mandatory fields before submitting your listing!");
      setOpen(true);
      return;
    }

    const user_id = parseInt(localStorage.getItem("user_id"));

    let carObject = {
      mileage: carMileage !== "" ? carMileage : 0,
      fixed_price: askingPrice.price !== "" ? askingPrice.price : 0.0,
      price_to: askingPrice.price !== "" ? askingPrice.price : 0.0,
      affiliated_price: askingPrice.sale_price,
      price_from: askingPrice.sale_price,
      call_for_price: askingPrice.custom_price !== "" ? askingPrice.custom_price : "-",
      transmission_type: transmission !== "" ? transmission : "N/A",
      car_manufacturer: maker,
      model_name: model,
      interior_color_new: carInteriorColor !== "" ? carInteriorColor : 21,
      exterior_color: carExteriorColor !== "" ? carExteriorColor : 54,
      car_body_type: carBody,
      engine_capacity: carEngine !== "" ? carEngine : 0.0,
      car_fuel: carFuelType,
      created_by: user_id,
      car_video_link: videoLink.video1 !== "" ? videoLink.video1 : "-",
      car_type: type,
      drive: drive !== "" ? drive : "N/A",
      seating_capacity: seat !== undefined ? seat : 0,
      description: editorData !== "" ? editorData : "-",
      car_features: checkBoxInput,
      car_year: year,
      engine_no: carEngineNumber !== "" ? carEngineNumber : "-",
      chassis_no: carChasisNumber,
      registration_year: regYear,
      registration_no: carRegistrationNumber,
      grade: carGrade,
      car_location: carLocation,
      car_status: carStatus,
    };
    if (!arrayEquals(carImages, newCarImages)) {
      const delImages = carImages.filter((val) => !newCarImages.includes(val));
      const response = await api.post("api/cars/delete-images/", delImages);
      // console.log(response);
    }

    // if (images.length === 0) {
    //     setSnackMsg("Please! Provide Image.");
    //     setOpen(true);
    // } else {
    setLoading(true);
    const response = await api.patch("api/cars/user-car-update/" + carId + "/", carObject);
    if (response.status === 200) {
      const id = response.data.car_id;
      localStorage.setItem("car_id", id);
      if (askingPrice.price < oldAskingPrice.price || askingPrice.sale_price < oldAskingPrice.sale_price) {
        let notifyObject = {
          car_id: id,
        };
        const response = await api.post("api/cars/sent-mail/", notifyObject);
      }

      let formData = new FormData();
      formData.append("car_id", id);
      formData.append("created_by", user_id);
      Object.keys(images).forEach((item) => {
        if (images[item] !== null) {
          formData.append("image", images[item]);
        }
      });
      if (images.length > 0) {
        const response1 = await api.post("api/cars/image-upload/", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        if (response1.status === 201) {
          setSnackMsg(false);
          setOpen(true);
          setLoading(false);
          setRedirect(true);
        } else {
          setLoading(false);
          setSnackMsg("Please fill all the required fields");
          setOpen(true);
        }
      } else {
        setSnackMsg(false);
        setOpen(true);
        setLoading(false);
        setRedirect(true);
      }
    } else {
      setLoading(false);
      setSnackMsg("Please fill all the required fields");
      setOpen(true);
    }
    // }
  };

  // -------------------Car Detail Body Start -----------------------------//

  const handleCarBody = (e) => {
    const value = e.target.value;
    propertyValidationHelper("carBody", value);
    setCarBody(value);
  };

  const handleCarEngine = (e) => {
    const value = e.target.value;
    propertyValidationHelper("carEngine", value);
    setCarEngine(value);
  };

  const handleCarInterior = (e) => {
    setCarInteriorColor(e.target.value);
  };

  const handleCarExterior = (e) => {
    setCarExteriorColor(e.target.value);
  };

  const handleCarLocation = (e) => {
    setCarLocation(e.target.value);
  };

  const handleCarStatus = (e) => {
    setCarStatus(e.target.value);
  };

  const handleMileage = (e) => {
    const value = e.target.value;
    propertyValidationHelper("carMileage", value);
    setCarMileage(value);
  };

  const handleEngineNumber = (e) => {
    const value = e.target.value;
    // propertyValidationHelper("carEngineNumber", value);
    setCarEngineNumber(value);
  };

  const handleRegistrationNumber = (e) => {
    const value = e.target.value;
    // propertyValidationHelper("carEngineNumber", value);
    setCarRegistrationNumber(value);
  };

  const handleChasisNumber = (e) => {
    const value = e.target.value;
    propertyValidationHelper("carChasisNumber", value);
    setCarChasisNumber(value);
  };

  const handleSeat = (e) => {
    const value = e.target.value;
    propertyValidationHelper("seat", value);
    setSeat(value);
  };

  const handleTransmission = (e) => {
    setTransmission(e.target.value);
  };

  const handleCarFuelType = (e) => {
    const value = e.target.value;
    propertyValidationHelper("carFuelType", value);
    setCarFuelType(value);
  };

  const handleAskingPrice = ({ target: input }) => {
    const { name, value } = input;
    if (name === "sale_price") {
      propertyValidationHelper("sale_price", value);
    } else if (name === "price") {
      propertyValidationHelper("price", value);
    }
    setAskingPrice({ ...askingPrice, [name]: value });
  };

  const handleVideoLink = ({ target: input }) => {
    setVideoLink({ ...videoLink, [input.name]: input.value });
  };

  // ---------------- Car Detail Body End --------------------------//

  // Multiple image handle code start here

  const handleImage = async (file) => {
    if (file) {
      const listSize = file.length;
      const prevListSize = images.length;
      const newImageLength = listSize - prevListSize;
      for (let i = listSize - 1; i >= prevListSize; i--) {
        const image1 = file[i];
        const imageName = image1.name;
        setImages((prev) => [...prev, image1]);
      }
    }
  };

  const imageDelete = (file) => {
    const deletefileName = file.name;
    const indexOfItemToRemove = images.findIndex((item) => item.name == deletefileName);
    if (indexOfItemToRemove === -1) {
      return;
    }
    setImages((list) => [...list.slice(0, indexOfItemToRemove), ...list.slice(indexOfItemToRemove + 1)]);
  };

  // --------------------------------  carFeatures CheckBox ----------------------------//

  const [checkBoxInput, setCheckBoxInput] = React.useState([]);
  const handleCheckbox = (e) => {
    const { name } = e.target;
    const index = checkBoxInput.indexOf(parseInt(name));
    if (index !== -1) {
      const newBox = [...checkBoxInput];
      newBox.splice(index, 1);
      setCheckBoxInput(newBox);
    } else {
      setCheckBoxInput([...checkBoxInput, parseInt(name)]);
    }
  };

  function checkChecked(id) {
    let check = false;
    if (checkBoxInput.length > 0) {
      for (let i = 0; i < checkBoxInput.length; i++) {
        if (checkBoxInput[i] === id) {
          check = true;
        }
      }
    } else {
      check = false;
    }
    return check;
  }

  // --------------------------------  carFeatures CheckBox --------------------------//

  // ---------------------------------- Ck Editor -----------------------------------//

  const [editorData, setEditorData] = React.useState("");
  const handleEditor = (event, editor) => {
    const data = editor.getData();
    let element = document.createElement("div");
    element.innerHTML = data;
    setEditorData(element.textContent || element.innerText);
  };
  // ---------------------------------- Ck Editor End -------------------------------//

  const handleRegYear = (e) => {
    setRegYear(e.target.value);
    propertyValidationHelper("registration_year", e.target.value);
  };

  const getYears = () => {
    const arr = [];
    for (var i = new Date().getFullYear(); i >= 1971; i--) {
      arr.push({ id: i, year: i });
    }
    return arr;
  };

  const findMakerName = (maker) => {
    let m_name = "";
    carMakers.every((item) => {
      if (item.maker_id === maker) {
        m_name = item.maker_name;
        return false;
      }
      return true;
    });

    return m_name;
  };

  const findModelName = (model) => {
    let m_name = "";
    carModels.every((item) => {
      if (item.model_id === model) {
        m_name = item;
        return false;
      }
      return true;
    });

    return m_name;
  };

  if (redirect) {
    const modelItem = findModelName(model);
    const makerName = findMakerName(maker);
    // const modelYear = findYear(year);
    const slug = `${makerName}-${modelItem.model_name}`;
    let id = localStorage.getItem("car_id");
    history.push({
      pathname: `updated-car/car-details/${slug}`,
      state: { car_id: parseInt(id) },
      search: `?car_id=${id}`,
    });
  }

  //------------ Api call -> Choose Car Model ----------------//
  React.useEffect(() => {
    (async () => {
      try {
        // const token = getToken();
        let response = await api.get("api/cars/car-type/");
        let response1 = await api.get("api/cars/car-manufacturer/");
        setcarType(response.data);
        setCarMakers(response1.data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  React.useEffect(() => {
    if (maker !== "") {
      setCarModels([]);
      const maker_name = findMakerName(maker);
      setLoading(true);

      (async () => {
        try {
          const response = await api.get(`api/cars/model-list/?maker_name=${maker_name}`);
          if (response.status === 200) {
            setCarModels(response.data.result);
            let filteredYear = response.data.result.filter((item) => item.release_year !== "-");

            setYears(getYears());
            setLoading(false);
          } else {
            setLoading(false);
            setSnackMsg("Search Alert: Model not available for this brand!");
            setOpen(true);
          }
        } catch (err) {
          setLoading(false);
          setSnackMsg("Something went wrong!");
        }
      })();
    }
  }, [maker]);

  // --------------- Api Call -> Choose Car Model End ----------------------//

  // -------------- Api Call -> Car Details Start --------------------------//

  React.useEffect(() => {
    (async () => {
      try {
        const response = await api.get("api/cars/body-type/");
        const response2 = await api.get("api/cars/interior-color/");
        const response3 = await api.get("api/cars/fuel-economy/");
        const response4 = await api.get("api/cars/fuel-type/");
        const response5 = await api.get("api/cars/exterior-color/");
        setCarDetailBody(response.data);
        setCarDetailInteriorColor(response2.data);
        setCarDetailFuelEconomy(response3.data);
        setCarDetailFuelType(response4.data);
        setCarDetailExteriorColor(response5.data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  // -------------- Api Call -> Car Details End --------------------------//

  // -------------- Api Call -> Car Features Start -----------------------//

  React.useEffect(() => {
    (async () => {
      try {
        const response = await api.get("api/cars/features-list/");
        setCarFeatures(response.data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  // -------------- Api Call -> Car Features End ------------------------//

  // -------------- Api Call -> Car Location Start -----------------------//

  React.useEffect(() => {
    (async () => {
      try {
        const response = await api.get("api/cars/locations/");
        setCarLocations(response.data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  // -------------- Api Call -> Car Location End ------------------------//

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const [open, setOpen] = React.useState(false);
  const [snackMsg, setSnackMsg] = React.useState("");
  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  // -------------- Api Call -> Car Details Fetch -----------------------//

  const [car, setCar] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let val = [];
  val["New"] = 1;
  val["Used"] = 2;
  val["Reconditioned"] = 3;
  let features = [];

  const url = "api/cars/details/" + carId + "/";

  const [carImages, setCarImages] = React.useState([]);
  const [newCarImages, setNewCarImages] = React.useState([]);

  function dataURLtoFile(dataurl, filename) {
    let arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

  function arrayEquals(a, b) {
    return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((val, index) => val === b[index]);
  }

  const deleteCarImage = (index) => {
    let array = [...newCarImages]; // make a separate copy of the array
    if (index !== -1) {
      array.splice(index, 1);
      setNewCarImages(array);
    }
  };

  React.useEffect(() => {
    (async () => {
      await api
        .get(url)
        .then((res) => {
          if (res.status === 200) {
            console.log(res.data.result);
            setCar(res.data.result);
            setIsLoading(true);
            setType(val[res.data.result.car_type.car_type]);
            if (val[res.data.result.car_type.car_type] == 2) {
              setIsUsed(true);
            }
            setMaker(res.data.result.car_manufacturer.maker_id);
            setModel(res.data.result.model_name.model_id);
            setCarGrade(res.data.result.grade == "-" ? "" : res.data.result.grade);
            setYear(
              res.data.result.car_year == "-" || res.data.result.car_year == null ? "" : res.data.result.car_year
            );
            setRegYear(
              res.data.result.registration_year == "-" || res.data.result.registration_year == null
                ? ""
                : res.data.result.registration_year
            );
            setCarChasisNumber(res.data.result.chassis_no == "-" ? "" : res.data.result.chassis_no);
            setCarEngineNumber(res.data.result.engine_no == "-" ? "" : res.data.result.engine_no);
            setCarBody(res.data.result.car_body_type.body_id);
            setCarEngine(res.data.result.engine_capacity);
            setDrive(res.data.result.drive == "-" || res.data.result.drive == null ? "" : res.data.result.drive);
            setCarMileage(
              res.data.result.mileage == "-" || res.data.result.mileage == null ? "" : res.data.result.mileage
            );
            setSeat(
              res.data.result.seating_capacity == "-" || res.data.result.seating_capacity == null
                ? ""
                : res.data.result.seating_capacity
            );
            setTransmission(
              res.data.result.transmission_type == "-" || res.data.result.transmission_type == null
                ? ""
                : res.data.result.transmission_type
            );
            setCarFuelType(
              res.data.result.car_fuel.fuel_id == "-" || res.data.result.car_fuel.fuel_id == null
                ? ""
                : res.data.result.car_fuel.fuel_id
            );
            setCarExteriorColor(res.data.result.exterior_color == null ? "" : res.data.result.exterior_color.color_id);
            setCarInteriorColor(
              res.data.result.interior_color_new == null ? "" : res.data.result.interior_color_new.id
            );
            setCarLocation(res.data.result.car_location == null ? "" : res.data.result.car_location.city_id);
            setCarStatus(res.data.result.car_status == null ? "" : res.data.result.car_status);
            let feature = res.data.result.car_feature_list;
            if (feature.length > 0) {
              for (let i = 0; i < feature.length; i++) {
                features[i] = feature[i].id;
              }
            }

            setCheckBoxInput(features);

            setCarImages(res.data.result.images);
            setNewCarImages(res.data.result.images);
            // for (let i = 0; i <  res.data.result.images.length; i++) {
            //     let url = car.images[i];
            //     let filename = url.split('/').pop().split('#')[0].split('?')[0];
            //     setCarImages((prev) => [...prev, url]);
            //     const toDataURL = url => fetch(url)
            //         .then(response => response.blob())
            //         .then(blob => new Promise((resolve, reject) => {
            //             const reader = new FileReader()
            //             reader.onloadend = () => resolve(reader.result)
            //             reader.onerror = reject
            //             reader.readAsDataURL(blob)
            //         }))
            //
            //     toDataURL(url)
            //         .then(dataUrl => {
            //             let fileData = dataURLtoFile(dataUrl, filename);
            //             // setCarImages((prev) => [...prev, dataUrl]);
            //             // handleImage([fileData]);
            //         })
            // }
            setEditorData(res.data.result.description);
            setVideoLink({ ...videoLink, ["video1"]: res.data.result.car_video_link });
            setAskingPrice({
              ...askingPrice,
              ["price"]: res.data.result.price_to,
              ["sale_price"]: res.data.result.price_from,
              ["custom_price"]: res.data.result.call_for_price == null ? "no" : res.data.result.call_for_price,
            });

            setOldAskingPrice({
              ...oldAskingPrice,
              ["price"]: res.data.result.price_to,
              ["sale_price"]: res.data.result.price_from,
            });
          }
        })
        .catch((err) => {});
    })();
  }, []);

  // console.log(carImages);
  // -------------- Api Call -> Car Details Fetch ------------------------//

  return (
    <UpdateDiv>
      <div className={classes.outerContainer}>
        <div className={classes.bannerOverlay}>
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            autoHideDuration={2000}
            onClose={handleClose}
            key={vertical + horizontal}
          >
            <Alert onClose={handleClose} severity="warning">
              {snackMsg}
            </Alert>
          </Snackbar>
        </div>
      </div>
      <Container maxWidth="lg">
        <div className={classes.imageUploadContainer}>
          <Grid container>
            <Grid item xs={12} sm={12} md={8} spacing={2}>
              <p className={classes.paper}>UPLOAD Car Photo*</p>
              <Box className={classes.imageDiv}>
                <MultiImageUpload
                  onUpload={handleImage}
                  imageDelete={imageDelete}
                  length={images.length}
                  carImages={carImages}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} className={classes.uploadOptions}>
              <h2 className={classes.paperTitle}>Choose your car model</h2>
              <Box className={classes.option}>
                <Typography className={classes.optionTitle}>{modelOptions[0].title}</Typography>
                <SimpleSelect
                  name="car_type"
                  classname={classes.dropdown}
                  icon={true}
                  value={type}
                  error={inputErrors.type}
                  onChange={handleType}
                  buttonname={modelOptions[0].selectText}
                  keys={["type_id", "type_name"]}
                  menulist={carType}
                />
              </Box>

              <Box className={classes.option}>
                <Typography className={classes.optionTitle}>{modelOptions[1].title}</Typography>
                <SimpleSelect
                  classname={classes.dropdown}
                  icon={true}
                  value={maker}
                  error={inputErrors.maker}
                  onChange={handleMaker}
                  buttonname={modelOptions[1].selectText}
                  keys={["maker_id", "maker_name"]}
                  menulist={carMakers}
                />
              </Box>

              {loading === true ? (
                <div className={classes.loader}>
                  <Fade
                    in={loading}
                    style={{
                      transitionDelay: loading ? "800ms" : "0ms",
                    }}
                    unmountOnExit
                  >
                    <CircularProgress />
                  </Fade>
                </div>
              ) : (
                <Box className={classes.option}>
                  <Typography className={classes.optionTitle}>{modelOptions[2].title}</Typography>
                  <SimpleSelect
                    classname={classes.dropdown}
                    icon={true}
                    value={model}
                    error={inputErrors.model}
                    onChange={handleModel}
                    buttonname={modelOptions[2].selectText}
                    keys={["model_id", "model_name"]}
                    menulist={carModels}
                  />
                </Box>
              )}

              <Box className={`${classes.option} ${"inputBoxInner"}`}>
                <Typography className={classes.optionTitle}>{modelOptions[3].title}</Typography>
                <RenderInput
                  value={carGrade}
                  name="engine_number"
                  autoComplete="off"
                  onChange={handleCarGrade}
                  placeholder="Enter Grade/Package"
                  size="small"
                  className={`${classes.newInputItem} ${"inputItemInner"} ${"gradeClass"}`}
                />
              </Box>

              <Box className={classes.option}>
                <Typography className={classes.optionTitle}>{modelOptions[4].title}</Typography>
                <SimpleSelect
                  classname={classes.dropdown}
                  icon={true}
                  value={year}
                  error={inputErrors.year}
                  onChange={handleYear}
                  buttonname={modelOptions[4].selectText}
                  keys={["id", "year"]}
                  menulist={years}
                />
              </Box>

              {isRegYear && (
                <Box className={classes.option}>
                  <Typography className={classes.optionTitle}>{modelOptions[7].title}</Typography>
                  <SimpleSelect
                    // name="reg_year"
                    classname={classes.dropdown}
                    icon={true}
                    value={regYear}
                    error={inputErrors.registration_year}
                    onChange={handleRegYear}
                    buttonname={modelOptions[7].selectText}
                    keys={["id", "year"]}
                    menulist={getYears()}
                  />
                </Box>
              )}
              {!isUsed && (
                <Box className={`${classes.option} ${"inputBoxInner"}`}>
                  <Typography className={classes.optionTitle}>{modelOptions[6].title}</Typography>
                  <RenderInput
                    value={carChasisNumber}
                    error={inputErrors.carChasisNumber && true}
                    helpertext={inputErrors.carChasisNumber}
                    name="Chasis_number"
                    autoComplete="off"
                    onChange={handleChasisNumber}
                    placeholder="Enter Chassis Number"
                    variant="outlined"
                    size="small"
                    className={`${classes.newInputItem} ${"inputItemInner"}`}
                  />
                </Box>
              )}

              {!isUsed && (
                <Box className={`${classes.option} ${"inputBoxInner"}`}>
                  <Typography className={classes.optionTitle}>{modelOptions[5].title}</Typography>
                  <RenderInput
                    value={carEngineNumber}
                    error={inputErrors.carEngineNumber && true}
                    helpertext={inputErrors.carEngineNumber}
                    name="engine_number"
                    autoComplete="off"
                    onChange={handleEngineNumber}
                    placeholder="Enter Engine Number"
                    variant="outlined"
                    size="small"
                    className={`${classes.newInputItem} ${"inputItemInner"}`}
                  />
                </Box>
              )}

              {isUsed && (
                <Box className={`${classes.option} ${"inputBoxInner"}`}>
                  <Typography className={classes.optionTitle}>{modelOptions[8].title}</Typography>
                  <RenderInput
                    value={carRegistrationNumber}
                    error={inputErrors.carRegistrationNumber && true}
                    helpertext={inputErrors.carRegistrationNumber}
                    name="registration_number"
                    autoComplete="off"
                    onChange={handleRegistrationNumber}
                    placeholder="Enter Registration Number"
                    variant="outlined"
                    size="small"
                    className={`${classes.newInputItem} ${"inputItemInner"}`}
                  />
                </Box>
              )}
            </Grid>

            {newCarImages.length > 0 &&
              newCarImages.map((carImage, i) => (
                <Grid
                  key={i}
                  item
                  xs={12}
                  sm={12}
                  md={2}
                  className={classes.uploadOptions}
                  style={{ display: "inline-block", position: "relative" }}
                >
                  <img style={{ height: "100px", width: "100px", margin: "2rem" }} src={carImage} alt="Car" />
                  <button
                    style={{
                      position: "absolute",
                      top: "0",
                      right: "0",
                      marginTop: "1rem",
                      color: "#f06425",
                      transition: ".5s ease",
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      backgroundColor: "#e0e0e0",
                      border: "0",
                      cursor: "pointer",
                      outline: "0",
                      boxShadow:
                        "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)",
                    }}
                    tabIndex="0"
                    type="button"
                    aria-label="Delete"
                    onClick={() => deleteCarImage(i)}
                  >
                    <span
                      style={{ width: "100%", display: "inherit", alignItems: "inherit", justifyContent: "inherit" }}
                    >
                      <svg
                        style={{
                          fill: "#f06425",
                          width: "1em",
                          height: "1em",
                          display: "inline-block",
                          fontSize: "1.5rem",
                          transition: "fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                          flexShrink: "0",
                          userSelect: "none",
                        }}
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
                      </svg>
                    </span>
                  </button>
                </Grid>
              ))}
          </Grid>
        </div>
      </Container>
      {/* ---------------Car Body Details----------------------------------- */}
      <Container maxWidth="lg">
        <div className={classes.carDetailsContainer}>
          <h3 className={classes.carDetailsHeading}>CAR DETAILS</h3>
          <Grid container className={classes.carDetails}>
            <div className={classes.carDetailsRowNewIssue} style={inputErrors.carBody && { marginBottom: "20px" }}>
              <p className={classes.carDetailIconDivNew}>
                <img className={classes.carDetailIcon} src="../../assets/car-upload/body.svg" alt="Car Body" />
                <span>Body*</span>
              </p>
              <SimpleSelect
                classname={classes.carBodyDropdown}
                icon={true}
                buttonname="Select Body"
                error={inputErrors.carBody}
                value={carBody}
                onChange={handleCarBody}
                keys={["id", "body_name"]}
                menulist={carDetailBody}
              />
            </div>
            <div className={classes.carDetailsRowNewIssue}>
              <p className={classes.carDetailIconDivNew}>
                <img className={classes.carDetailIcon} src="../../assets/car-upload/engine.svg" alt="Car Engine" />
                <span>Engine (cc)</span>
              </p>

              <RenderInput
                value={carEngine}
                error={inputErrors.carEngine && true}
                helpertext={inputErrors.carEngine}
                // label="Enter Engine (cc)"
                name="engine"
                autoComplete="off"
                onChange={handleCarEngine}
                placeholder="Enter Engine"
                variant="outlined"
                size="small"
                className={classes.newInputItem}
              />
            </div>
            <div className={classes.carDetailsRowNewIssue}>
              <p className={classes.carDetailIconDivNew}>
                <img className={classes.carDetailIcon} src="../../assets/car-upload/wheel.svg" alt="Wheel" />
                <span>Drive</span>
              </p>
              <SimpleSelect
                classname={classes.carBodyDropdown}
                icon={true}
                buttonname="Select Drive"
                value={drive}
                onChange={handleDriveDropdown}
                keys={["option", "option"]}
                menulist={driveList}
              />
            </div>
            <div className={classes.carDetailsRowNewIssue}>
              <p className={classes.carDetailIconDivNew}>
                <img className={classes.carDetailIcon} src="../../assets/car-upload/mileage.svg" alt="Mileage" />
                <span>Mileage (km)</span>
              </p>
              <RenderInput
                value={carMileage}
                error={inputErrors.carMileage && true}
                helpertext={inputErrors.carMileage}
                // label="Enter Mileage"
                name="mileage"
                autoComplete="off"
                onChange={handleMileage}
                placeholder="Enter Mileage"
                variant="outlined"
                size="small"
                className={classes.newInputItem}
              />
            </div>
            <div className={classes.carDetailsRowNewIssue}>
              <p className={classes.carDetailIconDivNew}>
                <img className={classes.carDetailIcon} src="../../assets/car-upload/seat2.svg" alt="Seats" />
                <span>No. of Seats</span>
              </p>
              <RenderInput
                value={seat}
                error={inputErrors.seat && true}
                helpertext={inputErrors.seat}
                // label="Enter Seats"
                name="seat"
                autoComplete="off"
                onChange={handleSeat}
                placeholder="Enter Seat"
                variant="outlined"
                size="small"
                className={classes.newInputItem}
              />
            </div>
            <div className={classes.carDetailsRowNewIssue}>
              <p className={classes.carDetailIconDivNew}>
                <img className={classes.carDetailIcon} src="../../assets/car-upload/shifter.svg" alt="Shifter" />
                <span>Transmission</span>
              </p>
              <SimpleSelect
                classname={classes.carBodyDropdown}
                icon={true}
                buttonname="Select Type"
                value={transmission}
                onChange={handleTransmission}
                keys={["id", "title"]}
                menulist={carTransmission}
              />
            </div>

            <div className={classes.carDetailsRowNewIssue}>
              <p className={classes.carDetailIconDivNew}>
                <img
                  className={classes.carDetailIcon}
                  src="../../assets/car-upload/gas-station.svg"
                  alt="Gas Station"
                />
                <span>Fuel Type*</span>
              </p>
              <SimpleSelect
                classname={classes.carBodyDropdown}
                icon={true}
                buttonname="Select Fuel Type"
                value={carFuelType}
                error={inputErrors.carFuelType}
                third={true}
                onChange={handleCarFuelType}
                keys={["fuel_id", "fuel_type"]}
                menulist={carDetailFuelType}
              />
            </div>

            <div className={classes.carDetailsRowNewIssue}>
              <p className={classes.carDetailIconDivNew}>
                <img className={classes.carDetailIcon} src="../../assets/car-upload/interior.svg" alt="Interior" />
                <span>Exterior Colour</span>
              </p>
              <SimpleSelect
                classname={classes.carBodyDropdown}
                icon={true}
                buttonname="Select Color"
                value={carExteriorColor}
                onChange={handleCarExterior}
                keys={["id", "car_color"]}
                menulist={carDetailExteriorColor}
              />
            </div>
            <div className={classes.carDetailsRowNewIssue}>
              <p className={classes.carDetailIconDivNew}>
                <img className={classes.carDetailIcon} src="../../assets/car-upload/interior.svg" alt="Interior" />
                <span> Interior Colour</span>
              </p>
              <SimpleSelect
                classname={classes.carBodyDropdown}
                icon={true}
                buttonname="Select Color"
                value={carInteriorColor}
                onChange={handleCarInterior}
                keys={["id", "int_color"]}
                menulist={carDetailInteriorColor}
              />
            </div>
            <div className={classes.carDetailsRowNewIssue}>
              <p className={classes.carDetailIconDivNew}>
                <img className={classes.carDetailIcon} src="../../assets/car-upload/interior.svg" alt="Interior" />
                <span>City</span>
              </p>
              <SimpleSelect
                classname={classes.carBodyDropdown}
                icon={true}
                buttonname="Select City"
                value={carLocation}
                onChange={handleCarLocation}
                keys={["location_id", "city_name"]}
                menulist={carLocations}
              />
            </div>
            <div className={classes.carDetailsRowNewIssue}>
              <p className={classes.carDetailIconDivNew}>
                <img className={classes.carDetailIcon} src="../../assets/car-upload/interior.svg" alt="Interior" />
                <span> Status</span>
              </p>
              <SimpleSelect
                classname={classes.carBodyDropdown}
                icon={true}
                buttonname="Select Status"
                value={carStatus}
                onChange={handleCarStatus}
                keys={["id", "title"]}
                menulist={carStatusList}
              />
            </div>
          </Grid>
        </div>
      </Container>
      {/* ------------------------ Car Features ---------------------------------------- */}
      <Container maxWidth="lg">
        <div className={classes.carFeatureContainer}>
          <h3 className={classes.carFeaturesHeading}>SELECT YOUR CAR FEATURES</h3>
          <div className={classes.carFeaturesMain}>
            {carFeatures.map((item, index) => (
              <div key={index} className={classes.carFeatureIconDiv}>
                <span className={classes.carDetailIcon}>
                  <FormControlLabel
                    control={<Checkbox onChange={handleCheckbox} checked={checkChecked(item.id)} name={`${item.id}`} />}
                    label={item.feature_name}
                  />
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
      {/* -------------------------- Car Features End ----------------------------- */}
      {/* -------------------------- Car Asking Price Start----------------------------- */}
      <Container maxWidth="lg">
        <div className={classes.carPriceContainer}>
          <h3 className={classes.carFeaturesHeading}>SET YOUR ASKING PRICE</h3>
          <p className={classes.carPriceText}>
            Please kindly set the asking price and final price for your car. 
          </p>
          <div className={classes.askingPriceNewInner}>
            <div className={classes.equalWidth}>
              <label htmlFor="price" className={classes.priceInputLabel}>
                Asking Price*
              </label>
              <input
                className={classes.priceInputField}
                onChange={handleAskingPrice}
                placeholder="Asking Price"
                type="text"
                name="price"
                value={askingPrice.price}
              />
              {inputErrors.price && (
                <div
                  style={{
                    position: "absolute",
                    color: "#ff2d2d",
                    paddingTop: "2px",
                    fontSize: "12px",
                  }}
                >
                  {inputErrors.price}
                </div>
              )}
            </div>
            <div className={classes.equalWidth}>
              <label htmlFor="sale_price" className={classes.priceInputLabel}>
                Selling Price*
              </label>
              <input
                className={classes.priceInputField}
                onChange={handleAskingPrice}
                placeholder="Selling Price"
                type="text"
                name="sale_price"
                value={askingPrice.sale_price}
              />
              {inputErrors.sale_price && (
                <div
                  style={{
                    position: "absolute",
                    color: "#ff2d2d",
                    paddingTop: "2px",
                    fontSize: "12px",
                  }}
                >
                  {inputErrors.sale_price}
                </div>
              )}
            </div>

            <div className={classes.equalWidth}>
              {/* <Typography className={classes.priceInputLabel}>Call For Price</Typography>
              <SimpleSelect
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                name="custom_price"
                classname={classes.priceInput}
                icon={true}
                value={askingPrice.custom_price}
                onChange={handleAskingPrice}
                buttonname={"Call For Price"}
                keys={["id", "title"]}
                menulist={carCallForPrice}
              /> */}
            </div>

            <div className={classes.equalWidth}>
              <div className={classes.videoLinkDiv}>
                <label htmlFor="description" className={classes.priceInputLabel}>
                  Add description
                </label>
                <div className={classes.ckEditorDiv}></div>
                <div className={classes.linkInputDivRight}>
                  <CKEditor
                    name="description"
                    editor={ClassicEditor}
                    onChange={handleEditor}
                    config={{ placeholder: "Add Description" }}
                    data={editorData}
                  />
                </div>
              </div>
            </div>
            <div className={classes.equalWidth}>
              <label htmlFor="video1" className={classes.priceInputLabel}>
                Add videos
              </label>
              <div className={classes.linkInputDiv}>
                <input
                  className={classes.linkInput}
                  type="text"
                  onChange={handleVideoLink}
                  placeholder="Video Link"
                  name={videoName[0]}
                  id="link"
                  value={videoLink.video1}
                />
              </div>
            </div>
            <div className={classes.buttonContainer}>
              {loading && (
                <div className={classes.buttonLoader}>
                  <Fade
                    in={loading}
                    style={{
                      transitionDelay: loading ? "800ms" : "0ms",
                    }}
                    unmountOnExit
                  >
                    <CircularProgress />
                  </Fade>
                </div>
              )}
              <Button
                variant="contained"
                color="inherit"
                disabled={loading}
                className={classes.button}
                startIcon={<AirportShuttleIcon />}
                onClick={handleSubmit}
              >
                Update listing
              </Button>
            </div>
            {snackMsg && (
              <p
                style={{
                  textAlign: "right",
                  color: "red",
                  width: "100%",
                  fontSize: "12px",
                }}
              >
                {snackMsg}
              </p>
            )}
          </div>
        </div>
      </Container>
    </UpdateDiv>
  );
};

export default CarUpdate;
