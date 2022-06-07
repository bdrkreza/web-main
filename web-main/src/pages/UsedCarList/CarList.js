import React, { useEffect, useState, lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import { Container, IconButton } from "@material-ui/core";
import { api } from "@configs/configs";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import ViewComfyIcon from "@material-ui/icons/ViewComfy";
import SelectedBg from "../../assets/selected.svg";
import { useLocation } from "react-router-dom";

const BannerSearch = lazy(() => import("@components/BannerSearch"));
const BhaloBuy = lazy(() => import("@components/BhaloBuy/BhaloBuy"));
const CarCard = lazy(() => import("@components/CarCard/CarCard"));
const Article = lazy(() => import("@components/Article/"));
const CarFAQ = lazy(() => import("@components/CarFAQ/CarFAQ"));
const ChooseByMaker = lazy(() => import("@components/ChooseByMaker/chooseByMaker"));
const Pagination = lazy(() => import("@components/Pagination/pagination"));
const UsedCar = lazy(() => import("@components/UsedCar/UsedCar"));
// import Background from "../../assets/carListBanner.png";
// import Banner from "../../components/CarlistBanner/Banner";
// import BhaloAfterSalesWarranty from "../../components/BhaloAfterSalesWarranty/BhaloAfterSalesWarranty";
// import Menu from "../../components/CarlistMenu/Menu";
// import ViewListIcon from "@material-ui/icons/ViewList";

const useStyles = makeStyles(() => ({
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
  bigSearch: {
    marginTop: "0px",
    backgroundColor: "#efefef",
    paddingBottom: "30px",
    "& .newBtn": {
      display: "none",
    },
    "& .reconditionBtn": {
      display: "none",
    },
    "& .MuiTabs-root": {
      minHeight: "0",
    },
    "& .usedBtn": {
      minWidth: "260px",
      marginLeft: "5px",
      paddingLeft: "20px",
      backgroundImage: `url(${SelectedBg})`,
      "@media(max-Width: 767px)": {
        marginLeft: "0px",
        paddingLeft: "0px",
        maxWidth: "260px",
        width: "100%",
        display: "none",
      },
    },
  },
  usedCarPage: {
    backgroundColor: "#efefef",
    paddingTop: "200px",
    "@media(max-Width: 1023px)": {
      paddingTop: "105px",
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

/**
 * @deprecated unused
 */
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

const Header = styled.h1`
  margin-left: 10px;
`;

const CarList = () => {
  const classes = useStyles();
  const [list, setList] = useState(false);
  const [cars, setCars] = useState([]);
  const [count, setCount] = useState(0);

  /**
   * @deprecated unused
   */
  // const listView = () => {
  //   setList(true);
  // };

  const gridView = () => {
    setList(false);
  };

  const getOffset = () => {
    var l = document.getElementById("total");
    var p = l.offsetTop;
    return p;
  };

  const url = "api/cars/type-of-cars/?car_type=used";
  useEffect(() => {
    (async () => {
      await api.get(url).then((res) => {
        if (res.status === 200) {
          setCars(res.data.results);
          setCount(res.data.count);
        }
      });
    })();
  }, []);

  const renderLoader = () => <p>Loading</p>;

  const location = useLocation();
  const lang =
    sessionStorage.getItem("lang") && sessionStorage.getItem("lang") != "null" ? sessionStorage.getItem("lang") : "en";
  const [langVariables, setLangVariables] = useState(null);

  let pathname = location.pathname.slice(1);
  useEffect(() => {
    if (pathname == "") {
      pathname = "home";
    } else {
      pathname = pathname.replace("-", "_");
    }

    try {
      (async () => {
        await api
          .get("api/localization/lang-based-text/?language_code=" + lang + "&page_id=" + pathname)
          .then((res) => {
            sessionStorage.setItem("langVariables", JSON.stringify(res.data.result));
            setLangVariables(JSON.parse(sessionStorage.getItem("langVariables")));
          });
      })();
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div style={{ overflowX: "hidden" }}>
      <Suspense fallback={renderLoader()}>
        <Helmet>
          <meta name="keywords" content="Buy & Sell Used Cars" />
          <meta
            name="description"
            content="Used Cars under 10 Lacks in Bangladesh, Get a good offer, Search for used car"
          />
        </Helmet>
        <div className={classes.usedCarPage}>
          {/* <Container maxWidth="lg">
            <Header>
              {langVariables !== null
                ? lang === "bn"
                  ? langVariables["used_cars_sale"].lang_content
                  : "Used Cars for Sale"
                : "Used Cars for Sale"}
            </Header>
          </Container> */}
          <div className={classes.bigSearch}>
            <BannerSearch flag="Used" from="Used" />
          </div>
        </div>
        <UsedCar />
        <ChooseByMaker />
        <Container maxWidth="lg" id="total">
          <ButtonContainer>
            <p>
              {langVariables !== null
                ? lang === "bn"
                  ? langVariables["results_found"].lang_content
                  : "Total Results Found"
                : "Total Results Found"}
              : <strong>{count}</strong>
            </p>
            <Buttons>
              <IconButton varia-label="grid" onClick={gridView}>
                <ViewComfyIcon />
              </IconButton>
            </Buttons>
          </ButtonContainer>
        </Container>
        <Container maxWidth="lg">
          <CarViewContainer>
            <CarCards className={list ? "list" : "grid"}>
              {cars.length > 0 && (
                <Pagination
                  data={cars}
                  RenderComponent={CarCard}
                  pageLimit={5}
                  dataLimit={20}
                  offsetToScroll={getOffset()}
                  listView={list}
                  count={count}
                  url={url}
                />
              )}
            </CarCards>
          </CarViewContainer>
        </Container>
        <CarFAQ />
        <BhaloBuy />
        <Article />
      </Suspense>
    </div>
  );
};

export default CarList;
