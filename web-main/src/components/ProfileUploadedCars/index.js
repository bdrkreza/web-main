import { Container } from "@material-ui/core";
import ProfileWrapper from "@components/ProfileWrapper/profileWrapper";
import React from "react";
import ProfileUploadedCars from "./ProfileUploadedCars";

export default function UploadedCars() {
  return (
    <ProfileWrapper>
      <ProfileUploadedCars />
    </ProfileWrapper>
  );
}
