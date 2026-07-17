import { useEffect, useState } from "react";
import { getFavorites } from "../../services/favoriteService";
import { getMovieDetail } from "../../services/movieService";
import MovieCard from "../../components/movie/MovieCard";

export default function Favorites() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadFavorites();
    }, []);

    const loadFavorites = async () => {
        try {
            const res = await getFavorites();

            const favorites = res.data;

            console.log(favorites)

            const movieList = await Promise.all(
                favorites.map(async (item) => {
                    const movie = await getMovieDetail(item.slug);
                    return movie.movie;
                })
            );

            setMovies(movieList);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="text-white">
                Đang tải...
            </div>
        );
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">
                Phim yêu thích
            </h1>

            {movies.length === 0 ? (
                <p className="text-slate-400">
                    Chưa có phim yêu thích.
                </p>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {movies.map((movie) => (
                        <MovieCard
                            key={movie.slug}
                            movie={movie}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}