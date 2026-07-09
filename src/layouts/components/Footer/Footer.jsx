import { FaFacebook, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo + Giới thiệu */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400">
            SSM-Phim
          </h2>

          <p className="mt-4 text-slate-400 leading-7">
            Xem phim chất lượng cao với giao diện hiện đại, cập nhật liên tục
            những bộ phim mới nhất cùng trải nghiệm xem mượt mà.
          </p>
        </div>

        {/* Liên kết */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Liên kết
          </h3>

          <ul className="space-y-3">
            <li>
              <Link
                to="/"
                className="text-slate-400 hover:text-blue-400 transition"
              >
                Trang chủ
              </Link>
            </li>

            <li>
              <Link
                to="/movies"
                className="text-slate-400 hover:text-blue-400 transition"
              >
                Phim lẻ
              </Link>
            </li>

            <li>
              <Link
                to="/series"
                className="text-slate-400 hover:text-blue-400 transition"
              >
                Phim bộ
              </Link>
            </li>

            <li>
              <Link
                to="/genres"
                className="text-slate-400 hover:text-blue-400 transition"
              >
                Thể loại
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="text-slate-400 hover:text-blue-400 transition"
              >
                Liên hệ
              </Link>
            </li>
          </ul>
        </div>

        {/* Liên hệ */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Liên hệ
          </h3>

          <div className="space-y-4">
            <a
              href="mailto:manhhuynh1709@gmail.com"
              className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition"
            >
              <FaEnvelope />
              <span>manhhuynh1709@gmail.com</span>
            </a>

            <a
              href="https://facebook.com/huynhtan.manh.140"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition"
            >
              <FaFacebook />
              <span>Huỳnh Tấn Mạnh</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between">
          <p className="text-slate-500 text-sm">
            © 2026 SSM-Phim. All rights reserved.
          </p>

          <p className="text-slate-500 text-sm mt-2 md:mt-0">
            Dữ liệu được cung cấp từ nguồn công khai.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;