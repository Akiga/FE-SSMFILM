import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";

export default function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-3 select-none"
    >
      <img
        src={logo}
        alt="SSM Phim"
        className="h-11 w-11 object-contain"
      />

      <div className="hidden sm:block">
        <h1 className="text-xl font-bold text-blue-500">
          SSM Phim
        </h1>

        <p className="text-xs text-gray-400">
          Xem phim chất lượng cao
        </p>
      </div>
    </Link>
  );
}