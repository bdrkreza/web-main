import { Container } from "@material-ui/core";
import SectionTitle from "@components/SectionTitle";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BagOfMoney from "../../assets/bikepage/bagofmoney.svg";
import List from "../../assets/bikepage/list.svg";
import Money from "../../assets/bikepage/money.svg";
import Percent from "../../assets/bikepage/percent.svg";
import Shield from "../../assets/bikepage/shield.svg";
import { makeStyles } from "@material-ui/core/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle";
import "swiper/swiper.min.css";

const content = [
  {
    title: "Best Price",
    icon: BagOfMoney,
  },
  {
    title: "Instant Payment",
    icon: Percent,
  },
  {
    title: "Guaranteed Sale",
    icon: Money,
  },
  {
    title: "No Legal Hassle",
    icon: List,
  },
  {
    title: "Safety Assured",
    icon: Shield,
  },
];
const useStyles = makeStyles((theme) => ({
  root: {
    opacity: "1",
  },
}));

const WhySellBike = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    mobileView: false,
  });

  const { mobileView } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 680
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const WhySellBikeDesktop = () => {
    return (
      <WhySellContainer>
        <Container>
          <SectionTitle title1="Why Sell on" title2="Bhalogari?" />
          <div className="displayflex">
            {content.map((item, i) => (
              <Card key={i}>
                <img src={item.icon} alt={item.title} />
                <p>{item.title}</p>
              </Card>
            ))}
          </div>
        </Container>
      </WhySellContainer>
    );
  };

  const WhySellBikeMobile = () => {
    return (
      <WhySellContainer>
        <Container maxWidth="lg">
          <SectionTitle title1="Why Sell on" title2="Bhalogari?" />
        </Container>

        <Container maxWidth="lg" className="makerContainerMobile">
          <Swiper
            id="main"
            spaceBetween={10}
            slidesPerView={2.5}
            navigation={true}
            speed={100}
            freeMode={false}
            freeModeFluid={true}
            breakpoints={{
              280: {
                slidesPerView: 2.25,
                spaceBetween: 10,
              },
              360: {
                slidesPerView: 2.25,
                spaceBetween: 10,
              },
              320: {
                slidesPerView: 2.5,
                spaceBetween: 10,
              },
              375: {
                slidesPerView: 2.25,
                spaceBetween: 10,
              },
              425: {
                slidesPerView: 2.25,
                spaceBetween: 10,
              },
              540: {
                slidesPerView: 2.5,
                spaceBetween: 10,
              },
            }}
          >
            {content.map((item, i) => (
              <SwiperSlide key={i}>
                <Card>
                  <img src={item.icon} alt={item.title} />
                  <p>{item.title}</p>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </WhySellContainer>
    );
  };
  return mobileView ? WhySellBikeMobile() : WhySellBikeDesktop();
};

const WhySellContainer = styled.div`
  margin-top: 58px;
  padding-top: 50px;
  padding-bottom: 58px;
  background-color: #efefef;
  .displayflex {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .makerContainerMobile {
    padding-right: 0;
  }
  @media (max-width: 768px) {
    margin-top: 50px;
  }

  @media (max-width: 767px) {
    margin-top: 25px;
    padding-top: 15px;
    padding-bottom: 15px;
  }
`;
const Card = styled.div`
  width: calc(20% - 20px);
  border-radius: 4px;
  background-color: #ffffff;
  border: 1px solid #e4e4e4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: calc(20% - 5px);
  }
  > img {
    height: 40%;
    width: 40%;
    margin-bottom: 30px;
  }
  > p {
    font-size: 18px;
    line-height: 30px;
    color: #000000;
    font-weight: 600;
    font-family: "Open Sans";
  }
  @media (max-width: 992px) {
    > img {
      margin-bottom: 10px;
    }
    > p {
      font-size: 14px;
      text-align: center;
    }
  }
  @media (max-width: 767px) {
    > p {
      font-size: 12px;
    }
  }
  @media (max-width: 680px) {
    width: inherit;
    padding: 15px 5px;
    > img {
      width: auto;
      height: 55px;
    }
  }
`;

export default WhySellBike;
