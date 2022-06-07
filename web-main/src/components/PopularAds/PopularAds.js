import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CarCard from "../FeaturedCar/FeaturedNewCarCard";
import axiosInstance from "@configs/configs";
import _ from "lodash";

export default function PopularAds() {
  const [cars, setCars] = useState([]);
  //   const classes = useStyles();
  useEffect(() => {
    (async () => {
      const { data } = await axiosInstance.get("/featuredNewCars");
      if (data) {
        setCars(data);
      }
    })();
  }, []);

  return (
    <Main>
      {_.range(6).map((i) => (
        <CarCard cardClass="listViewHome" key={i} car={cars[i]} />
      ))}
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: row;
`;
