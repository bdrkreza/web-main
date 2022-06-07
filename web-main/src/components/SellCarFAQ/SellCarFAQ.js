import React from "react";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
// import ArrowDropDownCircleOutlinedIcon from "@material-ui/icons/ExpandMore";
import ArrowDropDownCircleOutlinedIcon from "@material-ui/icons/ArrowDropDownCircleOutlined";
import styled from "styled-components";
import { Grid, makeStyles, Container, List, ListItem, withStyles } from "@material-ui/core";
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
              <Typography variant="h6">Can I sell my car at Bhalogari?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes of course, you can{" "}
                <a className={classes.hyperLink} href={"https://www.bhalogari.com/sell-now"}>
                  sell your car
                </a>{" "}
                at bhalogari whether you{" "}
                <a className={classes.hyperLink} href={"https://www.bhalogari.com/new-car"}>
                  buy a car
                </a>{" "}
                from us or not.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion square expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleOutlinedIcon />}
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography variant="h6">What do I need to do to sell my car?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <List component="nav" aria-label="contacts">
                  <ListItem>Requirements can vary but there are a few items you’ll need</ListItem>
                  <ListItem>● Valid and current registrations (smart card)</ListItem>
                  <ListItem>● All keys and remotes</ListItem>
                  <ListItem>● Fitness certificate</ListItem>
                  <ListItem>● Tax token</ListItem>
                  <ListItem>● TIN certificate</ListItem>
                </List>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion square expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleOutlinedIcon />}
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography variant="h6">How should I upload my details?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <List component="nav" aria-label="contacts">
                  <ListItem>You can upload your used car at Bhalogari with 3 simple steps:</ListItem>
                  <ListItem>
                    1.{" "}
                    <a className={classes.hyperLink} href={"https://www.bhalogari.com/sell-now"}>
                      Login/Register
                    </a>
                    .
                  </ListItem>
                  <ListItem>2. Update your individual/business profile.</ListItem>
                  <ListItem>3. Upload your car with all the details, features, photos and videos.</ListItem>
                  <ListItem>You are all set to go.</ListItem>
                </List>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion square expanded={expanded === "panel4"} onChange={handleChange("panel4")}>
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleOutlinedIcon />}
              aria-controls="panel4d-content"
              id="panel4d-header"
            >
              <Typography variant="h6">Will the buyer of my car be verified too?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Yes, all our sellers and buyers are verified.</Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion square expanded={expanded === "panel5"} onChange={handleChange("panel5")}>
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleOutlinedIcon />}
              aria-controls="panel5d-content"
              id="panel5d-header"
            >
              <Typography variant="h6">Can I sell cars on behalf of a company?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                If you would like to sell a car on behalf of a company, simply{" "}
                <a className={classes.hyperLink} href={"https://www.bhalogari.com/login"}>
                  register at Bhalogari
                </a>
                . By updating your business profile, you can upload your cars to sell. Some conditions may apply.{" "}
                <a className={classes.hyperLink} href={"https://www.bhalogari.com/contact-us"}>
                  Contact us
                </a>{" "}
                to learn more.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion square expanded={expanded === "panel6"} onChange={handleChange("panel6")}>
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleOutlinedIcon />}
              aria-controls="panel6d-content"
              id="panel6d-header"
            >
              <Typography variant="h6">How do I get paid for my car?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                You will leave with payment in hand within 7 working days. We pay with a bank draft, which is a type of
                check where payment is guaranteed to be available by the issuing bank. A bank draft must be deposited
                and cannot be cashed.
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
