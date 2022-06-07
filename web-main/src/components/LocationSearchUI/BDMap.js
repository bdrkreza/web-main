import React, { useState } from "react";
import classNames from "classnames";
import { SEARCHPAGE } from "@routes/paths";
import mapBase from "./map1/bdmap.webp";
import mapDhaka from "./map1/dhaka.webp";
import mapBarisal from "./map1/barisal.webp";
import mapChittagong from "./map1/chittagong.webp";
import mapKhulna from "./map1/khulna.webp";
import mapRajshahi from "./map1/rajshahi.webp";
import mapRangpur from "./map1/rangpur.webp";
import mapSylhet from "./map1/sylhet.webp";
import mapMymensingh from "./map1/mymensingh.webp";
import { api } from "@configs/configs";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const BDMap = ({ modalClose }) => {
  const history = useHistory();
  const [cities, setCities] = useState([
    { name: "Bangladesh", areaId: -1, img: mapBase },
    {
      name: "Dhaka",
      areaId: 77,
      img: mapDhaka,
      area: {
        shape: "polygon",
        coords:
          "164,190,153,192,146,205,148,223,144,237,144,250,129,255,123,256,130,267,137,280,139,291,146,301,156,316,171,308,184,303,199,307,201,293,208,276,209,260,223,244,231,234,229,224,244,218,244,202,229,203,217,207,206,210,204,228,193,223,177,226,174,211",
      },
    },
    {
      name: "Barisal",
      areaId: 68,
      img: mapBarisal,
      area: {
        shape: "polygon",
        coords:
          "188,306,178,303,164,314,157,322,157,336,158,350,154,365,157,377,162,386,162,399,178,400,185,382,193,378,206,386,230,378,245,374,270,355,257,334,238,326,213,323,202,309",
      },
    },
    {
      name: "Chittagong",
      areaId: 73,
      img: mapChittagong,
      area: {
        shape: "polygon",
        coords:
          "251,222,242,219,230,225,233,231,229,240,220,248,212,255,207,267,210,275,202,286,202,299,201,308,210,319,221,321,231,324,250,326,264,331,279,348,286,369,293,392,291,412,291,426,300,434,304,448,315,463,322,478,319,458,315,441,317,435,327,427,335,435,348,441,342,397,342,375,333,333,330,321,324,309,325,292,318,265,313,257,303,264,293,257,293,275,282,287,287,306,268,315,260,289,254,303,250,281,240,261,248,249,254,239",
      },
    },
    {
      name: "Khulna",
      areaId: 91,
      img: mapKhulna,
      area: {
        shape: "polygon",
        coords:
          "92,297,81,307,90,327,89,345,102,416,150,397,153,361,156,340,157,322,150,310,137,293,137,283,129,273,120,254,98,242,90,230,75,237,69,250,65,270,78,276,73,293",
      },
    },
    {
      name: "Rajshahi",
      areaId: 118,
      img: mapRajshahi,
      area: {
        shape: "polygon",
        coords:
          "92,145,112,151,136,162,152,189,142,201,148,229,142,239,144,255,121,253,98,241,92,231,75,234,76,216,52,211,34,195,29,183,40,166,52,171,58,149,79,148",
      },
    },
    {
      name: "Rangpur",
      areaId: 120,
      img: mapRangpur,
      area: {
        shape: "polygon",
        coords:
          "137,145,153,128,151,92,141,73,135,89,108,85,97,59,89,74,75,62,56,42,55,65,42,81,36,100,56,113,65,129,83,131,96,141,113,157,138,160",
      },
    },
    {
      name: "Sylhet",
      areaId: 126,
      img: mapSylhet,
      area: {
        shape: "polygon",
        coords:
          "222,151,226,165,239,168,244,183,246,197,245,208,245,217,253,221,255,234,273,230,276,222,282,225,285,220,292,225,293,212,300,212,307,207,311,196,315,177,318,169,331,172,332,165,321,158,305,151,289,148,274,151,258,150,247,146,234,147",
      },
    },
    {
      name: "Mymensingh",
      areaId: 103,
      img: mapMymensingh,
      area: {
        shape: "polygon",
        coords:
          "148,136,143,143,139,159,146,179,154,189,165,186,169,198,175,211,177,225,186,224,193,221,202,227,203,214,203,206,210,208,217,205,235,202,244,199,242,184,237,171,226,164,222,151,194,151,174,147,161,142",
      },
    },
  ]);

  const [selectedCity, setSelectedCity] = useState(cities[0]);

  const handleClear = () => {
    setSelectedCity(cities[0]);
  };

  /**
   * Call search API, collect data, and pass through history push.
   * TODO Should call React Router to handle the search by city instead.
   * ex: <Redirect to="bhalogari.com/cars/by-location/:areaId" />
   * @param {city} city
   */
  const search = async (city) => {
    // console.debug(city);
    // alert(`Search ${city.name}`);
    const data = await api.get(`api/cars/search-by-location/?division_id=${city.areaId}`);
    history.push({
      pathname: SEARCHPAGE,
      state: {
        carData: data.data,
        count: data.data.count,
        url: "api/cars/search-by-location/?division_id=" + city.areaId,
      },
    });
    modalClose();
  };

  const buttons = cities
    .filter((city) => city.areaId > 0)
    .map((city) => (
      <Button
        key={city.areaId}
        onClick={() => search(city)}
        onMouseEnter={() => setSelectedCity(city)}
        onMouseLeave={handleClear}
        size="small"
        className={classNames("border-2 border-gray-400 hover:bg-bg-orange text-sm md:text-base", {
          "bg-bg-orange text-white text-xl": selectedCity == city,
        })}
      >
        {city.name}
      </Button>
    ));

  const areas = cities
    .filter((city) => city.areaId > 0)
    .map((city) => (
      <area
        key={city.areaId}
        alt={city.name}
        title={city.name}
        shape={city.area.shape}
        onMouseEnter={() => setSelectedCity(city)}
        onMouseLeave={handleClear}
        onClick={(e) => search(city)}
        aria-hidden="true"
        coords={city.area.coords}
      />
    ));

  return (
    <div className="m-4">
      <h2 className="font-bold text-xl ">
        Search by <span className="text-[#f06424]">Location</span>
      </h2>
      <div id="division-div" className="border-0 md:border-2 border-black">
        {/* Button Side */}

        {/* <DivisionsContainer> */}
        <div className="p-2">
          <h3 className="text-[#f06424] font-bold">Divisions</h3>
          {/* <Divisions>{buttons}</Divisions> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-4">{buttons}</div>
          </div>
          {/* </DivisionsContainer> */}

          <div className="hidden md:block">
            <div className=" grid place-content-center">
              {/* <MapSide> */}
              <map name="image_map">{areas}</map>
              <img src={selectedCity.img} alt="Bangladesh" useMap="#image_map" />
              {/* </MapSide> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BDMap;

const Container = styled.div`
  display: flex;
  border: 3px solid black;
`;
const ButtonSide = styled.div`
  width: auto;
`;
const DivisionsContainer = styled.div`
  margin-left: 10px;
  padding: 10px;
`;
const Divisions = styled.div`
  width: 600px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
const MapSide = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  width: 400px;
  height: 600px;
`;
const Button = styled.button`
  cursor: pointer;
  transition: 0.5s;
  margin: 10px 10px;
  height: 55px;
  width: 120px;
`;

// Generate from https://imagemap.org/
// <area alt="Rangpur" title="Rangpur" onMouseEnter={()=>highlight("Rangpur")} href="" coords="91,72 307,150 283,274 162,224 146,197 111,199 45,100 " shape="polygon"/>
// <area alt="Rajshahi" title="Rajshahi" href="" coords="19,359 36,319 94,269 174,270 187,260 223,283 275,297 306,356 300,393 293,481 211,462 183,431 151,431 122,399 93,399" shape="polygon"/>
// <area alt="Dhaka" title="Dhaka" href="" coords="340,258 531,280 595,420 558,418 532,443 544,458 535,480 495,482 494,516 459,561 472,602 459,621 387,612 344,653 317,600 283,550 202,483 295,508 324,460 346,377 313,295 " shape="polygon"/>
// <area alt="Sylhet" title="Sylhet" href="" coords="569,276 571,301 614,370 611,404 629,433 669,437 758,386 791,304 819,298 755,269 681,278 597,268 " shape="polygon"/>
// <area alt="Khulna" title="Khulna" href="" coords="132,444 169,458 197,506 271,568 328,671 326,821 220,850 195,827 140,577 142,549 102,514 " shape="polygon"/>
// <area alt="Barisal" title="Barisal" href="" coords="394,829 357,790 356,670 399,628 473,641 531,733 499,811 454,836 " shape="polygon"/>
// <area alt="Chittagong" title="Chittagong" href="" coords="589,441 492,547 498,633 566,791 685,730 801,1007 803,895 873,929 794,527 748,531 715,642 663,650 644,610 617,623 598,558 575,516 608,461 " shape="polygon"/>

//Old
//Rangpur =

//New
// Rangpur=  137,145,153,128,151,92,141,73,135,89,108,85,97,59,89,74,75,62,56,42,55,65,42,81,36,100,56,113,65,129,83,131,96,141,113,157,138,160
// Rajshahi = 92,145,112,151,136,162,152,189,142,201,148,229,142,239,144,255,121,253,98,241,92,231,75,234,76,216,52,211,34,195,29,183,40,166,52,171,58,149,79,148
