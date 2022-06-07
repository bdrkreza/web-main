import React, { useState } from "react";
import styled from "styled-components";
import ReactReadMoreReadLess from "react-read-more-read-less";

export default function OverView(props) {
  const [description, setDescription] = useState(
    props.car.description === "-" ? true : false
    // ? false
    // : setDescription(props.car.description)
  );
  return (
    <div>
      {!description && (
        <OverviewDiv>
          <Title>
            Description
          </Title>
        <div className="texts">
          <ReactReadMoreReadLess
            charLimit={300}
            readMoreText={"Read more ▼"}
            readLessText={"Read less ▲"}
            readMoreClassName="read-more-less--more"
            readLessClassName="read-more-less--less"
            style={{ marginTop: "15px"}}
          >
            {props.car.description}
          </ReactReadMoreReadLess>
        </div>
        </OverviewDiv>
      )}
    </div>
  );
}

const Title = styled.p`
  font-size: 20px;
  color: #000000;
  font-weight: 700;
  font-family: "Open Sans";
  margin-top: 50px;
  padding-bottom: 10px;
  margin-left: 20px;
  @media(max-width: 768px){
    margin-top: 15px;
  }
`;
const OverviewDiv = styled.div`
  padding-right: 10px;
  font-size: 14px;
  line-height: 24px;
  color: #646464;
  margin-right: 55px;
  font-weight: 400;
  font-family: "Open Sans";
  text-align: justify;
  .texts{
    margin-left: 20px;
  }
  .read-more-less--less,
  .read-more-less--more {
    color: red;
  }

  @media(max-width: 768px){
    margin-right: 0px;
  }
`;
