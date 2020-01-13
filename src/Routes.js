import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import About from "./containers/About";
import Help from "./containers/Help"
import Leaderboards from "./containers/Leaderboards"
import RedirectLogin from "./containers/RedirectLogin"
import AppliedRoute from "./components/AppliedRoute";
import NotFound from "./containers/NotFound";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

export default function Routes({ appProps }) {
  return (
    <Switch>
      <AppliedRoute path="/" exact component={Home} appProps={appProps} />
      <AppliedRoute path="/about" exact component={About} appProps={appProps} />
      <AppliedRoute path="/help" exact component={Help} appProps={appProps} />
      <UnauthenticatedRoute path="/login" exact component={Login} appProps={appProps} />
      <UnauthenticatedRoute path="/signup" exact component={Signup} appProps={appProps} />
      <AuthenticatedRoute path="/leaderboards" exact component={Leaderboards} appProps={appProps} />
      <UnauthenticatedRoute path="/redirectlogin" exact component={RedirectLogin} appProps={appProps} />
      { /* Finally, catch all unmatched routes */ }
      <Route component={NotFound} />
    </Switch>
  );
}