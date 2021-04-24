import { Button } from "@material-ui/core";
import React, { Component } from "react";
import {Link} from "react-router-dom";
export default class HeaderPageMain extends Component {
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
            <div className="col-12 text-dark">
              <h1
                className="wow animate__fadeInDown "
                data-wow-delay="0.4s"
                style={{
                  margin: "auto 0",
                  color: "#3E4794",
                  fontSize: 50,
                  fontWeight: 700,
                }}
              >
                4.0 LEARNING
              </h1>
              <p
                style={{ fontSize: 30 }}
                className="wow animate__fadeInDown"
                data-wow-delay="0.5s"
              >
                Nơi trao đổi học tập dành riêng cho học sinh và giáo viên trong
                mùa dịch covid
              </p>
              <Link to="/dangnhap"
                type="button "
                className="btn-pink px-5 py-2 wow animate__fadeInDown"
                data-wow-delay="0.6s"
              >
                Bắt đầu
              </Link>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
        {/* {"responsive"} */}
        <div
          className="container d-block d-md-none position-absolute text-center"
          style={{ marginTop: 50 }}
        >
          <div className="row">
            <div className="col-12 text-dark">
              <h1
                className="wow animate__fadeInDown "
                data-wow-delay="0.4s"
                style={{
                  margin: "auto 0",
                  color: "#3E4794",
                  fontSize: 50,
                  fontWeight: 700,
                }}
              >
                4.0 LEARNING
              </h1>
              <p
                style={{ fontSize: 30 }}
                className="wow animate__fadeInDown"
                data-wow-delay="0.5s"
              >
                Nơi trao đổi học tập dành riêng cho học sinh và giáo viên trong
                mùa dịch covid
              </p>
              <Button
                type="button "
                className="btn-pink px-5 py-2 wow animate__fadeInDown"
                data-wow-delay="0.6s"
              >
                Bắt đầu
              </Button>
            </div>
            <div className="col-2"></div>
            <div className="col-12 wow animate__fadeInUp">
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
