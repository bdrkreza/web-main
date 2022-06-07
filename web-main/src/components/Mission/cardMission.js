import React from "react";
import styled from "styled-components";

function cardMission(props) {
  return (
    <CardProfile>
      <img src={props.image} alt={props.image} />
      <div className="texts">
        <p>{props.description}</p>
        <p>{props.otherLine}</p>
      </div>
    </CardProfile>
  );
}

const CardProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 5px;
  ${"" /* width: 190px; */}
  ${"" /* height: 184px; */}
  border-radius: 3px;
  filter: drop-shadow(0px 3px 3.5px rgba(0, 0, 0, 0.16));
  background-color: #f8f8f8;
  font-family: "Open Sans";
  text-align: center;
  flex: 1 1 14%;
  margin: 0 10px;
  @media (max-width: 992px) {
    flex: 1 1 12%;
    margin: 0 5px;
  }
  @media (max-width: 600px) {
    flex: 1 1 31%;
    margin-bottom: 10px;
  }
  @media (max-width: 380px) {
    flex: 1 1 45%;
    margin-bottom: 10px;
  }
  img {
    padding: 10px;
  }
  .texts {
    padding: 5px 10px 20px 10px;
    p {
      margin: 0px;
      font-size: 14px;
      line-height: 18px;
      color: #646464;
      font-weight: 600;
    }
  }
  @media (max-width: 768px) {
    .texts {
      text-align: center;
    }
  }
  @media (max-width: 425px) { 
    img {
      padding: 20px;
    }
    .texts {
      text-align: center;
      padding-bottom: 20px;
    }
  }
`;

export default cardMission;
