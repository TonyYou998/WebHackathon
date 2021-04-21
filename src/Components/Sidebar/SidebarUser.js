import React from "react";
import { Link } from "react-router-dom";
function SidebarUser() {
  return (
    <div className="sidebar__wrapper shadow  bg-white rounded">
      <div className="sidebar-avatar pt-5">
        <div className="container text-center">
          <img
            src="https://courses.uit.edu.vn/theme/image.php?theme=boost&component=core&rev=1614229684&image=u%2Ff1"
            alt
          />
          <h5 style={{ color: "#5d64a5", fontWeight: "700" }} className="pt-2">
            Tan Vuu
          </h5>
          <h6>Teacher</h6>
        </div>
      </div>
      <div className="sidebar-li pl-2 ">
        <ul>
          <Link>
            <li className="pt-4 bg-white ">
              <span className="mx-3">
                <i class="fa fa-home"></i>
              </span>
              Home
            </li>
          </Link>
          <hr />
          <Link>
            <li className="bg-white ">
              <span className="mx-3">
                <i class="fa fa-comments"></i>
              </span>
              Message
            </li>
          </Link>
          <hr />
          <Link>
            <li className="bg-white ">
              <span className="mx-3">
                <i class="fa fa-users"></i>
              </span>
              Groups
            </li>
          </Link>
          <hr />
          <Link>
            <li className="bg-white ">
              <span className="mx-3">
                <i class="fa fa-question"></i>
              </span>
              Quiz
            </li>
          </Link>
        </ul>
        <hr />
      </div>

      <div className="mt-5 sidebar-logout pl-2">
        <ul>
          <Link>
            <li className="bg-white ">
              <span className="mx-3">
                <i class="fa fa-user"></i>
              </span>
              Profile
            </li>
          </Link>
          <hr />
          <Link>
            <li className="bg-white ">
              <span className="mx-3">
                <i class="fa fa-circle-notch"></i>
              </span>
              Đăng xuất
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default SidebarUser;
