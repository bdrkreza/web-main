import { Container } from "@material-ui/core";
import SectionTitle from "@components/SectionTitle";
import React from "react";
import styled from "styled-components";
import WhatsNewBg from "@assets/bikepage/what-new-bg.png";
import Multipurpose from "@assets/bikepage/multipurpose.svg";
import Safety from "@assets/bikepage/safety.svg";
import SavePlanet from "@assets/bikepage/savePlanet.svg";
import License from "@assets/bikepage/license.svg";

const content = [
  {
    title: "Multipurpose Family Ride",
    icon: Multipurpose,
  },
  {
    title: "Safety and Comfort",
    icon: Safety,
  },
  {
    title: "Saving the Planet",
    icon: SavePlanet,
  },
  {
    title: "No License and Registration",
    icon: License,
  },
];

export default function WhatsNewBike() {
  return (
    <Container>
      <WhatsNewContainer>
        <SectionTitle title1="What's" title2="New" />
        <Div>
          <BlueBG>
            {content.map((item, i) => (
              <Card key={i}>
                <img src={item.icon} alt={item.title} />
                <P>{item.title}</P>
              </Card>
            ))}
          </BlueBG>
        </Div>
      </WhatsNewContainer>
    </Container>
  );
}

const WhatsNewContainer = styled.div`
  margin-top: 50px;
  @media (max-width: 767px) {
    margin-top: 15px;
  }
`;

const Div = styled.div`
  background-image: url(${WhatsNewBg});
  background-position: left;
  position: relative;
  display: flex;
  flex-direction: row;
  height: 450px;
  @media (max-width: 1024px) {
    height: 350px;
    background-size: contain;
  }
  @media (max-width: 900px) {
    background-position: 355px 100%;
  }
`;
const BlueBG = styled.div`
  width: 560px;
  height: 100%;
  background-image: linear-gradient(49deg, #b8cbd9 0%, rgba(70, 127, 167, 0.98) 100%);
  position: absolute;
  top: 0px;
  right: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 1024px) {
    width: 460px;
  }
  @media (max-width: 850px) {
    width: 55%;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;
const Card = styled.div`
  width: 355px;
  height: 64px;
  border-radius: 5px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  >img{
    position: absolute;
    left: 0px;
    padding: 0px 20px;
  }
  }
  @media(max-width: 375px)
  {
    width:320px;
  }
  @media(max-width: 320px)
  {
    width:280px;
  }
`;
const P = styled.p`
  position: absolute;
  right: 0px;
  width: 70%;
  padding: 0px 20px;
  &:before {
    content: "";
    position: absolute;
    top: -10px;
    left: 0px;
    height: 40px;
    width: 1px;
    background: #777;
  }
`;
