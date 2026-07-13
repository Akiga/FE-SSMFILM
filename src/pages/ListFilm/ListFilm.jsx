import { useEffect, useState } from "react";

import FilterBar from "../../components/FilterBar";
import MovieCard from "../../components/MovieCard";
import Pagination from "../../components/Pagination";
import { getList } from "../../services/movieService";
import SearchSkeleton from "../../components/SkeletonMovieCard";
import PageTransition from "../../components/PageTransition";


function ListMovie() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const data = await getList(currentPage);

        setMovies(data.movies.items);
        setTotalPage(data.totalPage);
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [currentPage]);

  return (
    <PageTransition>
    <div className="max-w-7xl mx-auto px-6 py-10">

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">
          Danh sách phim
        </h1>
        <div className="mt-2 h-1 w-20 rounded bg-blue-500"></div>
      </div>

      {loading ? (
        <SearchSkeleton />
      ) : movies.length === 0 ? (
        <p className="text-center text-gray-500">No movies found.</p>
      ) : null}

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {movies.map((movie) => (
          <MovieCard
            key={movie._id}
            movie={movie}
          />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPage={totalPage}
        onPageChange={setCurrentPage}
      />
    </div>
    </PageTransition>
  );
}

export default ListMovie;