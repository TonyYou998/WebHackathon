import { Button } from "@material-ui/core";
import React, { Component, Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ListRead from "../ListRead";
import Axios from 'axios';
// import { resetState } from "sweetalert/typings/modules/state";
function Question(props) {
  const data = useSelector(state => state.userReducer.data);
  const handleCheck = () => {
    if (data && data.role === "gv") {
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
          <ListRead />
        </Fragment>

      )
    }
    else {
      return (<Button
        className="col-4"
        onClick={() => {
          alert("Tính năng chưa phát triển");
        }}
      >
        Chia sẻ
      </Button>)
    }
  }

  const [state, setState] = useState({
    video: '',
    pdf: '',
    moTa: '',
    flag: false,
    autoplay: 0,
    timeOut: 10000,
    True: false,
    ChuaXong: false,
    key: false
  })

  let runTime = () => {
    let time = 0;
    while (true) {
      setTimeout(() => {
        time++;
      }, 1000)
      if (time === 10) break;
    }
  }

  let LayTaiLieuKhoaHoc = () => {
      let promise = Axios({
      url: 'http://192.168.43.223:8080/posts',
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + localStorage.getItem('public_key')
      },
    })
    promise.then(res => {
      console.log(res.data);
    })

    promise.catch(err => {
      console.log(err.response.data);
    })
  }

  let GuiDuLieuSinhVienHoanThanh = () => {

  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    LayTaiLieuKhoaHoc();
  }, [])

  let RunTime = () => {
    setTimeout(() => {
      alert("ROI");
    }, 3000)
  }

  // useEffect(() => {
  //   if(state.True===true) {

  //       alert("ROI");
  //   }
  //   else {
  //     // clearTimeout();
  //     alert("CHUA");
  //   }
  // },[state.True])


  // useEffect(() => {
  //   var myVar;
  //   function Run_Time() {
  //   myVar = setTimeout(function(){ alert("Hello"); }, 3000);
  //   setTimeout(function(){ alert("Hello"); }, 3000)
  //   }

  //   function StopF() {
  //     clearTimeout(myVar);
  //   }

  //   if(state.True===true) {
  //     // setState({...state,True:false});
  //     Run_Time();
  //     StopF();  

  //   }
  //   else {
  //     setTimeout(() => {

  //     },3000)

  //     // setState({...state,True:false});
  //   }
  // },[state.autoplay])

  console.log("True:", state.True);
  console.log("autoPlay:", state.autoplay);



  return (
    <div className='question__BD'>
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
                <div className='video__Display'>

                </div>

                <div className='button__BD'>
                  <span>Link video bài giảng: </span>
                  <button onClick={() => {
                    setState({ autoplay: 1 });
                    setTimeout(() => {
                      setState({ True: true, key: true, autoplay: 1 })
                    }, 8000)
                  }} className='btnBD m-4' type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">XEM VIDEO</button>
                </div>
                <a>Link tài liệu PDF: https://courses.uit.edu.vn/pluginfile.php?file=%2F278996%2Fmod_assign%2Fintroattachment%2F0%2FAssignment-Basic2.pdf&amp;forcedownload=1</a>


                <div closeButton show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false} style={{ backgroundColor: 'black', }}>
                  <div show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}  style={{ backgroundColor: 'black', }} className="modal fade" id="exampleModalLong" tabIndex={1} role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false} style={{ maxWidth: '800px', width: '800px' }} className="modal-dialog" role="document">
                      <div  className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title text-center" id="exampleModalLongTitle">Modal title</h5>
                          {state.key ? <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                          </button> : <button disabled style={{ cursor: 'not-allowed' }} type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                          </button>}
                        </div>
                        <div className="modal-body">
                          <iframe onClick={() => {
                            console.log("HELLO");
                          }} autoplay="1" id="videoDisplay" width="760" height="415" src={`https://www.youtube.com/embed/jO2viLEW-1A?autoplay=${state.autoplay}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="modal-footer">
                          {state.key ? <button onClick={() => {
                            setState({ autoplay: 0, True: false });
                          }} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button> : <button disabled style={{ cursor: 'not-allowed' }} onClick={() => {
                            setState({ autoplay: 0, True: false });
                          }} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>



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







    </div>
  )
}

export default Question