import {
  ABOUTUS,
  ALLMAKER,
  AUCTIONSHEETCHECK,
  BIKEPAGE,
  BIKEPREVIEW,
  BIKESEARCHPAGE,
  CARINSURANCE,
  CARLOAN,
  CARTPAGE,
  CHECKOUT,
  COMPARECAR,
  COMPAREBIKE,
  CONTACTUS,
  FAQSUPPORT,
  FEATUREDCARLIST,
  HOME,
  LOGIN,
  MORE,
  NEWS,
  OTPVERIFICATION,
  PAYMENTSTATUSPAGE,
  PREVIEW,
  PREVIEW_EASY,
  PRIVACYPOLICIES,
  PROFILEVIEW,
  RECONDITIONEDCARLIST,
  REFUNDPOLICY,
  RESEARCHARTICLES,
  SEARCHEDCARLIST,
  SEARCHPAGE,
  SELLCAR,
  SELLNOW,
  SERVICEREPAIR,
  TERMSCONDITIONS,
  UPLOADEDCARS,
  USEDCARLIST,
  USER_PROFILE,
  WARRANTIES,
  HOMEAPP,
  PASSWORD,
  CARUPDATE,
  SELLBIKE,
  MERCHANT
} from "./paths";
// import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

// Attempted to split build bundles, but did not work and raised more issues
// import loadable from "@loadable/component";  

import AboutUs from "@pages/AboutUs/AboutUs";
import AuctionSheetCheck from "@components/AuctionSheetCheck";
import AllMaker from "@pages/AllMaker";
import BikeDetailsPage from "@pages/BikeDetailsPage";
import BikePage from "@pages/BikePage";
import CarDetailsPage from "@pages/CarDetailsPage";
import CarInsurance from "@pages/CarInsurance";
import CarLoan from "@pages/CarLoan";
import CartPage from "@pages/CartPage";
import Checkout from "@pages/Checkout";
import CompareCar from "@pages/CompareCar";
import CompareBike from "@pages/CompareBike";
import ContactUs from "@pages/ContactUs";
import FaqSupport from "@pages/FaqSupport";
import FeaturedCarList from "@pages/FeaturedCarList";
import Home from "@pages/HomePage";
import LoginPage from "@pages/Login/";
import More from "@pages/More";
import News from "@components/News";
import OtpVerification from "@pages/OTPVerification/";
import PaymentStatus from "@pages/PaymentStatus";
import PrivacyPolicies from "@pages/PrivacyPolicies";
import Profile from "@components/Profile/Profile";
import ProfileView from "@pages/ProfileView";
import ProtectedRoute from "../components/ProtectedRoute";
import React from "react";
import ReconditionedCarList from "@pages/ReconditionedCarList";
import RefundPolicy from "@pages/RefundPolicy";
import ResearchCrticles from "@pages/ResearchCrticles";
import SearchPage from "@pages/SearchPage";
import SearchedBikeList from "@pages/SearchedBikeList";
import SearchedCarList from "@pages/SearchedCarList";
import SellCar from "@pages/SellCar";
import SellNow from "@components/SellNow/SellNow";
import ServiceRepairs from "@pages/ServiceRepairs";
import TermsConditions from "@pages/TermsConditions";
import UploadedCars from "@components/ProfileUploadedCars";
import UsedCarList from "@pages/UsedCarList";
import Warranties from "@pages/Warranties";
import HomeApp from "@pages/HomeApp";
import Password from "@pages/Password";
import CarUpdate from "@pages/CarUpdate";
import SellBike from "components/SellBike/SellBike";
import MerchantPage from "@pages/MerchantPage/MerchantPage";
// const AboutUs = loadable(() => import("@pages/AboutUs/AboutUs"));
// const AuctionSheetCheck = loadable(() => import("@components/AuctionSheetCheck"));
// const AllMaker = loadable(() => import("@pages/AllMaker"));
// const BikeDetailsPage = loadable(() => import("@pages/BikeDetailsPage"));
// const BikePage = loadable(() => import("@pages/BikePage"));
// const CarDetailsPage = loadable(() => import("@pages/CarDetailsPage"));
// const CarInsurance = loadable(() => import("@pages/CarInsurance"));
// const CarLoan = loadable(() => import("@pages/CarLoan"));
// const CartPage = loadable(() => import("@pages/CartPage"));
// const Checkout = loadable(() => import("@pages/Checkout"));
// const CompareCar = loadable(() => import("@pages/CompareCar"));
// const CompareBike = loadable(() => import("@pages/CompareBike"));
// const ContactUs = loadable(() => import("@pages/ContactUs"));
// const FaqSupport = loadable(() => import("@pages/FaqSupport"));
// const FeaturedCarList = loadable(() => import("@pages/FeaturedCarList"));
// const Home = loadable(() => import("@pages/HomePage"));
// const LoginPage = loadable(() => import("@pages/Login/"));
// const More = loadable(() => import("@pages/More"));
// const News = loadable(() => import("@components/News"));
// const OtpVerification = loadable(() => import("@pages/OTPVerification/"));
// const PaymentStatus = loadable(() => import("@pages/PaymentStatus"));
// const PrivacyPolicies = loadable(() => import("@pages/PrivacyPolicies"));
// const Profile = loadable(() => import("@components/Profile/Profile"));
// const ProfileView = loadable(() => import("@pages/ProfileView"));
// const ProtectedRoute = loadable(() => import("../components/ProtectedRoute"));
// const React = loadable(() => import("react"));
// const ReconditionedCarList = loadable(() => import("@pages/ReconditionedCarList"));
// const RefundPolicy = loadable(() => import("@pages/RefundPolicy"));
// const ResearchCrticles = loadable(() => import("@pages/ResearchCrticles"));
// const SearchPage = loadable(() => import("@pages/SearchPage"));
// const SearchedBikeList = loadable(() => import("@pages/SearchedBikeList"));
// const SearchedCarList = loadable(() => import("@pages/SearchedCarList"));
// const SellCar = loadable(() => import("@pages/SellCar"));
// const SellNow = loadable(() => import("@components/SellNow/SellNow"));
// const ServiceRepairs = loadable(() => import("@pages/ServiceRepairs"));
// const TermsConditions = loadable(() => import("@pages/TermsConditions"));
// const UploadedCars = loadable(() => import("@components/ProfileUploadedCars"));
// const UsedCarList = loadable(() => import("@pages/UsedCarList"));
// const Warranties = loadable(() => import("@pages/Warranties"));
// const HomeApp = loadable(() => import("@pages/HomeApp"));
// const Password = loadable(() => import("@pages/Password"));
// const CarUpdate = loadable(() => import("@pages/CarUpdate"));
// const SellBike = loadable(() => import("components/SellBike/SellBike"));

function Routes(props) {
  return (
    <Switch>
      <Route exact path={HOME}>
        <Home />
      </Route>
      <Route exact path={PASSWORD}>
        <Password />
      </Route>
      <ProtectedRoute exact path={SELLCAR}>
        <SellCar />
      </ProtectedRoute>
      <Route exact path={LOGIN} component={LoginPage} />
      <Route exact path={OTPVERIFICATION}>
        <OtpVerification />
      </Route>
      <Route exact path={FEATUREDCARLIST}>
        <FeaturedCarList />
      </Route>
      <Route exact path={RECONDITIONEDCARLIST}>
        <ReconditionedCarList />
      </Route>
      <Route exact path={USEDCARLIST}>
        <UsedCarList />
      </Route>
      <Route exact path={SEARCHPAGE}>
        <SearchPage />
      </Route>
      <ProtectedRoute exact path={SELLNOW} component={SellNow} />
      <ProtectedRoute exact path={USER_PROFILE} component={Profile} />
      <ProtectedRoute exact path={PROFILEVIEW} component={ProfileView} />
      <ProtectedRoute exact path={UPLOADEDCARS} component={UploadedCars} />
      <ProtectedRoute exact path={SELLBIKE}>
        <SellBike />
      </ProtectedRoute>
      <ProtectedRoute
        exact
        path={CARTPAGE}
        component={CartPage}
        serviceList={props.serviceList}
        removeService={props.removeService}
        totalCount={props.totalCount}
        totalPrice={props.totalPrice}
        decrementService={props.decrementService}
        addToCart={props.addToCart}
      />
      <ProtectedRoute
        exact
        path={CHECKOUT}
        component={Checkout}
        serviceList={props.serviceList}
        removeService={props.removeService}
        totalCount={props.totalCount}
        totalPrice={props.totalPrice}
        decrementService={props.decrementService}
      />
      <Route exact path={PREVIEW_EASY}>
        <CarDetailsPage />
      </Route>
      <Route exact path={PREVIEW}>
        <CarDetailsPage />
      </Route>
      <Route exact path={BIKEPREVIEW}>
        <BikeDetailsPage />
      </Route>
      <Route exact path={ABOUTUS}>
        <AboutUs />
      </Route>
      <Route exact path={TERMSCONDITIONS}>
        <TermsConditions />
      </Route>
      <Route exact path={PRIVACYPOLICIES}>
        <PrivacyPolicies />
      </Route>
      <Route exact path={REFUNDPOLICY}>
        <RefundPolicy />
      </Route>
      <Route exact path={CONTACTUS}>
        <ContactUs />
      </Route>
      <Route exact path={SEARCHEDCARLIST}>
        <SearchedCarList />
      </Route>
      <Route exact path={CARLOAN}>
        <CarLoan />
      </Route>
      <Route exact path={CARINSURANCE}>
        <CarInsurance />
      </Route>
      <Route exact path={SERVICEREPAIR}>
        <ServiceRepairs addToCart={props.addToCart} />
      </Route>
      <Route exact path={FAQSUPPORT}>
        <FaqSupport />
      </Route>
      <Route exact path={RESEARCHARTICLES}>
        <ResearchCrticles />
      </Route>
      <Route exact path={WARRANTIES}>
        <Warranties />
      </Route>
      <Route exact path={COMPARECAR}>
        <CompareCar />
      </Route>
      <Route exact path={COMPAREBIKE}>
        <CompareBike />
      </Route>
      <Route exact path={MORE}>
        <More />
      </Route>
      <Route exact path={ALLMAKER}>
        <AllMaker />
      </Route>
      <Route exact path={NEWS}>
        <News />
      </Route>
      <Route exact path={BIKEPAGE}>
        <BikePage />
      </Route>
      <ProtectedRoute exact path={AUCTIONSHEETCHECK} component={AuctionSheetCheck} />
      <ProtectedRoute exact path={PAYMENTSTATUSPAGE} component={PaymentStatus} />
      <Route exact path={BIKESEARCHPAGE}>
        <SearchedBikeList />
      </Route>
      <Route exact path={HOMEAPP}>
        <HomeApp />
      </Route>
      <Route exact path={MERCHANT}>
        <MerchantPage />
      </Route>

      <ProtectedRoute exact path={CARUPDATE}>
        <CarUpdate />
      </ProtectedRoute>
    </Switch>
  );
}

export default Routes;
