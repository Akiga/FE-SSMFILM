import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Plus } from "lucide-react";

import hinh1 from "../../assets/img/hinh-nen-1920-1080-thumbnail.jpg";
import hinh2 from "../../assets/img/hinh-nen-may-tinh-anime-4k (111).jpg";
import hinh3 from "../../assets/img/ironman_800x450.jpg";

const banners = [
  {
    image: hinh1,
    title: "Avatar",
    description:
      "Một hành trình khám phá thế giới mới đầy bí ẩn và hấp dẫn.",
    rating: "9.2",
    year: "2025",
    genre: "Phiêu lưu"
  },
  {
    image: hinh2,
    title: "Anime Movie",
    description:
      "Những bộ phim hoạt hình Nhật Bản đặc sắc.",
    rating: "8.8",
    year: "2024",
    genre: "Anime"
  },
  {
    image: hinh3,
    title: "Iron Man",
    description:
      "Siêu anh hùng Marvel với công nghệ vượt bậc.",
    rating: "9.0",
    year: "2008",
    genre: "Hành động"
  }
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const next = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? banners.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative h-[90vh] overflow-hidden">

      <img
        src={banners[current].image}
        alt={banners[current].title}
        className="absolute inset-0 w-full h-full object-cover scale-105 transition-all duration-1000"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6">

        <div className="max-w-xl animate-fadeIn">

          <div className="flex gap-4 text-sm mb-4 text-gray-300">

            <span>⭐ {banners[current].rating}</span>

            <span>{banners[current].year}</span>

            <span>{banners[current].genre}</span>

          </div>

          <h1 className="text-6xl font-black leading-tight">
            {banners[current].title}
          </h1>

          <p className="mt-6 text-gray-300 leading-8">
            {banners[current].description}
          </p>

          <div className="flex gap-4 mt-10">

            <button className="bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-xl flex items-center gap-2 font-semibold">

              <Play size={18} />

              Xem ngay

            </button>

            <button className="border border-white/30 hover:bg-white/10 transition px-8 py-4 rounded-xl flex items-center gap-2">

              <Plus size={18} />

              Danh sách

            </button>

          </div>

        </div>

      </div>

      <button
        onClick={prev}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 p-3 rounded-full"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={next}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 p-3 rounded-full"
      >
        <ChevronRight />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">

        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all ${
              current === index
                ? "w-10 bg-red-600"
                : "w-2 bg-gray-400"
            }`}
          />
        ))}

      </div>

    </section>
  );
}