import React, { Component } from "react";
import CountUp from "react-countup";

export default class SoluongThamGia extends Component {
  render() {
    return (
      <section className="solLuongThamGia mt-4" id="thongTin">
        <div className="container">
          <div className="row center text-center ">
            <div className="col-md shadow  bg-white rounded pt-5 pb-4 wow animate__tada">
              <h1 className="text-bluedark font-weight-bold">
                <CountUp delay={2} end={100} />
              </h1>
              <p className="font-weight-bold">TRƯỜNG ĐẠI HỌC</p>
            </div>
            <div className="col-1"></div>
            <div className="col-md shadow  bg-white rounded  pt-5 pb-4 wow animate__tada">
              <h1 className="text-bluedark font-weight-bold">
                <CountUp delay={2} end={10000} />
              </h1>
              <p className="font-weight-bold">SINH VIÊN</p>
            </div>
            <div className="col-1"></div>
            <div className="col-md shadow  bg-white rounded  pt-5 pb-4 wow animate__tada">
              <h1 className="text-bluedark font-weight-bold">
                <CountUp delay={2} end={1000} />
              </h1>
              <p className="font-weight-bold">GIÁO VIÊN</p>
            </div>
          </div>
          <h2 className="mt-3 text-center text-bluedark">
            Đã và đang sử dụng dịch vụ
          </h2>
        </div>
      </section>
    );
  }
}
