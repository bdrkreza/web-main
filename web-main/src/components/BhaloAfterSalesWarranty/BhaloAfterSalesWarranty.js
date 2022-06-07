import React from "react";
import { Grid, Container, makeStyles } from "@material-ui/core";
import SectionTitle from "../../components/SectionTitle";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "58px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "10px",
    },
  },
  BhaloWarrantyMain: {
    background: "#f8f8f8",
    borderRadius: "10px",
    overflow: "hidden",
  },
  rightText: {
    padding: "25px 20px 5px",
    "& p": {
      fontSize: "16px",
      lineHeight: "26px",
    },
  },
  bestcars: {
    background: "#fff",
    padding: "5px 20px",
    border: "5px solid #f8f8f8",
    "& h2": {
      color: "#24d1f0",
      marginBlockStart: "0px",
      marginInlineEnd: "0px",
      marginBlockEnd: "0px",
      fontSize: "35px",
      fontWeight: "600",
    },
    "& h3": {
      fontSize: "25px",
      fontWeight: "600",
      paddingBottom: "10px",
    },
    "& h4": {
      fontSize: "35px",
      fontWeight: "600",
      display: "flex",
      alignItems: "center",
    },
  },
  zero: {
    color: "#24d1f0",
    fontSize: "130px",
    fontWeight: "bold",
  },
}));

function Main() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.root}>
      <SectionTitle title1="Bhalogari after-sales" title2="warranty" />
      <div className={classes.BhaloWarrantyMain}>
        <Grid container>
          <Grid item sm={6} xs={12} className={classes.bestcars}>
            <h2>Best Quality Assured!</h2>
            <h3>If you even face smallest of issue, we ensure</h3>
            <h4>HASSLE FREE MONEY-BACK!</h4>
          </Grid>

          <Grid item sm={6} xs={12} className={classes.rightText}>
            <p>
              Bhalogari after sales service team is committed to ensure buyers
              peace of mind. Buying used cars never been so easy, enjoy hassle
              free buying process with best after-sales warranty service.
            </p>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default Main;
