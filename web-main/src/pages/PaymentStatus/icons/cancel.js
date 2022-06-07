import React from "react";
import styled from "styled-components";

export default function success() {
  return (
    <Div>
      <svg xmlns="http://www.w3.org/2000/svg" width="81.893" height="81.893" viewBox="0 0 81.893 81.893">
        <g id="Group_1" data-name="Group 1" transform="translate(-1844 2418)">
          <circle
            id="Ellipse_1"
            data-name="Ellipse 1"
            cx="40.946"
            cy="40.946"
            r="40.946"
            transform="translate(1844 -2418)"
            fill="#f16522"
          />

          <path
            className="animated-svg"
            id="Path_1"
            data-name="Path 1"
            d="M1859.414-2379.151l17.336,17.336,34.084-34.084"
            transform="translate(0.086 1.399)"
            fill="none"
            stroke="#fff"
            strokeWidth="8"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeDasharray="300"
            strokeDashoffset="300"
          />
        </g>
      </svg>
    </Div>
  );
}

const Div = styled.div`
  @keyframes draw {
    from {
      stroke-dashoffset: 300;
    }
    to {
      stroke-dashoffset: 0;
    }
  }
  .animated-svg {
    animation-name: draw;
    animation-duration: 4s;
    animation-iteration-count: 1;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
    animation-delay: 2s;
  }
`;
