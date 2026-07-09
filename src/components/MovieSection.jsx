import { NavLink } from "react-router-dom";
import MovieCard from "./MovieCard";
import SkeletonMovieCard from "./SkeletonMovieCard";

function MovieSection({title, movies = [], link, loading }) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-white">
          {title}
        </h2>

        <NavLink to={link} className="text-blue-400 hover:text-blue-300 transition cursor-pointer">
          Xem thêm →
        </NavLink>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {loading
          ? Array.from({ length: 5 }).map((_, index) => (
              <SkeletonMovieCard key={index} />
            ))
        : movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </section>
  );
}

export default MovieSection;