import React from "react";
import TraLoiCauHoi from "./TraLoiCauHoi";

export default function thamGia() {
  return (
    <>
      <div className=" container">
        <div className="mt-5 "></div>
        <div className="row">
          <div className="col-12 col-md-4 col-xl-2"></div>
          <div className="col-12 col-md-6 col-xl-10 text-center"></div>
          <TraLoiCauHoi />
          <TraLoiCauHoi />
          <TraLoiCauHoi />
          <TraLoiCauHoi />
        </div>
      </div>
    </>
  );
}
