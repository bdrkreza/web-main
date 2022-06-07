import React, { lazy, Suspense, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { Container } from "@material-ui/core";
const Description = lazy(() => import("@components/CompareDescription/CompareBikeDescription"));
const BikeTable = lazy(() => import("@components/CompareCarBox/CompareBikeTable"));
const CompareArticle = lazy(() => import("@components/Compare-Article/CompareArticle"));
const CompareFAQ = lazy(() => import("@components/CompareFAQ/CompareFAQ"));
import { useLocalStorage } from "react-use";

const renderLoader = () => <p>Loading</p>;

function CompareBike() {

  const [compareBikeList, setCompareBikeList] = useLocalStorage("compare-bike-list");
  const [bikes,setBikes] = useState([]);

  useEffect(() => {

    var b = compareBikeList?.map((bike,index) => {
      return {
        bikeData: {...bike}
      };
    });

    setBikes(b);

  },[compareBikeList]);

  return (
    <BikeCompareDiv>
        <Suspense fallback={renderLoader()}>
            <Helmet>
            <meta name="keywords" content="Compare Bikes" />
            <meta name="description" content="Compare two or more bikes. Yamaha FZS VS Suzuki Gixxer SF" />
            </Helmet>
            <div className="compare-boxes">
                <Description />

                <Container maxWidth="lg">
                  { bikes && <BikeTable bikes={bikes} />}
                </Container>
            </div>
            <CompareArticle />
            <CompareFAQ />
        </Suspense>
    </BikeCompareDiv>
  )
}

const BikeCompareDiv = styled.div`
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

export default CompareBike