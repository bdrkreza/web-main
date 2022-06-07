import Link from "@material-ui/core/Link";
import React from "react";
import styled from "styled-components";

function ArticleCard(props) {
  const preventDefault = (event) => event.preventDefault();
  return (
    <ArticleCardDiv className={props.styling} style={{ minHeight: "600px" }}>
      <Link href={props.link2} target="_blank">
        <img src={props.ArticleImage} alt={props.ArticleImage} />
      </Link>

      <a
        href={props.link}
        variant="body2"
        target="_blank"
        className="taglink"
        rel="noreferrer"
      >
        {props.tagButton}
      </a>
      <ArticleDes>
        <h2>{props.ArticleTitle}</h2>
        <span>{props.subTitle}</span>
        <a
          href={props.link2}
          variant="body2"
          target="_blank"
          rel="noreferrer"
          className="readbutton"
        >
          {props.button2}
          {props.buttonIcon}
        </a>
      </ArticleDes>
    </ArticleCardDiv>
  );
}
const ArticleCardDiv = styled.div`
  max-width: 400px;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0px 3px 3.5px rgba(0, 0, 0, 0.16);
  position: relative;
  flex: 1 1 33%;
  margin: 0 5px;

  @media (max-width: 767px) {
    flex: 1 1 100%;
    margin: 5px;
  }
  img {
    width: 100%;
    min-height: 224px;
    @media (max-width: 992px) {
      min-height: 160px;
    }
    @media (max-width: 767px) {
      min-height: 220px;
    }
  }
  & > a.taglink {
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 12px;
    line-height: 16px;
    color: #ffffff;
    font-weight: 400;
    text-align: center;
    padding: 5px 15px;
    border-radius: 20px;
    background-color: #24d1f0;
    &:hover {
      text-decoration: none;
      background-color: #f06425;
    }
  }
`;
const ArticleDes = styled.div`
  padding: 22px 22px 44px;
  h2 {
    font-size: 16px;
    font-weight: 700;
    min-height: 51px;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-height: 24px;
  }
  p {
    padding: 10px 0;
    font-size: 14px;
    line-height: 24px;
    font-weight: 400;
    @media (max-width: 992px) {
      font-size: 13px;
    }
  }
  .readbutton {
    width: 86px;
    font-size: 14px;
    line-height: 18px;
    color: #24d1f0;
    font-weight: 700;
    border-bottom: 2px solid #24d1f0;
    position: absolute;
    bottom: 20px;
    right: 20px;
    text-decoration: none;
    &:before {
      position: absolute;
      content: " ";
      top: 4px;
      right: -6px;
      width: 15px;
      height: 15px;
      background: url("./assets/chevron-right.svg") no-repeat;
    }
    &:hover {
      text-decoration: none;
      color: #f06425;
      border-bottom: 2px solid #f06425;
      &:before {
        background: url("./assets/chevron-right-hover.svg") no-repeat;
      }
    }
  }
`;
export default ArticleCard;
