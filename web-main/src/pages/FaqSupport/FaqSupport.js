import React, { lazy, Suspense } from "react";
import { Container, Grid, makeStyles, withStyles } from "@material-ui/core";

const BhaloBuy = lazy(() => import("@components/BhaloBuy/BhaloBuy"));
const Article = lazy(() => import("@components/Article/"));
// import BhaloAfterSalesWarranty from "../../components/BhaloAfterSalesWarranty/BhaloAfterSalesWarranty";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
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
    "@media(max-width: 768px)": {
      marginTop: "150px",
    },
  },
}));

const renderLoader = () => <p>Loading</p>;

function FaqSupport() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <React.Fragment>
      <Suspense fallback={renderLoader()}>
        <Container maxWidth="lg" className={classes.AccordianMain}>
          <Grid container>
            <Accordion square expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
              <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography variant="h6">What types of payment methods do you accept?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We accept Interac, Visa, and Mastercard. Regretfully, we cannot accept personal cheques.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
              <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                <Typography variant="h6">Do you do transmission repair?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Do we ever! Since opening as a transmission shop over 40 years ago, we have provided top-quality
                  transmission repair, maintenance, and replacement services for our valued customers. We are also happy
                  to have added specialization in full vehicle scope and repair, maintenance, and more, to take care of
                  all of your vehicle’s needs. See more information on all of the services we offer.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
              <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                <Typography variant="h6">Do you offer any mechanic training programs?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Unfortunately we do not offer mechanic training programs, but we are happy to support our apprentice
                  mechanics in their skill development.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion square expanded={expanded === "panel4"} onChange={handleChange("panel4")}>
              <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                <Typography variant="h6">Do you offer sponsorship opportunities?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  At Victoria Transmission and Auto Care, we also care deeply about our local community and are happy to
                  support events and charitable organizations. As much as we would love to sponsor and support many
                  more, we regretfully cannot provide sponsorships at this time. View more about our continued community
                  commitment.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion square expanded={expanded === "panel5"} onChange={handleChange("panel5")}>
              <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                <Typography variant="h6">Do you offer pre-purchase inspections?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Yes, we do! Our BCAA qualified auto mechanics are happy to carry out a complete 143-point visual and
                  instrument inspection to give you the peace of mind you need. Make an appointment today.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion square expanded={expanded === "panel6"} onChange={handleChange("panel6")}>
              <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
                <Typography variant="h6">Why do brakes squeak?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Today’s cars are equipped with front-wheel disc brakes. Some models even have four-wheel disc brake
                  systems. Disc brakes work much like the modern’s bicycle’s brakes, and brake squealing and noise have
                  a variety of causes – usually dust or high frequency vibrations of the brake pedals, like a cricket
                  rubbing its legs together. Worn brake linings also tend to be noisy. All in all, brake systems should
                  be checked regularly and worn parts replaced before ruining expensive calipers and rotors.{" "}
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion square expanded={expanded === "panel7"} onChange={handleChange("panel7")}>
              <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
                <Typography variant="h6">How do the cooler temperatures affect my car’s transmission?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Here in Victoria, a properly working transmission shouldn’t be affected by our winter climate.
                  However, if the transmission is getting older, there can sometimes be delays in gear shifting. This is
                  caused by rubber components that become brittle as they age. If your transmission starts to lag in its
                  gear shifting, this could be an indication of starting to show its age. It’s not always a problem, but
                  definitely something to take a look at. Give us a call to make an appointment, and we’ll inspect your
                  transmission to make sure it’s in top shape.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion square expanded={expanded === "panel8"} onChange={handleChange("panel8")}>
              <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
                <Typography variant="h6">Should I have my car checked before a long trip?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Summer outings should be enjoyable and not spent in a roadside repair shop with someone under the
                  hood. Have your car serviced and fluid levels checked before any long road trip and don’t forget the
                  windshield washers and wipers. Radiator hoses and fan belts are one of the main causes for breakdowns.
                  Hoses deteriorate from the inside out, so looks can be deceiving. Wheel bearings should be packed, and
                  correct tire pressures will give a smoother ride and better fuel economy. Overall, a little
                  preventative maintenance can help ensure you won’t spend your vacation in an auto shop waiting room.
                  Be sure to make an appointment with us at Victoria Transmission and Auto Care before heading out of
                  town for your next trip – we offer a 37-point BCAA safety inspection with all services, to ensure your
                  car is road-ready.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Container>
        <BhaloBuy />
        <Article />
      </Suspense>
    </React.Fragment>
  );
}

export default FaqSupport;
