import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import SectionTitle from "../../components/SectionTitle";
import IconBox from "@components/IconBox";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

const lang = sessionStorage.getItem("lang");
const langVariables = JSON.parse(sessionStorage.getItem("langVariables"));
const content = [
  {
    id: 1,
    step: "../../assets/images/Step1.png",
    icon: "../../assets/images/Step1Logo.png",
    title:
      langVariables !== null
        ? lang == "bn"
          ? langVariables["choose_your_car"].lang_content
          : "Choose Your Car"
        : "Choose Your Car",
    description:
      langVariables !== null
        ? lang == "bn"
          ? langVariables["recommended_information"].lang_content
          : "We have compiled recommended information that you want to know to buy your car."
        : "We have compiled recommended information that you want to know to buy your car.",
  },
  {
    id: 2,
    step: "../../assets/images/Step2.png",
    icon: "../../assets/images/Step2Logo.png",
    title:
      langVariables !== null
        ? lang == "bn"
          ? langVariables["contact_seller"].lang_content
          : "Contact Seller"
        : "Contact Seller",
    description:
      langVariables !== null
        ? lang == "bn"
          ? langVariables["selected_car"].lang_content
          : "After you've selected a car, we arrange a viewing to seller location or one of our points."
        : "After you've selected a car, we arrange a viewing to seller location or one of our points.",
  },
  {
    id: 3,
    step: "../../assets/images/Step3.png",
    icon: "../../assets/images/Step3Logo.png",
    title:
      langVariables !== null
        ? lang == "bn"
          ? langVariables["financing_registration"].lang_content
          : "Financing & Registration"
        : "Financing & Registration",
    description:
      langVariables !== null
        ? lang == "bn"
          ? langVariables["paper_work"].lang_content
          : "We deal with the paper work to avail your financing and registration in 24 hours"
        : "We deal with the paper work to avail your financing and registration in 24 hours",
  },
  {
    id: 4,
    step: "../../assets/images/Step4.png",
    icon: "../../assets/images/Step4Logo.png",
    title:
      langVariables !== null
        ? lang == "bn"
          ? langVariables["get_car"].lang_content
          : "Get Your Car"
        : "Get Your Car",
    description:
      langVariables !== null
        ? lang == "bn"
          ? langVariables["car_ownership"].lang_content
          : "Embrace the joy of Car Ownership without any of the hassle! "
        : "Embrace the joy of Car Ownership without any of the hassle! ",
  },
];

const BhaloBuy = () => {
  const [state, setState] = useState({
    mobileView: false,
  });
  const { mobileView } = state;
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

  const DesktopView = () => {
    return (
      <BhaloBuyHere>
        <Container maxWidth="lg">
          <SectionTitle
            title1={
              langVariables !== null
                ? langVariables["how_to_buy"].lang_content
                : "How to buy your car with Bhalogari?"
            }
          />
          <BhalogariDiv>
            {content.map((item, index) => (
              <IconBox
                key={index}
                classbox="each-icon-box"
                StepImage={item.step}
                BoxIcon={item.icon}
                BoxTitle={item.title}
                BoxDescription={item.description}
              />
            ))}
          </BhalogariDiv>
        </Container>
      </BhaloBuyHere>
    );
  };

  const MobileView = () => {
    return (
      <BhaloBuyHere>
        <Container maxWidth="lg">
          <SectionTitle
            title1={
              langVariables !== null
                ? langVariables["how_to_buy"].lang_content
                : "How to buy your car with Bhalogari?"
            }
          />
          <BhalogariDiv>
            <Swiper
              id="main"
              spaceBetween={0}
              slidesPerView={1}
              navigation={{
                navigation: {
                  nextEl: ".review-swiper-button-next",
                  prevEl: ".review-swiper-button-prev",
                },
              }}
              speed={100}
              freeMode={true}
              freeModeFluid={true}
              // className="swiperClass"
            >
              {content.map((item, index) => (
                <SwiperSlide key={index}>
                  <IconBox
                    classbox="each-icon-box"
                    StepImage={item.step}
                    BoxIcon={item.icon}
                    BoxTitle={item.title}
                    BoxDescription={item.description}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </BhalogariDiv>
        </Container>
      </BhaloBuyHere>
    );
  };
  return mobileView ? MobileView() : DesktopView();
};

const BhaloBuyHere = styled.div`
  padding-top: 58px;
  padding-bottom: 58px;
  @media (max-width: 767px) {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

const BhalogariDiv = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  border-radius: 5px;
  box-shadow: 0px 2px 4.5px rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  & .each-icon-box {
    position: relative;
    max-width: 25%;
    margin-top: 20px;
    padding: 0 20px 20px;
    &:not(:last-child):before {
      position: absolute;
      content: " ";
      top: 15%;
      right: 0;
      width: 1px;
      height: 70%;
      background: #cecece;
    }
  }
  @media (max-width: 1024px) {
    h3 {
      font-size: 16px;
      padding: 10px 0;
    }
    p {
      font-size: 13px;
    }
  }
  @media (max-width: 767px) {
    .swiper-button-prev {
      display: none;
    }
    .swiper-button-next {
      display: none;
    }
    flex-wrap: wrap;
    .each-icon-box {
      max-width: 50%;
    }
  }
  @media (max-width: 600px) {
    .each-icon-box {
      max-width: 95%;
      min-height: 350px;
      border-right: 1px solid #eee;
    }
  }
  @media (max-width: 420px) {
    align-items: baseline;
    h3 {
      font-size: 16px;
      padding: 5px 0;
    }
    .each-icon-box {
      //   max-width: 50%;
      ${"" /* align-items: baseline; */}
      ${
        "" /* &:not(:last-child):before {
                position: absolute;
                content: ' ';
                top: inherit;
                bottom: 0;
                right: 5%;
                width: 90%;
                height: 1px;
                background: #cecece;
            } */
      }
    }
  }
`;
export default BhaloBuy;
