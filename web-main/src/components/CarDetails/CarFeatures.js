import React from "react";
import styled from "styled-components";
import { List, ListItemIcon, ListItemText, ListItem } from "@material-ui/core";
// import ListStyle from "../../assets/carDetails/listStyle.svg";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

export default function CarFeatures(props) {
  return (
    <Main>
      {props.car.car_feature_list.length > 0 && (
        <>
          <Title>
            Car <span style={{ color: "#f06424" }}>Features</span>
          </Title>
          <Div>
            {props.car.car_feature_list.map((feature,i) => (
              <Item key={i}>
                <Icon>
                  <Check />
                </Icon>
                <ItemText>{feature.feature_name}</ItemText>
              </Item>
            ))}
          </Div>
        </>
      )}
    </Main>
  );
}


const Main = styled.div`
  // padding-top: 40px;
  margin-top: 28px;
  @media(max-width: 1024px){
    margin-top: -15px;
    width: 100%;
  }
`;

const Title = styled.p`
  padding-top: 2px;
  margin-left: 20px;
  font-size: 20px;
  color: #000000;
  font-weight: 700;
  font-family: "Open Sans";
  padding-bottom: 15px;
  @media(max-width: 768px){
    padding-top: 0px;
  }
  @media (max-width: 767px) {
    padding-top: 20px;
    padding-bottom: 10px;
  }
`;
const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-left: 40px;
  padding-top: 5px;
  margin-right: 55px;

  @media(max-width: 768px){
    margin-left: 20px;
    margin-right: 0px;
  }
`;

const Check = styled(CheckCircleIcon)`
  // width: 15px;
  // height: 15px;
  color: #f06424;
`;
const Icon = styled(ListItemIcon)`
  width: 15px;
  height: 15px;
  min-width: 0px;
`;

const ItemText = styled.p`
font-size: 17px;
color: #646464;
font-weight: 400;
font-family: "Open Sans";
margin: 3px 15px;

@media(max-width: 425px){
  font-size: 15px;
}
`;

const Item = styled.div`
  display: flex;
  fle-direction: row;
  margin: 5px 0px;
  width: 25%;
  padding: 10px 0;
  @media (max-width: 425px) {
    width: 50%;
  }
`;
const P = styled.p`
  font-size: 14px;
  line-height: 24px;
  color: #646464;
  font-weight: 600;
  font-family: "Open Sans";
  text-align: justify;
`;
