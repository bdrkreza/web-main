import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import LinearProgress from "@material-ui/core/LinearProgress";
import RatingStar from "../RatingStar/RatingStar";
import _ from "lodash";

const useStyles = makeStyles({
  progress: {
    "&.MuiLinearProgress-barColorPrimary": {
      backgroundColor: "#f06424",
    },
  },
});

export default function CarDetailsRating() {
  const rating = 4.3;
  const roundedRating = Math.round(rating);
  const notRated = 5 - roundedRating;
  const classes = useStyles();
  return (
    <Main>
      <Title>
        Customer <span style={{ color: "#f06424" }}>Reviews</span>
      </Title>
      <Reviews>
        <Average>
          <P>Average Rating</P>
          <Rating>{rating}</Rating>
          <div>
            {_.range(roundedRating).map((r) => (
              <RatingStar key={r} outlined="false" />
            ))}
            {_.range(notRated).map((r) => (
              <RatingStar key={r} outlined="false" color="#e2e3e7" />
            ))}
          </div>
        </Average>
        <StarCount>
          <Row>
            <P style={{ color: "#000" }}>
              <b>5 Star</b>
            </P>
            <Progress
              classes={{ root: classes.progress }}
              variant="determinate"
              value={80}
            ></Progress>
            <P>80%</P>
          </Row>
          <Row>
            <P style={{ color: "#000" }}>
              <b>4 Star</b>
            </P>
            <Progress
              classes={{ root: classes.progress }}
              variant="determinate"
              value={20}
            ></Progress>
            <P>20%</P>
          </Row>
          <Row>
            <P style={{ color: "#000" }}>
              <b>3 Star</b>
            </P>
            <Progress
              classes={{ root: classes.progress }}
              variant="determinate"
              value={10}
            ></Progress>
            <P>10%</P>
          </Row>
          <Row>
            <P style={{ color: "#000" }}>
              <b>2 Star</b>
            </P>
            <Progress
              classes={{ root: classes.progress }}
              variant="determinate"
              value={0}
            ></Progress>
            <P>0%</P>
          </Row>
          <Row>
            <P style={{ color: "#000" }}>
              <b>1 Star</b>
            </P>
            <Progress
              classes={{ root: classes.progress }}
              variant="determinate"
              value={0}
            ></Progress>
            <P>0%</P>
          </Row>
        </StarCount>
      </Reviews>
    </Main>
  );
}

const Main = styled.div``;
const Reviews = styled.div`
  background-color: #f6f6f6;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;
const Title = styled.p`
  padding-top: 50px;
  font-size: 20px;
  color: #000000;
  font-weight: 700;
  font-family: "Open Sans";
  padding-left: 30px;
  padding-bottom: 30px;
`;
const StarCount = styled.div`
  font-size: 14px;
  line-height: 24px;
  color: #000000;
  font-weight: 600;
  font-family: "Open Sans";
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;
const Progress = styled(LinearProgress)`
  width: 379px;
  height: 14px;
  background-color: #e2e3e7;
  color: #f06424;
  margin: 0px 20px;
  @media (max-width: 425px) {
    width: 180px;
  }
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
`;
const Average = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const P = styled.p`
  font-size: 14px;
  line-height: 24px;
  color: #9a9a9a;
  font-weight: 400;
  font-family: "Open Sans";
  margin: 0px;
`;
const Rating = styled.p`
  font-size: 50px;
  line-height: 24px;
  color: #f06424;
  font-weight: 700;
  font-family: "Open Sans";
  margin: 0px;
`;
