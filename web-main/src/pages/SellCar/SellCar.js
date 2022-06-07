import React from "react";
import { Redirect } from "react-router-dom";

function SellCar() {
  if (localStorage.getItem("access_token") === null) {
    return <Redirect to={{ pathname: "/login" }} />;
  }
  return <div>SellCar</div>;
}

export default SellCar;
