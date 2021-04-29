import React, { useEffect, useState } from 'react';
import { WOW } from 'wowjs';
// import { postLoginApi } from '../../../Services/Services';
import Axios from 'axios';
import swal from 'sweetalert';
import Loader from '../../../Components/Loader';
import { useHistory } from 'react-router';
export default function RegisterPage() {

    let [state,setState]=useState({
        loading:0,
    });
    let history=useHistory();
    useEffect(() => {
        const wow = new WOW(
            { // default
                offset: 100,          // default
                mobile: false,       // default
                live: true        // default
            }
        )
        wow.init();
    }, [])

    const [userRegister, setUserRegister] = useState({

        values: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDt: '',
            role: '',
            maLop: '',
            hoTen: ''
        },
        errors: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDt: '',
            role: '',
            maLop: '',
            hoTen: ''
        },
        valid: false

    })

    let checkValid = () => {
        let valid = true;
        for (let key in userRegister.errors) {
            if (userRegister.errors[key] !== "" || userRegister.values[key] === '') {
                valid = false;
            }
        }
        setUserRegister({
            ...userRegister, valid: valid
        })
    }

    useEffect(() => {
        checkValid();
    }, [userRegister.errors]);

    let handleChange = (e) => {
        const { name, value, type } = e.target;
        let errorMessage = '';
        if (type === 'email') {
            const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

            if (!regex.test(value)) {
                errorMessage = 'Email' + ' không đúng định dạng (*)';
            }
        }

        if (name === 'soDt') {
            const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            if (!regex.test(value)) {
                errorMessage = 'Số Điện Thoại' + ' không đúng định dạng số (*)'
            }
        }

        if (value.trim() === '') {
            if (name === 'hoTen') {
                errorMessage = 'Họ tên không được để trống (*)';
            }
            if (name === 'taiKhoan') {
                errorMessage = 'Tài khoản không được để trống (*)';
            }
            if (name === 'matKhau') {
                errorMessage = 'Mật khẩu không được để trống (*)';
            }
            if (name === 'maLop') {
                errorMessage = 'Mã lớp không được để trống (*)';
            }
            if (name === 'soDt') {
                errorMessage = 'Số điện thoại không được để trống (*)';
            }
            if (name === 'email') {
                errorMessage = 'Email không được để trống (*)';
            }
            if (name === 'role') {
                if (value !== "sv" || value !== "gv") {
                    errorMessage = 'Chức vụ chỉ điền gv (Giáo Viên) sv (Sinh Viên) (*)';
                }
            }

        }

        let newValues = { ...userRegister.values, [name]: value };
        let newErrors = { ...userRegister.errors, [name]: errorMessage };

        setUserRegister({
            ...userRegister,
            values: newValues,
            errors: newErrors
        })


    }

    let onSubmit = (data) => {
        let promise = Axios({
            url: 'http://192.168.43.223:8080/users',
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify(data)
        })

        promise.then(res => {
            swal({
                title: "Đăng ký thành công",
                text: "Chào mừng bạn đến với Social Study!",
                icon: "success",
                button: "OK",
            })
            // console.log(res.data);
            history.push("/dangnhap");
            setState({loading:0,})
        })

        promise.catch(err => {
            swal({
                title: "Đăng ký thất bại",
                text: "Hãy kiểm tra lại!",
                icon: "error",
                button: "OK",
            })
            // console.log(err.response.data);
        })
    }
    if(state.loading)
        return <Loader/>
    return (
        <div className='dang-ky-body'>
            {/* <div className='containerr wow animate__backInLeft'>
                <div className='title'>Đăng ký</div>
                <form>
                    <div className='user-details'>
                        <div className='inputBox'>
                            <span className='details'>Họ tên</span>
                            <input onChange={handleChange} name='hoTen' type='text' placeholder="Nhập họ tên" required />
                            <p className='text-center text-danger'>{userRegister.errors.hoTen}</p>
                        </div>

                        <div className='inputBox'>
                            <span className='details'>Email</span>
                            <input onChange={handleChange} name='email' type='email' placeholder="Nhập email" required />
                            <p className='text-center text-danger'>{userRegister.errors.email}</p>
                        </div>

                        <div className='inputBox'>
                            <span className='details'>Số điện thoại</span>
                            <input name='soDt' onChange={handleChange} type='soDt' placeholder="Nhập số điện thoại" required />
                            <p className='text-center text-danger'>{userRegister.errors.soDt}</p>
                        </div>

                        <div className='inputBox'>
                            <span className='details'>Tài khoản</span>
                            <input onChange={handleChange} name='taiKhoan' type='text' placeholder="Nhập tài khoản" required />
                            <p className='text-center text-danger'>{userRegister.errors.taiKhoan}</p>
                        </div>

                        <div className='inputBox'>
                            <span className='details'>Mật khẩu</span>
                            <input onChange={handleChange} name='matKhau' type='text' placeholder="Nhập mật khẩu" required />
                            <p className='text-center text-danger'>{userRegister.errors.matKhau}</p>
                        </div>

                        <div className='inputBox'>
                            <span className='details'>Mã lớp</span>
                            <input onChange={handleChange} name='maLop' type='text' placeholder="Nhập mã lớp" required />
                            <p className='text-center text-danger'>{userRegister.errors.maLop}</p>
                        </div>

                        <div className='inputBox'>
                            <span className='details'>Chức vụ</span>
                            <input onChange={handleChange} name='role' type='text' placeholder="sv hoặc gv" required />
                            <p className='text-center text-danger'>{userRegister.errors.role}</p>
                        </div>
                    </div>
                    <div className='button'>
                            {userRegister.valid ? <button onClick={(e) => {
                                e.preventDefault();
                                onSubmit(userRegister.values);
                            }}>Đăng ký</button> : <button disabled style={{cursor:'not-allowed'}} >Đăng ký</button>}
                        </div>
                </form>
            </div> */}
            <div className='containerr-main wow animate__backInLeft'>
                <div className='headerr '>
                    <h2 className='text-center text-light'>TẠO TÀI KHOẢN</h2>
                </div>
                <form className='formm' id="form">
                    <div className='row'>
                        <div className=' col-12 col-sm-6'>
                            <div className='form-controll'>
                                <label>Họ tên</label>
                                <input onChange={handleChange} type='text' id='username' name='hoTen' />
                                <p className='text-center text-danger'>{userRegister.errors.hoTen}</p>
                            </div>

                            <div className='form-controll'>
                                <label>Email</label>
                                <input onChange={handleChange} type='email' id='email' name='email' />
                                <p className='text-center text-danger'>{userRegister.errors.email}</p>
                            </div>

                            <div className='form-controll'>
                                <label>Điện thoại</label>
                                <input onChange={handleChange} type='phone' id='phone' name='soDt' />
                                <p className='text-center text-danger'>{userRegister.errors.soDt}</p>
                            </div>

                            <div className='form-controll'>
                                <label>Mã lớp</label>
                                <input onChange={handleChange} type='text' id='idClass' name='maLop' />
                                <p className='text-center text-danger'>{userRegister.errors.maLop}</p>
                            </div>
                        </div>

                        <div className='col-12 col-sm-6'>
                        <div className='form-controll'>
                            <label>Chức vụ</label>
                            <input onChange={handleChange} type='text' id='role' name='role' />
                            <p className='text-center text-danger'>{userRegister.errors.role}</p>
                        </div>

                        <div className='form-controll'>
                            <label>Tài khoản</label>
                            <input onChange={handleChange} type='text' id='username' name='taiKhoan' />
                            <p className='text-center text-danger'>{userRegister.errors.taiKhoan}</p>
                        </div>

                        <div className='form-controll'>
                            <label>Mật khẩu</label>
                            <input onChange={handleChange} type='password' id='password' name='matKhau' />
                            <p className='text-center text-danger'>{userRegister.errors.matKhau}</p>
                        </div>

                         <div className='form-controll text-center mt-5 w-100'>
                           {userRegister.valid ? <button onClick={(e) => {
                               e.preventDefault();
                               setState({loading:1});
                               onSubmit(userRegister.values);
                           }} className=' w-100'>Đăng ký</button> : <button disabled style={{cursor:'not-allowed'}} className=' w-100'>Đăng ký</button>}
                        </div>
                    </div>
                    </div>
                </form>

                {/* <form className='formm2' id="form2" >
                    <div className='row'>
                        <div className='form-controll'>
                                <label>Họ tên</label>
                                <input onChange={handleChange} type='text' id='username' name='hoTen' />
                                <p className='text-center text-danger'>{userRegister.errors.hoTen}</p>
                            </div>

                            <div className='form-controll'>
                                <label>Email</label>
                                <input onChange={handleChange} type='email' id='email' name='email' />
                                <p className='text-center text-danger'>{userRegister.errors.email}</p>
                            </div>

                            <div className='form-controll'>
                                <label>Điện thoại</label>
                                <input onChange={handleChange} type='phone' id='phone' name='soDt' />
                                <p className='text-center text-danger'>{userRegister.errors.soDt}</p>
                            </div>

                            <div className='form-controll'>
                                <label>Mã lớp</label>
                                <input onChange={handleChange} type='text' id='idClass' name='maLop' />
                                <p className='text-center text-danger'>{userRegister.errors.maLop}</p>
                            </div>
                    </div>
                </form> */}
            </div>
        </div>
    )
}