import React from "react";
import { Grid, Container, makeStyles } from "@material-ui/core";
import Portal from "../../assets/Group 1956.png";
import Offers from "../../assets/Offers.png";
import Group from "../../assets/Group 1706.png";
import Car from "../../assets/Group 1957.png";
import MediaObject from "@components/MediaObject";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "58px auto",
    backgroundColor: "#f8f8f8",
    boxShadow: "0px 2px 4.5px rgba(0,0,0,0.16)",
    width: "calc(100% - 48px)",
    maxWidth: "1232px",
    boxSizing: "border-box",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: "40px",
    paddingBottom: "40px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "10px",
      marginBottom: "10px",
      padding: "10px",
    },
  },
  section: {
    marginBlockStart: "0px",
    marginInlineStart: "0px",
    color: "#555555",
    marginBlockEnd: "0px",
    marginInlineEnd: "0px",
    "& .media-image": {
      width: "60px",
    },
  },
  heading: {
    marginBlockStart: "0px",
    marginInlineStart: "0px",
    marginInlineEnd: "0px",
    marginBlockEnd: "0px",
  },
  content: {
    padding: "10px",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
  },
  description: {
    marginLeft: "5px",
  },
  gridContainer: {
    display: "flex",
    alignItems: "center",
  },
  mediaClass: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    "& .media-image": {
      width: "50px",
      overflow: "hidden",
      "& img": {
        width: "100%",
      },
    },
  },
}));

function BhaloPortal() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid container className={classes.gridContainer}>
          <Grid item lg={3} sm={6} xs={12} className={classes.section}>
            <MediaObject
              imageLeft={Portal}
              mediaTitle="#1 Auto Portal"
              mediaSubTitle="in Bangladesh"
              mediaClass={classes.mediaClass}
            />
          </Grid>
          <Grid item lg={3} sm={6} xs={12} className={classes.section}>
            <MediaObject
              imageLeft={Group}
              mediaTitle="Car Sold"
              mediaSubTitle="in every 30 minutes"
              mediaClass={classes.mediaClass}
            />
          </Grid>
          <Grid item lg={3} sm={6} xs={12} className={classes.section}>
            <MediaObject
              imageLeft={Offers}
              mediaTitle="Offers"
              mediaSubTitle="Stay Updated, Pay Less"
              mediaClass={classes.mediaClass}
            />
          </Grid>
          <Grid item lg={3} sm={6} xs={12} className={classes.section}>
            <MediaObject
              imageLeft={Car}
              mediaTitle="Compare"
              mediaSubTitle="Choose the right car for you"
              mediaClass={classes.mediaClass}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default BhaloPortal;
