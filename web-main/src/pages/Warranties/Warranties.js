import React, { lazy, Suspense } from "react";
import styled from "styled-components";
import { Container, Grid, List, ListItem, ListItemIcon, makeStyles } from "@material-ui/core";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";

const BhaloBuy = lazy(() => import("@components/BhaloBuy/BhaloBuy"));
const Article = lazy(() => import("@components/Article/"));
// import BhaloAfterSalesWarranty from "../../components/BhaloAfterSalesWarranty/BhaloAfterSalesWarranty";

const useStyles = makeStyles((theme) => ({
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
  listIcon: {
    width: "40px",
    minWidth: "40px",
  },
}));

const renderLoader = () => <p>Loading</p>;

function Warranties() {
  const classes = useStyles();
  return (
    <>
      <Suspense fallback={renderLoader()}>
        <Container maxWidth="lg">
          <Grid container>
            <TopDiv>
              <span>CAR WARRANTIES</span>
              <h1>Compare cheap car warranties</h1>
              <List className={classes.list}>
                <ListItem>
                  <ListItemIcon className={classes.listIcon}>
                    <DoneOutlineIcon />
                  </ListItemIcon>
                  <p>Peace of mind that your vehicle is protected</p>
                </ListItem>
                <ListItem>
                  <ListItemIcon className={classes.listIcon}>
                    <DoneOutlineIcon />
                  </ListItemIcon>
                  <p>Find a great deal in under 5 minutes</p>
                </ListItem>
                <ListItem>
                  <ListItemIcon className={classes.listIcon}>
                    <DoneOutlineIcon />
                  </ListItemIcon>
                  <p>In partnership with Protect Your Family</p>
                </ListItem>
              </List>
            </TopDiv>
            <ContentDiv>
              <h2>What is a car warranty?</h2>
              <p>
                A car warranty covers the cost of labour and parts over an agreed timeframe if your vehicle needs
                repairing due to mechanical or electrical failure.
              </p>
              <p>
                Warranty term lengths vary but a typical example is three years or 60,000 miles – whichever you arrive
                at first.
              </p>
            </ContentDiv>
            <ContentDiv>
              <h2>Where can I get a car warranty?</h2>
              <p>
                If the car you are buying is brand new, it will almost certainly come with a free warranty thrown in
                from the manufacturer. Often these last for three years – or up to a given mileage limit – and come with
                the option to extend when it runs out.
              </p>
              <p>
                At this point it’s important to shop around to make sure you’re getting the best deal – more on this
                below.
              </p>
              <p>
                If you are buying a nearly new car, it might still fall under the original manufacturer’s warranty. This
                is linked to the vehicle itself and will be transferred over to your name as the new registered owner.
              </p>
            </ContentDiv>
            <ContentDiv>
              <h2>Can I get a warranty for a used car?</h2>
              <p>
                Major car dealerships also generally offer their own ‘approved used car’ warranties – often for a period
                of 12 months.
              </p>
              <p>
                Note that in this case, unlike a manufacturer’s warranty, you will need to have the car serviced at the
                dealership you bought it from – or a franchise – for the warranty to remain valid.
              </p>
            </ContentDiv>

            <ContentDiv>
              <h2>Can I buy my own car warranty?</h2>
              <p>
                It’s also possible to buy a car warranty yourself from a range of independent warranty providers.
                Sometimes these are known as aftermarket warranties.
                <br />
                <br />
                These are great if, for example, you have a vehicle you already own, or your existing warranty is about
                to expire.
                <br />
                <br />
                You may also find you can get a better deal from an independent warranty provider rather than by
                extending with your current manufacturer’s or car dealership’s warranty.
                <br />
                <br />
                Terms and conditions of aftermarket warranties can vary significantly – from their duration to the cap
                on the cost of repairs, as well as what types of repairs are covered.
                <br />
                <br />
                Many will also have their own specific claims procedure, which could involve paying upfront and
                recouping the cost from the provider.
                <br />
                <br />
                Always be sure to shop around and check the terms and conditions of each warranty before making your
                choice.
              </p>
            </ContentDiv>
            <ContentDiv>
              <h2>How much does a car warranty cost?</h2>
              <p>
                The cost of a car warranty depends on a range of factors, starting with the vehicle itself. For example:
                <ul>
                  <li>The value of the car (the more expensive, the more it may cost to repair)</li>
                  <li>The age of the car (the older it is, the more likely it may be to break down)</li>
                  <li>
                    The miles on the clock and the miles you drive (the more use the car has, the more likely you may be
                    to activate the car warranty)
                  </li>
                  <li>
                    The level of cover (some car warranty providers offer cover for more than just the engine or
                    mechanics)
                  </li>
                </ul>
              </p>
              <p>
                You can keep the cost of a warranty down by opting for a more basic package or a shorter warranty – but
                bear in mind that the less coverage the warranty offers, the more likely it is you’ll need to dip into
                your own pocket to pay for repairs which can be costly.
              </p>
            </ContentDiv>
            <ContentDiv>
              <h2>What’s usually covered by a car warranty?</h2>
              <p>
                Car warranties generally covers the cost of repairs to engines and transmission, fuel systems, air
                conditioning and cooling systems, gear boxes, steering, suspension, non-frictional clutch and brake
                parts and electrics.
                <br />
                But exactly what is covered varies between policies – so check the small print.
              </p>
            </ContentDiv>

            <ContentDiv>
              <h2>What’s usually not covered by a car warranty?</h2>
              <p>
                Some repairs will fall firmly outside most warranties, including replaceable parts such as batteries,
                bulbs, wheels and tyres.
                <br />
                <br />
                Wear and tear – such as to damage of brake discs and brake pads – is also generally not included. And
                neither are cosmetic repairs such as to paintwork or the car’s interior.
                <br />
                <br />
                Accidental damage and vandalism that requires repair to your vehicle or replacement of parts would also
                not fall under the warranty.
                <br />
                <br />
                However, you can opt to have some repairs added onto your policy for extra cost.
              </p>
            </ContentDiv>
          </Grid>
        </Container>
        <BhaloBuy />
        <Article />
      </Suspense>
    </>
  );
}
const TopDiv = styled.div`
  margin-top: 230px;
  span {
    color: #555;
    font-weight: 600;
  }
  h1 {
    margin: 0;
    color: #f06424;
    font-size: 36px;
    padding-bottom: 15px;
  }
  @media (max-width: 992px) {
    margin-top: 135px;
  }
`;
const ContentDiv = styled.div`
  width: 100%;
  padding: 20px 0px;
  :nth-child(odd) {
    padding: 20px 25px;
    background: #efefef;
    margin: 15px 0;
    border-radius: 7px;
  }
  h2 {
    font-size: 22px;
    color: #555;
    padding-bottom: 10px;
  }
  p {
    font-size: 16px;
    color: #5d534f;
    line-height: 24px;
    padding-bottom: 10px;
  }
  ul {
    padding: 20px 0 20px 35px;
  }
`;

export default Warranties;
