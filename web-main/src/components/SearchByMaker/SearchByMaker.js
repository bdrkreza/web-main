import React, { useEffect, useState } from "react";
import { Container, useTheme } from "@material-ui/core";
import SearchByMakerCard from "./SearchByMakerCard";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import { makeStyles } from "@material-ui/core/styles";
import { api } from "@configs/configs";
import Slider from "react-slick";
import Title from "../../components/SectionTitle";
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
  choosebyMakers: {
    padding: "58px 0",
    backgroundColor: "#efefef",
    [theme.breakpoints.down("xs")]: {
      marginTop: "0px",
      padding: "20px 0",
    },
  },
  makerContainer: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: "5px",
      paddingBottom: "5px",
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
    width: "90%",
    margin: "0px auto",
    // marginLeft: "-7px",
    // marginRight: "-7px",
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
      textDecoration: "none",
      transition: "all ease-in-out 0.4s",
      "&:hover": {
        color: "#f06425",
        transition: "all ease-in-out 0.4s",
      },
      [theme.breakpoints.down("sm")]: {
        color: "#f06425",
        fontSize: "14px",
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

const SearchByMaker = () => {
  const [current, setCurrent] = React.useState(false);
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
      <div className={classes.iconHover} onClick={onClick}>
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
        <div className={`${classes.iconHover} ${"prevBtn"}`} onClick={onClick}>
          <NavigateBeforeIcon />
        </div>
      );
    } else {
      return "";
    }
  }

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

  const DesktopSlider = () => {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 9,
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
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 300,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <div className={classes.choosebyMakers}>
        <Container maxWidth="lg">
          <Title title1="Choose by" title2="Maker" />
          <Slider {...settings}>
            {makers.map((maker, i) => {
              return (
                <SearchByMakerCard
                  photo={maker.maker_logo_url}
                  name={maker.maker_name}
                  key={i}
                />
              );
            })}
          </Slider>
        </Container>
      </div>
    );
  };
  const MobileSlider = () => {
    return (
      <div className={classes.choosebyMakers}>
        <Container maxWidth="lg">
          <Title title1="Choose by" title2="Maker" />
          <Swiper
            id="main"
            spaceBetween={0}
            slidesPerView={3}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
            // centeredSlides={false}
            navigation={true}
            speed={100}
            freeMode={false}
            freeModeFluid={true}
          >
            {makers.map((maker, i) => {
              return (
                <SwiperSlide key={i}>
                  <SearchByMakerCard
                    photo={maker.maker_logo_url}
                    name={maker.maker_name}
                    key={i}
                  />
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

export default SearchByMaker;
