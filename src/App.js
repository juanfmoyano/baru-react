import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// Routes info
import { getRoutesInfo } from "utils/routing/routesInfo";
import Layout from "hoc/Layout/Layout";

import "./App.scss";

class App extends Component {
  createSwitchRoutes() {
    const routesInfo = getRoutesInfo();
    return routesInfo.map(route => (
      <Route
        key={route.path}
        exact={route.exact}
        path={route.path}
        component={route.component}
      />
    ));
  }

  render() {
    return (
      <div>
        <Layout>
          <Switch>
            {this.createSwitchRoutes()}
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
