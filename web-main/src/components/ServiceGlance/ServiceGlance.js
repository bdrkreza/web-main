import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AuctionSheet from "@components/AuctionSheet";
import { Dialog } from "@material-ui/core";
import NewCar from "@assets/new-section/car1.png";
import ReconCar from "@assets/new-section/car2.png";
import UsedCar from "@assets/new-section/car3.png";
import Bike from "@assets/new-section/bike.png";
import ImageLayer from "@assets/banner/auctionsheet.png";
import Service from "@assets/new-section/car-services.png";

const ServiceGlance = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [state, setState] = useState({
    mobileView: false,
  });
  const { mobileView } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 959.95
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const ServiceGlanceDesktop = () => {
    return <>{/* hello Desktop view */}</>;
  };
  const ServiceGlanceMobile = () => {
    return (
      <GlanceMain>
        <Link to="/new-car">
          <EachService>
            <img src={NewCar} alt="new car" />
            <p>New Car</p>
          </EachService>
        </Link>
        <Link to="/reconditioned-car">
          <EachService>
            <img src={ReconCar} alt="reconditioned car" />
            <p>Reconditioned Car</p>
          </EachService>
        </Link>
        <Link to="/used-car">
          <EachService>
            <img src={UsedCar} alt="used car" />
            <p>Used Car</p>
          </EachService>
        </Link>
        <Link to="/bikes">
          <EachService>
            <img src={Bike} alt="bikes car" />
            <p>Bikes</p>
          </EachService>
        </Link>
        <Link onClick={handleClickOpen}>
          <EachService>
            <img src={ImageLayer} alt=" Auction Sheet" />
            <p>Verify Auction Sheet</p>
          </EachService>
        </Link>
        <Link to="/service">
          <EachService>
            <img src={Service} alt="service car" />
            <p>Car Services</p>
          </EachService>
        </Link>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <AuctionSheet />
        </Dialog>
      </GlanceMain>
    );
  };
  return mobileView ? ServiceGlanceMobile() : ServiceGlanceDesktop();
};

const GlanceMain = styled.div`
  background: #efefef;
  padding: 20px 5%;
  display: block;
  > a {
    text-decoration: none;
    width: calc(50% - 20px);
    display: inline-block;
    margin: 10px 10px;
    border-radius: 10px;
    overflow: hidden;
    :nth-child(1) {
      background: #d6497a;
    }
    :nth-child(2) {
      background: #3b5fc8;
    }
    :nth-child(3) {
      background: #32c894;
    }
    :nth-child(4) {
      background: #3d98db;
    }
    :nth-child(5) {
      background: #8f5bef;
    }
    :nth-child(6) {
      background: #a66c5d;
    }
  }
`;
const EachService = styled.div`
  height: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  @media (max-width: 480px) {
    height: 130px;
  }
  img {
    width: 50%;
    height: auto;
    max-width: 150px;
  }
  p {
    text-align: center;
    font-size: 17px;
    line-height: 14px;
    color: #ffffff;
    font-weight: 700;
    padding-top: 15px;
    position: absolute;
    bottom: 14px;
    width: 100%;
    @media (max-width: 480px) {
      font-size: 13px;
    }
  }
`;

export default ServiceGlance;
