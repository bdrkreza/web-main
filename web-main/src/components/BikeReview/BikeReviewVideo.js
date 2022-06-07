import React from "react";
import ReactPlayer from "react-player";
import { makeStyles, Modal, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    recommended:{
      marginLeft: "-32px",
      paddingBottom: "8px",
      fontSize: "8px", 
      lineHeight: "10px",
  
      '@media(max-width: 768px)':{
        marginLeft: "5px"
      }
    },
    demoVideo: {
      height: "250px",
      borderRadius: "20px",
      position: "relative",
    },
    reviewImage: {
      width: "344px",
      height: "217px",
      '@media(max-width: 1024px)': {
        width: '290px',
      },
      '@media(max-width: 768px)': {
        width: '100%',
      },
      '@media(max-width: 425px)': {
        width: '100%',
      },
      
    },
    ImageBox: {
      margin: "0 auto",
      marginLeft: "-32px",
      '@media(max-width: 768px)':{
        display: 'flex',
        justifyContent: 'center',
      },
      '@media(max-width: 767px)':{
        marginLeft: "0px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }
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

function BikeReviewVideo(props) {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
          <p className={classes.recommended}><b style={{color: "#000000", fontWeight: "600"}}>Recommended</b> video By <b style={{ color: "#000000", fontWeight: "600" }}>Bhalogari</b></p>
            <Box display="flex" alignItems="center" className={classes.ImageBox}>
                <Box className={classes.modalDiv}>
                    <div className={classes.demoVideo}>
                    <img className={classes.reviewImage} src="/assets/toyota1.jpg" alt="Toyota"/>
                    <img
                        onClick={handleOpen}
                        className={classes.reviewIcon}
                        src="/assets/youtube.svg"
                        alt="Youtube"
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
                            props.bike.bike_video_link
                                ? props.bike.bike_video_link
                                : "https://youtu.be/_fO82a3uMcg"
                            }
                        />
                        </div>
                    </Modal>
                    </div>
                </Box>
            </Box>  
        </>
    )
}

export default BikeReviewVideo
