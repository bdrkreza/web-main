import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Componnet, flag, ...rest }) => {
  const token = localStorage.getItem("access_token");
  // const serviceList = {...rest}

  return (
    <Route
      {...rest}
      render={(props) => {
        // console.log("route props: ", rest.serviceList);
        if (token !== null)
          return (
            <Componnet
              {...props}
              serviceList={rest.serviceList}
              removeService={rest.removeService}
              totalCount={rest.totalCount}
              totalPrice={rest.totalPrice}
              decrementService={rest.decrementService}
              addToCart={rest.addToCart}
            />
          );
        else
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: props.location,
              }}
            />
          );
      }}
    />
  );
};

export default ProtectedRoute;
