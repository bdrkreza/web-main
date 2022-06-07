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
    ListItemIcon,
    withStyles,
} from "@material-ui/core";
import SectionTitle from "@components/SectionTitle";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";

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
        textDecoration: 'none',
        color: '#f06425',
    }
}));

function CarFAQ() {
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
                                Can I buy a car online?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Yes, you can <a
                                className={classes.hyperLink} href={'https://www.bhalogari.com/reconditioned-car'}>buy
                                it online at Bhalogari</a>.You’ll be asked to <a className={classes.hyperLink}
                                                                                 href={'https://www.bhalogari.com/login'}>login
                                / register</a> into your
                                bhalogari.com account. Once your request is received and confirmed, we guide you through
                                the steps you’ll take to <a className={classes.hyperLink}
                                                            href={'https://www.bhalogari.com/new-car'}>buy your car</a>.
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
                                What documentation do I need to buy a car?
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
                                        ● Proof of phone no
                                    </ListItem>
                                    <ListItem>
                                        ●  <a className={classes.hyperLink}
                                              href={'http://tax5.naogaon.gov.bd/sites/default/files/files/tax5.naogaon.gov.bd/notices/b015d5b6_025c_4611_9e83_38f62a963564/e4e4a336f56883f36b0abdfa70b7e8c7.pdf'}>TIN
                                        Certificate</a>
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
                                Do I have to have insurance if I buy a car?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Bhalogari will soon launch its own car insurance service, where the insurance service
                                will be easy for you.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion
                        square
                        expanded={expanded === "panel4"}
                        onChange={handleChange("panel4")}
                    >
                        <AccordionSummary
                            expandIcon={<ArrowDropDownCircleOutlinedIcon/>}
                            aria-controls="panel4d-content"
                            id="panel4d-header"
                        >
                            <Typography variant="h6">Why should I buy from Bhalogari.com?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                You can trust Bhalogari for a hassle-free buying and <a className={classes.hyperLink}
                                                                                        href={'https://www.bhalogari.com/new-car'}>selling</a> experience.
                                We offer the
                                best selection of <a className={classes.hyperLink}
                                                     href={'https://www.bhalogari.com/used-car'}>used</a>, <a
                                className={classes.hyperLink}
                                href={'https://www.bhalogari.com/reconditioned-car'}>reconditioned</a>, and <a
                                className={classes.hyperLink}
                                href={'https://www.bhalogari.com/new-car'}>brand new cars</a> for you to pick from. You
                                can
                                select the car you want according to your budget and your preference. Our platform is
                                free of trouble and worthy of confidence.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

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
                            <Typography variant="h6">How would I make payment to the seller? </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                You will pay through bhalogari.com by choosing one of our preferred payment methods.
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

export default CarFAQ;
