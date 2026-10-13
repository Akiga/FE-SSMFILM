import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate  } from "react-router-dom";

import { register } from "../../services/authService";

import AuthLayout from "../../components/auth/AuthLayout";
import PasswordInput from "../../components/auth/PasswordInput";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Mật khẩu xác nhận không khớp!");
      return;
    }

    try {
      await register({
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      toast.success("Đăng ký thành công!");
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Có lỗi xảy ra");
    }
  };

  return (
    <AuthLayout
      title="Đăng ký"
      subtitle="Tạo tài khoản để xem phim"
    >
      <form className="space-y-5" onSubmit={handleSubmit}>
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Họ và tên"
          className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
        />

        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
        />

        {/* Cần sửa PasswordInput để nhận value/onChange/name */}
        <PasswordInput
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Mật khẩu"
          autoComplete="new-password"
        />

        <PasswordInput
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Xác nhận mật khẩu"
        />

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 cursor-pointer"
        >
          Đăng ký
        </button>

        <p className="text-center text-slate-400">
          Đã có tài khoản?
          <Link
            to="/login"
            className="ml-2 text-blue-500"
          >
            Đăng nhập
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}