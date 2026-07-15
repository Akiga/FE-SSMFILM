function Pagination({ currentPage, totalPage, onPageChange }) {
  if (totalPage <= 1) return null;

  const pages = [];

  // Luôn hiện trang đầu
  pages.push(1);

  // ...
  if (currentPage > 3) {
    pages.push("start-ellipsis");
  }

  // Các trang gần trang hiện tại
  for (
    let i = Math.max(2, currentPage - 1);
    i <= Math.min(totalPage - 1, currentPage + 1);
    i++
  ) {
    pages.push(i);
  }

  // ...
  if (currentPage < totalPage - 2) {
    pages.push("end-ellipsis");
  }

  // Luôn hiện trang cuối
  if (totalPage > 1) {
    pages.push(totalPage);
  }

  return (
    <div className="flex items-center justify-center gap-2 mt-12 flex-wrap">
      {/* Prev */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:border-blue-500 transition"
      >
        ←
      </button>

      {pages.map((page, index) =>
        page === "start-ellipsis" || page === "end-ellipsis" ? (
          <span
            key={index}
            className="px-2 text-slate-400"
          >
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-10 h-10 rounded-lg transition ${
              currentPage === page
                ? "bg-blue-600 text-white"
                : "bg-slate-900 border border-slate-700 text-white hover:border-blue-500"
            }`}
          >
            {page}
          </button>
        )
      )}

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPage}
        className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:border-blue-500 transition"
      >
        →
      </button>
    </div>
  );
}

export default Pagination;