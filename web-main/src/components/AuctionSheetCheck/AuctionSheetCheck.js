import { Container, Dialog, makeStyles } from "@material-ui/core";
import AuctionVerificationForm from "@components/AuctionVerificationForm/AuctionVerificationForm";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "200px",
    fontFamily: '"Open sans", sans-serif',
    [theme.breakpoints.down("sm")]: {
      marginTop: "100px",
    },
  },
  dialog: {
    // "&.md-dialog-container": {
    //   backgroundColor: "red",
    //   width: "250px",
    //   height: "250px",
    // },
    // width: "80vw",
  },
}));

const AuctionSheetCheck = () => {
  const history = useHistory();
  const classes = useStyles();
  const data = history.location.state.data;
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="lg" className={classes.root}>
      <AuctionHeader>
        <p>Find out your actual auction sheet</p>
        <h1>Verify Your Auction Sheet</h1>
        <p>Click on the chassis image to get the full report.</p>
      </AuctionHeader>
      <AuctionContainer>
        <img src={data.image} alt="" onClick={handleClickOpen} />
        <div>
          <table width="200px">
            <tbody>
              <tr>
                <td width="40%">Model:</td>
                <td width="60%">
                  <b>{data.car_model}</b>
                </td>
              </tr>
              <tr>
                <td width="40%">Year:</td>
                <td width="60%">
                  <b>{data.car_year}</b>
                </td>
              </tr>
              <tr>
                <td width="40%">Color:</td>
                <td width="60%">
                  <b>{data.car_color}</b>
                </td>
              </tr>
            </tbody>
          </table>
          <button onClick={handleClickOpen}>Purchase</button>
        </div>
      </AuctionContainer>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className={classes.dialog}
        maxWidth="lg"
      >
        <AuctionVerificationForm
          data={data}
          auctionModalHandler={handleClose}
          chassis_no={history.location.state.chassis_no}
        />
      </Dialog>
    </Container>
  );
};

const AuctionHeader = styled.div`
  text-align: center;
  padding: 58px 0px;
  > p {
    color: #f06425;
    font-weight: 700;
  }
  > h1 {
    text-transform: uppercase;
  }
`;

const AuctionContainer = styled.div`
  margin: 0px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 2px solid #f06425;
  padding: 20px;
  width: 600px;
  @media (max-width: 767px) {
    width: 90vw;
  }
  > img {
    width: 150px;
    height: 100px;
    cursor: pointer;
    @media (max-width: 767px) {
      width: 120px;
    }
  }
  > div {
    > table {
      font-size: 16px;
      @media (max-width: 767px) {
        width: 150px;
      }
      @media (max-width: 374px) {
        width: 100px;
      }
    }
    > button {
      margin-top: 10px;
      background-color: #f06425;
      color: #fff;
      border: 2px solid #f06425;
      width: 100%;
      padding: 5px;
      @media (max-width: 767px) {
        width: 90%;
      }
      &:hover {
        background-color: #fff;
        color: #f06425;
      }
    }
  }
`;

export default AuctionSheetCheck;
