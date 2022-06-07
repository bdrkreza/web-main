import React from "react";
import { Card, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import { api } from "@configs/configs";
import { Link, useHistory } from "react-router-dom";
import { useSessionStorage } from "react-use";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    width: "124px",
    height: "130px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "3px",
    backgroundColor: "#ffffff",
    paddingTop: "0px",
    boxSizing: "border-box",
    flex: "1 1 124px",
    cursor: "pointer",
    maxWidth: "124px",
    "&:hover": {
      backgroundColor: "rgb(240 100 37 / 12%)",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "inherit",
    },
    [theme.breakpoints.down("xs")]: {
      width: "120px",
      height: "120px",
      maxWidth: "inherit",
      border: "2px solid #eee",
    },
    "& a": {
      // display: "block",
      display: "flex",
      width: "100%",
      height: "100%",
      textAlign: "center",
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  cardMedia: {
    "&.MuiCardMedia-root": {
      backgroundSize: "contain",
    },
  },
  media: {
    width: "60px",
    margin: "0 auto 10px",
    padding: "20px",
  },
  makerName: {
    fontSize: "14px",
    color: "#555555",
    fontWeight: "400",
    height: "20%",
    textAlign: "center",
  },
  cardPaper: {
    "&.MuiPaper-elevation1": {
      boxShadow: "none",
      transition: "all ease-in-out 0.3s",
      margin: "7px",
      "&:hover": {
        boxShadow: "0px 3px 10px #b9b9b9",
        transition: "all ease-in-out 0.3s",
      },
    },
  },
  cardContent: {
    "&.MuiCardContent-root": {
      paddingLeft: "0px",
      paddingRight: "0px",
    },
  },
  imageButton: {
    display: "flex",
    flexDirection: "column",
    height: "130px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "3px",
    backgroundColor: "#ffffff",
    paddingTop: "10px",
    boxSizing: "border-box",
    cursor: "pointer",
  },
}));

const SearchByMakerCard = ({ photo, name }) => {
  const classes = useStyles();
  const history = useHistory();
  const [searchState, setSearchState] = useSessionStorage("search-state", {});

  const handleClick = (name) => {
    setSearchState({ maker: name, makerFlag: true });
    history.push({
      pathname: "/searched-car-list",
      state: { maker: name, makerFlag: true },
    });
  };

  return (
    <Card className={classes.card} classes={{ root: classes.cardPaper }}>
      <li
        // onClick={() => handleClick(name)}
        style={{ textDecoration: "none", listStyleType: "none" }}
      >
        <Link onClick={()=>setSearchState({ maker: name, makerFlag: true })}
          to={{
            pathname: "/searched-car-list",
            key: name,
            state: { maker: name, makerFlag: true },
          }}
        >
          <CardMedia className={classes.media} classes={{ root: classes.cardMedia }} image={photo} />
        </Link>
        <p className={classes.makerName}>{name}</p>
      </li>
    </Card>
  );
};

export default SearchByMakerCard;
