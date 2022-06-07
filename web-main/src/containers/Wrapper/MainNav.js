import { Container, Drawer } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Avatar from "@components/AdminAvatar";
import CartBoxIcon from "@components/CartBox";
// import DrawerMenu from "@components/DrawerMenu";
// import { Redirect } from "react-router-dom";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Logo from "@components/SiteLogo";
import Menu from "./Menu";
import LocationIcon from "@components/Location";
// import MenuIcon from "@material-ui/icons/Menu";
import MobileNav from "./MobileNav";
// import { Link as RouterLink } from "react-router-dom";
import Search from "@components/SearchBox";
import logInIcon from "@assets/menu/profile.svg";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Language from "@components/LanguageButton";

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

function MainNav(props) {
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
      return window.innerWidth < 1024
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

  const displayDesktop = () => {
    return (
      <Container>
        <Menu />
      </Container>
    );
  };

  /**
   * Menu for Mobile
   * @returns 
   */
  const displayMobile = () => {
    const handleDrawerOpen = () => setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () => setState((prevState) => ({ ...prevState, drawerOpen: false }));
    const handleMenuClick = () => {
      setState((prevState) => ({ ...prevState, drawerOpen: false }));
    };

    return (
      <div className={classes.mobileHeader}>
        <ToolbarTest className={testnav}>
          <Logo />
          <div className="right-part">
            {localStorage.getItem("user_id") === null && (
              <div>
                <LoginItem onClick={() => history.push("/login")}>
                  <img src={logInIcon} alt="profile icon" />
                </LoginItem>
              </div>
            )}
            <LocationIcon />
            {/* <a onClick={() => history.push("/cart")}>
              <CartBoxIcon
                serviceList={props.serviceList}
                removeService={props.removeService}
                totalCount={props.totalCount}
                totalPrice={props.totalPrice}
              />
            </a> */}
            <Language />
            <Avatar deviceType={false}/>
            {/* <CreateAdButton /> */}
            {/* <DrawerMenu /> */}
            {/* <IconButton
              {...{
                edge: "start",
                color: "inherit",
                "aria-label": "menu",
                "aria-haspopup": "true",
                onClick: handleDrawerOpen,
              }}
            >
              <MenuIcon />
            </IconButton> */}
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
        </ToolbarTest>
        <Search />
      </div>
    );
  };
  return <Header className={header}>{mobileView ? displayMobile() : displayDesktop()}</Header>;
}
const Header = styled.div`
  background: #f06425;
  padding: 18px 0;
  position: fixed;
  width: 100%;
  border-bottom: 1px solid #fff;
  @media (max-width: 1023px) {
    background: #efefef;
    padding: 5px 0;
    border-bottom: 0px solid #fff;
  }
`;
const ToolbarTest = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  .right-part {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 30px;
    button {
      padding: 0;
      &:hover {
        background: transparent;
      }
      svg {
        fill: #f06425;
        font-size: 34px;
      }
    }
    @media (max-width: 320px) {
      gap: 20px;
    }
  }
`;
const LoginItem = styled.div`
  margin-top: 5px;
  margin-right: -8px;
  color: #000;
  background-color: #fff;
  height: 34px;
  width: 34px;
  font-size: 18px;
  text-align: center;
  border-radius: 50%;
  box-shadow: 0px 2px 3.5px rgba(0, 0, 0, 0.16);
  img {
    padding-top: 5px;
    margin: auto;
    width: 18px;
  }
`;

export default MainNav;
