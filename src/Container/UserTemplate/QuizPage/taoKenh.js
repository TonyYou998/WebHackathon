import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React from "react";
import { Link } from "react-router-dom";
import CauHoi from "./CauHoi";
import NewCauHoi from "./NewCauHoi";

const UseStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function taoKenh() {
  const classes = UseStyles();
  return (
    <>
      <div className=" container">
        <div className="mt-5 "></div>
        <div className="row">
          <div className="col-12 col-md-4 col-xl-2"></div>
          <div className="col-12 col-md-6 col-xl-10 ">
            <div className="container-fluid text-center center font-weight-bold">
              <div className="row">
                <div className="col-12 col-md-4 col-lg-2 p-0">
                  <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Tên đề" />
                  </form>
                </div>
                <div className="d-none d-md-block col-md-4 col-lg-8"></div>
                <div className="col-12 col-md-4 col-lg-2 p-0">
                  <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Tạo code tham gia" />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 col-xl-2"></div>
          <div className="col-12 col-md-6 col-xl-10 text-center">
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                alert("Tính năng chưa phát triển");
              }}
            >
              Bắt đầu
            </Button>
          </div>
          {/* <CauHoi /> */}
          <NewCauHoi />
        </div>
      </div>
    </>
  );
}

export default taoKenh;
