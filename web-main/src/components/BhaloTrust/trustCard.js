import React from "react";
import styled from "styled-components";

function trustCard(props) {
  return (
    <Card>
      <h2>{props.quantity}</h2>

      <div className="texts">
        <p>{props.text1}</p>
        <p>{props.text2}</p>
      </div>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  font-family: "Open Sans";
  box-sizing: border-box;
  border-radius: 5px;
  padding: 35px 0px;
  flex: 1 1 25%;
  max-width: 24%;
  @media (min-width:601px) and (max-width: 992px) {
    flex: 1 1 49%;
    max-width: 47%;
    margin: 10px 0;
  }
  @media (max-width: 600px) {
    ${'' /* flex: 1 1 25%; */}
    max-width: inherit; 
  }
  h2 {
    font-size: 46px;
    line-height: 20px;
    color: #f06424;
    font-weight: 700;
    text-align: center;
    margin: 0;
    padding-right: 20px;
    @media (max-width: 1100px) {
      font-size: 38px;
      padding-right: 10px;
    }
  }
  .texts {
    display: flex;
    flex-direction: column;
    text-align: left;

    p {
      font-size: 18px;
      line-height: 20px;
      color: #555555;
      font-weight: 400;
      margin: 0;
    }
  }

  @media (max-width: 768px) {
    h2 {
      line-height: 20px;
      color: #f06424;
      font-weight: 700;
    }
  }

  @media (max-width: 600px) {
    h2 {
      padding: 0px;
      text-align: center;
      margin: 0px auto;
      font-size: 25px;
    }
    .texts {
      text-align: left;
      margin: 0px auto;
      padding-top: 10px;
      p {
        font-size: 15px;
      }
    }
  }
  @media (max-width: 380px) {
    h2 {
      font-size: 25px;
    }
    .texts {
      p {
        font-size: 14px;
      }
    }
  }
`;

export default trustCard;
