import React from 'react';
import styled from 'styled-components';
import { makeStyles } from "@material-ui/core";
import Slider from "react-animated-slider";

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
      title: "We Care",
      description: "Your car",
      image: "https://bhalogari-static.s3.ap-southeast-1.amazonaws.com/media/banner/car_service_banner_14082021.png",
    },
  ];
function ServicesCover() {
    const classes = useStyles();
    return (
        <BannerSlider>
            <Slider
                className="slider-wrapper"
                autoplay={2500}
                touchDisabled={true}
                minSwipeOffset={0}
                duration={2000}
            >
                {content.map((item, index) => (
                <div
                    key={index}
                    className="slider-content"
                    style={{
                    backgroundImage: `url('${item.image}')`,
                    }}
                >
                    <div className="inner">
                    <h1>{item.title}</h1>
                    {/* <p>{item.description}</p> */}
                    </div>
                </div>
                ))}
            </Slider>
    </BannerSlider>
    )
}

const BannerSlider = styled.div`
  margin-top: 186px;
  position: relative;
  .nextButton, .previousButton {
      display: none;
  }
  @media (max-width: 1023px) {
    margin-top: 50px;
  }
`;
export default ServicesCover
