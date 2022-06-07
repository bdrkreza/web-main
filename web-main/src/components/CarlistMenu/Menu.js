import React from "react";
import styled from "styled-components";
import Dropdown from "../Dropdown/Dropdown";
import { Button, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    width: "100%",
    height: "60px",
    borderRadius: "0px 0px 10px 10px",
    boxShadow: "(0px 3px 3px rgba(0, 0, 0, 0.16))",
    backgroundColor: "#f06424",
    color: "white",
    fontSize: "15px",
    fontWeight: "600",
  },
  dropdown: {
    width: "212px",
    display: "flex",
    justifyContent: "space-between",
    "&:hover": {
      color: "#f06424",
    },
    [theme.breakpoints.up("md")]: {},
  },
  dropdownIcon: {
    background: "transparant",
  },
  list: {
    width: "285px",
    height: "525px",
    borderRadius: "5px",
    backgroundColor: "#ffffff",
    border: "1px solid #d8d8d8",
  },
}));

const MenuBar = styled.div`
  height: 579px;
  border-radius: 10px;
  filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.16));
  @media (max-width: 768px) {
    width: 70vw;
  }
`;
const SearchOptions = styled.div`
  width: 100%;
  height: 579px;
  border-radius: 10px;
  filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.16));
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 70vw;
  }
`;
const SearchOptionsTitle = styled.div`
  width: 212px;
  height: 48px;
  border-radius: 10px;
  filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.16));
  background-color: #edeef2;
  font-size: 18px;
  color: #000000;
  font-weight: 700;
  font-family: "Open Sans";
  margin: 0 auto;
  text-align: center;
  align-items: center;
  position: relative;
  top: 20px;
  line-height: 48px;
  @media (max-width: 768px) {
    width: 70vw;
    top: 0px;
  }
`;
const SearchOptionsList = styled.div`
  height: 80%;
  position: relative;
  padding-top: 10%;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    width: 70vw;
    padding-top: 0px;
  }
`;
const Menu = () => {
  const classes = useStyles();
  return (
    <div>
      <MenuBar>
        <SearchOptions>
          <SearchOptionsTitle>SEARCH Options</SearchOptionsTitle>
          <SearchOptionsList>
            <ListItem>
              <Dropdown
                classname={classes.dropdown}
                buttonname={"Sort By"}
                menulist={["Price", "Year"]}
              />
            </ListItem>
            <ListItem>
              <Dropdown
                classname={classes.dropdown}
                buttonname={"Select Condition"}
                menulist={["New", "Used", "Reconditioned"]}
              />
            </ListItem>
            <ListItem>
              <Dropdown
                classname={classes.dropdown}
                buttonname={"Select Model"}
                menulist={["Axio", "Corolla", "Premio", "X3"]}
              />
            </ListItem>
            <ListItem>
              <Dropdown
                classname={classes.dropdown}
                buttonname={"Select Type"}
                menulist={["Hatchback", "Coupe", "SUV"]}
              />
            </ListItem>
            <ListItem>
              <Dropdown
                classname={classes.dropdown}
                buttonname={"Select Maker"}
                menulist={["Toyota", "BMW", "Nissan"]}
              />
            </ListItem>
            <ListItem>
              <Dropdown
                classname={classes.dropdown}
                buttonname={"Select Year"}
                menulist={["2021", "2020"]}
              />
            </ListItem>
            <ListItem>
              <Dropdown
                classname={classes.dropdown}
                buttonname={"Price Range"}
                menulist={[
                  "10,00,000 - 30,00,000",
                  "30,00,000 - 50,00,000",
                  "50,00,000 - 1,00,00,000",
                ]}
              />
            </ListItem>
          </SearchOptionsList>
          <Button className={classes.menuButton}>Search Your Car</Button>
        </SearchOptions>
      </MenuBar>
    </div>
  );
};

export default Menu;
