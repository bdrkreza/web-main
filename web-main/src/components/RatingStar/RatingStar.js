import React, { Fragment } from "react";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarRateIcon from "@material-ui/icons/StarRate";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  starColor: {
    color: "#f06424",
  },
});

const RatingStar = (props) => {
  const classes = useStyles();
  return (
    <Fragment>
      <StarRateIcon
        className={classes.starColor}
        style={{ color: props.color }}
      />
    </Fragment>
  );
};

export default RatingStar;
