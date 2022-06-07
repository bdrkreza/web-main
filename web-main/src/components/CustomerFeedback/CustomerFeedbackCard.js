import React from "react";
import styled from "styled-components";
import { Box, Typography, makeStyles } from "@material-ui/core";
// import ReadMore from "@components/ReadMore";
import ReactReadMoreReadLess from "react-read-more-read-less";

const useStyles = makeStyles((theme) => ({
  testimonialCard: {
    borderRadius: "8px",
    padding: "25px 50px",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.16)",
    backgroundColor: "#ffffff",
    position: "relative",
    margin: "10px 0",
    "@media(max-width: 767px)": {
      padding: "25px 10px",
    }
  },

  cardbody: {
    width: "100%",
    paddingTop: "15px",
  },
  testimonialImage: {
    width: "75px",
    height: "auto",
  },
  customer: {
    fontSize: "20px",
    letterSpacing: "1px",
    lineHeight: "30px",
    color: "#000000",
    fontWeight: 700,
    fontFamily: "Open Sans",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textAlign: "left",
  },

  customerDescription: {
    fontSize: "14px",
    lineHeight: "24px",
    color: "#000000",
    fontWeight: 400,
    marginBottom: "10px",
    fontFamily: "Open Sans",
    textAlign: "left",
    letterSpacing: "0",
  },

  customerType: {
    fontSize: "18px",
    letterSpacing: "1px",
    lineHeight: "30px",
    color: "#000000",
    fontWeight: 400,
    fontFamily: "Open Sans",
    textAlign: "left",
  },

  imageCard: {
    marginTop: "-60px",
    width: "85px",
    height: "85px",
    borderRadius: "50%",
    border: "5px solid #ffffff",
    position: "relative",
    overflow: "hidden",
  },
}));

const CustomerFeedbackCard = (props) => {
  const classes = useStyles();
  let image = "";

  return (
    <TestimonialBox className={classes.testimonialCard}>
      <Box className={(classes.cardbody, classes.imageCard)}>
        <img
          className={classes.testimonialImage}
          src={
            props.feedback.customer_image_url
              ? props.feedback.customer_image_url
              : image
          }
          alt="Customer"
        />
      </Box>

      <Box className={classes.cardbody}>
        <Typography className={classes.customerDescription}>
          <ReactReadMoreReadLess
            charLimit={260}
            readMoreText={"Read more ▼"}
            readLessText={"Read less ▲"}
            readMoreClassName="read-more-less--more"
            readLessClassName="read-more-less--less"
          >
            {props.feedback.message}
          </ReactReadMoreReadLess>
        </Typography>
        <Typography className={classes.customer}>
          {props.feedback.author ? props.feedback.author : "User"}
        </Typography>
        <Typography className={classes.customerType}>
          {props.feedback.customer_type}
        </Typography>
      </Box>
    </TestimonialBox>
  );
};

export default CustomerFeedbackCard;

const TestimonialBox = styled.div`
  opacity: 1;
  .read-more-less--less,
  .read-more-less--more {
    color: #f06424;
  }
`;
