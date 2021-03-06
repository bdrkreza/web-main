import { api } from "@configs/configs";
import React, { lazy, useEffect, useState } from "react";
import CountUp from "react-countup";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/swiper-bundle";
import "swiper/swiper.min.css";
import Condition from "../../assets/carDetails/condition.svg";
import Exterior from "../../assets/carDetails/exteriorColor.svg";
import FuelType from "../../assets/carDetails/fuelType.svg";
import Milage from "../../assets/carDetails/milage.svg";
const AuthorCard = lazy(() => import("@components/AuthorCard/AuthorCard"));

export default function CarDetailsCard(props) {
  const [state, setState] = useState({
    mobileView: false,
  });
  const { mobileView } = state;
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 768
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const history = useHistory();
  const token = localStorage.getItem("access_token");
  const [notifyText, setNotifyText] = React.useState(
    "Notify me if price drops"
  );

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

  const DesktopView = () => {
    let price =
      props.car.fixed_price !== props.car.affiliated_price
        ? "??? " + props.car.fixed_price.toLocaleString("en-IN") + " (Negotiable)"
        : "??? " + props.car.fixed_price.toLocaleString("en-IN");

    return (
      <BhaloBuyHere>
        <BhalogariDiv>
          <InfoDiv>
            <p>
              Registration:{" "}
              {props.car.car_type && (
                <span style={{ color: "#f06424" }}>N/A</span>
              )}
            </p>
            <p>
              Category:{" "}
              {props.car.car_type && (
                <span style={{ color: "#f06424" }}>
                  {props.car.car_type.car_type}
                </span>
              )}
            </p>
            <p>
              Views:{" "}
              {props.car.car_type && (
                <span style={{ color: "#f06424" }}>
                  <CountUp end={props.car.no_of_views} />
                </span>
              )}
            </p>
          </InfoDiv>

          <TakaDiv>
            <h1>{price}</h1>
            {/* {
                  props.car.call_for_price === 'yes' ? 
                  <Info>
                  <a href={`tel:${props.car.created_by_phone}`} >
                    <p>Call For Price</p>
                  </a>
                </Info> : 
                <h1>{price}</h1>
                } */}
          </TakaDiv>

          {/* <AuthorCard
            imageUrl={props.car.image_url}
            name={props.car.created_by_name}
            contactNumber={props.car.created_by_phone}
            postDate={props.car.created_at.split(" ")[0]}
            car_id={props.car.id}
            notifyComponent={
              <NotifyDiv>
                <a onClick={handleNotify} style={{ cursor: "pointer" }}>
                  {notifyText}
                </a>
              </NotifyDiv>
            }
          /> */}
          {/* <NotifyDiv>
            <a onClick={handleNotify} style={{ cursor: "pointer" }}>
              {notifyText}
            </a>
          </NotifyDiv> */}

          {/* Desktop View */}

          <CarDetailsDiv>
            <RowItems>
              <Imgs src={Milage} />
              <RowText>
                <P>Mileage</P>
                <p className="description">
                  {props.car.mileage === 0 ? (
                    <b>-</b>
                  ) : (
                    <b>
                      <CountUp end={props.car.mileage} />
                    </b>
                  )}{" "}
                </p>
              </RowText>
            </RowItems>

            <RowItems>
              <Imgs src={FuelType} />
              <RowText>
                <P>Fuel Type</P>
                <p className="description">
                  {props.car.car_fuel && <b>{props.car.car_fuel.fuel_type}</b>}
                </p>
              </RowText>
            </RowItems>

            <RowItems>
              <Imgs src={Condition} />
              <RowText>
                <P>Condition</P>
                <p className="description">
                  {props.car.car_type.car_type && (
                    <b>{props.car.car_type.car_type}</b>
                  )}
                </p>
              </RowText>
            </RowItems>
            <RowItems>
              <Imgs src={Exterior} className="exterior" />
              <RowText>
                <P>Exterior Colour</P>
                <p className="description">
                  {props.car.exterior_color && (
                    <b>{props.car.exterior_color.car_color}</b>
                  )}
                </p>
              </RowText>
            </RowItems>
          </CarDetailsDiv>
        </BhalogariDiv>
      </BhaloBuyHere>
    );
  };

  const MobileView = () => {
    let price =
      props.car.fixed_price !== props.car.affiliated_price
        ? "??? " + props.car.fixed_price.toLocaleString("en-IN") + " (Negotiable)"
        : "??? " + props.car.fixed_price.toLocaleString("en-IN");

    return (
      <BhaloBuyHere>
        <BhalogariDiv>
          <InfoDiv>
            <p>
              Registration:{" "}
              {props.car.car_type && (
                <span style={{ color: "#f06424" }}>N/A</span>
              )}
            </p>
            <p>
              Category:{" "}
              {props.car.car_type && (
                <span style={{ color: "#f06424" }}>
                  {props.car.car_type.car_type}
                </span>
              )}
            </p>
            <p>
              Views:{" "}
              {props.car.car_type && (
                <span style={{ color: "#f06424" }}>
                  {props.car.no_of_views}
                </span>
              )}
            </p>
          </InfoDiv>

          <TakaDiv>
            <h1>{price}</h1>
            {/* {props.car.call_for_price === "yes" ? (
              <Info>
                <a href={`tel:${props.car.created_by_phone}`}>
                  <p>Call For Price</p>
                </a>
              </Info>
            ) : (
              <h1>{price}</h1>
            )} */}
          </TakaDiv>

          {/* <AuthorCard
            imageUrl={props.car.image_url}
            name={props.car.created_by_name}
            contactNumber={props.car.created_by_phone}
            postDate={props.car.created_at.split(" ")[0]}
            car_id={props.car.id}
            notifyComponent={
              <NotifyDiv>
                <a onClick={handleNotify} style={{ cursor: "pointer" }}>
                  {notifyText}
                </a>
              </NotifyDiv>
            }
          /> */}

          {/* <NotifyDiv>
            <a onClick={handleNotify} style={{ cursor: "pointer" }}>
              {notifyText}
            </a>
          </NotifyDiv> */}

          {/* Mobile View */}
          <CarDetailsDiv>
            <RowItems>
              <Imgs src={Milage} />
              <RowText>
                <P>Mileage</P>
                <p className="description">
                  {props.car.mileage === 0 ? (
                    <b>-</b>
                  ) : (
                    <b>{props.car.mileage}</b>
                  )}
                </p>
              </RowText>
            </RowItems>

            <RowItems>
              <Imgs src={FuelType} />
              <RowText>
                <P>Fuel Type</P>
                <p className="description">
                  {props.car.car_fuel && <b>{props.car.car_fuel.fuel_type}</b>}
                </p>
              </RowText>
            </RowItems>

            <RowItems>
              <Imgs src={Condition} />
              <RowText>
                <P>Condition</P>
                <p className="description">
                  {props.car.car_type.car_type && (
                    <b>{props.car.car_type.car_type}</b>
                  )}
                </p>
              </RowText>
            </RowItems>

            <RowItems>
              <Imgs src={Exterior} />
              <RowText>
                <P>Exterior Colour</P>
                <p className="description">
                  {props.car.exterior_color && (
                    <b>{props.car.exterior_color.car_color}</b>
                  )}
                </p>
              </RowText>
            </RowItems>
          </CarDetailsDiv>
        </BhalogariDiv>
      </BhaloBuyHere>
    );
  };
  return mobileView ? MobileView() : DesktopView();
}
const BhaloBuyHere = styled.div`
  font-family: "Open Sans";
  margin-top: -15px;
  margin-left: 50px;
  padding-bottom: 5px;
  @media (max-width: 1024px) {
    margin-top: -20px;
    margin-left: 20px;
    padding-bottom: 45px;
  }
  @media (max-width: 768px) {
    margin-top: 5px;
    margin-left: 0px;
  }
  @media (max-width: 767px) {
    // padding-top: 10px;
    padding-bottom: 10px;
  }
  @media (max-width: 425px) {
    width: 100%;
    margin-left: 0px;
    padding-bottom: 10px;
  }
  @media (max-width: 320px) {
    // margin-left: -15px;
  }
`;

const Imgs = styled.img`
  height: 75px;
  width: 65px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  .exterior {
    height: 55px;
    margin-top: 14px;
    margin-bottom: 5px;
  }
  @media (max-width: 1024px) {
    height: 45px;
    // width: 45px;
  }
`;

const MImgs = styled.img`
  display: flex;
  // margin-right:30px;
  // margin-left: 2%;
  // margin-right: auto;
  width: 50%;

  @media (max-width: 1024px) {
    height: 29px;
    // width: 45px;
  }
`;

const RowItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;
  width: 100%;
  padding: 20px 0px;
  h4 {
    font-size: 40px;
  }
  h5 {
    font-size: 28px;
  }
  & label {
    & span {
      font-size: 14px;
    }
  }
  @media (max-width: 600px) {
    margin: 0px;
    justify-content: between-space;
    &::after {
      content: none;
    }
    &:nth-child(odd)::after {
      content: "";
      position: absolute;
      top: 20px;
      right: 0;
      left: inerit;
      height: 40px;
      width: 1px;
      background: #777;
    }
    &:nth-child(even) {
      padding-left: 0px;
    }
    &:nth-child(odd) {
      padding-left: 0px;
    }
  }
`;

const InfoDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  p {
    position: relative;
    font-size: 20px;
    line-height: 18px;
    color: #646464;
    font-weight: 400;
    &:not(:last-child):before {
      position: absolute;
      content: " ";
      top: -2%;
      right: -10px;
      width: 1px;
      height: 108%;
      background-color: #cecece;
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
    & p {
      postion: relative;
      &:not(:last-child):before {
        position: absolute;
        content: " ";
        top: 13%;
        right: -18px;
        width: 1px;
        height: 70%;
      }
      > span {
        font-size: 15px;
      }
    }
  }

  @media (max-width: 768px) {
    margin-top: 10px;
    & p {
      font-size: 17px;
      position: relative;
      &:not(:last-child):before {
        position: absolute;
        content: " ";
        top: -2%;
        right: -75px;
        width: 1px;
        height: 90%;
      }
    }
  }

  @media (max-width: 600px) {
    margin-top: 10px;
    & p {
      position: relative;
      &:not(:last-child):before {
        right: -50px;
      }
    }
  }

  @media (max-width: 425px) {
    & p {
      font-size: 15px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &:not(:last-child):before {
        display: none;
      }
    }
  }
`;

const TakaDiv = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
  display: flex;
  width: 100%;
  & h1 {
    font-size: 40px;
    margin: 0px;
  }
  @media (max-width: 1024px) {
    & h1 {
      font-size: 35px;
    }
  }
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 425px) {
    & h1 {
      font-size: 23px;
    }
  }

  @media (max-width: 362px) {
    & h1 {
      font-size: 20px;
    }
  }

  @media (max-width: 280px) {
    & h1 {
      font-size: 16px;
    }
  }
`;

const NotifyDiv = styled.div`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 30px;
  a {
    color: #f06424;
    font-size: 18px;
    text-decoration: none;
    border-bottom: 1px solid #f06424;
  }
  @media (max-width: 1024px) {
    padding-bottom: 14px;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 425px) {
    a {
      font-size: 15px;
    }
  }
`;

const CarDetailsDiv = styled.div`
  display: flex;
  margin-top: 25px;
  width: 100%;
  // border: 1px solid red;

  // @media(max-width: 1024px){
  //   margin-top: -4px;
  // }

  // @media(max-width: 768px){
  //   padding-left: 55px;
  // }

  // @media(max-width: 767px){
  //   padding-left: 0px;
  // }

  // @media(max-width: 375px){
  //   margin-left: -13px;
  // }
`;

const RowItems = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // align-items: center;
  // align-items: left;
  // padding: 0px 10px;
  width: 25%;
  // border: 1px solid red;
  & p {
    width: 100%;
  }
  & label {
    & span {
      font-size: 14px;
    }
  }
  .description {
    color: #000;
    font-size: 15px;
    padding-top: 5px;
  }

  @media (max-width: 600px) {
    width: 25%;
    margin: 11px;
    &::after {
      content: none;
    }
    &:nth-child(odd)::after {
      content: "";
      position: absolute;
      top: 20px;
      right: 0;
      left: inerit;
      height: 40px;
      width: 1px;
      background: #777;
    }
    // &:nth-child(even) {
    //   padding-left: 20px;
    // }
    // &:nth-child(odd) {
    //   padding-left: 0px;
    // }
  }

  @media (max-width: 425px) {
    .description {
      font-size: 12px;
    }
  }

  @media (max-width: 320px) {
    width: 50%;
    margin: 3px;

    &:nth-child(4) {
      margin-left: 15px;
    }
  }
`;

const RowText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  // margin: 0px;
  margin-right: 15%;
  // align-self: flex-start;
  padding-top: 5px;
  // & p {
  //   padding: 0px 5px;
  // }
  text-align: center;
`;

const P = styled.p`
  font-size: 16px;
  width: 33%;
  color: #646464;
  font-weight: 600;
  font-family: "Open Sans";
  line-height: 1;
  // padding: 0px 10px;
  @media (max-width: 1024px) {
    font-size: 11px;
  }
  @media (max-width: 425px) {
    font-size: 12px;
  }
`;

const BtnCall = styled.a`
  width: 70%;
  height: 46px;
  line-height: 26px;
  border-radius: 8px;
  border-color: transparent;
  background-color: #666;
  font-size: 16px;
  letter-spacing: 2px;
  color: #ffffff;
  font-weight: 700;
  text-decoration: none;
  padding: 10px;
  margin: 0 auto;
  text-align: center;
  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #f06524;
  }
  @media (max-width: 425px) {
    ${"" /* margin-left: 25px; */}
  }
`;

const BhalogariDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  align-items: baseline;
  border-radius: 5px;
  // box-shadow: 0px 2px 4.5px rgba(0, 0, 0, 0.16);
  // background-color: #ffffff;
  & .each-icon-box {
    position: relative;
    max-width: 25%;
    margin-top: 20px;
    padding: 0 20px 20px;
    &:not(:last-child):before {
      position: absolute;
      content: " ";
      top: 15%;
      right: 0;
      width: 1px;
      height: 70%;
      background: #cecece;
    }
  }
  // & h1 {
  //     // padding: 0 15px 0 10px;
  //     // margin: 0 20px 0 0;
  //     // border-right: #777 1px solid;
  // }
  & span {
    color: #000;
    font-weight: 700;
    font-size: 20px;
  }
  @media (max-width: 1024px) {
    h3 {
      font-size: 16px;
      padding: 10px 0;
    }
    p {
      font-size: 15px;
    }
  }
  @media (max-width: 767px) {
    padding: 0rem;
    align-items: center;
    flex-wrap: wrap;
    .each-icon-box {
      max-width: 50%;
    }
  }
  @media (max-width: 600px) {
    .each-icon-box {
      max-width: 95%;
      min-height: 350px;
      border-right: 1px solid #eee;
    }
  }
  @media (max-width: 420px) {
    align-items: baseline;
    h3 {
      font-size: 16px;
      padding: 5px 0;
    }
  }

  @media (max-width: 375px) {
    p {
      font-size: 13px;
    }
  }
`;

const Info = styled.div`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  border: 1px solid #f06425;
  background-color: #f06425;
  width: 75%;
  a {
    border-radius: 5px;
    color: inherit;
    text-decoration: none;
    // background-color: #f06425;
    & p {
      padding: 20px;
      font-size: 22px;
      line-height: 17px;
      color: #ffffff;
      font-weight: 700;
      text-align: center;
      &: hover {
        color: #f06425;
      }
    }
    &: hover {
      background-color: #ffffff;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
//export default CarDetailsCard;
