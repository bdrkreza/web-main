import React, { lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
const BikePageSlider = lazy(() => import("@components/BikePageSlider"));
const PopularBrandBike = lazy(() => import("@components/PopularBrandBike"));
const WhySellBike = lazy(() => import("@components/WhySellBike"));
const SearchByType = lazy(() => import("@components/SearchByTypeBike"));
const SearchByBrand = lazy(() => import("@components/SearchByBrandBike"));
const WhatsNewBike = lazy(() => import("@components/WhatsNewBike"));
const ThreeSteps = lazy(() => import("@components/ThreeSimpleStepsBike"));
const BikePageFAQ = lazy(() => import("@components/BikePageFAQ"));
const Article = lazy(() => import("@components/Article/"));
// import BhaloAfterSalesWarranty from "../../components/BhaloAfterSalesWarranty/BhaloAfterSalesWarranty";
// import BhaloBuy from "../../components/BhaloBuy/BhaloBuy";
// import ServiceGlanceBike from "@components/ServiceGlanceBike";

const renderLoader = () => <p>Loading</p>;

export default function BikePage() {
  return (
    <React.Fragment>
      <Suspense fallback={renderLoader()}>
        <Helmet>
          <meta name="keywords" content="Buy and Sell Bike" />
          <meta name="description" content="Buy or sell your bike at the largest marketplace" />
        </Helmet>
        <BikePageSlider />
        <PopularBrandBike />
        <WhySellBike />
        <SearchByType />
        <SearchByBrand />
        <WhatsNewBike />
        <ThreeSteps />
        <BikePageFAQ />
        <Article />
      </Suspense>
    </React.Fragment>
  );
}
