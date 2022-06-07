import React, { Fragment, useState, useEffect } from "react";
import Slider from "react-slick";
import { api } from "@configs/configs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Grid, Box, makeStyles } from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import PopularBrandCard from "@components/PopularBrandCard";
import SectionTitle from "../../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "../PopularBrand/swiper.css";
import BikeCardPopular from "@components/BikeCardPopular";

import SwiperCore, { Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

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
    padding: "0",
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
}));

const PopularToyota = () => {
  const [cars, setCars] = useState([]);
  const [current, setCurrent] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    try {
      (async () => {
        const {
          data: { results },
        } = await api.get(`api/bikes/choose-by-brand/?brand_name=honda`);

        if (Array.isArray(results)) {
          setCars(results);
        }
      })();
    } catch (err) {console.error(err);}
  }, []);

  return (
    <div maxWidth="lg" className={classes.featuredContainer}>
      <Swiper
        id="main"
        speed={100}
        freeMode={false}
        freeModeFluid={true}
        navigation={true}
        className="swiperClass"
        breakpoints={{
          200: {
            slidesPerView: 1.25,
            spaceBetween: 10,
          },
          425: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2.5,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 3.25,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
            slidesPerGroup: 4,
          },
        }}
      >
        {cars.map((car, i) => {
          return (
            <SwiperSlide key={i}>
              <BikeCardPopular key={i} car={car} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default PopularToyota;
