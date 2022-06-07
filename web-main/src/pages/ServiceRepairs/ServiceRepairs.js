import React, { useEffect, useState, lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import { Container, Dialog } from "@material-ui/core";
import styled from "styled-components";
// import { Container, Dialog, makeStyles } from "@material-ui/core";
// import { useForm } from "react-hook-form";
import { api } from "@configs/configs";
import auctionImg from "@assets/01.jpg";

const SectionTitle = lazy(() => import("@components/SectionTitle"));
const ServiceCard = lazy(() => import("@components/ServiceCard"));
const AuctionSheet = lazy(() => import("@components/AuctionSheet"));
const Service = lazy(() => import("@components/CarServiceSection/CarServiceSection"));
const Partners = lazy(() => import("@components/ServicePartners/ServicePartners"));
const ChooseSection = lazy(() => import("@components/ChooseUsSection/ChooseUsSection"));
const ServiceFAQ = lazy(() => import("@components/ServiceFAQ/ServiceFAQ"));
const ServiceCall = lazy(() => import("@components/ServicesCall/ServicesCall"));

// const useStyles = makeStyles((theme) => {});
// const useStyles = makeStyles(() => {});

function ServiceRepairs({ addToCart }) {
  /** @deprecated unused */
  // const classes = useStyles();
  // const [formOpen, setFormOpen] = useState(false);
  // const [title, setTitle] = useState("");
  // const [disable, setDisable] = useState(true);
  const disable = true;

  const [open, setOpen] = useState(false);
  const [services, setServices] = useState([]);
  const [serviceCards, setServiceCards] = useState([]);

  // console.log(services);
  const handleClickOpen = () => {
    setOpen(true);
  };

  /** @deprecated unused */
  // const handleFormOpen = (title) => {
  //   setTitle(title);
  //   setFormOpen(true);
  // };

  // const {
  //   register,
  //   formState: { errors },
  //   reset,
  // } = useForm({ mode: "onChange" });

  const handleClose = () => {
    // setFormOpen(false);
    setOpen(false);
  };

  useEffect(async () => {
    await api.get("api/services/service-product/").then((res) => {
      const services = res.data.result;
      setServices(services);

      const cards = services.map((service, i) => {
        // console.debug(service);
        return (
          <ServiceCard
            key={service.id}
            auctionImage={service.image_url}
            startFrom="Start from"
            AucTitle={service.name}
            serviceId={service.id}
            addToCart={addToCart}
            price={service.price}
          />
        );
      });

      setServiceCards(cards);
    });
  }, []);

  const renderLoader = () => <p>Loading</p>;

  return (
    <div>
      <Suspense fallback={renderLoader()}>
        <Helmet>
          <meta name="keywords" content="Car Servicing in Dhaka" />
          <meta
            name="description"
            content="@999Tk you will get >Shell lubricant >G scan >Oil filter*Service charge-free"
          />
        </Helmet>
        <ServiceMain>
          <Container>
            <SectionTitle title1="Bhalogari" title2="Car Servicing" />
            <ServiceItems>
              <ServiceCard
                modalClick={handleClickOpen}
                auctionImage={auctionImg}
                AucTitle="Verifying Auction Sheet"
                disable={disable}
                price={
                  <span>
                    <del>800.00</del> 699.00
                  </span>
                }
                AuctionSheet
              />
              {/* {serviceCards} */}

              <Dialog
                maxWidth="lg"
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <AuctionSheet />
              </Dialog>
            </ServiceItems>
          </Container>
        </ServiceMain>
        <Service />
        <Partners />
        <ChooseSection />
        <ServiceFAQ />
        <ServiceCall />
      </Suspense>
    </div>
  );
}
const ServiceMain = styled.div`
  background: #e8e8e8;
  padding-top: 230px;
  padding-bottom: 58px;
  @media (max-width: 1023px) {
    padding-top: 145px;
  }
  @media (max-width: 768px) {
    padding-top: 145px;
  }
  @media (max-width: 767px) {
    padding-top: 130px;
  }
  @media (max-width: 480px) {
    padding-bottom: 25px;
  }
`;
// const ServiceMainContainer = styled.div`
//   margin: auto;
// `;
const ServiceItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 480px) {
    justify-content: space-around;
  }
`;

export default ServiceRepairs;
