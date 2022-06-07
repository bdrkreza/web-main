import { Container } from "@material-ui/core";
import SectionTitle from "@components/SectionTitle";
import React, { useState, useEffect } from "react";

import styled from "styled-components";
import Standard from "../../assets/bikepage/standard.svg";
import Scooter from "../../assets/bikepage/scooter.svg";
import Sport from "../../assets/bikepage/sport.svg";
import Cruiser from "../../assets/bikepage/cruiser.svg";
import Cross from "../../assets/bikepage/cross.svg";
import Electric from "../../assets/bikepage/electric.svg";
import Classic from "../../assets/bikepage/classic.svg";
import { api } from "@configs/configs";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

const content = [
  {
    title: "Standard",
    icon: Standard,
  },
  {
    title: "Scooter",
    icon: Scooter,
  },
  {
    title: "Sport",
    icon: Sport,
  },
  {
    title: "Cruiser",
    icon: Cruiser,
  },
  {
    title: "Cross",
    icon: Cross,
  },
  {
    title: "Electric",
    icon: Electric,
  },
  {
    title: "Classic",
    icon: Classic,
  },
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

export default function SearchByType(props) {
  const [state, setState] = useState({
    mobileView: false,
  });

  const { mobileView } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1024
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

  const searchHandler = (title) => {
    (async () => {
      try {
        const { data } = await api.get(`api/bikes/choose-by-body-type/?body_type=${title}`);

        if (window.location.pathname === "/searched-bike-list") {
          if (data.count > 0) {
            props.getBikeData(data.results, data.count);
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
                typeFlag: true,
              },
            });
          } else {
            message = "No listings found for this type!";
            notify();
          }
        }
      } catch (err) {
        message = "404 not found!";
        notify();
      }
    })();
  };
  const DesktopView = () => {
    return (
      <Container>
        <SearchByTypeContainer>
          <SectionTitle title1="Search by" title2="Type" />
          <div className="displayflex">
            {content.map((item, i) => (
              <Card key={i} onClick={() => searchHandler(item.title)}>
                <img src={item.icon} alt={item.title} />
                <p>{item.title}</p>
              </Card>
            ))}
          </div>
          <ToastContainer />
        </SearchByTypeContainer>
      </Container>
    );
  };
  const MobileView = () => {
    return (
      <SearchByTypeContainer>
        <Container maxWidth="lg">
          <SectionTitle title1="Search by" title2="Type" />
        </Container>

        <Container maxWidth="lg" className="makerContainerMobile">
          <Swiper
            id="main"
            speed={100}
            freeMode={false}
            freeModeFluid={true}
            spaceBetween={10}
            breakpoints={{
              200: {
                slidesPerView: 2.5,
              },
              425: {
                slidesPerView: 3.5,
                spaceBetween: 15,
              },
              640: {
                slidesPerView: 4.5,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 5.5,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 5.5,
              },
            }}
          >
            {content.map((item, i) => (
              <SwiperSlide key={i}>
                <Card onClick={() => searchHandler(item.title)}>
                  <img src={item.icon} alt={item.title} />
                  <p>{item.title}</p>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
        <ToastContainer />
      </SearchByTypeContainer>
    );
  };
  return mobileView ? MobileView() : DesktopView();
}

const SearchByTypeContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  @media (max-width: 767px) {
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .makerContainerMobile {
    padding-left: 20px;
    padding-right: 0;
  }
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
  width: 150px;
  height: 150px;
  border-radius: 4px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #efefef;
  @media (min-width: 1024px) and (max-width: 1200px) {
    width: calc(14.285% - 10px);
    height: 130px;
  }
  &:hover {
    background-color: #f0ded6;
    box-shadow: 0px 0px 20px #f0ded6;
    transition: all ease-in-out 0.3s;
  }
  > img {
    height: 40%;
    width: 40%;
    margin-bottom: 10px;
  }
  > p {
    font-size: 15px;
    color: #555555;
    font-weight: 600;
    font-family: "Open Sans";
  }
  @media (max-width: 1023px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    height: 120px;
    width: 100%;
  }
  @media (max-width: 425px) {
    width: 100%;
  }
`;
