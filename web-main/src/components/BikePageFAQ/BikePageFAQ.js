import React from "react";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
// import ArrowDropDownCircleOutlinedIcon from "@material-ui/icons/ExpandMore";
import ArrowDropDownCircleOutlinedIcon from "@material-ui/icons/ArrowDropDownCircleOutlined";
import styled from "styled-components";
import {
  Grid,
  makeStyles,
  Container,
  List,
  ListItem,
  withStyles,
} from "@material-ui/core";
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
    hyperLink: {
        textDecoration: 'none',
        color: '#f06425',
    }
  }
}));

function BikePageFAQ() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

    return (
        <div>
            <Container maxWidth="lg" className={classes.AccordianMain}>
                <TitleDiv>
                    <SectionTitle title1="Frequently Asked" title2="Questions"/>
                </TitleDiv>
                <Grid container>
                    <Accordion
                        square
                        expanded={expanded === "panel1"}
                        onChange={handleChange("panel1")}
                    >
                        <AccordionSummary
                            expandIcon={<ArrowDropDownCircleOutlinedIcon/>}
                            aria-controls="panel1d-content"
                            id="panel1d-header"
                        >
                            <Typography variant="h6">
                                Can I buy a bike online?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Yes, you can <a className={classes.hyperLink} href={'https://www.bhalogari.com/new-car'}>buy it online</a> and get it from our premises.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        square
                        expanded={expanded === "panel2"}
                        onChange={handleChange("panel2")}
                    >
                        <AccordionSummary
                            expandIcon={<ArrowDropDownCircleOutlinedIcon/>}
                            aria-controls="panel2d-content"
                            id="panel2d-header"
                        >
                            <Typography variant="h6">
                                What documentation do I need to buy a bike?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <List component="nav" aria-label="contacts">
                                    <ListItem>
                                        To complete your transaction, you may be required to provide any or all of the
                                        following:
                                    </ListItem>
                                    <ListItem>
                                        ● NID Photocopy
                                    </ListItem>
                                    <ListItem>
                                        ● Proof of income
                                    </ListItem>
                                    <ListItem>
                                        ● Proof of residence
                                    </ListItem>
                                    <ListItem>
                                        ● Proof of phone no
                                    </ListItem>
                                    <ListItem>
                                        Documentation not listed above may also be required. Your sales consultant will
                                        be able to tell you what documentation you will actually need.
                                    </ListItem>
                                </List>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        square
                        expanded={expanded === "panel3"}
                        onChange={handleChange("panel3")}
                    >
                        <AccordionSummary
                            expandIcon={<ArrowDropDownCircleOutlinedIcon/>}
                            aria-controls="panel3d-content"
                            id="panel3d-header"
                        >
                            <Typography variant="h6">
                                 Will Bhalo bikes provide service warranty?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Yes, during the first 1 year we will provide free general service.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    {/*<Accordion*/}
                    {/*    square*/}
                    {/*    expanded={expanded === "panel4"}*/}
                    {/*    onChange={handleChange("panel4")}*/}
                    {/*>*/}
                    {/*    <AccordionSummary*/}
                    {/*        expandIcon={<ArrowDropDownCircleOutlinedIcon/>}*/}
                    {/*        aria-controls="panel4d-content"*/}
                    {/*        id="panel4d-header"*/}
                    {/*    >*/}
                    {/*        <Typography variant="h6">Where to sell my bikes? </Typography>*/}
                    {/*    </AccordionSummary>*/}
                    {/*    <AccordionDetails>*/}
                    {/*        <Typography>*/}
                    {/*            It is best to sell your used bike to Bhalogari and explore the*/}
                    {/*            innumerable benefits in one go. It is no longer a bothersome*/}
                    {/*            process to sell my bike to Bhalogari. By simply following the*/}
                    {/*            three steps of submitting bike details- free verification- sell*/}
                    {/*            your bike online: you now can enjoy great deals on your sold*/}
                    {/*            bike. Do not refrain from selling your bike. Bhalogari is the*/}
                    {/*            one-stop solution for all bike related needs. */}
                    {/*        </Typography>*/}
                    {/*    </AccordionDetails>*/}
                    {/*</Accordion>*/}
                    <Accordion
                        square
                        expanded={expanded === "panel5"}
                        onChange={handleChange("panel5")}
                    >
                        <AccordionSummary
                            expandIcon={<ArrowDropDownCircleOutlinedIcon/>}
                            aria-controls="panel5d-content"
                            id="panel5d-header"
                        >
                            <Typography variant="h6">
                                Can I sell my bike at Bhalogari?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Yes of course, you can <a className={classes.hyperLink} href={'https://www.bhalogari.com/login'}>sell your bike</a> at <a className={classes.hyperLink} href={'https://www.bhalogari.com'}>Bhalogari</a> whether you <a className={classes.hyperLink} href={'https://www.bhalogari.com/bikes'}>buy a bike</a> from us or not.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

          <Accordion
            square
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
          >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleOutlinedIcon />}
              aria-controls="panel6d-content"
              id="panel6d-header"
            >
              <Typography variant="h6">
                What do I need to sell my bike?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <List component="nav" aria-label="contacts">
                  <ListItem>
                    Requirements can vary but there are a few items you’ll need
                    no matter where you are:
                  </ListItem>
                  <ListItem>
                    ● Your bike’s title or payoff information. All titleholders
                    should be present.
                  </ListItem>
                  <ListItem>
                    ● Valid and current registrations if not we will help doing
                    it.
                  </ListItem>
                  <ListItem>● All keys</ListItem>
                </List>
              </Typography>
            </AccordionDetails>
          </Accordion>

                    <Accordion
                        square
                        expanded={expanded === "panel7"}
                        onChange={handleChange("panel7")}
                    >
                        <AccordionSummary
                            expandIcon={<ArrowDropDownCircleOutlinedIcon/>}
                            aria-controls="panel7d-content"
                            id="panel7d-header"
                        >
                            <Typography variant="h6">
                                How should I upload my details?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                In our <a className={classes.hyperLink} href={'https://bhalogari.com/sell-now'}>upload your bike</a> option you will find your ways to upload a bike with necessary information.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

          <Accordion
            square
            expanded={expanded === "panel8"}
            onChange={handleChange("panel8")}
          >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleOutlinedIcon />}
              aria-controls="panel8d-content"
              id="panel8d-header"
            >
              <Typography variant="h6">
                Will the buyer of my bike be verified too?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes, all our sellers and buyers are verified.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            square
            expanded={expanded === "panel9"}
            onChange={handleChange("panel9")}
          >
            <AccordionSummary
              expandIcon={<ArrowDropDownCircleOutlinedIcon />}
              aria-controls="panel9d-content"
              id="panel9d-header"
            >
              <Typography variant="h6">
                How do I get paid for my bike?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                You will leave with payment in hand within 7 working days.
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

export default BikePageFAQ;
