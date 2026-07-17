import { NavLink, useNavigate } from "react-router-dom";
import {
    User,
    Heart,
    History,
    LockKeyhole,
    Settings,
    LogOut,
} from "lucide-react";

export default function AccountSidebar() {
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user")) || {};

    const menus = [
        {
            title: "Hồ sơ",
            path: "/account/profile",
            icon: User,
        },
        {
            title: "Yêu thích",
            path: "/account/favorites",
            icon: Heart,
        },
        {
            title: "Lịch sử xem",
            path: "/account/history",
            icon: History,
        },
        {
            title: "Đổi mật khẩu",
            path: "/account/change-password",
            icon: LockKeyhole,
        },
        {
            title: "Cài đặt",
            path: "/account/settings",
            icon: Settings,
        },
    ];

    const handleLogout = () => {
        const confirm = window.confirm("Bạn có chắc muốn đăng xuất?");

        if (!confirm) return;

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/");
    };

    return (
        <div className="rounded-2xl border border-slate-700 bg-slate-800 p-6">
            {/* Avatar */}

            <div className="flex flex-col items-center">

                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-yellow-500 text-2xl font-bold text-white">

                    {user?.username
                        ? user.username.charAt(0).toUpperCase()
                        : "U"}

                </div>

                <h2 className="mt-4 text-lg font-semibold text-white">
                    {user?.username || "Người dùng"}
                </h2>

                <p className="text-sm text-slate-400">
                    {user?.email}
                </p>

            </div>

            <hr className="my-6 border-slate-700" />

            {/* Menu */}

            <div className="space-y-2">

                {menus.map((menu) => {
                    const Icon = menu.icon;

                    return (
                        <NavLink
                            key={menu.path}
                            to={menu.path}
                            className={({ isActive }) =>
                                `flex items-center gap-3 rounded-xl px-4 py-3 transition
                                
                                ${
                                    isActive
                                        ? "bg-yellow-500 text-white"
                                        : "text-slate-300 hover:bg-slate-700 hover:text-white"
                                }`
                            }
                        >
                            <Icon size={20} />

                            {menu.title}
                        </NavLink>
                    );
                })}

            </div>

            <button
                onClick={handleLogout}
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-red-500 py-3 font-medium text-white transition hover:bg-red-600 cursor-pointer"
            >
                <LogOut size={18} />

                Đăng xuất
            </button>
        </div>
    );
}