import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "../../styles/slider/slider.css";
import "swiper/swiper-bundle";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "../PopularBrand/swiper.css";

import { api } from "@configs/configs";
import { Dialog, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// install Swiper modules
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";

import AuctionSheet from "@components/AuctionSheet";
//import Banner from "../../assets/new-section/banner.png";
import Banner2 from "../../assets/new-section/banner2.jpg";
import Banner3 from "../../assets/new-section/banner3.jpg";
import Banner4 from "../../assets/new-section/banner4.jpg";
import BannerSearch from "../../components/BannerSearch";
import Image from "../../assets/banner/banner-01.png";
import Image02 from "../../assets/banner/bg-2.png";
import Image03 from "../../assets/banner/bg-3.png";
import ImageLayer from "../../assets/banner/auctionsheet.png";
import ImageLayer02 from "../../assets/banner/car-service.png";
import { Link } from "react-router-dom";
import Slider from "react-animated-slider";
import axios from "axios";
import { render } from "react-dom";
import styled from "styled-components";

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
      display: "none",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "2px",
      marginTop: "-72px",
    },
  },
}));

const HomeSlider = () => {
  const classes = useStyles();
  const [sliders, setSliders] = useState([]);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [state, setState] = useState({
    mobileView: false,
  });
  const { mobileView } = state;

  useEffect(() => {
    try {
      (async () => {
        const {
          data: { res },
        } = await api.get(`api/site-images/site-image-upload/?image_for=banner&lang_code=en`);
        if (Array.isArray(res)) {
          setSliders(res);
        }
      })();
    } catch (err) {
      console.log("My Error : " + err);
    }
  }, []);

  // console.log("MY Sliders : "+sliders);

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

  const HomeSliderDesktop = () => {
    return (
      <BannerSlider>
        <Slider
          className="slider-wrapper"
          autoplay={2500}
          infinite={true}
          touchDisabled={true}
          minSwipeOffset={0}
          duration={2000}
          previousButton={""}
          nextButton={""}
        >
          {sliders.map((slider, index) =>
            slider.image_device == "pc" ? (
              <div
                key={index}
                className="slider-content slider02"
                style={{
                  backgroundImage: `url('${slider.image_url}')`,
                }}
              >
                <Link to={slider.redirect_to} style={{ textDecoration: "none" }}>
                  <div className="inner"></div>
                </Link>
              </div>
            ) : (
              []
            )
          )}
        </Slider>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <AuctionSheet />
        </Dialog>

        <div className={classes.bigSearch}>
          <BannerSearch />
        </div>
      </BannerSlider>
    );
  };
  const HomeSliderMobile = () => {
    return (
      <MobileSlider>
        <Swiper
          id="main"
          slidesPerView={"auto"}
          spaceBetween={15}
          centeredSlides={true}
          className="swiperClass"
          infinite="true"
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
        >
          {/* Some banners do not have redirect_to, but Link will always reload the page */}
          {sliders.map((slider, index) => {
            if (slider.image_device == "mobile") {
              // console.log(slider);
              if (slider.redirect_to !== "") {
                return (
                  <SwiperSlide key={index}>
                    <MobileSlide>
                      <Link to={slider.redirect_to} style={{ textDecoration: "none" }}>
                        <img src={slider.image_url} alt="Slider" />
                      </Link>
                    </MobileSlide>
                  </SwiperSlide>
                );
              } else {
                // HOTFIX to confirm that the auctionsheet will show
                return (
                  <SwiperSlide>
                    <MobileSlide>
                      <Link onClick={() => setOpen(true)} style={{ textDecoration: "none" }}>
                        <img src={slider.image_url} alt="Slider" />
                      </Link>
                    </MobileSlide>
                  </SwiperSlide>
                );
              }
            }

            return [];
          })}
        </Swiper>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <AuctionSheet />
        </Dialog>
      </MobileSlider>
    );
  };
  return mobileView ? HomeSliderMobile() : HomeSliderDesktop();
};
const MobileSlider = styled.div`
  margin-top: 120px;
  padding: 20px 0;
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
  @media (max-width: 1023px) {
    margin-top: 50px;
    .slider-wrapper {
      height: 425px;
    }
  }
  @media (min-width: 600px) and (max-width: 767px) {
    .slider-wrapper {
      .slide {
        height: 425px !important;
      }
    }
  }

  @media (max-width: 767px) {
    margin-top: 100px;
    .slider-wrapper {
      .slide {
        height: 355px;
      }
    }
  }
`;

export default HomeSlider;
