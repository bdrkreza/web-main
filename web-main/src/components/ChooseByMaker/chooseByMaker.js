/* eslint-disable no-undef */
import { api } from "@configs/configs";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle";
import "swiper/swiper.min.css";
import SectionTitle from "../../components/SectionTitle";
import MakerCard from "./makerCard";

const lang = sessionStorage.getItem("lang");
const langVariables = JSON.parse(sessionStorage.getItem("langVariables"));

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  choosebyMakers: {
    backgroundColor: "#efefef",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "15px",
      paddingBottom: "20px",
      marginTop: "15px",
    },
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
      color: "#f06425",
      fontSize: "16px",
      fontWeight: "400",
      letterSpacing: "1px",
      textDecoration: "none",
      display: "block",
      transition: "all ease-in-out 0.15s",
      "&:hover": {
        color: "#f06425",
        transform: "scale(1.3)",
        transition: "all ease-in-out 0.15s",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "14px",
      },
    },
  },
  makerContainerMobile: {
    // paddingLeft: "10px",
    // paddingRight: "0",
    "@media(max-width: 767px)": {
      paddingLeft: "15px",
      paddingRight: "0",
    },
  },
}));

const ChooseByMaker = () => {
  const [makers, setMakers] = useState([]);
  const classes = useStyles();
  const url = "/api/cars/car-manufacturer/";
  const [state, setState] = useState({
    mobileView: false,
  });

  const { mobileView } = state;

  useEffect(() => {
    (async () => {
      await api.get(url).then((res) => {
        if (res.status === 200) {
          setMakers(res.data);
        }
      });
    })();
  }, []);

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1024
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const ChooseByMakerDesktop = () => {
    return (
      <div className={classes.choosebyMakers}>
        <Container maxWidth="lg" className={classes.makerContainer}>
          <div className={classes.titleWithLink}>
            <SectionTitle
              title1={
                langVariables !== null
                  ? lang == "bn"
                    ? langVariables["maker"].lang_content
                    : langVariables["choose_by"].lang_content
                  : "Choose by"
              }
              title2={
                langVariables !== null
                  ? lang == "bn"
                    ? langVariables["choose_by"].lang_content
                    : langVariables["maker"].lang_content
                  : "Maker"
              }
            />
            <h4>
              <Link to="/all-maker">
                {langVariables !== null ? langVariables["view_all"].lang_content : "View All"}
              </Link>
            </h4>
          </div>
          <div className={classes.makerContainerRow}>
            {makers.slice(0, 18).map((maker, i) => {
              return <MakerCard photo={maker.maker_logo_url} name={maker.maker_name} key={i} />;
            })}
          </div>
        </Container>
      </div>
    );
  };

  const ChooseByMakerMobile = () => {
    return (
      <div className={classes.choosebyMakers}>
        <Container maxWidth="lg">
          <div className={classes.titleWithLink}>
            <SectionTitle
              title1={
                langVariables !== null
                  ? lang == "bn"
                    ? langVariables["maker"].lang_content
                    : langVariables["choose_by"].lang_content
                  : "Choose by"
              }
              title2={
                langVariables !== null
                  ? lang == "bn"
                    ? langVariables["choose_by"].lang_content
                    : langVariables["maker"].lang_content
                  : "Maker"
              }
            />
            <h4>
              <Link to="/all-maker">
                {langVariables !== null ? langVariables["view_all"].lang_content : "View All"}
              </Link>
            </h4>
          </div>
        </Container>
        <Container maxWidth="lg" className={classes.makerContainerMobile}>
          <Swiper
            // className={classes.bodyContainer}
            id="main"
            spaceBetween={10}
            slidesPerView={3}
            slidesPerGroup={3}
            centeredSlides={false}
            navigation={true}
            speed={100}
            freeMode={false}
            freeModeFluid={true}
            breakpoints={{
              200: {
                slidesPerView: 3.25,
                spaceBetween: 75,
              },
              640: {
                slidesPerView: 4.5,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 5.5,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 7,
                spaceBetween: 10,
              },
            }}
          >
            {makers.map((maker, i) => {
              return (
                <SwiperSlide key={i}>
                  <MakerCard photo={maker.maker_logo_url} name={maker.maker_name} key={i} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Container>
      </div>
    );
  };

  return mobileView ? ChooseByMakerMobile() : ChooseByMakerDesktop();
};

export default ChooseByMaker;
