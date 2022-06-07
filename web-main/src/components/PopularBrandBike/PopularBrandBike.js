import React from "react";
import PropTypes from "prop-types";
import { makeStyles, Container } from "@material-ui/core";
// import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
// import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import SectionTitle from "../../components/SectionTitle";
// import PopularToyota from "@components/PopularToyota";
// import PopularHonda from "@components/PopularHonda";
// import PopularMitsubishi from "@components/PopularMitsubishi";
// import PopularNissan from "@components/PopularNissan";
// import PopularHyundai from "@components/PopularHyundai";
import PopularHondaBike from "@components/PopularHondaBike";
import PopularYamahaBike from "@components/PopularYamahaBike";
import PopularSuzukiBike from "@components/PopularSuzukiBike";
import PopularBajajBike from "@components/PopularBajajBike";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: "58px",
    fontFamily: "'Open Sans', sans-serif",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "25px",
    },
  },
  brandTabs: {
    minHeight: "50px",
    borderBottom: "1px solid #c7c7c7",
    marginBottom: "10px",
    [theme.breakpoints.down("xs")]: {
      minHeight: "30px",
    },
  },
  brandLabel: {
    minWidth: "inherit",
    fontFamily: "'Open Sans', sans-serif",
    textTransform: "capitalize",
    fontWeight: "600",
    padding: "0 15px",
    marginRight: "15px",
    minHeight: "36px",
    position: "relative",
    fontSize: "16px",
    [theme.breakpoints.down("xs")]: {
      padding: "0 2px",
      marginRight: "7px",
      fontSize: "12px",
      minHeight: "25px",
    },
    "&.Mui-selected": {
      position: "relative",
      background: "#ea6530",
      color: "#fff",
      borderRadius: "5px",
      "&:before": {
        position: "absolute",
        content: " ",
        top: "0",
        left: "0",
        width: "100px",
        height: "5px",
        background: "#ea6530",
        zIndex: "9",
      },
    },
  },
  tabPanel: {
    "@media(max-width: 1023px)": {
      marginRight: "-24px",
    },
    "@media(max-width: 600px)": {
      marginRight: "-16px",
    },
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const classes = useStyles();

  return (
    <div
      role="tabpanel"
      className={classes.tabPanel}
      // style={{ margin: "0px -16px" }}
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function PopularBrand() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.brandMain}>
          <SectionTitle title1="Popular" title2="Brands" />
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
            className={classes.brandTabs}
            TabIndicatorProps={{
              style: {
                display: "none",
              },
            }}
          >
            <Tab
              label="Yamaha"
              {...a11yProps(0)}
              className={classes.brandLabel}
            />
            <Tab
              label="Honda"
              {...a11yProps(1)}
              className={classes.brandLabel}
            />
            <Tab
              label="Suzuki"
              {...a11yProps(2)}
              className={classes.brandLabel}
            />
            <Tab
              label="Bajaj"
              {...a11yProps(3)}
              className={classes.brandLabel}
            />
            {/* <Tab
              label="Hyundai"
              {...a11yProps(4)}
              className={classes.brandLabel}
            /> */}
          </Tabs>
          <TabPanel value={value} index={0}>
            <PopularYamahaBike />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <PopularHondaBike />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <PopularSuzukiBike />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <PopularBajajBike />
          </TabPanel>
          {/* <TabPanel value={value} index={4}>
            <PopularHyundai />
          </TabPanel> */}
        </div>
      </Container>
    </div>
  );
}
