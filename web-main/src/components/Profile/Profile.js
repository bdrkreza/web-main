import React from "react";
import ProfileCard from "./ProfileCard";
import { Container, makeStyles } from "@material-ui/core";
import ProfileBackground from "../../assets/carreview/profile-bg.png";
import ProfileWrapper from "@components/ProfileWrapper/profileWrapper";

const useStyles = makeStyles((theme) => ({
  profileOutContainer: {
    backgroundImage: `url(${ProfileBackground})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    paddingBottom: "100px",
  },

  profileInnerContainer: {
    maxWidth: "760px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Profile = () => {
  const classes = useStyles();

  return (
    <ProfileWrapper>
      <ProfileCard />
    </ProfileWrapper>
  );
};

export default Profile;
