import React from "react";
import styled from "styled-components";
import Title from "@components/SectionTitle/SectionTitle";
import { Container } from "@material-ui/core";
import parse from "html-react-parser";

function TermsTexts(props) {
  return (
    <TermsText>
      <Container maxWidth="lg">
        <div className="contents">
          <div className="texts">
            <div className="description">
              <p>
                {props.langVariables !== null
                  ? props.langVariables["tc_bhalogari"]
                    ? props.langVariables["tc_bhalogari"].lang_content
                    : "Bhalogari.com"
                  : "Bhalogari.com"}
              </p>
              <p>
                {props.langVariables !== null
                  ? props.langVariables["tc_address"]
                    ? props.langVariables["tc_address"].lang_content
                    : "Civil House, B-111 Mosque Road, Mohakhali DOHS, Dhaka - 1206"
                  : "Civil House, B-111 Mosque Road, Mohakhali DOHS, Dhaka - 1206"}
              </p>
              <p>
                {props.langVariables !== null
                  ? props.langVariables["tc_bd"]
                    ? props.langVariables["tc_bd"].lang_content
                    : "Bangladesh"
                  : "Bangladesh"}
              </p>
              <p className="email">
                {props.langVariables !== null
                  ? props.langVariables["tc_email"]
                    ? props.langVariables["tc_email"].lang_content
                    : "Email: info@bhalogari.com"
                  : "Email: info@bhalogari.com"}
              </p>
            </div>

            <div className="header">
              <Title
                title1={
                  props.langVariables !== null
                    ? props.langVariables["purposes"]
                      ? props.langVariables["purposes"].lang_content
                      : "Purposes of Use"
                    : "Purposes of Use"
                }
              />
              <div className="point-description">
                <div className="next-para">
                  <p>
                    {props.langVariables !== null
                      ? props.langVariables["personal"]
                        ? props.langVariables["personal"].lang_content
                        : "a. We use the personal information collected during your visit to\n" +
                          "                                        any of our websites to make using them as convenient as possible\n" +
                          "                                        for you and to protect our IT systems against attacks and other\n" +
                          "                                        unlawful activities."
                      : "a. We use the personal information collected during your visit to\n" +
                        "                                        any of our websites to make using them as convenient as possible\n" +
                        "                                        for you and to protect our IT systems against attacks and other\n" +
                        "                                        unlawful activities."}
                  </p>
                </div>
                <div className="next-para">
                  <p>
                    {props.langVariables !== null
                      ? props.langVariables["additional"]
                        ? props.langVariables["additional"].lang_content
                        : " b. If you share additional information with us – for example, by filling out\n" +
                          "                                        a registration form, contact form, chat, survey, contest entry or to execute a\n" +
                          "                                        contract with you – we will use that information for the designated purposes,\n" +
                          "                                        purposes of customer management and – if required – for purposes of processing\n" +
                          "                                        and billing and business transactions within the required scope in each\n" +
                          "                                        instance."
                      : " b. If you share additional information with us – for example, by filling out\n" +
                        "                                        a registration form, contact form, chat, survey, contest entry or to execute a\n" +
                        "                                        contract with you – we will use that information for the designated purposes,\n" +
                        "                                        purposes of customer management and – if required – for purposes of processing\n" +
                        "                                        and billing and business transactions within the required scope in each\n" +
                        "                                        instance."}
                  </p>
                </div>
                <div className="next-para">
                  <p>
                    {props.langVariables !== null
                      ? props.langVariables["other"]
                        ? props.langVariables["other"].lang_content
                        : "c. For other purposes (e.g., display of personalized content or\n" +
                          "                                        advertising based on your usage behavior), we and, if applicable,\n" +
                          "                                        selected third parties, use your personal data if and to the extent\n" +
                          "                                        you give your consent through our consent management system."
                      : "c. For other purposes (e.g., display of personalized content or\n" +
                        "                                        advertising based on your usage behavior), we and, if applicable,\n" +
                        "                                        selected third parties, use your personal data if and to the extent\n" +
                        "                                        you give your consent through our consent management system."}
                  </p>
                </div>
              </div>
            </div>

            <div className="header">
              <Title
                title1={
                  props.langVariables !== null
                    ? props.langVariables["transfer"]
                      ? props.langVariables["transfer"].lang_content
                      : "Transfer of personal data to third parties;social plug-ins; use of service providers"
                    : "Transfer of personal data to third parties;social plug-ins; use of service providers"
                }
              />

              <div className="point-description">
                <div className="next-para">
                  <p>
                    {props.langVariables !== null
                      ? props.langVariables["websites"]
                        ? props.langVariables["websites"].lang_content
                        : "a. Our websites may also contain an offer of third parties. If you click on\n" +
                          "                                        such an offer, we transfer data to the respective provider to the required\n" +
                          "                                        extent (e.g., information that you have found this offer with us and, if\n" +
                          "                                        applicable, further information that you have already provided on our\n" +
                          "                                        websites for this purpose)."
                      : "a. Our websites may also contain an offer of third parties. If you click on\n" +
                        "                                        such an offer, we transfer data to the respective provider to the required\n" +
                        "                                        extent (e.g., information that you have found this offer with us and, if\n" +
                        "                                        applicable, further information that you have already provided on our\n" +
                        "                                        websites for this purpose)."}
                  </p>
                </div>
                <div className="next-para">
                  <p>
                    {props.langVariables !== null
                      ? props.langVariables["social"]
                        ? props.langVariables["social"].lang_content
                        : "b. When we use social plug-ins on our websites from social networks\n" +
                          "                                        such as Facebook, we integrate them as follows:"
                      : "b. When we use social plug-ins on our websites from social networks\n" +
                        "                                        such as Facebook, we integrate them as follows:"}
                  </p>
                </div>
                <div className="next-para">
                  <p>
                    {props.langVariables !== null
                      ? props.langVariables["plugins"]
                        ? props.langVariables["plugins"].lang_content
                        : "When you visit our websites, the social plug-ins are deactivated, i.e., no data\n" +
                          "                                        is\n" +
                          "                                        transmitted to the operators of these networks. If you want to use one of the\n" +
                          "                                        networks,\n" +
                          "                                        click on the respective social plug-in to establish a direct connection to the\n" +
                          "                                        server of\n" +
                          "                                        the respective network."
                      : "When you visit our websites, the social plug-ins are deactivated, i.e., no data\n" +
                        "                                        is\n" +
                        "                                        transmitted to the operators of these networks. If you want to use one of the\n" +
                        "                                        networks,\n" +
                        "                                        click on the respective social plug-in to establish a direct connection to the\n" +
                        "                                        server of\n" +
                        "                                        the respective network."}
                  </p>
                </div>
                <div className="next-para">
                  <p>
                    {props.langVariables !== null
                      ? props.langVariables["user"]
                        ? props.langVariables["user"].lang_content
                        : "If you have a user account on the network and are logged in when you\n" +
                          "                                        activate the social plug-in, the network can associate your visit to\n" +
                          "                                        our websites with your user account. If you want to avoid this, please\n" +
                          "                                        log out of the network before activating the social plug-in"
                      : "If you have a user account on the network and are logged in when you\n" +
                        "                                        activate the social plug-in, the network can associate your visit to\n" +
                        "                                        our websites with your user account. If you want to avoid this, please\n" +
                        "                                        log out of the network before activating the social plug-in"}
                  </p>
                </div>
                <div className="next-para">
                  <p>
                    {props.langVariables !== null
                      ? props.langVariables["activate"]
                        ? props.langVariables["activate"].lang_content
                        : "When you activate a social plug-in, the network transfers the content that\n" +
                          "                                        becomes available directly to your browser, which integrates it into our\n" +
                          "                                        websites. In this situation, data transmissions can also take place that are\n" +
                          "                                        initiated and controlled by the respective social network"
                      : "When you activate a social plug-in, the network transfers the content that\n" +
                        "                                        becomes available directly to your browser, which integrates it into our\n" +
                        "                                        websites. In this situation, data transmissions can also take place that are\n" +
                        "                                        initiated and controlled by the respective social network"}
                  </p>
                </div>
              </div>
            </div>

            <div className="header">
              <Title
                title1={
                  props.langVariables !== null
                    ? props.langVariables["delivery_time"]
                      ? props.langVariables["delivery_time"].lang_content
                      : "Delivery Time & Process"
                    : "Delivery Time & Process"
                }
              />

              <div className="point-description">
                <div className="next-para">
                  <p>
                    {props.langVariables !== null
                      ? props.langVariables["service"]
                        ? props.langVariables["service"].lang_content
                        : " a. All service request takes minimum 24-48 hours to process depending on the\n" +
                          "                                        nature of the service."
                      : " a. All service request takes minimum 24-48 hours to process depending on the\n" +
                        "                                        nature of the service."}
                  </p>
                </div>
                <div className="next-para">
                  <p>
                    {props.langVariables !== null
                      ? props.langVariables["auction_sheet"]
                        ? props.langVariables["auction_sheet"].lang_content
                        : "b. Auction sheet will be verified by Japanese expertise team in Japan so it\n" +
                          "                                        may take upto 1 hour after the request is made. The verification will be\n" +
                          "                                        emailed to the customer when it is ready. In case of any technological\n" +
                          "                                        difficulty or in the event of power shortage, it may take several hours\n" +
                          "                                        depending on the circumstances."
                      : "b. Auction sheet will be verified by Japanese expertise team in Japan so it\n" +
                        "                                        may take upto 1 hour after the request is made. The verification will be\n" +
                        "                                        emailed to the customer when it is ready. In case of any technological\n" +
                        "                                        difficulty or in the event of power shortage, it may take several hours\n" +
                        "                                        depending on the circumstances."}
                  </p>
                </div>
              </div>
            </div>

            <div className="header">
              <div className="point-description">
                <div className="next-para">
                  <p>
                    {props.langVariables !== null
                      ? props.langVariables["reserves"]
                        ? props.langVariables["reserves"].lang_content
                        : "**Bhalogari.com reserves the right to charge a fee to users on per\n" +
                          "                                        transaction basis in the future. All changes will be communicated within\n" +
                          "                                        30 days prior to being actionable, if any such policy is made by the\n" +
                          "                                        authority of the business."
                      : "**Bhalogari.com reserves the right to charge a fee to users on per\n" +
                        "                                        transaction basis in the future. All changes will be communicated within\n" +
                        "                                        30 days prior to being actionable, if any such policy is made by the\n" +
                        "                                        authority of the business."}
                  </p>
                </div>
              </div>
            </div>

            <div className="header">
              <Title
                title1={
                  props.langVariables !== null
                    ? props.langVariables["terms_pricing"]
                      ? props.langVariables["terms_pricing"].lang_content
                      : "Terms for Pricing"
                    : "Terms for Pricing"
                }
              />
              <div className="point-description">
                <div className="next-para">
                  <p>
                    {props.langVariables !== null
                      ? props.langVariables["reserves_right"]
                        ? props.langVariables["reserves_right"].lang_content
                        : "Bhalogari.com reserves the right to add, change or deduct any cost along\n" +
                          "                                        the price mentioned within all the products and services offered by\n" +
                          "                                        Bhalogari.com. These fee are subject to changes due to a shift in the\n" +
                          "                                        market, additional unforeseen cost has interfered in the course of event,\n" +
                          "                                        or the prices mentioned are deemed as “estimated price” and can vary from\n" +
                          "                                        vehicle to vehicle."
                      : "Bhalogari.com reserves the right to add, change or deduct any cost along\n" +
                        "                                        the price mentioned within all the products and services offered by\n" +
                        "                                        Bhalogari.com. These fee are subject to changes due to a shift in the\n" +
                        "                                        market, additional unforeseen cost has interfered in the course of event,\n" +
                        "                                        or the prices mentioned are deemed as “estimated price” and can vary from\n" +
                        "                                        vehicle to vehicle."}
                  </p>
                </div>
              </div>
            </div>

            <div className="header">
              <Title
                title1={
                  props.langVariables !== null
                    ? props.langVariables["refund"]
                      ? props.langVariables["refund"].lang_content
                      : "Term for Refund"
                    : "Term for Refund"
                }
              />
              <div className="point-description">
                <div className="next-para">
                  <p>
                    {props.langVariables !== null
                      ? props.langVariables["discretion"]
                        ? props.langVariables["discretion"].lang_content
                        : "In discretion of buying/selling from or with Bhalogari.com – Bhalogari.com is\n" +
                          "                                        not\n" +
                          "                                        held liable or legally obligated to restitute/compensate or pay any refund for a\n" +
                          "                                        faulty vehicle offered by an authorized seller on our website. Bhalogari.com\n" +
                          "                                        solely\n" +
                          "                                        serves as the connector between the buyer and seller."
                      : "In discretion of buying/selling from or with Bhalogari.com – Bhalogari.com is\n" +
                        "                                        not\n" +
                        "                                        held liable or legally obligated to restitute/compensate or pay any refund for a\n" +
                        "                                        faulty vehicle offered by an authorized seller on our website. Bhalogari.com\n" +
                        "                                        solely\n" +
                        "                                        serves as the connector between the buyer and seller."}
                  </p>
                </div>
                <div className="next-para">
                  <p>
                    {props.langVariables !== null
                      ? props.langVariables["scratch"]
                        ? props.langVariables["scratch"].lang_content
                        : " a. The product has to come without any scratch, dent or any other\n" +
                          "                                        sort of damage for it to be applicable for a refund."
                      : " a. The product has to come without any scratch, dent or any other\n" +
                        "                                        sort of damage for it to be applicable for a refund."}
                  </p>
                  <p>
                    {props.langVariables !== null
                      ? props.langVariables["management"]
                        ? props.langVariables["management"].lang_content
                        : "b. The decision of the management about the refund will be binding on the\n" +
                          "                                        customer."
                      : "b. The decision of the management about the refund will be binding on the\n" +
                        "                                        customer."}
                  </p>
                  <p>
                    {props.langVariables !== null
                      ? props.langVariables["cancelled"]
                        ? props.langVariables["cancelled"].lang_content
                        : "c. The order cancelled must accompany all the accessories\n" +
                          "                                        (including free items) which were serviced along with the order else\n" +
                          "                                        the cost of the accessories shall be recovered from the refund amount."
                      : "c. The order cancelled must accompany all the accessories\n" +
                        "                                        (including free items) which were serviced along with the order else\n" +
                        "                                        the cost of the accessories shall be recovered from the refund amount."}
                  </p>
                  <p>
                    {props.langVariables !== null
                      ? props.langVariables["associated"]
                        ? props.langVariables["associated"].lang_content
                        : "d. Any charges associated with tax is not eligible for refund."
                      : "d. Any charges associated with tax is not eligible for refund."}
                  </p>
                  <p>
                    {props.langVariables !== null
                      ? props.langVariables["note"]
                        ? parse(props.langVariables["note"].lang_content)
                        : parse(
                            "** <strong>Note:</strong> Any Gift coupon circulated as promotional offer would\n" +
                              "                                        not be\n" +
                              "                                        refunded in case of cancellation of the order."
                          )
                      : parse(
                          "** <strong>Note:</strong> Any Gift coupon circulated as promotional offer would\n" +
                            "                                        not be\n" +
                            "                                        refunded in case of cancellation of the order."
                        )}
                  </p>
                </div>
              </div>
            </div>
            <div className="header">
              <Title
                title1={
                  props.langVariables !== null
                    ? props.langVariables["electronic"]
                      ? props.langVariables["electronic"].lang_content
                      : "ELECTRONIC NEWSLETTERS"
                    : "ELECTRONIC NEWSLETTERS"
                }
              />

              <div className="point-description">
                <div className="next-para">
                  <p>
                    {props.langVariables !== null
                      ? props.langVariables["newsletter"]
                        ? props.langVariables["newsletter"].lang_content
                        : "We may offer a free electronic newsletter to users. We will gather the email\n" +
                          "                                        addresses of users who sign up for Bhalogari.com for the newsletter mailing\n" +
                          "                                        list.\n" +
                          "                                        Users may remove themselves from this mailing list by opting out of receiving\n" +
                          "                                        newsletters during the registration process, by following the link provided in\n" +
                          "                                        each newsletter that points users to a subscription management page where the\n" +
                          "                                        user\n" +
                          "                                        can unsubscribe from receiving newsletters or by changing their preferences in\n" +
                          "                                        their Profile Settings page."
                      : "We may offer a free electronic newsletter to users. We will gather the email\n" +
                        "                                        addresses of users who sign up for Bhalogari.com for the newsletter mailing\n" +
                        "                                        list.\n" +
                        "                                        Users may remove themselves from this mailing list by opting out of receiving\n" +
                        "                                        newsletters during the registration process, by following the link provided in\n" +
                        "                                        each newsletter that points users to a subscription management page where the\n" +
                        "                                        user\n" +
                        "                                        can unsubscribe from receiving newsletters or by changing their preferences in\n" +
                        "                                        their Profile Settings page."}
                  </p>
                </div>
              </div>
            </div>

            <div className="header">
              <Title
                title1={
                  props.langVariables !== null
                    ? props.langVariables["third_networks"]
                      ? props.langVariables["third_networks"].lang_content
                      : "Third-Party Ad Networks"
                    : "Third-Party Ad Networks"
                }
              />
              <div className="point-description">
                <div className="next-para">
                  <p>
                    {props.langVariables !== null
                      ? props.langVariables["third_party"]
                        ? props.langVariables["third_party"].lang_content
                        : "We participate in third party ad networks that may display advertisements on\n" +
                          "                                        other websites based on your visits to our Site as well as other websites.\n" +
                          "                                        This enables us and these third parties to target advertisements by displaying\n" +
                          "                                        ads for products and services in which you might be interested. Third party ad\n" +
                          "                                        network providers, advertisers, sponsors and/or traffic measurement services\n" +
                          "                                        may use cookies, JavaScript, web beacons (including clear GIFs), Flash LSOs and\n" +
                          "                                        other technologies to measure the effectiveness of their ads and to personalize\n" +
                          "                                        advertising content to you. These third-party cookies and other technologies are\n" +
                          "                                        governed by each third party's specific privacy policy, and not by\n" +
                          "                                        Bhalogari.com’s\n" +
                          "                                        Policy. We may provide these third-party advertisers with information about your\n" +
                          "                                        usage of our Site and our services, as well as aggregate or non-personally\n" +
                          "                                        identifiable information about visitors to our Site and users of our service."
                      : "We participate in third party ad networks that may display advertisements on\n" +
                        "                                        other websites based on your visits to our Site as well as other websites.\n" +
                        "                                        This enables us and these third parties to target advertisements by displaying\n" +
                        "                                        ads for products and services in which you might be interested. Third party ad\n" +
                        "                                        network providers, advertisers, sponsors and/or traffic measurement services\n" +
                        "                                        may use cookies, JavaScript, web beacons (including clear GIFs), Flash LSOs and\n" +
                        "                                        other technologies to measure the effectiveness of their ads and to personalize\n" +
                        "                                        advertising content to you. These third-party cookies and other technologies are\n" +
                        "                                        governed by each third party's specific privacy policy, and not by\n" +
                        "                                        Bhalogari.com’s\n" +
                        "                                        Policy. We may provide these third-party advertisers with information about your\n" +
                        "                                        usage of our Site and our services, as well as aggregate or non-personally\n" +
                        "                                        identifiable information about visitors to our Site and users of our service."}
                  </p>
                </div>
              </div>
            </div>

            <div className="header">
              <Title
                title1={
                  props.langVariables !== null
                    ? props.langVariables["governing"]
                      ? props.langVariables["governing"].lang_content
                      : "Governing Law"
                    : "Governing Law"
                }
              />
              <div className="point-description">
                <div className="next-para">
                  <p>
                    {props.langVariables !== null
                      ? props.langVariables["trade_license"]
                        ? props.langVariables["trade_license"].lang_content
                        : "Bhalogari.com is operated under the laws and regulations of\n" +
                          "                                        Bangladesh under the trade license bearing Trade License no: 151793"
                      : "Bhalogari.com is operated under the laws and regulations of\n" +
                        "                                        Bangladesh under the trade license bearing Trade License no: 151793"}
                  </p>
                </div>
              </div>
            </div>

            <div className="update">
              <p>
                {props.langVariables !== null
                  ? props.langVariables["last_update"]
                    ? props.langVariables["last_update"].lang_content
                    : "Last Update: September 2021"
                  : "Last Update: September 2021"}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </TermsText>
  );
}

const TermsText = styled.div`
  font-family: "Open Sans", sans-serif;
  .contents {
    background-color: #f6f6f6;
    .texts {
      padding: 40px;
      .description {
        padding-bottom: 20px;
        p {
          font-size: 14px;
          line-height: 24px;
          color: #646464;
          font-weight: 400;
        }
        .next-para {
          padding-bottom: 10px;
        }
      }
      .header {
        p {
          font-size: 14px;
          line-height: 17px;
          padding-bottom: 2px;
        }
        .point-description {
          padding-bottom: 25px;
          .next-para {
            padding-bottom: 10px;
            p {
              font-size: 14px;
              line-height: 24px;
              color: #646464;
              font-weight: 400;
            }
          }
        }
      }
      .update {
        padding-top: 15px;
        p {
          font-size: 14px;
          font-weight: 400;
          color: #646464;
        }
      }
    }
  }

  @media (max-width: 425px) {
    .contents {
      .texts {
        padding: 20px;
      }
    }
  }
`;

export default TermsTexts;
