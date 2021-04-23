import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Link } from "react-router-dom";
// import { MDCTextField } from "@material/textfield";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function QuizPage() {
  const classes = useStyles();
  return (
    <>
      <div className=" container">
        <div className="mt-5 "></div>
        <div className="row ">
          <div className="col-lg-4 col-xl-2"></div>
          <div className="col-lg-6 col-xl-10 ">
            <div className="container-fluid">
              <div className="row">
                <div
                  className="text-center col-12 col-md-5 w-100 bg-light shadow-lg mb-5 rounded-sm"
                  style={{ height: "17rem" }}
                  //   to="/user/taokenh"
                >
                  <h3 className="mt-5 text-danger font-weight-bold">
                    Tạo kênh
                  </h3>
                  <p>Tip: Tạo kênh để làm trắc nghiệm</p>
                  <Link
                    className="btn bg-success text-light"
                    to="/user/taokenh"
                    variant="contained"
                    color="primary"
                  >
                    Tạo kênh
                  </Link>
                </div>
                <div className=" d-none d-block col-2"></div>
                <div
                  className=" col-12 text-center col-md-5 w-100 bg-light shadow-lg rounded-sm"
                  style={{ height: "17rem" }}
                >
                  <h3 className="mt-5 text-danger font-weight-bold">
                    Tham gia
                  </h3>

                  <p>Nhập mã code</p>

                  <form className={classes.root} noValidate autoComplete="off">
                    <TextField
                      id="standard-basic"
                      variant="outlined"
                      defaultValue="123"
                      label="Mã code"
                    />
                  </form>
                  <Link
                    className="my-3 btn btn-warning text-light"
                    variant="contained"
                    color="primary"
                    to="/user/thamgia"
                  >
                    Bắt đầu
                  </Link>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuizPage;
