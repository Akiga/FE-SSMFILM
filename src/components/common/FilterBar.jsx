function FilterBar() {
  return (
    <div className="bg-slate-900 rounded-xl border border-slate-800 p-5 mb-10">

      <div className="grid gap-4 md:grid-cols-4">

        <input
          type="text"
          placeholder="Tìm kiếm..."
          className="bg-slate-800 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select className="bg-slate-800 rounded-lg px-4 py-3">
          <option>Thể loại</option>
        </select>

        <select className="bg-slate-800 rounded-lg px-4 py-3">
          <option>Năm</option>
        </select>

        <select className="bg-slate-800 rounded-lg px-4 py-3">
          <option>Mới nhất</option>
        </select>

      </div>

    </div>
  );
}

export default FilterBar;