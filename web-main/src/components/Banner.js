import React from "react";
import {  Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "react-slick";
import CarouselBG from "../assets/mv_spring.png";
// import { CenterFocusStrong } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflowX: "hidden",
    overflowY: "hidden",
  },
  banner: {
    justifyContent: "center",
    alignItems: "center",
  },
  slider: {},
  sliderImg: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
  },
}));

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red", right: "0" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green", left: "0" }}
      onClick={onClick}
    />
  );
}

const Banner = () => {
  const classes = useStyles();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Grid container className={classes.root}>
      <Grid item lg={12} className={classes.banner}>
        <Slider {...settings} className={classes.slider}>
          <div>
            <img src={CarouselBG} className={classes.sliderImg} />
          </div>
          <div>
            <img src={CarouselBG} className={classes.sliderImg} />
          </div>
          <div>
            <img src={CarouselBG} className={classes.sliderImg} />
          </div>
          <div>
            <img src={CarouselBG} className={classes.sliderImg} />
          </div>
          <div>
            <img src={CarouselBG} className={classes.sliderImg} />
          </div>
        </Slider>
      </Grid>
    </Grid>
  );
};

export default Banner;
