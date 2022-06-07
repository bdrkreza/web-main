import React, { useEffect, useState, lazy, Suspense } from "react";
import { Container } from "@material-ui/core";
import { api } from "@configs/configs";
import { makeStyles } from "@material-ui/core/styles";

const SectionTitle = lazy(() => import("@components/SectionTitle"));
const MakerCard = lazy(() => import("@components/ChooseByMaker/makerCard"));
const BhaloBuy = lazy(() => import("@components/BhaloBuy/BhaloBuy"));
const Article = lazy(() => import("@components/Article/"));
// import BannerSearch from "../../components/BannerSearch";
// import BhaloAfterSalesWarranty from "../../components/BhaloAfterSalesWarranty/BhaloAfterSalesWarranty";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  choosebyMakers: {
    backgroundColor: "#efefef",
    marginTop: "190px",
  },
  makerContainer: {
    flexGrow: 1,
    paddingTop: "58px",
    paddingBottom: "58px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "25px",
      paddingBottom: "25px",
    },
  },
  title: {
    fontSize: "32px",
    lineHeight: "32px",
    color: "#000000",
    fontWeight: "700",
    paddingLeft: "0",
    paddingBottom: "30px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
      paddingBottom: "20px",
    },
  },
  makerContainerRow: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "-7px",
    marginRight: "-7px",
    flexWrap: "wrap",
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  },
  titleWithLink: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    "& h4": {
      paddingBottom: "15px",
    },
    "& a": {
      color: "#efcf43",
      fontSize: "16px",
      fontWeight: "400",
      letterSpacing: "1px",
      borderBottom: "1px solid",
      textDecoration: "none",
      transition: "all ease-in-out 0.4s",
      "&:hover": {
        color: "#f06425",
        transition: "all ease-in-out 0.4s",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "14px",
      },
    },
  },
}));

const renderLoader = () => <p>Loading</p>;

function AllMaker() {
  const [makers, setMakers] = useState([]);
  const classes = useStyles();
  const url = "/api/cars/car-manufacturer/";

  useEffect(() => {
    (async () => {
      await api.get(url).then((res) => {
        if (res.status === 200) {
          setMakers(res.data);
        }
      });
    })();
  }, []);

  return (
    <React.Fragment>
      <Suspense fallback={renderLoader()}>
        <div className={classes.choosebyMakers}>
          <Container maxWidth="lg" className={classes.makerContainer}>
            <div className={classes.titleWithLink}>
              <SectionTitle title1="Choose By" title2="Maker" />
            </div>
            <div className={classes.makerContainerRow}>
              {makers.map((maker, i) => {
                return <MakerCard photo={maker.maker_logo_url} name={maker.maker_name} key={i} />;
              })}
            </div>
          </Container>
        </div>
        <BhaloBuy />
        <Article />
      </Suspense>
    </React.Fragment>
  );
}

export default AllMaker;
