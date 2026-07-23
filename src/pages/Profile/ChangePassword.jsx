import { useState } from "react";
import { toast } from "react-hot-toast";
import PasswordInput from "../../components/auth/PasswordInput";
import { changePassword } from "../../services/profileService";

export default function ChangePassword() {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!oldPassword || !newPassword || !confirmPassword) {
            return toast.error("Vui lòng nhập đầy đủ thông tin.");
        }

        if (newPassword !== confirmPassword) {
            return toast.error("Mật khẩu xác nhận không khớp.");
        }

        try {
            setLoading(true);

            const res = await changePassword({
                oldPassword,
                newPassword,
            });
            toast.success("Đổi mật khẩu thành công.");

            setOldPassword("");
            setNewPassword("");
            setConfirmPassword("");
        } catch (error) {
            toast.error("Mật khẩu cũ không đúng.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="rounded-2xl border border-slate-700 bg-slate-800 p-8">
            <h1 className="text-3xl font-bold text-white">
                Đổi mật khẩu
            </h1>

            <p className="mt-2 text-slate-400">
                Để bảo vệ tài khoản, vui lòng nhập mật khẩu hiện tại trước khi đặt mật khẩu mới.
            </p>

            <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-6"
            >
                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-300">
                        Mật khẩu hiện tại
                    </label>

                    <PasswordInput
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                        placeholder="Nhập mật khẩu hiện tại"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-300">
                        Mật khẩu mới
                    </label>

                    <PasswordInput
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Nhập mật khẩu mới"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-300">
                        Xác nhận mật khẩu
                    </label>

                    <PasswordInput
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Nhập lại mật khẩu mới"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-xl bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {loading ? "Đang xử lý..." : "Đổi mật khẩu"}
                </button>
            </form>
        </div>
    );
}