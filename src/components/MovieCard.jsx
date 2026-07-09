import { Link } from "react-router-dom";
import { FaPlay, FaStar } from "react-icons/fa";

function MovieCard({ movie }) {
  return (
    <Link
      to={`/movie/${movie.slug}`}
      className="group block overflow-hidden rounded-xl bg-slate-900 border border-slate-800 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
    >
      {/* Poster */}
      <div className="relative overflow-hidden aspect-[2/3]">
        <img
          src={movie.poster_url}
          alt={movie.origin_name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition duration-300">
            <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center">
              <FaPlay className="text-white ml-1" />
            </div>
          </div>
        </div>

        {/* Đánh giá */}
        {/* <span className="absolute top-3 right-3 flex items-center gap-1 bg-black/70 text-yellow-400 text-xs px-2 py-1 rounded-md">
          <FaStar size={10} />
          {movie.imdb.vote_average}
        </span> */}
      </div>

      {/* Thông tin */}
      <div className="p-4">
        <h3 title={movie.name} className="font-semibold text-white truncate group-hover:text-blue-400 transition">
          {movie.name}
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          {movie.year}
        </p>
      </div>
    </Link>
  );
}

export default MovieCard;