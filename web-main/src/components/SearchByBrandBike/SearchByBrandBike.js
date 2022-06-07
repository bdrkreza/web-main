import { Container } from "@material-ui/core";
import SectionTitle from "@components/SectionTitle";
import React, { useEffect } from "react";
import styled from "styled-components";
import Bajaj from "../../assets/bikepage/Bajaj-Logo.svg";
import Hero from "../../assets/bikepage/hero.svg";
import Honda from "../../assets/bikepage/honda.svg";
import Keeway from "../../assets/bikepage/keeway-logo.svg";
import Ktm from "../../assets/bikepage/ktm.svg";
import Lifan from "../../assets/bikepage/lifan.svg";
import Suzuki from "../../assets/bikepage/suzuki.svg";
import Tvs from "../../assets/bikepage/TVS.svg";
import Yamaha from "../../assets/bikepage/yamaha.svg";
// import { makeStyles } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "@configs/configs";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

const content = [
  { id: 1, title: "yamaha", img: Yamaha },
  { id: 2, title: "honda", img: Honda },
  { id: 3, title: "suzuki", img: Suzuki },
  { id: 4, title: "bajaj", img: Bajaj },
  { id: 5, title: "hero", img: Hero },
  { id: 6, title: "tvs", img: Tvs },
  { id: 7, title: "ktm", img: Ktm },
  { id: 8, title: "keeway", img: Keeway },
  { id: 9, title: "lifan", img: Lifan },
];

const toastCss = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

function SearchByBrand({ getBikeData }) {
  const [state, setState] = useState({
    mobileView: false,
  });

  const { mobileView } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1023
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const history = useHistory();
  let message = "";
  const notify = () => toast.error(message, toastCss);

  const searchByBrand = (title) => {
    (async () => {
      try {
        const { data } = await api.get(
          `api/bikes/choose-by-brand/?brand_name=${title}`
        );
        if (window.location.pathname === "/searched-bike-list") {
          if (data.count > 0) {
            getBikeData(data.results, data.count);
          } else {
            message = "No listings found for this type!";
            notify();
          }
        } else {
          if (data.count > 0) {
            history.push({
              pathname: "/searched-bike-list",
              state: {
                bikeData: data.results,
                count: data.count,
                brandFlag: true,
              },
            });
          } else {
            message = "No listings found for this brand!";
            notify();
          }
        }
      } catch (err) {
        message = "404 not found!";
        notify();
      }
    })();
  };

  const SearchBrandDesktop = () => {
    return (
      <GrayBackground>
        <Container>
          <SearchByBrandContainer>
            <SectionTitle title1="Search by" title2="Brand" />
            <div className="displayflex">
              {content.map((item) => (
                <Card key={item.id} onClick={() => searchByBrand(item.title)}>
                  <img src={item.img} alt="Bike"/>
                </Card>
              ))}
            </div>
            <ToastContainer />
          </SearchByBrandContainer>
        </Container>
      </GrayBackground>
    );
  };

  const SearchbrandMobile = () => {
    return (
      <GrayBackground>
        <Container maxWidth="lg">
          <SectionTitle title1="Search by" title2="Brand" />
        </Container>

        <Container maxWidth="lg" className="makerContainerMobile">
          <Swiper
            id="main"
            speed={100}
            freeMode={false}
            freeModeFluid={true}
            breakpoints={{
              320: {
                slidesPerView: 2.25,
                spaceBetween: 10,
              },
              375: {
                slidesPerView: 2.5,
                spaceBetween: 10,
              },
              425: {
                slidesPerView: 3.5,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 4.25,
                spaceBetween: 10,
              },
            }}
          >
            {content.map((item, i) => (
              <SwiperSlide key={i}>
                <Card key={item.id} onClick={() => searchByBrand(item.title)}>
                  <img src={item.img} alt="item.title"/>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </GrayBackground>
    );
  };
  return mobileView ? SearchbrandMobile() : SearchBrandDesktop();
}

const GrayBackground = styled.div`
  background-color: #efefef;
  padding: 50px 0px;
  @media (max-width: 767px) {
    margin-top: 15px;
    padding: 12px 0;
    padding-bottom: 20px;
  }
  .makerContainerMobile {
    padding-left: 20px;
    padding-right: 0;
  }
`;

const SearchByBrandContainer = styled.div`
  > div {
    &.displayflex {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
`;

const Card = styled.div`
  cursor: pointer;
  width: calc(11% - 8px);
  height: 130px;
  border-radius: 3px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 1024px) and (max-width: 1100px) {
    width: calc(11.111% - 10px);
    height: 100px;
  }
  &:hover {
    background-color: #f0ded6;
    box-shadow: 0px 0px 20px #f0ded6;
    transition: all ease-in-out 0.3s;
  }
  > img {
    height: 70%;
    width: 70%;
  }
  > p {
    font-size: 18px;
    line-height: 30px;
    color: #000000;
    font-weight: 600;
    font-family: "Open Sans";
  }
  @media (max-width: 1024px) {
    width: 100px;
  }
  @media (max-width: 1023px) {
    width: 100%;
  }
`;
export default SearchByBrand;
