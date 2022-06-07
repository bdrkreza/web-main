import React from 'react';
import styled from 'styled-components';
import { Container } from '@material-ui/core';
import ContactPic from '../../assets/contact-us/cover.jpg';

function ContactUsCover(props) {
    const title = {
        heading: (props.langVariables !== null) ? ((props.langVariables['cu_con_us']) ? props.langVariables['cu_con_us'].lang_content : "CONTACT US") : "CONTACT US",
        paragraph: (props.langVariables !== null) ? ((props.langVariables['cu_con_us_desc']) ? props.langVariables['cu_con_us_desc'].lang_content : "We are always happy to assist you") : "We are always happy to assist you"
    }

    return (
        <ContactDiv>
            <Container maxWidth="lg">
                <InnerContact>
                    <h1>{title.heading}</h1>
                    <p>{title.paragraph}</p>
                </InnerContact>
            </Container>
        </ContactDiv>
    )
}

const ContactDiv = styled.div`
      font-family: 'Open Sans', sans-serif;
      margin-top: 158px;
      display: flex;
      max-width: 972px;
      margin: 0 auto;
      flex-direction: row;
    //   background-image: url(${ContactPic});
    //   background-size: cover;
      height: 320px;
      .text{
         
      }
      @media (max-width: 768px){
          height: 244px;
          margin-top: 53px;
      }
`;
const InnerContact = styled.div`
    margin-top: 220px;
    color: #ffffff;
    h1{
        margin: 0px;
        padding-bottom: 10px;
        font-size: 32px;
        line-height: 32px;
        color: black;
        font-weight: 700;
    }
    p{
        font-size: 16px;
        line-height: 32px;
        color: black;
        font-weight: 600;
    }
    @media(max-width: 768px){
        margin-top: 110px;
    }
`
export default ContactUsCover
