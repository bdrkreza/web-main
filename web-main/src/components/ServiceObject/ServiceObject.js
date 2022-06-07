import React from "react";
import styled from "styled-components";

function ServiceObject(props) {
  return (
    <ServiceDiv>
      <Content>
        <img src={props.pic} alt={props.pic} />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </Content>
    </ServiceDiv>
  );
}
const ServiceDiv = styled.div``;
const Content = styled.div`
  margin-bottom: 10px;
  position: relative;
  border-radius: 5px;
  background-color: #ffffff;
  border: 1px solid #e6e6e6;
  min-height: 204px;
  padding: 20px 15px 5px 15px;
  img {
    width: 34px;
    height: 34px;
  }
  h3 {
    font-size: 20px;
    line-height: 24px;
    color: #151515;
    font-weight: 600;
    margin-top: 12px;
    margin-bottom: 12px;
  }
  p {
    font-size: 15px;
    line-height: 24px;
    color: #8c8c8c;
    font-weight: 400;
  }
`;

export default ServiceObject;
