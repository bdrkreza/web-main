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
    hyperLink: {
      textDecoration: "none",
      color: "#f06425",
    },
  },
}));

function BhaloFAQ() {
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
              <Typography variant="h6">What is Bhalogari.com?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Bhalogari is an online one-stop solution for car lovers, here you can buy your desired{" "}
                <a className={classes.hyperLink} href={"https://www.bhalogari.com/new-car"}>
                  car
                </a>{" "}
                and{" "}
                <a className={classes.hyperLink} href={"https://www.bhalogari.com/bikes"}>
                  bike
                </a>
                ,{" "}
                <a className={classes.hyperLink} href={"https://www.bhalogari.com/sell-now"}>
                  sell your used car
                </a>{" "}
                and bike, check{" "}
                <a className={classes.hyperLink} href={"https://www.bhalogari.com/service"}>
                  auction sheet to verify
                </a>{" "}
                the true condition of your car, learn your query about cars and get all{" "}
                <a className={classes.hyperLink} href={"https://www.bhalogari.com/service"}>
                  car related services
                </a>
                .
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion square expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleOutlinedIcon />}
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography variant="h6">What kind of topics can be found on Bhalogari.com?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Besides being a marketplace, Bhalogari.com features{" "}
                <a className={classes.hyperLink} href={"https://www.bhalogari.com/service"}>
                  auction sheet verification
                </a>
                ,{" "}
                <a className={classes.hyperLink} href={"https://www.bhalogari.com/compare-car"}>
                  compare cars
                </a>
                ,{" "}
                <a className={classes.hyperLink} href={"https://articles.bhalogari.com/"}>
                  get the latest auto news
                </a>
                , photos, detailed specifications of{" "}
                <a className={classes.hyperLink} href={"https://www.bhalogari.com/all-maker"}>
                  all car models
                </a>
                ,{" "}
                <a className={classes.hyperLink} href={"https://articles.bhalogari.com/category/tips-hacks/"}>
                  tips and advice
                </a>
                ,{" "}
                <a className={classes.hyperLink} href={"https://articles.bhalogari.com/"}>
                  blog and article
                </a>
                , videos and more.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion square expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleOutlinedIcon />}
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography variant="h6">How can I get access to Bhalogari.com?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <List component="nav" aria-label="contacts">
                  <ListItem>1. Click on the profile icon.</ListItem>
                  <ListItem>
                    2.{" "}
                    <a className={classes.hyperLink} href={"https://www.bhalogari.com/login"}>
                      Login/Register
                    </a>{" "}
                    by submitting your phone number.
                  </ListItem>
                  <ListItem>3. Submit OTP sent to your associated phone number.</ListItem>
                  <ListItem>4. Submit all the information for individual or Business accounts.</ListItem>
                  <ListItem>You are all set!</ListItem>
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
              <Typography variant="h6">Where is Bhalogari.com located? </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We are located at:
                <a
                  className={classes.hyperLink}
                  href={
                    "https://www.google.com/maps/place/Bhalogari.com+Service+Centre/@23.7661881,90.4055594,17z/data=!4m9!1m2!2m1!1sbhalogari!3m5!1s0x0:0xf75aeafd7e8a0ca3!8m2!3d23.7661882!4d90.4077479!15sCgliaGFsb2dhcmmSAQpjYXJfcmVwYWly"
                  }
                >
                  Civil house, B- 111 Mosque Rd, Dhaka 1206
                </a>
                (Next to Independent Television)
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion square expanded={expanded === "panel5"} onChange={handleChange("panel5")}>
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleOutlinedIcon />}
              aria-controls="panel5d-content"
              id="panel5d-header"
            >
              <Typography variant="h6">
                I am having trouble navigating the products. Can I have some assistance?{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes of course! Please call our hotline number (
                <a className={classes.hyperLink} href={"tel:+8809643207005"}>
                  +8809643207005
                </a>
                ) or send in your query at{" "}
                <a className={classes.hyperLink} href={"mailto:info@bhalogari.com"}>
                  info@bhalogari.com
                </a>
                . Our customer service rep will contact you within 24 Hours.
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
  padding-top: 40px;
  @media (max-width: 425px) {
    padding: 20px 30px;
  }
`;

export default BhaloFAQ;
