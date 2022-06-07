import React from "react";
import styled from "styled-components";
import Holder from "@assets/MobileHolder.svg";
import Call from "@assets/CallNow.svg";
import Icon from "@assets/MobileIcon.svg";

function ServicesCall() {
  return (
    <ServicesCallDiv>
      <div className="contact-info">
        <div className="headings">
          <h1>GET YOUR AUTO SERVICES AT HOME</h1>
        </div>
        <div className="number-holder">
          <a href="tel:+8801711234123">
            <img src={Icon} alt="mobile icon" />
            <div className="phone-number">+88 0171 1234 123</div>
          </a>
          {/* <img src={Call} alt="Call Now Icon" className="call-icon"/> */}
        </div>
      </div>
    </ServicesCallDiv>
  );
}

const ServicesCallDiv = styled.div`
    font-family: "Open Sans";
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    position: relative;
    min-height: 400px;
    :after{
        position: absolute;
        content: " ";
        left: 0;
        height: 100%;
        width: 50%;
        background-image: url(${Holder});
        background-repeat: no-repeat;
        background-position: center left;
        background-size: cover;
    }
    :before{
        position: absolute;
        content: " ";
        right: 0;
        height: 100%;
        width: 50%;
        background: #f06425;
    }
    .contact-info {
        width: 50%;
        position: absolute;
        right: 0;
        padding-left: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .headings{
        height: 100%;
        text-align: center;
        padding-bottom: 45px;
        max-width: 450px;
        h1{
            margin: 0;
            padding: 0;
            font-size: 34px;
            letter-spacing: 2px;
            line-height: 58px;
            color: #ffffff;
            font-weight: 700;
        }
    }
    .number-holder{
        position: relative;
        border-radius: 10px;
        background-color: #ffffff;
        flex-direction: row;
        width: 492px;
        align-items: center;
        justify-content: space-between;
        a{
            display: flex;
            padding: 10px 30px;
            text-decoration: none;
            &:before {
                position: absolute;
                content: "";
                top: -25px;
                left: 50%;
                margin-left: -70px;
                background-image: url(${Call});
                background-size: cover;
                width: 140px;
                height: 60px;
            }
            .phone-number{
                padding-left: 50px;
                font-size: 36px;
                line-height: 77px;
                color: #000000;
                font-weight: 700;
                position: relative;
                &:before{
                    position: absolute;
                    content: " ";
                    top: 15%;
                    left: 25px;
                    width: 1px;
                    height: 65%;
                    background: #c9c9c9;
                }
            }
        }
    }

    .call-icon{
        position: absolute;
        top: -50px;
        left: 95px;
    }

    @media(max-width: 1024px){

        .number-holder{
            padding: 4px 25px;
            width: 440px;
            a{
                padding: 4px 25px;
                .phone-number{
                    padding-left: 50px;
                    font-size: 26px;
                    line-height: 77px;
                    color: #000000;
                    font-weight: 700;
                    position: relative;
                }
            }
        }

    }

    @media(max-width: 768px){
        :after{
            position: absolute;
            content: " ";
            left: 0;
            height: 100%;
            width: 50%;
            background-image: url(${Holder});
            background-repeat: no-repeat;
            background-position: center right;
            background-size: cover;
        }
        .number-holder{
            padding: 4px 20px;
            width: 315px;
            img{
                margin-left: -25px;
            }
            a{
                padding: 4px 25px;
                .phone-number{
                    padding-left: 29px;
                    font-size: 19px;
                    line-height: 77px;
                    color: #000000;
                    font-weight: 700;
                    position: relative;
                    &:before{
                        position: absolute;
                        content: " ";
                        top: 15%;
                        left: 16px;
                        width: 1px;
                        height: 65%;
                        background: #c9c9c9;
                    }
                }
            }
            .call-icon{
                position: absolute;
                top: -49px;
                left: 47px;
            }
        }
    }



    @media(max-width: 767px){
        display: flex;
        justify-content: center;
        align-items: center;
        :after{
            display: none;
        }
        :before{
            width: 100%;
        }
        .contact-info {
            width: 100%;
        } 
    }
}

    @media(max-width: 425px){
        .number-holder{
            margin-left: -49px;
        }
    }

    @media(max-width: 375px){

        .headings{
            h1{
                font-size: 30px;
            }
        }
        .number-holder{
            padding: 7px 10px;
            width: 300px;
            a{
                .phone-number{
                    padding-left: 29px;
                    font-size: 20px;
                    line-height: 77px;
                    color: #000000;
                    font-weight: 700;
                    position: relative;
                    &:before{
                        position: absolute;
                        content: " ";
                        top: 19%;
                        left: 15px;
                        width: 1px;
                        height: 56%;
                        background: #c9c9c9;
                    }
                    
                }
                img{
                    margin-top: 10px;
                    height: 45px;
                }
            }

            .call-icon{
                position: absolute;
                top: -50px;
                left: 20px;
            }
        }
    }

    @media(max-width: 320px){
        .number-holder{
            padding: 7px 10px;
            width: 295px;
            a{
                .phone-number{
                    padding-left: 29px;
                    font-size: 20px;
                    line-height: 77px;
                    color: #000000;
                    font-weight: 700;
                    position: relative;
                    &:before{
                        position: absolute;
                        content: " ";
                        top: 19%;
                        left: 15px;
                        width: 1px;
                        height: 56%;
                        background: #c9c9c9;
                    }
                    
                }
                img{
                    margin-top: 10px;
                    height: 45px;
                }
            }

            .call-icon{
                position: absolute;
                top: -50px;
                left: 20px;
            }
        }
    }
`;

export default ServicesCall;
