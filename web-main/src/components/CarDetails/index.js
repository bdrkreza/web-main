import React from "react";
import OverView from "./OverView";
import CarDetails from "./CarDetails";
import DetailsWithIcons from "./DetailsWithIcons";
import CarFeatures from "./CarFeatures";

export default function Details(props) {
  return (
    <div>
      {/* <CarDetails car={props.car} />
      <OverView car={props.car} />
      <CarFeatures car={props.car} /> */}
      <DetailsWithIcons car={props.car} />
    </div>
  );
}
