import React, { useState, useEffect } from "react";
import style from "styled-components";
import Select from "@mui/material/Select";
// import MenuItem from '@mui/material/MenuItem';
import MenuItem from "@mui/material/MenuItem";
import { styled as muiStyle } from "@mui/material/styles";
import Slider from "@mui/material/Slider";
// import CompareTable from "./CompareTable";
// import CompareTable from "./CompareCarTable"
// import TextField from "@mui/material/TextField";
// import CompareCard from "./DisplayCarCard";
// import { Container } from "@material-ui/core";
// import Dropdown from "../Dropdown/Dropdown";

function CompareBox1(props) {
  return (
    <>
      <CompareDiv>
        <div className="contents">
          <div className="image-box">
            <img src={props.data?.images.image_url} onError={(e) => (e.target.style.display = "none")} alt="car" />
          </div>
          <h4 className="box-selection">{props.title}</h4>
        </div>
      </CompareDiv>
    </>
  );
}

const CompareDiv = style.div`
     font-family: 'Open Sans';
     .contents{
       padding: 3px;
      display: flex;
      flex-direction: column;
      .box-selection{
        color: #f06424;
        font-size: 20px;
        font-weight: 600;
        padding-bottom: 3px;
      }
      .image-box{
          height: 250px;
          img {
            // width: calc(100% + 0px);
            width: 100%;
            height: 248px;
            transition: all 0.25s ease-in-out;
          }
      }
     }

     @media(max-width: 425px){
       .contents{
         .image-box{
           height: 155px;
           img{
             height: 150px;
           }
         }
       }
     }
`;

export default CompareBox1;
