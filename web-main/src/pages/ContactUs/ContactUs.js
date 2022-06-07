import React, { useEffect, useState } from "react";
import ContactUsCover from "@components/ContactUsCover/ContactUsCover";
import ContactUsBox from "@components/ContactUsBox/ContactUsBox";
import styled from "styled-components";
import ContactForm from "@components/ContactForm/ContactForm";
import BhaloMap from "@components/BhaloMap/BhaloMap";
// import BhaloAfterSalesWarranty from "@components/BhaloAfterSalesWarranty/BhaloAfterSalesWarranty";
import BhaloBuy from "@components/BhaloBuy/BhaloBuy";
import Article from "@components/Article/";
import BhaloFAQ from "@components/BhaloFAQ";
import { useLocation } from "react-router-dom";
import { api } from "@configs/configs";

function ContactUs() {
  // Multilingual Check
  const location = useLocation();
  const lang =
    sessionStorage.getItem("lang") && sessionStorage.getItem("lang") != "null" ? sessionStorage.getItem("lang") : "en";
  const [langVariables, setLangVariables] = useState(null);

  let pathname = location.pathname.slice(1);
  useEffect(() => {
    if (pathname == "") {
      pathname = "home";
    } else {
      pathname = pathname.replace("-", "_");
    }

    try {
      (async () => {
        await api
          .get("api/localization/lang-based-text/?language_code=" + lang + "&page_id=" + pathname)
          .then((res) => {
            sessionStorage.setItem("langVariables", JSON.stringify(res.data.result));
            setLangVariables(JSON.parse(sessionStorage.getItem("langVariables")));
          });
      })();
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div>
      <ContactUsCover langVariables={langVariables} />
      <ContactUsBox langVariables={langVariables} />
      <LocationDiv>
        <BhaloMap />
        <ContactForm langVariables={langVariables} />
      </LocationDiv>
      <BhaloFAQ />
      <BhaloBuy langVariables={langVariables} />
      <Article langVariables={langVariables} />
    </div>
  );
}
const LocationDiv = styled.div`
  margin-top: 55px;
  display: flex;
  & > div {
    flex: 1 1 50%;
  }

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 767px) {
    margin-top: 30px;
    flex-direction: column;
    & > div {
      flex: 1 1 100%;
    }
  }
`;

export default ContactUs;
