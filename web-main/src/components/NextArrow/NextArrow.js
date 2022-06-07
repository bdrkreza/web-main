import React from "react";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const NextArrow = () => {};

export default NextArrow;

function NextArrow(props) {
  const classes = useStyles();
  const { className, style, onClick, currentSlide } = props;
  if (currentSlide === 0) {
    setCurrent(true);
  } else {
    setCurrent(false);
  }
  return (
    <div
      className={classes.iconHoverRight}
      style={{
        ...style,
        right: "-22px",
        left: "inherit",
      }}
      onClick={onClick}
    >
      <NavigateNextIcon />
    </div>
  );
}
