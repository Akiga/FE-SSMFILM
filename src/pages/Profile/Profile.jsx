import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import {
    getProfile,
    updateProfile,
} from "../../services/profileService";

export default function Profile() {
    const [user, setUser] = useState(null);
    const [username, setUsername] = useState("");
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await getProfile();

                setUser(res.data.user);
                setUsername(res.data.user.username);
            } catch (error) {
                console.error(error);
                toast.error("Không thể tải thông tin người dùng");
            }
        };

        fetchProfile();
    }, []);

    const handleUpdate = async () => {
        try {
            const res = await updateProfile({
                username,
            });

            setUser(res.data.user);
            setUsername(res.data.user.username);
            setIsEditing(false);

            localStorage.setItem(
                "user",
                JSON.stringify(res.data.user)
            );

            toast.success("Cập nhật thành công");
        } catch (error) {
            toast.error(
                error.response?.data?.message || "Có lỗi xảy ra"
            );
        }
    };

    if (!user) {
        return (
            <div className="flex h-60 items-center justify-center text-white">
                Đang tải...
            </div>
        );
    }

    return (
        <div className="rounded-2xl border border-slate-700 bg-slate-800 p-8">
            <h1 className="mb-8 text-3xl font-bold text-white">
                Hồ sơ cá nhân
            </h1>

            <div className="space-y-6">
                <div>
                    <p className="text-slate-400">Họ tên</p>

                    {isEditing ? (
                        <input
                            type="text"
                            value={username}
                            onChange={(e) =>
                                setUsername(e.target.value)
                            }
                            className="mt-2 w-full rounded-lg border border-slate-600 bg-slate-700 px-4 py-2 text-white outline-none focus:border-red-500"
                        />
                    ) : (
                        <p className="mt-1 text-lg text-white">
                            {user.username}
                        </p>
                    )}
                </div>

                <div>
                    <p className="text-slate-400">Email</p>

                    <p className="mt-1 text-lg text-white">
                        {user.email}
                    </p>
                </div>

                <div>
                    <p className="text-slate-400">Vai trò</p>

                    <p className="mt-1 text-lg text-white">
                        {user.role || "User"}
                    </p>
                </div>
            </div>

            <div className="mt-8 flex gap-4">
                {isEditing ? (
                    <>
                        <button
                            onClick={handleUpdate}
                            className="rounded-lg bg-green-600 px-5 py-2 text-white transition hover:bg-green-700 cursor-pointer"
                        >
                            Lưu
                        </button>

                        <button
                            onClick={() => {
                                setIsEditing(false);
                                setUsername(user.username);
                            }}
                            className="rounded-lg bg-gray-600 px-5 py-2 text-white transition hover:bg-gray-700 cursor-pointer"
                        >
                            Hủy
                        </button>
                    </>
                ) : (
                    <button
                        onClick={() => setIsEditing(true)}
                        className="rounded-lg bg-red-600 px-5 py-2 text-white transition hover:bg-red-700 cursor-pointer"
                    >
                        Chỉnh sửa
                    </button>
                )}
            </div>
        </div>
    );
}