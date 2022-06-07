import React from "react";
import PropTypes from "prop-types";
import { api } from "@configs/configs";
import MuiAlert from "@material-ui/lab/Alert";
// import uniqueCarName from "../../utils/uniqueCarName";
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
import styled from "styled-components";
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
    marginBottom: "-1px",
    color: "#fff",
    fontSize: "23px",
    fontWeight: "700",
    backgroundImage: `url(${BgFirst})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minWidth: "275px",
    textTransform: "capitalize",
    opacity: "1",
    zIndex: "11",
    fontFamily: '"Open Sans"',
    "&.Mui-selected": {
      backgroundImage: `url(${SelectedBg})`,
    },
    [theme.breakpoints.down("sm")]: {
      minWidth: "245px",
      minHeight: "48px",
      fontSize: "16px",
      marginTop: "2px",
      marginBottom: "-1px",
    },
    [theme.breakpoints.down("xs")]: {
      minWidth: "33.33%",
      fontSize: "16px",
      backgroundImage: "none",
      // backgroundColor: "#b3b3b3",
      "&.Mui-selected": {
        // backgroundImage: "none",
        // backgroundColor: "#da5320",
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
    [theme.breakpoints.down("sm")]: {
      minWidth: "300px",
      minHeight: "48px",
      fontSize: "16px",
      marginLeft: "-66px",
      marginTop: "2px",
      marginBottom: "-1px",
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
    [theme.breakpoints.down("sm")]: {
      minWidth: "270px",
      minHeight: "48px",
      fontSize: "18px",
      marginLeft: "-60px",
      marginTop: "2px",
      marginBottom: "-1px",
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
function BannerSearch(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [bikeMakers, setBikeMakers] = React.useState([]);
  const [bikeModels, setBikeModels] = React.useState([]);
  const [bikeData, setBikeData] = React.useState([]);
  const [count, setCount] = React.useState(0);

  const [maker, setMaker] = React.useState("");
  const [model, setModel] = React.useState("");
  const [price, setPrice] = React.useState("");

  const [redirect, setRedirect] = React.useState(false);
  const [snackMsg, setSnackMsg] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const [bikeTypes] = React.useState(["New", "Used"]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [bikePrices] = React.useState([
    { id: 1, price: 15000, priceShow: "15,000 - 0.99 Lacs" },
    { id: 2, price: 100000, priceShow: "1 Lac - 1.99 Lacs" },
    { id: 3, price: 200000, priceShow: "2 Lacs - 3.99 Lacs" },
    { id: 4, price: 400000, priceShow: "4 Lacs - 5.99 Lacs" },
    { id: 5, price: 600000, priceShow: "Above 6 Lacs" },
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

  // const findMakerName = (cars) => {
  //   let m_name = "";
  //   cars.every((item) => {
  //     if (item.maker_id === maker) {
  //       m_name = item.maker_name;
  //       return false;
  //     }
  //     return true;
  //   });

  //   return m_name;
  // };

  // const findModelName = (cars) => {
  //   let m_name = "";
  //   cars.every((item) => {
  //     if (item.model_id === model) {
  //       m_name = item.model_name;
  //       return false;
  //     }
  //     return true;
  //   });

  //   return m_name;
  // };

  //------------------------ Mobile Manufacturer --------------------//
  React.useEffect(() => {
    (async () => {
      try {
        let response1 = await api.get("api/bikes/bike-manufacturer/");

        if (response1.status === 200) {
          // response1.data.sort((a, b) => (a.maker_name > b.maker_name ? 1 : -1));
          setBikeMakers(response1.data);
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
      setBikeModels([]);
      setLoading(true);

      (async () => {
        try {
          const response = await api.get(
            `api/bikes/bike-model-list/?maker_name=${maker}`
          );

          if (response.status === 200) {
            // response.data.result.sort((a, b) =>
            //   a.model_name > b.model_name ? 1 : -1
            // );
            setBikeModels(response.data.result);
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

  //-------------------------------- Car Manufacturer ------------------------///
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
    const queryPrice = price !== "" ? bikePrices[price - 1].price : "";
    const bikeType = bikeTypes[value];

    (async () => {
      if (maker !== "" || queryPrice !== "") {
        try {
          // console.log(bikeType, maker, model, queryPrice);
          const response = await api.get(
            `api/bikes/bike-keyword-search/?bike_type=${bikeType}&&maker_name=${maker}&&model_name=${model}&&price=${queryPrice}`
          );
          if (response.status === 200) {
            if (response.data.count >= 1) {
              console.log("bike-data", response.data);
              setBikeData(response.data.results);
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

  if (redirect) {
    history.push({
      pathname: "/searched-bike-list",
      state: { bikeData: bikeData, count: count },
    });
  }

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
          className={`${classes.newButton} ${"newBtn"}`}
          label="New Bikes"
          {...a11yProps(0)}
        />
        {/* <Tab
          className={`${classes.reconButton} ${"reconditionBtn"}`}
          label="Reconditioned"
          {...a11yProps(1)}
        /> */}
        <Tab
          className={`${classes.usedButton} ${"usedBtn"}`}
          label="Used Bikes"
          {...a11yProps(1)}
        />
      </Tabs>

      <TabPanel value={value} index={0}>
        <SearchOptionsList>
          <ListItem>
            <Dropdown
              buttonname="Select"
              buttonname2="Brand"
              value={maker}
              onChange={handleBrand}
              keys={["maker_name", "maker_name"]}
              menulist={bikeMakers}
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
                buttonname="Select"
                buttonname2="Model"
                onChange={handleModel}
                value={model}
                keys={["model_name", "model_name"]}
                menulist={bikeModels}
              />
            )}
          </ListItem>
          <ListItem>
            <Dropdown
              buttonname="Select"
              buttonname2="Price"
              value={price}
              onChange={handlePrice}
              keys={["id", "priceShow"]}
              menulist={bikePrices}
            />
          </ListItem>
          <ListItem>
            <Button onClick={handleSearch} endIcon={<SearchIcon />}>
              Find Bikes
            </Button>
          </ListItem>
        </SearchOptionsList>
      </TabPanel>
      {/* <TabPanel value={value} index={1}>
        <SearchOptionsList>
          <ListItem>
            <Dropdown
              buttonname="Select"
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
                buttonname="Select"
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
              buttonname="Select"
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
      </TabPanel> */}
      <TabPanel value={value} index={1}>
        <SearchOptionsList>
          <ListItem>
            <Dropdown
              buttonname="Select"
              buttonname2="Brand"
              value={maker}
              onChange={handleBrand}
              keys={["maker_name", "maker_name"]}
              menulist={bikeMakers}
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
                buttonname="Select"
                buttonname2="Model"
                onChange={handleModel}
                value={model}
                keys={["model_name", "model_name"]}
                menulist={bikeModels}
              />
            )}
          </ListItem>
          <ListItem>
            <Dropdown
              buttonname="Select"
              buttonname2="Price"
              value={price}
              onChange={handlePrice}
              keys={["id", "priceShow"]}
              menulist={bikePrices}
            />
          </ListItem>
          <ListItem>
            <Button onClick={handleSearch} endIcon={<SearchIcon />}>
              Find Bikes
            </Button>
          </ListItem>
        </SearchOptionsList>
      </TabPanel>
    </div>
  );
}
const SearchOptionsList = styled.div`
  position: relative;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #fff;
  box-shadow: 0px 3px 3.5px rgba(0, 0, 0, 0.16);
  border-radius: 5px;
  overflow: hidden;
  li {
    padding: 0;
    width: 27%;
    text-align: center;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 0;
    transition: all ease-in-out 0.5s;
    .MuiFormControl-root {
      width: 100%;
      height: 100%;
      .MuiSelect-icon {
        right: 50%;
        margin-right: -105px;
      }
    }
    &:first-child {
      &:hover {
        transition: all ease-in-out 0.5s;
        &:after {
          width: calc(100% + 20px);
        }
      }
    }
    &:hover {
      &:after {
        position: absolute;
        content: "";
        right: 0px;
        top: 0;
        width: 100%;
        height: 100%;
        background: #f9dbc6;
        z-index: -1;
        transform: skewX(-30deg);
      }
    }
    &:nth-child(-n + 2) {
      &:before {
        position: absolute;
        content: "";
        right: 0px;
        height: calc(100% + 12px);
        width: 1px;
        background: #c5c5c5;
        transform: rotate(30deg);
      }
    }
    &:last-child {
      width: calc(19% + 30px);
      margin-right: -30px;
      background: #ea6431;
      transform: skewX(-30deg);
      overflow: hidden;
      transition: all ease-in-out 0.5s;
      &:hover {
        background: #da5320;
        transition: all ease-in-out 0.5s;
        &:after {
          display: none;
        }
      }
      button {
        transform: skewX(30deg);
        height: 79px;
        width: 100%;
        margin-left: -40px;
        span {
          color: #fff;
        }
      }
    }
    @media (max-width: 599px) {
      &:hover {
        &:after {
          transform: rotate(0deg);
        }
      }
    }
  }
  span {
    font-size: 19px;
    letter-spacing: 0px;
    line-height: 12px;
    color: #000000;
    font-weight: 700;
    font-family: "Open Sans", sans-serif;
    @media (max-width: 992px) {
      font-size: 16px;
    }
  }
  strong {
    font-size: 32px;
    font-weight: 700;
    font-family: "Open Sans", sans-serif;
    @media (max-width: 992px) {
      font-size: 24px;
    }
    @media (max-width: 767px) {
      font-size: 16px;
    }
  }
  @media (max-width: 1023px) {
    li {
      .MuiFormControl-root {
        .MuiSelect-icon {
          margin-right: -65px;
        }
      }
    }
  }
  @media (max-width: 767px) {
    border-radius: 0;
    li {
      width: 28%;
      border-right: 1px solid #ccc;
      .MuiFormControl-root {
        .MuiSelect-icon {
          margin-right: -47px;
        }
      }
      &:before {
        display: none;
      }
      &:last-child {
        width: 10%;
        min-width: 70px;
        margin-right: 0;
        transform: skewX(0deg);
        button {
          height: 50px;
          margin-left: 0px;
          transform: skewX(0deg);
        }
        b {
          display: none;
        }
        span {
          margin: 0;
          .MuiSvgIcon-root {
            font-size: 35px;
          }
        }
      }
      .MuiSelect-selectMenu {
        padding: 15px 0px;
      }
      &:nth-child(3),
      &:last-child {
        border-right: 0px solid #ccc;
      }
    }
  }
`;
export default BannerSearch;
