import React, { Component } from "react";
import NavBarPageMain from "../../../Components/NavBarPageMain";
import HerderDetail from "./header";
import ThongTin from "./ThongTin";
import { WOW } from "wowjs";
import Footer from "../Footer";

class ContactDetail extends Component {
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
      <div>
        <NavBarPageMain />
        <HerderDetail />
        <ThongTin />
        <Footer />
      </div>
    );
  }
}

export default ContactDetail;
