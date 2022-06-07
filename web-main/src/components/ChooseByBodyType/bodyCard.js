import React, { Component } from "react";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { useLocalStorage, useSessionStorage } from "react-use";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    height: "150px",
    borderRadius: "4px",
    backgroundColor: "#efefef",
    transition: "all ease-in-out 0.3s",
    "&:hover": {
      backgroundColor: "rgb(240 100 37 / 12%)",
      transition: "all ease-in-out 0.3s",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "100px",
      "&:hover": {
        backgroundColor: "#efefef",
        transition: "all ease-in-out 0.3s",
      },
    },
  },
  cardPaper: {
    "&.MuiPaper-elevation1": {
      boxShadow: "none",
      marginBottom: "10px",
      transition: "all ease-in-out 0.3s",
      position: "relative",
      "&:hover": {
        boxShadow: "0px 3px 10px #b9b9b9",
        transition: "all ease-in-out 0.3s",
      },
    },
  },
  cardMedia: {
    "&.MuiCardMedia-root": {
      backgroundSize: "auto",
    },
  },
  media: {
    height: "100%",
    width: "100%",
  },
  makerName: {
    fontSize: "15px",
    color: "#939598",
    fontWeight: "400",
    position: "absolute",
    bottom: "15px",
    left: "50%",
    transform: "translateX(-50%)",
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
    },
  },
}));

const BodyCard = ({ photo, name }) => {
  const classes = useStyles();
  const [searchState, setSearchState] = useSessionStorage("search-state", {});

  return (
    <Link
      onClick={() => setSearchState({ body: name, bodyFlag: true })}
      to={{
          pathname: "/searched-car-list",
          state: {
              body: name,
              bodyFlag: true,
          },
      }}
      style={{ textDecoration: "none" }}
    >
      <Card className={classes.card} classes={{ root: classes.cardPaper }}>
        <CardMedia className={classes.media} classes={{ root: classes.cardMedia }} image={photo} />
        <p className={classes.makerName}>{name}</p>
      </Card>
    </Link>
  );
};

export default BodyCard;
