import React, { useEffect, useState } from "react";

import { DropzoneArea } from "material-ui-dropzone";
// import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  appheader: {
    boxShadow: "none",
    background: "transparent",
  },
  dropZone: {
    height: "100%",
    minHeight: "0px",
    position: "relative",
    "& .MuiGrid-spacing-xs-8": {
      width: "100%",
      margin: "0",
    },
    "& p": {
      fontSize: "16px",
      margin: "0",
      padding: "10px 0 0 0",
    },
    "@media (max-width: 960px)": {
      minHeight: "445px",
      maxHeight: "100vh",
      height: "100%",
    },
    "@media (max-width: 767px)": {
      minHeight: "560px",
    },
    "@media (max-width: 600px)": {
      minHeight: "395px",
    },
  },
  previewImg: {
    width: "100%",
    height: "115px",
    // "@media (max-width: 960px)": {
    //   height: "100px",
    // },
    // "@media (max-width: 767px)": {
    //   height: "100px",
    // },
    // "@media (max-width: 600px)": {
    //   height: "85px",
    // },
    "@media (max-width: 600px)": {
      height: "60px",
    },
  },
  preview: {
    width: "20%",
    maxWidth: "20%",
    padding: "5px !important",
    "@media (max-width: 960px)": {},
    "@media (max-width: 767px)": {
      width: "25%",
      maxWidth: "25%",
    },
    // "@media (max-width: 600px)": {
    //   width: "33.333%",
    //   maxWidth: "33.333%",
    // },
    "& .MuiDropzonePreviewList-removeButton": {
      top: "-8px",
      right: "5px",
      width: "30px",
      height: "30px",
      minHeight: "30px",
      color: "#f06425",
    },
  },
  previewContainer: {
    position: "absolute",
    top: "100px",
    left: "0px",
    margin: "0px auto",
    padding: "0px 20px",
    width: "100%",
  },
  disabled: {
    display: "none",
  },
});

const MultiImageUpload = (props) => {
  const classes = useStyles();
  const [fileLimitExceeded, setFileLimitExceeded] = useState(false);
  // console.log(props.carImages);
  useEffect(() => {
    if (props.length >= 15) {
      setFileLimitExceeded(true);
    } else {
      setFileLimitExceeded(false);
    }
  });
  return (
    <DropzoneArea
      acceptedFiles={["image/*"]}
      dropzoneProps={{ disabled: fileLimitExceeded }}
      dropzoneClass={classes.dropZone}
      previewGridClasses={{
        container: classes.previewContainer,
        item: classes.preview,
        image: classes.previewImg,
      }}
      // initialFiles={['https://bhalogari-static.s3.amazonaws.com/media/2005-Honda-Civic-FrontSide_HOCIVSED051_505x375.jpg']}
      getPreviewIcon={(file) => {
        if (file.file.type.split("/")[0] === "image")
          return (
            <img
              className={classes.previewImg}
              role="presentation"
              alt="presentation"
              src={file.data}
            />
          );
      }}
      // open={true}
      previewText={false}
      dropzoneText={
        fileLimitExceeded
          ? "You have already uploaded 15 photos"
          : "Drag & Drop file you want to upload"
      }
      filesLimit={15}
      maxFileSize={10000000}
      onChange={(files) => props.onUpload(files)}
      onDelete={(file) => props.imageDelete(file)}
      showAlerts={["error"]}
      showPreviewsInDropzone={false}
      showPreviews={true}
    />
  );
};

export default MultiImageUpload;
