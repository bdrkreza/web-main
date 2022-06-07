/**
 * SUSPECT UNUSED
 */
import React, { useRef, useState } from "react";
import styled from "styled-components";
import ImageMapper from "react-img-mapper";
import json from "./cordinates.json";
import { SEARCHPAGE } from "@routes/paths";
import { api } from "@configs/configs";
import { useHistory } from "react-router-dom";

const LocationSearchUI = ({ modalClose }) => {
  // --------- Maps Functions -----------
  const [dhakaFlag, setDhakaFlag] = useState(false);
  const [chattogramFlag, setChattogramFlag] = useState(false);
  const [syhletFlag, setSyhletFlag] = useState(false);
  const [khulnaFlag, setKhulnaFlag] = useState(false);
  const [rangpurFlag, setRangpurFlag] = useState(false);
  const [rajshahiFlag, setRajshahiFlag] = useState(false);
  const [mymensinghFlag, setMymensinghFlag] = useState(false);
  const [barisalFlag, setBarisalFlag] = useState(false);

  const [flag, setFlag] = useState(true);
  const [id, setId] = useState("");
  const myRef = useRef({ current: "div#img-mapper" });
  const history = useHistory();

  const handleSearch = async () => {
    const data = await api.get(`api/cars/search-by-location/?division_id=${id}`);

    history.push({
      pathname: SEARCHPAGE,
      state: {
        carData: data.data,
        count: data.data.count,
        url: "api/cars/search-by-location/?division_id=" + id,
      },
    });
    modalClose();
  };

  const handleClear = () => {
    if (flag == true) {
      myRef.current.clearHighlightedArea();
      setFlag(false);
    }
  };

  // const URL = ;
  const MAP = {
    name: "my-map",
    // GET JSON FROM BELOW URL AS AN EXAMPLE
    areas: json,
  };

  const clicked = (area) => {
    if (area.id == 77) {
      setDhakaFlag(true);
      setChattogramFlag(false);
      setSyhletFlag(false);
      setKhulnaFlag(false);
      setRangpurFlag(false);
      setRajshahiFlag(false);
      setMymensinghFlag(false);
      setBarisalFlag(false);
      setId(area.id);
    } else if (area.id == 91) {
      setDhakaFlag(false);
      setChattogramFlag(false);
      setSyhletFlag(false);
      setKhulnaFlag(true);
      setRangpurFlag(false);
      setRajshahiFlag(false);
      setMymensinghFlag(false);
      setBarisalFlag(false);
      setId(area.id);
    } else if (area.id == 126) {
      setDhakaFlag(false);
      setChattogramFlag(false);
      setSyhletFlag(true);
      setKhulnaFlag(false);
      setRangpurFlag(false);
      setRajshahiFlag(false);
      setMymensinghFlag(false);
      setBarisalFlag(false);
      setId(area.id);
    } else if (area.id == 118) {
      setDhakaFlag(false);
      setChattogramFlag(false);
      setSyhletFlag(false);
      setKhulnaFlag(false);
      setRangpurFlag(false);
      setRajshahiFlag(true);
      setMymensinghFlag(false);
      setBarisalFlag(false);
      setId(area.id);
    } else if (area.id == 120) {
      setDhakaFlag(false);
      setChattogramFlag(false);
      setSyhletFlag(false);
      setKhulnaFlag(false);
      setRangpurFlag(true);
      setRajshahiFlag(false);
      setMymensinghFlag(false);
      setBarisalFlag(false);
      setId(area.id);
    } else if (area.id == 73) {
      setDhakaFlag(false);
      setChattogramFlag(true);
      setSyhletFlag(false);
      setKhulnaFlag(false);
      setRangpurFlag(false);
      setRajshahiFlag(false);
      setMymensinghFlag(false);
      setBarisalFlag(false);
      setId(area.id);
    } else if (area.id == 68) {
      setDhakaFlag(false);
      setChattogramFlag(false);
      setSyhletFlag(false);
      setKhulnaFlag(false);
      setRangpurFlag(false);
      setRajshahiFlag(false);
      setMymensinghFlag(false);
      setBarisalFlag(true);
      setId(area.id);
    } else if (area.id == 103) {
      setDhakaFlag(false);
      setChattogramFlag(false);
      setSyhletFlag(false);
      setKhulnaFlag(false);
      setRangpurFlag(false);
      setRajshahiFlag(false);
      setMymensinghFlag(true);
      setBarisalFlag(false);
      setId(area.id);
    }
  };

  return (
    <div className="w-10 h-10">
      <h2>
        Search by <span style={{ color: "#f06424" }}>Location</span>
      </h2>
      <br />
      <Container>
        {/* Button Side */}
        <ButtonSide>
          <DivisionsContainer>
            <h3 style={{ color: "#f06424" }}>Divisions</h3>
            <Divisions>
              <br />
              <i>*Please select the division area from the map.</i>
              <div>
                {dhakaFlag ? <Buttonactive>Dhaka</Buttonactive> : <Button>Dhaka</Button>}
                {chattogramFlag ? <Buttonactive>Chattogram</Buttonactive> : <Button>Chattogram</Button>}
                {syhletFlag ? <Buttonactive>Sylhet</Buttonactive> : <Button>Sylhet</Button>}
                {rajshahiFlag ? <Buttonactive>Rajshahi</Buttonactive> : <Button>Rajshahi</Button>}
              </div>
              <div>
                {khulnaFlag ? <Buttonactive>Khulna</Buttonactive> : <Button>Khulna</Button>}
                {barisalFlag ? <Buttonactive>Barisal</Buttonactive> : <Button>Barisal</Button>}
                {rangpurFlag ? <Buttonactive>Rangpur</Buttonactive> : <Button>Rangpur</Button>}
                {mymensinghFlag ? <Buttonactive>Mymensingh</Buttonactive> : <Button>Mymensingh</Button>}
              </div>
            </Divisions>
          </DivisionsContainer>

          <AreasContainer>
            {/* <h3 style={{color:'#f06424'}}>Areas</h3>
                                    <Areas>
                                          <h1>This is Buttons for Areas.</h1>
                                    </Areas> */}
            <br />
            <br />
            <ButtonSearch onClick={handleSearch}>Search</ButtonSearch>
          </AreasContainer>
        </ButtonSide>

        {/* Map Side */}
        <MapSide onMouseEnter={handleClear}>
          <ImageMapper
            containerRef={myRef}
            src={process.env.PUBLIC_URL + "/assets/images/bdmap1.webp"}
            map={MAP}
            stayHighlighted
            // responsive={true}
            // parentWidth={350}
            onClick={clicked}
          />
        </MapSide>
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  border: 3px solid black;
`;
const ButtonSide = styled.div`
  width: 700px;
`;
const DivisionsContainer = styled.div`
  margin-left: 20px;
  padding: 10px;
`;
const Divisions = styled.div`
  width: 700px;
`;
const AreasContainer = styled.div`
  margin-left: 20px;
  padding: 10px;
`;
const Areas = styled.div`
  width: 700px;
`;
const MapSide = styled.div`
  margin-top: 20px;
  width: 400px;
  height: 600px;
`;
const Button = styled.button`
  cursor: pointer;
  transition: 0.5s;
  margin: 10px 10px;
  height: 55px;
  width: 120px;
  border: 0px;
  &:hover {
    color: white;
    background-color: #f06424;
  }
`;
const Buttonactive = styled.button`
  cursor: pointer;
  transition: 0.5s;
  margin: 10px 10px;
  height: 55px;
  width: 120px;
  border: 0px;
  color: white;
  background-color: #f06424;
`;
const ButtonSearch = styled.div`
  margin-top: 4px;
  width: 140px;
  height: 46px;
  line-height: 48px;
  border-radius: 4px;
  background-color: #f06424;
  font-size: 16px;
  letter-spacing: 2px;
  color: #ffffff;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  text-align: center;

  @media (max-width: 425px) {
    ${"" /* margin-left: 25px; */}
  }
`;

export default LocationSearchUI;
