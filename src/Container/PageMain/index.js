import { Button } from "@material-ui/core";
import React, { Component } from "react";
import { WOW } from "wowjs";
import HeaderPageMain from "./HeaderPageMain";
import NavBarPageMain from "../../Components/NavBarPageMain";
import { Route } from "react-router";
import SoluongThamGia from "./SoluongThamGia";
import Contact from "./Contact";
import Footer from "./Footer";

export default class PageMain extends Component {
  componentDidMount() {
    const wow = new WOW({
      offset: 100,
      mobile: true,
      live: true,
    });

    wow.init();
  }

  render() {
    return (
      <>
        <NavBarPageMain />
        <HeaderPageMain />
        <SoluongThamGia />
        <Contact />
        <Footer />
      </>
    );
  }
}
