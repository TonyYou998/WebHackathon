import { Button, TextField } from "@material-ui/core";
import React, { Component, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";
import { Link } from "react-router-dom";
import danhSachLopHoc from "./danhSachLopHoc.json";
import NewCauHoi from "./NewCauHoi";
import NewDe from "./NewDe";
import ItemDe from "./ItemDe";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";

const renderHTML = () => {
  return danhSachLopHoc.danhSachBoDe.map((item) => {
    return (
      <>
        <div className="col-lg-4 col-xl-2"></div>
        <div className="col-lg-6 col-xl-10 ">
          <div className="container-fluid">
            <div className="row">
              <div className="text-left col-12 w-100 bg-light shadow-lg mb-5 rounded-sm">
                <div className="row">
                  <div className="col-8 font-weight-bold py-2 ">{item.ten}</div>
                  <div className="col-4">
                    <Link to={"/user/bode/" + item.id}>
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
      </>
    );
  });
};
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));
function BoCauHoi() {
  const classes = useStyles();
  const [count, setCount] = useState(0);
  const renderNewBoDe = () => {
    let i = 1;
    let temp = [];
    while (i <= count) {
      temp.push(1);
      i++;
    }
    return temp.map((item) => {
      return <ItemDe />;
    });
  };
  return (
    <>
      <div className=" container">
        <div className="mt-5 "></div>
        <div className="row ">
          {renderHTML()}
          {renderNewBoDe()}
          <div className="col-12 col-md-4 col-xl-2"></div>
          <div className="col-12 col-lg-6 col-xl-10">
            <div className={classes.root}>
              <Fab
                color="primary"
                aria-label="add"
                onClick={() => {
                  renderNewBoDe();
                  setCount(count + 1);
                }}
              >
                <AddIcon />
              </Fab>
              <Fab color="secondary" aria-label="edit">
                <EditIcon />
              </Fab>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default BoCauHoi;
