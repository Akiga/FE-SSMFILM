import { Play, Server } from "lucide-react";
import { Link } from "react-router-dom";

function EpisodeList({ movie }) {
  const episodes = movie.episodes || [];

  if (episodes.length === 0) return null;

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex items-center gap-3 mb-8">
        <Server className="text-cyan-400" size={24} />

        <h2 className="text-2xl font-bold text-white">
          Nguồn phát
        </h2>
      </div>

      {episodes.map((server) => (
        <div
          key={server.server_name}
          className="mb-8 last:mb-0"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-cyan-500 text-black text-sm font-semibold">
              {server.server_name}
            </span>

            <span className="text-slate-400 text-sm">
              {server.server_data.length}{" "}
              {server.server_data.length > 1 ? "tập" : "phiên bản"}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
            {server.server_data.map((item) => (
              <Link
                key={`${server.server_name}-${item.slug}`}
                to={`/watch/${movie.movie.slug}?tap=${item.slug}`}
                className="group flex flex-col items-center justify-center rounded-xl border border-slate-700 bg-slate-800 p-4 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <Play
                  size={18}
                  className="mb-2 transition group-hover:text-black"
                />

                <span className="font-medium text-white group-hover:text-black">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default EpisodeList;