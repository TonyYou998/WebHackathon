import { Button } from "@material-ui/core";
import React, { Component, Fragment } from "react";
import { useSelector } from "react-redux";
import ListRead from "../ListRead";
function Question(props) {
    const data=useSelector(state=>state.userReducer.data);
      const handleCheck=()=>{
          if(data && data.role==="gv"){
            return (
            //    <Button
            //         className="col-4"
            //         onClick={() => {
            //           alert("Tính năng chưa phát triển");
            //         }}
            //       >
            //         Kiểm tra
            //       </Button>
            // )
            <Fragment>
                <ListRead/>
            </Fragment>
          
            )
          }
          else{
            return ( <Button
                    className="col-4"
                    onClick={() => {
                      alert("Tính năng chưa phát triển");
                    }}
                  >
                    Chia sẻ
                  </Button>)
          }
      }

    return (
              <>
        <div className="col-12 mt-5"></div>
        <div className="d-none d-md-block mt-3 mt-md-0 col-md-2 mr-md-5"></div>
        <div className="col-12 col-md-9 shadow ml-0 ml-md-5 mt-5 mt-md-0">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col-2 col-sm-2  col-md-1">
                    <div
                      className="avatar border bg-secondary"
                      style={{ width: 50, height: 50, borderRadius: "50%" }}
                    ></div>
                  </div>
                  <div className="col-7 col-sm-6 col-md-4 col-lg-2">
                    <p className="font-weight-bold mb-0">Lâm Duy</p>
                    <p className="">2 năm trước</p>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="container">
                  <div>mọi người cho mình hỏi làm sao để routing từ home page qua contact vậy ạ</div>
                </div>
              </div>
              <div className="col-12">
                <div className="row py-2 text-center">
                  <Button className="col-4 like">
                    <div className="interact">
                      <div role="button" className="like-button mt-1">
                        Like
                        <ul className="interact-options bg-light ">
                          <li>
                            <a href="#" className="like">
                              👍🏽
                            </a>
                          </li>
                          <li>
                            <a href="#" className="love">
                              ❤️
                            </a>
                          </li>
                          <li>
                            <a href="#" className="laugh">
                              😆
                            </a>
                          </li>
                          <li>
                            <a href="#" className="what">
                              😯
                            </a>
                          </li>
                          <li>
                            <a href="#" className="sad">
                              😥
                            </a>
                          </li>
                          <li>
                            <a href="#" className="angry">
                              😡
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Button>
                  <Button
                    className="col-4"
                    onClick={() => {
                      alert("Tính năng chưa phát triển");
                    }}
                  >
                    Bình luận
                  </Button>
                 
                  {handleCheck()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}

export default Question
