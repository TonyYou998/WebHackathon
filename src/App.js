import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";

import {routesHome} from "./Routes";
import HomeTemplate from "./Container/HomeTemplate";
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
        <Switch>
          {this.showLayoutHome(routesHome)}

           
        </Switch>

      </BrowserRouter>
     
    );
  }
}