import { Button, makeStyles } from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  hidden: {
    display: "-webkit-box",
    WebkitLineClamp: 3,
    overflow: "hidden",
    WebkitBoxOrient: "vertical"
  },
  moreButton: {
    textAlign: "right",
    display: "block",
    width: "100%",
    color: "#f06425",
  }
}));
function ReadMore({ children }) {
  const classes = useStyles();
  const [isHidden, setIsHidden] = useState(true);
  return (
    <>
      <div className={isHidden ? classes.hidden : null}>{children}</div>
      <Button className={classes.moreButton} size="small" onClick={() => setIsHidden(!isHidden)}>
        {isHidden ? "⬇ More" : "⬆ Less"}
      </Button>
    </>
  );
}

export default ReadMore;