import React from "react";
import OverView from "./OverView";
import BikeDetails from "./BikeDetails";
import DetailsWithIcons from "./DetailsWithIcons";
import BikeFeatures from "./BikeFeatures";

export default function Details(props) {
  return (
    <div>
      <BikeDetails bike={props.bike} />
      <OverView bike={props.bike} />
      <BikeFeatures bike={props.bike} />
      <DetailsWithIcons bike={props.bike} />
    </div>
  );
}
