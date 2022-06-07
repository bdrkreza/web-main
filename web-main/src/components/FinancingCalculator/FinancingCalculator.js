import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import styled from "styled-components";
import Finance from "../../assets/carDetails/finance.svg";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 500,
  },
  input: {
    color: "red",
  },
}));

export default function FinancingCalculator() {
  const classes = useStyles();
  return (
    <Main>
      <DivHeader>
        <img src={Finance}></img>
        <Header>
          <Title>
            Bhalo <span style={{ color: "#f06424" }}>Finance</span>
          </Title>
          <P>financing calculator</P>
        </Header>
      </DivHeader>
      <Form>
        <Input
          style={{ width: "100%" }}
          id="Vehicle Price(BDT)"
          label="Outlined"
          variant="outlined"
          className={classes.textField}
          InputProps={{
            className: classes.input,
          }}
        />
        <Row>
          <Input
            id="Interest Rate(%)"
            label="Outlined"
            variant="outlined"
            className={classes.textField}
            InputProps={{
              className: classes.input,
            }}
          />
          <Input
            id="Period(month)"
            label="Outlined"
            variant="outlined"
            className={classes.textField}
            InputProps={{
              className: classes.input,
            }}
          />
        </Row>
        <Input
          style={{ width: "100%" }}
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          className={classes.textField}
          InputProps={{
            className: classes.input,
          }}
        />
        <SubmitButton>calculate</SubmitButton>
      </Form>
    </Main>
  );
}

const Main = styled.div`
  padding: 30px 0px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;
  border: 1px solid #d9d9d9;
`;
const Title = styled.p`
  font-size: 20px;
  color: #000000;
  font-weight: 700;
  font-family: "Open Sans";
  text-align: center;
  text-transform: uppercase;
  margin: 0px;
`;
const DivHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;
  padding-bottom: 30px;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const P = styled.p`
  font-size: 14px;
  color: #646464;
  font-weight: 400;
  font-family: "Open Sans";
  text-transform: uppercase;
  margin: 0px;
`;
const Input = styled(TextField)`
  border-radius: 5px;
  border: 1px solid #bbbbbb;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 13px;
`;

const Form = styled.form`
  padding: 0px 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
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
  &:hover {
    background-color: #fff;
    color: #f06424;
  }
`;
