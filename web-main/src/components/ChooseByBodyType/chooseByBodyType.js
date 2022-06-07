import React, { Component, useEffect, useState } from "react";
import { Grid, Container, Typography } from "@material-ui/core";
import { api } from "@configs/configs";
import BodyCard from "./bodyCard";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Slider from "react-slick";
import "./chooseByBodyType.css";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import SectionTitle from "../../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const lang = sessionStorage.getItem('lang')
const langVariables = JSON.parse(sessionStorage.getItem('langVariables'))

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  chooseByBody: {
    backgroundColor: "#ffffff",
    overflow: "hidden",
    paddingBottom: "30px",
  },
  bodyContainer: {
    paddingTop: "54px",
    paddingBottom: "13px",
    gap: "10px",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "10px",
      paddingBottom: "10px",
      
    },
  },
  title: {
    fontSize: "32px",
    lineHeight: "32px",
    color: "#000000",
    fontWeight: "700",
    paddingBottom: "20px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
    },
  },
  bodyContainerRow: {
    "& .slick-list": {
      margin: "0 -10px",
    },
    "& .slick-slide": {
      padding: "0 10px",
    },
    [theme.breakpoints.down("md")]: {},
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
  bodyContainerMobile: {
    "@media(max-width: 767px)": {
      paddingLeft: "15px",
      paddingRight: "0",
    }
  }
}));

export default function ChooseByBodyType() {
  const [bodys, setBodys] = useState([]);
  const [current, setCurrent] = useState(false);
  const url = "api/cars/body-type/";
  const lastSlide = bodys.length;

  useEffect(() => {
    (async () => {
      await api.get(url).then((res) => {
        if (res.status === 200) {
          setBodys(res.data);
        }
      });
    })();
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.chooseByBody}>
      <Container maxWidth="lg" className={classes.bodyContainer}>
        <SectionTitle
            title1={(langVariables !== null) ? ((lang == 'bn') ? langVariables['body_type'].lang_content : langVariables['choose_by'].lang_content) : "Choose by"}
            title2={(langVariables !== null) ? ((lang == 'bn') ? langVariables['choose_by'].lang_content : langVariables['body_type'].lang_content) : "Body Type"}
        />
      </Container>
      <Container maxWidth="lg" className={classes.bodyContainerMobile}>
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
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 4.5,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 5.5,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 7,
              spaceBetween: 10,
              // navigation: true,
            },
          }}
        >
          {bodys.map((body, i) => {
            return (
              <SwiperSlide key={i}>
                <BodyCard
                  photo={body.body_image_url}
                  name={body.body_name}
                  key={i}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </div>
  );
}
