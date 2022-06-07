import React from "react";
import { Grid, Container } from "@material-ui/core";
import MediaObject from "@components/MediaObject";
import Finance from "../../assets/images/Bhalo_Finance.png";
import styled from "styled-components";
import SectionTitle from "../../components/SectionTitle";

// const useStyles = makeStyles((theme) =>({
//   item1: {
//     order: 1,
//     [theme.breakpoints.up("sm")]: {
//       order: 2
//     }
//   },
//   item2: {
//     order: 2,
//     [theme.breakpoints.up("sm")]: {
//       order: 1
//     }
//   },
// });
const content = [
  {
    id: 1,
    image: "../../assets/images/Loan.png",
    title: "Car Loan",
    description: "Best loan package at the most competitive prices",
  },
  {
    id: 2,
    image: "../../assets/images/Insurance.png",
    title: "Car Insurance",
    description: "Drive your car with the peace of your mind",
  },
  {
    id: 3,
    image: "../../assets/images/Lease.png",
    title: "Car Lease",
    description: "Embrace car ownership with minimum hassle",
  },
];

function BhaloFinances(props) {
  return (
    <BhaloDiv>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item sm={6} xs={12} className="imagePart">
            <img className="bhalo-image" src={Finance} alt="pic" />
          </Grid>
          <Grid item sm={6} xs={12} className="contentPart">
            <SectionTitle title1="What is" title2="Bhalo Finance ?" />
            {content.map((item, index) => (
              <MediaObject
                imageLeft={item.image}
                mediaTitle={item.title}
                mediaSubTitle={item.description}
              />
            ))}
          </Grid>
        </Grid>
      </Container>
    </BhaloDiv>
  );
}

const BhaloDiv = styled.div`
  padding: 58px 0;
  .MuiGrid-container {
    align-items: center;
  }
  .MuiGrid-item {
    & > p {
      padding-left: 20px;
      @media (max-width: 992px) {
        font-size: 23px;
        padding-bottom: 0px;
      }
    }
  }
  .bhalo-image {
    width: 100%;
  }
  @media (max-width: 992px) {
    padding: 25px 0;
    .media-image img {
      width: 60px;
    }
    .media-content {
      h3 {
        font-size: 16px;
      }
      p {
        font-size: 12px;
      }
    }
  }
  @media (max-width: 767px) {
    .contentPart {
      order: 1;
    }
    .imagePart {
      order: 2;
    }
  }
`;

export default BhaloFinances;
