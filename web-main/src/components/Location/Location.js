import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import styled from "styled-components";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import BDMap from "components/LocationSearchUI";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  height: 750,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Location(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const modalClose = () => {
    handleClose();
  };

  //To Do:
  // 1. the data is not listed in the search page after history.push

  return (
    <Favorite>
      <LocationOnIcon onClick={() => handleOpen()} />
      {/* Location Search UI */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className=""
      >
        {/* <Box sx={style}> */}
        <div className="grid place-content-center w-full h-full">
        <div className="p-4 content-center bg-white">
          <BDMap modalClose={modalClose} />
        </div>
        </div>
      </Modal>
    </Favorite>
  );
}

const Favorite = styled.div`
  position: relative;
  cursor: pointer;
  &:before {
    position: absolute;
    content: "";
    right: -25px;
    top: 3px;
    width: 1px;
    height: 38px;
    background: #c2c2c2;
  }
  &:after {
    position: absolute;
    content: "";
    left: -28px;
    top: 3px;
    width: 1px;
    height: 38px;
    background: #c2c2c2;
  }
  svg {
    display: block;
    width: 39px;
    height: 39px;
    border-radius: 50%;
    color: #f06424;
    background: #fff;
    line-height: 48px;
    text-align: center;
    box-shadow: 0px 2px 3.5px rgba(0, 0, 0, 0.16);
    padding: 8px;
    box-sizing: border-box;
    transition: all ease-in-out 0.4s;
  }
  span {
    display: none;
  }
  &:hover {
    svg {
      color: #fff;
      background: #f06424;
      transition: all ease-in-out 0.4s;
    }
  }
  // The icon should not consider how it renders by itself.
  // This should be the container job.

  @media (max-width: 1100px) {
    &:before {
      right: -18px;
    }
    &:after {
      left: -18px;
    }
  }
  @media (max-width: 1023px) {
    margin-top: 5px;
    svg {
      width: 35px;
      height: 35px;
    }
    span {
      display: block;
      font-size: 18px;
      color: #000;
      padding-left: 20%;
      margin-bottom: 20px;
    }
  }
`;
export default Location;
