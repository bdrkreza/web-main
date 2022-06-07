import React from "react";
import styled from "styled-components";

function AddressForm(props) {
  return (
    <AddressDiv>
      {props.formdata.map((item, i) => (
        <div
          className="information"
          key={i}
          style={{ border: props.click === i ? "2px solid #ff7c40" : "none" }}
        >
          <div className="name">
            <h4>
              {item.first_name} {item.last_name}
            </h4>
          </div>
          <div className="info">
            <p>{item.mobile}</p>
            <p>{item.email}</p>
            <p>{item.address}</p>
            <div className="car-info">
              <p>{item.make}</p>
              <p>{item.model}</p>
              <p>{item.year}</p>
            </div>
          </div>
          {props.click !== i && (
            <button
              variant="outlined"
              onClick={() => {
                props.selectAddress(i);
                props.setNewAddress(item);
              }}
            >
              Ship Here
            </button>
          )}
        </div>
      ))}
    </AddressDiv>
  );
}

const AddressDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  .information {
    position: relative;
    padding: 10px;
    width: calc(33% - 10px);
    @media (max-width: 1023px) {
      width: calc(50% - 10px);
    }
    @media (max-width: 767px) {
      width: 100%;
    }
    button {
      background-color: #e2e2e2;
      border: none;
      margin-top: 10px;
      padding: 8px 5px;
      border-radius: 2px;
      color: #3a3a3a;
      font-size: 12px;
      width: 86px;
      :hover {
        background-color: #f06425;
        color: #fff;
        transition: all 0.3s ease-in-out;
      }
    }
    :hover {
      border: 1px solid #ff7c40;
    }
  }
  .info {
    padding-top: 5px;
    > p {
      padding-top: 3px;
      font-size: 14px;
    }
    .car-info {
      padding-top: 3px;
      display: flex;
      p {
        padding-right: 5px;
        font-size: 14px;
      }
    }
  }
`;

export default AddressForm;
