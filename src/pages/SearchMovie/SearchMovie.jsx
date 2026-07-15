import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { searchMovies } from "../../services/movieService";
import MovieCard from "../../components/movie/MovieCard";
import Pagination from "../../components/common/Pagination";
import SearchSkeleton from "../../components/skeleton/SkeletonMovieCard";
import PageTransition from "../../components/common/PageTransition";

function SearchMovie() {
  const [searchParams] = useSearchParams();

  const keyword = searchParams.get("keyword");

  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await searchMovies(keyword, currentPage);

        console.log(data);

        setMovies(data.items);
        setTotalPage(data.totalPage);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (keyword) {
      fetchData();
    }
  }, [keyword, currentPage]);

  return (
    <PageTransition>
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl text-white font-bold mb-8">
        Kết quả tìm kiếm: "{keyword}"
      </h1>

      {loading ? (
      <SearchSkeleton />
    ) : movies.length === 0 ? (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-semibold text-white">
          Không tìm thấy phim
        </h2>

        <p className="mt-3 text-slate-400">
          Không có kết quả nào cho "{keyword}".
        </p>
      </div>
    ) : (
      <>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPage={totalPage}
          onPageChange={setCurrentPage}
        />
      </>
    )}
    </div>
    </PageTransition>
  );
}

export default SearchMovie;