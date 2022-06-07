import {
  Box,
  Card,
  Snackbar,
  Tab,
  Tabs,
  Typography,
  makeStyles,
  useTheme,
} from "@material-ui/core";
import React, { useRef } from "react";

import ProfileForm from "../Form/ProfileForm";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
// import sytled from "styled-components";
import { api } from "@configs/configs";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "950px",
    position: "relative",
    padding: "0 30px",
    overflow: "inherit",
    borderRadius: "10px",
    "@media (max-width: 767px)": {
      padding: "0 10px",
    },
  },

  formField: {
    marginLeft: "-25px",
  },

  profileImage: {
    position: "absolute",
    top: "-82px",
    right: "91px",
    cursor: "pointer",
    border: "5px solid #fff",
    borderRadius: "50%",
    overflow: "hidden",
    width: "164px",
    height: "164px",
    background: "#fff",
    display: "flex",
    justifyContent: "center",
    "@media(max-width: 767px)": {
      right: "50%",
      marginRight: "-82px",
      marginTop: "20px",
    },
  },
  image: {
    minWidth: "180px",
    height: "auto",
  },

  profileHeadText: {
    fontSize: "28px",
    textTransform: "uppercase",
    fontWeight: "600",
    fontFamily: "inherit",
    paddingTop: "85px",
    marginBottom: "25px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "100px",
    },
    "@media(max-width: 768px)": {
      marginTop: "45px",
    },
    "@media(max-width: 767px)": {
      marginBottom: "25px",
    },
    "@media(max-width: 425px)": {
      marginTop: "20px",
      fontSize: "25px",
    },
    "@media(max-width: 411px)": {
      fontSize: "24px",
      textAlign: "center",
    },
    "@media(max-width: 414px)": {
      fontSize: "24px",
      textAlign: "center",
    },
    "@media(max-width: 375px)": {
      fontSize: "21px",
    },
    "@media(max-width: 360px)": {
      fontSize: "20px",
      textAlign: "center",
    },
    "@media(max-width: 320px)": {
      fontSize: "18px",
    },
    "@media(max-width: 280px)": {
      fontSize: "15px",
      textAlign: "center",
    },
  },

  toggleSwitch: {
    backgroundColor: theme.palette.background.paper,
  },

  tabClass: {
    maxWidth: "345px",
    height: "50px",
    overflow: "hidden",
    borderRadius: "25px",
    backgroundColor: "#ffffff",
    border: "1px solid #bbbbbb",
    marginBottom: "30px",
    "& .MuiTabs-root": {
      minHeight: "52px",
    },
    "@media(max-width: 375px)": {
      marginBottom: "15px",
    },
  },
  tabItemTitle: {
    fontSize: "20px",
    textTransform: "capitalize",
    color: "#000",
    fontFamily: "inherit",
    fontWeight: "600",
    letterSpacing: "0",
    minHeight: "50px",
    borderRadius: "50px",
    transition: "all ease-in-out 0.5s",
    "&.Mui-selected": {
      background: "#000",
      color: "#fff",
      transition: "all ease-in-out 0.5s",
      "&:hover": {
        background: "#000",
        color: "#fff",
      },
    },
    "&:hover": {
      background: "#fff",
      color: "#333",
    },
  },
}));

const ProfileCard = () => {
  let inputFile = useRef("/assets/profile-default.svg");
  const classes = useStyles();
  const theme = useTheme();

  const [value, setValue] = React.useState(0);
  const fixedImagePath = "assets/car-upload-icon.svg";
  const [image, setImage] = React.useState();
  const [displayImage, setDisplayImage] = React.useState();
  const [open, setOpen] = React.useState(false);
  const [snackMsg, setSnackMsg] = React.useState("Maximum Allowed Size Is 20MB");

  const [updateInputs, setUpdateInputs] = React.useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
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
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  }

  const openFolder = () => {
    inputFile.current.click();
  };

  const handleImage = (e) => {
    if (e.target.files.length > 0) {
      inputFile = e.target.files[0];
      const max_size = 1024 * 20;

      if (inputFile.size / 1024 > max_size) {
        setImage(fixedImagePath);
        setOpen(true);
        return;
      } else {
        let reader = new FileReader();
        reader.readAsDataURL(inputFile);

        reader.onloadend = () => {
          setDisplayImage(reader.result);
        };
        setImage(inputFile);
      }
    } else {
      setImage(null);
    }
  };

  const [state] = React.useState({
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal } = state;

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  React.useEffect(() => {
    if (
      localStorage.getItem("update") === null ||
      localStorage.getItem("logged") !== null
    ) {
      try {
        (async () => {
          const id = localStorage.getItem("user_id");
          const response = await api.get(`api/user/profile/?user_id=${id}`);
          const { data } = response;

          const newObject = {
            first_name: data.first_name,
            last_name: data.last_name,
            contact_number: data.contact_number,
            email: data.email,
            address: data.address,
            user_district: data.user_district,
            // date_of_birth: data.date_of_birth,
            date_of_birth:
              data.date_of_birth === null ? "" : data.date_of_birth,
            country: data.country,
            post_code: data.post_code,
            image_url: data.image_url,
            individual_user: data.individual_user,
            business_user: data.business_user,
            gender: data.gender,
            nid_number: data.nid_number,
            tin_number: data.tin_number,
          };

          if (response.statusText === "OK") {
            setUpdateInputs(newObject);
            setDisplayImage(data.image_url);
            // setImage(data.image_url === null ? image : data.image_url);
            data.individual_user === true
              ? setValue(0)
              : data.business_user === true
              ? setValue(1)
              : setValue(0);
          }
        })();
      } catch (err) {console.error(err);}
    }
  }, []);

  return (
    <Card className={classes.root}>
      <Typography variant="h3" className={classes.profileHeadText}>
        Choose Your Account Type
      </Typography>
      <div className={classes.profileImage}>
        <img
          onClick={openFolder}
          className={classes.image}
          src={displayImage ? displayImage : "assets/add-picture.svg"}
          alt="Profile"
        />
        <input
          type="file"
          onChange={handleImage}
          ref={inputFile}
          accept="image/*"
          style={{ display: "none" }}
        />
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          autoHideDuration={4000}
          message={snackMsg}
          key={vertical + horizontal}
        />
      </div>

      <div className={classes.toggleSwitch}>
        <div className={classes.tabClass}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab
              className={classes.tabItemTitle}
              label="Individual"
              {...a11yProps(0)}
            />
            <Tab
              className={classes.tabItemTitle}
              label="Business"
              {...a11yProps(1)}
            />
          </Tabs>
        </div>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel
            value={value}
            index={0}
            dir={theme.direction}
            className={classes.tabTexttest}
          >
            <ProfileForm
              updateInputs={updateInputs}
              accountType="Individual"
              profileImage={image}
            />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <ProfileForm
              updateInputs={updateInputs}
              accountType="Business"
              profileImage={image}
            />
          </TabPanel>
        </SwipeableViews>
      </div>
    </Card>
  );
};

export default ProfileCard;
