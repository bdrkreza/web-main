import React from "react";
import styled from "styled-components";

function HotlineNumber() {
  return (
    <Hotline>
      <h4>Call us at</h4>
      <p>09643207005</p>
    </Hotline>
  );
}

const Styled = {};

const Hotline = styled.div`
color: #f06425;
font-family:'Open-sans';
position:relative;
h4{
    font-size:14px;
}
p{
    font-size:20px;
}

&:before {
    position: absolute;
    content: "";
    left: -24px;
    top: 3px;
    width: 1px;
    height: 38px;
    background: #c2c2c2;
  }

`

export default HotlineNumber