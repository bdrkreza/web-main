import React, { useEffect, useState } from "react";

import AddListing from "@components/AddListing/AddListing";
// import Arrow from "@components/ScrollTop";
import BhaloFooter from "@components/BhaloFooter/BhaloFooter";
import BhaloPortal from "@components/BhaloPortal/BhaloPortal";
import BhaloUpdate from "@components/BhaloUpdate/BhaloUpdate";
import FixedSocial from "@components/FixedSocial";
import MobileNavSticky from "@components/MobileNavSticky";
// import Popup from "@components/Popup/Popup";
import PopupNew from "@components/Popup/PopupNew";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const [isPopup, setIsPopup] = useState(false);
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth() + 1;
  var day = today.getDate();
  var todayDate = day + "-" + month + "-" + year;
  // console.debug(todayDate);

  useEffect(() => {
    const popupData = localStorage.getItem("is_popup");
    if (popupData === null) {
      setIsPopup(true);
      localStorage.setItem("is_popup", todayDate);
    } else {
      if (popupData !== todayDate) {
        setIsPopup(true);
        localStorage.setItem("is_popup", todayDate);
      }
    }
  });

  return (
    <>
      <BhaloPortal />
      <BhaloUpdate />
      <BhaloFooter />
      {/* <Arrow /> */}
      {location.pathname === "/" && isPopup && <PopupNew />}
      <FixedSocial />
      {location.pathname !== "/login" &&
        location.pathname !== "/otp_verification" &&
        location.pathname !== "/profile-edit" && <AddListing />}
      <MobileNavSticky />
    </>
  );
}
export default Footer;
