import { Container, Drawer, IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Avatar from "@components/AdminAvatar";
import CartBoxIcon from "@components/CartBox";
// import { Redirect } from "react-router-dom";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Logo from "@components/SiteLogo";
import MenuIcon from "@material-ui/icons/Menu";
import MobileNav from "@containers/Wrapper/MobileNav";
// import MobileNav from "./MobileNav";
// import { Link as RouterLink } from "react-router-dom";
import Search from "@components/SearchBox";
import logInIcon from "../../assets/menu/profile.svg";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  drawerContainer: {
    width: "300px",
    padding: "30px 0",
    boxSizing: "border-box",
    [theme.breakpoints.down("md")]: {
      "& .MuiListItem-root": {
        textTransform: "capitalize",
        paddingLeft: "15%",
        boxShadow: "none",
        fontSize: "18px",
        color: "#000",
      },
    },
    "& .closer": {
      position: "absolute",
      top: "5px",
      right: "5px",
      fill: "#333",
    },
  },
  mobileHeader: {
    background: "#efefef",
  },
}));

const DrawerMenu = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const [loggedin, setLoggedin] = useState(false);
  const theme = useTheme();
  const { header, logo, testnav, menuButton, toolbar, drawerContainer } = useStyles();
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    // console.log(localStorage.getItem("user_id"));

    const setResponsiveness = () => {
      return window.innerWidth < 1023
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  useEffect(() => {
    if (localStorage.getItem("user_id") === null) {
      setLoggedin(false);
    } else if (localStorage.getItem("user_id") !== null) {
      setLoggedin(true);
    }
  }, [100]);

  const handleDrawerOpen = () => setState((prevState) => ({ ...prevState, drawerOpen: true }));
  const handleDrawerClose = () => setState((prevState) => ({ ...prevState, drawerOpen: false }));
  const handleMenuClick = () => {
    setState((prevState) => ({ ...prevState, drawerOpen: false }));
  };

  return (
    <div className={classes.mobileHeader}>
      <IconButton
        {...{
          edge: "start",
          color: "inherit",
          "aria-label": "menu",
          "aria-haspopup": "true",
          onClick: handleDrawerOpen,
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="23.047" height="15.769" viewBox="0 0 23.047 15.769">
          <g id="Group_2600" data-name="Group 2600" transform="translate(0 0.5)">
            <line
              id="Line_2"
              data-name="Line 2"
              x2="18.798"
              transform="translate(2.679 8.056)"
              fill="none"
              stroke="#000"
              strokeWidth="1"
            />
            <line
              id="Line_243"
              data-name="Line 243"
              x2="13.427"
              transform="translate(5.364 14.769)"
              fill="none"
              stroke="#000"
              strokeWidth="1"
            />
            <line
              id="Line_3"
              data-name="Line 3"
              x2="23.047"
              transform="translate(0)"
              fill="none"
              stroke="#000"
              strokeWidth="1"
            />
          </g>
        </svg>
      </IconButton>
      <Drawer
        {...{
          anchor: "left",
          open: drawerOpen,
          onClose: handleDrawerClose,
          class: "drawerBg",
        }}
      >
        <div className={drawerContainer}>
          <HighlightOffIcon onClick={handleDrawerClose} className="closer" />
          <Logo classLogo="drawer-logo" />
          <Avatar handleMenuClick={handleMenuClick} deviceType={mobileView} />
          <MobileNav onClickHandler={handleDrawerClose} />
        </div>
      </Drawer>
    </div>
  );
};

export default DrawerMenu;
