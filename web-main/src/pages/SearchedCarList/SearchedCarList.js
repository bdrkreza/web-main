import { api } from "@configs/configs";
import { Box, Container, makeStyles } from "@material-ui/core";
import React, { lazy, Suspense, useEffect, useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
// import { useHistory, useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useLocalStorage, useSessionStorage } from "react-use";

const SearchByMaker = lazy(() => import("@components/SearchByMaker/SearchByMaker"));
const SearchByPrice = lazy(() => import("@components/SearchByPrice/SearchByPrice"));
const SearchByMileage = lazy(() => import("@components/SearchByMileage/SearchByMileage"));
const SearchBySeat = lazy(() => import("@components/SearchBySeat/SearchBySeat"));
const SearchByEngine = lazy(() => import("@components/SearchByEngine/SearchByEngine"));
const SearchByBody = lazy(() => import("@components/SearchByBody/SearchByBody"));
const CarCard = lazy(() => import("@components/CarCard/CarCard"));
const Pagination = lazy(() => import("@components/Pagination/pagination"));
const BhaloBuy = lazy(() => import("@components/BhaloBuy/BhaloBuy"));
const Article = lazy(() => import("@components/Article/"));
import FilteredSearchPage from "pages/SearchPage/FilteredSearchPage";
// import Background from "../../assets/carListBanner.png";
// import Banner from "../../components/CarlistBanner/Banner";
// import BannerSearch from "../../components/BannerSearch";
// import BhaloAfterSalesWarranty from "../../components/BhaloAfterSalesWarranty/BhaloAfterSalesWarranty";
// import Menu from "../../components/CarlistMenu/Menu";
// import ViewComfyIcon from "@material-ui/icons/ViewComfy";
// import ViewListIcon from "@material-ui/icons/ViewList";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  rootDiv: {
    overflowX: "hidden",
    marginTop: "180px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "100px",
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
  gap: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    margin-right: -15px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    justify-content: flex-start;

    @media (max-width: 767px) {
      justify-content: center;
    }
  }
`;

// const ButtonContainer = styled.div`
//   height: 100px;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   position: relative;
// `;
// const Buttons = styled.div`
//   @media (max-width: 425px) {
//     display: none;
//   }
// `;
// const SeeMore = styled.div`
//   width: 130px;
//   height: 43px;
//   border-radius: 20px;
//   background-color: #dedede;
//   text-align: center;
//   line-height: 43px;
//   margin: 50px 0;
//   position: relative;
//   left: calc(50% - 65px);
//   @media (max-width: 768px) {
//     left: calc(50% - 65px);
//   }
// `;

// const BannerSearchDiv = styled.div`
//   margin-top: -144px;
// `;

const renderLoader = () => <p>Loading</p>;

const SearchedCarList = (props) => {
  const [searchState, setSearchState] = useSessionStorage("search-state",{});
  const history = useHistory();
  // const location = useLocation();
  const classes = useStyles();

  const [list, setList] = useState(false);
  const [cars, setCars] = useState([]);

  const [count, setCount] = useState(0);
  // const [priceFlag, setPriceFlag] = React.useState(false);
  // const [mileageFlag, setMileageFlag] = React.useState(false);
  // const [seatFlag, setSeatFlag] = React.useState(false);
  // const [engineFlag, setEngineFlag] = React.useState(false);
  // const [makerFlag, setMakerFlag] = React.useState(false);
  // const [bodyFlag, setBodyFlag] = React.useState(false);
  // const [specificationFlag, setSpecificationFlag] = React.useState(true);
  const FLAG_PRICE = 1;
  const FLAG_MILEAGE = 2;
  const FLAG_SEAT = 3;
  const FLAG_ENGINE = 4;
  const FLAG_MAKER = 5;
  const FLAG_BODY = 6;
  const FLAG_SPEC = 6;
  const [flag, setFlag] = useState(FLAG_MAKER);
  const [sortMode, setSortMode] = useState();

  const [url, setUrl] = useState("");
  // let url = "";

  const makerName = localStorage.getItem("maker");
  useEffect(() => {
    let url = "api/cars/choose-by-maker/?maker_name=" + makerName;
    setUrl(url);
  }, [makerName]);

  // const searchState = sessionStorage.getItem("search-state")
  useEffect(()=>{
    // console.log("searchState",searchState)
  },[searchState])

  useEffect(() => {
    // console.log("useEffect[url]", url);
    // console.log("searchState", searchState);
    // TODO so we are expecting to provide maker?
    if (!searchState) {
      // TODO If not state is provided, search "Toyota" by default
      // let url = "api/cars/choose-by-maker/?maker_name=toyota";
      setFlag(FLAG_MAKER);
    } else if (searchState.maker) {
      const maker = history.location.state.maker;
      // console.log(localStorage.getItem("maker"));
      let url = "api/cars/choose-by-maker/?maker_name=" + maker;

      setUrl(url);
      setFlag(FLAG_MAKER);
    } else if (searchState.body) {
      const body = searchState.body;
      let url = "api/cars/choose-by-body-type/?body_type=" + body;
      setUrl(url);
      setFlag(FLAG_BODY);
    } else if (searchState.specification) {
      // console.debug("searchState.specification")
      let priceLow = searchState.priceLow;
      let priceHigh = searchState.priceHigh;
      let mileageLow = searchState.mileageLow;
      let mileageHigh = searchState.mileageHigh;
      let capacityLow = searchState.capacityLow;
      let capacityHigh = searchState.capacityHigh;
      let seating = searchState.seating;
      // let carMaker = searchState.carMaker;
      // let carModel = searchState.carModel;
      let url =
        "api/cars/search-by-specifications-new/?price_from=" +
        priceLow +
        "&price_to=" +
        priceHigh +
        "&mileage_from=" +
        mileageLow +
        "&mileage_to=" +
        mileageHigh +
        "&capacity_from=" +
        capacityLow +
        "&capacity_to=" +
        capacityHigh +
        "&seating=" +
        seating;
      setUrl(url);
      setFlag(FLAG_SPEC);
    } else {
      // TODO just render what we are given??
      let url = searchState.url;
      setUrl(url);
    }
  }, [searchState]);

  // Subscribe to url
  useEffect(() => {
    // console.log("SearchedCarList URL", url);
    // if (history.location.state.makerFlag) {
    if (flag === FLAG_MAKER) {
      (async () => {
        await api.get(url).then((res) => {
          // if (res.status === 200) {  // TODO No need to guard, this then() is for success
          setCars(res.data.results);
          setCount(res.data.count);
          // history.location.state.makerFlag = false;
          searchState.makerFlag = false;
          if (url.split("?")[1].startsWith("maker_name")) {
            // setMakerFlag(true);
            setFlag(FLAG_MAKER);
            // history.location.state.makerFlag = false;
            searchState.makerFlag = false;
          }
          // }
        });
      })();
      // } else if (history.location.state.bodyFlag) {
    } else if (flag === FLAG_BODY) {
      (async () => {
        await api.get(url).then((res) => {
          if (res.status === 200) {
            setCars(res.data.results);
            setCount(res.data.count);
            // history.location.state.bodyFlag = false;
            searchState.bodyFlag = false;
            if (url.split("?")[1].startsWith("body_type")) {
              // setBodyFlag(true);
              setFlag(FLAG_BODY);
              // history.location.state.bodyFlag = false;
              searchState.bodyFlag = false;
            }
          }
        });
      })();
    } else {
      (async () => {
        await api.get(url).then((res) => {
          if (res.status === 200) {
            setCars(res.data.results);
            setCount(res.data.count);
            if (url.split("?")[1].startsWith("maker_name")) {
              // setMakerFlag(true);
              setFlag(FLAG_MAKER);
            } else if (url.split("?")[1].startsWith("body_type")) {
              // setBodyFlag(true);
              setFlag(FLAG_BODY);
            }

            // if (specificationFlag) {
            //   setSpecificationFlag(false);
            //   // TODO WHAT?
            // }
          }
        });
      })();
    }
    // }, [history.location.state]);
  }, [url]);

  // useEffect(() => {
  //   console.log("useEffect[url]", url);
  //   // TODO so we are expecting to provide maker?
  //   if (!history.location.state) {
  //     // TODO If not state is provided, search "Toyota" by default
  //     // let url = "api/cars/choose-by-maker/?maker_name=toyota";
  //     setFlag(FLAG_MAKER);
  //   } else if (history.location.state.maker) {
  //     const maker = history.location.state.maker;
  //     // console.log(localStorage.getItem("maker"));
  //     let url = "api/cars/choose-by-maker/?maker_name=" + maker;

  //     setUrl(url);
  //     setFlag(FLAG_MAKER);
  //   } else if (history.location.state.body) {
  //     const body = history.location.state.body;
  //     let url = "api/cars/choose-by-body-type/?body_type=" + body;
  //     setUrl(url);
  //     setFlag(FLAG_BODY);
  //   } else if (history.location.state.specification) {
  //     let priceLow = history.location.state.priceLow;
  //     let priceHigh = history.location.state.priceHigh;
  //     let mileageLow = history.location.state.mileageLow;
  //     let mileageHigh = history.location.state.mileageHigh;
  //     let capacityLow = history.location.state.capacityLow;
  //     let capacityHigh = history.location.state.capacityHigh;
  //     let seating = history.location.state.seating;
  //     let carMaker = history.location.state.carMaker;
  //     let carModel = history.location.state.carModel;
  //     let url =
  //       "api/cars/search-by-specifications-new/?price_from=" +
  //       priceLow +
  //       "&price_to=" +
  //       priceHigh +
  //       "&mileage_from=" +
  //       mileageLow +
  //       "&mileage_to=" +
  //       mileageHigh +
  //       "&capacity_from=" +
  //       capacityLow +
  //       "&capacity_to=" +
  //       capacityHigh +
  //       "&seating=" +
  //       seating +
  //       "&car_maker=" +
  //       carMaker +
  //       "&car_model=" +
  //       carModel;
  //     setUrl(url);
  //     setFlag(FLAG_SPEC);
  //   } else {
  //     // TODO just render what we are given??
  //     let url = history.location.state.url;
  //     setUrl(url);
  //   }
  // }, [history.location]);

  // useEffect(() => {
  //   // console.log("SearchedCarList URL", url);
  //   // if (history.location.state.makerFlag) {
  //   if (flag === FLAG_MAKER) {
  //     (async () => {
  //       await api.get(url).then((res) => {
  //         // if (res.status === 200) {  // TODO No need to guard, this then() is for success
  //         setCars(res.data.results);
  //         setCount(res.data.count);
  //         history.location.state.makerFlag = false;
  //         if (url.split("?")[1].startsWith("maker_name")) {
  //           // setMakerFlag(true);
  //           setFlag(FLAG_MAKER);
  //           history.location.state.makerFlag = false;
  //         }
  //         // }
  //       });
  //     })();
  //     // } else if (history.location.state.bodyFlag) {
  //   } else if (flag === FLAG_BODY) {
  //     (async () => {
  //       await api.get(url).then((res) => {
  //         if (res.status === 200) {
  //           setCars(res.data.results);
  //           setCount(res.data.count);
  //           history.location.state.bodyFlag = false;
  //           if (url.split("?")[1].startsWith("body_type")) {
  //             // setBodyFlag(true);
  //             setFlag(FLAG_BODY);
  //             history.location.state.bodyFlag = false;
  //           }
  //         }
  //       });
  //     })();
  //   } else {
  //     (async () => {
  //       await api.get(url).then((res) => {
  //         if (res.status === 200) {
  //           setCars(res.data.results);
  //           setCount(res.data.count);
  //           if (url.split("?")[1].startsWith("maker_name")) {
  //             // setMakerFlag(true);
  //             setFlag(FLAG_MAKER);
  //           } else if (url.split("?")[1].startsWith("body_type")) {
  //             // setBodyFlag(true);
  //             setFlag(FLAG_BODY);
  //           }

  //           // if (specificationFlag) {
  //           //   setSpecificationFlag(false);
  //           //   // TODO WHAT?
  //           // }
  //         }
  //       });
  //     })();
  //   }
  //   // }, [history.location.state]);
  // }, [url]);

  useEffect(() => {
    if (history.location.state.carData) {
      setCount(history.location.state.count);
      setCars(history.location.state.carData);
    }
  }, [history.location.state.carData]);

  // console.log(history.location.state.carData);

  const sortByYear = (criteria) => {
    // console.debug("set sort mode: year-"+criteria);
    setSortMode("year-" + criteria); // This should trigger Pagination component to re-render
    // if (criteria === "asc") {
    //   console.log(cars);
    //   setCars([...cars.sort((a, b) => (a.car_year > b.car_year ? 1 : -1))]);
    // } else {
    //   setCars([...cars.sort((a, b) => (a.car_year > b.car_year ? 1 : -1)).reverse(),]);
    //   console.log(cars);
    // }
  };

  const sortByPrice = (criteria) => {
    // console.debug("set sort mode: price-"+criteria);
    setSortMode("price-" + criteria); // This should trigger Pagination component to re-render
    // if (criteria === "asc") {
    //   setCars([
    //     ...cars.sort((a, b) =>
    //         parseFloat(a.fixed_price.split(" ")[0]) >
    //         parseFloat(b.fixed_price.split(" ")[0])
    //             ? 1
    //             : -1
    //     ),
    //   ]);
    // } else {
    //   setCars([
    //     ...cars
    //         .sort((a, b) =>
    //             parseFloat(a.fixed_price.split(" ")[0]) >
    //             parseFloat(b.fixed_price.split(" ")[0])
    //                 ? 1
    //                 : -1
    //         )
    //         .reverse(),
    //   ]);
    // }
  };

  // const listView = () => {
  //   setList(true);
  // };
  // const gridView = () => {
  //   setList(false);
  // };

  const lang =
    sessionStorage.getItem("lang") && sessionStorage.getItem("lang") != "null" ? sessionStorage.getItem("lang") : "en";
  const langVariables = JSON.parse(sessionStorage.getItem("langVariables"));

  return (
    <div className={classes.rootDiv}>
      <Suspense fallback={renderLoader()}>
        {flag === FLAG_MAKER && <SearchByMaker />}
        <Container maxWidth="lg">
          {flag === FLAG_PRICE && <SearchByPrice />}
          {flag === FLAG_MILEAGE && <SearchByMileage />}
          {flag === FLAG_SEAT && <SearchBySeat />}
          {flag === FLAG_ENGINE && <SearchByEngine />}
          {flag === FLAG_BODY && <SearchByBody />}
        </Container>
        <Container maxWidth="lg">
          <div className={classes.countDiv}>
            <p className={classes.totalCount}>
              {langVariables !== null
                ? lang === "bn"
                  ? langVariables["results_found"].lang_content
                  : "Total Results Found"
                : "Total Results Found"}
              : <strong>{count}</strong>
            </p>
            <div className={classes.sortDiv}>
              <Box className={classes.sortYear}>
                <h4 className={classes.sortHead1}>Year</h4>
                <button onClick={() => sortByYear("asc")} className={classes.arrowPoint}>
                  <MdKeyboardArrowDown />
                </button>
                <button onClick={() => sortByYear("desc")} className={classes.arrowPoint}>
                  <MdKeyboardArrowUp />
                </button>
              </Box>
              <Box className={classes.sortPrice}>
                <h4 className={classes.sortHead2}>Price</h4>
                <span onClick={() => sortByPrice("asc")} className={classes.arrowPoint}>
                  <MdKeyboardArrowDown />
                </span>
                <span onClick={() => sortByPrice("desc")} className={classes.arrowPoint}>
                  <MdKeyboardArrowUp />
                </span>
              </Box>
            </div>
          </div>

          <CarViewContainer>
            <CarCards className={list ? "list" : "grid"}>
              {cars && cars.length > 0 && (
                <Pagination
                  data={cars}
                  RenderComponent={CarCard}
                  pageLimit={5}
                  dataLimit={20}
                  listView={list}
                  count={count}
                  url={url}
                  sortMode={sortMode}
                />
              )}
            </CarCards>
          </CarViewContainer>
          {/* <FilteredSearchPage /> */}
        </Container>
        <BhaloBuy />
        <Article />
      </Suspense>
    </div>
  );
};

export default SearchedCarList;
