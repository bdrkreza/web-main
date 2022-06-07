import ProfileMenu from "../ProfileMenu/ProfileMenu";
import ProfileView from "../../pages/ProfileView/ProfileView";
import styled from "styled-components";
import ProfileBackground from "../../assets/carreview/profile-bg.png";
import React from "react";
import { Container } from "@material-ui/core";

export default function ProfileWrapper({ children }) {
  return (
    <Background
      style={{
        background: `url(${ProfileBackground}`,
      }}
    >
      <Container>
        <Main className="main">
          <ProfileMenu />
          {children}
        </Main>
      </Container>
    </Background>
  );
}
const Background = styled.div`
  padding-bottom: 70px;
  @media(max-width: 768px){
    padding-bottom: 60px;
  }
  @media(max-width: 600px){
    padding-bottom: 50px;
  }
  @media(max-width: 425px){
    padding-bottom: 45px;
  }
`;
const Main = styled.div`
  &.main {
    display: flex;
    flex-direction: row;
    gap: 30px;
    padding-top: 290px;
    position: relative;
    justify-content: space-between;
    @media (max-width: 1024px) {
      padding-top: 270px;
    }
    @media (max-width: 768px) {
      padding-top: 100px;
      flex-direction: column;
    }
  }
`;
