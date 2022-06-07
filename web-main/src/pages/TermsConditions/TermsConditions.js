import Article from "@components/Article/";
import BhaloBuy from "@components/BhaloBuy/BhaloBuy";
import CoverPhoto from "@components/TermsCoverPhoto/CoverPhoto";
import React, { useEffect, useState } from "react";
import Texts from "@components/TermsTexts/TermsTexts";
import { useLocation } from "react-router-dom";
import { api } from "@configs/configs";
// import BhaloAfterSalesWarranty from "@components/BhaloAfterSalesWarranty/BhaloAfterSalesWarranty";

function TermsConditions() {
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
      <CoverPhoto langVariables={langVariables} />
      <Texts langVariables={langVariables} />
      <BhaloBuy langVariables={langVariables} />
      <Article langVariables={langVariables} />
    </div>
  );
}

export default TermsConditions;
