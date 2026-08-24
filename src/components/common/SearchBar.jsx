import { Search, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar({
  mobile = false,
  autoFocus = false,
  onSearch,
}) {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const value = keyword.trim();

    if (!value) return;

    navigate(`/search?keyword=${encodeURIComponent(value)}`);

    setKeyword("");

    // Báo cho Header biết search đã hoàn thành
    onSearch?.();
  };

  return (
    <div
      className={
        mobile
          ? "relative flex-1"
          : "relative w-72"
      }
    >
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        value={keyword}
        autoFocus={autoFocus}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        placeholder="Tìm kiếm phim..."
        className="
          w-full
          rounded-full
          bg-slate-800
          border
          border-slate-700
          py-2.5
          pl-11
          pr-10
          text-sm
          text-white
          outline-none
          transition
          duration-300
          placeholder:text-gray-500
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-500/30
        "
      />

      {keyword && (
        <button
          type="button"
          onClick={() => setKeyword("")}
          className="
            absolute
            right-3
            top-1/2
            -translate-y-1/2
          "
        >
          <X
            size={18}
            className="text-gray-400 hover:text-white"
          />
        </button>
      )}
    </div>
  );
}