import React, { lazy, Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { api } from "@configs/configs";
const HomeSlider = lazy(() => import("@components/HomeSlider"));
const ServiceGlance = lazy(() => import("@components/ServiceGlance"));
const Trust = lazy(() => import("@components/BhaloTrust/trust"));
const ChooseByMaker = lazy(() => import("@components/ChooseByMaker/chooseByMaker"));
const ChooseByBodyType = lazy(() => import("@components/ChooseByBodyType/chooseByBodyType"));
const SearchBySpecification = lazy(() => import("@components/SearchBySpecification/searchBySpecification"));
const PopularBrand = lazy(() => import("@components/PopularBrand/PopularBrand"));
const FeaturedNewCar = lazy(() => import("@components/FeaturedCar/FeaturedNewCar"));
const ReconditionedCar = lazy(() => import("@components/ReconditionedCar/ReconditionedCar"));
const UsedCar = lazy(() => import("@components/UsedCar/UsedCar"));
const SellCarAtBestPrice = lazy(() => import("@components/SellCarAtBestPrice/sellCarAtBestPrice"));
const CustomerFeedback = lazy(() => import("@components/CustomerFeedback/CustomerFeedback"));
const CarReview = lazy(() => import("@components/CarReview/CarReview"));
const BhaloBuy = lazy(() => import("@components/BhaloBuy/BhaloBuy"));
const Article = lazy(() => import("@components/Article/Article"));

const renderLoader = () => <p>Loading</p>;

function Home() {
  const location = useLocation();
  const lang =
    sessionStorage.getItem("lang") && sessionStorage.getItem("lang") != "null" ? sessionStorage.getItem("lang") : "en";
  const [langVariables, setLangVariables] = useState(null);

  let pathname = location.pathname.slice(1);
  useEffect(() => {
    if (pathname == "") {
      pathname = "home";
    } else {
      pathname = pathname.replace("-", "_");
    }

    try {
      (async () => {
        await api
          .get("api/localization/lang-based-text/?language_code=" + lang + "&page_id=" + pathname)
          .then((res) => {
            sessionStorage.setItem("langVariables", JSON.stringify(res.data.result));
            setLangVariables(JSON.parse(sessionStorage.getItem("langVariables")));
          });
      })();
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div>
      <Suspense fallback={renderLoader()}>
        <Helmet>
          <meta
            name="keywords"
            content="Buy & Sell New Cars, Used cars, Reconditioned Cars in Bangladesh, Used Gari Kroy bikroy, Car Price, Car Servicing in Bangladesh"
          />
          <meta
            name="description"
            content="Bangladesh's #1 Automobile website. Buy and Sell New Cars, Used Cars, Second-hand cars, Japanese Reconditioned Cars, Used Motorbikes, Used Gari Kroy bikro in Dhaka, Bangladesh. Auto Parts & Car Accessories, Doorstep Car Servicing, Auction sheet, Compare Car, Second-hand cars in Dhaka."
          />
        </Helmet>
        <HomeSlider />
        <ServiceGlance />
        <PopularBrand />
        <Trust langVariables={langVariables} />
        <ChooseByMaker />
        <ChooseByBodyType />
        <SearchBySpecification langVariables={langVariables} />
        <FeaturedNewCar />
        <ReconditionedCar background="#efefef" />
        <UsedCar />
        {localStorage.getItem("user_id") === null && <SellCarAtBestPrice />}
        <CustomerFeedback langVariables={langVariables} />
        <CarReview langVariables={langVariables} />
        <BhaloBuy />
        <Article />
      </Suspense>
    </div>
  );
}

export default Home;
