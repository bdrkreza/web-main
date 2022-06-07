import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import styled from "styled-components";

function CarDetailsCarousal(props) {
  let images = props.car.images.map((restaurant) => {
    return { original: restaurant, thumbnail: restaurant };
  });
  const [state, setState] = React.useState({
    mobileView: false,
  });
  const { mobileView } = state;
  React.useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 767
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const MobileView = () => {
    return (
      <MargintopM>
        <ImageGallery
          items={images}
          showNav={true}
          thumbnailPosition={"bottom"}
          showPlayButton={false}
          autoPlay={7000}
        />
      </MargintopM>
    );
  };
  const DesktopView = () => {
    return (
      <>
        <Margintop150>
          <ImageGallery
            items={images}
            showNav={true}
            thumbnailPosition={"left"}
            showPlayButton={false}
            autoPlay={7000}
          />
        </Margintop150>
      </>
    );
  };

  return mobileView ? MobileView() : DesktopView();
}

const Margintop150 = styled.div`
  margin-top: 20px;

  & .image-gallery-slides {
    border-radius: 10px;
  }
  & .image-gallery-thumbnail-image {
    border-radius: 10px;
    opacity: 0.5;
  }
  & .image-gallery-left-nav {
    color: black;
    transform: rotate(90deg);
    left: -85px;
    top: -40px;
    & .image-gallery-svg {
      height: 40px;
      width: 40px;
    }
  }
  & .image-gallery-right-nav {
    color: black;
    transform: rotate(90deg);
    bottom: -110px;
    left: -85px;
    & .image-gallery-svg {
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
  @media (hover: hover) and (pointer: fine) {
    .image-gallery-thumbnail:hover {
      border: 4px solid transparent;
    }
  }

  @media (max-width: 425px) {
    & .image-gallery-left-nav {
      top: -55px;
    }
    & .image-gallery-right-nav {
      bottom: -70px;
      left: -78px;
    }
  }

  @media (max-width: 375px) {
    & .image-gallery-right-nav {
      bottom: -55px;
      left: -80px;
    }
  }

  @media (max-width: 320px) {
    & .image-gallery-right-nav {
      bottom: -45px;
      left: -63px;
    }
  }
`;

const MargintopM = styled.div`
  & .image-gallery-slides {
 
    border-radius: 10px;
    width: 100%;
  }
  & .image-gallery-thumbnail-image {
    border-radius: 1px;
    opacity: 0.5;
  }
  // & .image-gallery-left-nav {
  //   color: black;
  //   transform: rotate(90deg);
  //   left: 0px;
  //   top: 0px;
  //   & .image-gallery-svg {
  //     height: 0px;
  //     width: 0px;
  //   }
  // }
  // & .image-gallery-right-nav {
  //   color: black;
  //   transform: rotate(90deg);
  //   bottom: -110px;
  //   left: -85px;
  //   & .image-gallery-svg {
  //     height: 40px;
  //     width: 40px;
  //   }
  // }
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
  @media (hover: hover) and (pointer: fine) {
    .image-gallery-thumbnail:hover {
      border: 4px solid transparent;
    }
  }

  // @media (max-width: 425px) {
  //   & .image-gallery-left-nav {
  //     top: -55px;
  //   }
  //   & .image-gallery-right-nav {
  //     bottom: -70px;
  //     left: -78px;
  //   }
  // }

  // @media (max-width: 375px) {
  //   & .image-gallery-right-nav {
  //     bottom: -55px;
  //     left: -80px;
  //   }
  // }

  // @media (max-width: 320px) {
  //   & .image-gallery-right-nav {
  //     bottom: -45px;
  //     left: -63px;
  //   }
  }
`;

export default CarDetailsCarousal;
