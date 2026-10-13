import { Link } from "react-router-dom";

export default function AuthLayout({
  title,
  subtitle,
  children,
}) {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
    //   style={{
    //     backgroundImage:
    //       "url('/images/banner.jpg')",
    //   }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900/90 p-8 shadow-2xl backdrop-blur">
          <Link
            to="/"
            className="mb-8 block text-center text-3xl font-bold text-blue-500"
          >
            SSM<span className="text-white">-Phim</span>
          </Link>

          <h1 className="text-center text-3xl font-bold text-white">
            {title}
          </h1>

          <p className="mt-2 text-center text-slate-400">
            {subtitle}
          </p>

          <div className="mt-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}