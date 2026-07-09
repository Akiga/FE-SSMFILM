import { User } from "lucide-react";

export default function UserMenu() {

    const user = null;

    if (!user)
        return (
            <button
                className="bg-blue-600 px-4 py-2 rounded-lg"
            >
                Đăng nhập
            </button>
        );

    return (

        <div>

            <User />

        </div>

    );

}