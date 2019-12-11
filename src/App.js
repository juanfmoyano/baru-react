import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// Routes info
import { getRoutesInfoAsArray } from "utils/routing/routesInfo";
import NotFound from "containers/NotFound/NotFound";

import Layout from "hoc/Layout/Layout";

import "./App.scss";

class App extends Component {
  createSwitchRoutes() {
    const routesInfo = getRoutesInfoAsArray();
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
            <Route path="*" component={NotFound} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
