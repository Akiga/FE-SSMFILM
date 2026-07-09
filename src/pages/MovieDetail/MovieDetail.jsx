import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Play,
  Heart,
  Share2,
  Calendar,
  Clock3,
  Globe,
  Star,
} from "lucide-react";

import { getMovieDetail } from "../../services/movieService";
import EpisodeList from "../../components/EpisodeList";
import ActorList from "../../components/ActorList";
import DetailSkeleton from "../../components/DetailSkeleton";

function MovieDetail() {
  const { slug } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);

        const data = await getMovieDetail(slug);
        setMovie(data);
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

    fetchMovie();
  }, [slug]);

  if (loading) return <DetailSkeleton />;

  if (!movie) return null;

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Backdrop */}
      <section className="relative">

        <img
          src={movie.movie.thumb_url}
          alt={movie.movie.name}
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-slate-950/80 to-slate-950" />

        <div className="relative max-w-7xl mx-auto px-6 py-16">

          <div className="grid lg:grid-cols-3 gap-10">

            {/* Poster */}

            <div className="flex justify-center">

              <img
                src={movie.movie.poster_url}
                alt={movie.movie.name}
                className="w-72 rounded-2xl shadow-2xl"
              />

            </div>

            {/* Info */}

            <div className="lg:col-span-2">

              <h1 className="text-4xl font-bold">
                {movie.movie.name}
              </h1>

              <p className="text-slate-400 mt-2 text-lg">
                {movie.movie.origin_name}
              </p>

              {/* Badge */}

              <div className="flex flex-wrap gap-3 mt-6">

                <span className="px-3 py-1 rounded-full bg-cyan-500 text-black font-semibold">
                  {movie.movie.quality}
                </span>

                <span className="px-3 py-1 rounded-full bg-slate-800">
                  {movie.movie.lang}
                </span>

                <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-slate-800">
                  <Calendar size={16} />
                  {movie.movie.year}
                </span>

                <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-slate-800">
                  <Clock3 size={16} />
                  {movie.movie.time}
                </span>

                <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-slate-800">
                  <Globe size={16} />
                  {movie.movie.country[0]?.name}
                </span>

                <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-500 text-black">
                  <Star size={16} />
                  IMDb
                </span>

              </div>

              {/* Genres */}

              <div className="flex flex-wrap gap-2 mt-6">

                {movie.movie.category.map((item) => (

                  <span
                    key={item.id}
                    className="px-4 py-1 rounded-full border border-cyan-500 text-cyan-400"
                  >
                    {item.name}
                  </span>

                ))}

              </div>

              {/* Buttons */}

              <div className="flex flex-wrap gap-4 mt-8">

                <button className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 transition text-black px-8 py-3 rounded-xl font-semibold">

                  <Play size={20} />

                  Xem ngay

                </button>

                <button className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-xl">

                  <Heart size={20} />

                  Yêu thích

                </button>

                <button className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-xl">

                  <Share2 size={20} />

                  Chia sẻ

                </button>

              </div>

              {/* Description */}

              <div className="mt-10">

                <h2 className="text-2xl font-semibold mb-4">
                  Nội dung
                </h2>

                <p
                  className={`text-slate-300 leading-8 ${
                    expand ? "" : "line-clamp-5"
                  }`}
                  dangerouslySetInnerHTML={{
                    __html: movie.movie.content,
                  }}
                />

                <button
                  onClick={() => setExpand(!expand)}
                  className="text-cyan-400 mt-3 hover:underline"
                >
                  {expand ? "Thu gọn" : "Xem thêm"}
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Episodes */}

      <section className="max-w-7xl mx-auto px-6 py-10">

        <EpisodeList
          movie={movie}
        />

      </section>

      {/* Actors */}

      <section className="max-w-7xl mx-auto px-6 pb-16">

        <ActorList
          actors={movie.movie.actor}
        />

      </section>

    </div>
  );
}

export default MovieDetail;