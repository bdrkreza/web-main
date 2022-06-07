import "swiper/swiper-bundle";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "../PopularBrand/swiper.css";

//import axios from "axios";
import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";

import CustomerFeedbackCard from "./CustomerFeedbackCard";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import SectionTitle from "../../components/SectionTitle";
import Slider from "react-slick";
import { api } from "@configs/configs";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const lang = sessionStorage.getItem('lang')

const useStyles = makeStyles((theme) => ({
  feedbackHeader: {
    paddingBottom: "15px",
    fontSize: "32px",
    lineHeight: "32px",
    color: "#000000",
    fontWeight: 700,
    fontFamily: "Open Sans",
  },
  feedbackContainer: {
    width: "100%",
    paddingTop: "58px",
    paddingBottom: "48px",
    display: "flex",
    alignItems: "center",
    filter: "drop-shadow(0px 3px 3.5px rgba(0,0,0,0.16))",
    backgroundColor: "#efefef",
    "& .swiperClass .swiper-slide": {
      backgroundColor: "transparent",
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: "10px",
      paddingBottom: "10px",
      "& .slick-slider": {
        marginTop: "-20px",
      },
    },
    "& .slick-list": {
      margin: "0 -15px",
      paddingTop: "35px",
      paddingBottom: "10px",
    },
    "& .slick-slide": {
      padding: "0 15px",
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

const CustomerFeedback = (props) => {
  const classes = useStyles();
  const [current, setCurrent] = useState(false);
  const [feedbacks, setFeedback] = useState([]);

  var settings = {
    nav: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
        },
      },
    ],
  };

  function NextArrow(props) {
    const { className, style, onClick, currentSlide } = props;
    if (currentSlide === 0) {
      setCurrent(true);
    } else {
      setCurrent(false);
    }
    return (
      <div className={classes.iconHover} onClick={onClick}>
        <NavigateNextIcon />
      </div>
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    if (!current) {
      return (
        <div className={`${classes.iconHover} ${"prevBtn"}`} onClick={onClick}>
          <NavigateBeforeIcon />
        </div>
      );
    } else {
      return "";
    }
  }

  useEffect(() => {
    try {
      (async () => {
        const response = await api.get("api/userfeedback/feedback/");
        if (Array.isArray(response.data)) {
          setFeedback(response.data);
        }
      })();
    } catch (err) {console.error(err);}
  }, []);

  return (
    <div className={classes.feedbackContainer}>
      <Container maxWidth="lg">
        <SectionTitle
            title1={(props.langVariables !== null) ? props.langVariables['our_customer'].lang_content : "Our Customer"}
            title2={(props.langVariables !== null) ? props.langVariables['feedback'].lang_content : "Feedback"}
        />
        {/* 
        <Slider style={{ paddingTop: "30px" }} {...settings}>
          {feedbacks.map((feedback, index) => (
            <CustomerFeedbackCard feedback={feedback} key={feedback.id} />
          ))}
        </Slider> */}
        <Swiper
          id="main"
          speed={100}
          freeMode={false}
          freeModeFluid={true}
          navigation={true}
          className="swiperClass"
          style={{ paddingTop: "35px" }}
          breakpoints={{
            200: {
              slidesPerView: 1.25,
              spaceBetween: 10,
              slidesPerGroup: 1,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
              slidesPerGroup: 2,
            },
          }}
        >
          {feedbacks.map((feedback, i) => {
            return (
              <SwiperSlide key={i}>
                <CustomerFeedbackCard feedback={feedback} key={feedback.id} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </div>
  );
};

export default CustomerFeedback;
