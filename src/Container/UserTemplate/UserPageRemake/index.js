import React from "react";


export default function UserPageRemake(props) {
 
  return (
    <div className="container-fluid profile__wrapper">
      <div
        className="profile__header "
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1508247967583-7d982ea01526?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80)",
        }}
      >
        <nav className=" profile__navbar navbar navbar-expand-lg navbar-dark">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="hover nav-item nav-link active" href="#">
                About <span className="sr-only">(current)</span>
              </a>
              <a className="hover nav-item nav-link" href="#">
                Friends
              </a>
              <a className="hover nav-item nav-link" href="#">
                Marks
              </a>
              <a className="hover nav-item nav-link" href="#">
                More
              </a>
            </div>
          </div>
        </nav>
        <div className="profile__info profile__info-top ">
          <div className="profile__avatar">
            <img
              src="https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/162082031_2880103468926566_4374364692726017034_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=C6DsZdLD-y0AX9PTFVs&_nc_ht=scontent-xsp1-3.xx&oh=8a7ed8065d23124cc035191a4f6118cd&oe=60A57B6C"
              alt=""
            ></img>
          </div>
          <div className="text-white pl-3">
            <h5>Tan Vuu</h5>
          </div>
        </div>
      </div>
      <div className=" pt-3 info-container ">
        <div className="info-left col-12 col-sm-4 pl-0">
          <div className="intro mb-2 shadow  bg-white rounded">
            <h4>Introdution</h4>
            <ul>
              <li style={{ color: "#16396a" }}>
                {" "}
                <span style={{ color: "black" }}>Fullname </span>Tan Vuu{" "}
              </li>
              <li style={{ color: "#16396a" }}>
                {" "}
                <span style={{ color: "black" }}>Class </span>ATCL2019.1{" "}
              </li>
              <li style={{ color: "#16396a" }}>
                {" "}
                <span style={{ color: "black" }}>ID </span>19520931{" "}
              </li>
              <li style={{ color: "#16396a" }}>
                {" "}
                <span style={{ color: "black" }}>Academic Year </span>2021{" "}
              </li>
            </ul>
          </div>
          <div className="activities shadow  bg-white rounded">
            <div className="activities__img">
              <img
                src="https://scontent-xsp1-1.xx.fbcdn.net/v/t1.6435-9/159464480_1409520522720313_5253230999488202238_n.png?_nc_cat=108&ccb=1-3&_nc_sid=e3f864&_nc_ohc=p6tcczPBj48AX_O_u0g&_nc_ht=scontent-xsp1-1.xx&oh=7d6cf6d5e0612836bb557c3accabade3&oe=60A44CC8"
                alt
              />
            </div>

            <h6 style={{ color: "#000 " }} className="py-4">
              {" "}
              <span>currently activity:</span> Web hackathon
            </h6>
          </div>
        </div>
        <div className="info-right   pr-0 col-12 col-sm-8">
          <div className="profile__info profile__info-general shadow  bg-white rounded pl-4 pr-0">
            <h5 style={{ color: "#000" }}>General Information</h5>
            <div className="profile__table">
              <table>
                <tbody>
                  <tr>
                    <th style={{ width: "30%" }}>Academic Year</th>

                    <td>2021</td>
                  </tr>
                  <tr>
                    <th style={{ width: "30%" }}>Gender</th>

                    <td>Male</td>
                  </tr>
                  <tr>
                    <th style={{ width: "30%" }}>Email</th>

                    <td>tanvuu998@gmail.com</td>
                  </tr>
                  <tr>
                    <th style={{ width: "30%" }}>Email</th>

                    <td>06/06/2001</td>
                  </tr>
                  <tr>
                    <th style={{ width: "30%" }}>Phone </th>

                    <td>0368510465</td>
                  </tr>
                  <tr>
                    <th style={{ width: "30%" }}>Address </th>

                    <td>Tien Giang</td>
                  </tr>
                  <tr>
                    <th style={{ width: "30%" }}>School </th>

                    <td>UIT-VNU</td>
                  </tr>
                  <tr>
                    <th style={{ width: "30%" }}>Language </th>

                    <td>Vietnamese</td>
                  </tr>
                  <tr>
                    <th style={{ width: "30%" }}>Country </th>

                    <td>Vietnam</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
