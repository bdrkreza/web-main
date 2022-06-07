import React, { Component, useEffect, useState } from "react";
import { Grid, Container, Typography } from "@material-ui/core";
import { api } from "@configs/configs";
import SearchByBodyCard from "./SearchByBodyCard";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Slider from "react-slick";
import "../../components/ChooseByBodyType/chooseByBodyType.css";
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  chooseByBody: {
    marginTop: "20px",
    backgroundColor: "#ffffff",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "0px",
    },
  },
  bodyContainer: {
    paddingTop: "54px",
    paddingBottom: "0px",
    // flexGrow: 1,
    // // paddingTop: "58px",
    // // paddingBottom: "58px",
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "space-evenly",
    // marginLeft: "auto",
    // marginRight: "auto",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "0",
      paddingBottom: "0",
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
    left: "-22px",
    marginTop: "-30px",
    [theme.breakpoints.down("xs")]: {
      right: "37px",
      top: "-52px",
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
  },
}));

const SearchByBody = () => {
  const [bodys, setBodys] = useState([]);
  const [current, setCurrent] = useState(false);
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  function NextArrow(props) {
    const classes = useStyles();
    const { className, style, onClick, currentSlide } = props;
    if (currentSlide === 0) {
      setCurrent(true);
    } else {
      setCurrent(false);
    }
    return (
      <div
        className={classes.iconHover}
        style={{
          ...style,
          right: "-22px",
          left: "inherit",
        }}
        onClick={onClick}
      >
        <NavigateNextIcon />
      </div>
    );
  }

  function PrevArrow(props) {
    const classes = useStyles();
    const theme = useTheme();
    const match = useMediaQuery(theme.breakpoints.up("sm"));
    const { className, style, onClick } = props;
    if (!current) {
      return (
        <div className={classes.iconHover} onClick={onClick}>
          <NavigateBeforeIcon />
        </div>
      );
    } else return "";
  }

  const url = "api/cars/body-type/";

  useEffect(() => {
    (async () => {
      await api.get(url).then((res) => {
        if (res.status === 200) {
          setBodys(res.data);
        }
      });
    })();
  }, []);

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 600
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const classes = useStyles();

  const DesktopSlider = () => {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 7,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            infinite: true,
          },
        },
      ],
    };

    return (
      <div className={classes.chooseByBody}>
        <Container maxWidth="lg" className={classes.bodyContainer}>
          <SectionTitle title1="Choose by" title2="Body Type" />
          <Slider {...settings}>
            {bodys.slice(0, 18).map((body, i) => {
              return <SearchByBodyCard photo={body.body_image_url} name={body.body_name} key={i} />;
            })}
          </Slider>
        </Container>
      </div>
    );
  };
  const MobileSlider = () => {
    return (
      <div className={classes.chooseByBody}>
        <Container maxWidth="lg" className={classes.bodyContainer}>
          <SectionTitle title1="Choose by" title2="Body Type" />
          <Swiper
            id="main"
            spaceBetween={20}
            slidesPerView={2}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            centeredSlides={false}
            navigation={true}
            speed={100}
            freeMode={true}
            freeModeFluid={true}
            // breakpoints={{
            //   // when window width is >= 426px
            //   426: {
            //     width: 426,
            //     slidesPerView: 3,
            //   },
            //   // when window width is >= 601px
            //   601: {
            //     width: 601,
            //     slidesPerView: 5,
            //   },
            //   768: {
            //     width: 769,
            //     slidesPerView: 6,
            //   },
            // }}
          >
            {bodys.slice(0, 18).map((body, i) => {
              return (
                <SwiperSlide key={i}>
                  <SearchByBodyCard photo={body.body_image_url} name={body.body_name} key={i} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Container>
      </div>
    );
  };
  return mobileView ? MobileSlider() : DesktopSlider();
};

export default SearchByBody;
