/**
 * TODO Handle direct URL access (right click, new tab)
 */
import { api } from "@configs/configs";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import CarNameMobile from "components/CarDetails/CarNameMobile";
import React, { lazy, Suspense, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const CarName = lazy(() => import("@components/CarDetails/CarName"));
const CarDetailsCarousal = lazy(() =>
  import("@components/CarDetailsCarousal/CarDetailsCarousal")
);
const CarDetailsCard = lazy(() =>
  import("@components/CarDetails/CarDetailsCard")
);
const Features = lazy(() => import("@components/CarDetails/CarFeatures"));
const Details = lazy(() => import("@components/CarDetails/DetailsWithIcons"));
const OverView = lazy(() => import("@components/CarDetails/OverView"));
const Banner = lazy(() => import("@components/CarDetails/CarBanner"));
const AuthorCard = lazy(() => import("@components/AuthorCard/AuthorCard"));
const CarReviewVideo = lazy(() =>
  import("@components/CarReview/CarReviewVideo")
);
const Recently = lazy(() =>
  import("@components/CarDetails/CarListRecentlyAdded")
);
const SafetyTips = lazy(() => import("@components/SafetyTips/SafetyTips"));
const MailCarDetails = lazy(() =>
  import("@components/CarDetails/MailCarDetails")
);
const CarListByMakerAndPrice = lazy(() =>
  import("@components/CarDetails/CarListByMakerAndPrice")
);
const BhaloBuy = lazy(() => import("@components/BhaloBuy/BhaloBuy"));
const Article = lazy(() => import("@components/Article/"));

const renderLoader = () => <p>Loading</p>;

const CarDetailsDiv = styled.div`
  display: flex;
  margin-top: 25px;
  width: 100%;
  // border: 1px solid red;

  // @media(max-width: 1024px){
  //   margin-top: -4px;
  // }

  // @media(max-width: 768px){
  //   padding-left: 55px;
  // }

  // @media(max-width: 767px){
  //   padding-left: 0px;
  // }

  // @media(max-width: 375px){
  //   margin-left: -13px;
  // }
`;

const RowItems = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // align-items: center;
  // align-items: left;
  // padding: 0px 10px;
  width: 25%;
  // border: 1px solid red;
  & p {
    width: 100%;
  }
  & label {
    & span {
      font-size: 14px;
    }
  }
  .description {
    color: #000;
    font-size: 15px;
    padding-top: 5px;
  }

  @media (max-width: 600px) {
    width: 25%;
    margin: 11px;
    &::after {
      content: none;
    }
    &:nth-child(odd)::after {
      content: "";
      position: absolute;
      top: 20px;
      right: 0;
      left: inerit;
      height: 40px;
      width: 1px;
      background: #777;
    }
    // &:nth-child(even) {
    //   padding-left: 20px;
    // }
    // &:nth-child(odd) {
    //   padding-left: 0px;
    // }
  }

  @media (max-width: 425px) {
    .description {
      font-size: 12px;
    }
  }

  @media (max-width: 320px) {
    width: 50%;
    margin: 3px;

    &:nth-child(4) {
      margin-left: 15px;
    }
  }
`;

const RowText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  // margin: 0px;
  margin-right: 15%;
  // align-self: flex-start;
  padding-top: 5px;
  // & p {
  //   padding: 0px 5px;
  // }
  text-align: center;
`;

const Imgs = styled.img`
  height: 75px;
  width: 65px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  .exterior {
    height: 55px;
    margin-top: 14px;
    margin-bottom: 5px;
  }
  @media (max-width: 1024px) {
    height: 45px;
    // width: 45px;
  }
`;

const P = styled.p`
  font-size: 16px;
  width: 33%;
  color: #646464;
  font-weight: 600;
  font-family: "Open Sans";
  line-height: 1;
  // padding: 0px 10px;
  @media (max-width: 1024px) {
    font-size: 11px;
  }
  @media (max-width: 425px) {
    font-size: 12px;
  }
`;

const CarDetailsPage = (props) => {
  const history = useHistory();
  const [car, setCar] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let search_id;
  let id;
  let dataUrl;

  useEffect(() => {
    console.log("CarDetailsPage!!!!");
    console.group("CarDetailsPage");
    // TODO stop relying on history state
    // search_id = history.location.search !== "" ? history.location.search.split("=")[1] : "";
    if (history.location.search) {
      search_id = history.location.search.split("=")[1];
      id = search_id;
    } else if (history.location.state) {
      console.debug("history.location", history.location.state);
      id =
        search_id !== "" ? parseInt(search_id) : history.location.state.car_id;
    } else {
      console.debug("history.location", history.location);
      search_id =
        history.location.pathname !== ""
          ? history.location.pathname.split("=")[1]
          : "";
      id =
        search_id !== "" ? parseInt(search_id) : history.location.state.car_id;
    }

    dataUrl = "api/cars/details/" + id + "/";
    // console.debug("search_id", search_id);
    // console.debug(`id ${id}`);
    // console.debug(`url ${dataUrl}`);
    console.log(car);
    console.groupEnd();

    (async () => {
      await api
        .get(dataUrl)
        .then((res) => {
          if (res.status === 200) {
            setCar(res.data.result);
            setIsLoading(false);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    })();
  }, []);

  console.log(car);

  if (isLoading) return renderLoader;

  return (
    <div>
      <Suspense fallback={renderLoader()}>
        <DetailContainer maxWidth="lg" className="container">
          <Grid container>
            <Grid item xs={12} md={12} sm={12}>
              <CarName car={car} />
            </Grid>
          </Grid>

          <Grid container maxWidth="xl">
            <Grid item xs={12} sm={12} md={6}>
              <CarDetailsCarousal className="carousal" car={car} />
              <TotalImages>{car.images.length} photos</TotalImages>
              <CarNameMobile car={car} />
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <CarDetailsCard car={car} />
              <div className="ml-24 hidden  md:block">
                <AuthorCard
                  imageUrl={car.image_url}
                  name={car.created_by_name}
                  contactNumber={car.created_by_phone}
                  postDate={car.created_at.split(" ")[0]}
                  car_id={car.id}
                  merchant_id={car.created_by_id}
                  className=""
                />
              </div>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12} md={9}>
              <Features car={car} />
              <Details car={car} />

              <OverView car={car} />
              <Banner car={car} car_id={car.id} />
              <CarListByMakerAndPrice car={car} />
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              className="contents"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* <AuthorCard
                imageUrl={car.image_url}
                name={car.created_by_name}
                contactNumber={car.created_by_phone}
                postDate={car.created_at.split(" ")[0]}
                car_id={car.id}
                merchant_id={car.created_by_id}
              /> */}
              <CarReviewVideo car={car} />
              <Recently car={car} />
              <SafetyTips />
              <MailCarDetails car={car} />
            </Grid>
          </Grid>
        </DetailContainer>
        <BhaloBuy />
        <Article />
      </Suspense>
    </div>
  );
};

const TotalImages = styled.p`
  color: grey;
  padding-left: 20px;
  padding-top: 10px;
`;

// TODO unused
// const CarDetail = styled.div`
//   width: 65%;
//   display: flex;
//   flex-direction: column;
//   @media (max-width: 1023px) {
//     width: 100%;
//   }
// `;

// const Extras = styled.div`
//   width: 30%;
//   display: flex;
//   flex-direction: column;
//   @media (max-width: 1023px) {
//     width: 100%;
//   }
// `;

const DetailContainer = styled(Container)`
  &.container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    @media (max-width: 1023px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      // gap: 40px;
      box-sizing: border-box;
    }
  }

  @media (max-width: 375px) {
    &.contents {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default CarDetailsPage;
