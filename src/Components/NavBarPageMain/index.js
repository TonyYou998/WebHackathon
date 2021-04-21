import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";

export default class NavBarPageMain extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light shadow bg-white rounde"
        id="navbar"
      >
        <div className="container d-flex justify-content-between">
          <div className="navbar-brand" alt>
            <NavLink to="/">
              <img
                className="d-none d-md-block"
                src="./logoHKT.png"
                alt=""
                style={{ height: 50, width: 230 }}
              />

              <img
                className="d-block d-md-none"
                src="./logoHKT.png"
                alt=""
                style={{ height: 25, width: 120 }}
              />
            </NavLink>
          </div>
          {/* responsive */}
          <div className="menu-wrap d-block d-md-none">
            <input type="checkbox" className="toggler" />
            <div className="hamburger">
              <div />
            </div>
            <div className="menu">
              <div>
                <div>
                  <ul>
                    <li className="nav-item bg-orange py-3">
                      <h4 className="text-light">MENU</h4>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/">
                        <a className="nav-link" href="/">
                          Trang chủ
                        </a>
                      </NavLink>
                    </li>
                    <hr />
                    <li className="nav-item">
                      <Link className="nav-link" to="#thongTin">
                        Thông tin
                      </Link>
                    </li>
                    <hr />
                    <li className="nav-item">
                      <a className="nav-link" href="/#thongTin">
                        Liên hệ
                      </a>
                    </li>
                    <hr />
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ flexGrow: 0 }}
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Trang chủ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Thông tin
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>
          <div className="d-none d-md-block">
            <Button type="button " className="btn-pink px-3">
              Đăng nhập
            </Button>
            <Button type="button " className="ml-3 px-3 btn-outline-pink">
              Đăng kí
            </Button>
          </div>
        </div>
      </nav>
    );
  }
}
