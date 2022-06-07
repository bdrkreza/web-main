import React from "react";
import ReactPlayer from "react-player";
import {
  makeStyles,
  Container,
  Card,
  Typography,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  Box,
  Modal,
} from "@material-ui/core";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
//import axios from "axios";
import { api } from "@configs/configs";
// import Toyota from "../../assets/carreview/toyota1.png";

const lang = sessionStorage.getItem('lang')

const CarReviewImage = {
  reviewImg:
    "url('https://bhalogari-static.s3.ap-southeast-1.amazonaws.com/sitestaticimg/assets/carreview/car-review1.webp')",
};

const useStyles = makeStyles((theme) => ({
  carContainer: {
    width: "100%",
    height: "auto",
    padding: "58px 0px",
    backgroundImage: `${CarReviewImage.reviewImg}`,
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    "& .MuiCardContent-root": {
      padding: "90px 100px 100px 38px",
      [theme.breakpoints.down("md")]: {
        padding: "50px 80px 70px 25px",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "50px 80px 40px 25px",
      },
      [theme.breakpoints.down("xs")]: {
        padding: "25px 10px 40px 15px",
      },
    },
    [theme.breakpoints.down("sm")]:{
      "& .MuiBox-root": {
        display: "flex",
        flexDirection: "column",
      }
    }
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  demoVideo: {
    borderRadius: "20px",
    position: "relative",
    overflow: "hidden",
  },
  reviewImage: {
    width: "100%",
    height: "auto",
  },
  carContainerInner: {
    flex: "1 1 50%",
    [theme.breakpoints.down("xs")]: {
      flex: "1 1 100%",
    }

  },
  reviewIcon: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "76px",
    height: "76px",
    borderRadius: "50%",
    cursor: "pointer",
    transform: "translate(-50%,-50%)",
    [theme.breakpoints.down("xs")]: {
      width: "50px",
      height: "50px",
    },
  },
  modalDiv: {
    flex:" 1 1 50%",
    marginLeft: "-70px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "inherit",
      marginTop: "-40px",
    },
    [theme.breakpoints.down("xs")]: {
      flex: "1 1 100%",
      marginLeft: "0px",
      marginTop: "-40px",
      padding: "0 20px"
    }
  },
  modal: {
    maxWidth: "700px",
    height: "300px",
    margin: "auto",
    borderRadius: "2px",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "80%",
      height: "200px",
    }
  },

  reviewText: {
    fontSize: "30px",
    lineHeight: "44px",
    color: "#000000",
    fontWeight: 700,
    fontFamily: "Open Sans",
    paddingBottom: "30px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
      lineHeight: "25px",
    },
  },
  list: {
    fontSize: "14px",
    lineHeight: "32px",
    color: "#000",
    fontWeight: "400",
    fontFamily: "Open Sans",
    listStyle: "none",
    paddingLeft: "10px",
    "& li": {
      padding: "0",
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: "0",
      paddingRight: "0",
    },
  },
  listIcon: {
    width: "40px",
  },
}));

const CarReview = (props) => {
  const classes = useStyles();
  const [reviews, setReviews] = React.useState([]);
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  // function generate(element) {
  //   return [0, 1, 2].map((value) =>
  //     React.cloneElement(element, {
  //       key: value,
  //     })
  //   );
  // }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // React.useEffect(() => {
  //   (async () => {
  //     const { data } = await api.get("carreviews");

  //     if (data) {
  //       setReviews(data);
  //     }
  //   })();
  // }, []);

  return (
    <div className={classes.carContainer}>
      <Container maxWidth="lg">
        <Box display="flex" alignItems="center">
          <Card className={classes.carContainerInner}>
            <CardContent>
              <Typography className={classes.reviewText}>
                {(props.langVariables !== null) ? props.langVariables['video_section_title'].lang_content : "Watch videos from the number one car review channel in Bangladesh"}
              </Typography>
              <List className={classes.list}>
                <ListItem>
                  <ListItemIcon className={classes.listIcon}>
                    <DoneOutlineIcon />
                  </ListItemIcon>
                  <p>{(props.langVariables !== null) ? props.langVariables['expert_previews'].lang_content : "Expert Previews"}</p>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <DoneOutlineIcon />
                  </ListItemIcon>
                  <p>{(props.langVariables !== null) ? props.langVariables['real_user_review'].lang_content : "Real User Reviews"}</p>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <DoneOutlineIcon />
                  </ListItemIcon>
                  <p>{(props.langVariables !== null) ? props.langVariables['latest_offers_updates'].lang_content : "Latest Offers & Updates"}</p>
                </ListItem>
              </List>
            </CardContent>
          </Card>
          <Box className={classes.modalDiv}>
            <div className={classes.demoVideo}>
              <img className={classes.reviewImage} src="/assets/toyota1.jpg" alt="Toyota"/>
              <img
                onClick={handleOpen}
                className={classes.reviewIcon}
                src="/assets/youtube.svg"
                alt="YouTube"
              />
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
              >
                <div>
                  <ReactPlayer
                    maxWidth="600px"
                    width="100%"
                    height="36vh"
                    url="https://www.youtube.com/watch?v=_fO82a3uMcg"
                  />
                </div>
              </Modal>
            </div>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default CarReview;
