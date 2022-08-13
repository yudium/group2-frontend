import React from "react";
import { Route } from "react-router-dom";

const AnyRoute = ({ component: Component, title, ...rest }) => {
  document.title = title;
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export default AnyRoute;
