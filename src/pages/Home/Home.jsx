import {useEffect, useState} from "react";
import {getHome} from "../../services/movieService";

import HeroBanner from "../../components/movie/HeroBanner";
import TopicCard from "../../components/movie/TopicCard";
import MovieSection from "../../components/movie/MovieSection";
import SearchBar from "../../components/common/SearchBar";

const topics = [
  {
    title: "Phim lẻ",
    to: "/list/phim-le"
  },
  {
    title: "Phim bộ",
    to: "/list/phim-bo"
  },
  {
    title: "Anime",
    to: "/list/hoat-hinh"
  },
  {
    title: "Chiếu rạp",
    to: "/list"
  }
];

function Home(){
    const [movies, setMovies] = useState(null);
    const [phimLe, setPhimLe] = useState([]);
    const [phimBo, setPhimBo] = useState([]);
    const [hoatHinh, setHoatHinh] = useState([]);
    const [tvShows, setTvShows] = useState([]);

    const [loading, setLoading] = useState(true);

    

    useEffect(() => {
        const fetchHomeData = async () => {
            try {
                const data = await getHome();

                console.log("Home data:", data.phimLe);

                setMovies(data.movies);
                setPhimLe(data.phimLe);
                setPhimBo(data.phimBo);
                setHoatHinh(data.hoatHinh);
                setTvShows(data.tvShows);
            } catch (error) {
                console.error("Error fetching home data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchHomeData();
    }, []);

    return (
    <>
        <HeroBanner />
        <div className='flex justify-center lg:hidden'>
            <SearchBar />
        </div>
        <section className="max-w-7xl mx-auto px-6 py-12">
            <h2 className="text-3xl font-bold text-white mb-8">
                Chủ đề nổi bật
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {topics.map((topic) => (
                    <TopicCard key={topic.title} topic={topic} />
                ))}
            </div>
        </section>

        <MovieSection
            title="Phim mới cập nhật"
            movies={movies?.items.slice(0, 12)}
            link="/list"
            loading={loading}
        />

        <MovieSection
            title="Phim lẻ mới cập nhật"
            movies={phimLe?.data?.items}
            link="/list/phim-le"
            loading={loading}
        />

        <MovieSection
            title="Phim bộ mới cập nhật"
            movies={phimBo?.data?.items}
            link="/list/phim-bo"
            loading={loading}
        />

        <MovieSection
            title="Hoạt hình mới cập nhật"
            movies={hoatHinh?.data?.items}
            link="/list/hoat-hinh"
            loading={loading}
        />

        <MovieSection
            title="TV Shows mới cập nhật"
            movies={tvShows?.data?.items}
            link="/list/tv-shows"
            loading={loading}
        />
    </>
    )
}

export default Home;