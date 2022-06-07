import React,{ useState, useEffect } from 'react';
import { api } from "@configs/configs";
import styled from "styled-components";
import BikeCardForDetails from "../../components/BikeCard/BikeCardForDetails";

function BikeListByMakerAndPrice(props) {
    const [bikes, setBikes] = useState([]);
    let url = "";

    if (props.bike.bike_manufacturer.maker_name) {
        const maker = props.bike.bike_manufacturer.maker_name;
        url = "api/bikes/choose-by-brand/?brand_name=" + maker;
    
    }

    useEffect(() => {
        (async () => {
          await api.get(url).then((res) => {
            if (res.status === 200) {
              setBikes(res.data.results);
            }
          });
        })();
      }, []);

    return (
        <div>
            <Title>
                Related <span style={{ color: "#f06424" }}>Bike Listing</span>
            </Title>

            <BikeViewContainer>
                <BikeCards>
                    {bikes.length === 0 && <h1 style={{ marginLeft: "14px"}}>No more data to show</h1>}
                    {
                        bikes.filter((item,index) => index < 8).map((d,idx) => (
                            <BikeCardForDetails key={idx} bike={d}/>
                        ))
                    }
                </BikeCards>
            </BikeViewContainer>
        </div>
    )
}

const Title = styled.p`
  padding-top: 50px;
  margin-left: 20px;
  font-size: 20px;
  color: #000000;
  font-weight: 700;
  font-family: "Open Sans";
  padding-bottom: 15px;
  @media (max-width: 767px) {
    padding-top: 20px;
    padding-bottom: 10px;
  }
`;

const BikeViewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 40px;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media(max-width: 767px){
    margin-left: 0px;
  }
`;

const BikeCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  &.list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  &.grid {
    width: calc(100% + 30px);
    margin-left: -15px;
    margin-right: -15px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    justify-content: flex-start;

    @media (max-width: 767px) {
      justify-content: center;
    }
  }
`;
export default BikeListByMakerAndPrice
