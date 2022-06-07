import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HOME } from "@routes/paths";
import MainLogo from "@assets/bhalogari.png";
// bhalogariLogo.png
// bhalogari.png
// bhalogari.jpg

function SiteLogo(props) {
  return (
    <div className={props.classLogo}>
      <Link to={HOME}>
        <Logo src={MainLogo} alt="Bhalogari logo" />
      </Link>
    </div>
  );
}
const Logo = styled.img`
  width: 88px;
  height: auto;
  @media (max-width: 1023px) {
    width: 46px;
  }
`;
export default SiteLogo;
