import React from "react";
import styled from "styled-components";
import BodyType from "../../assets/carDetails/bodyType.svg";
import Drive from "../../assets/carDetails/drive.svg";
import Engine from "../../assets/carDetails/engine.svg";
import Exterior from "../../assets/carDetails/exteriorColor.svg";
import FuelType from "../../assets/carDetails/fuelType.svg";
import Interior from "../../assets/carDetails/interiorColor.svg";
import Milage from "../../assets/carDetails/milage.svg";
import Seat from "../../assets/carDetails/seat2.svg";
import Transmission from "../../assets/carDetails/transmission.svg";

export default function DetailsWithIcons(props) {
  const [state, setState] = React.useState({
    mobileView: false,
  });
  const { mobileView } = state;
  React.useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 767
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const DesktopView = () => {
    return (
      <Main>
        <Title>
          Car <span style={{ color: "#f06424" }}>Details</span>
        </Title>
        <Div>
          <RowItem>
            <Img src={BodyType} />
            <RowText>
              <P>Body</P>
              <P style={{ color: "#000" }}>
                {props.car.car_body_type && (
                  <b>{props.car.car_body_type.body_name}</b>
                )}
              </P>
            </RowText>
          </RowItem>
          <RowItem>
            <Img src={Engine} />
            <RowText>
              <P>Engine Capacity</P>
              <P style={{ color: "#000" }}>
                {props.car.engine_capacity === 0 ? (
                  <b>-</b>
                ) : (
                  <b>{props.car.engine_capacity} cc</b>
                )}
              </P>
            </RowText>
          </RowItem>
          <RowItem>
            <Img src={Drive} />
            <RowText>
              <P>Drive</P>
              <P style={{ color: "#000" }}>
                <b>{props.car.drive}</b>
              </P>
            </RowText>
          </RowItem>
          <RowItem>
            <Img src={Milage} />
            <RowText>
              <P>Mileage</P>
              <P style={{ color: "#000" }}>
                {props.car.mileage === 0 ? (
                  <b>-</b>
                ) : (
                  <b>{props.car.mileage}</b>
                )}
              </P>
            </RowText>
          </RowItem>
          <RowItem>
            <Img src={Seat} />
            <RowText>
              <P>Seating Capacity</P>
              <P style={{ color: "#000" }}>
                {props.car.seating_capacity === 0 ? (
                  <b>-</b>
                ) : (
                  <b>{props.car.seating_capacity}</b>
                )}
              </P>
            </RowText>
          </RowItem>
          <RowItem>
            <Img src={Interior} />
            <RowText>
              <P>Interior Color</P>
              <P style={{ color: "#000" }}>
                {/* <b>Black</b> */}
                {props.car.interior_color_new && (
                  <b>{props.car.interior_color_new.int_color}</b>
                )}
              </P>
            </RowText>
          </RowItem>
          <RowItem>
            <Img src={FuelType} />
            <RowText>
              <P>Fuel Type</P>
              <P style={{ color: "#000" }}>
                {props.car.car_fuel && <b>{props.car.car_fuel.fuel_type}</b>}
              </P>
            </RowText>
          </RowItem>
          <RowItem>
            <Img src={Transmission} />
            <RowText>
              <P>Transmission</P>
              <P style={{ color: "#000" }}>
                <b>
                  {props.car.transmission_type === "M"
                    ? "Manual"
                    : props.car.transmission_type === "A"
                    ? "Automatic"
                    : " "}
                </b>
              </P>
            </RowText>
          </RowItem>
          <RowItem>
            <Img src={Exterior} />
            <RowText>
              <P>Exterior Color</P>
              <P style={{ color: "#000" }}>
                {props.car.exterior_color && (
                  <b>{props.car.exterior_color.car_color}</b>
                )}
              </P>
            </RowText>
          </RowItem>
        </Div>
      </Main>
    );
  };
  const MobileView = () => {
    return (
      <Main>
        <Title>
          Car <span style={{ color: "#f06424" }}>Details</span>
        </Title>
        <MDiv>
          <MRowItem>
            <MRowDiv>
              <Img src={BodyType} />
              <P>Body</P>
            </MRowDiv>
            <RowText>
              <P style={{ color: "#000" }}>
                {props.car.car_body_type && (
                  <b>{props.car.car_body_type.body_name}</b>
                )}
              </P>
            </RowText>
          </MRowItem>
          <MRowItem>
            <MRowDiv>
              <Img src={Engine} />
              <P>Engine Capacity</P>
            </MRowDiv>
            <RowText>
              <P style={{ color: "#000" }}>
                {props.car.engine_capacity === 0 ? (
                  <b>-</b>
                ) : (
                  <b>{props.car.engine_capacity} cc</b>
                )}
              </P>
            </RowText>
          </MRowItem>
          <MRowItem>
            <MRowDiv>
              <Img src={Drive} />
              <P>Drive</P>
            </MRowDiv>

            <RowText>
              <P style={{ color: "#000" }}>
                <b>{props.car.drive}</b>
              </P>
            </RowText>
          </MRowItem>
          <MRowItem>
            <MRowDiv>
              <Img src={Milage} />
              <P>Mileage</P>
            </MRowDiv>
            <RowText>
              <P style={{ color: "#000" }}>
                {props.car.mileage === 0 ? (
                  <b>-</b>
                ) : (
                  <b>{props.car.mileage}</b>
                )}
              </P>
            </RowText>
          </MRowItem>
          <MRowItem>
            <MRowDiv>
              <Img src={Seat} />
              <P>Seating Capacity</P>
            </MRowDiv>

            <RowText>
              <P style={{ color: "#000" }}>
                {props.car.seating_capacity === 0 ? (
                  <b>-</b>
                ) : (
                  <b>{props.car.seating_capacity}</b>
                )}
              </P>
            </RowText>
          </MRowItem>
          <MRowItem>
            <MRowDiv>
              <Img src={Interior} />
              <P>Interior Color</P>
            </MRowDiv>
            <RowText>
              <P style={{ color: "#000" }}>
                {/* <b>Black</b> */}
                {props.car.interior_color_new && (
                  <b>{props.car.interior_color_new.int_color}</b>
                )}
              </P>
            </RowText>
          </MRowItem>
          <MRowItem>
            <MRowDiv>
              <Img src={FuelType} />
              <P>Fuel Type</P>
            </MRowDiv>

            <RowText>
              <P style={{ color: "#000" }}>
                {props.car.car_fuel && <b>{props.car.car_fuel.fuel_type}</b>}
              </P>
            </RowText>
          </MRowItem>
          <MRowItem>
            <MRowDiv>
              <Img src={Transmission} />
              <P>Transmission</P>
            </MRowDiv>

            <RowText>
              <P style={{ color: "#000" }}>
                <b>
                  {props.car.transmission_type === "M"
                    ? "Manual"
                    : props.car.transmission_type === "A"
                    ? "Automatic"
                    : " "}
                </b>
              </P>
            </RowText>
          </MRowItem>
          <MRowItem>
            <MRowDiv>
              <Img src={Exterior} />
              <P>Exterior Color</P>
            </MRowDiv>

            <RowText>
              <P style={{ color: "#000" }}>
                {props.car.exterior_color && (
                  <b>{props.car.exterior_color.car_color}</b>
                )}
              </P>
            </RowText>
          </MRowItem>
        </MDiv>
      </Main>
    );
  };
  return mobileView ? MobileView() : DesktopView();
}

const Main = styled.div`
  margin-top: 40px;
  padding-top: 40px;
  background-color: #f8f8f8;
  border-radius: 5px;
  margin-right: 55px;
  padding-bottom: 20px;
  @media (max-width: 1024px) {
    margin-top: 0px;
    padding-top: 25px;
  }

  @media (max-width: 767px) {
    margin-right: 0px;
    background-color: white;
  }

  @media (max-width: 600px) {
    width: 100%;
  }

  @media (max-width: 375px) {
    width: 100%;
  }

  @media (max-width: 320px) {
    width: 100%;
  }
`;

const Title = styled.p`
  font-size: 20px;
  color: #000000;
  font-weight: 700;
  font-family: "Open Sans";
  margin-left: 20px;
`;
const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-left: 40px;
  padding-top: 5px;
  @media (max-width: 768px) {
    margin-left: 0px;
  }
  @media (max-width: 600px) {
    justify-content: flex-start;
    height: auto;
    padding-top: 20px;
  }
`;

const RowItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 33.333%;
  justify-content: flex-start;
  padding: 20px 0px;
  &:nth-child(3n) {
    padding-left: 20px;
  }
  &:nth-child(3n-1) {
    padding-left: 20px;
  }
  // &::after {
  //   content: "";
  //   position: absolute;
  //   top: 20px;
  //   right: 0;
  //   left: inerit;
  //   height: 40px;
  //   width: 1px;
  //   background: #777;
  // }
  &:nth-child(3n)::after {
    content: none;
  }
  @media (max-width: 600px) {
    width: 50%;
    margin: 0px;
    padding: 20px 0px;
    &::after {
      content: none;
    }
    // &:nth-child(odd)::after {
    //   content: "";
    //   position: absolute;
    //   top: 20px;
    //   right: 0;
    //   left: inerit;
    //   height: 40px;
    //   width: 1px;
    //   background: #777;
    // }
    &:nth-child(even) {
      padding-left: 20px;
    }
    &:nth-child(odd) {
      padding-left: 0px;
    }
  }

  @media (max-width: 375px) {
    width: 45%;
  }

  @media (max-width: 320px) {
    width: 35%;
  }
`;
const RowText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 15px;
  margin-right: 0px;
`;
const P = styled.p`
  font-size: 15px;
  color: #646464;
  font-weight: 400;
  font-family: "Open Sans";
  margin: 0px;
`;

const Img = styled.img`
  height: 30px;
  width: 30px;
`;
const MDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 5px;
`;
const MRowItem = styled.div`
  position: relative;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid #f06425;
    border-top-left-radius: 0.3125rem;
    border-top-right-radius: 0.3125rem;
    border-bottom-right-radius: 0.3125rem;
    border-bottom-left-radius: 0.3125rem;
    padding: 10px 20px;
    margin: 10px;
    width: 100%;
  }

  @media (max-width: 600px) {
    padding: 10px 20px;
    margin: 10px;
    width: 100%;
    &::after {
      content: none;
    }
  }

  @media (max-width: 375px) {
    width: 100%;
  }

  @media (max-width: 320px) {
    width: 100%;
  }
`;

const MRowDiv = styled.div`
  display: flex;
  p {
    margin-left: 10px;
  }
  @media (max-width: 667px) {
    display: flex;
    justify-contain: center;
    align-items: center;
    p {
      margin-left: 10px;
    }
  }
`;
