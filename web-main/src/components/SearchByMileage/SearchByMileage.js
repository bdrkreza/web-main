import React, { useState } from "react";
import { makeStyles, Container } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import styled, { css } from "styled-components";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useSessionStorage } from "react-use";

const useStyles = makeStyles((theme) => ({
  listRows: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  listStyle: {
    listStyleType: "none",
  },
  linkStyle: {
    textDecoration: "none",
  },
}));

const SearchByMileage = () => {
  const [active, setActive] = useState(0);
  const history = useHistory();
  const [searchState, setSearchState] = useSessionStorage("search-state", {});

  const [mileageList] = React.useState([
    { id: 1, mileage_from: 1, mileage_to: 10000 },
    { id: 2, mileage_from: 10000, mileage_to: 30000 },
    { id: 3, mileage_from: 30000, mileage_to: 50000 },
    { id: 4, mileage_from: 50000, mileage_to: 100000 },
    { id: 5, mileage_from: 100000, mileage_to: 150000 },
    { id: 6, mileage_from: 150000, mileage_to: 999999999999 },
  ]);

  const handleMileage = (item) => {
    setSearchState({
      mileage_from: item.mileage_from,
      mileage_to: item.mileage_to,
      mileageFlag: true,
    });
    history.push({
      pathname: "/searched-car-list",
      state: {
        mileage_from: item.mileage_from,
        mileage_to: item.mileage_to,
        mileageFlag: true,
      },
    });
    setActive(item.id);
  };

  return (
    <Container maxWidth="lg">
      <Div>
        <SectionTitle title1="Search by another" title2="Mileage Range" font={20} />
        <UL>
          {mileageList.map((item, index) => (
            <LI onClick={() => handleMileage(item)} key={index} active={active === item.id ? item.id : false}>
              {item.mileage_to !== 999999999999 && (
                <p>
                  {item.mileage_from} to {item.mileage_to} km
                </p>
              )}
              {item.mileage_to === 999999999999 && <p>{item.mileage_from} or above</p>}
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
    left: inerit;
    height: 20px;
    width: 1px;
    top: 0px;
    background: #777;
    @media (max-width: 1024px) {
      right: 0px;
    }
    @media (max-width: 768px) {
      right: -10px;
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
    width: 45%;
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

export default SearchByMileage;
