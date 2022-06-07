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

const SearchBySeat = () => {
  const classes = useStyles();
  const history = useHistory();
  const [active, setActive] = useState(0);
  const [searchState, setSearchState] = useSessionStorage("search-state", {});

  const [priceList] = React.useState([
    { id: 1, seating: 2 },
    { id: 2, seating: 4 },
    { id: 3, seating: 5 },
    { id: 4, seating: 7 },
    { id: 5, seating: 8 },
    { id: 6, seating: 10 },
  ]);

  const handleSeat = (item) => {
    setSearchState({ seating: item.seating, seatFlag: true });
    history.push({
      pathname: "/searched-car-list",
      state: { seating: item.seating, seatFlag: true },
    });
    setActive(item.id);
  };

  return (
    <Container maxWidth="lg">
      <Div>
        <SectionTitle title1="Search by another" title2="Seating Capacity" font={20} />
        <UL>
          {priceList.map((item, index) => (
            <LI onClick={() => handleSeat(item)} key={index} active={active === item.id ? item.id : false}>
              {`${item.seating} Seats`}
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
    right: -70px;
    top: 0px;
    left: inerit;
    height: 20px;
    width: 1px;
    background: #777;
    @media (max-width: 768px) {
      right: -20px;
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

export default SearchBySeat;
