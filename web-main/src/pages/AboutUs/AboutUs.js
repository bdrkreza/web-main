import React, { useEffect, useState } from "react";
import AboutIntro from "@components/AboutIntro/AboutIntro";
import AboutUsCover from "@components/AboutUsCover/AboutUsCover";
import Article from "@components/Article/";
import BhaloBuy from "@components/BhaloBuy/BhaloBuy";
import BhaloFAQ from "@components/BhaloFAQ/BhaloFAQ";
import Choose from "@components/Choose/choose";
import Mission from "@components/Mission/mission";
// import BhaloAfterSalesWarranty from "@components/BhaloAfterSalesWarranty/BhaloAfterSalesWarranty";
// import News from "@components/BhaloNews/News";
// import Trust from "@components/BhaloTrust/trust";
import { useLocation } from "react-router-dom";
import { api } from "@configs/configs";

function AboutUs() {
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
      <AboutUsCover langVariables={langVariables} />
      <AboutIntro langVariables={langVariables} />
      <Mission langVariables={langVariables} />
      <Choose langVariables={langVariables} />
      <BhaloFAQ />
      <BhaloBuy langVariables={langVariables} />
      <Article langVariables={langVariables} />
    </div>
  );
}

export default AboutUs;
