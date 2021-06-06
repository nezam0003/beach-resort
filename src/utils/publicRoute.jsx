import React from "react";
import { Redirect, Route } from "react-router";
import { getToken } from "./Common";

const publicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return !getToken() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/dashboard" }} />
        );
      }}
    />
  );
};

export default publicRoute;
