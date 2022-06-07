import { Container, Dialog, Grid, makeStyles } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

import AuctionSheet from '@components/AuctionSheet';
import SSLLink from '../SSLLink/SSLLink';
// import BG from "@assets/Group 2011.png";
import BG from "@assets/bhalogari.jpg";
import Background from "@assets/images/insta-background.jpg";
import Email from "@assets/images/email.svg";
import Facebook from "@assets/images/facebook.svg";
// import Instagram from "@assets/images/instagram.svg";
import Instagram from "@assets/images/insta.png";
import Line from "@assets/line.svg";
import Linkedin from "@assets/images/linkedin.svg";
import React from "react";
import Youtube from "@assets/images/youtube.svg";
const packageJson = require("../../../package.json")

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0px",
    margin: "0px",
    paddingTop: "58px",
    "@media (max-width: 1023px)": {
      marginBottom: "65px",
    },
    "@media(max-width: 768px)":{
      paddingTop: "50px"
    },
    
    "@media(max-width: 600px)":{
      paddingTop: "20px"
    },
  },
  contents: {
    padding: "5px 0",
  },
  para: {
    fontSize: "14px",
    lineHeight: "24px",
    color: "#707070",
    fontWeight: "400",
    paddingTop: "15px",
    paddingBottom: "18px",
  },
  social: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  icons: {
    
  },
  facebookIcon:{
    padding: "3px",
    borderRadius: "50%",
    marginLeft: "3px",
    backgroundColor: "#395694",
  },
  youtubeIcon:{
    padding: "3px",
    borderRadius: "50%",
    marginLeft: "3px",
    backgroundColor: "#ff0000",
  },
  linkedinIcon:{
    padding: "3px",
    borderRadius: "50%",
    marginLeft: "3px",
    backgroundColor: "#0270ad",
  },
  emailIcon:{
    padding: "3px",
    borderRadius: "50%",
    marginLeft: "3px",
    backgroundColor: "#9a33aa",
    height: "40px",
    width: "40px"
  },
  instaIcon:{
    display: "block",
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    padding: "3px",
    borderRadius: "50%",
    marginLeft: "3px",
    height: "40px",
    width: "40px"
  },
  instalogo:{
    width: "32px",
    height: "32px",
    marginLeft: "1px",
    marginTop: "1px"
  },
  headings: {
    fontSize: "22px",
    lineHeight: "24px",
    color: "#707070",
    fontWeight: "700",
    textTransform: "uppercase",
    fontFamily: "Open Sans",
    marginBlockEnd: "0",
    marginInlineStart: "0",
    marginInlineEnd: "0",
  },
  images: {
    paddingBottom: "10px",
  },
  listing: {
    padding: "0",
    margin: "0,",
    listStyleType: "none",
    marginTop: "2px",
  },
  listingItems: {
    padding: "5px",
  },
  links: {
    textDecoration: "none",
    fontSize: "14px",
    color: "#707070",
    fontWeight: 400,
  },
  copyright: {
    backgroundColor: "#e1e1e1",
    textAlign: "center",
    padding: "15px",
    fontSize: "15px",
    lineHeight: "16px",
    color: "#707070",
    fontWeight: "400",
    marginTop: "10px",
  },
  contents2: {
    paddingLeft: "15px",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "0px",
    },
  },
}));

function Footer() {
  const classes = useStyles();
  const history = useHistory();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const onClickHandler = () => {
    if (history.location.pathname === "/") {
      scrollToTop();
    } else {
      history.push("/");
    }
  };


  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid container>
           <SSLLink />
          <Grid item lg={3} md={3} sm={6} xs={12} className={classes.contents}>
              
              <img
                src={BG}
                alt={BG}
                onClick={onClickHandler}
                style={{ cursor: "pointer" }}
              />
            <p className={classes.para}>
              Bhalogari.com is the leading search car venture in Bangladesh,
              that helps users buy cars that are right for them.
            </p>
            <div className={classes.social}>
              <a href="https://facebook.com/BhalogariOfficial/" target="_blank" rel="noreferrer">
                <img src={Facebook} alt={Facebook} className={classes.facebookIcon} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCyFChwKvRlkr5gkoaI3aPDw"
                target="_blank" rel="noreferrer"
              >
                <img src={Youtube} alt={Youtube} className={classes.youtubeIcon} />
              </a>

              <a
                href="https://bd.linkedin.com/company/bhalogari"
                target="_blank" rel="noreferrer"
              >
                <img src={Linkedin} alt={Linkedin} className={classes.linkedinIcon} />
              </a>

              <a
                href="mailto:info@bhalogari.com"
              >
                <img src={Email} alt={Email} className={classes.emailIcon} />
              </a>

              <a
                href="https://instagram.com/bhalogari.bd?utm_medium=copy_link"
                target="_blank"
                rel="noreferrer"
                className={classes.instaIcon}
              >
                <img src={Instagram} alt={Instagram} className={classes.instalogo}/>
              </a>
            </div>
          </Grid>

          <Grid
            item
            lg={3}
            md={3}
            sm={6}
            xs={12}
            className={`${classes.contents} ${classes.contents2}`}
          >
            <h3 className={classes.headings}>Services</h3>
            <img src={Line} alt={Line} className={classes.images} />
            <ul className={classes.listing}>
              <li className={classes.listingItems}>
                <Link to="/reconditioned-car" className={classes.links}>
                  Buy Car
                </Link>
              </li>
              <li className={classes.listingItems}>
                <Link to="/sell-now" className={classes.links}>
                  Sell Car
                </Link>
              </li>
              <li className={classes.listingItems}>
                <Link to="/bikes" className={classes.links}>
                  Buy Bike
                </Link>
              </li>
              <li className={classes.listingItems}>
                <Link onClick={handleClickOpen} className={classes.links}>
                  Verify Auction Sheet
                </Link>
              </li>
              <li className={classes.listingItems}>
                <Link to="/service" className={classes.links}>
                  Car Servicing at your doorstep
                </Link>
              </li>
            </ul>

            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              >
                <AuctionSheet />
              </Dialog>

          </Grid>

          <Grid item lg={3} md={3} sm={6} xs={12} className={classes.contents}>
            <h3 className={classes.headings}>About Bhalogari</h3>
            <img src={Line} alt={Line} className={classes.images} />

            <ul className={classes.listing}>
              <li className={classes.listingItems}>
                <Link to="/about-us" className={classes.links}>
                  About Us
                </Link>
              </li>
              <li className={classes.listingItems}>
                <Link to="/contact-us" className={classes.links}>
                  Contact Us
                </Link>
              </li>
              <li className={classes.listingItems}>
                <Link to="/terms-conditions" className={classes.links}>
                  Terms and Conditions
                </Link>
              </li>
              <li className={classes.listingItems}>
                <Link to="/privacy-policies" className={classes.links}>
                  Privacy Policy
                </Link>
              </li>
              <li className={classes.listingItems}>
                <Link to="/refund-policy" className={classes.links}>
                  Refund Policy
                </Link>
              </li>
            </ul>
          </Grid>

          <Grid
            item
            lg={3}
            md={3}
            sm={6}
            xs={12}
            className={`${classes.contents} ${classes.contents2}`}
          >
            <h3 className={classes.headings}>More</h3>
            <img src={Line} alt={Line} className={classes.images} />
            <ul className={classes.listing}>
              <li className={classes.listingItems}>
                <Link to="/compare-car" className={classes.links}>
                  Compare Car
                </Link>
              </li>
              <li className={classes.listingItems}>
                <Link to="/faq-support" className={classes.links}>
                  FAQ and Support
                </Link>
              </li>
              <li className={classes.listingItems}>
                <a
                  href="http://articles.bhalogari.com/category/research-articles/"
                  target="_blank"
                  className={classes.links} rel="noreferrer"
                >
                  Research Articles
                </a>
              </li>
              <li className={classes.listingItems}>
                <Link to="/warranties-bhalogari" className={classes.links}>
                  Warranties & Bhalogari®
                </Link>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
      <div className={classes.copyright}>Copyright © | Bhalogari.com ({packageJson.version})</div>
    </div>
  );
}

export default Footer;