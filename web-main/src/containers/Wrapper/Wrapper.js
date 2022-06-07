import React, { useEffect } from "react";
import Header from "./MainNav";
// import Header from "./Menu";
import Footer from "./Footer";
import TopBar from "./TopBar";
import styled from "styled-components";
import { AppBar, makeStyles } from "@material-ui/core";
import Headroom from "react-headroom";
import { api } from "@configs/configs";

const useStyles = makeStyles({
  appheader: {
    boxShadow: "none",
    background: "transparent",
  },
});

function Wrapper(props) {
  // sessionStorage.setItem('lang', 'en');
  // sessionStorage.setItem('langChange', true);

  const lang = sessionStorage.getItem("lang") ? sessionStorage.getItem("lang") : "en";

  useEffect(() => {
    try {
      (async () => {
        await api.get("api/localization/lang-based-text/?language_code=" + lang + "&page_id=home").then((res) => {
          // console.debug(`Setting language to ${lang}`)
          sessionStorage.setItem("langVariables", JSON.stringify(res.data.result));
        });
      })();
    } catch (err) {
      console.error(err);
    }
  }, []);

  // const addNewService = () => {};
  const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.appheader}>
        <Headroom
          style={{
            WebkitTransition: "all .95s ease-in-out",
            MozTransition: "all .95s ease-in-out",
            OTransition: "all .95s ease-in-out",
            transition: "all .95s ease-in-out",
          }}
        >
          <TopBar
            serviceList={props.serviceList}
            removeService={props.removeService}
            totalCount={props.totalCount}
            totalPrice={props.totalPrice}
          />
          <Header
            serviceList={props.serviceList}
            removeService={props.removeService}
            totalCount={props.totalCount}
            totalPrice={props.totalPrice}
          />
        </Headroom>
      </AppBar>
      <Page>{props.children}</Page>
      <Footer />
    </div>
  );
}

const Page = styled.section`
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  flex: 1;
`;
export default Wrapper;
