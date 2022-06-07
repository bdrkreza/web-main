import CarCard from "@components/CarCard/UserUploadedCarCard";
import React, { useEffect, useState } from "react";
import { api } from "@configs/configs";
import styled from "styled-components";
import Pagination from "@components/Pagination/pagination";

export default function ProfileUploadedCars() {
  const [cars, setCars] = useState([]);
  const [count, setCount] = useState("0");
  const [list, setList] = useState(false);
  const user_id = localStorage.getItem("user_id");
  useEffect(() => {
    (async () => {
      await api.get("api/cars/user-car-list/?user_id="+ user_id).then((res) => {
        if (res.status === 200) {
          setCars(res.data.results);
          setCount(res.data.count);
        }
      });
    })();
  }, []);

  return (
    <UploadedCarDiv>
      <CarCards className={list ? "list" : "grid"}>
        {cars.length === 0 && (
          <h2>No Cars have been enlisted under this account</h2>
        )}
        {cars.length > 0 && (
          <Pagination
            data={cars}
            RenderComponent={CarCard}
            pageLimit={5}
            dataLimit={6}
            listView={list}
          />
        )}
      </CarCards>
    </UploadedCarDiv>
  );
}
const UploadedCarDiv = styled.div`
  width: 73%;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: -70px;
  }
`;
const CarCards = styled.div`
  border-radius: 10px;
  background: #fff;
  h2 {
    padding: 58px;
  }
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
