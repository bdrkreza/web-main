import React from "react";
import styled from "styled-components";
// import IconImage from "../../assets/images/Loan.png";
// import CancelIcon from "@material-ui/icons/Cancel";

const MediaObject = ({
  imageLeft,
  mediaTitle,
  mediaSubTitle,
  close,
  mediaClass,
}) => {
  return (
    <MediaObjectDiv className={mediaClass}>
      <div className="media-image">
        <img src={imageLeft} alt="Left"/>
      </div>

      <div className="media-content">
        <h3>{mediaTitle}</h3>
        <p>{mediaSubTitle}</p>
      </div>
      {close}
    </MediaObjectDiv>
  );
};

const MediaObjectDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  padding-left: 12px;
  position: relative;
`;
export default MediaObject;
