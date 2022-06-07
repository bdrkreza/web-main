import React from "react";
import styled from "styled-components";
import Title from "../SectionTitle/SectionTitle";
import { Container } from "@material-ui/core";

const RefundPolicyTexts = (props) => {
  return (
    <RefundPolicyDiv>
      <Container maxWidth="lg">
        <div className="contents">
          <div className="texts">
            <div className="policies">
              <div className="point-description">
                <p>
                  {props.langVariables !== null
                    ? props.langVariables["rp_refund_pol_desc"]
                      ? props.langVariables["rp_refund_pol_desc"].lang_content
                      : "We thank you and appreciate your purchase with us. "
                    : "We thank you and appreciate your purchase with us. "}
                </p>
                <p>
                  {props.langVariables !== null
                    ? props.langVariables["rp_refund_policy_one"]
                      ? props.langVariables["rp_refund_policy_one"].lang_content
                      : "If due to any reason, unavoidable circumstances or beyond the limitations \n" +
                        "                                    of the Bhalogari.com (Bhalo Ventures Ltd.), the order is not fulfilled by \n" +
                        "                                    Bhalogari.com, then the order shall be cancelled and refunded (in terms of \n" +
                        "                                    the service centric items listed on our website)."
                    : "If due to any reason, unavoidable circumstances or beyond the limitations \n" +
                      "                                    of the Bhalogari.com (Bhalo Ventures Ltd.), the order is not fulfilled by \n" +
                      "                                    Bhalogari.com, then the order shall be cancelled and refunded (in terms of \n" +
                      "                                    the service centric items listed on our website)."}
                </p>
              </div>
            </div>

            <div className="policies">
              <Title
                title1={
                  props.langVariables !== null
                    ? props.langVariables["conditions"]
                      ? props.langVariables["conditions"].lang_content
                      : "Conditions"
                    : "Conditions"
                }
              />
              <div className="point-description">
                <p>
                  {props.langVariables !== null
                    ? props.langVariables["rp_conditions_one"]
                      ? props.langVariables["rp_conditions_one"].lang_content
                      : "1. Established defect in the product/service."
                    : "1. Established defect in the product/service."}
                </p>
                <p>
                  {props.langVariables !== null
                    ? props.langVariables["rp_conditions_two"]
                      ? props.langVariables["rp_conditions_two"].lang_content
                      : "2. Correct service was not deployed"
                    : "2. Correct service was not deployed"}
                </p>
              </div>
            </div>

            <div className="policies">
              <div className="point-description">
                <p>
                  {" "}
                  {props.langVariables !== null
                    ? props.langVariables["rp_event_disburse"]
                      ? props.langVariables["rp_event_disburse"].lang_content
                      : "In the event of disbursement of an erroneous product, we assure \n" +
                        "                                  product/service warranty for a period of time (in terms of the products \n" +
                        "                                  displayed on our site for purchase). "
                    : "In the event of disbursement of an erroneous product, we assure \n" +
                      "                                  product/service warranty for a period of time (in terms of the products \n" +
                      "                                  displayed on our site for purchase). "}
                </p>
              </div>
            </div>

            <div className="policies">
              <div className="point-description">
                <p>
                  {props.langVariables !== null
                    ? props.langVariables["rp_discre_buy"]
                      ? props.langVariables["rp_discre_buy"].lang_content
                      : "In discretion of buying/selling from or with Bhalogari.com – Bhalogari.com \n" +
                        "                                    is not held liable or legally obligated to restitute/compensate or pay any \n" +
                        "                                    refund for a faulty vehicle offered by an authorized seller on our website.\n" +
                        "                                    Bhalogari.com solely serves as the connector between the buyer and seller."
                    : "In discretion of buying/selling from or with Bhalogari.com – Bhalogari.com \n" +
                      "                                    is not held liable or legally obligated to restitute/compensate or pay any \n" +
                      "                                    refund for a faulty vehicle offered by an authorized seller on our website.\n" +
                      "                                    Bhalogari.com solely serves as the connector between the buyer and seller."}
                </p>
              </div>
            </div>

            <div className="policies">
              <div className="point-description">
                <p>
                  {props.langVariables !== null
                    ? props.langVariables["rp_one_veh_ins"]
                      ? props.langVariables["rp_one_veh_ins"].lang_content
                      : "1. However, we provide vehicle inspection as a value-added service and an \n" +
                        "                                    interested buyer may choose to take our expert opinion prior to making any \n" +
                        "                                    purchase"
                    : "1. However, we provide vehicle inspection as a value-added service and an \n" +
                      "                                    interested buyer may choose to take our expert opinion prior to making any \n" +
                      "                                    purchase"}
                </p>
                <p>
                  {props.langVariables !== null
                    ? props.langVariables["rp_two_veh_warr"]
                      ? props.langVariables["rp_two_veh_warr"].lang_content
                      : "2. Vehicles with warranty- If any of the vehicles listed on our website \n" +
                        "                                    states that it comes with After Sales Warranty, the needful procedure will \n" +
                        "                                    be conducted by Bhalogari.com as per the company policy. "
                    : "2. Vehicles with warranty- If any of the vehicles listed on our website \n" +
                      "                                    states that it comes with After Sales Warranty, the needful procedure will \n" +
                      "                                    be conducted by Bhalogari.com as per the company policy. "}
                </p>
              </div>
            </div>

            <div className="policies">
              <div className="point-description">
                <p>
                  {props.langVariables !== null
                    ? props.langVariables["rp_order_cancel"]
                      ? props.langVariables["rp_order_cancel"].lang_content
                      : "The order cancelled must accompany all the accessories (including \n" +
                        "                                       free items) which were serviced along with the order else the cost \n" +
                        "                                       of the accessories shall be recovered from the refund amount."
                    : "The order cancelled must accompany all the accessories (including \n" +
                      "                                       free items) which were serviced along with the order else the cost \n" +
                      "                                       of the accessories shall be recovered from the refund amount."}
                </p>
                <p>
                  {props.langVariables !== null
                    ? props.langVariables["rp_order_cancel2"]
                      ? props.langVariables["rp_order_cancel2"].lang_content
                      : "Any charges associated with tax is not eligible for refund"
                    : "Any charges associated with tax is not eligible for refund"}
                </p>
                <p>
                  {props.langVariables !== null
                    ? props.langVariables["rp_order_cancel3"]
                      ? props.langVariables["rp_order_cancel3"].lang_content
                      : "Tk 100 cancellation fee for services that are not cancelled within 6 hours."
                    : "Tk 100 cancellation fee for services that are not cancelled within 6 hours."}
                </p>
                <p>
                  {props.langVariables !== null
                    ? props.langVariables["rp_order_cancel4"]
                      ? props.langVariables["rp_order_cancel4"].lang_content
                      : "Note: Any Gift coupon circulated as promotional offer would not be refunded in case of \n" +
                        "                                      cancellation of the order."
                    : "Note: Any Gift coupon circulated as promotional offer would not be refunded in case of \n" +
                      "                                      cancellation of the order."}
                </p>
              </div>
            </div>

            <div className="policies">
              <Title
                title1={
                  props.langVariables !== null
                    ? props.langVariables["rp_refund_proc"]
                      ? props.langVariables["rp_refund_proc"].lang_content
                      : "Refund Process"
                    : "Refund Process"
                }
              />
              <div className="point-description">
                <p>
                  {props.langVariables !== null
                    ? props.langVariables["rp_refund_proc_one"]
                      ? props.langVariables["rp_refund_proc_one"].lang_content
                      : " 1. Please connect with our customer care via email or call."
                    : " 1. Please connect with our customer care via email or call."}
                </p>
                <p>
                  {props.langVariables !== null
                    ? props.langVariables["rp_refund_proc_two"]
                      ? props.langVariables["rp_refund_proc_two"].lang_content
                      : "2. The customer care team will validate the request by checking the \n" +
                        "                                        timelines, product type, warranty terms, etc and shall take the request \n" +
                        "                                        for refund or exchange."
                    : "2. The customer care team will validate the request by checking the \n" +
                      "                                        timelines, product type, warranty terms, etc and shall take the request \n" +
                      "                                        for refund or exchange."}
                </p>
                <p style={{ paddingTop: "5px" }}>
                  <strong>
                    {props.langVariables !== null
                      ? props.langVariables["rp_refund_app"]
                        ? props.langVariables["rp_refund_app"].lang_content
                        : "Refund is applicable when"
                      : "Refund is applicable when"}
                  </strong>
                </p>
                <p>
                  {props.langVariables !== null
                    ? props.langVariables["rp_refund_app_one"]
                      ? props.langVariables["rp_refund_app_one"].lang_content
                      : "1. Established defect in the product/service."
                    : "1. Established defect in the product/service."}
                </p>
                <p style={{ paddingBottom: "5px" }}>
                  {props.langVariables !== null
                    ? props.langVariables["rp_refund_app_two"]
                      ? props.langVariables["rp_refund_app_two"].lang_content
                      : " 2. Correct service was not deployed"
                    : " 2. Correct service was not deployed"}
                </p>
              </div>
            </div>

            <div className="policies">
              <div className="point-description">
                <p>
                  {props.langVariables !== null
                    ? props.langVariables["rp_event_erroneous"]
                      ? props.langVariables["rp_event_erroneous"].lang_content
                      : "In the event of an erroneous product, we assure product/service warranty for a \n" +
                        "                                        period of time (in terms of the products displayed on our site for purchase)."
                    : "In the event of an erroneous product, we assure product/service warranty for a \n" +
                      "                                        period of time (in terms of the products displayed on our site for purchase)."}
                </p>
                <p>
                  {props.langVariables !== null
                    ? props.langVariables["rp_event_erroneous2"]
                      ? props.langVariables["rp_event_erroneous2"].lang_content
                      : "However, we provide vehicle inspection as a value added service and an \n" +
                        "                                        interested buyer may choose to take our expert opinion prior to making \n" +
                        "                                        any purchase. "
                    : "However, we provide vehicle inspection as a value added service and an \n" +
                      "                                        interested buyer may choose to take our expert opinion prior to making \n" +
                      "                                        any purchase. "}
                </p>
                <p>
                  {props.langVariables !== null
                    ? props.langVariables["rp_event_erroneous3"]
                      ? props.langVariables["rp_event_erroneous3"].lang_content
                      : " Vehicles with warranty- If any of the vehicles listed on our website states that \n" +
                        "                                        it comes with After Sales Warranty, the needful procedure will be conducted by \n" +
                        "                                        Bhalogari.com as per the company policy."
                    : " Vehicles with warranty- If any of the vehicles listed on our website states that \n" +
                      "                                        it comes with After Sales Warranty, the needful procedure will be conducted by \n" +
                      "                                        Bhalogari.com as per the company policy."}
                </p>
              </div>
            </div>

            <div className="policies">
              <Title
                title1={
                  props.langVariables !== null
                    ? props.langVariables["rp_refund_policy"]
                      ? props.langVariables["rp_refund_policy"].lang_content
                      : "Refund Policy"
                    : "Refund Policy"
                }
              />
              <div className="point-description">
                <p>
                  {props.langVariables !== null
                    ? props.langVariables["rp_refund_policy_one"]
                      ? props.langVariables["rp_refund_policy_one"].lang_content
                      : " 1. If due to any reason, unavoidable circumstances or beyond the limitations \n" +
                        "                                      of the Bhalogari.com (Bhalo Ventures Ltd.), the order is not fulfilled by \n" +
                        "                                      Bhalogari.com, then the order shall be cancelled and refunded (in terms of \n" +
                        "                                      the service centric items listed on our website)."
                    : " 1. If due to any reason, unavoidable circumstances or beyond the limitations \n" +
                      "                                      of the Bhalogari.com (Bhalo Ventures Ltd.), the order is not fulfilled by \n" +
                      "                                      Bhalogari.com, then the order shall be cancelled and refunded (in terms of \n" +
                      "                                      the service centric items listed on our website)."}
                </p>
                <p>
                  {props.langVariables !== null
                    ? props.langVariables["rp_refund_policy_two"]
                      ? props.langVariables["rp_refund_policy_two"].lang_content
                      : "2.Bhalogari.com currently is a free registration platform and payment is \n" +
                        "                                     only applicable for the services offered on the website upon request."
                    : "2.Bhalogari.com currently is a free registration platform and payment is \n" +
                      "                                     only applicable for the services offered on the website upon request."}
                </p>
              </div>
              <p style={{ paddingTop: "10px" }}>
                <strong>
                  {props.langVariables !== null
                    ? props.langVariables["rp_some_cond"]
                      ? props.langVariables["rp_some_cond"].lang_content
                      : "Some conditions in benefit of the customer"
                    : "Some conditions in benefit of the customer"}
                </strong>
              </p>
            </div>

            <div className="policies">
              <Title
                title1={
                  props.langVariables !== null
                    ? props.langVariables["rp_note_one"]
                      ? props.langVariables["rp_note_one"].lang_content
                      : "**Note"
                    : "**Note"
                }
              />
              <div className="point-description">
                <p className="service">
                  {props.langVariables !== null
                    ? props.langVariables["rp_note_bhalogari"]
                      ? props.langVariables["rp_note_bhalogari"].lang_content
                      : "**Bhalogari (Bhalogari Ventures Ltd.)is not liable to pay any penalty or\n" +
                        "                                 compensation to the customer for cancellation of any order."
                    : "**Bhalogari (Bhalogari Ventures Ltd.)is not liable to pay any penalty or\n" +
                      "                                 compensation to the customer for cancellation of any order."}
                </p>
                <p className="service">
                  {props.langVariables !== null
                    ? props.langVariables["rp_note_payable"]
                      ? props.langVariables["rp_note_payable"].lang_content
                      : "** Payable amount associated to cost and expenses which are mandatory, are non \n" +
                        "                                    refundable. For instance, any amount that has to be paid by the customer on \n" +
                        "                                    pre-requisite basis, is deemed “non refundable payment”. Pre-requisite could \n" +
                        "                                    imply as the mandatory service charge included with the service cost."
                    : "** Payable amount associated to cost and expenses which are mandatory, are non \n" +
                      "                                    refundable. For instance, any amount that has to be paid by the customer on \n" +
                      "                                    pre-requisite basis, is deemed “non refundable payment”. Pre-requisite could \n" +
                      "                                    imply as the mandatory service charge included with the service cost."}
                </p>
                <p className="service">
                  {props.langVariables !== null
                    ? props.langVariables["rp_note_upon_req"]
                      ? props.langVariables["rp_note_upon_req"].lang_content
                      : "**Upon request of car servicing from a customer, Bhalogari (Bhalo Ventures\n" +
                        "                                    Ltd.) will be providing the service within 1 day (24 hours) after receiving \n" +
                        "                                    the request, given that adequate resources are present to avail the service."
                    : "**Upon request of car servicing from a customer, Bhalogari (Bhalo Ventures\n" +
                      "                                    Ltd.) will be providing the service within 1 day (24 hours) after receiving \n" +
                      "                                    the request, given that adequate resources are present to avail the service."}
                </p>
                <p>
                  {props.langVariables !== null
                    ? props.langVariables["rp_note_upon_ins"]
                      ? props.langVariables["rp_note_upon_ins"].lang_content
                      : "**Upon inspection of the car for which the servicing request is issued,\n" +
                        "                                     Bhalogari (Bhalo Ventures Ltd.) will be providing an estimate of cost and \n" +
                        "                                     timeframe which may require 2 days (48 hours) or longer, based on the scope \n" +
                        "                                     and complexity of providing the service."
                    : "**Upon inspection of the car for which the servicing request is issued,\n" +
                      "                                     Bhalogari (Bhalo Ventures Ltd.) will be providing an estimate of cost and \n" +
                      "                                     timeframe which may require 2 days (48 hours) or longer, based on the scope \n" +
                      "                                     and complexity of providing the service."}
                </p>
              </div>
            </div>

            <div className="policies">
              <Title
                title1={
                  props.langVariables !== null
                    ? props.langVariables["rp_term_refund"]
                      ? props.langVariables["rp_term_refund"].lang_content
                      : "Term for Refund"
                    : "Term for Refund"
                }
              />
              <div className="point-description">
                <p>
                  {props.langVariables !== null
                    ? props.langVariables["rp_discre_buy"]
                      ? props.langVariables["rp_discre_buy"].lang_content
                      : "In discretion of buying/selling from or with Bhalogari.com –  \n" +
                        "                                    Bhalogari.com is not held liable or legally obligated to \n" +
                        "                                    restitute/compensate or pay any refund for a faulty vehicle offered by an \n" +
                        "                                    authorized seller on our website.  Bhalogari.com solely serves as the \n" +
                        "                                    connector between the buyer and seller."
                    : "In discretion of buying/selling from or with Bhalogari.com –  \n" +
                      "                                    Bhalogari.com is not held liable or legally obligated to \n" +
                      "                                    restitute/compensate or pay any refund for a faulty vehicle offered by an \n" +
                      "                                    authorized seller on our website.  Bhalogari.com solely serves as the \n" +
                      "                                    connector between the buyer and seller."}
                </p>
                <p>
                  {props.langVariables !== null
                    ? props.langVariables["rp_term_refund_one"]
                      ? props.langVariables["rp_term_refund_one"].lang_content
                      : "1. The product has to come without any scratch, dent or any other sort of \n" +
                        "                                    damage for it to be applicable for a refund."
                    : "1. The product has to come without any scratch, dent or any other sort of \n" +
                      "                                    damage for it to be applicable for a refund."}
                </p>
                <p>
                  {props.langVariables !== null
                    ? props.langVariables["rp_term_refund_two"]
                      ? props.langVariables["rp_term_refund_two"].lang_content
                      : "2. The decision of the management about the refund will be binding on the customer"
                    : "2. The decision of the management about the refund will be binding on the customer"}
                </p>
                <p>
                  {props.langVariables !== null
                    ? props.langVariables["rp_term_refund_three"]
                      ? props.langVariables["rp_term_refund_three"].lang_content
                      : "3. The order cancelled must accompany all the accessories (including free items) which\n" +
                        "                                       were serviced along with the order else the cost of the accessories shall be recovered\n" +
                        "                                      from the refund amount."
                    : "3. The order cancelled must accompany all the accessories (including free items) which\n" +
                      "                                       were serviced along with the order else the cost of the accessories shall be recovered\n" +
                      "                                      from the refund amount."}
                </p>
                <p>
                  {props.langVariables !== null
                    ? props.langVariables["rp_term_refund_four"]
                      ? props.langVariables["rp_term_refund_four"].lang_content
                      : "4. Any charges associated with tax is not eligible for refund."
                    : "4. Any charges associated with tax is not eligible for refund."}
                </p>
                <p>
                  <strong>
                    {props.langVariables !== null
                      ? props.langVariables["rp_note_one"]
                        ? props.langVariables["rp_note_one"].lang_content
                        : "**Note"
                      : "**Note"}
                    :{" "}
                  </strong>
                  {props.langVariables !== null
                    ? props.langVariables["rp_note_one_desc"]
                      ? props.langVariables["rp_note_one_desc"].lang_content
                      : "Any Gift coupon circulated as promotional offer would not be refunded in case\\n' +\n" +
                        "                                '                                   of cancellation of the order."
                    : "Any Gift coupon circulated as promotional offer would not be refunded in case\\n' +\n" +
                      "                                '                                   of cancellation of the order."}
                </p>
              </div>
            </div>
            <div className="policies">
              <Title
                title1={
                  props.langVariables !== null
                    ? props.langVariables["rp_refund_timeline"]
                      ? props.langVariables["rp_refund_timeline"].lang_content
                      : "Refund Timelines and Method"
                    : "Refund Timelines and Method"
                }
              />
              <div className="point-description">
                <p>
                  {props.langVariables !== null
                    ? props.langVariables["rp_refund_timeline_desc"]
                      ? props.langVariables["rp_refund_timeline_desc"].lang_content
                      : "Payment mode – Credit Card/ Debit Card & Mobile Banking (Bkash, Upay, Nagad, Rocket)"
                    : "Payment mode – Credit Card/ Debit Card & Mobile Banking (Bkash, Upay, Nagad, Rocket)"}
                </p>
                <p>
                  {props.langVariables !== null
                    ? props.langVariables["pp_bd"]
                      ? props.langVariables["pp_bd"].lang_content
                      : "Refund from the date of cancellation of order - 10-15 Working Days \n" +
                        "                                       (*Note Working Days are Sunday-Thursday & Saturday)"
                    : "Refund from the date of cancellation of order - 10-15 Working Days \n" +
                      "                                       (*Note Working Days are Sunday-Thursday & Saturday)"}
                </p>
              </div>
            </div>

            <div className="policies">
              <Title
                title1={
                  props.langVariables !== null
                    ? props.langVariables["rp_govern"]
                      ? props.langVariables["rp_govern"].lang_content
                      : "Governing Law"
                    : "Governing Law"
                }
              />
              <div className="point-description">
                <p>
                  {props.langVariables !== null
                    ? props.langVariables["rp_govern_law"]
                      ? props.langVariables["rp_govern_law"].lang_content
                      : "Bhalogari.com is operated under the laws and regulations of \n" +
                        "                                            Bangladesh under the trade license bearing Trade \n" +
                        "                                            License no: 151793"
                    : "Bhalogari.com is operated under the laws and regulations of \n" +
                      "                                            Bangladesh under the trade license bearing Trade \n" +
                      "                                            License no: 151793"}
                </p>
              </div>
            </div>

            <div>
              <a target="_blank" href="https://www.sslcommerz.com/" title="SSLCommerz" alt="SSLCommerz" rel="noreferrer">
                <img
                  style={{ width: "100%", height: "auto" }}
                  src="https://securepay.sslcommerz.com/public/image/SSLCommerz-Pay-With-logo-All-Size-03.png"
                  alt="SSLCommerz"
                />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </RefundPolicyDiv>
  );
};

const RefundPolicyDiv = styled.div`
  font-family: "Open Sans", sans-serif;
  .contents {
    background-color: #f6f6f6;
    .texts {
      padding: 40px;
      .descriptions {
        padding-bottom: 25px;
        p {
          font-size: 14px;
          line-height: 24px;
          color: #646464;
          font-weight: 400;
        }
      }
      .policies {
        padding-bottom: 25px;
        .point-description {
          // padding-bottom: 16px;
          .contact-description {
            line-height: 20px;
            color: #646464;
            font-weight: 800;
          }
          .service {
            font-size: 14px;
            line-height: 25px;
            color: #646464;
            font-weight: 400;
            padding-bottom: 10px;
          }
          p {
            font-size: 14px;
            line-height: 25px;
            color: #646464;
            font-weight: 400;
            strong {
              padding-top: 5px;
              color: black;
            }
          }
        }
        > p {
          font-size: 14px;
          line-height: 17px;
          font-weight: 400px;
          padding-bottom: 0px;
          > span {
            margin-left: 5px;
          }
        }
        .heading-description {
          .info {
            padding-bottom: 16px;
          }
          p {
            font-size: 14px;
            line-height: 24px;
            color: #646464;
            font-weight: 400;
            span {
              line-height: 12px;
              color: #646464;
              font-weight: 800;
            }
          }
        }
        &:last-child {
          padding-bottom: 0px;
        }
      }
    }
  }

  @media (max-width: 425px) {
    .contents {
      .texts {
        .descriptions {
          padding-bottom: 20px;
        }
        .policies {
          padding-bottom: 20px;
        }
      }
    }
  }
`;

export default RefundPolicyTexts;
