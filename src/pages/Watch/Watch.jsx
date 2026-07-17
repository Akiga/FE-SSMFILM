import { useEffect, useMemo, useRef, useState } from "react";
import {
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

import { getWatchMovie } from "../../services/movieService";
import DetailSkeleton from "../../components/skeleton/DetailSkeleton";

function Watch() {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const playerRef = useRef(null);

  const episodeSlug = searchParams.get("tap");

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [serverIndex, setServerIndex] = useState(0);

  // =========================
  // Fetch movie
  // =========================

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);

        const data = await getWatchMovie(slug);

        setMovie(data);
        setServerIndex(0);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [slug]);

  // =========================
  // Sync server theo episode
  // =========================

  useEffect(() => {
    if (!movie) return;

    if (!episodeSlug) {
      setServerIndex(0);
      return;
    }

    const index = movie.episodes.findIndex((server) =>
      server.server_data.some((ep) => ep.slug === episodeSlug)
    );

    setServerIndex(index === -1 ? 0 : index);
  }, [movie, episodeSlug]);

  // =========================
  // Current server
  // =========================

  const currentServer = useMemo(() => {
    if (!movie?.episodes?.length) return null;

    return movie.episodes[serverIndex] ?? movie.episodes[0];
  }, [movie, serverIndex]);

  // =========================
  // Current episode
  // =========================

  const currentEpisode = useMemo(() => {
    if (!currentServer) return null;

    return (
      currentServer.server_data.find(
        (ep) => ep.slug === episodeSlug
      ) || currentServer.server_data[0]
    );
  }, [currentServer, episodeSlug]);

  // =========================
  // Previous / Next Episode
  // =========================

  const episodeIndex = useMemo(() => {
    if (!currentServer || !currentEpisode) return -1;

    return currentServer.server_data.findIndex(
      (ep) => ep.slug === currentEpisode.slug
    );
  }, [currentServer, currentEpisode]);

  const previousEpisode =
    episodeIndex > 0
      ? currentServer?.server_data[episodeIndex - 1]
      : null;

  const nextEpisode =
    episodeIndex < (currentServer?.server_data.length ?? 0) - 1
      ? currentServer.server_data[episodeIndex + 1]
      : null;

  // =========================
  // Scroll player
  // =========================

  useEffect(() => {
    if (!currentEpisode || !playerRef.current) return;

    playerRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [currentEpisode]);

  // =========================
  // Loading
  // =========================

  if (loading) return <DetailSkeleton />;

  if (!movie || !currentServer || !currentEpisode) {
    return (
      <div className="text-center py-20">
        Không tìm thấy dữ liệu phim.
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-0 sm:px-4 lg:px-6 py-4 md:py-8">

      {/* PLAYER */}

      <div
        ref={playerRef}
        className="overflow-hidden rounded-2xl border border-slate-800 shadow-lg"
      >
        <iframe
          src={currentEpisode.link_embed}
          allowFullScreen
          className="w-full aspect-video"
        />
      </div>

      {/* NEXT / PREVIOUS */}

      {currentServer.server_data.length > 1 && (
        <div className="flex justify-between mt-5">
          <button
            disabled={!previousEpisode}
            onClick={() =>
              navigate(
                `/watch/${slug}?tap=${previousEpisode.slug}`
              )
            }
            className={`px-5 py-3 rounded-lg transition
            ${
              previousEpisode
                ? "bg-slate-800 hover:bg-slate-700"
                : "bg-slate-900 text-slate-500 cursor-not-allowed"
            }`}
          >
            ← Tập trước
          </button>

          <button
            disabled={!nextEpisode}
            onClick={() =>
              navigate(
                `/watch/${slug}?tap=${nextEpisode.slug}`
              )
            }
            className={`px-5 py-3 rounded-lg transition
            ${
              nextEpisode
                ? "bg-cyan-500 text-black hover:bg-cyan-400"
                : "bg-slate-900 text-slate-500 cursor-not-allowed"
            }`}
          >
            Tập tiếp →
          </button>
        </div>
      )}

      {/* TITLE */}

      <div className="mt-8">
        <h1 className="text-3xl font-bold">
          {movie.movie.name}
        </h1>

        <p className="mt-2 text-slate-400">
          {movie.movie.origin_name}
        </p>
      </div>

      {/* SERVER */}

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">
          Chọn Server
        </h2>

        <div className="flex flex-wrap gap-3">
          {movie.episodes.map((server, index) => (
            <button
              key={server.server_name}
              onClick={() =>
                navigate(
                  `/watch/${slug}?tap=${server.server_data[0].slug}`
                )
              }
              className={`px-5 py-2 rounded-lg transition
              ${
                index === serverIndex
                  ? "bg-cyan-500 text-black"
                  : "bg-slate-800 hover:bg-slate-700"
              }`}
            >
              {server.server_name}
            </button>
          ))}
        </div>
      </div>

      {/* EPISODES */}

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">
          {currentServer.server_data.length > 1
            ? "Danh sách tập"
            : "Phiên bản"}
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-3">
          {currentServer.server_data.map((ep) => (
            <button
              key={ep.slug}
              onClick={() =>
                navigate(`/watch/${slug}?tap=${ep.slug}`)
              }
              className={`rounded-lg p-3 transition
              ${
                ep.slug === currentEpisode.slug
                  ? "bg-cyan-500 text-black"
                  : "bg-slate-800 hover:bg-slate-700"
              }`}
            >
              {ep.name}
            </button>
          ))}
        </div>
      </div>

      {/* DESCRIPTION */}

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">
          Nội dung phim
        </h2>

        <div
          className="leading-8 text-slate-300"
          dangerouslySetInnerHTML={{
            __html: movie.movie.content,
          }}
        />
      </div>
    </div>
  );
}

export default Watch;