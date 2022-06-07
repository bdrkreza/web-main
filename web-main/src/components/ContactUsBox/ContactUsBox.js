import React from "react";
import styled from "styled-components";
import Iconbox from "../../components/IconBox/IconBox";

function ContactUsBox(props) {
  const content = [
    {
      id: 1,
      icon: "./assets/Map.svg",
      heading:
        props.langVariables !== null
          ? props.langVariables["cu_visit_us"]
            ? props.langVariables["cu_visit_us"].lang_content
            : "Visit Us"
          : "Visit Us",
      info:
        props.langVariables !== null
          ? props.langVariables["cu_visit_us_desc"]
            ? props.langVariables["cu_visit_us_desc"].lang_content
            : "BHALOGARI Office, Civil house, B- 111 Mosque Rd, Dhaka 1206"
          : "BHALOGARI Office, Civil house, B- 111 Mosque Rd, Dhaka 1206",
    },
    {
      id: 2,
      icon: "./assets/Phone.svg",
      heading:
        props.langVariables !== null
          ? props.langVariables["cu_con_us"]
            ? props.langVariables["cu_con_us"].lang_content
            : "Contact Us"
          : "Contact Us",
      info:
        props.langVariables !== null
          ? props.langVariables["cu_contact_us_desc"]
            ? props.langVariables["cu_contact_us_desc"].lang_content
            : "Office: 09643207005  Email: info@bhalogari.com"
          : "Office: 09643207005  Email: info@bhalogari.com",
    },
    {
      id: 3,
      icon: "./assets/clock.svg",
      heading:
        props.langVariables !== null
          ? props.langVariables["cu_open_hr"]
            ? props.langVariables["cu_open_hr"].lang_content
            : "Opening Hour"
          : "Opening Hour",
      info:
        props.langVariables !== null
          ? props.langVariables["cu_open_hr_desc"]
            ? props.langVariables["cu_open_hr_desc"].lang_content
            : "Saturday to Thursday: 9am to 6pm Excluding Public Holidays"
          : "Saturday to Thursday: 9am to 6pm Excluding Public Holidays",
    },
  ];

  return (
    <ContactUsDiv>
      <ContactDiv>
        {content.map((item, index) => (
          <Iconbox
            key={index}
            classbox="icon-box"
            BoxIcon={item.icon}
            BoxTitle={item.heading}
            BoxDescription={item.info}
          />
        ))}
      </ContactDiv>
    </ContactUsDiv>
  );
}

const ContactUsDiv = styled.div`
  padding-top: 10px;
  padding-bottom: 35px;
  @media (max-width: 768px) {
    margin-top: -40px;
    padding: 0;
  }
  @media (max-width: 425px) {
    padding-top: 0px;
  }
`;

const ContactDiv = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  max-width: 972px;
  margin: 0 auto;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.16);
  border-radius: 6px;
  background-color: #fcf8ee;
  & .icon-box {
    position: relative;
    max-width: 33.33%;
    margin-top: 20px;
    padding: 0 48px 20px;
    > div {
      > h3 {
        padding-bottom: 23px;
      }
      > p {
        color: #707070;
        padding-bottom: 44px;
      }
    }
    &:not(:last-child):before {
      position: absolute;
      content: " ";
      top: 15%;
      right: 0;
      width: 1px;
      height: 70%;
      background: #cecece;
    }
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;

    .icon-box {
      max-width: 33.33%;
      padding: 0 10px 20px;
      > div {
        > h3 {
          font-size: 15px;
          padding-bottom: 5px;
        }
        > p {
          font-size: 11px;
          padding-bottom: 20px;
        }
      }
    }
  }

  @media (max-width: 425px) {
    .icon-box {
      max-width: 290px;
      margin: 10px auto 0;
      > div {
        > p {
          padding-bottom: 20px;
        }
      }
      &:not(:last-child):before {
        position: absolute;
        content: " ";
        top: inherit;
        bottom: 0;
        right: 5%;
        width: 90%;
        height: 1px;
        background: #cecece;
      }
    }
  }
`;

export default ContactUsBox;
