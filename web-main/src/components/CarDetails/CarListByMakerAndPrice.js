import { api } from "@configs/configs";
import { makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import CarCardForDetails from "../../components/CarCard/CarCardForDetails";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  rootDiv: {
    paddingRight: "10px",
    overflowX: "hidden",
    [theme.breakpoints.down("xs")]: {
    },
  },
  grid: {},
  list: {},
  cartype: {
    display: "inline-block",
    fontSize: "14px",
    lineHeight: "16px",
    color: "#ffffff",
    fontWeight: 400,
    fontFamily: "Open Sans",
    textAlign: "center",
    background: "#24d1f0",
    borderRadius: "20px",
    padding: "5px 7px",
    marginTop: "10px",
    marginLeft: "20px",
  },
  button: {
    textTransform: "capitalize",
    border: "1px solid #f06424",
    color: "#f06424",
    width: "99%",
    margin: "auto",
    marginLeft: "5px",
  },
  countDiv: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  totalCount: {
    fontSize: "15px",
    "@media(max-Width: 375px)": {
      fontSize: "14px",
    },
  },
  sortDiv: {
    paddingTop: "-50px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  sortYear: {
    width: "160px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      width: "100px",
    },
    "@media(max-Width: 375px)": {
      width: "85px",
    },
  },
  sortPrice: {
    width: "160px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      width: "100px",
    },
    "@media(max-Width: 375px)": {
      width: "85px",
    },
  },
  arrowPoint: {
    cursor: "pointer",
    fontSize: "25px",
    width: "30px",
    marginTop: "5px",
    "&:hover svg": {
      fill: "red",
    },

    "@media(max-Width: 375px)": {
      width: "20px",
    },
  },
  sortHead1: {
    width: "100px",
    textAlign: "center",
    lineHeight: "50px",
    borderRadius: "10px",
    marginRight: "5px",

    "@media(max-Width: 375px)": {
      fontSize: "14px",
    },
  },
  sortHead2: {
    width: "100px",
    textAlign: "center",
    lineHeight: "50px",
    borderRadius: "10px",

    "@media(max-Width: 375px)": {
      fontSize: "14px",
    },
  },
}));

const CarViewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 40px;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media(max-width: 767px){
    margin-left: 0px;
  }
`;

const CarCards = styled.div`
  &.list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  &.grid {
    width: calc(100% + 30px);
    margin-left: -15px;
    margin-right: -25px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    justify-content: flex-start;
    alignItems:center;

    // my code start
    @media (max-width: 470px) {
      justify-content: center;
      alignItems:center;
    }
    // my code finish

    @media (max-width: 767px) {
      justify-content: center;
      alignItems:center;
    }
  }
`;

const Title = styled.p`
  padding-top: 50px;
  margin-left: 20px;
  font-size: 20px;
  color: #000000;
  font-weight: 700;
  font-family: "Open Sans";
  padding-bottom: 15px;
  @media (max-width: 767px) {
    padding-top: 20px;
    padding-bottom: 10px;
  }
`;

const ButtonContainer = styled.div`
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
const Buttons = styled.div`
  @media (max-width: 425px) {
    display: none;
  }
`;
const SeeMore = styled.div`
  width: 130px;
  height: 43px;
  border-radius: 20px;
  background-color: #dedede;
  text-align: center;
  line-height: 43px;
  margin: 50px 0;
  position: relative;
  left: calc(50% - 65px);
  @media (max-width: 768px) {
    left: calc(50% - 65px);
  }
`;

const BannerSearchDiv = styled.div`
  margin-top: -144px;
`;

const CarListByMakerAndPrice = (props) => {
  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();
  const [list, setList] = useState(false);
  const [cars, setCars] = useState([]);
  const [count, setCount] = useState(0);
  const [priceFlag, setPriceFlag] = React.useState(false);
  const [mileageFlag, setMileageFlag] = React.useState(false);
  const [seatFlag, setSeatFlag] = React.useState(false);
  const [engineFlag, setEngineFlag] = React.useState(false);
  const [makerFlag, setMakerFlag] = React.useState(false);
  const [bodyFlag, setBodyFlag] = React.useState(false);

  let url = "";
  // console.log("history==", history.location.search.split("=")[1]);

  // if (history.location.search.split("=")[1]) {
  //   const urlName = history.location.search.split("?")[1].startsWith("m")
  //     ? `-maker/?maker_name=${history.location.search.split("=")[1]}`
  //     : `-body/?body_type=${history.location.search.split("=")[1]}`;

  //   url = `api/cars/choose-by${urlName}`;

  //   try {
  //     (async () => {
  //       await api.get(url).then((res) => {
  //         if (res.status === 200) {
  //           setCars(res.data.results);
  //           setCount(res.data.count);
  //         } else {
  //           console.log("something bad happened.");
  //         }
  //       });
  //     })();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  if (props.car.car_manufacturer.maker_name) {
    const maker = props.car.car_manufacturer.maker_name;
    url = "api/cars/choose-by-maker/?maker_name=" + maker;
    // (async () => {
    // await api.get(url).then((res) => {
    //     if (res.status === 200) {
    //     setCars(res.data.results);
    //     setCount(res.data.count);
    //     history.location.state.makerFlag = false;
    //     if (url.split("?")[1].startsWith("maker_name")) {
    //         setMakerFlag(true);
    //         history.location.state.makerFlag = false;
    //     }
    //     }
    // });
    // })();

  }
  // else if (history.location.state.price) {
  //   const price = history.location.state.price;
  //   url = "api/cars/search-by-specification/?price=" + price;

  //   if (history.location.state.priceFlag) {
  //     (async () => {
  //       await api.get(url).then((res) => {
  //         if (res.status === 200) {
  //           setCars(res.data.results);
  //           setCount(res.data.count);
  //           history.location.state.priceFlag = false;
  //           if (url.split("?")[1].startsWith("price")) {
  //             setPriceFlag(true);
  //             history.location.state.priceFlag = false;
  //           }
  //         }
  //       });
  //     })();
  //   }
  // } else if (history.location.state.mileage_from) {
  //   const mileage_from = history.location.state.mileage_from;
  //   const mileage_to = history.location.state.mileage_to;
  //   url =
  //     "api/cars/search-by-specification/?mileage_from=" +
  //     mileage_from +
  //     "&mileage_to=" +
  //     mileage_to;

  //   if (history.location.state.mileageFlag) {
  //     (async () => {
  //       await api.get(url).then((res) => {
  //         if (res.status === 200) {
  //           setCars(res.data.results);
  //           setCount(res.data.count);
  //           history.location.state.mileageFlag = false;
  //           if (url.split("?")[1].startsWith("mileage_from")) {
  //             setMileageFlag(true);
  //             history.location.state.mileageFlag = false;
  //           }
  //         }
  //       });
  //     })();
  //   }
  // } else if (history.location.state.seating) {
  //   const seating = history.location.state.seating;
  //   url = "api/cars/search-by-specification/?seating=" + seating;
  //   if (history.location.state.seatFlag) {
  //     (async () => {
  //       await api.get(url).then((res) => {
  //         if (res.status === 200) {
  //           setCars(res.data.results);
  //           setCount(res.data.count);
  //           history.location.state.seatFlag = false;
  //           if (url.split("?")[1].startsWith("seating")) {
  //             setSeatFlag(true);
  //             history.location.state.seatFlag = false;
  //           }
  //         }
  //       });
  //     })();
  //   }
  // } else if (history.location.state.capacity_from) {
  //   const capacity_from = history.location.state.capacity_from;
  //   const capacity_to = history.location.state.capacity_to;
  //   url =
  //     "api/cars/search-by-specification/?capacity_from=" +
  //     capacity_from +
  //     "&capacity_to=" +
  //     capacity_to;

  //   if (history.location.state.engineFlag) {
  //     (async () => {
  //       await api.get(url).then((res) => {
  //         if (res.status === 200) {
  //           setCars(res.data.results);
  //           setCount(res.data.count);
  //           history.location.state.engineFlag = false;
  //           if (url.split("?")[1].startsWith("capacity_from")) {
  //             setEngineFlag(true);
  //             history.location.state.engineFlag = false;
  //           }
  //         }
  //       });
  //     })();
  //   }
  // }

  useEffect(() => {
    (async () => {
      await api.get(url).then((res) => {
        if (res.status === 200) {
          setCars(res.data.results);
          // console.log(cars);
          setCount(res.data.count);
          // if (url.split("?")[1].startsWith("maker_name")) {
          //   setMakerFlag(true);
          // } else if (url.split("?")[1].startsWith("body_type")) {
          //   setBodyFlag(true);
          // }
        }
      });
    })();
  }, []);

  // useEffect(() => {
  //   if (history.location.state.carData) {
  //     setCount(history.location.state.count);
  //     setCars(history.location.state.carData);
  //   }
  // }, [history.location.state.carData]);

  const listView = () => {
    setList(true);
  };
  const gridView = () => {
    setList(false);
  };

  return (
    <div className={classes.rootDiv}>

      <Title>
            Related <span style={{ color: "#f06424" }}>Car Listing</span>
      </Title>

      <CarViewContainer>
        <CarCards className={list ? "list" : "grid"}>

          {cars.length === 0 && <h1 style={{ marginLeft: "14px"}}>No more data to show</h1>}
          {cars.filter((item, index) => index < 8).map((d, idx) => (
            <CarCardForDetails key={idx} car={d} listView={list} pathName={"related-cars"}/>
          ))}

        </CarCards>
      </CarViewContainer>
    </div>
  );
};

export default CarListByMakerAndPrice;
