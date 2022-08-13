import React from "react";
import { Route, Redirect } from "react-router-dom";

const GuestRoute = ({ component: Component, title, ...rest }) => {
  const isAuthenticated = !!window.localStorage.getItem("auth");

  if (isAuthenticated) return <Redirect to="/" />;

  document.title = title;

  return (
    <Route {...rest} exact render={(props) => <Component {...props} />} />
  );
};

export default GuestRoute;
