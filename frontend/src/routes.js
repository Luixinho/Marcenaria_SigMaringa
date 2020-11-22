import React from "react";
import { Switch, Route, Router } from "react-router-dom";

import login from "./pages/login";
import landing from "./pages/home";
import cadastro from "./pages/cadastro";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={landing} />
      <Route path="/login" component={login} />
      <Route path="/upload" component={cadastro} />
    </Switch>
  );
}

export default Routes;
