import React, { Suspense, lazy } from "react";
// import ProfileMenu from "../../components/ProfileMenu/ProfileMenu";
import ProfileView from "./ProfileView";
const ProfileWrapper = lazy(() => import("@components/ProfileWrapper/profileWrapper"));
// import Routes from "../../routes";
// import { Container } from "@material-ui/core";

const renderLoader = () => <p>Loading</p>;

export default function Hello() {
  return (
    <Suspense fallback={renderLoader()}>
      <ProfileWrapper>
        <ProfileView />
      </ProfileWrapper>
    </Suspense>
  );
}
