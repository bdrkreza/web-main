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
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";
import Joi, { errors } from "joi-browser";
import React, { useRef, useState } from "react";
import Resizer from "react-image-file-resizer";
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import CancelIcon from "@material-ui/icons/Cancel";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Compress from "react-image-file-resizer";
import MuiAlert from "@material-ui/lab/Alert";
import MultiImageUpload from "../MultipleImageUpload/MultiImageUpload";
import RenderInput from "@components/common/Input";
import SimpleSelect from "@components/Dropdown/CaruploadDropdown";
import UploadBanner from "../../assets/banner/banner4.jpeg";
import _ from "lodash";
import { api } from "@configs/configs";
// import { getToken } from "../../utils/getToken";
import { useHistory } from "react-router-dom";
// import imageCompression from "browser-image-compression";

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

const CarUpload = () => {
  const history = useHistory();
  const classes = useStyles();
  const [flag, setFlag] = React.useState(false);
  const [redirect, setRedirect] = React.useState(false);
  let inputImage = React.useRef();
  const [images, setImages] = React.useState([]);
  const [video, setVideo] = React.useState(1);
  const [carFeatures, setCarFeatures] = React.useState([]);
  const [carTitle, setCarTitle] = React.useState();
  // ---------Choose Car Model Start--------------///
  const [carType, setcarType] = React.useState([]);
  const [carMakers, setCarMakers] = React.useState([]);
  const [carModels, setCarModels] = React.useState([]);
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
  const [carDetailTransmission, setCarDetailTransmission] = React.useState([]);
  const [carDetailExteriorColor, setCarDetailExteriorColor] = React.useState([]);
  const [carBody, setCarBody] = React.useState("");
  const [carEngine, setCarEngine] = React.useState();
  const [carFuelEconomy, setCarFuelEcononmy] = React.useState("");
  const [carFuel, setCarFuel] = React.useState("");
  const [carFuelType, setCarFuelType] = React.useState("");
  const [carInteriorColor, setCarInteriorColor] = React.useState("");
  const [carExteriorColor, setCarExteriorColor] = React.useState("");
  const [carTransmission, setCarTransmission] = React.useState([
    { id: "A", title: "Automatic" },
    { id: "M", title: "Manual" },
  ]);

  const [driveList] = React.useState([
    { id: 1, option: "Front Wheel Drive (FWD)" },
    { id: 2, option: "Rear Wheel Drive (RWD)" },
    { id: 3, option: "All Wheel Drive (AWD)" },
    { id: 4, option: "4-Wheel Drive (4WD)" },
  ]);
  const [drive, setDrive] = React.useState("");
  const [transmission, setTransmission] = React.useState("");
  const [carEconomy, setCarEconomy] = React.useState("");
  const [carDrive, setCarDrive] = React.useState("");
  const [fileList, setFileList] = React.useState();
  // ---------Car Details End ----------------//

  const [askingPrice, setAskingPrice] = React.useState({
    price: undefined,
    sale_price: undefined,
    custom_price: "Call for price",
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

  const handleChange = (e) => {
    const value = e.target.value;
    propertyValidationHelper("carTitle", value);
    setCarTitle(value);
  };

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

    const errors = {}; // TODO what is the point to set error to empty and iterate later?
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
      console.log(errors);
      console.log(isUsed);
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
      // call_for_price: askingPrice.custom_price !== "" ? askingPrice.custom_price : "-",
      // enforce no call_for_price policy. Every car must disclose the price.
      call_for_price: "no",
      transmission_type: transmission !== "" ? transmission : "N/A",
      car_manufacturer: maker,
      model_name: model,
      interior_color: carInteriorColor !== "" ? carInteriorColor : 21,
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
    };

    if (images.length === 0) {
      setSnackMsg("Please! Provide Image.");
      setOpen(true);
    } else {
      setLoading(true);
      console.log(carObject);
      const response = await api.post("api/cars/upload/", carObject);
      console.log(response);
      if (response.status === 201) {
        const id = response.data.car_id;
        localStorage.setItem("car_id", id);
        let formData = new FormData();
        formData.append("car_id", id);
        formData.append("created_by", user_id);
        Object.keys(images).forEach((item) => {
          if (images[item] !== null) {
            formData.append("image", images[item]);
          }
        });
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
        setLoading(false);
        setSnackMsg("Please fill all the required fields");
        setOpen(true);
      }
    }
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

  const handleDrive = (e) => {
    setCarDrive(e.target.value);
  };

  const handleCarInterior = (e) => {
    setCarInteriorColor(e.target.value);
  };

  const handleCarExterior = (e) => {
    setCarExteriorColor(e.target.value);
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

  const handleFuel = (e) => {
    setCarFuel(e.target.value);
  };

  const handleCarFuelEconomy = (e) => {
    setCarFuelEcononmy(e.target.value);
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

  const popupFolder = () => {
    inputImage.current.click();
  };

  // Multiple image handle code start here

  const handleImage = async (file) => {
    if (file) {
      const listSize = file.length;
      const prevListSize = images.length;
      const newImageLength = listSize - prevListSize;
      for (let i = listSize - 1; i >= prevListSize; i--) {
        const image1 = file[i];
        const imageName = image1.name;
        console.log(image1);
        // let reader = new FileReader();
        // reader.readAsDataURL(image1);
        // reader.onloadend = () => {
        //   let image = reader.result;
        //   const newImage = new Image();
        //   newImage.src = reader.result;
        //   newImage.onload = () => {
        //     const elem = document.createElement("canvas");
        //     elem.width = 1050;
        //     elem.height = 700;
        //     const ctx = elem.getContext("2d");
        //     ctx.drawImage(newImage, 0, 0, 1050, 700);
        //     ctx.canvas.toBlob(
        //       (blob) => {
        //         const file = new File([blob], imageName, {
        //           type: blob.type,
        //           lastModified: Date.now(),
        //         });
        //         let imgBox = 0;
        //         console.log("converted---", file);
        //         setImages((prev) => [...prev, file]);
        //       },
        //       image1.type,
        //       1
        //     );
        //   };
        // };
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

  // console.log("images----", images);

  const dragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };
  const dragEnter = (e) => {
    e.stopPropagation();
  };
  const dragLeave = (e) => {
    e.stopPropagation();
  };

  const handleVideo = () => {
    if (video < 2) {
      setVideo((prev) => prev + 1);
    }
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

  // const findYear = (year) => {
  //   let m_name = "";
  //   years.every((item) => {
  //     if (item.id === year) {
  //       m_name = item;
  //       return false;
  //     }
  //     return true;
  //   });

  //   return m_name;
  // };

  if (redirect) {
    const modelItem = findModelName(model);
    const makerName = findMakerName(maker);
    // const modelYear = findYear(year)
    const slug = `${makerName}-${modelItem.model_name}`;
    let id = localStorage.getItem("car_id");
    history.push({
      pathname: `uploaded-car/car-details/${slug}`,
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
        console.log(response.data);
        setCarFeatures(response.data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  // -------------- Api Call -> Car Features End ------------------------//

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

  return (
    <div>
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
                <MultiImageUpload onUpload={handleImage} imageDelete={imageDelete} length={images.length} />
              </Box>
              {/* {images.length > 0 &&
                images.map((image, i) => (
                  <img
                    style={{ height: "100px", width: "100px" }}
                    src={image.name}
                  />
                ))} */}
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
                <img className={classes.carDetailIcon} src="assets/car-upload/body.svg" alt="body" />
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
                <img className={classes.carDetailIcon} src="assets/car-upload/engine.svg" alt="engine" />
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
                <img className={classes.carDetailIcon} src="assets/car-upload/wheel.svg" alt="wheel" />
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
                <img className={classes.carDetailIcon} src="assets/car-upload/mileage.svg" alt="mileage" />
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
                <img className={classes.carDetailIcon} src="assets/car-upload/seat2.svg" alt="seats" />
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
                <img className={classes.carDetailIcon} src="assets/car-upload/shifter.svg" alt="shifter" />
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
                <img className={classes.carDetailIcon} src="assets/car-upload/gas-station.svg" alt="gas station" />
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
                <img className={classes.carDetailIcon} src="assets/car-upload/interior.svg" alt="interior" />
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
                <img className={classes.carDetailIcon} src="assets/car-upload/interior.svg" alt="interior" />
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
                    control={<Checkbox onChange={handleCheckbox} name={`${item.id}`} />}
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
              {/* <label className={classes.priceInputLabel}>Call For Price</label> */}
              {/* <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={askingPrice.custom_price}
                onChange={handleAskingPrice}
                name="custom_price"
                className={classes.priceInput}
                renderValue={
                  answer !== "" ? undefined : () => <Placeholder>Call For Price</Placeholder>
                }
              > */}
              {/* <MenuItem value="none" disabled>
                      uncontrolled Native placeholder
                </MenuItem> */}
              {/* <MenuItem key="0" disabled value="none" >Call For Price</MenuItem> */}
              {/* <MenuItem value={"no"}>No</MenuItem>
                <MenuItem value={"yes"}>Yes</MenuItem>
              </Select> */}
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
                  />
                </div>
              </div>
            </div>
            <div className={classes.equalWidth}>
              <label htmlFor={videoName[0]} className={classes.priceInputLabel}>
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
                submit listing
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
    </div>
  );
};

export default CarUpload;
