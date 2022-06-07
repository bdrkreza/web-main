import React, { useState } from "react";
import styled from "styled-components";

export default function OverView(props) {
  const [description] = useState(
    props.bike.description === "-" ? true : false
    // ? false
    // : setDescription(props.car.description)
  );
  return (
    <div>
      {!description && (
        <>
          <Title>
            Vehicle <span style={{ color: "#f06424" }}>Overview</span>
          </Title>
          <P>{props.bike.description}</P>
        </>
      )}
    </div>
  );
}

const Title = styled.p`
  font-size: 20px;
  color: #000000;
  font-weight: 700;
  font-family: "Open Sans";
  margin-top: 80px;
  padding-bottom: 30px;
`;
const P = styled.p`
  font-size: 14px;
  line-height: 24px;
  color: #646464;
  font-weight: 400;
  font-family: "Open Sans";
  text-align: justify;
`;
