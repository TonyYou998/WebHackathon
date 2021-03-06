import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader  from "../../../Components/Loader";
import { actGetUserDataApi } from "./Module/action";


export default function UserPageRemake(props) {
  let dispatch=useDispatch();


   
        let data=useSelector(state=>state.userReducer.data);
       
    // useEffect(()=>{
      
    //   if(!data){
    //       dispatch(actGetUserDataApi(token));
         
    //   }
        


    // },[]);


     
    // console.log(data);
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
            <h5>{data && data.hoTen}</h5>
          </div>
        </div>
      </div>
      <div className=" pt-3 info-container ">
        <div className="info-left col-12 col-sm-4 pl-0">
          <div className="intro mb-2 shadow  bg-white rounded">
            <h4>Th??ng Tin</h4>
            <ul>
              <li style={{ color: "#16396a" }}>
                
                <span style={{ color: "black" }}>H??? T??n </span>{data && data.hoTen}
              </li>
              <li style={{ color: "#16396a" }}>
                
                <span style={{ color: "black" }}>L???p </span>{data && data.maLop}
              </li>
              {/* <li style={{ color: "#16396a" }}>
                {" "}
                <span style={{ color: "black" }}>MSSV </span>1951881{" "}
              </li> */}
              <li style={{ color: "#16396a" }}>
                {" "}
                <span style={{ color: "black" }}>N??m H???c </span>2021{" "}
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
              
              <span>Ho???t ?????ng ??ang Di???n Ra:</span> Web hackathon
            </h6>
          </div>
        </div>
        <div className="info-right   pr-0 col-12 col-sm-8">
          <div className="profile__info profile__info-general shadow  bg-white rounded pl-4 pr-0">
            <h5 style={{ color: "#000" }}>Th??ng tin chi ti???t</h5>
            <div className="profile__table">
              <table>
                <tbody>
                  <tr>
                    <th style={{ width: "30%" }}>N??m H???c</th>

                    <td>2021</td>
                  </tr>
                  <tr>
                    <th style={{ width: "30%" }}>ch???c v???</th>

                    <td>{data&& data.role}</td>
                  </tr>
                  <tr>
                    <th style={{ width: "30%" }}>Email</th>

                    <td>{data && data.email}</td>
                  </tr>
                  <tr>
                    <th style={{ width: "30%" }}>Ng??y sinh</th>

                    <td>06/06/1900</td>
                  </tr>
                  <tr>
                    <th style={{ width: "30%" }}>S??t </th>

                    <td>{data && data.soDt}</td>
                  </tr>
                  <tr>
                    <th style={{ width: "30%" }}>?????a ch??? </th>

                    <td>HCMC</td>
                  </tr>
                  <tr>
                    <th style={{ width: "30%" }}>Tr?????ng </th>

                    <td>UIT-VNU</td>
                  </tr>
                  <tr>
                    <th style={{ width: "30%" }}>Ng??n ng??? </th>

                    <td>Vietnamese</td>
                  </tr>
                  <tr>
                    <th style={{ width: "30%" }}>Qu???c tich </th>

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
