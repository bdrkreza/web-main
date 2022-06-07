import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { api } from "@configs/configs";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import UserAvatar from "./avatar.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    backgroundColor: "#fff",
  },
}));

// function UrlExists(url, callback) {
//   var http = new XMLHttpRequest();
//   http.open("HEAD", url);
//   http.setRequestHeader("Content-type", "application/json");
//   // http.setRequestHeader("Access-Control-Allow-Origin", "*");
//   http.onreadystatechange = function () {
//     if (this.readyState == this.DONE) {
//       callback(this.status != 404);
//     }
//   };
//   http.send();
// }

const AuthorCard = (props) => {
  // console.log(UrlExists(props.imageUrl, () => {}));
  console.log("Author Card =>", props.name);
  // const slug = parseInt(props.merchant_id);
  // console.log("Slug =>", slug);

  // const id = parseInt(props.merchant_id);
  const id = String(props.merchant_id);
  console.log("ID in author page=>", id);

  const submitHandler = (e) => {
    //e.preventDefault();
    // console.log(props.car_id);
    (async () => {
      const response = await api
        .post(`api/cars/call-for-appointment-count/?car_id=${props.car_id}`)
        .then((response) => {
          return false;
        });
    })();
  };

  const classes = useStyles();
  return (
    <Card>
      <AuthorDiv>
        <Avatar
          alt="user"
          className={classes.large}
          src={props.imageUrl ? props.imageUrl : UserAvatar}
        />
        <NameDiv className="namediv">
          <Link
            to={{
              pathname: `/store/${id}`,
              state: {
                merchant_id: id,
              },
            }}
          >
            <h5 className="text-black font-bold text-2xl hover:text-bg-orange">{props.name}</h5>
          </Link>
          <b style={{ color: "#f06425" }}>Posted on: {props.postDate}</b>
        </NameDiv>
      </AuthorDiv>
      <ConatctBox>
        <Info>
          <a href={`tel:${props.contactNumber}`} onClick={submitHandler}>
            <p>Call For Final Price!</p>
          </a>
        </Info>
        <div className="text-center">{props.notifyComponent && props.notifyComponent}</div>
      </ConatctBox>
      {/* 
      TODO Implement this feature?
      <ListingDiv>
        <a href="#">Report Listing</a>
      </ListingDiv> */}
    </Card>
  );
};

export default AuthorCard;

const Card = styled.div`
  margin-left: -32px;
  height: 217px;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  background-color: #fff1eb;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  @media (max-width: 1024px) {
    margin-top: -20px;
    width: 290px;
  }
  @media (max-width: 968px) {
    margin-top: 20px;
    margin-left: 4px;
    width: 100%;
  }

  @media (max-width: 768px) {
    margin-top: 20px;
    margin-left: 4px;
    width: 100%;
  }
`;

const AuthorDiv = styled.div`
  padding: 11px 20px;
  color: #fff;
  background-color: #fff1eb;
  display: flex;
`;

const ImageDiv = styled.div``;
const NameDiv = styled.div`
  font-family: "Open Sans";
  padding: 8px 3px;
  margin-left: 6px;
  &.namediv {
    color: #fff;
    > h5 {
      text-transform: uppercase;
      font-size: 19px;
      line-height: 23px;
      color: #000000;
      font-weight: 700;
    }
    > p {
      font-size: 13px;
      line-height: 16px;
      color: #f06424;
      font-weight: 600;
    }
  }
`;

const ConatctBox = styled.div`
  padding: 9px 0px;
  > img {
    height: 60px;
    width: 60px;
    margin: 15px 0;
  }
`;

const ListingDiv = styled.div`
  // padding: 10px 0px;
  text-align: center;
  > a {
    font-size: 14px;
    line-height: 24px;
    color: #000000;
    font-weight: 600;
    text-decoration: none;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 20px;
  a {
    border-radius: 5px;
    color: inherit;
    text-decoration: none;
    background-color: #f06425;
    // border: 1px solid red;
    & p {
      padding: 20px;
      font-size: 22px;
      line-height: 17px;
      color: #ffffff;
      font-weight: 700;
      text-align: center;
      &: hover {
        color: #f06424;
      }
    }
    &: hover {
      background-color: #ffffff;
    }
  }
`;
