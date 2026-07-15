import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, LogOut, Heart, History } from "lucide-react";
import toast from "react-hot-toast";

export default function UserMenu() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [open, setOpen] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!menuRef.current?.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    toast.success("Đăng xuất thành công!");

    navigate("/");
  };

  if (!user) {
    return (
      <Link
        to="/login"
        className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
      >
        Đăng nhập
      </Link>
    );
  }

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-lg p-2 transition hover:bg-slate-800"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
          {user.username.charAt(0).toUpperCase()}
        </div>

        <span className="hidden md:block text-white">
          {user.username}
        </span>
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-56 overflow-hidden rounded-xl border border-slate-700 bg-slate-900 shadow-xl">
          <div className="border-b border-slate-700 p-4">
            <p className="font-semibold text-white">
              {user.username}
            </p>

            <p className="text-sm text-slate-400">
              {user.email}
            </p>
          </div>

          <Link
            to="/profile"
            className="flex items-center gap-3 px-4 py-3 text-white hover:bg-slate-800"
          >
            <User size={18} />
            Trang cá nhân
          </Link>

          <Link
            to="/favorite"
            className="flex items-center gap-3 px-4 py-3 text-white hover:bg-slate-800"
          >
            <Heart size={18} />
            Phim yêu thích
          </Link>

          <Link
            to="/history"
            className="flex items-center gap-3 px-4 py-3 text-white hover:bg-slate-800"
          >
            <History size={18} />
            Lịch sử xem
          </Link>

          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 px-4 py-3 text-red-400 hover:bg-slate-800"
          >
            <LogOut size={18} />
            Đăng xuất
          </button>
        </div>
      )}
    </div>
  );
}