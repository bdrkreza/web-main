import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "../../styles/slider/slider.css";
import { Link } from "react-router-dom";
import BannerSearch from "../../components/BikeBannerSearch";
import { makeStyles, Dialog } from "@material-ui/core";
import AuctionSheet from "@components/AuctionSheet";
import Banner01 from "../../assets/bikepage/banner01.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "../PopularBrand/swiper.css";
// import Banner3 from "../../assets/new-section/banner3.jpg";
// import Banner4 from "../../assets/new-section/banner4.jpg";

// install Swiper modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const useStyles = makeStyles((theme) => ({
  bigSearch: {
    margin: "-144px auto 15px",
    maxWidth: "1232px",
    borderRadius: "5px",
    fontFamily: '"Open Sans"',
    "& .PrivateTabIndicator-colorSecondary-18": {
      background: "transparent",
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: "90%",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      margin: "-55px auto 15px",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "2px",
    },
  },
}));

const content = [
  {
    id: 1,
    title: "Your Best Ride",
    subTitle: " It will never get easier without",
    description: "",
    image: Banner01,
    button: "See more",
    buttonLink: "/new-car/",
  },
];

const BikePageSlider = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  const [state, setState] = useState({
    mobileView: false,
  });
  const { mobileView } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1023.95
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);
  const BikeSliderDesktop = () => {
    return (
      <BannerSlider>
        <Slider
          className="slider-wrapper"
          autoplay={5000}
          touchDisabled={true}
          minSwipeOffset={0}
        >
          <div
            className="slider-content slider02"
            style={{
              backgroundImage:
                "url(https://bhalogari-static.s3.ap-southeast-1.amazonaws.com/media/banner/Slider_Bike_Section_Banner_13092021.jpg)",
            }}
          >
            <Link to="/sell-bike" style={{ textDecoration: "none" }}>
              <div className="inner"></div>
            </Link>
          </div>
        </Slider>
        <div className={classes.bigSearch}>
          <BannerSearch />
        </div>
      </BannerSlider>
    );
  };
  const BikeSliderMobile = () => {
    return (
      <MobileSwapper>
        <Swiper
          id="main"
          slidesPerView={"auto"}
          spaceBetween={15}
          centeredSlides={true}
          className="swiperClass"
          loop={false}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
        >
          {/* <SwiperSlide>
            <MobileSlide>
              <Link to="/service" style={{ textDecoration: "none" }}>
                <img
                  src="https://bhalogari-static.s3.ap-southeast-1.amazonaws.com/media/banner-mobile/Home_Slider_Banner_2_Mobile_31082021.png"
                  alt=""
                />
              </Link>
            </MobileSlide>
          </SwiperSlide> */}
          <SwiperSlide>
            <MobileSlide>
              <Link to="/bikes" style={{ textDecoration: "none" }}>
                <img
                  src="https://bhalogari-static.s3.ap-southeast-1.amazonaws.com/media/banner-mobile/Home_Slider_Slider_Banner_Mobile_31082021.png"
                  alt=""
                />
              </Link>
            </MobileSlide>
          </SwiperSlide>
          {/* <SwiperSlide>
            <MobileSlide>
              <Link to="/service" style={{ textDecoration: "none" }}>
                <img src={Banner3} alt="" />
              </Link>
            </MobileSlide>
          </SwiperSlide>
          <SwiperSlide>
            <MobileSlide onClick={handleClickOpen}>
              <img src={Banner4} alt="" />
            </MobileSlide>
          </SwiperSlide> */}
        </Swiper>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <AuctionSheet />
        </Dialog>
      </MobileSwapper>
    );
  };
  return mobileView ? BikeSliderMobile() : BikeSliderDesktop();
};

const MobileSwapper = styled.div`
  margin-top: 120px;
  padding: 20px 0 0;
`;
const MobileSlide = styled.div`
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  img {
    width: 100%;
  }
`;
const BannerSlider = styled.div`
  margin-top: 186px;
  position: relative;
  .bikeinner {
    display: block;
    margin: 10% auto 0;
    height: 200px;
    p {
      margin: 0;
      text-align: left;
    }
    h1 {
      margin: 0;
    }
  }
  @media (max-width: 1023px) {
    margin-top: 50px;
    .bikeinner {
      margin: 20% auto 0;
    }
  }
  @media (max-width: 767px) {
    .slider-wrapper,
    .slide {
      height: 345px;
    }
  }
`;

export default BikePageSlider;
