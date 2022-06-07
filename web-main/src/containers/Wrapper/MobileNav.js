import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";

import usedCarIcon from "@assets/menu/used.svg";
import reconCarIcon from "@assets/menu/recondition.svg";
import newCarIcon from "@assets/menu/new.svg";
import sellCarIcon from "@assets/menu/sell-car.svg";
import compareCarIcon from "@assets/menu/compare.svg";
import bikesIcon from "@assets/menu/bikes.svg";
import carServicingIcon from "@assets/menu/servicing.svg";
import newsIcon from "@assets/menu/news.svg";
import FAQ from "@assets/menu/faq.svg";
import Mobile from "@assets/menu/mobile.svg";

import {
  FEATUREDCARLIST,
  RECONDITIONEDCARLIST,
  USEDCARLIST,
  SELLNOW,
  // SELLCAR,
  COMPARECAR,
  COMPAREBIKE,
  BIKEPAGE,
  SERVICEREPAIR,
  CONTACTUS,
  FAQSUPPORT,
} from "@routes/paths";

// Steps core route paths. The order is important
// const MENU_PATHS = [
//   USEDCARLIST,
//   RECONDITIONEDCARLIST,
//   FEATUREDCARLIST,
//   SELLNOW,
//   COMPARECAR,
//   BIKEPAGE,
//   SERVICEREPAIR,
//   CONTACTUS,
//   FAQSUPPORT
// ];

function MobileNav(props) {
  //   const [close, setClose] = useState(false);
  //   const onClickHandler = () => {
  //     setClose(true);
  //   };
  return (
    <SiteNav>
      <Link to={USEDCARLIST} onClick={props.onClickHandler}>
        <img src={usedCarIcon} alt="used car icon" />
        <span>Used Car</span>
      </Link>
      <Link to={RECONDITIONEDCARLIST} onClick={props.onClickHandler}>
        <img src={reconCarIcon} alt="recondition car icon" />
        <span>Reconditioned Car</span>
      </Link>
      <Link to={FEATUREDCARLIST} onClick={props.onClickHandler}>
        <img src={newCarIcon} alt="new car icon" />
        <span>New Car</span>
      </Link>
      <Link to={SELLNOW} onClick={props.onClickHandler}>
        <img src={sellCarIcon} alt="new car icon" />
        <span>Sell Now</span>
      </Link>
      <Link to={COMPARECAR} onClick={props.onClickHandler}>
        <img src={compareCarIcon} alt="new car icon" />
        <span>Compare Car</span>
      </Link>
      <Link to={COMPAREBIKE} onClick={props.onClickHandler}>
        <img src={bikesIcon} alt="new bike icon" />
        <span>Compare Bike</span>
      </Link>
      <Link to={BIKEPAGE} onClick={props.onClickHandler}>
        <img src={bikesIcon} alt="new car icon" />
        <span>Bikes</span>
      </Link>
      <Link to={SERVICEREPAIR} onClick={props.onClickHandler}>
        <img src={carServicingIcon} alt="new car icon" />
        <span>Car servicing</span>
      </Link>
      <a href="http://articles.bhalogari.com/" target="_blank" rel="noreferrer" onClick={props.onClickHandler}>
        <img src={newsIcon} alt="new car icon" />
        <span>News & Reviews</span>
      </a>
      <Link to={CONTACTUS} onClick={props.onClickHandler}>
        <img src={Mobile} alt="new car icon" />
        <span>Contact Us</span>
      </Link>
      <Link to={FAQSUPPORT} onClick={props.onClickHandler}>
        <img src={FAQ} alt="new car icon" />
        <span>FAQ</span>
      </Link>
    </SiteNav>
  );
}
const SiteNav = styled.div`
  display: flex;
  flex-direction: column;
  a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 10%;
    font-size: 18px;
    text-decoration: none;
    color: #000;
    margin: 10px 0;
    span {
      padding-left: 10px;
    }
    img {
      width: 30px;
    }
  }
`;

export default MobileNav;
