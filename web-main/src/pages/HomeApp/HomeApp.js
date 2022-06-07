import React, { lazy, Suspense } from "react";
const HomeSlider = lazy(() => import("@components/HomeSlider"));
const ServiceGlance = lazy(() => import("@components/ServiceGlance"));

const renderLoader = () => (
  <div id="root">
    <div id="pre-loader">
      <p>Loading Website...</p>
      <img src="https://flevix.com/wp-content/uploads/2019/07/Ring-Loading-feature.gif" alt="Loading" />
    </div>
  </div>
);

function HomeApp() {
  return (
    <div>
      <Suspense fallback={renderLoader()}>
        <HomeSlider />
        <ServiceGlance />
      </Suspense>
    </div>
  );
}

export default HomeApp;
