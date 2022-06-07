import React, { useEffect, useState } from "react";

import AddListingMobile from "@components/AddListing/AddListingMobile";
import DrawerMenu from "@components/DrawerMenu";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MobileNavSticky = () => {
  const [state, setState] = useState({
    mobileView: false,
  });
  const { mobileView } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1023.95
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const DesktopNav = () => {
    return <div></div>;
  };
  const MobileNav = () => {
    return (
      // <StickyDiv style={{backgroundImage: `url(${NavBg})`}}>
      <StickyDiv>
        <div className="home">
          <Link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="28.503" height="23.185" viewBox="0 0 28.503 23.185">
              <path
                id="ic_home_24px"
                d="M12.359,25.012V17.243h5.179v7.769h6.474V14.654H27.9L14.949,3,2,14.654H5.885V25.012Z"
                transform="translate(-0.697 -2.327)"
                fill="none"
                stroke="#000"
                strokeWidth="1"
              />
            </svg>
          </Link>
        </div>

        <div className="video-paly">
          <a href="https://www.youtube.com/channel/UCyFChwKvRlkr5gkoaI3aPDw" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="26.897" height="26.897" viewBox="0 0 26.897 26.897">
              <path
                id="ic_play_circle_filled_24px"
                d="M14.949,2A12.949,12.949,0,1,0,27.9,14.949,12.953,12.953,0,0,0,14.949,2Zm-2.59,18.775V9.122l7.769,5.827Z"
                transform="translate(-1.5 -1.5)"
                fill="none"
                stroke="#000"
                strokeWidth="1"
              />
            </svg>
          </a>
        </div>
        <AddListingMobile />
        <div className="chat-icon">
          <a href="https://articles.bhalogari.com/" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="21.125" height="24.1" viewBox="0 0 21.125 24.1">
              <g id="Group_2932" data-name="Group 2932" transform="translate(-5586.998 -3117.077)">
                <g id="Group_2931" data-name="Group 2931">
                  <g id="Group_2929" data-name="Group 2929">
                    <g id="Group_2928" data-name="Group 2928">
                      <path
                        id="Path_1500"
                        data-name="Path 1500"
                        d="M-811.312,12.268c-.008.108-.019.195-.019.281q0,7.125,0,14.25a1.61,1.61,0,0,1-1.8,1.816c-2.753,0-5.506-.013-8.259.008A3.032,3.032,0,0,1-823.8,27.56c-1.213-1.335-2.492-2.61-3.742-3.912q-1.685-1.757-3.364-3.52a2.706,2.706,0,0,1-.789-1.962c.02-1.845.007-3.691.007-5.536v-.345l-.03-.631V5.226c20.527,0,20.392-.062,20.411,0Z"
                        transform="translate(6419.07 3112.205)"
                        fill="none"
                        stroke="#000"
                        strokeMiterlimit="10"
                        strokeWidth="0.7"
                      />
                      <path
                        id="Path_1502"
                        data-name="Path 1502"
                        d="M-737.073,21.76v6.432"
                        transform="translate(6344.846 3095.661)"
                        fill="none"
                        stroke="#000"
                        strokeMiterlimit="10"
                        strokeWidth="0.7"
                      />
                      <path
                        id="Path_1503"
                        data-name="Path 1503"
                        d="M-816.6,102.535c.01-.127.018-.185.017-.242q-.005-2-.013-3.992a.645.645,0,0,0-.74-.739c-.817,0-1.634,0-2.451,0h-1.588Z"
                        transform="translate(6410.952 3036.219)"
                        fill="none"
                        stroke="#000"
                        strokeMiterlimit="10"
                        strokeWidth="0.7"
                      />
                      <line
                        id="Line_289"
                        data-name="Line 289"
                        x2="12.907"
                        transform="translate(5590.782 3126.5)"
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="0.7"
                      />
                      <line
                        id="Line_294"
                        data-name="Line 294"
                        x2="12.907"
                        transform="translate(5590.782 3123.5)"
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="0.7"
                      />
                      <line
                        id="Line_295"
                        data-name="Line 295"
                        x2="12.907"
                        transform="translate(5590.782 3120.5)"
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="0.7"
                      />
                      <g id="Group_2927" data-name="Group 2927" transform="translate(5590.705 3130)">
                        <line
                          id="Line_290"
                          data-name="Line 290"
                          x2="7.128"
                          fill="none"
                          stroke="#000"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="0.7"
                        />
                        <line
                          id="Line_291"
                          data-name="Line 291"
                          x2="4.166"
                          transform="translate(8.819)"
                          fill="none"
                          stroke="#000"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="0.7"
                        />
                      </g>
                      <line
                        id="Line_292"
                        data-name="Line 292"
                        x2="6.409"
                        transform="translate(5597.28 3132.5)"
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="0.7"
                      />
                      <line
                        id="Line_293"
                        data-name="Line 293"
                        x2="6.409"
                        transform="translate(5597.28 3135.5)"
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="0.7"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </a>
        </div>
        <DrawerMenu />
      </StickyDiv>
    );
  };
  return mobileView ? MobileNav() : DesktopNav();
};
const StickyDiv = styled.div`
  position: fixed;
  bottom: -2px;
  left: 0;
  width: 100%;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 999;
  border-radius: 20px 20px 0 0;
  background: #ececec;
  box-shadow: 0 -2px 5px rgb(0 0 0 / 10%);

  svg {
    width: 26px;
    height: auto;
  }
  .chat-icon {
    svg {
      transform: rotate(180deg);
    }
  }
`;

export default MobileNavSticky;
