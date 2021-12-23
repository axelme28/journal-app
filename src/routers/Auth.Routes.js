import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { LogInScreen } from "../components/auth/LogInScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";

export const AuthRoutes = () => {
  return (
    <div className="auth__main">
      <div className="auth__box-container">
        <Switch>
          <Route path="/auth/login" component={LogInScreen} />

          <Route path="/auth/register" component={RegisterScreen} />

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </div>
  );
};
