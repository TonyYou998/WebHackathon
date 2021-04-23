import { Button, TextField } from "@material-ui/core";
import React, { Component } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";
const GreenRadio = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function CauHoi() {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const classes = useStyles();
  return (
    <>
      <div className="col-12 col-md-4 col-xl-2"></div>
      <div className="col-12 col-lg-6 col-xl-10">
        <div className="col-12 mt-5"></div>
        <div className="d-none d-md-block mt-3 mt-md-0 col-md-2 mr-md-5"></div>
        <div className="col-12 shadow">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <TextField
                  id="standard-basic"
                  label="Nhập câu hỏi"
                  className="w-100"
                />
              </div>
              <div className="col-12">
                <div className="row py-2 text-center">
                  <div className="col-12 col-md-6">
                    <div className="row">
                      <div className="col-4 col-md-3 mt-3">
                        <Radio
                          checked={selectedValue === "a"}
                          onChange={handleChange}
                          value="a"
                          name="radio-button-demo"
                          inputProps={{ "aria-label": "A" }}
                        />{" "}
                        A.
                      </div>
                      <div className="col-8 col-md-6">
                        <TextField
                          id="standard-basic"
                          label="Đáp án"
                          className="w-100"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="row">
                      <div className="col-4 col-md-3 mt-3">
                        <Radio
                          checked={selectedValue === "b"}
                          onChange={handleChange}
                          value="b"
                          name="radio-button-demo"
                          inputProps={{ "aria-label": "B" }}
                        />{" "}
                        B.
                      </div>
                      <div className="col-8 col-md-6">
                        <TextField
                          id="standard-basic"
                          label="Đáp án"
                          className="w-100"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="row">
                      <div className="col-4 col-md-3 mt-3">
                        <Radio
                          checked={selectedValue === "c"}
                          onChange={handleChange}
                          value="c"
                          name="radio-button-demo"
                          inputProps={{ "aria-label": "C" }}
                        />{" "}
                        C.
                      </div>
                      <div className="col-8 col-md-6">
                        <TextField
                          id="standard-basic"
                          label="Đáp án"
                          className="w-100"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="row">
                      <div className="col-4 col-md-3 mt-3">
                        <Radio
                          checked={selectedValue === "D"}
                          onChange={handleChange}
                          value="d"
                          name="radio-button-demo"
                          inputProps={{ "aria-label": "D" }}
                        />{" "}
                        D.
                      </div>
                      <div className="col-8 col-md-6">
                        <TextField
                          id="standard-basic"
                          label="Đáp án"
                          className="w-100"
                        />
                      </div>
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
export default CauHoi;
