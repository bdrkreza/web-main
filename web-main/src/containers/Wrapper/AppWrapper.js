import React from 'react';
import Header from "./MainNav";
import { AppBar, makeStyles } from "@material-ui/core";
import styled from "styled-components";
import TopBar from "./TopBar";
import Headroom from "react-headroom";

const useStyles = makeStyles({
    appheader: {
      boxShadow: "none",
      background: "transparent",
    },
  });

function AppWrapper(props) {

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
        </div>
    )
}

const Page = styled.section`
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  flex: 1;
`;

export default AppWrapper
