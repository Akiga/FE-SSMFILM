export default function Profile() {

    const user = JSON.parse(localStorage.getItem("user")) || {};

    return (
        <div className="rounded-2xl border border-slate-700 bg-slate-800 p-8">

            <h1 className="mb-8 text-3xl font-bold text-white">
                Hồ sơ cá nhân
            </h1>

            <div className="space-y-6">

                <div>
                    <p className="text-slate-400">
                        Họ tên
                    </p>

                    <p className="mt-1 text-lg text-white">
                        {user.username}
                    </p>
                </div>

                <div>
                    <p className="text-slate-400">
                        Email
                    </p>

                    <p className="mt-1 text-lg text-white">
                        {user.email}
                    </p>
                </div>

                <div>
                    <p className="text-slate-400">
                        Vai trò
                    </p>

                    <p className="mt-1 text-lg text-white">
                        User
                    </p>
                </div>

            </div>

        </div>
    );
}