import { Button } from "@material-ui/core";
import React from "react";
import Status from "./Status";
import ThongBaoDeadline from "./ThongBaoDeadline";

export default function HomePageUser(props) {
  return (
    <>
      <div className=" container-fluid mt-md-5">
        <div className="row ">
          <ThongBaoDeadline />

          <Status />
          <Status />
          <Status />
          <Status />
          <Status />
          <Status />
          <Status />
          <Status />
        </div>
      </div>
    </>
  );
}
