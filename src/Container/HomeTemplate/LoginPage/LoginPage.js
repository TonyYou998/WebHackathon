import React, { useEffect, useState } from 'react';
import {WOW} from 'wowjs';

export default function LoginPage() {
    useEffect(() => {
        const wow = new WOW(
            { // default
            offset:       100,          // default
            mobile:       false,       // default
            live:         true        // default
          }
          )
          wow.init();
    },[])


    

    const [userLogin,setUserLogin] = useState({
        values:{
            taiKhoan:'',
            matKhau:''
        },
        errors:{
            taiKhoan:'',
            matKhau:''
        },
        valid:false
    })

    useEffect(() => {
        checkValid();
  },[userLogin.errors]);

    let handleChange = (e) => {
        const {name,value} = e.target;
        let messageErrors = "";
        if(value.trim() === "") {
            if(name==='taiKhoan') {
                messageErrors = "Tài khoản không được bỏ trống (*)"
            }
            if(name==='matKhau') {
                messageErrors = "Mật khẩu không được bỏ trống (*)"
            }
        }
        let newValues = {...userLogin.values,[name]:value};
        let newErrors = {...userLogin.errors,[name]:messageErrors};
        setUserLogin({
            ...userLogin,
            values: newValues,
            errors: newErrors
        })
    }

    let checkValid = () => {
        let newValid = true;
        for(let key in userLogin.errors) {
            if(userLogin.errors[key] !== "" || userLogin.values[key] === "" ) {
                newValid = false;
            }
        }
        setUserLogin({...userLogin,valid: newValid})
    }

   
    return (
        <div className='dang-nhap-body'>
           <section className={`wow animate__tada`}   data-wow-duration="1s" data-wow-delay="0s">
               {/* <div className='color'></div>
               <div className='color'></div>
               <div className='color'></div>
               <div className='color'></div>
               <div className='color'></div>
               <div className='color'></div> */}
               <div className='box'>
                 
                   <div className="containerr">
                        <div className='form'>
                            <h1 className='pb-2'>ĐĂNG NHẬP</h1>
                            <form>
                                <div className="inputBox">          
                                    <input name='taiKhoan' onChange={handleChange} type='text' placeholder='Tên đăng nhập' />
                                    <p className='text-center text-danger'>{userLogin.errors.taiKhoan}</p>
                                </div>

                                <div className="inputBox">          
                                    <input name='matKhau' onChange={handleChange} type='password' placeholder='Mật khẩu' />
                                    <p className='text-center text-danger'>{userLogin.errors.matKhau}</p>
                                </div>
                                <div className="inputBox text-center">          
                                    {userLogin.valid ? <button className='btn'>Đăng Nhập</button> : <button disabled style={{cursor:'not-allowed'}} className='btn'>Đăng Nhập</button>}
                                </div>
                                <p className='forget'>Quên mật khẩu ? <a href="#">Bấm ở đây</a></p>
                                <p className='signup'>Bạn chưa có tài khoản ? <a onClick={() => {
                                    
                                }} href="/dangky">Đăng Ký</a></p>
                            </form>
                        </div>
                   </div>
               </div>
           </section>
        </div>
    )
}

