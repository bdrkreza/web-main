import React from 'react';
import style from 'styled-components';

function DisplayCarCard(props) {
    console.log(props.data)
  return (
    <DisplayDiv>
        {/* <ImageDiv>
            <img src={props.data.images.image_url}/>
        </ImageDiv> */}
        
        <div>{props.data.car_manufacturer.maker_name}</div>
        
        <div>{props.data.fixed_price}</div>
        
    </DisplayDiv>
  )
}


const ImageDiv = style.div`
    width: 100%;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
`;

const DisplayDiv = style.div`
     border: 1px solid #E7E9EB;
     width: 23%;
     font-family: 'Open Sans';
     box-shadow: 0px 3px 3.5px rgba(0,0,0,0.16);
     padding: 10px;
     margin-top: 20px;
     display: flex;
     flex-direction: column;
    //  .contents{
    //    padding: 25px;
    //      display: flex;
    //      flex-direction: column;
    //      .box-selection{
    //          margin-bottom: 10px;
    //      }
    //      .select-section{
    //          background-color: #ffffff;
    //      }
    //      .select-model-section{
    //        margin-top: 20px;
    //      }
    //      .model-year{
    //         color: #000000;
    //          margin-top: 15px;
    //         //  amrgin-left: 5px;
    //      }
    //  }
`;

export default DisplayCarCard