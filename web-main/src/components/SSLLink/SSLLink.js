import React from "react";
import styled from "styled-components";

function ssllink() {
  return (
    <DIV>
      <a target="_blank" href="https://www.sslcommerz.com/" title="SSLCommerz" alt="SSLCommerz" rel="noreferrer">
        <img
          style={{ width: "100%", height: "auto" }}
          src="https://securepay.sslcommerz.com/public/image/SSLCommerz-Pay-With-logo-All-Size-03.png"
          alt="Pay with SSLCommerze"
        />
      </a>
    </DIV>
  );
}

const DIV = styled.div`
  padding-bottom: 58px;
  @media (max-width: 768px) {
    padding-bottom: 50px;
  }

  @media (max-width: 600px) {
    padding-bottom: 20px;
  }
`;

export default ssllink;
