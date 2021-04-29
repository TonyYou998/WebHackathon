import { Button, TextField } from "@material-ui/core";
import { ThemDeActon } from "./Modules/aciton";
import { TCH } from "./Modules/constant";
import { React, useState } from "react";
import danhSachLopHoc from "./danhSachLopHoc.json";
import { NavLink } from "react-router-dom";

export default function ItemDe() {
  const [count, setCount] = useState(danhSachLopHoc.danhSachBoDe.length);
  let tenDe = "";
  return (
    <>
      <div className="col-12 col-md-4 col-xl-2"></div>
      <div className="col-12 col-lg-6 col-xl-10">
        <div className="col-12 mt-5"></div>
        <div className="d-none d-md-block mt-3 mt-md-0 col-md-2 mr-md-5"></div>
        <div className="col-12 shadow">
          <div className="container">
            <div className="row">
              <div className="col-10 my-2">
                <TextField
                  id="standard-basic"
                  label="Tên bộ đề"
                  className="w-100"
                  onChange={(e) => {
                    tenDe = e.target.value;
                  }}
                />
              </div>
              <div className="col-2">
                <NavLink to="/user/taokenh">
                  <Button
                    variant="outlined"
                    color="primary"
                    className="my-4 w-100"
                    style={{ margin: "auto 0" }}
                    onClick={() => {
                      danhSachLopHoc.danhSachBoDe.push({
                        ten: tenDe,
                        id: count + 1,
                        danhSachCauHoi: [{}],
                      });
                    }}
                  >
                    Thêm
                  </Button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
