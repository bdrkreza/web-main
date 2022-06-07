import React, { useState, useEffect,  Suspense } from "react";
import { api } from "@configs/configs";
import { Container, makeStyles } from "@material-ui/core";
import FeaturedNewCarCard from "./FeaturedNewCarCard";
import SectionTitle from "@components/SectionTitle";
// const FeaturedNewCarCard = lazy(() => import('./FeaturedNewCarCard'));
// const SectionTitle = lazy(() => import('../../components/SectionTitle'));
import { Swiper, SwiperSlide } from "swiper/react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../PopularBrand/swiper.css";
import "swiper/swiper-bundle";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import SwiperCore, { Pagination, Navigation } from "swiper/core";

// install Swiper modules,const PopularBrand = lazy(() => import('../../components/PopularBrand/PopularBrand'));
SwiperCore.use([Pagination, Navigation]);

const renderLoader = () => <p>Loading</p>;

const lang = sessionStorage.getItem("lang");
const langVariables = JSON.parse(sessionStorage.getItem("langVariables"));

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 2,
  },
  slider: {
    width: "40px",
    height: "40px",
    borderRadius: "20px",
    boxShadow: "0px 2px 3.5px rgba(0,0,0,0.45)",
    color: "#333",
  },
  featuredContainer: {
    paddingTop: "58px",
    paddingBottom: "58px",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "10px",
      paddingBottom: "10px",
    },
    "& .slick-list": {
      margin: "0 -15px",
      [theme.breakpoints.down("sm")]: {
        margin: "0 -5px",
      },
    },
    "& .slick-slide": {
      padding: "0 15px",
      [theme.breakpoints.down("sm")]: {
        padding: "0 5px",
      },
    },
  },
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
  iconHover: {
    position: "absolute",
    top: "50%",
    zIndex: "11",
    right: "-22px",
    marginTop: "-22px",
    width: "40px",
    [theme.breakpoints.down("xs")]: {
      right: "-10px",
    },
    "& svg": {
      width: "40px",
      height: "40px",
      cursor: "pointer",
      padding: "5px",
      borderRadius: "50%",
      backgroundColor: "#fff",
      boxShadow: "0px 2px 5px rgb(0 0 0 / 16%)",
      [theme.breakpoints.down("xs")]: {
        width: "35px",
        height: "35px",
      },
    },
    "&:hover": {
      "& svg": {
        backgroundColor: "#f06425",
        transition: "all ease-in-out 0.4s",
        fill: "#fff",
      },
    },
    "&.prevBtn": {
      left: "-22px",
      [theme.breakpoints.down("xs")]: {
        left: "-10px",
      },
    },
  },
  tabPanel: {
    "@media(max-width: 1023px)": {
      marginRight: "-24px",
    },
    "@media(max-width: 600px)": {
      marginRight: "-16px",
    },
  },
}));

const FeaturedNewCar = () => {
  const [cars, setCars] = useState([]);
  const [current, setCurrent] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    try {
      (async () => {
        const {
          data: { results },
        } = await api.get(`api/cars/search-featured-car/?car_type=new`);

        if (Array.isArray(results)) {
          setCars(results);
        }
      })();
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <Container maxWidth="lg" className={classes.featuredContainer}>
      <Suspense fallback={renderLoader()}>
        <SectionTitle
          title1={langVariables !== null ? langVariables["featured"].lang_content : "Featured"}
          title2={langVariables !== null ? langVariables["new_car"].lang_content : "New Cars"}
        />
        <Swiper
          id="main"
          speed={100}
          freeMode={false}
          freeModeFluid={true}
          navigation={true}
          // className="swiperClass"
          className={classes.tabPanel}
          breakpoints={{
            200: {
              slidesPerView: 1.25,
              spaceBetween: 10,
            },
            600: {
              slidesPerView: 2.25,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3.5,
              spaceBetween: 10,
            },
            1025: {
              slidesPerView: 3,
              spaceBetween: 10,
              slidesPerGroup: 3,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 20,
              slidesPerGroup: 4,
            },
          }}
        >
          {cars.map((car, i) => {
            return (
              <SwiperSlide key={i}>
                <FeaturedNewCarCard cardClass="listViewHome" key={i} car={car} pathName={"featured-new-car"} />
              </SwiperSlide>
            );
          })}

          {/* {
          cars.filter(c => (c.car_manufactor && c.model_name))
              .map((car,i) => {
                return (
                  <SwiperSlide key={i}>
                      <FeaturedNewCarCard cardClass="listViewHome" key={i} car={car} />
                  </SwiperSlide>
                )
              })
        } */}
        </Swiper>
      </Suspense>
    </Container>
  );
};

export default FeaturedNewCar;
