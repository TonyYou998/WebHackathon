import React, { Fragment } from "react";

export function UserPage(props) {
  return (
    <div className="profile__wrapper container-fluid">
      <div className="pr-4">
        <div className="profile__name">
          <div className="profile__img">
            <img
              className=""
              src="./img/162082031_2880103468926566_4374364692726017034_n.jpg"
              alt=""
            />
            <h3>Tan Vuu</h3>
          </div>
          <div className="profile__id">
            <p>
              <span style={{ fontSize: "18px", fontWeight: "500" }}>
                Student ID:{" "}
              </span>
              19520931
            </p>
            <p>
              {" "}
              <span style={{ fontSize: "18px", fontWeight: "500" }}>
                Class:{" "}
              </span>
              ATCL2019.1
            </p>
          </div>
        </div>
      </div>

      <div className="profile__info pl-4">
        <h5>General Information</h5>
        <div className="profile__table">
          <table>
            <tbody>
              <tr>
                <th style={{ width: "30%" }}>Academic Year</th>
                <td style={{ width: "2%", textAlign: "center" }}>:</td>
                <td>2021</td>
              </tr>
              <tr>
                <th style={{ width: "30%" }}>Gender</th>
                <td style={{ width: "2%", textAlign: "center" }}>:</td>
                <td>Male</td>
              </tr>
              <tr>
                <th style={{ width: "30%" }}>Email</th>
                <td style={{ width: "2%", textAlign: "center" }}>:</td>
                <td>tanvuu998@gmail.com</td>
              </tr>
              <tr>
                <th style={{ width: "30%" }}>Email</th>

                <td style={{ width: "2%", textAlign: "center" }}>:</td>
                <td>06/06/2001</td>
              </tr>
              <tr>
                <th style={{ width: "30%" }}>Phone </th>
                <td style={{ width: "2%", textAlign: "center" }}>:</td>
                <td>0368510465</td>
              </tr>
              <tr>
                <th style={{ width: "30%" }}>Address </th>
                <td style={{ width: "2%", textAlign: "center" }}>:</td>
                <td>Tien Giang</td>
              </tr>
              <tr>
                <th style={{ width: "30%" }}>School </th>
                <td style={{ width: "2%", textAlign: "center" }}>:</td>
                <td>UIT-VNU</td>
              </tr>
              <tr>
                <th style={{ width: "30%" }}>Language </th>
                <td style={{ width: "2%", textAlign: "center" }}>:</td>
                <td>Vietnamese</td>
              </tr>
              <tr>
                <th style={{ width: "30%" }}>Country </th>
                <td style={{ width: "2%", textAlign: "center" }}>:</td>
                <td>Vietnam</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
