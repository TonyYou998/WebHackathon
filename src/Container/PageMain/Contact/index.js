import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Contact extends Component {
  render() {
    return (
      <section className="contact mt-5 ">
        <div class="header-blog bg-animation py-5">
          <div class="container pt-2">
            <h2 className="text-center text-light mb-3">Thành viên team</h2>
            <div class="row header-row">
              <div className="col-6 col-md-3 position-relative  wow animate__pulse mb-1">
                <div className="contact-item rounded overflow-hidden shadow">
                  <img
                    src="./img/contact/dangNguyen.jpg"
                    className="w-100"
                    alt=""
                  />
                  <div
                    className="w-100 contact-content py-1 center  text-light  m-0 p-0 item-content text-center"
                    style={{ bottom: 0 }}
                  >
                    <h3>Nguyễn Khải Đăng</h3>
                    <p>Designer</p>
                  </div>
                  <NavLink to="/contact">
                    <div className="overGradiant center">
                      <p className="text-light text-center ">
                        {" "}
                        {">>>"} Chi tiết
                      </p>
                    </div>
                  </NavLink>
                </div>
              </div>

              <div className="col-6 col-md-3 position-relative  wow animate__pulse  mb-1">
                <div className="contact-item rounded overflow-hidden shadow">
                  <img
                    src="./img/contact/dangNguyen.jpg"
                    className="w-100"
                    alt=""
                  />
                  <div
                    className="w-100 contact-content py-1 center  text-light  m-0 p-0 item-content text-center"
                    style={{ bottom: 0 }}
                  >
                    <h3>Nguyễn Khải Đăng</h3>
                    <p>Designer</p>
                  </div>
                  <NavLink to="/contact">
                    <div className="overGradiant center">
                      <p className="text-light text-center ">
                        {" "}
                        {">>>"} Chi tiết
                      </p>
                    </div>
                  </NavLink>
                </div>
              </div>
              <div className="col-6 col-md-3 position-relative  wow animate__pulse  mb-1">
                <div className="contact-item rounded overflow-hidden shadow">
                  <img
                    src="./img/contact/dangNguyen.jpg"
                    className="w-100"
                    alt=""
                  />
                  <div
                    className="w-100 contact-content center py-1  text-light m-0 p-0 item-content text-center"
                    style={{ bottom: 0 }}
                  >
                    <h3>Nguyễn Khải Đăng</h3>
                    <p>Designer</p>
                  </div>
                  <NavLink to="/contact">
                    <div className="overGradiant center">
                      <p className="text-light text-center ">
                        {" "}
                        {">>>"} Chi tiết
                      </p>
                    </div>
                  </NavLink>
                </div>
              </div>
              <div className="col-6 col-md-3 position-relative  wow animate__pulse  mb-1">
                <div className="contact-item rounded overflow-hidden shadow">
                  <img
                    src="./img/contact/dangNguyen.jpg"
                    className="w-100"
                    alt=""
                  />
                  <div
                    className="w-100 contact-content center py-1  text-light m-0 p-0 item-content text-center"
                    style={{ bottom: 0 }}
                  >
                    <h3>Nguyễn Khải Đăng</h3>
                    <p>Designer</p>
                  </div>
                  <NavLink to="/contact">
                    <div className="overGradiant center">
                      <p className="text-light text-center ">
                        {" "}
                        {">>>"} Chi tiết
                      </p>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
