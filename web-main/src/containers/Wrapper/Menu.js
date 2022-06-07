import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  FEATUREDCARLIST,
  RECONDITIONEDCARLIST,
  USEDCARLIST,
  // CAR_UPLOAD,
  // SELLCAR,
  COMPARECAR,
  COMPAREBIKE,
  BIKEPAGE,
  SERVICEREPAIR,
  SELLNOW,
} from "@routes/paths";

// Steps core route paths. The order is important
// const MENU_PATHS = [
//     USEDCARLIST,
//     RECONDITIONEDCARLIST,
//     FEATUREDCARLIST,
//     SELLCAR,
//     COMPARECAR,
//     BIKEPAGE,
//     SERVICEREPAIR,
//     SELLNOW,
// ];

function Menu() {
  // const { pathname } = useLocation();
  // Check which menu needs be selected.
  const lang = sessionStorage.getItem("lang");
  const langVariables = JSON.parse(sessionStorage.getItem("langVariables"));

  return (
    <SiteNav>
      <Link to={USEDCARLIST}>{langVariables !== null ? langVariables["used_car"].lang_content : "Used Car"}</Link>
      <Link to={RECONDITIONEDCARLIST}>
        {langVariables !== null ? langVariables["reconditioned_car"].lang_content : "Reconditioned Car"}
      </Link>
      <Link to={FEATUREDCARLIST}>{langVariables !== null ? langVariables["new_car"].lang_content : "New Car"}</Link>
      <Link to={SELLNOW}>{langVariables !== null ? langVariables["sell_car"].lang_content : "Sell Car"}</Link>
      <Link to={COMPARECAR}>{langVariables !== null ? langVariables["car_compare"].lang_content : "Compare Car"}</Link>
      <Link to={COMPAREBIKE}>BIKE COMPARE</Link>
      <Link to={BIKEPAGE}>{langVariables !== null ? langVariables["bikes"].lang_content : "Bikes"}</Link>
      <Link to={SERVICEREPAIR}>
        {langVariables !== null ? langVariables["car_servicing"].lang_content : "Car servicing"}
      </Link>
      <a href="http://articles.bhalogari.com/" target="_blank" rel="noreferrer">
        {langVariables !== null ? langVariables["news_and_reviews"].lang_content : "News & Reviews"}
      </a>
    </SiteNav>
  );
}

const Styled = {};

const SiteNav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  a {
    font-family: "Open sans", sans-serif;
    font-weight: 600;
    font-size: 16px;
    padding: 0;
    letter-spacing: 0;
    position: relative;
    min-width: inherit;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
    &:before {
      position: absolute;
      content: "";
      left: 0;
      width: 0;
      bottom: -4px;
      height: 3px;
      background: #fff;
      transition: all ease-in-out 0.4s;
    }
    &:hover {
      background-color: transparent;
      &:before {
        width: 100%;
        transition: all ease-in-out 0.4s;
      }
    }
  }
`;
export default Menu;
