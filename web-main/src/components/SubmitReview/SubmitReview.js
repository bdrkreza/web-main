import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import styled from "styled-components";
import _ from "lodash";
import RatingStar from "../RatingStar/RatingStar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function SubmitReview() {
  const classes = useStyles();
  return (
    <Main>
      <Title>
        Submit <span style={{ color: "#f06424" }}>your Reviews</span>
      </Title>
      <Rating>
        <P>Your rating of this product: &nbsp;</P>
        {_.range(5).map((r) => (
          <RatingStar key={r} />
        ))}
      </Rating>
      <Form>
        <Row>
          <Input
            // classes={{ root: classes.input }}
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
          />
          <Input
            // classes={{ root: classes.input }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <Input
            // classes={{ root: classes.input }}
            id="outlined-basic"
            label="Subject"
            variant="outlined"
          />
        </Row>
        <ReviewInput
          multiline
          label="Write your review here"
          variant="outlined"
          id="custom-css-outlined-input"
        />
        <SubmitButton>Submit</SubmitButton>
      </Form>
    </Main>
  );
}
const Main = styled.div`
  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  margin-top: 50px;
  padding: 30px 20px;
`;
const Title = styled.p`
  font-size: 20px;
  color: #000000;
  font-weight: 700;
  font-family: "Open Sans";
  padding-bottom: 30px;
`;
const P = styled.p`
  font-size: 14px;
  line-height: 24px;
  color: #9a9a9a;
  font-weight: 400;
  font-family: "Open Sans";
  margin: 0px;
`;
const Rating = styled.div`
  display: flex;
  flex-direction: row;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;
const Form = styled.form`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
`;
const Input = styled(TextField)`
  width: 238px;
  border-radius: 5px;
  background-color: #f6f6f6;
  margin: 10px 0px;
  @media (max-width: 425px) {
    width: 100%;
    margin: 10px 0px;
  }
`;
const ReviewInput = styled(TextField)`
  border-radius: 5px;
  background-color: #f6f6f6;
  border: 1px solid #d9d9d9;
  margin: 10px 0px;
`;
const SubmitButton = styled(Button)`
  width: 170px;
  height: 43px;
  border-radius: 5px;
  background-color: #f06424;
  font-size: 14px;
  line-height: 24px;
  color: #ffffff;
  font-weight: 700;
  font-family: "Open Sans";
  text-transform: uppercase;
  margin: 10px 0px;
`;
