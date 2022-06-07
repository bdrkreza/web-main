import React from "react";
import styled from "styled-components";
import Car from "../../assets/11-2-car-picture.png";
import { Link } from "react-router-dom";
import _ from "lodash";
import RatingStar from "../../components/RatingStar/RatingStar";

/**
 * TODO <Link> should link to the car detail page.
 */
function CompareCard() {
  return (
    <CompareDiv>
      <div className="car-details">
        <div className="items">
          {/* <Link> */}
            <div className="image-section">
              <img src={Car} alt="Car" />
              <span className="body-type">SUV</span>
            </div>
          {/* </Link> */}

          <div className="car-description">
            {/* <Link> */}
              <h4>Vauxhall</h4>
              <h3>Mokka-e</h3>
            {/* </Link> */}

            <div className="description">
              <p>A stylish small electric Hatchback with power inside</p>
            </div>

            <div className="ratings">
              {_.range(4).map((star) => (
                <RatingStar key={star} />
              ))}
              <p>8/10</p>
            </div>
          </div>
        </div>

        <div className="items">
          {/* <Link> */}
            <div className="image-section">
              <img src={Car} alt="Car" />
              <span className="body-type">SUV</span>
            </div>
          {/* </Link> */}

          <div className="car-description">
            {/* <Link> */}
              <h4>Vauxhall</h4>
              <h3>Mokka-e</h3>
            {/* </Link> */}

            <div className="description">
              <p>A stylish small electric Hatchback with power inside</p>
            </div>

            <div className="ratings">
              {_.range(4).map((star) => (
                <RatingStar key={star} />
              ))}
              <p>8/10</p>
            </div>
          </div>
        </div>
      </div>

      <div className="compare-text">
        {/* <Link> */}
        Compare Vauxhall Mokka-e vs Audi A4 &gt;
        {/* </Link> */}
      </div>
    </CompareDiv>
  );
}

const CompareDiv = styled.div`
  font-family: "Open Sans";
  border: 1px solid #d8d8d8;

  .car-details {
    display: flex;
    .items {
      width: 50%;
      display: flex;
      flex-direction: column;
      position: relative;
      &:not(:last-child):before {
        position: absolute;
        content: " ";
        top: 0%;
        left: 281px;
        width: 1px;
        height: 100%;
        background: #a5a5a5;
      }
      a {
        text-decoration: none;
      }
      .image-section {
        padding: 32px 30px;
        position: relative;
        img {
          height: 111px;
        }
        .body-type {
          position: absolute;
          top: 15px;
          left: 15px;
          background: #24d1f0;
          border-radius: 20px;
          padding: 5px 12px;
          font-size: 14px;
          line-height: 16px;
          color: #ffffff;
          font-weight: 400;
        }
      }
      .car-description {
        padding-left: 15px;
        a {
          h4 {
            font-size: 14px;
            line-height: 24px;
            color: #555555;
            font-weight: 600;
          }
          h3 {
            font-size: 18px;
            line-height: 24px;
            color: #f06424;
            font-weight: 700;
          }
        }
        .description {
          width: 250px;
          p {
            font-size: 13px;
            line-height: 24px;
            color: #555555;
            font-weight: 400;
          }
        }
        .ratings {
          display: flex;
          padding-top: 10px;
          padding-bottom: 35px;
          p {
            padding-top: 5px;
            padding-left: 15px;
            font-size: 14px;
            line-height: 14px;
            color: #000000;
            font-weight: 400;
          }
        }
      }
    }
  }

  .compare-text {
    border: 1px solid #a5a5a5;
    height: 50px;
    display: flex;
    align-items: center;
    a {
      padding-left: 20px;
      text-decoration: none;
      font-size: 18px;
      line-height: 24px;
      color: #000000;
      font-weight: 700;
    }
  }

  @media (max-width: 1024px) {
    .car-details {
      width: 450px;
      display: flex;
      justify-content: space-between;
      .items {
        width: 50%;
        &:not(:last-child):before {
          left: 225px;
        }
        .image-section {
          padding: 23px 40px;
          position: relative;
          img {
            height: 85px;
          }
        }
        .car-description {
          .description {
            width: 225px;
          }
          .ratings {
            padding-bottom: 30px;
          }
        }
      }
    }

    .compare-text {
      border: 1px solid #a5a5a5;
      a {
        font-size: 14px;
      }
    }
  }

  @media (max-width: 768px) {
    .car-details {
      width: 350px;
      display: flex;
      justify-content: space-between;
      .items {
        width: 50%;
        &:not(:last-child):before {
          left: 173px;
        }
        .image-section {
          padding: 23px 20px;
          position: relative;
          img {
            height: 65px;
          }
          .body-type {
            padding: 2px 8px;
            font-size: 10px;
          }
        }
        .car-description {
          padding-left: 9px;
          .description {
            width: 160px;
            p {
              font-size: 15px;
            }
          }
          .ratings {
            padding-bottom: 30px;
          }
        }
      }
    }
  }

  @media (max-width: 767px) {
    margin-top: 25px;
    .car-details {
      padding-top: 5px;
      width: 100%;
      .items {
        width: 50%;
        &:not(:last-child):before {
          left: 180px;
        }
      }
    }
  }

  @media (max-width: 600px) {
    .car-details {
      padding-top: 5px;
      width: 100%;
      .items {
        width: 50%;
        &:not(:last-child):before {
          left: 275px;
        }
        .image-section {
          padding: 26px 42px;
          position: relative;
          img {
            height: 90px;
          }
        }
        .car-description {
          .description {
            width: 270px;
            p {
              font-size: 15px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 540px) {
    .car-details {
      .items {
        &:not(:last-child):before {
          left: 237px;
        }
        .image-section {
          padding: 26px 42px;
          position: relative;
          img {
            height: 65px;
          }
        }
        .car-description {
          .description {
            width: 225px;
            p {
              font-size: 15px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 480px) {
    .car-details {
      .items {
        &:not(:last-child):before {
          left: 217px;
        }
        .car-description {
          .description {
            width: 205px;
            p {
              font-size: 15px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 425px) {
    .car-details {
      .items {
        &:not(:last-child):before {
          left: 185px;
        }
        .car-description {
          .description {
            width: 175px;
            p {
              font-size: 15px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 375px) {
    .car-details {
      .items {
        &:not(:last-child):before {
          left: 168px;
        }
        .image-section {
          padding: 25px 25px;
          position: relative;
          img {
            height: 65px;
          }
        }
        .car-description {
          .description {
            width: 160px;
          }
        }
      }
    }
  }

  @media (max-width: 360px) {
    .car-details {
      .items {
        &:not(:last-child):before {
          left: 167px;
        }
        .car-description {
          .description {
            width: 170px;
            p {
              font-size: 14px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 320px) {
    .car-details {
      .items {
        &:not(:last-child):before {
          left: 145px;
        }
        .image-section {
          padding: 21px 20px;
          position: relative;
          img {
            height: 60px;
          }
        }
        .car-description {
          .description {
            width: 135px;
            p {
              font-size: 11px;
            }
          }
          .ratings {
            p {
              margin-left: -10px;
            }
          }
        }
      }
    }

    .compare-text {
      a {
        font-size: 12px;
      }
    }
  }

  @media (max-width: 280px) {
    .car-details {
      .items {
        &:not(:last-child):before {
          left: 123px;
        }
        .image-section {
          padding: 39px 15px;
          position: relative;
          img {
            height: 45px;
          }
        }
        .car-description {
          padding-left: 5px;
          .description {
            width: 120px;
            p {
              font-size: 11px;
            }
          }
          .ratings {
            p {
              font-size: 10px;
              margin-left: -15px;
            }
          }
        }
      }
    }

    .compare-text {
      a {
        font-size: 10px;
      }
    }
  }
`;

export default CompareCard;
