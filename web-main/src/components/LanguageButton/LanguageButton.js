import { api } from "@configs/configs";
import React from "react";
import styled from "styled-components";

function LanguageButton() {
  function fetchData(lang, page) {
    page = page.slice(1);
    if (page == "") {
      page = "home";
    } else {
      page = page.replace("-", "_");
    }

    api
      .get(
        "api/localization/lang-based-text/?language_code=" +
          lang +
          "&page_id=" +
          page
      )
      .then((res) => {
        sessionStorage.setItem(
          "langVariables",
          JSON.stringify(res.data.result)
        );
        sessionStorage.setItem("lang", lang);
        sessionStorage.setItem("langChange", true);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <LanguageDiv>
      <a
        className="english"
        onClick={() => fetchData("en", window.location.pathname)}
      >
        EN
      </a>
      <hr className="line" />
      <a
        className="bangla"
        onClick={() => fetchData("bn", window.location.pathname)}
      >
        বাংলা
      </a>
    </LanguageDiv>
  );
}

const LanguageDiv = styled.div`
  position: relative;
  cursor: pointer;
  font-family: "Open sans", sans-serif;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  color: #f06424;
  text-align: center;
  border-radius: 22px;
  background: #fff;
  padding: 0px 25px;
  line-height: 44px;
  height: 44px;
  font-family: "Open sans", sans-serif;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:after {
    @media (min-width: 1200px) {
      position: absolute;
      content: "";
      left: -20px;
      top: 3px;
      width: 1px;
      height: 38px;
      background: #c2c2c2;
    }
  }
  a {
    text-decoration: none;
    padding: 10px;
    color: grey;
    &:hover {
      color: #f06425;
    }
  }
  .line {
    height: 25px;
  }
`;

export default LanguageButton;
