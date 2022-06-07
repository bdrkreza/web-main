import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";


const ButtonWithIcon = (props) => {
  const history = useHistory();
  return (
    <IconButton className={props.btnClass}>
      {props.icon && <b><img src={props.icon} alt="insurance & shopping icons"></img></b>}
      <span>{props.text}</span>
    </IconButton>
  );
};
const IconButton = styled.div`
  border: 1px solid #f06424;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 11px 9px;
  border-radius: 3px;
  min-width: 132px;
  max-width: 150px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0px 3px 3.5px rgba(0, 0, 0, 0.16);
  svg {
    fill: #f06424;
  }
  :hover {
    background: #f06424;
    cursor: pointer;
    span {
      color: #fff;
    }
    svg {
      fill: #fff;
    }
    b {
      &:before {
        background: #fff;
      }
    }
  }
  b {
    position: relative;
    min-width: 35px;
    text-align: left;
    &:before {
      position: absolute;
      content: "";
      top: 2px;
      right: 9px;
      width: 1px;
      height: 14px;
      background: #f06424;
    }
  }
  span {
    font-size: 12px;
    line-height: 16px;
    color: #f06424;
    font-weight: 400;
    text-transform: uppercase;
    position: relative;
  }
`;
export default ButtonWithIcon;
