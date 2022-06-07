import React, { useEffect, useState, lazy, Suspense } from "react";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { api } from "@configs/configs";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
const BikeName = lazy(() => import("@components/BikeDetails/BikeName"));
const BikeDetailsCarousal = lazy(() => import("@components/BikeDetailsCarousal/BikeDetailsCarousal"));
const BikeDetailsCard = lazy(() => import("@components/BikeDetails/BikeDetailsCard"));
const Features = lazy(() => import("@components/BikeDetails/BikeFeatures"));
const DetailsWithIcons = lazy(() => import("@components/BikeDetails/DetailsWithIcons"));
const Banner = lazy(() => import("@components/BikeDetails/BikeBanner"));
const OverView = lazy(() => import("@components/BikeDetails/OverView"));
const AuthorCard = lazy(() => import("@components/AuthorCard/AuthorCard"));
const Review = lazy(() => import("@components/BikeReview/BikeReviewVideo"));
const MailBikeDetails = lazy(() => import("@components/BikeDetails/MailBikeDetails"));
const SafetyTips = lazy(() => import("@components/SafetyTips/SafetyTips"));
const Article = lazy(() => import("@components/Article/"));
const BikeListByMakerAndPrice = lazy(() => import("@components/BikeDetails/BikeListByMakerAndPrice"));

//bike_video_link
const renderLoader = () => <p>Loading</p>;

function BikeDetailsPage() {
  const history = useHistory();
  const [bike, setbike] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let search_id = history.location.search !== "" ? history.location.search.split("=")[1] : "";
  const id = search_id !== "" ? parseInt(search_id) : history.location.state.bike_id;
  // const url = "api/cars/details/" + id + "/";
  // const id = history.location.state.bike_id
  const url = "api/bikes/details/" + id + "/";

  useEffect(() => {
    (async () => {
      await api
        .get(url)
        .then((res) => {
          if (res.status === 200) {
            setbike(res.data.res[0]);
            setIsLoading(false);
          }
        })
        .catch((err) => {
          // setIsLoading(true)
          console.error(err);
        });
    })();
  }, []);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div>
      <Suspense fallback={renderLoader()}>
        <DetailContainer maxWidth="lg" className="container">
          <Grid container>
            <Grid item xs={12} md={12} sm={12}>
              <BikeName bike={bike} />
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12} sm={12} md={6}>
              <BikeDetailsCarousal className="carousal" bike={bike} />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              {/* <CarDetailsCard car={car} /> */}
              <BikeDetailsCard bike={bike} />
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12} md={9}>
              <Features bike={bike} />
              <OverView bike={bike} />
              <DetailsWithIcons bike={bike} />
              <Banner bike={bike} bike_id={bike.bike_id} />
              {/* <CarListByMakerAndPrice car={car}/> */}
              <BikeListByMakerAndPrice bike={bike} />
            </Grid>
            <Grid item xs={12} md={3} className="contents">
              <AuthorCard
                imageUrl={bike.image_url}
                name={bike.author}
                contactNumber={bike.contact_number}
                postDate={bike.created_at.split("T")[0]}
              />
              <Review bike={bike} />
              <SafetyTips />
              <MailBikeDetails bike={bike} />
              {/* <bikeReviewVideo bike={bike} /> */}
              {/* 
              <CarReviewVideo car={car}/>
              <Recently car={car}/>
              <MailCarDetails car={car}/> */}
            </Grid>
          </Grid>

          {/* <BikeDetail>
            <Details bike={bike}></Details>
          </BikeDetail>
          <Extras>
            <AuthorCard
              imageUrl={bike.image_url}
              name={bike.author}
              contactNumber={bike.contact_number}
              postDate={bike.created_at.split("T")[0]}
            />
            <bikeReviewVideo bike={bike} />
            <SafetyTips />
          </Extras> */}
        </DetailContainer>
        <Article />
      </Suspense>
    </div>
  );
}

const BikeDetail = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  @media (max-width: 1023px) {
    width: 100%;
  }
`;

const Extras = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  @media (max-width: 1023px) {
    width: 100%;
  }
`;

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
`;

export default BikeDetailsPage;
