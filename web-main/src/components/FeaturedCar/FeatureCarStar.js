import React, { Fragment } from "react";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const starColor = {
  color: "#f06424",
};

const FeatureCarStar = () => {
  return (
    <Fragment>
      <StarBorderIcon className={starColor} />
    </Fragment>
  );
};

export default FeatureCarStar;
