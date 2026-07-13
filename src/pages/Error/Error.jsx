import { Link } from "react-router-dom";
import { Clapperboard, Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6">

            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-3xl" />
                <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
            </div>

            <div className="relative z-10 max-w-3xl text-center">

                <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10">
                    <Clapperboard
                        size={42}
                        className="text-blue-400"
                    />
                </div>

                <h1 className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-8xl font-extrabold text-transparent md:text-9xl">
                    404
                </h1>

                <h2 className="mt-6 text-3xl font-bold text-white">
                    Oops! Bộ phim bạn đang tìm kiếm đã biến mất.
                </h2>

                <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-400">
                    Có thể liên kết đã bị thay đổi, nội dung đã bị xóa
                    hoặc bạn đã nhập sai địa chỉ.
                    Hãy quay về trang chủ để tiếp tục khám phá những bộ phim hấp dẫn.
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-4">

                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 text-white transition hover:border-blue-500 hover:bg-slate-800"
                    >
                        <ArrowLeft size={18} />
                        Quay lại
                    </button>

                    <Link
                        to="/"
                        className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
                    >
                        <Home size={18} />
                        Trang chủ
                    </Link>

                </div>

            </div>
        </main>
    );
};

export default NotFound;