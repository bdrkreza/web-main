import React, { Suspense } from "react";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { Grid, makeStyles, Container, withStyles } from "@material-ui/core";
import styled from "styled-components";

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
const useStyles = makeStyles(() => ({
  AccordianMain: {
    marginTop: "230px",
    "& .MuiPaper-elevation1": {
      width: "100%",
    },
    "& h3": {
      fontSize: "32px",
      lineHeight: "32px",
      color: "#f06425",
      paddingBottom: "25px",
    },
  },
}));

const renderLoader = () => <p>Loading</p>;

function CarInsurance() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Container maxWidth="lg" className={classes.AccordianMain}>
      <Suspense fallback={renderLoader()}>
        <Grid container>
          <h3>Frequently Asked Question about Bhalo Car Insurance </h3>

          <Accordion square expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <Typography variant="h6">Why do you need Car Insurance in Bangladesh?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Vehicle insurance keeps you, your car, and your family safe and gives you a piece of mind. It provides
                you financial coverage for vehicle damages, bodily injuries, and third-party liabilities in case of road
                accident, collision accident, fire, theft, and other unfortunate events.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion square expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
              <Typography variant="h6">How to get Car Insurance in Bangladesh? </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                There are a number of car insurance providers in the major cities of Bangladesh. You can spend hours
                searching for the best car insurance companies and assessing their plans, or you can use Bhalogari’s car
                insurance calculator to check the estimated insurance value of your vehicle. You can also get car quotes
                for insurance from a number of available insurance companies with Bhalogari, compare their quotes, and
                buy the best car insurance deal.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion square expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
              <Typography variant="h6">How much will you be paying to the car insurance company? </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Different car insurance companies charge different annual “premiums” for your car insurance. That
                premium also depends on the model, age, and total value of your vehicle.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion square expanded={expanded === "panel4"} onChange={handleChange("panel4")}>
            <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
              <Typography variant="h6">How can you claim your car insurance? </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                In case you find yourself in a car accident, car theft, or any other incident covered under your
                insurance policy, the first thing to do is call your car insurance provider’s helpline number. Explain
                to them your situation ().Give them your insurance policy number for reference. The company will assign
                you a surveyor who will come to you, examine your car, and report back to the company. They will take it
                from there.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion square expanded={expanded === "panel5"} onChange={handleChange("panel5")}>
            <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
              <Typography variant="h6">Can you cancel your insurance plan?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes, there’s an option for you to cancel your car insurance plan. However, the choice is subject to some
                terms and conditions set by your car insurance company. You may check those conditions in your insurance
                agreement.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Container maxWidth="lg">
            <Grid container>
              <ContentDiv>
                <h2>Car Insurance:</h2>
                <p>
                  Buying a car is a big investment. Every car owner wants to make sure his/her investment is safe.
                  Insurance is a way to do that. Auto insurance gives you coverage for road accidents, theft, fire, and
                  other unforeseen damages. Depending on the type of auto insurance policy that you sign up for, you get
                  financial coverage for:
                </p>
                <p>
                  <ul>
                    <li>Repair costs of your vehicle</li>
                    <li>Parts replacements of your vehicle</li>
                    <li>Bodily injuries of the driver and passengers</li>
                  </ul>
                </p>
                <p>
                  Car insurance also gives you a piece of mind so you can drive your vehicle without being worried about
                  damages and accidents.{" "}
                </p>
              </ContentDiv>

              <ContentDiv>
                <h2>Types of Car Insurance in Bangladesh</h2>
                <p>
                  There are different types of car insurance in Bangladesh. Each type covers different situations and
                  incidents. You can choose the one that goes with your budget and needs.{" "}
                </p>
              </ContentDiv>
              <ContentDiv>
                <h2>Comprehensive Car Insurance</h2>
                <p>
                  As the name suggests, comprehensive car insurance covers everything. You (the primary driver), your
                  vehicle. Comprehensive car insurance provides you protection for all kinds of circumstances,
                  accidents, theft, vandalism, natural disasters, etc.
                </p>
                <p>
                  <ul>
                    <li>
                      Got yourself in a road accident? Your car insurance company will cover the damages done to your
                      vehicle.{" "}
                    </li>
                    <li>Someone stole your car? Your car insurance company will pay you to get a new one. </li>
                    <li>Your car caught fire? Your car insurance company will pay you to recover or replace it. </li>
                    <li>
                      Comprehensive car insurance is the best type of insurance, recommended to all vehicle owners.{" "}
                    </li>
                  </ul>
                </p>
              </ContentDiv>

              <ContentDiv>
                <h2>Collision Car Insurance</h2>
                <p>
                  Collision car insurance is for accidents where your car collides with another vehicle or object, or
                  you have an unfortunate single-car rollover accident. It covers the damage done to your car and bodily
                  injuries of yourself and your passengers. Weather conditions and natural disasters are not included in
                  this type of insurance. Drivers should go for collision car insurance because it protects you, your
                  car, and your family.
                </p>
              </ContentDiv>
            </Grid>
          </Container>
        </Grid>
      </Suspense>
    </Container>
  );
}

const ContentDiv = styled.div`
  width: 100%;
  padding: 20px 0px;
  :nth-child(even) {
    padding: 20px 25px;
    background: #efefef;
    margin: 15px 0;
    border-radius: 7px;
  }
  h2 {
    font-size: 26px;
    color: #555;
    padding-bottom: 10px;
  }
  p {
    font-size: 16px;
    color: #5d534f;
    line-height: 24px;
    padding-bottom: 10px;
  }
  ul {
    padding: 20px 0 20px 35px;
    li {
      padding: 5px 0;
    }
  }
`;
export default CarInsurance;
