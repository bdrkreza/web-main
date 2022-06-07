import React from 'react';
import styled from 'styled-components';

function ServicesChooseBox(props) {
    return (
        <ServicesBoxDiv className={props.classbox}>
            <img src={props.image} alt={props.image}/>
            <ServicesContent>
                <h3>{props.heading}</h3>
                <p>{props.paragraph}</p>
            </ServicesContent>
        </ServicesBoxDiv>
    )
}

const ServicesBoxDiv = styled.div`
    text-align: center;
    & > img{
        position: absolute;
        top: 0;
        left: 20px;
    }
`;

const ServicesContent = styled.div`
    h3{
        text-transform: uppercase;
        padding-top: 35px;
        font-size: 16px;
        line-height: 43px;
        color: #000000;
        font-weight: 600;
        // padding-bottom: 25px;
        // border-bottom: 2px solid #f06424;
        &:not(:last-child):before {
            position: absolute;
            content: " ";
            // top: inherit;
            bottom: 280px;
            right: 5%;
            width: 90%;
            height: 1px;
            background: red;
          }
    }
    p{
        padding-top: 30px;
        padding-left: 40px;
        font-size: 14px;
        line-height: 24px;
        color: #000000;
        font-weight: 400;
        text-align: center;
    }

    @media (max-width: 768px) {
        padding-top: 35px;
        h3 {
            // padding-top: 10px;  
        }
    }
`;


export default ServicesChooseBox;
