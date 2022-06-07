import React from "react";
import styled from "styled-components";
import { Container } from "@material-ui/core";
import Search from "@components/SearchBox";
import Avatar from "@components/AdminAvatar";
import CreateAdButton from "@components/CreateAdButton";
import Logo from "@components/SiteLogo";
import LocationIcon from "@components/Location";
import CartBoxIcon from "@components/CartBox";
import Language from "@components/LanguageButton";
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from "react-query";
import HotlineNumber from "@components/HotlineNumber";

// import CarRegisterDiv from "@components/CarRegister";

/**
 * 2022-03-05 Chayapol: Disabled LocationIcon until the feature is done.
 * @param {*} props 
 * @returns 
 */
const queryClient = new QueryClient();
function TopBar(props) {
  return (
    <MainHeader>
      <Container>
        <MenuWrap>
          <Logo />
          <RightPart>
          <QueryClientProvider client={queryClient}>
            <Search {...props} />
          </QueryClientProvider>
            <LocationIcon />
            {/* <CartBoxIcon
              serviceList={props.serviceList}
              removeService={props.removeService}
              totalCount={props.totalCount}
              totalPrice={props.totalPrice}
            /> */}
            <Avatar />
            <Language />
            <CreateAdButton />
            <HotlineNumber/>
          </RightPart>
        </MenuWrap>
      </Container>
    </MainHeader>
  );
}
const RightPart = styled.div`
  display: flex;
  width: 89%;

  & > div:first-child {
    max-width: 100%;
  }
  & > div:not(:last-child) {
    margin-right: 40px;
  }
  & > div:nth-child(3) {
    margin-left: 11px;
  }
  @media (max-width: 1100px) {
    & > div:not(:last-child) {
      margin-right: 36px;
    }
    & > div:first-child {
      max-width: 400px;
    }
  }
`;
const MainHeader = styled.div`

  background: #e8e8e8;
  padding: 15px 0;
  @media (max-width: 1023px) {
    display: none;
  }
`;
const MenuWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default TopBar;
