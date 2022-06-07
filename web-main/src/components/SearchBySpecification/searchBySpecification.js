import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import _ from "lodash";
import { Container, Checkbox, Button, FormControlLabel } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
// import styled from "styled-components";
// import {Link} from "react-router-dom";
import { api } from "@configs/configs";
import SectionTitle from "../../components/SectionTitle";
import { ToastContainer, toast } from "react-toastify";
import { useSessionStorage } from "react-use";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    padding: "10px 30px",
    fontSize: "20px",
    backgroundColor: "#EE6435",
    color: "#fff",
    position: "absolute",
    fontWeight: "600",
    bottom: "-80px",
    right: "0",
    width: "220px",
    marginRight: "-41px",
    border: "2px solid #fff",
    fontFamily: "'Open Sans', sans-serif",
    borderRadius: "35px",
    [theme.breakpoints.down("sm")]: {
      width: "160px",
      bottom: "-76px",
      padding: "5px 30px",
      fontSize: "15px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "140px",
      right: "30px",
    },

    "&:hover": {
      backgroundColor: "#da5320",
      transition: "all ease-in-out 0.25s",
    },
  },
  searchButton: {
    position: "relative",
    top: "-54px",
    width: "87%",
    display: "flex",
    justifyContent: "flex-end",
  },
  searchBySpecification: {
    height: "auto",
    filter: "drop-shadow(0px 3px 3.5px rgba(0,0,0,0.16))",
    backgroundColor: "#efefef",
    paddingTop: "50px",
    paddingBottom: "58px",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "10px",
      paddingBottom: "10px",
    },
  },
  specContainer: {
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: "32px",
    lineHeight: "32px",
    color: "#000000",
    fontWeight: "700",
    paddingLeft: "10px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
    },
  },
  innerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    [theme.breakpoints.down("md")]: {
      height: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  specifyLink: {
    textDecoration: "none",
    fontSize: "15px",
    color: "#000",
    fontWeight: "400",
    display: "block",
    padding: "0 0 0 15px",
    transition: "all ease-in-out 0.4s",
    "& .MuiCheckbox-colorSecondary.Mui-checked": {
      color: "#f06425",
    },

    "&:hover": {
      color: "#f06424",
      transition: "all ease-in-out 0.4s",
    },
    "& span": {
      fontSize: "15px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
      },
    },
  },

  specDiv: {
    width: "25%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    padding: "50px 35px 50px",
    marginTop: "50px",
    background: "#fff",
    boxShadow: "0px 1px 0px rgba(0,0,0,0.16)",
    "&:first-child": {
      borderRadius: "5px 0 0 5px",
    },
    "&:last-child": {
      borderRadius: "0 5px 5px 0",
    },
    "&:not(:first-child)": {
      "&:before": {
        position: "absolute",
        content: "''",
        top: "15%",
        left: "0",
        width: "1px",
        height: "70%",
        backgroundColor: "#dfdfdf",
      },
    },
    [theme.breakpoints.down("sm")]: {
      padding: "20px 0px 10px 20px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "50%",
      marginBottom: "5px",
      padding: "20px 0px 10px 0px",
    },
  },
  tag: {
    width: "75%",
    borderRadius: "5px",
    boxShadow: "0px 1px 1.5px rgba(0,0,0,0.16)",
    backgroundColor: "#ffffff",
    fontSize: "12px",
    fontWeight: "600",
    fontFamily: "Open Sans",
    textAlign: "left",
    padding: "10px 8px 10px 15px",
    position: "absolute",
    top: "-30px",
    [theme.breakpoints.down("xs")]: {
      width: "90%",
      left: "7px",
    },
    "& span": {
      color: "#333",
    },
    "& p": {
      color: "#f06424",
      margin: "0",
      fontSize: "20px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "14px",
      },
    },
    [theme.breakpoints.down("sm")]: {
      padding: "10px 8px 10px 10px",
    },
  },
}));

const toastCss = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  zIndex: 5,
  progress: undefined,
};

export default function SearchBySpecification(props) {
  const [searchState, setSearchState] = useSessionStorage("search-state", {});
  const classes = useStyles();
  let message = "";
  const notify = () => toast.error(message, toastCss);
  let count = false;
  const history = useHistory();
  const [price, setPrice] = React.useState([
    { id: 1, low: 100000, high: 1000000 },
    { id: 2, low: 1000000, high: 2000000 },
    { id: 3, low: 2000000, high: 3000000 },
    { id: 4, low: 3000000, high: 4000000 },
    { id: 5, low: 4000000, high: 5000000 },
    { id: 6, low: 5000000, high: 500000000 },
  ]);
  const [mileage, setMileage] = React.useState([
    { id: 7, low: 1, high: 10000 },
    { id: 8, low: 10000, high: 30000 },
    { id: 9, low: 30000, high: 50000 },
    { id: 10, low: 50000, high: 100000 },
    { id: 11, low: 100000, high: 150000 },
    { id: 12, low: 150000, high: 999999999999 },
  ]);
  const [seat, setSeat] = React.useState([
    { id: 13, low: 2 },
    { id: 14, low: 4 },
    { id: 15, low: 5 },
    { id: 16, low: 7 },
    { id: 17, low: 8 },
    { id: 18, low: 10 },
  ]);
  const [engine, setEngine] = React.useState([
    { id: 19, low: 1, high: 800 },
    { id: 20, low: 1000, high: 1499 },
    { id: 21, low: 1500, high: 1999 },
    { id: 22, low: 2000, high: 2499 },
    { id: 23, low: 2500, high: 2999 },
    { id: 24, low: 3000, high: 999999999999 },
  ]);

  const [queryPrice, setQueryPrice] = React.useState([]);
  const [queryMileage, setQueryMileage] = React.useState([]);
  const [querySeat, setQuerySeat] = React.useState([]);
  const [queryEngine, setQueryEngine] = React.useState([]);

  //search by spec - pagination

  const handlePrice = (e) => {
    const { name } = e.target;
    const id = `${price[name].id}`;
    const index = _.findIndex(queryPrice, function (o) {
      return o.id == id;
    });

    if (index !== -1) {
      const newBox = [...queryPrice];
      newBox.splice(index, 1);
      setQueryPrice(newBox);
    } else {
      setQueryPrice([...queryPrice, price[name]]);
    }
  };

  const handleMileage = (e) => {
    const { name } = e.target;
    const id = `${mileage[name].id}`;
    const index = _.findIndex(queryMileage, function (o) {
      return o.id == id;
    });
    if (index !== -1) {
      const newBox = [...queryMileage];
      newBox.splice(index, 1);
      setQueryMileage(newBox);
    } else {
      setQueryMileage([...queryMileage, mileage[name]]);
    }
  };

  const handleSeat = (e) => {
    const { name } = e.target;
    const id = `${seat[name].id}`;
    const index = _.findIndex(querySeat, function (o) {
      return o.id == id;
    });
    if (index !== -1) {
      const newBox = [...querySeat];
      newBox.splice(index, 1);
      setQuerySeat(newBox);
    } else {
      setQuerySeat([...querySeat, seat[name]]);
    }
  };

  const handleEngine = (e) => {
    const { name } = e.target;
    const id = `${engine[name].id}`;
    const index = _.findIndex(queryEngine, function (o) {
      return o.id == id;
    });
    if (index !== -1) {
      const newBox = [...queryEngine];
      newBox.splice(index, 1);
      setQueryEngine(newBox);
    } else {
      setQueryEngine([...queryEngine, engine[name]]);
    }
  };

  let priceLow = "";
  let priceHigh = "";
  let mileageLow = "";
  let mileageHigh = "";
  let capacityLow = "";
  let capacityHigh = "";
  let seating = "";

  const joinFunction = (name) => {
    if (name.length > 0) return name.join(",");
    else {
      return "";
    }
  };

  const querySet = () => {
    const queryArr = [
      "price_from",
      "price_to",
      "mileage_from",
      "mileage_to",
      "capacity_from",
      "capacity_to",
      "seating",
    ];

    const simpleArr = (arrName) => {
      if (arrName.length > 0) count = true;
      const arr1 = [];
      const arr2 = [];
      for (let i = 0; i < arrName.length; i++) {
        arr1.push(arrName[i].low);
        arr2.push(arrName[i].high);
      }

      return [arr1, arr2];
    };

    const simpleArr1 = (arrName) => {
      if (arrName.length > 0) count = true;
      const arr1 = [];

      for (let i = 0; i < arrName.length; i++) {
        arr1.push(arrName[i].low);
      }

      return arr1;
    };

    const price = simpleArr(queryPrice);
    priceLow = price[0];
    priceHigh = price[1];
    const mileage = simpleArr(queryMileage);
    mileageLow = mileage[0];
    mileageHigh = mileage[1];
    const capacity = simpleArr(queryEngine);
    capacityLow = capacity[0];
    capacityHigh = capacity[1];
    seating = simpleArr1(querySeat);

    return (
      queryArr[0] +
      "=" +
      joinFunction(priceLow) +
      "&" +
      queryArr[1] +
      "=" +
      joinFunction(priceHigh) +
      "&" +
      queryArr[2] +
      "=" +
      joinFunction(mileageLow) +
      "&" +
      queryArr[3] +
      "=" +
      joinFunction(mileageHigh) +
      "&" +
      queryArr[4] +
      "=" +
      joinFunction(capacityLow) +
      "&" +
      queryArr[5] +
      "=" +
      joinFunction(capacityHigh) +
      "&" +
      queryArr[6] +
      "=" +
      joinFunction(seating)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const queryParam = querySet();
    if (count) {
      try {
        const { data } = await api.get(`api/cars/search-by-specifications-new/?${queryParam}`);
        if (data.count > 0) {
          setSearchState({
            carData: data.results,
            count: data.count,
            specification: true,
            priceLow: joinFunction(priceLow),
            priceHigh: joinFunction(priceHigh),
            mileageLow: joinFunction(mileageLow),
            mileageHigh: joinFunction(mileageHigh),
            capacityLow: joinFunction(capacityLow),
            capacityHigh: joinFunction(capacityHigh),
            seating: joinFunction(seating),
          })
          history.push({
            pathname: "/searched-car-list",
            state: {
              carData: data.results,
              count: data.count,
              specification: true,
              priceLow: joinFunction(priceLow),
              priceHigh: joinFunction(priceHigh),
              mileageLow: joinFunction(mileageLow),
              mileageHigh: joinFunction(mileageHigh),
              capacityLow: joinFunction(capacityLow),
              capacityHigh: joinFunction(capacityHigh),
              seating: joinFunction(seating),
            },
          });
        } else {
          message = "No listings found!";
          notify();
        }
      } catch (err) {
        message = "Something went wrong!";
        notify();
      }
    } else {
      message = "Please Select Some Field!";
      notify();
    }
  };

  const lang = sessionStorage.getItem("lang");

  return (
    <div className={classes.searchBySpecification}>
      <ToastContainer />
      <Container maxWidth="lg" className={classes.specContainer}>
        <SectionTitle
          title1={
            props.langVariables !== null
              ? props.langVariables["specification"] && props.langVariables["search_by"]
                ? lang == "bn"
                  ? props.langVariables["specification"].lang_content
                  : props.langVariables["search_by"].lang_content
                : "Search by"
              : "Search by"
          }
          title2={
            props.langVariables !== null
              ? props.langVariables["specification"] && props.langVariables["search_by"]
                ? lang == "bn"
                  ? props.langVariables["search_by"].lang_content
                  : props.langVariables["specification"].lang_content
                : "Specifications"
              : "Specifications"
          }
        />
        <div className={classes.innerContainer}>
          <div className={classes.specDiv}>
            <div className={classes.tag}>
              {lang == "bn" ? (
                <p>
                  {props.langVariables !== null
                    ? props.langVariables["price"]
                      ? props.langVariables["price"].lang_content
                      : "Price"
                    : "Price"}
                </p>
              ) : (
                <span>Search by</span>
              )}
              {lang == "bn" ? (
                <span>
                  {props.langVariables !== null
                    ? props.langVariables["search_by"]
                      ? props.langVariables["search_by"].lang_content
                      : "Search by"
                    : "Search by"}
                </span>
              ) : (
                <p>Price</p>
              )}
            </div>
            <ul style={{ listStyleType: "none" }}>
              <li className={classes.specifyLink} style={{ textDecoration: "none" }}>
                <FormControlLabel
                  control={<Checkbox onChange={handlePrice} name={0} />}
                  label={props.langVariables !== null ? props.langVariables["lacs_1_10"].lang_content : "1 - 10 Lacs"}
                />
              </li>
              <li className={classes.specifyLink} style={{ textDecoration: "none" }}>
                <FormControlLabel
                  control={<Checkbox onChange={handlePrice} name={1} />}
                  label={props.langVariables !== null ? props.langVariables["lacs_10_20"].lang_content : "10 - 20 Lacs"}
                />
              </li>
              <li className={classes.specifyLink} style={{ textDecoration: "none" }}>
                <FormControlLabel
                  control={<Checkbox onChange={handlePrice} name={2} />}
                  label={props.langVariables !== null ? props.langVariables["lacs_20_30"].lang_content : "20 - 30 Lacs"}
                />
              </li>

              <li className={classes.specifyLink} style={{ textDecoration: "none" }}>
                <FormControlLabel
                  control={<Checkbox onChange={handlePrice} name={3} />}
                  label={props.langVariables !== null ? props.langVariables["lacs_30_40"].lang_content : "30 - 40 Lacs"}
                />
              </li>

              <li className={classes.specifyLink} style={{ textDecoration: "none" }}>
                <FormControlLabel
                  control={<Checkbox onChange={handlePrice} name={4} />}
                  label={props.langVariables !== null ? props.langVariables["lacs_40_50"].lang_content : "40 - 50 Lacs"}
                />
              </li>

              <li className={classes.specifyLink} style={{ textDecoration: "none" }}>
                <FormControlLabel
                  control={<Checkbox onChange={handlePrice} name={5} />}
                  label={
                    props.langVariables !== null
                      ? props.langVariables["lacs_50_above"].lang_content
                      : "50 Lacs or above"
                  }
                />
              </li>
            </ul>
          </div>

          <div className={classes.specDiv}>
            <div className={classes.tag}>
              {lang == "bn" ? (
                <p>{props.langVariables !== null ? props.langVariables["mileage"].lang_content : "Mileage"}</p>
              ) : (
                <span>Search by</span>
              )}
              {lang == "bn" ? (
                <span>
                  {props.langVariables !== null ? props.langVariables["search_by"].lang_content : "Search by"}
                </span>
              ) : (
                <p>Mileage</p>
              )}
            </div>
            <ul style={{ listStyleType: "none" }}>
              <li className={classes.specifyLink} style={{ textDecoration: "none" }}>
                <FormControlLabel
                  control={<Checkbox onChange={handleMileage} name={0} />}
                  label={
                    props.langVariables !== null
                      ? props.langVariables["km_10k_below"].lang_content
                      : "10,000 km or below"
                  }
                />
              </li>
              <li className={classes.specifyLink} style={{ textDecoration: "none" }}>
                <FormControlLabel
                  control={<Checkbox onChange={handleMileage} name={1} />}
                  label={
                    props.langVariables !== null
                      ? props.langVariables["km_10k_30k"].lang_content
                      : "10,000 to 30,000 km"
                  }
                />
              </li>
              <li className={classes.specifyLink} style={{ textDecoration: "none" }}>
                <FormControlLabel
                  control={<Checkbox onChange={handleMileage} name={2} />}
                  label={
                    props.langVariables !== null
                      ? props.langVariables["km_30k_50k"].lang_content
                      : "30,000 to 50,000 km"
                  }
                />
              </li>
              <li className={classes.specifyLink} style={{ textDecoration: "none" }}>
                <FormControlLabel
                  control={<Checkbox onChange={handleMileage} name={3} />}
                  label={
                    props.langVariables !== null
                      ? props.langVariables["km_50k_100k"].lang_content
                      : "50,000 to 1,00,000 km"
                  }
                />
              </li>
              <li className={classes.specifyLink} style={{ textDecoration: "none" }}>
                <FormControlLabel
                  control={<Checkbox onChange={handleMileage} name={4} />}
                  label={
                    props.langVariables !== null
                      ? props.langVariables["km_100k_150k"].lang_content
                      : "1,00,000 to 1,50,000 km"
                  }
                />
              </li>
              <li className={classes.specifyLink} style={{ textDecoration: "none" }}>
                <FormControlLabel
                  control={<Checkbox onChange={handleMileage} name={5} />}
                  label={
                    props.langVariables !== null
                      ? props.langVariables["km_150k_above"].lang_content
                      : "Over 1,50,000 km"
                  }
                />
              </li>
            </ul>
          </div>

          <div className={classes.specDiv}>
            <div className={classes.tag}>
              {lang == "bn" ? (
                <p>
                  {props.langVariables !== null
                    ? props.langVariables["seating_capacity"].lang_content
                    : "Seating Capacity"}
                </p>
              ) : (
                <span>Search by</span>
              )}
              {lang == "bn" ? (
                <span>
                  {props.langVariables !== null ? props.langVariables["search_by"].lang_content : "Search by"}
                </span>
              ) : (
                <p>Seating Capacity</p>
              )}
            </div>
            <ul style={{ listStyleType: "none" }}>
              <li className={classes.specifyLink} style={{ textDecoration: "none" }}>
                <FormControlLabel
                  control={<Checkbox onChange={handleSeat} name={0} />}
                  label={
                    props.langVariables !== null
                      ? props.langVariables["seats"]
                        ? (lang == "bn" ? "২ " : "2 ") + props.langVariables["seats"].lang_content
                        : "2 seats"
                      : "2 seats"
                  }
                />
              </li>
              <li className={classes.specifyLink} style={{ textDecoration: "none" }}>
                <FormControlLabel
                  control={<Checkbox onChange={handleSeat} name={1} />}
                  label={
                    props.langVariables !== null
                      ? props.langVariables["seats"]
                        ? (lang == "bn" ? "৪ " : "4 ") + props.langVariables["seats"].lang_content
                        : "4 seats"
                      : "4 seats"
                  }
                />
              </li>
              <li className={classes.specifyLink} style={{ textDecoration: "none" }}>
                <FormControlLabel
                  control={<Checkbox onChange={handleSeat} name={2} />}
                  label={
                    props.langVariables !== null
                      ? props.langVariables["seats"]
                        ? (lang == "bn" ? "৫ " : "5 ") + props.langVariables["seats"].lang_content
                        : "5 seats"
                      : "5 seats"
                  }
                />
              </li>
              <li className={classes.specifyLink} style={{ textDecoration: "none" }}>
                <FormControlLabel
                  control={<Checkbox onChange={handleSeat} name={3} />}
                  label={
                    props.langVariables !== null
                      ? props.langVariables["seats"]
                        ? (lang == "bn" ? "৭ " : "7 ") + props.langVariables["seats"].lang_content
                        : "7 seats"
                      : "7 seats"
                  }
                />
              </li>
              <li className={classes.specifyLink} style={{ textDecoration: "none" }}>
                <FormControlLabel
                  control={<Checkbox onChange={handleSeat} name={4} />}
                  label={
                    props.langVariables !== null
                      ? props.langVariables["seats"]
                        ? (lang == "bn" ? "৮ " : "8 ") + props.langVariables["seats"].lang_content
                        : "8 seats"
                      : "8 seats"
                  }
                />
              </li>
              <li className={classes.specifyLink} style={{ textDecoration: "none" }}>
                <FormControlLabel
                  control={<Checkbox onChange={handleSeat} name={5} />}
                  label={
                    props.langVariables !== null
                      ? props.langVariables["seats"] && props.langVariables["or_above"]
                        ? (lang == "bn" ? "১০ " : "10 ") +
                          props.langVariables["seats"].lang_content +
                          " " +
                          props.langVariables["or_above"].lang_content
                        : "10 seats or above"
                      : "10 seats or above"
                  }
                />
              </li>
            </ul>
          </div>

          <div className={classes.specDiv}>
            <div className={classes.tag}>
              {lang == "bn" ? (
                <p>
                  {props.langVariables !== null
                    ? props.langVariables["engine_capacity"].lang_content
                    : "Engine Capacity"}
                </p>
              ) : (
                <span>Search by</span>
              )}
              {lang == "bn" ? (
                <span>
                  {props.langVariables !== null ? props.langVariables["search_by"].lang_content : "Search by"}
                </span>
              ) : (
                <p>Engine Capacity</p>
              )}
            </div>
            <ul style={{ listStyleType: "none" }}>
              <li className={classes.specifyLink} style={{ textDecoration: "none" }}>
                <FormControlLabel
                  control={<Checkbox onChange={handleEngine} name={0} />}
                  label={
                    props.langVariables !== null ? props.langVariables["cc_800_less"].lang_content : "800 cc or less"
                  }
                />
              </li>
              <li className={classes.specifyLink} style={{ textDecoration: "none" }}>
                <FormControlLabel
                  control={<Checkbox onChange={handleEngine} name={1} />}
                  label={
                    props.langVariables !== null
                      ? props.langVariables["cc_1000_1499"].lang_content
                      : "1,000 to 1,499 cc"
                  }
                />
              </li>
              <li className={classes.specifyLink} style={{ textDecoration: "none" }}>
                <FormControlLabel
                  control={<Checkbox onChange={handleEngine} name={2} />}
                  label={
                    props.langVariables !== null
                      ? props.langVariables["cc_1500_1999"].lang_content
                      : "1,500 to 1,999 cc"
                  }
                />
              </li>
              <li className={classes.specifyLink} style={{ textDecoration: "none" }}>
                <FormControlLabel
                  control={<Checkbox onChange={handleEngine} name={3} />}
                  label={
                    props.langVariables !== null
                      ? props.langVariables["cc_2000_2499"].lang_content
                      : "2,000 to 2,499 cc"
                  }
                />
              </li>
              <li className={classes.specifyLink} style={{ textDecoration: "none" }}>
                <FormControlLabel
                  control={<Checkbox onChange={handleEngine} name={4} />}
                  label={
                    props.langVariables !== null
                      ? props.langVariables["cc_2500_2999"].lang_content
                      : "2,500 to 2,999 cc"
                  }
                />
              </li>
              <li className={classes.specifyLink} style={{ textDecoration: "none" }}>
                <FormControlLabel
                  control={<Checkbox onChange={handleEngine} name={5} />}
                  label={
                    props.langVariables !== null
                      ? props.langVariables["cc_3000_above"].lang_content
                      : "3,000 cc or above"
                  }
                />
              </li>
            </ul>
          </div>
          <div className={classes.searchButton}>
            <Button variant="contained" onClick={handleSubmit} className={classes.button} endIcon={<SendIcon />}>
              {props.langVariables !== null ? props.langVariables["search"].lang_content : "Search"}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
