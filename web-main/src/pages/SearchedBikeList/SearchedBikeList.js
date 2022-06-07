import React, { useState, Suspense, lazy } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Container, makeStyles, Box } from "@material-ui/core";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import SelectedBg from "@assets/selected.svg";

const SearchByType = lazy(() => import("@components/SearchByTypeBike"));
const SearchByBrand = lazy(() => import("@components/SearchByBrandBike"));
const BikeCard = lazy(() => import("@components/BikeCard"));
const Pagination = lazy(() => import("@components/Pagination/pagination"));
const Article = lazy(() => import("@components/Article/"));
// import ViewComfyIcon from "@material-ui/icons/ViewComfy";
// import BhaloAfterSalesWarranty from "../../components/BhaloAfterSalesWarranty/BhaloAfterSalesWarranty";
// import BhaloBuy from "../../components/BhaloBuy/BhaloBuy";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  rootDiv: {
    overflowX: "hidden",
    marginTop: "180px",
    "@media(max-width: 1023px)": {
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
  countDiv: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  totalBikes: {
    paddingTop: "57px",
  },
  button: {
    textTransform: "capitalize",
    border: "1px solid #f06424",
    color: "#f06424",
    width: "99%",
    margin: "auto",
    marginLeft: "5px",
  },
  bigSearch1: {
    marginTop: "-144px",
    "& .reconditionBtn": {
      display: "none",
    },
    "& .usedBtn": {
      display: "none",
    },
  },
  bigSearch2: {
    marginTop: "-144px",
    "& .newBtn": {
      display: "none",
    },
    "& .usedBtn": {
      display: "none",
    },
    "& .reconditionBtn": {
      marginLeft: "12px",
      minWidth: "260px",
      paddingLeft: "10px",
      backgroundImage: `url(${SelectedBg})`,
      "&.Mui-selected": {
        marginLeft: "12px",
        backgroundImage: `url(${SelectedBg})`,
      },
    },
  },
  bigSearch3: {
    marginTop: "-144px",
    "& .reconditionBtn": {
      display: "none",
    },
    "& .newBtn": {
      display: "none",
    },
    "& .usedBtn": {
      minWidth: "260px",
      marginLeft: "5px",
      paddingLeft: "20px",
      backgroundImage: `url(${SelectedBg})`,
    },
  },
  totalCars: {
    "@media(max-Width: 425px)": {
      fontSize: "15px",
    },
    "@media(max-Width: 320px)": {
      fontSize: "14px",
    },
  },
  bigSearch4: {
    marginTop: "-144px",
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

    "@media(max-Width: 425px)": {
      width: "100px",
    },

    "@media(max-Width: 375px)": {
      width: "85px",
    },

    "@media(max-Width: 320px)": {
      width: "75px",
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
      width: "75px",
      paddingLeft: "25px",
    },

    "@media(max-Width: 320px)": {
      paddingLeft: "10px",
      width: "75px",
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
    "@media(max-Width: 320px)": {
      width: "17px",
    },
  },
  sortHead1: {
    width: "100px",
    textAlign: "center",
    lineHeight: "50px",
    borderRadius: "10px",
    marginRight: "5px",

    "@media(max-Width: 320px)": {
      fontSize: "14px",
    },
  },
  sortHead2: {
    width: "100px",
    textAlign: "center",
    lineHeight: "50px",
    borderRadius: "10px",

    "@media(max-Width: 320px)": {
      fontSize: "14px",
    },
  },
}));

const renderLoader = () => <p>Loading</p>;

// eslint-disable-next-line
function SearchedBikeList(props) {
  const classes = useStyles();
  const history = useHistory();
  SearchedBikeList.js
  // eslint-disable-next-line
  const [list, setList] = useState(false);
  const [bikes, setBikes] = React.useState([]);
  const [count, setCount] = React.useState("");
  const [url, setUrl] = React.useState("");
  const getBikeData = (data, count, url) => {
    setBikes([]);
    setBikes(data);
    setCount(count);
    setUrl(url);
  };

  // const listView = () => {
  //   setList(true);
  // };
  // const gridView = () => {
  //   setList(false);
  // };

  const sortByYear = (criteria) => {
    if (criteria === "asc") {
      setBikes([...bikes.sort((a, b) => (a.bike_year > b.bike_year ? 1 : -1))]);
    } else {
      setBikes([...bikes.sort((a, b) => (a.bike_year > b.bike_year ? 1 : -1)).reverse()]);
    }
  };

  const sortByPrice = (criteria) => {
    if (criteria === "asc") {
      setBikes([...bikes.sort((a, b) => (parseFloat(a.fixed_price) > parseFloat(b.fixed_price) ? 1 : -1))]);
    } else {
      setBikes([...bikes.sort((a, b) => (parseFloat(a.fixed_price) > parseFloat(b.fixed_price) ? 1 : -1)).reverse()]);
    }
  };

  React.useEffect(() => {
    setCount(history.location.state.count);
    setBikes(history.location.state.bikeData);
  }, [history.location.state.bikeData]);

  return (
    <div className={classes.rootDiv}>
      <Suspense fallback={renderLoader()}>
        {history.location.state.typeFlag && <SearchByType getBikeData={getBikeData} />}
        {history.location.state.brandFlag && <SearchByBrand getBikeData={getBikeData} />}
        <Container maxWidth="lg">
          <div className={classes.countDiv}>
            <div>
              <p className={classes.totalCars}>
                Total Bikes Found: <strong>{count}</strong>
              </p>
            </div>
            <div className={classes.sortDiv}>
              <Box className={classes.sortYear}>
                <h4 className={classes.sortHead1}>Year</h4>
                {/* <div> */}
                <span onClick={() => sortByYear("asc")} className={classes.arrowPoint}>
                  <MdKeyboardArrowDown />
                </span>
                <span onClick={() => sortByYear("desc")} className={classes.arrowPoint}>
                  <MdKeyboardArrowUp />
                </span>
                {/* </div> */}
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
              {bikes.length > 0 && (
                <Pagination
                  data={bikes}
                  RenderComponent={BikeCard}
                  pageLimit={5}
                  dataLimit={20}
                  listView={list}
                  count={count}
                  url={url}
                />
              )}
            </CarCards>
          </CarViewContainer>
        </Container>
        {/* <BhaloBuy /> */}
        <Article />
      </Suspense>
    </div>
  );
}

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

/** @deprecated unused */

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

export default SearchedBikeList;
