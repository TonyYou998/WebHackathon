import React, { Component } from "react";
import { Button } from "@material-ui/core";

export default class HerderDetail extends Component {
  render() {
    return (
      <header className="pt-5 position-relative">
        <div
          className="svg-img float-right wow animate__bounceInRight"
          data-wow-delay="0.3s"
        ></div>
        <div className="imgItem d-none d-md-block">
          <div className="cay  wow ">
            <img src="./img/PageMain/cay@2x.png" alt="" />
          </div>
          <div className="ghe  wow ">
            <img src="./img/PageMain/ghe@2x.png" alt="" />
          </div>
          <div className="nguoi  wow ">
            <img src="./img/PageMain/nguoii@2x.png" alt="" />
          </div>
          <div className="ban  wow ">
            <img src="./img/PageMain/Ban@2x.png" alt="" />
          </div>

          <div className="den  wow ">
            <img src="./img/PageMain/den@2x.png" alt="" />
          </div>
        </div>
        <div className="container d-none d-md-block" style={{ marginTop: 250 }}>
          <div className="row">
            <div className="col-12 text-dark welcome">
              <h1>Thông tin thành viên</h1>
            </div>
          </div>
        </div>
        {/* {"responsive"} */}
        <div
          className="container d-block d-md-none position-absolute text-center"
          style={{ marginTop: 50 }}
        >
          <div className="row position-relative">
            <div className="col-12 text-dark welcome mt-5">
              <h1>Thông tin thành viên</h1>
            </div>
            <div className="col-12 wow animate__fadeInUp mt-5 pt-5">
              <img
                src="./img/PageMain/study_1@2x.png"
                className="w-100"
                alt=""
              />
            </div>
          </div>
        </div>
      </header>
    );
  }
}
