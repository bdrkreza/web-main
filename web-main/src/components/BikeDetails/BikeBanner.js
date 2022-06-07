import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

function BikeBanner(props) {
  const history = useHistory();
  const token = localStorage.getItem("access_token");
  const [notifyText, setNotifyText] = useState("Notify me if price drops");

  const submitHandler = (e) => {
    console.log("Call for appointment");
  };

  const handleNotify = async (e) => {
    e.preventDefault();
    if (token != null) {
      let notifyObject = {
        user_id: localStorage.getItem("user_id"),
        bike_id: props.bike.bike_id,
      };
      // console.log(notifyObject)
    } else {
      history.push({
        pathname: "/login",
      });
    }
  };

  return (
    <BannerDiv>
      <div className="content">
        <Grid container>
          <Grid item xs={12} sm={12} md={2} className="image-div">
            {props.bike.images
              .filter((item, index) => index === 0)
              .map((d, idx) => (
                <img src={d.image_url} key={idx} className="small-image" alt="Bike" />
              ))}
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <div className="bike-details">
              <div className="bike-name">
                <h1>
                  {props.bike.bike_manufacturer.maker_name}&nbsp;
                  {props.bike.model_name.model_name}&nbsp;{props.bike.grade}&nbsp;
                  {props.bike.bike_year}
                </h1>
              </div>
              {/* {props.bike.call_for_price === "yes" ? (
                <a href={`tel:${props.bike.contact_number}`} style={{ textDecoration: "none", color: "black" }}>
                  <h1 className="amount" style={{}}>
                    Call For Price
                  </h1>
                </a>
              ) : (
                <h1>৳ {props.bike.fixed_price.toLocaleString("en-IN")}</h1>
              )} */}
              <h1>৳ {props.bike.fixed_price.toLocaleString("en-IN")}</h1>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <Info>
              <p className="interested">If Interested:</p>
              <a href={`tel:${props.bike.created_by_phone}`} className="call" onClick={submitHandler}>
                <p className="call">Call For Final Price!</p>
              </a>
              <NotifyDiv>
                <a onClick={handleNotify} style={{ cursor: "pointer" }}>
                  {notifyText}
                </a>
              </NotifyDiv>
            </Info>
          </Grid>
        </Grid>
      </div>
    </BannerDiv>
  );
}

const BannerDiv = styled.div`
  margin-top: 50px;
  margin-right: 55px;
  padding-right: 10px;
  // margin-right: 46px;
  .content {
    display: flex;
    justify-content: space-between;
    padding: 18px;
    background-color: #fff1eb;
    width: 100%;
    border-radius: 5px;
    .image-div {
      // margin-left: 20px;
      // width: 25%;
      .small-image {
        height: 105px;
        width: 175px;
        border-radius: 5px;
      }
    }
    .bike-details {
      padding: 5px;
      display: flex;
      flex-direction: column;
      margin-left: 50px;
      .bike-name {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: baseline;
        h1 {
          font-size: 20px;
          color: #000000;
          font-weight: 700;
          // line-height: 50px;
        }
        h5 {
          font-size: 15px;
          margin-left: 7px;
        }
      }
      .amount {
        margin: 0px;
        text-decoration: none;
      }
    }
  }

  @media (max-width: 1024px) {
    .content {
      .bike-details {
        padding: 6px;
        margin-left: 70px;
        .bike-name {
          h1 {
            font-size: 14px;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding-right: 0px;
    margin-right: 0px;
    .content {
      display: flex;
      flex-direction: column;
      .image-div {
        width: 100%;
        display: flex;
        justify-content: center;
        .small-image {
          height: 100%;
          width: 100%;
        }
      }
      .bike-details {
        width: 100%;
        margin-top: 5px;
        text-align: center;
        // display: flex;
        // justify-content: center;
        // align-items: center;
        .bike-name {
          // margin-right: -55px;
          // margin-left: -80px;
        }
        .amount {
          margin-top: 0px;
        }
      }
    }
  }

  @media (max-width: 425px) {
    margin-top: 15px;
    padding-right: 0px;
    .content {
      .bike-details {
        margin-left: 0px;
        text-align: center;
        .bike-name {
          margin-left: 5px;
          h1 {
            font-size: 17px;
            width: 100%;
          }
        }
        .amount {
          font-size: 25px;
        }
      }
    }
  }

  @media (max-width: 320px) {
    .content {
      .bike-details {
        .bike-name {
          h1 {
            font-size: 12px;
            padding: 10px;
          }
        }
      }
    }
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 12px;
  margin: 0px 24px;
  .interested {
    font-size: 17px;
    line-height: 13px;
    color: #8a8a8a;
    font-weight: 400;
    padding-bottom: 5px;
  }
  .call {
    color: inherit;
    text-decoration: none;
    background-color: #f06425;
    .call {
      padding: 22px;
      font-size: 22px;
      line-height: 17px;
      color: #ffffff;
      font-weight: 700;
      text-align: center;
    }
  }
  @media (max-width: 768px) {
    padding-top: 10px;
    margin: 0px;
    width: 100%;
    .interested {
      padding-bottom: 5px;
    }
  }

  @media (max-width: 425px) {
    .interested {
      font-size: 15px;
    }
  }
`;

const NotifyDiv = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 5px;
  a {
    color: #f06424;
    font-size: 11px;
    text-decoration: none;
    border-bottom: 1px solid #f06424;
  }
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default BikeBanner;
