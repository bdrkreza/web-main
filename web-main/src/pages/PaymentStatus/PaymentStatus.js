import React, {Suspense, useEffect, useState} from "react";
import { Grid, Container } from "@material-ui/core";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import Success from "./icons/success.js";
import Failure from "./icons/Sad_Emoji.svg";
import Cancel from "./icons/cancel.js";
import { api, baseAPIURL } from "@configs/configs";

const renderLoader = () => <p>Loading</p>;

const PaymentStatus = () => {
  let query = new URLSearchParams(useLocation().search);
  const status = query.get("status");
  const [pdfUrl, setPdfUrl] = useState('');
  useEffect(() => {
    let chassis = query.get('req_chassis')? query.get('req_chassis'): localStorage.getItem('req_chassis')
    if (status === "success") {
      (async () => {
        // eslint-disable-next-line
        await api.post(`api/payment/create-pdf/?chassis_no=${chassis}`).then((res) => {
          setPdfUrl(res.data.pdf_url);
          console.log(res.data.pdf_url);
        });
      })();
    }
  }, []);

  const paymentStatus = [
    {
      key: "success",
      message1: "Thank You!",
      message2: "Your Payment is successful",
      message3: "Our representative will get in touch with you shortly.",
      message4: "*Also please check your Spam Mailbox, the report may accidentally be there.",
    },
    {
      key: "fail",
      message1: "Payment Failed",
      message2: "",
      message3: "Sorry, your payment was not successfully processed. Please contact our support team.",
    },
    {
      key: "cancel",
      message1: "Payment Cancelled",
      message2: "",
      message3: "Your order cancellation request has completed successfully.",
    },
  ];
  return (
    <Div>
      <Suspense fallback={renderLoader()}>
        <Container maxWidth="lg">
          <Grid container className="payment-status">
            {paymentStatus
              .filter((p) => p.key === status)
              .map((p) => (
                <>
                  {p.key === "success" && <Success />}
                  {p.key === "fail" && (
                    <div>
                      <img src={Failure} alt="" />
                    </div>
                  )}
                  {p.key === "cancel" && <Cancel />}
                  <h1>{p.message1}</h1>
                  <h3>{p.message2}</h3>
                  <p className="message3">{p.message3}</p>
                  {p.key === "success" && <p className="message4">{p.message4}</p>}
                  {p.key === "success" && (
                    <div>
                      <p>
                        You can also download the Auction Report from here{" "}
                        <a
                          style={{ color: "#f06425" }}
                          href={pdfUrl}
                        >
                          Download
                        </a>
                      </p>
                    </div>
                  )}
                  {p.key === "cancel" && (
                    <Link to="/service" className="back-home" style={{ margin: "10px auto" }}>
                      Back to car servicing
                    </Link>
                  )}
                  <p>
                    Having Trouble?
                    <span>
                      <Link to="contact-us">Contact Us</Link>
                    </span>
                  </p>
                </>
              ))}
            <Link to="/" className="back-home">
              Back to Homepage
            </Link>
          </Grid>
        </Container>
      </Suspense>
    </Div>
  );
};

const Div = styled.div`
  .payment-status {
    margin-top: 230px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    h1 {
      font-size: 40px;
      font-weight: 600;
      color: #000;
      margin-bottom: 0px;
    }
    h3 {
      font-size: 20px;
      font-weight: 600;
      color: #ff9654;
    }
    p {
      font-size: 18px;
      font-weight: 600;
      color: #b3b3b3;
      padding-top: 15px;
      position: relative;
      &:before {
        content: "";
        position: absolute;
        height: 1px;
        width: 100%;
        background-color: #bbb;
        left: 0;
        top: 10px;
        // margin: 0px -50px;
      }
      span {
        padding: 0px 5px;
        a {
          color: #f06425;
          text-decoration: none;
        }
      }
    }
    .message3 {
      &:before {
        content: none;
      }
    }
    .message4 {
      color: #ff9654;
    }
    .back-home {
      font-size: 14px;
      font-weight: 600;
      background-color: #f06425;
      color: #fff;
      margin: 30px;
      padding: 10px;
      text-decoration: none;
      border-radius: 5px;
    }
  }
`;

export default PaymentStatus;
