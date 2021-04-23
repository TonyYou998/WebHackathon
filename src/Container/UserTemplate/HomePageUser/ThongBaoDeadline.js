import { Button } from "@material-ui/core";
import React, { Component } from "react";

export default class ThongBaoDeadline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchSuccess: "d-block",
    };
  }

  render() {
    const { fetchSuccess } = this.state;

    return (
      <>
        <div className={`d-none d-md-block col-md-2 ${fetchSuccess}`}></div>
        <div className={`col-12 col-md-10 shadow pb-2 my-3  ${fetchSuccess}`}>
          <div className="container-fluid">
            <div className="row">
              <div className="m-0 ml-md-5 col-6 col-md-3">
                <Button
                  className="mb-md-0   w-100 text-light bg-danger text-center center rounded overflow-hidden"
                  style={{ height: 100 }}
                >
                  <div className="row">
                    <div className="col-12">
                      <h3 className="pt-2">10 Deadline</h3>
                    </div>
                    <div className=" d-none d-md-block col-12">
                      <hr className="bg-light my-2" />
                    </div>
                    <div className="d-none d-md-block col-12">
                      <p className="m-0 pb-2">Xem chi tiết</p>
                    </div>
                  </div>
                </Button>
              </div>
              <div className="d-none d-md-block col-1"></div>
              <div className="col-6 col-md-3">
                <Button
                  className="w-100 text-light bg-success text-center center rounded overflow-hidden"
                  style={{ height: 100 }}
                >
                  <div className="row">
                    <div className="col-12">
                      <h3 className="pt-2">10 Tin nhắn</h3>
                    </div>
                    <div className="d-none d-md-block col-12">
                      <hr className="bg-light my-2" />
                    </div>
                    <div className="d-none d-md-block col-12">
                      <p className="m-0 pb-2">Xem chi tiết</p>
                    </div>
                  </div>
                </Button>
              </div>
              <div className=" d-none d-md-block col-1"></div>
              <div className=" d-none d-md-block col-md-3">
                <Button
                  className="w-100 text-light bg-warning text-center center rounded overflow-hidden"
                  style={{ height: 100 }}
                >
                  <div className="row">
                    <div className="col-12">
                      <h3 className="pt-2">10 hoàn thành</h3>
                    </div>
                    <div className="d-none d-md-block col-12">
                      <hr className="bg-light my-2" />
                    </div>
                    <div className="d-none d-md-block col-12">
                      <p className="m-0 pb-2">Xem chi tiết</p>
                    </div>
                  </div>
                </Button>
              </div>
            </div>
          </div>
          <div className="text-right mb-0">
            <Button
              className=" text-right mb-0"
              onClick={() => {
                this.setState({
                  fetchSuccess: "d-none",
                });
              }}
            >
              <i class="fa fa-times"></i> CLOSE
            </Button>
          </div>
        </div>
      </>
    );
  }
}
