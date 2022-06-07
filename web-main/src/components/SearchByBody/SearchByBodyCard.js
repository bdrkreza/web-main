import React, { Component } from "react";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { useSessionStorage } from "react-use";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    marginTop: "-15px",
    height: "150px",
    borderRadius: "4px",
    marginLeft: "5px",
    backgroundColor: "#efefef",
    "&:hover": {
      backgroundColor: "rgb(240 100 37 / 12%)",
      transition: "all ease-in-out 0.3s",
    },
    [theme.breakpoints.down("xs")]: {
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
  },
}));

const SearchByBodyCard = ({ photo, name }) => {
  const classes = useStyles();
  const history = useHistory();
  const [searchState, setSearchState] = useSessionStorage("search-state", {});

  const handleClick = (name) => {
    setSearchState({ body: name, bodyFlag: true });
    history.push({
      pathname: "/searched-car-list",
      state: { body: name, bodyFlag: true },
    });
  };
  return (
    <li onClick={() => handleClick(name)} style={{ textDecoration: "none", listStyleType: "none" }}>
      <Card className={classes.card} classes={{ root: classes.cardPaper }}>
        <CardMedia className={classes.media} classes={{ root: classes.cardMedia }} image={photo} />
        <p className={classes.makerName}>{name}</p>
      </Card>
    </li>
  );
};

export default SearchByBodyCard;
