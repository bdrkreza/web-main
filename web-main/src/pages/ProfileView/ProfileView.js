import React, { useState, Suspense, lazy } from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import Profile from "../../assets/images/profile-default.svg";
import Verification from "../../assets/Rectangle 413.svg";
import { api } from "@configs/configs";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
// import Icon from "../../assets/Icon/ic_mode_edit_24px.svg";

const CardComponent = lazy(() => import("./CardComponent"));

const renderLoader = () => <p>Loading</p>;

// eslint-disable-next-line
function ProfileView(props) {
  const [data, setData] = useState({});
  const [profile, setProfile] = useState("");
  // const [cars, setCars] = useState([]);
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    (async () => {
      try {
        const id = localStorage.getItem("user_id");
        const { data } = await api.get(`api/user/profile/?user_id=${id}`);
        setProfile(data.image_url === null ? Profile : data.image_url);
        setData(data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);
  React.useEffect(() => {
    (async () => {
      await api.get("api/cars/type-of-cars/?car_type=Reconditioned").then((res) => {
        if (res.status === 200) {
          // setCars(res.data.results);
          setCount(res.data.count);
        }
      });
    })();
  }, []);

  return (
    <ProfileViewDiv>
      <Suspense fallback={renderLoader()}>
        <Grid container item>
          <ProfileImage>
            <Circle>
              <img src={profile} alt={Profile} />
            </Circle>
          </ProfileImage>
        </Grid>

        <ImageDiv>
          <h2>
            Profile Type: <span> {data.individual_user ? "Individual" : "Business"}</span>
          </h2>
        </ImageDiv>

        <CustomContainer>
          {data.first_name && (
            <CardComponent
              title="Account Name"
              description={`${data.first_name} ${data.last_name}`}
              image={Verification}
              styling="profile-card"
            />
          )}
          {data.tin_number !== null && (
            <CardComponent title="TIN Number" description={data.tin_number} styling="profile-card" />
          )}
          {data.contact_number && (
            <CardComponent title="Contact" description={data.contact_number} styling="profile-card" />
          )}
          {data.bida_number !== null && <CardComponent title="BIN" description="444222555643" styling="profile-card" />}
          {data.address && (
            <CardComponent title="Address" description={data.address} styling="profile-card addressCopy" />
          )}
          {data.nid_number && <CardComponent title="NID" description={data.nid_number} styling="profile-card" />}

          {(data.date_of_birth || data.gender) && (
            <DoubleDiv>
              {data.date_of_birth && (
                <CardComponent title="Date of Birth" description={data.date_of_birth} styling="profile-card" />
              )}
              <hr />
              {data.gender === "M" && <CardComponent title="Gender" description="Male" styling="profile-card" />}
              {data.gender === "F" && <CardComponent title="Gender" description="Female" styling="profile-card" />}
            </DoubleDiv>
          )}
          {data.email && <CardComponent title="Email" description={data.email} styling="profile-card" />}
          {data.post_code && <CardComponent title="Zip Code" description={data.post_code} styling="profile-card" />}
        </CustomContainer>
        <Link to="/" class="back-to-home">
          <KeyboardBackspaceIcon />
          Back to Home
        </Link>
      </Suspense>
    </ProfileViewDiv>
  );
}

const ProfileViewDiv = styled.div`
  position: relative;
  font-family: "Open Sans", sans-serif;
  background-color: #f5f6f8;
  max-width: 950px;
  border-radius: 10px;
  padding: 0 47px;
  width: 73%;
  .back-to-home {
    color: #333;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding-bottom: 30px;
    svg {
      padding-right: 5px;
    }
  }
  @media (max-width: 960px) and (min-width: 774px) {
    width: 100%;
    margin-top: 95px;
    margin-left: -910px;
  }
  @media (max-width: 768px) {
    padding-top: 50px;
    width: 100%;
  }
  @media (max-width: 375px) {
    padding: 0 30px;
  }
`;

const Circle = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -75px;
  margin-top: -73px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 50px;
  border: 5px solid #fff;
  img {
    width: 100%;
    min-height: 140px;
  }

  @media (max-width: 768px) {
    margin-top: -110px;
  }

  @media (max-width: 375px) {
    margin-top: -70px;
  }
`;

const CustomContainer = styled.div`
  padding: 20px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .profile-card {
    width: calc(50% - 31px);
  }
  @media (max-width: 767px) {
    display: block;
    .profile-card {
      width: 100%;
    }
  }
`;
const DoubleDiv = styled.div`
  padding: 20px 40px;
  box-shadow: 0px 3px 3px rgb(0 0 0 / 16%);
  border-radius: 10px;
  margin: 10px 0;
  background: #fff;
  width: calc(50% - 30px);
  box-sizing: border-box;
  .profile-card {
    width: 100%;
    box-shadow: none;
    margin: 0;
    border-radius: 0;
    padding: 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  p {
    font-size: 13px;
    color: #555555;
    padding: 0;
  }
  hr {
    border: 1px solid #e8e8e8;
    margin-top: 14px;
    margin-bottom: 14px;
    padding: 0;
    margin: 6px 0;
  }
  @media (max-width: 767px) {
    width: 100%;
  }

  @media (max-width: 375px) {
    .profile-card {
      margin: 0px;
    }
  }

  @media (max-width: 360px) {
    padding: 20px 25px;
  }

  @media (max-width: 320px) {
    padding: 20px 15px;
    p {
      font-size: 11px;
    }
  }

  @media (max-width: 280px) {
    p {
      font-size: 9px;
    }
  }
`;

const ImageDiv = styled.div`
  padding: 10px 0;
  display: flex;
  align-items: center;
  h2 {
    font-size: 20px;
    color: #777;
    span {
      color: #000;
    }
  }
  img {
    margin-left: 20px;
  }
  @media (max-width: 768px) {
    padding: 0;
  }
  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
    flex-direction: row;
    padding: 10px 0 30px;
  }

  @media (max-width: 540px) {
    padding: 0;
  }

  @media (max-width: 425px) {
    padding: 0px;
  }
`;
const ProfileImage = styled.div`
  min-height: 90px;
  position: relative;
  width: 100%;
`;

export default ProfileView;
