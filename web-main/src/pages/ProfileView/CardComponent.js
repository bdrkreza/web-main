import React from "react";
import styled from "styled-components";

function CardComponent(props) {
  return (
    <CardProfile className={props.styling}>
      <Header>
        <h2>{props.title}</h2>
        <img src={props.image} alt={props.image} />
      </Header>
      <p>{props.description}</p>
    </CardProfile>
  );
}
const CardProfile = styled.div`
  border-radius: 10px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.16);
  margin: 10px 0;
  padding: 20px 40px;
  border-radius: 10px;
  box-sizing: border-box;
  background: #fff;
  h2 {
    font-family: "Open Sans", sans-serif;
    font-size: 15px;
    padding: 0;
    margin: 0;
  }
  p {
    font-family: "Open Sans", sans-serif;
    font-size: 15px;
    font-weight: 600;
    padding: 14px 0 0 0;
    margin: 0;
    color: #555555;
    word-wrap: break-word;
  }
  }
  &.addressCopy {
    p {
      font-size: 12px;
    }
  }

  @media(max-width: 1024px){
    p{
      font-size: 13px;
    }
  }

  @media(max-width: 360px){
    padding: 20px 25px;
  }

  @media(max-width: 320px){
    padding: 20px 15px;
    h2{
      font-size: 12px;
    }
    p{
      font-size: 11px;
    }
  }

  @media(max-width: 280px){
    p{
      font-size: 9px;
    }
  }
`;

const Header = styled.section`
  display: flex;
  flex-wrap: wrap;
  img {
    margin-left: 15px;
    @media (max-width: 375px) {
      display: none;
    }
  }
`;

export default CardComponent;
