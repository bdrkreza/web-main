import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import React from "react";
import styled from "styled-components";

const BikeDetailsCarousal = (props) => {

  let images = props.bike.images.map((restaurant)=>{ return {original:restaurant.image_url,thumbnail:restaurant.image_url}});

  return (
    <Margintop150>
        <ImageGallery
          items={images}
          showNav={true}
          thumbnailPosition={"left"}
          showPlayButton={false}
          autoPlay={7000}
        />
    </Margintop150>
  );
};


const Margintop150 = styled.div`
      & .image-gallery-slides {
        border-radius: 10px;
      }
      & .image-gallery-thumbnail-image {
        border-radius: 10px;
        opacity: 0.5;
      }
      & .image-gallery-left-nav{
        color: black; 
        transform: rotate(90deg);
        left: -85px;
        top: -40px;
        & .image-gallery-svg{
          height: 40px;
          width: 40px;
        }
      }
      & .image-gallery-right-nav{
        color: black; 
        transform: rotate(90deg);
        bottom: -110px;
        left: -85px;
        & .image-gallery-svg{
          height: 40px;
          width: 40px;
        }
      }
      & .image-gallery-thumbnail.active {
        border: 4px solid transparent;
        & .image-gallery-thumbnail-image {
          opacity: 1;
        }
      }
      & .image-gallery-thumbnail.focus {
        border: 4px solid transparent;
        & .image-gallery-thumbnail-image {
          opacity: 1;
        }
      }
      @media (hover: hover) and (pointer: fine)
      {
        .image-gallery-thumbnail:hover {
            border: 4px solid transparent;
        }
      }

      @media(max-width: 425px){
        & .image-gallery-left-nav{
          top: -55px;
        }
        & .image-gallery-right-nav{
          bottom: -70px;
          left: -78px;
        }
      }

      @media(max-width: 375px){
        & .image-gallery-right-nav{
          bottom: -55px;
          left: -80px;
        }
      }

      @media(max-width: 320px){
        & .image-gallery-right-nav{
          bottom: -45px;
          left: -63px;
        }
      }
`;

export default BikeDetailsCarousal;
