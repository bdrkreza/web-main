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

import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Compress from "react-image-file-resizer";
import Joi from "joi-browser";
import MuiAlert from "@material-ui/lab/Alert";
import MultiImageUpload from "../MultipleImageUpload/MultiImageUpload";
import React from "react";
import RenderInput from "@components/common/Input";
import SimpleSelect from "@components/Dropdown/CaruploadDropdown";
import UploadBanner from "../../assets/banner/banner4.jpeg";
import { api } from "@configs/configs";
import { useHistory } from "react-router-dom";

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
  addBike: {
    height: "inherit",
    position: "relative",
    color: "red",
  },
  addBikeText: {
    position: "absolute",
    left: "24px",
    bottom: "60px",
    fontSize: "30px",
    color: "#ffffff",
    fontWeight: "px",
    fontFamily: "Open Sans",
  },
  bikeBuild: {
    marginTop: "180px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: "30px 0px",

    "@media(max-width: 768px)": {
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

  bikeBodyDropdown: {
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
    // cursor: "pointer",
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

  // -------------------bike Details---------------------------------//
  bikeDetailsContainer: {
    margin: "30px 0px",
    boxShadow: "0px 1px 5px 2px rgb(0 0 0 / 16%)",
    backgroundColor: "#ffffff",
    borderRadius: "5px",
  },
  bikeDetailsHeading: {
    padding: "40px 0px 0px 24px",
    fontSize: "20px",
    color: "#000000",
    fontWeight: 700,
    fontFamily: "Open Sans",
    [theme.breakpoints.down("xs")]: {
      padding: "40px 0px 0px 10px",
    },
  },
  bikeDetails: {
    padding: "10px 25px",
    justifyContent: "space-between",
    // marginLeft: "-50px",
    [theme.breakpoints.down("xs")]: {
      padding: "30px 4px 30px 4px",
    },
  },
  bikeDetailsRow: {
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
        // paddingLeft: "8px",
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

  bikeDetailsRowNewIssue: {
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
  bikeDetailIconDivNew: {
    width: "30%",
    minWidth: "165px",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
      minWidth: "125px",
    },
  },

  bikeDetailIcon: {
    marginRight: "20px",
    width: "16px",
    "& img": {
      width: "15px",
    },
  },

  bikeDetailIconDiv: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    "& .MuiCheckbox-colorSecondary.Mui-checked": {
      color: "#f06425",
    },
  },
  bikeFeatureIconDiv: {
    "& .MuiCheckbox-colorSecondary.Mui-checked": {
      color: "#f06425",
    },
  },
  // --------------------------bike Details End------------------------------//
  // --------------------------bike Features Start--------------------------//
  bikeFeatureContainer: {
    backgroundColor: "#efefef",
    padding: "30px 15px",
    borderRadius: "5px",
    // boxShadow: "1px 5px 10px rgba(0,0,0,0.16)",
  },
  bikeFeaturesHeading: {
    padding: "12px 0px 0px 0",
    fontSize: "20px",
    color: "#000000",
    fontWeight: 700,
    fontFamily: "Open Sans",
    marginBottom: "10px",
  },
  bikeFeaturesSubHeading: {
    padding: "25px 0px 20px 10px",
    fontSize: "14px",
    color: "#646464",
    fontWeight: 400,
    fontFamily: "Open Sans",
  },
  bikeFeaturesMain: {
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

  // ------------------------ bike Features End ----------------------------//
  // ------------------------ bike Price Start -----------------------------//
  bikePriceContainer: {
    padding: "30px 20px",
    background: "#efefef",
    margin: "50px 0",
    borderRadius: "5px",
  },
  bikePriceInput: {
    position: "relative",
    width: "96%",
    height: "110px",
    backgroundColor: "#555555",
    [theme.breakpoints.down("xs")]: {
      height: "120px",
    },
  },
  bikePriceFormControl: {
    width: "70%",
    position: "absolute",
    top: "22%",
    left: "20%",
  },
  bikePriceText: {
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
    // border: "1px solid #f06424",
    "&.inputItemInner > div": {
      // border: "1px solid #f06424",
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
  // -------------------------- bike Price End ---------------------------------------//
  //--------------------------- bike Video Link Start -------------------------------//
  bikeVideoLinkContainer: {
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
    marginBottom: "10px",
  },
  linkInputDivRight: {
    position: "relative",
    marginBottom: "10px",
    "& .ck-content": {
      minHeight: "62px",
      maxHeight: "62px",
      border: "0px solid",
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

  // ------------------------ bike Button Start-----------------------------------//
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
  bikeVideoLinkInner: {
    paddingRight: "20px",
  },
  snackMsg: {
    paddingLeft: "30px",
    color: "red",
    fontSize: "12px",
  },
  addScroll: {
    overflowX: "scroll",
  },
}));

const BikeUpload = () => {
  const history = useHistory();
  const classes = useStyles();
  const [redirect, setRedirect] = React.useState(false);
  let inputImage = React.useRef();
  const [images, setImages] = React.useState([]);
  const [video, setVideo] = React.useState(1);
  const [bikeFeatures, setbikeFeatures] = React.useState([]);
  const [bikeFrontSuspension, setBikeFrontSuspension] = React.useState([]);
  const [bikeRearSuspension, setBikeRearSuspension] = React.useState([]);
  const [bikeFrontBrake, setBikeFrontBrake] = React.useState([]);
  const [bikeRearBrake, setBikeRearBrake] = React.useState([]);
  const [bikeColor, setBikeColor] = React.useState([]);
  const [bikeGear, setBikeGear] = React.useState([]);
  const [bikeTitle, setbikeTitle] = React.useState();
  // ---------Choose bike Model Start--------------///
  const [color, setColor] = React.useState("");
  const [gear, setGear] = React.useState("");
  const [frontBrake, setFrontBrake] = React.useState("");
  const [rearBrake, setRearBrake] = React.useState("");
  const [bikeTypes, setbikeTypes] = React.useState([]);
  const [bikeMakers, setbikeMakers] = React.useState([]);
  const [bikeModels, setbikeModels] = React.useState([]);
  const [years, setYears] = React.useState([]);
  const [type, setType] = React.useState("");
  const [regYear, setRegYear] = React.useState("");
  const [bikeRegistrationNumber, setBikeRegistrationNumber] = React.useState("");
  const [maker, setMaker] = React.useState("");
  const [model, setModel] = React.useState("");
  const [bikeGrade, setbikeGrade] = React.useState("");
  const [year, setYear] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [bikeEngineNumber, setbikeEngineNumber] = React.useState("");
  const [bikeChasisNumber, setbikeChasisNumber] = React.useState("");
  const [frontSuspension, setFrontSuspension] = React.useState("");
  const [rearSuspension, setRearSuspension] = React.useState("");
  const [imgScroll, setImgScroll] = React.useState(6);
  // --------Choose bike Modle End -------------//

  // -------- bike Details Start ---------------//
  const [bikeDetailBody, setBikeDetailBody] = React.useState([]);
  // const [bikeDetailEngine, setBikeDetailEngine] = React.useState([]);
  const [bikeDetailFuelType, setBikeDetailFuelType] = React.useState([]);
  const [seat, setSeat] = React.useState();
  const [bikeMileage, setbikeMileage] = React.useState("");
  // const [bikeDetailFuelEconomy, setBikeDetailFuelEconomy] = React.useState([]);

  // const [bikeDetailTransmission, setBikeDetailTransmission] = React.useState(
  //   []
  // );
  const [bikeBody, setbikeBody] = React.useState("");
  const [bikeEngine, setbikeEngine] = React.useState();
  const [bikeFuelEconomy, setBikeFuelEcononmy] = React.useState("");
  const [bikeFuel, setbikeFuel] = React.useState("");
  const [bikeFuelType, setbikeFuelType] = React.useState("");
  const [bikeTransmission, setbikeTransmission] = React.useState([
    { id: "A", title: "Automatic" },
    { id: "M", title: "Manual" },
  ]);

  const [transmission, setTransmission] = React.useState("");
  const [bikeEconomy, setbikeEconomy] = React.useState("");
  // ---------bike Details End ----------------//

  const [askingPrice, setAskingPrice] = React.useState({
    price: undefined,
    sale_price: undefined,
    custom_price: "",
  });

  const [videoLink, setVideoLink] = React.useState({
    video1: "",
    video2: "",
  });

  const videoName = ["video1", "video2"];

  // const [bikeEngineContent] = React.useState([
  // ])

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
      title: "Bike Edition/Version",
      selectText: "bike Grade",
    },
    {
      title: "Model Year",
      selectText: "Select Year",
    },
    {
      title: "Color",
      selectText: "Select Color",
    },
    {
      title: "Chassis Number*",
      selectText: "Chassis Number",
    },
    {
      title: "Registration Year",
      selectText: "Select Year",
    },
    {
      title: "Registration Number",
      selectText: "Registration Number",
    },
  ]);
  const [isUsed, setIsUsed] = React.useState(false);

  const [state] = React.useState({
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal } = state;

  const handleChange = (e) => {
    const value = e.target.value;
    propertyValidationHelper("bikeTitle", value);
    setbikeTitle(value);
  };

  const handleMaker = (e) => {
    const value = e.target.value;
    propertyValidationHelper("maker", value);
    setMaker(value);
  };

  const handleType = (e) => {
    if (type !== "") {
      setMaker("");
      setModel("");
      setYear("");
    }
    const value = e.target.value;
    if (e.target.name === "bike_type" && value === 2) {
      setIsUsed(true);
    } else if (e.target.name === "bike_type" && (value === 1 || value === 3)) {
      setIsUsed(false);
    }
    console.log(value);
    console.log(isUsed);
    propertyValidationHelper("type", value);
    setType(value);
  };

  const handleModel = (e) => {
    const value = e.target.value;
    propertyValidationHelper("model", value);
    setModel(value);
  };

  const handlebikeGrade = (e) => {
    setbikeGrade(e.target.value);
  };

  const handleFrontBrake = (e) => {
    setFrontBrake(e.target.value);
  };

  const handleRearBrake = (e) => {
    setRearBrake(e.target.value);
  };

  const handleGear = (e) => {
    setGear(e.target.value);
  };

  const handleFrontSuspension = (e) => {
    setFrontSuspension(e.target.value);
  };

  const handleRearSuspension = (e) => {
    setRearSuspension(e.target.value);
  };

  const handleBikeColor = (e) => {
    setColor(e.target.value);
  };

  const handleYear = (e) => {
    // const value = e.target.value;
    // propertyValidationHelper("year", value);
    setYear(e.target.value);
  };
  //----------------------------- validation start ------------------------------------//
  const [inputErrors, setError] = React.useState({});

  const schema = isUsed
    ? {
        bikeChasisNumber: Joi.string()
          .max(20)
          .regex(/^[a-zA-Z-0-9]+$/)
          // .required()
          .label("Chasis"),
        // bikeEngineNumber: Joi.string()
        //   .max(20)
        //   .regex(/^[a-zA-Z-0-9]+$/)
        //   .required()
        //   .label("Engine No"),
        // bikeTitle: Joi.string().min(3).required().label("Title"),
        type: Joi.number().required().label("Type"),
        maker: Joi.number().required().label("Maker"),
        model: Joi.number().required().label("Model"),
        price: Joi.number().positive().integer().min(10000).max(1000000).required().label("Price"),
        bikeMileage: Joi.number().min(-1).max(999999).allow("").label("Mileage"),
        bikeBody: Joi.number().required().label("Body Type"),
        // bikeFuelType: Joi.number().required().label("Fuel Type"),
        // registration_year: Joi.required().label("Reg Year"),
        sale_price: Joi.number().positive().integer().min(10000).max(1000000).required().label("Sale Price"),
        // bikeEngine: Joi.number().precision(2).allow("").label("Engine"),
        bikeEngine: Joi.number().precision(2).min(60).max(160).allow("").label("Engine Capacity"),
      }
    : {
        bikeChasisNumber: Joi.string()
          .max(20)
          .regex(/^[a-zA-Z-0-9]+$/)
          .required()
          .label("Chasis"),
        // bikeEngineNumber: Joi.string()
        //   .max(20)
        //   .regex(/^[a-zA-Z-0-9]+$/)
        //   .required()
        //   .label("Engine No"),
        // bikeTitle: Joi.string().min(3).required().label("Title"),
        type: Joi.number().required().label("Type"),
        maker: Joi.number().required().label("Maker"),
        model: Joi.number().required().label("Model"),
        price: Joi.number().positive().integer().min(10000).max(1000000).required().label("Price"),
        bikeMileage: Joi.number().min(-1).max(999999).allow("").label("Mileage"),
        bikeBody: Joi.number().required().label("Body Type"),
        // bikeFuelType: Joi.number().required().label("Fuel Type"),
        // registration_year: Joi.required().label("Reg Year"),
        sale_price: Joi.number().positive().integer().min(10000).max(1000000).required().label("Sale Price"),
        // bikeEngine: Joi.number().precision(2).allow("").label("Engine"),
        bikeEngine: Joi.number().precision(2).min(60).max(160).allow("").label("Engine Capacity"),
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
          // bikeChasisNumber: bikeChasisNumber,
          type: type,
          maker: maker,
          model: model,
          price: askingPrice.price,
          bikeBody: bikeBody,
          sale_price: askingPrice.sale_price,
        }
      : {
          bikeChasisNumber: bikeChasisNumber,
          type: type,
          maker: maker,
          model: model,
          price: askingPrice.price,
          bikeBody: bikeBody,
          sale_price: askingPrice.sale_price,
        };

    const { error } = Joi.validate(inputs, schema, { abortEarly: false });
    if (!error) return null;
    if (type == "2") {
      inputs.registration_year = regYear;
    }

    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = `${item.context.label} is required!`;
    }

    return Object.keys(errors).length === 0 ? {} : errors;
  };

  // ---------------------------------- Validation Ends here -----------------------------//
  // const [errorMessage, setErrorMessage] = React.useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validate();
    setError(errors || {});
    if (errors) {
      console.log(errors);
      console.log(isUsed);
      console.log(type);
      setSnackMsg("Please fill out the mandatory fields before submitting your listing!");
      setOpen(true);
      return;
    } else {
      setSnackMsg(false);
    }

    const user_id = parseInt(localStorage.getItem("user_id"));

    let bikeObject = {
      // bike_name: bikeTitle,
      mileage: bikeMileage !== "" ? bikeMileage : 0.0,
      fixed_price: askingPrice.price !== "" ? askingPrice.price : 0.0,
      price_to: askingPrice.price !== "" ? askingPrice.price : 0.0,
      affiliated_price: askingPrice.sale_price,
      price_from: askingPrice.sale_price,
      call_for_price: askingPrice.custom_price !== "" ? askingPrice.custom_price : "-",
      bike_manufacturer: maker,
      model_name: model,
      bike_body_type: bikeBody,
      engine_capacity: bikeEngine !== "" ? bikeEngine : 0.0,
      // bike_fuel: bikeFuelType,
      created_by: user_id,
      bike_video_link: videoLink.video1 !== "" ? videoLink.video1 : "-",
      bike_type: type,
      description: editorData !== "" ? editorData : "-",
      bike_features: checkBoxInput,
      bike_year: year,
      // engine_no: bikeEngineNumber !== "" ? bikeEngineNumber : "-",
      chassis_no: bikeChasisNumber,
      grade: bikeGrade,
      registration_year: regYear !== "" ? regYear : "-",
      front_brake: frontBrake,
      rear_brake: rearBrake,
      front_suspension: frontSuspension,
      rear_suspension: rearSuspension,
      bike_color: color,
      gear: gear !== "" ? gear : 1,
      registration_no: bikeRegistrationNumber,
    };
    console.log(bikeObject);
    if (images.length === 0) {
      setSnackMsg("Please provide image.");
      setOpen(true);
    } else {
      setLoading(true);
      // console.log(bikeObject);
      const response = await api.post("api/bikes/bike-upload/", bikeObject);
      if (response.status === 201) {
        const id = response.data.bike_id;
        localStorage.setItem("bike_id", id);
        let formData = new FormData();
        formData.append("bike_id", id);
        formData.append("created_by", user_id);
        Object.keys(images).forEach((item) => {
          if (images[item] !== null) {
            formData.append("image", images[item]);
          }
        });

        const response1 = await api.post("api/bikes/image-upload/", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        if (response1.status === 201) {
          setSnackMsg(false);
          setOpen(true);
          setLoading(false);
          setRedirect(true);
        } else {
          setLoading(false);
          setSnackMsg("Something wrong happened! Please Try again.");
          setOpen(true);
        }
      } else {
        setLoading(false);
        setSnackMsg("Something wrong happened! Please Try again.");
        setOpen(true);
      }
    }
  };

  // -------------------bike Detail Body Start -----------------------------//
  const handlebikeBody = (e) => {
    const value = e.target.value;
    propertyValidationHelper("bikeBody", value);
    setbikeBody(value);
  };

  const handlebikeEngine = (e) => {
    const value = e.target.value;
    propertyValidationHelper("bikeEngine", value);
    setbikeEngine(value);
  };

  const handleMileage = (e) => {
    const value = e.target.value;
    propertyValidationHelper("bikeMileage", value);
    setbikeMileage(value);
  };

  const handleEngineNumber = (e) => {
    const value = e.target.value;
    // propertyValidationHelper("bikeEngineNumber", value);
    setbikeEngineNumber(value);
  };

  const handleChasisNumber = (e) => {
    const value = e.target.value;
    propertyValidationHelper("bikeChasisNumber", value);
    setbikeChasisNumber(value);
  };

  const handleRegistrationNumber = (e) => {
    const value = e.target.value;
    // propertyValidationHelper("carEngineNumber", value);
    setBikeRegistrationNumber(value);
  };

  const handleSeat = (e) => {
    const value = e.target.value;
    propertyValidationHelper("seat", value);
    setSeat(value);
  };

  const handleFuel = (e) => {
    setbikeFuel(e.target.value);
  };

  const handlebikeFuelEconomy = (e) => {
    setBikeFuelEcononmy(e.target.value);
  };

  const handleTransmission = (e) => {
    setTransmission(e.target.value);
  };

  const handlebikeFuelType = (e) => {
    const value = e.target.value;
    propertyValidationHelper("bikeFuelType", value);
    setbikeFuelType(value);
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

  // ---------------- bike Detail Body End --------------------------//

  const popupFolder = () => {
    inputImage.current.click();
  };

  const handleImage = async (file) => {
    if (file) {
      const listSize = file.length;
      const prevListSize = images.length;
      const newImageLength = listSize - prevListSize;
      for (let i = listSize - 1; i >= prevListSize; i--) {
        const image1 = file[i];
        const imageName = image1.name;
        console.log(image1);
        let reader = new FileReader();
        reader.readAsDataURL(image1);
        reader.onloadend = () => {
          let image = reader.result;
          const newImage = new Image();
          newImage.src = reader.result;
          newImage.onload = () => {
            const elem = document.createElement("canvas");
            elem.width = 1050;
            elem.height = 700;
            const ctx = elem.getContext("2d");
            ctx.drawImage(newImage, 0, 0, 1050, 700);
            ctx.canvas.toBlob(
              (blob) => {
                const file = new File([blob], imageName, {
                  type: blob.type,
                  lastModified: Date.now(),
                });
                let imgBox = 0;
                console.log("converted---", file);
                setImages((prev) => [...prev, file]);
              },
              image1.type,
              1
            );
          };
        };
      }
    }
  };

  const imageDelete = (file) => {
    console.log("deletefile----", file);
    const deletefileName = file.name;
    const indexOfItemToRemove = images.findIndex((item) => item.name == deletefileName);
    if (indexOfItemToRemove === -1) {
      return;
    }
    setImages((list) => [...list.slice(0, indexOfItemToRemove), ...list.slice(indexOfItemToRemove + 1)]);
  };

  const handleVideo = () => {
    if (video < 2) {
      setVideo((prev) => prev + 1);
    }
  };

  // --------------------------------  bikeFeatures CheckBox ----------------------------//
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

  // --------------------------------  bikeFeatures CheckBox --------------------------//

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
    bikeMakers.every((item) => {
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
    bikeModels.every((item) => {
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
    // console.log("name==", modelItem, makerName);
    const slug = `${makerName}-${modelItem.model_name}`;
    let id = localStorage.getItem("bike_id");
    // console.log("slug-id", slug, id);
    history.push({
      pathname: `/bike-details/${slug}`,
      state: { bike_id: parseInt(id) },
      search: `?bike_id=${id}`,
    });
  }

  //------------ Api call -> Choose bike Model ----------------//
  React.useEffect(() => {
    (async () => {
      try {
        let response = await api.get("api/bikes/bike-type/");
        let response1 = await api.get("api/bikes/bike-manufacturer/");
        let response2 = await api.get("api/bikes/body-type/");
        let response4 = await api.get("api/bikes/front-suspension/");
        let response5 = await api.get("api/bikes/rear-suspension/");
        let response6 = await api.get("api/bikes/front-brake/");
        let response7 = await api.get("api/bikes/rear-brake/");
        let response8 = await api.get("api/bikes/color/");
        let response9 = await api.get("api/bikes/gear/");
        let response10 = await api.get("api/bikes/bike-features/");

        setbikeFeatures(response10.data);
        setBikeGear(response9.data);
        setBikeColor(response8.data);
        setBikeRearBrake(response7.data);
        setBikeFrontBrake(response6.data);
        setBikeRearSuspension(response5.data);
        setBikeFrontSuspension(response4.data);
        setBikeDetailBody(response2.data);
        setbikeTypes(response.data);
        setbikeMakers(response1.data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  React.useEffect(() => {
    if (maker !== "") {
      setbikeModels([]);
      const maker_name = findMakerName(maker);
      setLoading(true);

      (async () => {
        try {
          const response = await api.get(`api/bikes/bike-model-list/?maker_name=${maker_name}`);
          if (response.status === 200) {
            setbikeModels(response.data.result);
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

  // -------------- Api Call -> bike Features Start -----------------------//

  // -------------- Api Call -> bike Features End ------------------------//

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
          {/* <Container className={classes.addBike} maxWidth="lg">
            <div className={classes.addBikeText}>ADD A bike</div>
          </Container> */}
        </div>
      </div>
      <Container maxWidth="lg">
        <div className={classes.imageUploadContainer}>
          <Grid container>
            <Grid item xs={12} sm={12} md={8} spacing={2}>
              <p className={classes.paper}>UPLOAD Bike Photo*</p>
              <Box className={classes.imageDiv}>
                <MultiImageUpload onUpload={handleImage} imageDelete={imageDelete} length={images.length} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} className={classes.uploadOptions}>
              <h2 className={classes.paperTitle}>Choose your bike model</h2>
              <Box className={classes.option}>
                <Typography className={classes.optionTitle}>{modelOptions[0].title}</Typography>
                <SimpleSelect
                  name="bike_type"
                  classname={classes.dropdown}
                  icon={true}
                  value={type}
                  error={inputErrors.type}
                  onChange={handleType}
                  buttonname={modelOptions[0].selectText}
                  keys={["type_id", "type_name"]}
                  menulist={bikeTypes}
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
                  menulist={bikeMakers}
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
                    menulist={bikeModels}
                  />
                </Box>
              )}

              <Box className={`${classes.option} ${"inputBoxInner"}`}>
                <Typography className={classes.optionTitle}>{modelOptions[3].title}</Typography>
                <RenderInput
                  value={bikeGrade}
                  name="engine_number"
                  autoComplete="off"
                  onChange={handlebikeGrade}
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

              {type == "2" && (
                <Box className={classes.option}>
                  <Typography className={classes.optionTitle}>{modelOptions[7].title}</Typography>
                  <SimpleSelect
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

              {type != "2" && (
                <Box className={`${classes.option} ${"inputBoxInner"}`}>
                  <Typography className={classes.optionTitle}>{modelOptions[6].title}</Typography>
                  <RenderInput
                    value={bikeChasisNumber}
                    error={inputErrors.bikeChasisNumber && true}
                    helpertext={inputErrors.bikeChasisNumber}
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
              {type == "2" && (
                <Box className={`${classes.option} ${"inputBoxInner"}`}>
                  <Typography className={classes.optionTitle}>{modelOptions[8].title}</Typography>
                  <RenderInput
                    value={bikeRegistrationNumber}
                    // error={inputErrors.bikeRegistrationNumber && true}
                    // helpertext={inputErrors.bikeRegistrationNumber}
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
              <Box className={classes.option}>
                <Typography className={classes.optionTitle}>{modelOptions[5].title}</Typography>
                <SimpleSelect
                  classname={classes.dropdown}
                  icon={true}
                  value={color}
                  onChange={handleBikeColor}
                  buttonname={modelOptions[5].selectText}
                  keys={["color_id", "bike_color"]}
                  menulist={bikeColor}
                />
              </Box>
            </Grid>
          </Grid>
        </div>
      </Container>
      {/* ---------------bike Body Details----------------------------------- */}
      <Container maxWidth="lg">
        <div className={classes.bikeDetailsContainer}>
          <h3 className={classes.bikeDetailsHeading}>BIKE DETAILS</h3>
          <Grid container className={classes.bikeDetails}>
            <div className={classes.bikeDetailsRowNewIssue} style={inputErrors.bikeBody && { marginBottom: "20px" }}>
              <p className={classes.bikeDetailIconDivNew}>
                <img className={classes.bikeDetailIcon} src="assets/bike-upload/body.svg" alt="body" />
                <span>Type*</span>
              </p>
              <SimpleSelect
                classname={classes.bikeBodyDropdown}
                icon={true}
                buttonname="Select Type"
                error={inputErrors.bikeBody}
                value={bikeBody}
                onChange={handlebikeBody}
                keys={["id", "body_name"]}
                menulist={bikeDetailBody}
              />
            </div>
            <div className={classes.bikeDetailsRowNewIssue}>
              <p className={classes.bikeDetailIconDivNew}>
                <img className={classes.bikeDetailIcon} src="assets/bike-upload/engine.svg" alt="engine" />
                <span>Engine (cc)</span>
              </p>
              {/* <SimpleSelect
                classname={classes.bikeBodyDropdown}
                icon={true}
                buttonname="Select Body"
                // error={inputErrors.bikeBody}
                value={bikeEngine}
                onChange={handlebikeEngine}
                keys={["id", "engine-cc"]}
                menulist={bikeEngineContent}
              /> */}
              {/* <RenderInput
                value={bikeEngine}
                error={inputErrors.bikeEngine && true}
                helpertext={inputErrors.bikeEngine}
                label="Enter Engine (cc)"
                name="engine"
                autoComplete="off"
                onChange={handlebikeEngine}
                placeholder="Enter Engine"
                variant="outlined"
                size="small"
                className={classes.newInputItem}
              /> */}
              <RenderInput
                value={bikeEngine}
                error={inputErrors.bikeEngine && true}
                helpertext={inputErrors.bikeEngine}
                // label="Enter Engine (cc)"
                name="engine"
                autoComplete="off"
                onChange={handlebikeEngine}
                placeholder="Enter Engine"
                variant="outlined"
                size="small"
                // className={classes.newInputItem}
                className={`${classes.newInputItem} ${"inputItemInner"} ${"gradeClass"}`}
              />
            </div>
            <div className={classes.bikeDetailsRowNewIssue}>
              <p className={classes.bikeDetailIconDivNew}>
                <img className={classes.bikeDetailIcon} src="assets/bike-upload/engine.svg" alt="engine" />
                <span>Fuel Efficiency</span>
              </p>
              <RenderInput
                value={bikeFuelEconomy}
                // error={inputErrors.bikeEngine && true}
                // helpertext={inputErrors.bikeEngine}
                // label="Enter Engine (cc)"
                name="economy"
                autoComplete="off"
                onChange={handlebikeFuelEconomy}
                placeholder="Enter Economy"
                variant="outlined"
                size="small"
                // className={classes.newInputItem}
                className={`${classes.newInputItem} ${"inputItemInner"} ${"gradeClass"}`}
              />
            </div>
            {/* <div className={classes.bikeDetailsRowNewIssue}>
              <p className={classes.bikeDetailIconDivNew}>
                <img
                  className={classes.bikeDetailIcon}
                  src="assets/bike-upload/wheel.svg"
                />
                <span>Drive</span>
              </p>
              <SimpleSelect
                classname={classes.bikeBodyDropdown}
                icon={true}
                buttonname="Select Drive"
                value={drive}
                onChange={handleDriveDropdown}
                keys={["option", "option"]}
                menulist={driveList}
              />
            </div> */}
            <div className={classes.bikeDetailsRowNewIssue}>
              <p className={classes.bikeDetailIconDivNew}>
                <img className={classes.bikeDetailIcon} src="assets/bike-upload/mileage.svg" alt="mileage" />
                <span>Mileage (km)</span>
              </p>
              <RenderInput
                value={bikeMileage}
                error={inputErrors.bikeMileage && true}
                helpertext={inputErrors.bikeMileage}
                // label="Enter Mileage"
                name="mileage"
                autoComplete="off"
                onChange={handleMileage}
                placeholder="Enter Mileage"
                variant="outlined"
                size="small"
                // className={classes.newInputItem}
                className={`${classes.newInputItem} ${"inputItemInner"} ${"gradeClass"}`}
              />
            </div>
            <div className={classes.bikeDetailsRowNewIssue}>
              <p className={classes.bikeDetailIconDivNew}>
                <img className={classes.bikeDetailIcon} src="assets/bike-upload/seat2.svg" alt="seats" />
                <span>Front Suspension</span>
              </p>
              <SimpleSelect
                classname={classes.bikeBodyDropdown}
                icon={true}
                buttonname="Select Suspension"
                // error={inputErrors.bikeBody}
                value={frontSuspension}
                onChange={handleFrontSuspension}
                keys={["suspension_id", "front_suspension"]}
                menulist={bikeFrontSuspension}
              />
            </div>
            {/* <div className={classes.bikeDetailsRowNewIssue}>
              <p className={classes.bikeDetailIconDivNew}>
                <img
                  className={classes.bikeDetailIcon}
                  src="assets/bike-upload/shifter.svg"
                />
                <span>Transmission</span>
              </p>
              <SimpleSelect
                classname={classes.bikeBodyDropdown}
                icon={true}
                buttonname="Select Type"
                value={transmission}
                onChange={handleTransmission}
                keys={["id", "title"]}
                menulist={bikeTransmission}
              />
            </div> */}

            {/* <div className={classes.bikeDetailsRowNewIssue}>
              <p className={classes.bikeDetailIconDivNew}>
                <img
                  className={classes.bikeDetailIcon}
                  src="assets/bike-upload/gas-station.svg"
                />
                <span>Fuel Type*</span>
              </p>
              <SimpleSelect
                classname={classes.bikeBodyDropdown}
                icon={true}
                buttonname="Select Fuel Type"
                value={bikeFuelType}
                error={inputErrors.bikeFuelType}
                third={true}
                onChange={handlebikeFuelType}
                keys={["fuel_id", "fuel_type"]}
                menulist={bikeDetailFuelType}
              />
            </div> */}

            <div className={classes.bikeDetailsRowNewIssue}>
              <p className={classes.bikeDetailIconDivNew}>
                <img className={classes.bikeDetailIcon} src="assets/bike-upload/interior.svg" alt="interior" />
                <span>Rear Suspension</span>
              </p>
              <SimpleSelect
                classname={classes.bikeBodyDropdown}
                icon={true}
                buttonname="Select Suspension"
                value={rearSuspension}
                onChange={handleRearSuspension}
                keys={["suspension_id", "rear_suspension"]}
                menulist={bikeRearSuspension}
              />
            </div>
            <div className={classes.bikeDetailsRowNewIssue}>
              <p className={classes.bikeDetailIconDivNew}>
                <img className={classes.bikeDetailIcon} src="assets/bike-upload/interior.svg" alt="interior" />
                <span>Front Brake</span>
              </p>
              <SimpleSelect
                classname={classes.bikeBodyDropdown}
                icon={true}
                buttonname="Select Brake"
                value={frontBrake}
                onChange={handleFrontBrake}
                keys={["brake_id", "front_brake"]}
                menulist={bikeFrontBrake}
              />
            </div>
            <div className={classes.bikeDetailsRowNewIssue}>
              <p className={classes.bikeDetailIconDivNew}>
                <img className={classes.bikeDetailIcon} src="assets/bike-upload/interior.svg" alt="interior" />
                <span>Rear Brake</span>
              </p>
              <SimpleSelect
                classname={classes.bikeBodyDropdown}
                icon={true}
                buttonname="Select Brake"
                value={rearBrake}
                onChange={handleRearBrake}
                keys={["brake_id", "rear_brake"]}
                menulist={bikeRearBrake}
              />
            </div>
            <div className={classes.bikeDetailsRowNewIssue}>
              <p className={classes.bikeDetailIconDivNew}>
                <img className={classes.bikeDetailIcon} src="assets/bike-upload/interior.svg" alt="interior" />
                <span>No. of gear</span>
              </p>
              <SimpleSelect
                classname={classes.bikeBodyDropdown}
                icon={true}
                buttonname="Select Gear"
                value={gear}
                onChange={handleGear}
                keys={["gear_id", "gear"]}
                menulist={bikeGear}
              />
            </div>
          </Grid>
        </div>
      </Container>
      {/* ------------------------ bike Features ---------------------------------------- */}
      <Container maxWidth="lg">
        <div className={classes.bikeFeatureContainer}>
          <h3 className={classes.bikeFeaturesHeading}>SELECT YOUR BIKE FEATURES</h3>
          <div className={classes.bikeFeaturesMain}>
            {bikeFeatures.map((item, index) => (
              <div key={index} className={classes.bikeFeatureIconDiv}>
                <span className={classes.bikeDetailIcon}>
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
      {/* -------------------------- bike Features End ----------------------------- */}
      {/* -------------------------- bike Asking Price Start----------------------------- */}
      <Container maxWidth="lg">
        <div className={classes.bikePriceContainer}>
          <h3 className={classes.bikeFeaturesHeading}>SET YOUR ASKING PRICE</h3>
          <p className={classes.bikePriceText}>
            Please kindly set the asking price and final price for your bike.
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
            {/* <div className={classes.equalWidth}>
              <label htmlFor="custom_price" className={classes.priceInputLabel}>
                Call For Price
              </label>
              <Select
                defaultValue={"no"}
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={askingPrice.custom_price}
                onChange={handleAskingPrice}
                name="custom_price"
                className={classes.priceInput}
              >
                <MenuItem value={"no"}>No</MenuItem>
                <MenuItem value={"yes"}>Yes</MenuItem>
              </Select>
            </div> */}
            <div className={classes.equalWidth}>
              <div className={classes.videoLinkDiv}>
                <label htmlFor="description" className={classes.priceInputLabel}>
                  Add description
                </label>{" "}
                <div className={classes.ckEditorDiv}></div>
                <div className={classes.linkInputDivRight}>
                  <CKEditor name="description" editor={ClassicEditor} onChange={handleEditor} />
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
      {/* ---------------------------- bike Asking Price End --------------------------- */}
    </div>
  );
};

export default BikeUpload;
