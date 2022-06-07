import React, { useState } from "react";
import { makeStyles, Container } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import styled, { css } from "styled-components";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useSessionStorage } from "react-use";

const useStyles = makeStyles((theme) => ({
  linkStyle: {
    textDecoration: "none",
  },
}));

const SearchByEngine = () => {
  const [active, setActive] = useState(0);
  const history = useHistory();
  const [searchState, setSearchState] = useSessionStorage("search-state", {});

  const [capacityList] = React.useState([
    { id: 1, capacity_from: 1, capacity_to: 800 },
    { id: 2, capacity_from: 1000, capacity_to: 1499 },
    { id: 3, capacity_from: 1500, capacity_to: 1999 },
    { id: 4, capacity_from: 2000, capacity_to: 2499 },
    { id: 5, capacity_from: 2500, capacity_to: 2999 },
    { id: 6, capacity_from: 3000, capacity_to: 999999999999 },
  ]);

  const handleEngine = (item) => {
    setSearchState({
      capacity_from: item.capacity_from,
      capacity_to: item.capacity_to,
      engineFlag: true,
    });
    history.push({
      pathname: "/searched-car-list",
      state: {
        capacity_from: item.capacity_from,
        capacity_to: item.capacity_to,
        engineFlag: true,
      },
    });
    setActive(item.id);
  };
  return (
    <Container maxWidth="lg">
      <Div>
        <SectionTitle title1="Search by another" title2="Engine Capacity Range" font={20} />
        <UL>
          {capacityList.map((item, index) => (
            <LI onClick={() => handleEngine(item)} key={index} active={active === item.id ? item.id : false}>
              {item.capacity_to !== 999999999999 && (
                <p>
                  {item.capacity_from} to {item.capacity_to} km
                </p>
              )}
              {item.capacity_to === 999999999999 && <p>{item.capacity_from} or above</p>}
            </LI>
          ))}
        </UL>
      </Div>
    </Container>
  );
};
const Div = styled.div`
  margin-left: -20px;
  padding-top: 30px;
`;

const UL = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 20px;
`;
const LI = styled.li`
  color: #000;
  list-style-type: none;
  position: relative;
  ${(props) =>
    props.active &&
    css`
      background: white;
      color: #f06425;
    `};
  &::after {
    content: "";
    position: absolute;
    right: -50px;
    top: 0px;
    left: inerit;
    height: 20px;
    width: 1px;
    background: #777;
    @media (max-width: 1024px) {
      right: 20px;
    }
    @media (max-width: 768px) {
      right: -20px;
    }
    @media (max-width: 767px) {
      height: 40px;
      top: 0px;
    }
  }
  &:last-child {
    &::after {
      content: none;
    }
  }
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 1024px) {
    height: 30px;
    width: 30%;
    &:nth-child(3n) {
      &::after {
        content: none;
      }
    }
  }
  @media (max-width: 767px) {
    height: 50px;
    width: 40%;
    &:nth-child(3n) {
      &::after {
        content: "";
      }
    }
    &:nth-child(even) {
      &::after {
        content: none;
      }
    }
  }
`;

export default SearchByEngine;
