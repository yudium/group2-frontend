import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";

const UserRoute = ({ component: Component, title, ...rest }) => {
  const isAuthenticated = !!window.localStorage.getItem("auth");

  const location = useLocation();
  if (!isAuthenticated) {
    return (
      <Redirect
        to={`/login?to=${encodeURIComponent(
          location.pathname + location.search
        )}`}
      />
    );
  }

  document.title = title;

  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export default UserRoute;
