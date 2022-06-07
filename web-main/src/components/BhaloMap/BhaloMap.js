import React from "react";
import styled from "styled-components";

function BhaloMap() {
  return (
    <MapDiv>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4342.365455107005!2d90.40499285207937!3d23.765932069331317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b934c990a577%3A0xf75aeafd7e8a0ca3!2sBhalogari.com%20Service%20Centre!5e0!3m2!1sen!2sbd!4v1625589564974!5m2!1sen!2sbd"
        className="map-frame"
        allowFullScreen=""
        loading="lazy"
        title="map-frame"
      ></iframe>
    </MapDiv>
  );
}

const MapDiv = styled.div`
  .map-frame {
    width: 100%;
    height: 700px;
    border: 0;
  }
`;

export default BhaloMap;
