import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TrustCard from "./trustCard";
import { Container } from "@material-ui/core";
import SectionTitle from "../../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
// import "../PopularBrand/swiper.css";

const Trust = (props) => {
  const [state, setState] = useState({
    mobileView: false,
  });
  const { mobileView } = state;

  const lang = sessionStorage.getItem("lang");
  const title =
    props.langVariables !== null
      ? lang === "bn"
        ? props.langVariables["why_trust_bhalogari"].lang_content
        : "Why Trust Bhalogari?"
      : "Why Trust Bhalogari?";

  const DesktopView = () => {
    const containerStyle =
      "grid place-content-center grid-cols-2 lg:grid-cols-4 bg-gray-200 mt-0 mb-5 rounded-md shadow-md pt-[58px]";
    const boxStyle =
      "flex justify-center items-center bg-white box-border pt-[35px] rounded border-8 pt-2 pb-2 pl-4 pr-4";
      const hStyle = "pl-8 text-bg-orange text-2xl small:text-4xl font-bold  text-right m-0 pr-5";
    const pStyle = " pr-6 text-left mt-8 mb-8 text-sm small:text-lg leading-3 text-gray-700 font-normal";
    return (
      <TrustDiv>
        <Container maxWidth="lg">
          <SectionTitle
            title1={props.langVariables !== null ? title.split(" ").slice(0, -1).join(" ") : "Why Trust"}
            title2={props.langVariables !== null ? title.split(" ").splice(-1) : "Bhalogari?"}
          />
          {/* <TrustContainer>
            <TrustCard
              quantity={lang == "bn" ? "৪৬+" : "46+"}
              text1={lang == "bn" ? "প্রিমিয়ার" : "Premier"}
              text2={lang == "bn" ? "ব্র্যান্ডস" : "Brands"}
            />
            <TrustCard
              quantity={lang == "bn" ? "১ লক্ষ+" : "100K+"}
              text1={lang == "bn" ? "ভালো" : "Perfect"}
              text2={lang == "bn" ? "গাড়ি" : "Cars"}
            />
            <TrustCard
              quantity={lang == "bn" ? "১.৪ লক্ষ+" : "140K+"}
              text1={lang == "bn" ? "সন্তুষ্ট" : "Happy"}
              text2={lang == "bn" ? "গ্রাহক" : "Users"}
            />
            <TrustCard
              quantity={lang == "bn" ? "৮০০০+" : "8K+"}
              text1={lang == "bn" ? "রেজিস্টার্ড" : "Total"}
              text2={lang == "bn" ? "গ্রাহক" : "Registrations"}
            />
          </TrustContainer> */}

          <div className={containerStyle}>
            <div className={boxStyle}>
              <span className={hStyle}>{lang == "bn" ? "৪৬+" : "46+"}</span>
              <span className={pStyle}>{lang == "bn" ? "প্রিমিয়ার ব্র্যান্ডস" : "Premier Brands"}</span>
            </div>

            <div className={boxStyle}>
              <span className={hStyle}>{lang == "bn" ? "১ লক্ষ+" : "100K+"}</span>
              <span className={pStyle}>{lang == "bn" ? "ভালো গাড়ি" : "Perfect Cars"}</span>
            </div>

            <div className={boxStyle}>
              <span className={hStyle}>{lang == "bn" ? "১.৪ লক্ষ+" : "140K+"}</span>
              <span className={pStyle}>{lang == "bn" ? "সন্তুষ্ট গ্রাহক" : "Happy Users"}</span>
            </div>
            <div className={boxStyle}>
              <span className={hStyle}>{lang == "bn" ? "৮০০০+" : "8K+"}</span>
              <span className={pStyle}>{lang == "bn" ? "রেজিস্টার্ড রাহক" : "Total Registrations"}</span>
            </div>
          </div>
        </Container>
      </TrustDiv>
    );
  };

  // TODO stop split view into different components!
  const MobileView = () => {
    return (
      <TrustDiv>
        <Container maxWidth="lg">
          <SectionTitle
            title1={props.langVariables !== null ? title.split(" ").slice(0, -1).join(" ") : "Why Trust"}
            title2={props.langVariables !== null ? title.split(" ").splice(-1) : "Bhalogari?"}
          />
        </Container>
        <div className="bodyContainerMobile">
          <Swiper
            id="main"
            spaceBetween={10}
            slidesPerView={2.25}
            // navigation={true}
            speed={100}
            freeMode={false}
            freeModeFluid={true}
            // className="swiperClass"
          >
            <SwiperSlide>
              <TrustCard
                quantity={lang == "bn" ? "৪৬+" : "46+"}
                text1={lang == "bn" ? "প্রিমিয়ার" : "Premier"}
                text2={lang == "bn" ? "ব্র্যান্ডস" : "Brands"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <TrustCard
                quantity={lang == "bn" ? "১ লক্ষ+" : "100K+"}
                text1={lang == "bn" ? "ভালো" : "Perfect"}
                text2={lang == "bn" ? "গাড়ি" : "Cars"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <TrustCard
                quantity={lang == "bn" ? "১.৪ লক্ষ+" : "140K+"}
                text1={lang == "bn" ? "সন্তুষ্ট" : "Happy"}
                text2={lang == "bn" ? "গ্রাহক" : "Users"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <TrustCard
                quantity={lang == "bn" ? "৮০০০+" : "8K+"}
                text1={lang == "bn" ? "রেজিস্টার্ড" : "Total"}
                text2={lang == "bn" ? "গ্রাহক" : "Registrations"}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </TrustDiv>
    );
  };
  return mobileView ? MobileView() : DesktopView();
};

const TrustDiv = styled.div`
  font-family: "Open Sans", sans-serif;
  padding-top: 58px;
  .bodyContainerMobile {
    padding-top: 20px;
    background: #efefef;
    padding-left: 10px;
    padding-right: 0px;
    @media (max-width: 767px) {
      padding-bottom: 20px;
    }
  }
  h1 {
    font-size: 32px;
    line-height: 32px;
    color: #000000;
    font-weight: 700;
    .bhalogari {
      color: #f06424;
    }
  }
  @media (max-width: 767px) {
    overflow: hidden;
    text-align: center;
    padding-top: 20px;
  }

  @media (max-width: 425) {
    padding-top: 0px;
    h1 {
      font-size: 23px;
    }
  }
`;

const TrustContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #efefef;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.16);
  margin-top: 10px;
  margin-bottom: 58px;
  padding: 25px 15px;
  border-radius: 5px;

  @media (max-width: 992px) {
    flex-wrap: wrap;
  }
  @media (max-width: 767px) {
    display: flex;
    flex-wrap: wrap;
    margin-top: 0px;
    margin-bottom: 20px;
    h1 {
      font-size: 50px;
    }
  }
`;

export default Trust;
