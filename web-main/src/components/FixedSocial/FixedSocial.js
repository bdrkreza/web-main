import React from "react";
import styled from "styled-components";
import Facebook from "../../assets/images/facebook.svg";
import Youtube from "../../assets/images/youtube.svg";
import Linkedin from "../../assets/images/linkedin.svg";
// import Instagram from "../../assets/images/instagram.svg";
import Instagram from "../../assets/images/insta.png";
import Email from "../../assets/images/email.svg";
import Background from "../../assets/images/insta-background.jpg";

function FixedSocial(props) {
  return (
    <FixedIcon>
      <ul>
        <li>
          <a
            href="https://facebook.com/BhalogariOfficial/"
            target="_blank"
            rel="noreferrer"
            className="facebook"
          >
            <img src={Facebook} alt={Facebook} className="icons" />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCyFChwKvRlkr5gkoaI3aPDw"
            target="_blank"
            rel="noreferrer"
            className="youtube"
          >
            <img src={Youtube} alt={Youtube} className="icons" />
          </a>
        </li>
        <li>
          <a
            href="https://bd.linkedin.com/company/bhalogari"
            target="_blank"
            rel="noreferrer"
            className="linkedin"
          >
            <img src={Linkedin} alt={Linkedin} className="icons" />
          </a>
        </li>
        <li>
          <a
            href="mailto:info@bhalogari.com"
            className="email"
          >
            <img src={Email} alt={Email} className="icons" style={{}} />
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/bhalogari.bd?utm_medium=copy_link"
            target="_blank"
            rel="noreferrer"
            className="instagram"
          >
            <img src={Instagram} alt={Instagram} className="icons" style={{}} />
          </a>
        </li>
      </ul>
    </FixedIcon>
  );
}
const FixedIcon = styled.div`
  position: fixed;
  top: 50%;
  left: -40px;
  margin-top: -104px;
  border-radius: 0 2px 2px 0;
  z-index: 11;
  li {
    padding: 0;
  }
  a {
    height: 50px;
    width: 50px;
    display: block;
    line-height: 50px;
    img {
      width: 50px;
    }
    &:hover {
      img {
        margin-left: 5px;
      }
      margin-left: 40px;
      width: 60px;
      transition: all ease-in-out 0.2s;
    }
  }
  .facebook {
    background: #395694;
  }
  .youtube {
    background: #ff0000;
  }
  .linkedin {
    background: #0270ad;
  }
  .email {
    background: #9a33aa;
  }
  .instagram{
    display: block;
    background: url(${Background});
    background-size: cover;
    img{
      padding: 10px;
    }
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

export default FixedSocial;
