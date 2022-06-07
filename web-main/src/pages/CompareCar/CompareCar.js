import React, { lazy, Suspense, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { Container } from "@material-ui/core";
const Description = lazy(() => import("@components/CompareDescription/CompareCarDescription"));
const CompareArticle = lazy(() => import("@components/Compare-Article/CompareArticle"));
const CompareFAQ = lazy(() => import("@components/CompareFAQ/CompareFAQ"));
const CarTable = lazy(() => import("@components/CompareCarBox/CompareCarTable"));
import { useLocation } from "react-router-dom";
import { useLocalStorage } from "react-use";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "../CompareCar/swiper.css";

const renderLoader = () => <p>Loading</p>;

function CompareCar() {

  const [compareCarList, setCompareCarList] = useLocalStorage("compare-car-list");
  const [content, setContent] = useState([]);
  const [cars, setCars] = useState([]);

  // if(x === null){
  //   console.log("No values");
  // }else{
  //   console.log("Value")
  // }

  useEffect(() => {

    var c = compareCarList?.map((car, index) => {
      // console.debug("CompareCar", car);
      return {
        title: car.car_manufacturer.maker_name + " " + car.model_name.model_name,
        carData: { ...car },
      };
    });

    setContent(c);
    setCars(c);
    // console.log("Content", car);
  }, [compareCarList]);


  // useEffect(() => {

  //   var b = compareBikeList?.map((bike,index) => {
  //     return {
  //       bikeData: {...bike}
  //     };
  //   });

  //   setBikes(b);

  // },[compareBikeList]);


  // const url = "api/cars/car-manufacturer/";

  // useEffect(() => {
  //   (async () => {
  //       await api.get(url).then((res) => {
  //           if (res.status === 200) {
  //               setMakers(res.data);
  //           }
  //       });
  //   })();
  // }, []);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setDisplay(!display);
  // };
  // console.log(cars)

  return (
    <CarCompareDiv>
      <Suspense fallback={renderLoader()}>
        <Helmet>
          <meta name="keywords" content="Compare Cars" />
          <meta name="description" content="Compare two or more cars. Honda Accord VS Hyundai Sonata 2.0" />
        </Helmet>
        <div className="compare-boxes">
          {/* <Container maxWidth="lg"> */}
          <Description />
          {/* <div className="alignments">
            {content && content.map((item, index) => {
              return (
                <Box
                  key={index}
                  title={item.title}
                  data={item.carData}
                />
              );
            })}
          </div> */}

          {/* <div className="mobile-alignments">
            {content && content.map((item, index) =>   {
              return ( (index < 2) &&
                <Box
                  key={index}
                  title={item.title}
                  data={item.carData}
                />
              );
            })}
          </div> */}
          <Container maxWidth="lg">
            { cars && <CarTable cars={cars} />}
          </Container>
        </div>
        <CompareArticle />\
        <CompareFAQ />
      </Suspense>
    </CarCompareDiv>
  );
}

const CarCompareDiv = styled.div`
  margin-top: 158px;
  .compare-boxes {
    display: flex;
    flex-direction: column;
    .alignments {
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .mobile-alignments{
      display: none;
    }
  }
  .buttons {
    margin-top: 5px;
    display: flex;
    justify-content: space-around;
  }
  @media (max-width: 768px) {
    margin-top: 70px;
  }
  @media (max-width: 767px) {
    margin-top: 140px;
    .compare-boxes {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .alignments{
        display: none;
      }
      .mobile-alignments{
        display: flex;
      }
    }
  }
  @media (max-width: 425px) {
    margin-top: 95px;
  }
`;

export default CompareCar;
