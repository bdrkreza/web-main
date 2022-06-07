import React from 'react'
import styled from 'styled-components';

function BikeName(props) {
    return (
        <NameDiv>
            <h1>
                {props.bike.bike_manufacturer.maker_name}&nbsp;
                {props.bike.model_name.model_name}&nbsp;{props.bike.grade}&nbsp;
                {props.bike.bike_year}
            </h1>
        </NameDiv>
    )
}

const NameDiv = styled.div`
    margin-top: 195px;
    margin-bottom: 10px;
    font-family: "Open Sans";
    width: 100%;
      h1{
        font-size: 40px;
        line-height: 50px;
        color: #000000;
        font-weight: 700;
      }

      @media(max-width: 768px){
          margin-top: 130px;
          h1{
            font-size: 30px;
          }
      }

      @media(max-width: 708px){
        h1{
            font-size: 30px;
          }
      }

      @media(max-width: 578px){
        h1{
            font-size: 24px;
            line-height: 35px;
          }
      }
      @media(max-width: 375px){
        h1{
          font-size: 17px;
        }
      }
`;

export default BikeName;
