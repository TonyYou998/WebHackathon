import { Button, TextField } from "@material-ui/core";
import React, { Component } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";
import { Link } from "react-router-dom";

function BoCauHoi() {
  return (
    <>
      <div className=" container">
        <div className="mt-5 "></div>
        <div className="row ">
          <div className="col-lg-4 col-xl-2"></div>
          <div className="col-lg-6 col-xl-10 ">
            <div className="container-fluid">
              <div className="row">
                <div className="text-left col-12 w-100 bg-light shadow-lg mb-5 rounded-sm">
                  <div className="row">
                    <div className="col-8 font-weight-bold py-2 ">Đề 1</div>
                    <div className="col-4">
                      <Link to="/user/bode1">
                        <Button
                          className="w-100"
                          variant="contained"
                          color="primary"
                        >
                          Open
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-xl-2"></div>
          <div className="col-lg-6 col-xl-10 ">
            <div className="container-fluid">
              <div className="row">
                <div className="text-left col-12 w-100 bg-light shadow-lg mb-5 rounded-sm">
                  <div className="row">
                    <div className="col-8 font-weight-bold py-2">Đề 1</div>
                    <div className="col-4">
                      <Link to="/user/bode1">
                        <Button
                          className="w-100"
                          variant="contained"
                          color="primary"
                        >
                          Open
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default BoCauHoi;
