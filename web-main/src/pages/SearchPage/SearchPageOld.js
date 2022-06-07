import React, { useContext, useState, lazy, Suspense } from "react";
import { Box, Container } from "@material-ui/core";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
// import withRouter from "react-router-dom/es/withRouter";
import { withRouter, useHistory, useLocation, useParams } from "react-router-dom"; // fixed from warnings
import { api } from "@configs/configs";
import { SearchContext } from "context/SearchContext";

// import {useHistory} from "react-router-dom";

const BhaloBuy = lazy(() => import("@components/BhaloBuy/BhaloBuy"));
const Article = lazy(() => import("@components/Article/"));
const CarCard = lazy(() => import("@components/CarCard/CarCard"));
const Pagination = lazy(() => import("@components/Pagination/pagination"));
import FilteredSearchPage from "./FilteredSearchPage";
const SearchByMaker = lazy(() => import("@components/SearchByMaker/SearchByMaker"));
// import Background from "../../assets/carListBanner.png";
// import Banner from "../../components/CarlistBanner/Banner";
// import BannerSearch from "@components/BannerSearch";
// import BhaloAfterSalesWarranty from "../../components/BhaloAfterSalesWarranty/BhaloAfterSalesWarranty";
// import Menu from "../../components/CarlistMenu/Menu";
// import ViewComfyIcon from "@material-ui/icons/ViewComfy";
// import ViewListIcon from "@material-ui/icons/ViewList";
// import axios from "axios";

function SearchPageUI({ data, count, url }) {
  const searchPhrase = useContext(SearchContext);
  console.log("SearchPage ", searchPhrase);

  const query = useSearchQuery();
  console.group("Search Page Query");
  console.log("Query", query);
  console.log("Maker Name", query.get("maker_name"));
  console.groupEnd();

  // const classes = useStyles();
  const [dataUrl, setDataUrl] = useState(); // for FilteredSearchPage
  const [list, setList] = useState(false);
  const [cars, setCars] = useState([]);
  const [sortMode, setSortMode] = useState(); //new code
  const history = useHistory();

  const FLAG_PRICE = 1;
  const FLAG_MILEAGE = 2;
  const FLAG_SEAT = 3;
  const FLAG_ENGINE = 4;
  const FLAG_MAKER = 5;
  const FLAG_BODY = 6;
  const FLAG_SPEC = 6;
  const [flag, setFlag] = useState(FLAG_MAKER);

  // const [url, setUrl] = useState("");

  // count = history.location.state.count;
  // url = history.location.state.url;
  // data = history.location.state.cars;

  // TODO Do we really need to check for the pathname to get these data?
  // if (history.location.pathname === "/search-page") {
  //   count = history.location.state.count;
  //   url = history.location.state.url;
  //   data = history.location.state.cars;
  // }

  // console.log("History =>", history.location.state);

  React.useEffect(() => {
    // console.log("useEffect[url]", url);
    // if (!history.location.state) {
    //   // TODO If not state is provided, search "Toyota" by default
    //   let url = "api/cars/choose-by-maker/?maker_name=toyota";
    //   setFlag(FLAG_MAKER);
    // }else if (history.location.state.maker) {
    //   const maker = history.location.state.maker;
    //   setFlag(FLAG_MAKER)
    // }
    // console.log("useEffect", { data, count, url });

    if (query.get("maker_name")) {
      // TODO handle search by maker name
      const makerName = query.get("maker_name");
      console.log("\tSearch by maker", makerName);

      let dataUrl = `api/cars/choose-by-maker/?maker_name=${makerName}`;
      setDataUrl(dataUrl)
      api.get(dataUrl).then((res) => {
        console.log(`Cars by Makers: ${makerName}`, res);
        const { cars } = res
        setCars(cars)
      });
    }

    setCars(data);
  }, [history.location]);

  // console.log("Cars =>", data);
  // console.log("URL =>", url);

  const sortByYear = (criteria) => {
    setSortMode("year-" + criteria);
  };

  const sortByPrice = (criteria) => {
    setSortMode("price-" + criteria);
  };

  // const listView = () => {
  //   setList(true);
  // };
  // const gridView = () => {
  //   setList(false);
  // };

  // const bannerSearch = () => (
  //   <div style={{ marginTop: "-153px", marginBottom: "10px" }}>
  //     {<BannerSearch />}
  //   </div>
  // );

  // return count > 0 ? (
  return (
    <>
      <TopSearchDiv>
        <Suspense fallback={renderLoader()}>
          <FilteredSearchPage dataUrl={dataUrl} />
          {/* {bannerSearch()} */}
          {/* {flag === FLAG_MAKER && <SearchByMaker />} */}
          {/* <Container maxWidth="lg">
            <div className={classes.countDiv}>
              <div>
                <p className={classes.totalCars}>
                  Total Cars Found: <strong>{count}</strong>
                </p>
              </div>
              <div className={classes.sortDiv}>
                <Box className={classes.sortYear}>
                  <h4 className={classes.sortHead1}>Year</h4>
                  <span onClick={() => sortByYear("asc")} className={classes.arrowPoint}>
                    <MdKeyboardArrowDown />
                  </span>
                  <span onClick={() => sortByYear("desc")} className={classes.arrowPoint}>
                    <MdKeyboardArrowUp />
                  </span>
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
              <CarCards className="grid">
                {count > 0 && (
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
          </Container> */}
          <BhaloBuy />

        </Suspense>
      </TopSearchDiv>
    </>
  );
  //  : (
  //   "Loading..."
  // );
}
const TopSearchDiv = styled.div`
  overflow: hidden;
  margin-top: 169px;
  @media (max-width: 768px) {
    margin-top: 80px;
  }
`;
const CarViewContainer = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${"" /* gap: 40px; */}
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

    @media (max-width: 768px) {
      justify-content: center;
    }
  }
`;

// eslint-disable-next-line
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
  sortDiv: {
    paddingTop: "50px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  countDiv: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  totalCars: {
    paddingTop: "57px",

    // "@media(max-Width: 425px)": {
    //   paddingTop: "55px",
    // },

    "@media(max-Width: 425px)": {
      paddingTop: "50px",
    },
  },
  sortYear: {
    width: "160px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "@media(max-Width: 425px)": {
      width: "100px",
    },

    "@media(max-Width: 375px)": {
      width: "90px",
    },
  },
  sortPrice: {
    width: "160px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "@media(max-Width: 425px)": {
      width: "100px",
    },

    "@media(max-Width: 375px)": {
      width: "90px",
      paddingLeft: "10px",
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
  },
  sortHead1: {
    width: "100px",
    textAlign: "center",
    lineHeight: "50px",
    borderRadius: "10px",
    marginRight: "5px",
  },
  sortHead2: {
    width: "100px",
    textAlign: "center",
    lineHeight: "50px",
    borderRadius: "10px",
  },
}));

const renderLoader = () => <p>Loading</p>;

function useSearchQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default withRouter(SearchPageUI);
