import React from "react";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
// import ArrowDropDownCircleOutlinedIcon from "@material-ui/icons/ExpandMore";
import ArrowDropDownCircleOutlinedIcon from "@material-ui/icons/ArrowDropDownCircleOutlined";
import styled from "styled-components";
import { Grid, makeStyles, Container, withStyles } from "@material-ui/core";
import SectionTitle from "@components/SectionTitle";
// import DoneOutlineIcon from "@material-ui/icons/DoneOutline";

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    width: "100%",
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);
const useStyles = makeStyles((theme) => ({
  AccordianMain: {
    marginTop: "0px",
    "& .MuiPaper-elevation1": {
      width: "100%",
    },
  },
  list: {
    fontSize: "14px",
    lineHeight: "32px",
    color: "#000",
    fontWeight: "400",
    fontFamily: "Open Sans",
    listStyle: "none",
    paddingLeft: "10px",
    "& li": {
      padding: "0",
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: "0",
      paddingRight: "0",
    },
  },
  hyperLink: {
    textDecoration: "none",
    color: "#f06425",
  },
}));

function SellCarFAQ() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Container maxWidth="lg" className={classes.AccordianMain}>
        <TitleDiv>
          <SectionTitle title1="Frequently Asked" title2="Questions" />
        </TitleDiv>
        <Grid container>
          <Accordion square expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleOutlinedIcon />}
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography variant="h6">
                Are the car&apos;s specifications and features comparable across all models?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                You can{" "}
                <a className={classes.hyperLink} href={"https://www.bhalogari.com/compare-car"}>
                  compare any car available in Bangladesh
                </a>
                .
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion square expanded={expanded === "panel4"} onChange={handleChange("panel4")}>
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleOutlinedIcon />}
              aria-controls="panel4d-content"
              id="panel4d-header"
            >
              <Typography variant="h6">Do you recommend which car to buy while comparing?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We only help you to{" "}
                <a className={classes.hyperLink} href={"https://www.bhalogari.com/compare-car"}>
                  compare between cars
                </a>
                . The buying decision is yours.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Container>
    </div>
  );
}

const TitleDiv = styled.div`
  display: flex;
  // justify-content: center;
  padding-top: 40px;
  @media (max-width: 425px) {
    padding: 20px 30px;
  }
`;

export default SellCarFAQ;
