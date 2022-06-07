import React, { lazy, Suspense } from "react";
import PropTypes from "prop-types";
import { makeStyles, Container } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
const SectionTitle = lazy(() => import("@components/SectionTitle"));
const PopularToyota = lazy(() => import("@components/PopularToyota"));
const PopularHonda = lazy(() => import("@components/PopularHonda"));
const PopularMitsubishi = lazy(() => import("@components/PopularMitsubishi"));
const PopularNissan = lazy(() => import("@components/PopularNissan"));
const PopularHyundai = lazy(() => import("@components/PopularHyundai"));

const renderLoader = () => <p>Loading</p>;

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

  const lang = sessionStorage.getItem("lang");
  const langVariables = JSON.parse(sessionStorage.getItem("langVariables"));
  const title = langVariables !== null ? langVariables["popular_brands"].lang_content : "Popular Brands";

  return (
    <Suspense fallback={renderLoader()}>
      <div className={classes.root}>
        <Container>
          <div className={classes.brandMain}>
            <SectionTitle
              title1={langVariables !== null ? title.substr(0, title.indexOf(" ")) : "Popular"}
              title2={langVariables !== null ? title.substr(title.indexOf(" ") + 1) : "Brands"}
            />
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
              <Tab label="Toyota" {...a11yProps(0)} className={classes.brandLabel} />
              <Tab label="Honda" {...a11yProps(1)} className={classes.brandLabel} />
              <Tab label="Mitsubishi" {...a11yProps(2)} className={classes.brandLabel} />
              <Tab label="Nissan" {...a11yProps(3)} className={classes.brandLabel} />
              <Tab label="Hyundai" {...a11yProps(4)} className={classes.brandLabel} />
            </Tabs>
            <TabPanel value={value} index={0}>
              <PopularToyota />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <PopularHonda />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <PopularMitsubishi />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <PopularNissan />
            </TabPanel>
            <TabPanel value={value} index={4}>
              <PopularHyundai />
            </TabPanel>
          </div>
        </Container>
      </div>
    </Suspense>
  );
}
