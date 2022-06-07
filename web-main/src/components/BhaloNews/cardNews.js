import React from "react";
import styled from "styled-components";

function cardNews(props) {
  return (
    <Card>
      <img src={props.image} alt={props.image} />
      <div className="texts">
        <h4>{props.text}</h4>
        <p>{props.description}</p>
        <a href="#">Read More &gt;</a>
      </div>
    </Card>
  );
}

const Card = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  font-family: "Open Sans";
  border-radius: 5px;
  margin-bottom: 40px;
  .texts {
    padding: 15px;
    background-color: #ffffff;
    padding: 12px 12px;
    h4 {
      font-size: 15px;
      line-height: 17px;
      color: #000000;
      font-weight: 700;
      margin: 0px;
    }
    p {
      font-size: 14px;
      line-height: 20px;
      color: #646464;
      font-weight: 400;
    }
    a {
      font-size: 15px;
      line-height: 5px;
      color: #24d1f0;
      font-weight: 600;
      display: flex;
      justify-content: flex-end;
      padding: 7px;
    }
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    flex-basis: 24%;
    border-radius: 5px;
    margin-bottom: 40px;
    width: 31%;
    .texts {
      h4 {
        font-size: 17px;
        line-height: 22px;
        color: #000000;
        font-weight: 700;
      }
      p {
        font-size: 13px;
        line-height: 18px;
        color: #646464;
        font-weight: 400;
      }
      a {
        font-size: 15px;
        padding: 5px;
      }
    }
  }

  @media (max-width: 375px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    margin-bottom: 40px;
    .texts {
      h4 {
        font-size: 15px;
        line-height: 22px;
        color: #000000;
        font-weight: 700;
      }
      p {
        font-size: 10px;
        line-height: 18px;
        color: #646464;
        font-weight: 400;
      }
      a {
        font-size: 12px;
        padding: 5px;
      }
    }
  }
`;

export default cardNews;
