import React, { useEffect, useState } from 'react';
import {WOW} from 'wowjs';
import Axios from 'axios';
import swal from 'sweetalert';
import { useHistory } from 'react-router';
import Loader from '../../../Components/Loader';
export default function LoginPage() {
  useEffect(() => {
    const wow = new WOW({
      // default
      offset: 100, // default
      mobile: false, // default
      live: true, // default
    });
    wow.init();
  }, []);

   
    let history=useHistory();
  const [userLogin, setUserLogin] = useState({
    values: {
      taiKhoan: "",
      matKhau: "",
    },
    errors: {
      taiKhoan: "",
      matKhau: "",
    },
    valid: false,
  });
  const [state,setState]=useState(
    {
      loading:0,
    }
  )


  let onSubmit = (data) => {
      

    let promise = Axios({
      url: "http://192.168.43.223:8080/users/login",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    });

    promise.then((res) => {
      swal({
        title: "Đăng nhập thành công",
        text: "Chào mừng bạn đến với 4.0 learing!",
        icon: "success",
        button: "OK",
      });
       localStorage.setItem("public_key",res.data.token);
            setState({loading:0,})
            history.push("/user/homepage");
    }); 
    promise.catch((err) => {
      setState({loading:0,});
       alert("sai mật khẩu");
      history.push("/dangnhap");
     
      
    });
  };

  useEffect(() => {
    checkValid();
  }, [userLogin.errors]);

  let handleChange = (e) => {
    const { name, value } = e.target;
    let messageErrors = "";
    if (value.trim() === "") {
      if (name === "taiKhoan") {
        messageErrors = "Tài khoản không được bỏ trống (*)";
      }
      if (name === "matKhau") {
        messageErrors = "Mật khẩu không được bỏ trống (*)";
      }
    }
    let newValues = { ...userLogin.values, [name]: value };
    let newErrors = { ...userLogin.errors, [name]: messageErrors };
    setUserLogin({
      ...userLogin,
      values: newValues,
      errors: newErrors,
    });
  };

  let checkValid = () => {
    let newValid = true;
    for (let key in userLogin.errors) {
      if (userLogin.errors[key] !== "" || userLogin.values[key] === "") {
        newValid = false;
      }
    }
    setUserLogin({ ...userLogin, valid: newValid });
  };

 if(state.loading)
    return <Loader/>
  return (
    <div className="dang-nhap-body">
      <section
        className={`wow animate__tada`}
        data-wow-duration="1s"
        data-wow-delay="0s"
      >
        {/* <div className='color'></div>
               <div className='color'></div>
               <div className='color'></div>
               <div className='color'></div>
               <div className='color'></div>
               <div className='color'></div> */}
        <div className="box">
          <div className="containerr">
            <div className="form">
              <h1 className="pb-2">ĐĂNG NHẬP</h1>
              <form>
                <div className="inputBox">
                  <input
                    name="taiKhoan"
                    onChange={handleChange}
                    type="text"
                    placeholder="Tên đăng nhập"
                  />
                  <p className="text-center text-danger">
                    {userLogin.errors.taiKhoan}
                  </p>
                </div>

                <div className="inputBox">
                  <input
                    name="matKhau"
                    onChange={handleChange}
                    type="password"
                    placeholder="Mật khẩu"
                  />
                  <p className="text-center text-danger">
                    {userLogin.errors.matKhau}
                  </p>
                </div>
                <div className="inputBox text-center">
                  {userLogin.valid ? (
                    <button
                      className="btn"
                      onClick={(e) => {
                        e.preventDefault();
                        setState({loading:1,})
                        onSubmit(userLogin.values);
                      }}
                    >
                      Đăng Nhập
                    </button>
                  ) : (
                    <button
                      disabled
                      style={{ cursor: "not-allowed" }}
                      className="btn"
                    >
                      Đăng Nhập
                    </button>
                  )}
                </div>
                <p className="forget">
                  Quên mật khẩu ? <a href="#">Bấm ở đây</a>
                </p>
                <p className="signup">
                  Bạn chưa có tài khoản ?{" "}
                  <a onClick={(e) => {}} href="/dangky">
                    Đăng Ký
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
