import React from 'react';
import styled from "styled-components";
import {
    Checkbox,
    FormControlLabel,
  } from "@material-ui/core";

function MerchantMailDetails() {
  return (
    <Main>
        <Div>

            <RowItem>
                <FormControlLabel
                    control={<Checkbox name={0} />}
                    label="Request for quotation"
                />
            </RowItem>
            
            <RowItem>
                <FormControlLabel
                  control={<Checkbox name={1} />}
                  label="Check inventory"
                />
            </RowItem>
      
            <RowItem>
                <FormControlLabel
                  control={<Checkbox name={2} />}
                  label="Request to visit"
                />
            </RowItem>

            <RowItem>
                <FormControlLabel
                  control={<Checkbox name={4} />}
                  label="Status check"
                />
            </RowItem>

            <RowItem>
                <FormControlLabel
                  control={<Checkbox name={5} />}
                  label="Others"
                />
            </RowItem>

            <Buttons type="submit">Send Email</Buttons>
        </Div>
    </Main>
  )
}

const Main = styled.div`
//   width: 344px;
  margin-top: 20px;
  padding: 30px;
  display: flex;
  background-color: #fff1eb;
  border-radius: 5px;
  @media (max-width: 1024px) {
    // width: 290px;
  }
  @media (max-width: 767px) {
    margin-left: 0px;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media(max-width: 425px){
    margin-left: 0px;
    width: 100%;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    border-right: none;
    width: 100%;
    height: auto;
    padding-top: 20px;
  }

  @media(max-width: 425px){
    padding-top: 0px;
  }
`;

const RowItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  white-space: nowrap;
  & label{
    font-size: 13px;
    line-height: 16px;
    color: #646464;
    font-weight: 400;
  }
  @media (max-width: 600px) {
    width: 50%;
    margin: 0px;
    padding: 20px 0px;
  }

  @media(max-width: 425px){
    padding: 0px;
  }
`;

const Buttons = styled.button`
  margin-top: 4px;
  width: 260px;
  height: 46px;
  line-height: 42px;
  border-radius: 5px;
  border-color: transparent;
  background-color: #f06424;
  font-size: 16px;
  letter-spacing: 2px;
  color: #ffffff;
  font-weight: 700;
  text-transform: uppercase;

  @media(max-width: 1024px){
    width: 195px;
  }
  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

  }
`;

export default MerchantMailDetails