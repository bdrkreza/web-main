import React, { useState } from "react";
import { Container } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import styled, { css } from "styled-components";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useSessionStorage } from "react-use";

const SearchByPrice = () => {
  const history = useHistory();
  const [active, setActive] = useState(false);
  const [searchState, setSearchState] = useSessionStorage("search-state", {});

  const [priceList] = useState([
    { id: 1, price: 1000000, priceShow: "1 - 10 Lacs" },
    { id: 2, price: 2000000, priceShow: "10 - 20 Lacs" },
    { id: 3, price: 3000000, priceShow: "20 - 30 Lacs" },
    { id: 4, price: 4000000, priceShow: "30 - 40 Lacs" },
    { id: 5, price: 5000000, priceShow: "40 - 50 Lacs" },
    { id: 6, price: 5100000, priceShow: "50 Lacs or Above" },
  ]);

  const handlePrice = (item) => {
    setSearchState({ price: item.price, priceFlag: true })
    history.push({
      pathname: "/searched-car-list",
      state: { price: item.price, priceFlag: true },
    });
    setActive(item.id);
  };

  return (
    <Container maxWidth="lg">
      <Div>
        <SectionTitle
          title1="Search by another"
          title2="Price Range"
          font={20}
        />
        <UL>
          {priceList.map((item, index) => (
            <LI
              onClick={() => handlePrice(item)}
              key={index}
              active={active === item.id ? item.id : false}
            >
              {item.priceShow}
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
    background: #777;
    @media (max-width: 768px) {
      right: -10px;
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
  @media (max-width: 767px) {
    height: 30px;
    width: 40%;
    &:nth-child(even) {
      &::after {
        content: none;
      }
    }
  }
`;

export default SearchByPrice;
