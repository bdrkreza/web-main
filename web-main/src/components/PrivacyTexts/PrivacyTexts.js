import React from "react";
import styled from "styled-components";
import Title from "../SectionTitle/SectionTitle";
import { Container } from "@material-ui/core";

function PrivacyTexts(props) {
  return (
    <PrivacyDiv>
      <Container maxWidth="lg">
        <div className="contents">
          <div className="texts">
            <div className="policies">
              <div className="point-description">
                <p>
                  {props.langVariables !== null
                    ? props.langVariables["pp_bhalogari"]
                      ? props.langVariables["pp_bhalogari"].lang_content
                      : "Bhalogari.com"
                    : "Bhalogari.com"}
                </p>
                <p>
                  {props.langVariables !== null
                    ? props.langVariables["pp_address"]
                      ? props.langVariables["pp_address"].lang_content
                      : "Civil house, B- 111 Mosque Rd, Dhaka 1206"
                    : "Civil house, B- 111 Mosque Rd, Dhaka 1206"}
                </p>
                <p>
                  {props.langVariables !== null
                    ? props.langVariables["pp_bd"]
                      ? props.langVariables["pp_bd"].lang_content
                      : "Bangladesh"
                    : "Bangladesh"}
                </p>
                <p className="email">
                  {props.langVariables !== null
                    ? props.langVariables["pp_email"]
                      ? props.langVariables["pp_email"].lang_content
                      : "Email: info@bhalogari.com"
                    : "Email: info@bhalogari.com"}
                </p>
              </div>
            </div>

            <div className="policies">
              <div className="point-description">
                {/* <p> */}
                <strong>
                  {props.langVariables !== null
                    ? props.langVariables["appreciate"]
                      ? props.langVariables["appreciate"].lang_content
                      : "We appreciate you visiting Bhalogari.com and your interest in the \n" +
                        "                                            services we offer. Protecting your personal data is very important to us.\n" +
                        "                                            In this Privacy Policy, we explain how we collect your personal \n" +
                        "                                            information, what we do with it, for what purposes and on what legal \n" +
                        "                                            foundation we do so, and what rights you have on that basis"
                    : "We appreciate you visiting Bhalogari.com and your interest in the \n" +
                      "                                            services we offer. Protecting your personal data is very important to us.\n" +
                      "                                            In this Privacy Policy, we explain how we collect your personal \n" +
                      "                                            information, what we do with it, for what purposes and on what legal \n" +
                      "                                            foundation we do so, and what rights you have on that basis"}
                </strong>
                {/* </p> */}
              </div>
            </div>

            <div className="policies">
              <Title
                title1={
                  props.langVariables !== null
                    ? props.langVariables["data_protection"]
                      ? props.langVariables["data_protection"].lang_content
                      : "1. Data Protection"
                    : "1. Data Protection"
                }
              />
              <div className="point-description">
                <p>
                  {props.langVariables !== null
                    ? props.langVariables["website_services"]
                      ? props.langVariables["website_services"].lang_content
                      : "Your use of the Website and/or Services and any personal information \n" +
                        "                                        you provide on the Website remains subject to the terms of the Policy \n" +
                        "                                        and Bhalogari.com’s Terms of Use. "
                    : "Your use of the Website and/or Services and any personal information \n" +
                      "                                        you provide on the Website remains subject to the terms of the Policy \n" +
                      "                                        and Bhalogari.com’s Terms of Use. "}
                </p>
              </div>
            </div>

            <div className="policies">
              <Title
                title1={
                  props.langVariables !== null
                    ? props.langVariables["personal_data"]
                      ? props.langVariables["personal_data"].lang_content
                      : "2. Collection and Processing Of Your Personal Data"
                    : "2. Collection and Processing Of Your Personal Data"
                }
              />
              <div className="point-description">
                <p>
                  {props.langVariables !== null
                    ? props.langVariables["certain_informations"]
                      ? props.langVariables["certain_informations"].lang_content
                      : "a. Whenever you visit our websites, we store certain information about\n" +
                        "                                        the browser and operating system you are using; the date and time of\n" +
                        "                                        your visit; the status of the interaction (e.g. whether you were able\n" +
                        "                                        to access the website or received an error message); the usage of \n" +
                        "                                        features on the website; any search phrases you entered; how often you \n" +
                        "                                        visit individual websites; the names of the files you access; the \n" +
                        "                                        amount of data transferred; the Web page from which you accessed our \n" +
                        "                                        website; and the Web page you visited after visiting our website, \n" +
                        "                                        whether by clicking links on our websites or entering a domain directly\n" +
                        "                                        into the input field of the same tab (or window) of the browser in which\n" +
                        "                                        you have our websites open. In addition, we store your IP address and the\n" +
                        "                                        name of your Internet service provider for seven days. This is for \n" +
                        "                                        security reasons; in particular, to prevent and detect attacks on our \n" +
                        "                                        websites or attempts at fraud."
                    : "a. Whenever you visit our websites, we store certain information about\n" +
                      "                                        the browser and operating system you are using; the date and time of\n" +
                      "                                        your visit; the status of the interaction (e.g. whether you were able\n" +
                      "                                        to access the website or received an error message); the usage of \n" +
                      "                                        features on the website; any search phrases you entered; how often you \n" +
                      "                                        visit individual websites; the names of the files you access; the \n" +
                      "                                        amount of data transferred; the Web page from which you accessed our \n" +
                      "                                        website; and the Web page you visited after visiting our website, \n" +
                      "                                        whether by clicking links on our websites or entering a domain directly\n" +
                      "                                        into the input field of the same tab (or window) of the browser in which\n" +
                      "                                        you have our websites open. In addition, we store your IP address and the\n" +
                      "                                        name of your Internet service provider for seven days. This is for \n" +
                      "                                        security reasons; in particular, to prevent and detect attacks on our \n" +
                      "                                        websites or attempts at fraud."}
                </p>
              </div>

              <div className="point-description">
                <p>
                  {props.langVariables !== null
                    ? props.langVariables["store"]
                      ? props.langVariables["store"].lang_content
                      : "b. We only store other personal data if you provide this data, e.g. as \n" +
                        "                                        part of a registration, contact form, chat, survey, price competition or \n" +
                        "                                        for the execution of a contract, and even in these cases only insofar as this \n" +
                        "                                        is permitted to us on the basis of a consent given by you or in accordance \n" +
                        "                                        with the applicable legal provisions."
                    : "b. We only store other personal data if you provide this data, e.g. as \n" +
                      "                                        part of a registration, contact form, chat, survey, price competition or \n" +
                      "                                        for the execution of a contract, and even in these cases only insofar as this \n" +
                      "                                        is permitted to us on the basis of a consent given by you or in accordance \n" +
                      "                                        with the applicable legal provisions."}
                </p>
              </div>

              <div className="point-description">
                <p>
                  {props.langVariables !== null
                    ? props.langVariables["legally"]
                      ? props.langVariables["legally"].lang_content
                      : " c. You are neither legally nor contractually obligated to share your \n" +
                        "                                        personal information. However, certain features of our websites may \n" +
                        "                                        depend on the sharing or personal information. If you do not provide \n" +
                        "                                        your personal information in such cases, you may not be able to use \n" +
                        "                                        those features, or they may be available with limited functionality."
                    : " c. You are neither legally nor contractually obligated to share your \n" +
                      "                                        personal information. However, certain features of our websites may \n" +
                      "                                        depend on the sharing or personal information. If you do not provide \n" +
                      "                                        your personal information in such cases, you may not be able to use \n" +
                      "                                        those features, or they may be available with limited functionality."}
                </p>
              </div>

              <div className="point-description">
                <p>
                  {props.langVariables !== null
                    ? props.langVariables["obligations"]
                      ? props.langVariables["obligations"].lang_content
                      : "d. In addition, we use personal data to the extent that we are legally \n" +
                        "                                        obliged to do so (e.g., storage for the fulfilment of commercial or \n" +
                        "                                        tax-related retention obligations, release in accordance with official or \n" +
                        "                                        judicial orders, e.g. to a law enforcement authority)."
                    : "d. In addition, we use personal data to the extent that we are legally \n" +
                      "                                        obliged to do so (e.g., storage for the fulfilment of commercial or \n" +
                      "                                        tax-related retention obligations, release in accordance with official or \n" +
                      "                                        judicial orders, e.g. to a law enforcement authority)."}
                </p>
              </div>

              <div className="point-description-last">
                <p>
                  {props.langVariables !== null
                    ? props.langVariables["choose_delete"]
                      ? props.langVariables["choose_delete"].lang_content
                      : "You may choose to delete any of your submitted content from Bhalogari.com at anytime."
                    : "You may choose to delete any of your submitted content from Bhalogari.com at anytime."}
                </p>
              </div>
            </div>

            <div className="policies">
              <Title
                title1={
                  props.langVariables !== null
                    ? props.langVariables["purposes_of_use"]
                      ? props.langVariables["purposes_of_use"].lang_content
                      : "3. Purposes of Use"
                    : "3. Purposes of Use"
                }
              />
              <div className="point-description">
                <p>
                  {props.langVariables !== null
                    ? props.langVariables["personal_information"]
                      ? props.langVariables["personal_information"].lang_content
                      : "a. We use the personal information collected during your visit to any of our \n" +
                        "                                        websites to make using them as convenient as possible for you and to protect our \n" +
                        "                                        IT systems against attacks and other unlawful activities."
                    : "a. We use the personal information collected during your visit to any of our \n" +
                      "                                        websites to make using them as convenient as possible for you and to protect our \n" +
                      "                                        IT systems against attacks and other unlawful activities."}
                </p>
              </div>
              <div className="point-description">
                <p>
                  {props.langVariables !== null
                    ? props.langVariables["additional_information"]
                      ? props.langVariables["additional_information"].lang_content
                      : "b. If you share additional information with us – for example, by filling out \n" +
                        "                                        a registration form, contact form, chat, survey, contest entry or to execute \n" +
                        "                                        a contract with you – we will use that information for the designated \n" +
                        "                                        purposes, purposes of customer management and – if required – for purposes of \n" +
                        "                                        processing and billing and business transactions within the required scope in \n" +
                        "                                        each instance."
                    : "b. If you share additional information with us – for example, by filling out \n" +
                      "                                        a registration form, contact form, chat, survey, contest entry or to execute \n" +
                      "                                        a contract with you – we will use that information for the designated \n" +
                      "                                        purposes, purposes of customer management and – if required – for purposes of \n" +
                      "                                        processing and billing and business transactions within the required scope in \n" +
                      "                                        each instance."}
                </p>
              </div>
              <div className="point-description">
                <p>
                  {props.langVariables !== null
                    ? props.langVariables["other_purposes"]
                      ? props.langVariables["other_purposes"].lang_content
                      : "c. For other purposes (e.g. display of personalized content or advertising \n" +
                        "                                        based on your usage behaviour), we and, if applicable, selected third \n" +
                        "                                        parties, use your personal data if and to the extent you give your consent \n" +
                        "                                        through our consent management system.c. For other purposes (e.g. display of \n" +
                        "                                        personalized content or advertising based on your usage behaviour), we and, \n" +
                        "                                        if applicable, selected third parties, use your personal data if and to the \n" +
                        "                                        extent you give your consent through our consent management system."
                    : "c. For other purposes (e.g. display of personalized content or advertising \n" +
                      "                                        based on your usage behaviour), we and, if applicable, selected third \n" +
                      "                                        parties, use your personal data if and to the extent you give your consent \n" +
                      "                                        through our consent management system.c. For other purposes (e.g. display of \n" +
                      "                                        personalized content or advertising based on your usage behaviour), we and, \n" +
                      "                                        if applicable, selected third parties, use your personal data if and to the \n" +
                      "                                        extent you give your consent through our consent management system."}
                </p>
              </div>
            </div>

            <div className="policies">
              <Title
                title1={
                  props.langVariables !== null
                    ? props.langVariables["transfer"]
                      ? props.langVariables["transfer"].lang_content
                      : "4. Transfer of personal data to third parties; Social Plug-Ins; Use Of Service Providers"
                    : "4. Transfer of personal data to third parties; Social Plug-Ins; Use Of Service Providers"
                }
              />
              <div className="point-description">
                <p>
                  {props.langVariables !== null
                    ? props.langVariables["contain_third_parties"]
                      ? props.langVariables["contain_third_parties"].lang_content
                      : "a. Our websites may also contain an offer of third parties. If you click \n" +
                        "                                    on such an offer, we transfer data to the respective provider to the \n" +
                        "                                    required extent (e.g. information that you have found this offer with us \n" +
                        "                                    and, if applicable, further information that you have already provided on \n" +
                        "                                    our websites for this purpose)."
                    : "a. Our websites may also contain an offer of third parties. If you click \n" +
                      "                                    on such an offer, we transfer data to the respective provider to the \n" +
                      "                                    required extent (e.g. information that you have found this offer with us \n" +
                      "                                    and, if applicable, further information that you have already provided on \n" +
                      "                                    our websites for this purpose)."}
                </p>
              </div>
              <div className="point-description">
                <p>
                  {props.langVariables !== null
                    ? props.langVariables["social_plug_in"]
                      ? props.langVariables["social_plug_in"].lang_content
                      : "b. When we use social plug-ins on our websites from social networks \n" +
                        "                                        such as Facebook , we integrate them as follows:"
                    : "b. When we use social plug-ins on our websites from social networks \n" +
                      "                                        such as Facebook , we integrate them as follows:"}
                </p>
              </div>
              <div className="point-description">
                <p>
                  {props.langVariables !== null
                    ? props.langVariables["visit_site"]
                      ? props.langVariables["visit_site"].lang_content
                      : "When you visit our websites, the social plug-ins are deactivated, i.e. \n" +
                        "                                        no data is transmitted to the operators of these networks. If you want \n" +
                        "                                        to use one of the networks, click on the respective social plug-in to \n" +
                        "                                        establish a direct connection to the server of the respective network."
                    : "When you visit our websites, the social plug-ins are deactivated, i.e. \n" +
                      "                                        no data is transmitted to the operators of these networks. If you want \n" +
                      "                                        to use one of the networks, click on the respective social plug-in to \n" +
                      "                                        establish a direct connection to the server of the respective network."}
                </p>
              </div>
              <div className="point-description">
                <p>
                  {props.langVariables !== null
                    ? props.langVariables["user_account"]
                      ? props.langVariables["user_account"].lang_content
                      : "If you have a user account on the network and are logged in when you activate \n" +
                        "                                        the social plug-in, the network can associate your visit to our websites with \n" +
                        "                                        your user account. If you want to avoid this, please log out of the network \n" +
                        "                                        before activating the social plug-in"
                    : "If you have a user account on the network and are logged in when you activate \n" +
                      "                                        the social plug-in, the network can associate your visit to our websites with \n" +
                      "                                        your user account. If you want to avoid this, please log out of the network \n" +
                      "                                        before activating the social plug-in"}
                </p>
              </div>
              <div className="point-description-last">
                <p>
                  {props.langVariables !== null
                    ? props.langVariables["activate_social_plugin"]
                      ? props.langVariables["activate_social_plugin"].lang_content
                      : "When you activate a social plug-in, the network transfers the content \n" +
                        "                                        that becomes available directly to your browser, which integrates it \n" +
                        "                                        into our websites. In this situation, data transmissions can also take\n" +
                        "                                        place that are initiated and controlled by the respective social \n" +
                        "                                        network."
                    : "When you activate a social plug-in, the network transfers the content \n" +
                      "                                        that becomes available directly to your browser, which integrates it \n" +
                      "                                        into our websites. In this situation, data transmissions can also take\n" +
                      "                                        place that are initiated and controlled by the respective social \n" +
                      "                                        network."}
                </p>
              </div>
            </div>

            <div className="policies">
              <Title
                title1={
                  props.langVariables !== null
                    ? props.langVariables["electronic_newsletter"]
                      ? props.langVariables["electronic_newsletter"].lang_content
                      : "ELECTRONIC NEWSLETTERS"
                    : "ELECTRONIC NEWSLETTERS"
                }
              />
              <div className="point-description-last">
                <p>
                  {props.langVariables !== null
                    ? props.langVariables["offer"]
                      ? props.langVariables["offer"].lang_content
                      : " We may offer a free electronic newsletter to users. We will gather \n" +
                        "                                            the email addresses of users who sign up for Bhalogari.com for the \n" +
                        "                                            newsletter mailing list. Users may remove themselves from this \n" +
                        "                                            mailing list by opting out of receiving newsletters during the \n" +
                        "                                            registration process, by following the link provided in each \n" +
                        "                                            newsletter that points users to a subscription management page \n" +
                        "                                            where the user can unsubscribe from receiving newsletters or by \n" +
                        "                                            changing their preferences in their Profile Settings page."
                    : " We may offer a free electronic newsletter to users. We will gather \n" +
                      "                                            the email addresses of users who sign up for Bhalogari.com for the \n" +
                      "                                            newsletter mailing list. Users may remove themselves from this \n" +
                      "                                            mailing list by opting out of receiving newsletters during the \n" +
                      "                                            registration process, by following the link provided in each \n" +
                      "                                            newsletter that points users to a subscription management page \n" +
                      "                                            where the user can unsubscribe from receiving newsletters or by \n" +
                      "                                            changing their preferences in their Profile Settings page."}
                </p>
              </div>
            </div>

            <div className="policies">
              <Title
                title1={
                  props.langVariables !== null
                    ? props.langVariables["third_networks"]
                      ? props.langVariables["third_networks"].lang_content
                      : "I. Third-Party Ad Networks"
                    : "I. Third-Party Ad Networks"
                }
              />
              <div className="point-description">
                <p>
                  {props.langVariables !== null
                    ? props.langVariables["third_party"]
                      ? props.langVariables["third_party"].lang_content
                      : "We participate in third party ad networks that may display \n" +
                        "                                                advertisements on other websites based on your visits to our \n" +
                        "                                                Site as well as other websites. This enables us and these \n" +
                        "                                                third parties to target advertisements by displaying ads for \n" +
                        "                                                products and services in which you might be interested. Third \n" +
                        "                                                party ad network providers, advertisers, sponsors and/or \n" +
                        "                                                traffic measurement services may use cookies, JavaScript, web \n" +
                        "                                                beacons (including clear GIFs), Flash LSOs and other \n" +
                        "                                                technologies to measure the effectiveness of their ads and to \n" +
                        "                                                personalize advertising content to you. These third party \n" +
                        "                                                cookies and other technologies are governed by each third \n" +
                        "                                                party's specific privacy policy, and not by Bhalogari.com’s \n" +
                        "                                                Policy. We may provide these third-party advertisers with \n" +
                        "                                                information about your usage of our Site and our services, as \n" +
                        "                                                well as aggregate or non-personally identifiable information \n" +
                        "                                                about visitors to our Site and users of our service."
                    : "We participate in third party ad networks that may display \n" +
                      "                                                advertisements on other websites based on your visits to our \n" +
                      "                                                Site as well as other websites. This enables us and these \n" +
                      "                                                third parties to target advertisements by displaying ads for \n" +
                      "                                                products and services in which you might be interested. Third \n" +
                      "                                                party ad network providers, advertisers, sponsors and/or \n" +
                      "                                                traffic measurement services may use cookies, JavaScript, web \n" +
                      "                                                beacons (including clear GIFs), Flash LSOs and other \n" +
                      "                                                technologies to measure the effectiveness of their ads and to \n" +
                      "                                                personalize advertising content to you. These third party \n" +
                      "                                                cookies and other technologies are governed by each third \n" +
                      "                                                party's specific privacy policy, and not by Bhalogari.com’s \n" +
                      "                                                Policy. We may provide these third-party advertisers with \n" +
                      "                                                information about your usage of our Site and our services, as \n" +
                      "                                                well as aggregate or non-personally identifiable information \n" +
                      "                                                about visitors to our Site and users of our service."}
                </p>
              </div>
            </div>

            <div className="policies">
              <Title
                title1={
                  props.langVariables !== null
                    ? props.langVariables["governing"]
                      ? props.langVariables["governing"].lang_content
                      : "Governing Law"
                    : "Governing Law"
                }
              />
              <div className="point-description-goverment">
                <p>
                  {props.langVariables !== null
                    ? props.langVariables["operated"]
                      ? props.langVariables["operated"].lang_content
                      : "Bhalogari.com is operated under the laws and regulations of \n" +
                        "                                            Bangladesh under the trade license bearing Trade \n" +
                        "                                            License no: 151793"
                    : "Bhalogari.com is operated under the laws and regulations of \n" +
                      "                                            Bangladesh under the trade license bearing Trade \n" +
                      "                                            License no: 151793"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </PrivacyDiv>
  );
}

const PrivacyDiv = styled.div`
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
        .point-description {
          .contact-description {
            line-height: 20px;
            color: #646464;
            font-weight: 800;
          }
          padding-bottom: 16px;
          p {
            font-size: 14px;
            line-height: 25px;
            color: #646464;
            font-weight: 400;
          }
        }
        .point-description-goverment {
          padding-bottom: 0px;
          p {
            font-size: 14px;
            line-height: 25px;
            color: #646464;
            font-weight: 400;
          }
        }
        .point-description-last {
          padding-bottom: 16px;
          p {
            font-size: 14px;
            line-height: 25px;
            color: #646464;
            font-weight: 400;
          }
        }
        > p {
          font-size: 14px;
          line-height: 20px;
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
      }
    }
  }

  @media (max-width: 425px) {
    overflow: hidden;
    .contents {
      .texts {
        .descriptions {
          padding-bottom: 20px;
        }
      }
    }
  }
`;

export default PrivacyTexts;
