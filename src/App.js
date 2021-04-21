import logo from "./logo.svg";
import "./App.css";
import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import BackToTop from "react-back-to-top";

import { routesHome } from "./Routes";
import HomeTemplate from "./Container/HomeTemplate";
import BackToTop from "./Components/BackToTop";
export default class App extends Component {
  showLayoutHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <HomeTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.Component}
          />
        );
      });
    }
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>{this.showLayoutHome(routesHome)}</Switch>
        <BackToTop />
      </BrowserRouter>
    );
  }
}
