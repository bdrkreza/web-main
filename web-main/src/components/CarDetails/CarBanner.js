import React from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import { api } from "@configs/configs";
import { useHistory } from "react-router-dom";

function CarBanner(props) {
  const history = useHistory();
  const token = localStorage.getItem("access_token");
  const [notifyText, setNotifyText] = React.useState("Notify me if price drops");

  const submitHandler = (e) => {
    (async () => {
      const response = await api
        .post(`api/cars/call-for-appointment-count/?car_id=${props.car_id}`)
        .then((response) => {});
    })();
  };
  const handleNotify = async (e) => {
    e.preventDefault();

    if (token !== null) {
      let notifyObject = {
        user_id: localStorage.getItem("user_id"),
        car_id: props.car.id,
      };
      const response = await api.post("api/cars/notify-me/", notifyObject);
      if (response.status == 201) {
        setNotifyText("You will be Notified. Thank You.");

        setTimeout(function () {
          setNotifyText("Notify me if price drops");
        }, 3000);
      }
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
            {props.car.images
              .filter((item, index) => index === 0)
              .map((d, idx) => (
                <img src={d} key={idx} className="small-image" alt="Bike" />
              ))}
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <div className="car-details">
              <div className="car-name">
                <h1>
                  {props.car.car_manufacturer.maker_name} &nbsp;
                  {props.car.model_name.model_name} &nbsp;
                  {props.car.grade === "-" ? null : props.car.grade} &nbsp;
                  {props.car.car_year}
                </h1>
              </div>
              <h1>৳ {props.car.fixed_price.toLocaleString("en-IN")}</h1>
              {/* {props.car.call_for_price === "yes" ? (
                <h1 className="amount">Call For Price</h1>
              ) : (
                <h1>৳ {props.car.fixed_price.toLocaleString("en-IN")}</h1>
              )} */}
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <Info>
              <p className="interested">If Interested:</p>
              <a href={`tel:${props.car.created_by_phone}`} className="call" onClick={submitHandler}>
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
  padding-right: 10px;
  margin-right: 46px;
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
    .car-details {
      display: flex;
      flex-direction: column;
      margin-left: 50px;
      .car-name {
        margin-top: -10px;
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
      }
    }
  }

  @media (max-width: 1024px) {
    .content {
      .car-details {
        padding: 6px;
        margin-left: 70px;
        .car-name {
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
      .car-details {
        width: 100%;
        margin-top: 5px;
        text-align: center;
        // display: flex;
        // justify-content: center;
        // align-items: center;
        .car-name {
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
      .car-details {
        margin-left: 0px;
        text-align: center;
        .car-name {
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
      .car-details {
        .car-name {
          h1 {
            font-size: 12px;
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

export default CarBanner;
