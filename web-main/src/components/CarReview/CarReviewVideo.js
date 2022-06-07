import { Box, makeStyles, Modal } from "@material-ui/core";
import React from "react";
import ReactPlayer from "react-player";
// import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
//import axios from "axios";
// import { axiosInstance } from "@configs/configs";
// import Toyota from "../../assets/carreview/toyota1.png";

// TODO unused
// const CarReviewImage = {
//   reviewImg:
//     "url('https://bhalogari-static.s3.ap-southeast-1.amazonaws.com/sitestaticimg/assets/carreview/car-review1.png')",
// };

const useStyles = makeStyles((theme) => ({
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  recommended: {
    marginLeft: "-28px",
    paddingBottom: "8px",
    fontSize: "15px",
    lineHeight: "10px",

    "@media(max-width: 768px)": {
      marginLeft: "5px",
    },
  },
  demoVideo: {
    height: "250px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20px",
    position: "relative",
    "@media(min-width: 960px)": {
      width: "344px",
      marginLeft: "-40px",
    },
    "@media(max-width: 768px)": {
      width: "100%",
    },
  },
  reviewImage: {
    width: "344px",
    height: "217px",
    "@media(max-width: 1024px)": {
      width: "100%",
    },
    // "@media(max-width: 768px)": {
    //   display: "flex",
    //   justifyContent: "center",
    //   width: "100%",
    // },
    "@media(max-width: 425px)": {
      width: "100%",
    },
  },
  ImageBox: {
    margin: "0 auto",
    width: "100%",
    // marginLeft: "-30px",
    // "@media(max-width: 767px)": {
    //   marginLeft: "0px",
    // },
    // "@media(max-width: 768px)": {
    //   marginLeft: "0px",
    // },
  },
  reviewIcon: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "50px",
    height: "50px",
    borderRadius: "5px",
    cursor: "pointer",
    transform: "translate(-50%,-50%)",
  },
  modalDiv: {
    position: "relative",
    top: 0,
  },
  modal: {
    width: "700px",
    height: "300px",
    margin: "auto",
    borderRadius: "2px",
  },
}));

const CarReviewVideo = (props) => {
  const classes = useStyles();
  // const [reviews, setReviews] = React.useState([]);
  // const [dense, setDense] = React.useState(false);
  // const [secondary, setSecondary] = React.useState(false);

  function generate(element) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      })
    );
  }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // React.useEffect(() => {
  //   (async () => {
  //     const { data } = await axiosInstance.get("/carreviews");

  //     if (data) {
  //       setReviews(data);
  //     }
  //   })();
  // }, []);

  return (
    <>
      <p className={classes.recommended}>
        <b style={{ color: "#000000", fontWeight: "600" }}>Recommended</b> video
        By <b style={{ color: "#000000", fontWeight: "600" }}>Bhalogari</b>
      </p>
      <Box className={classes.ImageBox}>
        <Box className={classes.modalDiv}>
          <div className={classes.demoVideo}>
            <img
              className={classes.reviewImage}
              src="/assets/toyota1.jpg"
              alt="Toyota"
            />
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
                  width="700px"
                  height="300px"
                  url={
                    props.car.car_video_link
                      ? props.car.car_video_link
                      : "https://youtu.be/_fO82a3uMcg"
                  }
                />
              </div>
            </Modal>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default CarReviewVideo;
