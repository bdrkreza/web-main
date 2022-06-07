import React, { useState } from "react";
import { Card, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { api } from "@configs/configs";
import { useSessionStorage } from "react-use";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    width: "130px",
    height: "130px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "3px",
    backgroundColor: "#ffffff",
    paddingTop: "0px",
    boxSizing: "border-box",
    flex: "1 1 124px",
    cursor: "pointer",
    maxWidth: "130px",
    transition: "all ease-in-out 0.3s",
    "&:hover": {
      backgroundColor: "rgb(240 100 37 / 12%)",
      transition: "all ease-in-out 0.3s",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "inherit",
    },
    [theme.breakpoints.down("xs")]: {
      width: "130px",
      height: "120px",
      maxWidth: "inherit",
      border: "2px solid #eee",
    },
    "@media (min-width:1201px) and (max-width:1300px)": {
      flex: "1 1 115px",
      width: "95%",
      height: "120px",
    },
    "@media(min-width:1101px) and (max-width:1200px)": {
      flex: "1 1 105px",
      width: "95%",
      height: "120px",
    },
    "@media (min-width:1024px) and (max-width:1110px)": {
      flex: "1 1 95px",
      width: "95%",
      height: "120px",
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
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
    },
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
      [theme.breakpoints.down("sm")]: {
        margin: "7px",
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

const MakerCard = ({ photo, name }) => {
  const [searchState, setSearchState] = useSessionStorage("search-state", {});
  const classes = useStyles();
  // const slug = `${name}`;
  const [count, setCount] = useState(0);
  const [cars, setCars] = useState([]);
  const [link, setLink] = useState("");

  // TODO Do not load data in here, let the search page does the job
  const handleClick = () => {
    // setTitle(slug);
    // console.log("Clicked")
    console.log("Clicked the name =>", name);
    let url = "api/cars/choose-by-maker/?maker_name=" + name;
    console.log("The Url Is =>", url);
    (async () => {
      try {
        let response = await api.get(url);

        if (response.status === 200) {
          setCars(response.data.results);
          setCount(response.data.count);
          setLink(url);
        }
      } catch (err) {
        console.log("Error =>", err);
      }
      // await api.get(url).then((res) => {
      //     setCars(res.data.results);
      //     setCount(res.data.count);
      // });
    })();
  };

  // console.log("Count =>", count);
  // console.log("The Url Is =>", link);
  // console.log("Cars =>", cars);

  // console.log(slug);
  // if(count > 0){
  // }

  return (
    <Card className={classes.card} classes={{ root: classes.cardPaper }}>
      <Link
        onClick={() =>
          setSearchState({
            maker: name,
            key: name,
            makerFlag: true,
          })
        }
        to={{
          // pathname: `/searched-car-list/${name}`,
          pathname: `/searched-car-list`,
          state: {
            maker: name,
            key: name,
            makerFlag: true,
          },
        }}
        style={{ textDecoration: "none" }}
      >
        <CardMedia
          className={classes.media}
          classes={{ root: classes.cardMedia }}
          image={photo}
          onClick={() => handleClick()}
        />
        <p className={classes.makerName}>{name}</p>
      </Link>
      {/* 
      <Link
        // onClick={() => handleClick()}
        to={{
          pathname: "/search-page",
          search: "maker_name=" + name,
          // state: {
          //   data: cars, // TODO this doesn't go with the state, too big
          //   count: count,
          //   makerFlag: true,
          //   url: "api/cars/choose-by-maker/?maker_name=" + name,
          // },
        }}
        style={{ textDecoration: "none" }}
      >
        <CardMedia className={classes.media} classes={{ root: classes.cardMedia }} image={photo} />
        <p className={classes.makerName}>{name}</p>
      </Link> */}
    </Card>
  );
};

export default MakerCard;
