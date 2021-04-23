import { Button } from "@material-ui/core";
import React from "react";
import Status from "./Status";
import StatusVideo from "./Status_video";
import ThongBaoDeadline from "./ThongBaoDeadline";

export default function HomePageUser(props) {
  return (
    <>
      <div className=" container-fluid mt-md-5">
        <div className="row ">
          <ThongBaoDeadline />

          <Status />
          <StatusVideo />
          <Status />
          <Status />
          <Status />
          <StatusVideo />
          <StatusVideo />
          <Status />
          <Status />
          <Status />
        </div>
      </div>
    </>
  );
}
