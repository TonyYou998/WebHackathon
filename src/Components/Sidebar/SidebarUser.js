import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { actGetUserDataClear } from "../../Container/UserTemplate/UserPageRemake/Module/action";
function SidebarUser() {
  let history=useHistory();
  let dispatch=useDispatch(); 
  const data=useSelector(state=>state.userReducer.data);
  
  const handleLogout=()=>{
      localStorage.removeItem("public_key");
      dispatch(actGetUserDataClear());
      history.push("/");
  }
  const renderRole=()=>{
      if(data && data.role==="gv")
        return "Giáo Viên";
      else return "Học sinh"
  }
  return (
    <div className="sidebar__wrapper sidebar__responsive shadow  bg-white rounded">
      <div className="sidebar-avatar pt-5">
        <div className="container text-center">
          <img
            src="https://courses.uit.edu.vn/theme/image.php?theme=boost&component=core&rev=1614229684&image=u%2Ff1"
            alt
          />
          <h5 style={{ color: "#5d64a5", fontWeight: "700" }} className="pt-2">
            {data && data.taiKhoan}
          </h5>
          <h6>{renderRole()}</h6>
        </div>
      </div>
      <div className="sidebar-li pl-2 ">
        <ul>
            
          <Link to="/user/homepage">
            <li className=" shadow-sm bg-white py-2 ">
              <span className="mx-3">
                <i class="fa fa-home"></i>
              </span>
              Trang chủ
            </li>
          </Link>
        
          <Link to="/user/message">
            <li className="shadow-sm bg-white py-2 ">
              <span className="mx-3">
                <i class="fa fa-comments"></i>
              </span>
              Tin nhắn
            </li>
          </Link>
         
          <Link to="/user/group">
            <li className="shadow-sm bg-white py-2 ">
              <span className="mx-3">
                <i class="fa fa-users"></i>
              </span>
              Lớp học
            </li>
          </Link>
      
          <Link to="/user/quiz">
            <li className="shadow-sm bg-white py-2 ">
              <span className="mx-3">
                <i class="fa fa-question"></i>
              </span>
              Kiểm tra
            </li>
          </Link>
           <Link to="/user/profile">
            <li className="shadow-sm bg-white py-2 ">
              <span className="mx-3">
                <i class="fa fa-user"></i>
              </span>
              Thông tin
            </li>
          </Link>
         
          <Link>
            <li className="shadow-sm bg-white py-2 " onClick={()=>{
              handleLogout();
            }}>
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
