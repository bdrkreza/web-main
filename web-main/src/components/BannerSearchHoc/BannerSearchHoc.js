import React from "react";
import PropTypes from "prop-types";
import { api } from "@configs/configs";
import MuiAlert from "@material-ui/lab/Alert";
import {
  makeStyles,
  ListItem,
  Button,
  Tabs,
  Tab,
  Snackbar,
  Fade,
  CircularProgress,
} from "@material-ui/core";
import Dropdown from "../Dropdown/Dropdown";
// import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import SelectedBg from "../../assets/selected.svg";
import BgFirst from "../../assets/firstbg.svg";
import BgSecond from "../../assets/middlebg.svg";
import Bgthird from "../../assets/whitebg.svg";
import { useHistory } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0px auto",
    maxWidth: "1232px",
    borderRadius: "5px",
    fontFamily: '"Open Sans"',
    "& .PrivateTabIndicator-root-25": {
      backgroundColor: "transparent !important",
    },
  },
  newButton: {
    color: "#fff",
    fontSize: "23px",
    fontWeight: "700",
    backgroundImage: `url(${BgFirst})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minWidth: "270px",
    textTransform: "capitalize",
    opacity: "1",
    zIndex: "11",
    fontFamily: '"Open Sans"',
    "&.Mui-selected": {
      backgroundImage: `url(${SelectedBg})`,
    },
    [theme.breakpoints.down("sm")]: {
      minWidth: "250px",
    },
    [theme.breakpoints.down("xs")]: {
      minWidth: "33.33%",
      fontSize: "12px",
      backgroundImage: "none",
      backgroundColor: "#b3b3b3",
      "&.Mui-selected": {
        backgroundImage: "none",
        backgroundColor: "#da5320",
      },
    },
  },
  reconButton: {
    color: "#fff",
    fontSize: "23px",
    fontWeight: "700",
    backgroundImage: `url(${BgSecond})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minWidth: "410px",
    marginLeft: "-110px",
    textTransform: "capitalize",
    opacity: "1",
    zIndex: "10",
    paddingLeft: "50px",
    fontFamily: '"Open Sans"',
    "&.Mui-selected": {
      backgroundImage: `url(${SelectedBg})`,
    },
    [theme.breakpoints.down("xs")]: {
      minWidth: "25%",
      width: "33.33%",
      fontSize: "12px",
      backgroundImage: "none",
      backgroundColor: "#a5a5a5",
      marginLeft: "0px",
      paddingLeft: "0px",
      paddingRight: "0px",
      textAlign: "center",
      "&.Mui-selected": {
        backgroundImage: "none",
        backgroundColor: "#da5320",
      },
    },
  },
  usedButton: {
    color: "#fff",
    fontSize: "23px",
    fontWeight: "700",
    backgroundImage: `url(${Bgthird})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minWidth: "370px",
    marginLeft: "-115px",
    textTransform: "capitalize",
    opacity: "1",
    zIndex: "9",
    backgroundPosition: "center 1px",
    paddingLeft: "65px",
    fontFamily: '"Open Sans"',
    "&.Mui-selected": {
      backgroundImage: `url(${SelectedBg})`,
      color: "#fff",
    },
    [theme.breakpoints.down("xs")]: {
      minWidth: "25%",
      width: "33.33%",
      marginLeft: "0px",
      fontSize: "12px",
      textAlign: "center",
      paddingLeft: "0px",
      paddingRight: "0px",
      backgroundImage: "none",
      backgroundColor: "#b3b3b3",
      borderRadius: "0 5px 0 0",
      "&.Mui-selected": {
        backgroundImage: "none",
        backgroundColor: "#da5320",
      },
    },
  },
  loader: {
    display: "flex",
    justifyContent: "center",
  },
}));

const BannerSearchHoc = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [carMakers, setCarMakers] = React.useState([]);
  const [carModels, setCarModels] = React.useState([]);
  const [carData, setCarData] = React.useState([]);
  const [count, setCount] = React.useState(0);

  const [maker, setMaker] = React.useState("");
  const [model, setModel] = React.useState("");
  const [price, setPrice] = React.useState("");

  const [newState, setNewState] = React.useState(false);
  const [used, setUsed] = React.useState(false);
  const [recond, setRecond] = React.useState(false);

  const [redirect, setRedirect] = React.useState(false);
  const [snackMsg, setSnackMsg] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const [carTypes] = React.useState(["New", "Reconditioned", "Used"]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [carPrices] = React.useState([
    { id: 1, price: 1000000, priceShow: "1 - 10 Lacs" },
    { id: 2, price: 2000000, priceShow: "10 - 20 Lacs" },
    { id: 3, price: 3000000, priceShow: "20 - 30 Lacs" },
    { id: 4, price: 4000000, priceShow: "30 - 40 Lacs" },
    { id: 5, price: 5000000, priceShow: "40 - 50 Lacs" },
    { id: 6, price: 7500000, priceShow: "50 - 75 Lacs" },
    { id: 7, price: 10000000, priceShow: "75 - 100 Lacs" },
    { id: 8, price: 500000000, priceShow: "Above 1 Crore" },
  ]);

  const [state] = React.useState({
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal } = state;

  const handleModel = (e) => {
    setModel(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleBrand = (e) => {
    setMaker(e.target.value);
  };

  React.useEffect(() => {
    (async () => {
      try {
        let response1 = await api.get("api/cars/car-manufacturer/");

        if (response1.status === 200) {
          response1.data.sort((a, b) => (a.maker_name > b.maker_name ? 1 : -1));
          setCarMakers(response1.data);
        } else {
          setSnackMsg("Something went wrong!");
          setOpen(true);
        }
      } catch (err) {
        setSnackMsg("Something went wrong!");
        setOpen(true);
      }
    })();
  }, []);

  React.useEffect(() => {
    if (maker !== "") {
      setCarModels([]);
      setLoading(true);

      (async () => {
        try {
          const response = await api.get(
            `api/cars/model-list/?maker_name=${maker}`
          );

          if (response.status === 200) {
            response.data.result.sort((a, b) =>
              a.model_name > b.model_name ? 1 : -1
            );
            setCarModels(response.data.result);
            setLoading(false);
          } else {
            setLoading(false);
            setSnackMsg("Search Alert: Model not available for this brand!");
            setOpen(true);
          }
        } catch (err) {
          setLoading(false);
          setSnackMsg("Something went wrong!");
          setOpen(true);
        }
      })();
    }
  }, [maker]);

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleSearch = (e) => {
    e.preventDefault();
    const queryPrice = price !== "" ? carPrices[price - 1].price : "";
    const carType =
      carTypes[
        props.flag === "New"
          ? 0
          : props.flag === "Reconditioned"
          ? 1
          : props.flag === "Used"
          ? 2
          : value
      ];

    // console.log("from and cartype==", props.from, carType);
    (async () => {
      if (maker !== "" || queryPrice !== "") {
        try {
          const response = await api.get(
            `api/cars/keyword-search/?car_type=${carType}&&maker_name=${maker}&&model_name=${model}&&price=${queryPrice}`
          );
          if (response.status === 200) {
            if (response.data.count >= 1) {
              setCarData(response.data.results);
              setCount(response.data.count);
              setRedirect(true);
            } else {
              setSnackMsg("No listings found. Please try another Search!");
              setOpen(true);
            }
          } else {
            setSnackMsg("Something wrong happened. Please Try again!");
            setOpen(true);
          }
        } catch (err) {
          setSnackMsg("Something wrong happened. Please Try again!");
          setOpen(true);
        }
      } else {
        setSnackMsg("Please fill out at least one field!");
        setOpen(true);
      }
    })();
  };

  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        key={vertical + horizontal}
      >
        <Alert onClose={handleClose} severity="warning">
          {snackMsg}
        </Alert>
      </Snackbar>
      <Tabs
        className={classes.bannerSearch}
        value={value}
        onChange={handleChange}
        aria-label="Banner Search"
        TabIndicatorProps={{
          style: {
            display: "none",
          },
        }}
      >
        <Tab
          className={`${classes.usedButton} ${"usedBtn"}`}
          label="Used"
          {...a11yProps(0)}
        />
      </Tabs>

      <TabPanel value={value} index={0}>
        <SearchOptionsList>
          <ListItem>
            <Dropdown
              buttonname="Select A"
              buttonname2="Brand"
              value={maker}
              onChange={handleBrand}
              keys={["maker_name", "maker_name"]}
              menulist={carMakers}
            />
          </ListItem>
          <ListItem>
            {loading ? (
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
              <Dropdown
                buttonname="Select A"
                buttonname2="Model"
                onChange={handleModel}
                value={model}
                keys={["model_name", "model_name"]}
                menulist={carModels}
              />
            )}
          </ListItem>
          <ListItem>
            <Dropdown
              buttonname="Select A"
              buttonname2="Price"
              value={price}
              onChange={handlePrice}
              keys={["id", "priceShow"]}
              menulist={carPrices}
            />
          </ListItem>
          <ListItem>
            <Button onClick={handleSearch} endIcon={<SearchIcon />}>
              Find Cars
            </Button>
          </ListItem>
        </SearchOptionsList>
      </TabPanel>
    </div>
  );
};

export default BannerSearchHoc;
