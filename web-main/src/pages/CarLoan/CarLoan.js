import React, { Suspense } from "react";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { Grid, makeStyles, Container, withStyles } from "@material-ui/core";
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

function CarLoan() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Container maxWidth="lg" className={classes.AccordianMain}>
      <Suspense fallback={renderLoader()}>
        <Grid container>
          <h3>Frequently Asked Questions about Bhalo Car Financing</h3>

          <Accordion square expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <Typography variant="h6">How Bhalo Car Financing works? </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Bhalogari is making tools that help users in buying vehicles on Auto Financing. Various banks are
                offering New and Used Cars on Finance.There are few popular Car Finance options in Bangladesh, offering
                Cars on installments.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion square expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
              <Typography variant="h6">
                Does Bhalogari offer Used Car Financing? Is the process of New Car & Used Car Financing the same?{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Although the Car Finance processing would differ from bank to bank, generally it follows the same
                procedure. The process, documentation, and eligibility criteria are also mostly the same for both new
                and used cars financing with little variation from bank to bank.Banks would normally require an
                applicant to meet certain eligibility criteria, produce documentation and give financial security for
                the purpose of initiating Car Financing.{" "}
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion square expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
              <Typography variant="h6">What is the age limit for applying to Bhalo Finance?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Eligibility criteria for Bhalo Finance would normally require one to be a citizen of Bangladesh between
                the ages of 20 to 65. This age bracket differs from bank to bank with minor differences.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion square expanded={expanded === "panel4"} onChange={handleChange("panel4")}>
            <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
              <Typography variant="h6">
                How should be the income statement for applying to Bhalo Finance? Is the source income mentionable here?{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                At Victoria Transmission and Auto Care, we also care deeply about our local community and are happy to
                support events and charitable organizations. As much as we would love to sponsor and support many more,
                we regretfully cannot provide sponsorships at this time. View more about our continued community
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
                Applicants should have a steady source of income to afford the Car Installments. This source of income
                may include salary income, rental income, agricultural income or income from the business. Car Loan
                Calculator helps to determine monthly Car Installment.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion square expanded={expanded === "panel6"} onChange={handleChange("panel6")}>
            <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
              <Typography variant="h6">What would be the required documents for applying to Bhalo Finance? </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Documents required would normally be passport size photograph, copies of National Identity Card, Bank
                statements for a certain past period (to ascertain the steady income),TIN Certificate and salary
                certificates for salaried individuals. Additional documentation may also be needed from some other
                banks. This will widely depend on the source of income.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion square expanded={expanded === "panel7"} onChange={handleChange("panel7")}>
            <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
              <Typography variant="h6">Would it take more than 1 month? </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                At Bhalo Financing we are working dedicatedly to assure the approval of Car Finance within 3 to 7
                working days.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Suspense>
    </Container>
  );
}

export default CarLoan;
