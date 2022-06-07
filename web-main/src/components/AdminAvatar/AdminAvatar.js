import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import logInIcon from "../../assets/menu/profile.svg";
import logOutIcon from "../../assets/menu/logout.svg";

function AdminAvatar(props) {
  // TODO deviceType is a boolean? What is the meaning of each value?
  // Suspect deviceType
  // - false is Desktop
  // - true is Mobile
  const { deviceType, handleMenuClick } = props;
  const history = useHistory();
  // const location = useLocation();
  const [show, setShow] = React.useState(false);
  const [loggedIn] = React.useState(
    localStorage.getItem("user_id") === null ? true : false
  );
  const handleDropdown = () => {
    if (localStorage.getItem("user_id") !== null) {
      setShow(!show);
      // history.replace({
      //   ...history.location,
      //   state: {
      //     ...history.location.state,
      //   },
      // });

      // history.replace({pathname: {this.pathname}, state: })
    }
  };

  const handleClick = () => {
    if (localStorage.getItem("user_id") === null) {
      handleMenuClick && handleMenuClick();
      history.push({
        pathname: "/login",
        state: { from: "login" },
      });
    }
  };

  // const mouseLeave = () => {
  //   if (localStorage.getItem("user_id") !== null) {
  //     setShow(false);
  //     // history.replace({
  //     //   ...history.location,
  //     //   state: {
  //     //     ...history.location.state,
  //     //   },
  //     // });
  //   }
  // };

  const handleProfile = () => {
    handleMenuClick && handleMenuClick();
    history.push("/profile-view");
    setShow(false);
  };

  const handleLogout = () => {
    handleMenuClick && handleMenuClick();
    setShow(false);
    localStorage.clear();
    history.push("/");
  };

  return (
    <>
      {deviceType && deviceType && !loggedIn && (
        <DropdownMenu>
          <div onClick={handleProfile}>
            <img src={logInIcon} alt="profile icon" />
            <span>Profile</span>
          </div>
          <div onClick={handleLogout}>
            <img src={logOutIcon} alt="Logout icon" />
            <span>Log Out</span>
          </div>
        </DropdownMenu>
      )}
      {deviceType && deviceType && loggedIn && (
        <LoginItem onClick={handleClick}>
          <img src={logInIcon} alt="profile icon" />
          <span>Login / Registration</span>
        </LoginItem>
      )}

      <Avatar>
        <div style={{ textDecoration: "none",marginLeft: "10px" }} onClick={handleDropdown}>
          <PersonIcon onClick={handleClick} />
          {show && (
            <Dropdown>
              <div>
                <div onClick={handleProfile}>Profile</div>
              </div>
              <div>
                <div onClick={handleLogout}>Log Out</div>
              </div>
            </Dropdown>
          )}
        </div>
      </Avatar>
    </>
  );
}

const Dropdown = styled.div`
  margin-left: -25px;
  padding: 3px;
  border-radius: 3px;
  width: 150px;
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #fff;
  cursor: pointer;
  > * {
    font-size: 16px;
    padding: 5px 0px;
    border-bottom: none;
    color: #f06424;
    padding: 8px 10px;
    &:hover {
      color: #fff;
      background-color: #f06424;
      transition: all ease-in-out 0.4s;
      @media (max-width: 1023px) {
      }
    }
  }
  z-index: 9;
  @media (max-width: 1023px) {
    position: relative;
    margin-left: 0px;
    width: 100%;
    padding-left: 15%;
    margin-bottom: -4px;
    background: transparent;
    > * {
      color: #000;
      font-size: 18px;
      box-shadow: none;
      padding-left: 0;
      padding-bottom: 15px;
    }
    span {
      padding-left: 10px;
    }
  }
`;
const LoginItem = styled.div`
  padding-left: 10%;
  color: #000;
  font-size: 18px;
  padding-bottom: 15px;
  padding-top: 5px;
  img {
    width: 22px;
    margin-left: 3px;
    margin-right: 4px;
  }
  span {
    padding-left: 10px;
  }
`;
const DropdownMenu = styled.div`
  padding-left: 10%;
  margin-bottom: -10px;
  div {
    color: #000;
    font-size: 18px;
    margin: 20px 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  img {
    width: 22px;
    margin-left: 5px;
  }
  span {
    padding-left: 12px;
  }
`;
const Avatar = styled.div`
  cursor: pointer;
  div {
    svg {
      display: block;
      width: 39px;
      height: 39px;
      border-radius: 50%;
      color: #f06424;
      background: #fff;
      line-height: 48px;
      text-align: center;
      box-shadow: 0px 2px 3.5px rgba(0, 0, 0, 0.16);
      padding: 8px;
      box-sizing: border-box;
      transition: all ease-in-out 0.4s;
    }
    span {
      display: none;
    }
    &:hover {
      svg {
        color: #fff;
        background: #f06424;
        transition: all ease-in-out 0.4s;
      }
    }
    @media (max-width: 1023px) {
      svg {
        display: none;
      }
      span {
        display: block;
        font-size: 18px;
        color: #000;
        padding-left: 20%;
        margin-bottom: 20px;
      }
    }
  }
`;

export default AdminAvatar;
