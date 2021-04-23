import React, { useEffect, useState } from "react";
import { WOW } from "wowjs";

export default function RegisterPage() {
  useEffect(() => {
    const wow = new WOW({
      // default
      offset: 100, // default
      mobile: false, // default
      live: true, // default
    });
    wow.init();
  }, []);

  const [userRegister, setUserRegister] = useState({
    values: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      role: "",
      maLop: "",
      hoTen: "",
    },
    errors: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      role: "",
      maLop: "",
      hoTen: "",
    },
    valid: false,
  });

  let checkValid = () => {
    let valid = true;
    for (let key in userRegister.errors) {
      if (userRegister.errors[key] !== "" || userRegister.values[key] === "") {
        valid = false;
      }
    }
    setUserRegister({
      ...userRegister,
      valid: valid,
    });
  };

  useEffect(() => {
    checkValid();
  }, [userRegister.errors]);

  let handleChange = (e) => {
    const { name, value, type } = e.target;
    let errorMessage = "";
    if (type === "email") {
      const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

      if (!regex.test(value)) {
        errorMessage = "Email" + " không đúng định dạng (*)";
      }
    }

    if (name === "soDt") {
      const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      if (!regex.test(value)) {
        errorMessage = "Số Điện Thoại" + " không đúng định dạng số (*)";
      }
    }

    if (value.trim() === "") {
      if (name === "hoTen") {
        errorMessage = "Họ tên không được để trống (*)";
      }
      if (name === "taiKhoan") {
        errorMessage = "Tài khoản không được để trống (*)";
      }
      if (name === "matKhau") {
        errorMessage = "Mật khẩu không được để trống (*)";
      }
      if (name === "maLop") {
        errorMessage = "Mã lớp không được để trống (*)";
      }
      if (name === "soDt") {
        errorMessage = "Số điện thoại không được để trống (*)";
      }
      if (name === "email") {
        errorMessage = "Email không được để trống (*)";
      }
      if (name === "role") {
        if (value !== "sv" || value !== "gv") {
          errorMessage = "Chức vụ chỉ điền gv (Giáo Viên) sv (Sinh Viên) (*)";
        }
      }
    }

    let newValues = { ...userRegister.values, [name]: value };
    let newErrors = { ...userRegister.errors, [name]: errorMessage };

    setUserRegister({
      ...userRegister,
      values: newValues,
      errors: newErrors,
    });
  };
  return (
    <div className="dang-ky-body">
      <div className="containerr wow animate__backInLeft">
        <div className="title">Đăng ký</div>
        <form>
          <div className="user-details">
            <div className="inputBox">
              <span className="details">Họ tên</span>
              <input
                onChange={handleChange}
                name="hoTen"
                type="text"
                placeholder="Nhập họ tên bạn"
                required
              />
              <p className="text-center text-danger">
                {userRegister.errors.hoTen}
              </p>
            </div>

            <div className="inputBox">
              <span className="details">Email</span>
              <input
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="Nhập email của bạn"
                required
              />
              <p className="text-center text-danger">
                {userRegister.errors.email}
              </p>
            </div>

            <div className="inputBox">
              <span className="details">Số điện thoại</span>
              <input
                name="soDt"
                onChange={handleChange}
                type="soDt"
                placeholder="Nhập số điện thoại bạn"
                required
              />
              <p className="text-center text-danger">
                {userRegister.errors.soDt}
              </p>
            </div>

            <div className="inputBox">
              <span className="details">Tài khoản</span>
              <input
                onChange={handleChange}
                name="taiKhoan"
                type="text"
                placeholder="Nhập tài khoản bạn"
                required
              />
              <p className="text-center text-danger">
                {userRegister.errors.taiKhoan}
              </p>
            </div>

            <div className="inputBox">
              <span className="details">Mật khẩu</span>
              <input
                onChange={handleChange}
                name="matKhau"
                type="text"
                placeholder="Nhập mật khẩu bạn"
                required
              />
              <p className="text-center text-danger">
                {userRegister.errors.matKhau}
              </p>
            </div>

            <div className="inputBox">
              <span className="details">Mã lớp</span>
              <input
                onChange={handleChange}
                name="maLop"
                type="text"
                placeholder="Nhập mã lớp bạn"
                required
              />
              <p className="text-center text-danger">
                {userRegister.errors.maLop}
              </p>
            </div>

            <div className="inputBox">
              <span className="details">Chức vụ</span>
              <input
                onChange={handleChange}
                name="role"
                type="text"
                placeholder="sv hoặc gv"
                required
              />
              <p className="text-center text-danger">
                {userRegister.errors.role}
              </p>
            </div>
          </div>

          <div className="button">
            {userRegister.valid ? (
              <button>Đăng ký</button>
            ) : (
              <button disabled style={{ cursor: "not-allowed" }}>
                Đăng ký
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
