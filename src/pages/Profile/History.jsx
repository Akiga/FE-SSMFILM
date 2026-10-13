import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getHistory, removeHistory } from "../../services/historyService";
import MovieCard from "../../components/movie/MovieCard";

function History() {
    const [histories, setHistories] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchHistory = async () => {
        try {
            const res = await getHistory();
            setHistories(res.data.histories);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchHistory();
    }, []);

    const handleDelete = async (slug) => {
        try {
            await removeHistory(slug);

            setHistories((prev) =>
                prev.filter((item) => item.slug !== slug)
            );
        } catch (err) {
            console.log(err);
        }
    };

    if (loading) {
        return (
            <div className="text-center py-20">
                Đang tải...
            </div>
        );
    }

    if (!histories.length) {
        return (
            <div className="text-center py-20 text-slate-400">
                Bạn chưa xem phim nào.
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">

            <h1 className="text-3xl font-bold mb-8">
                Lịch sử xem
            </h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                {histories.map((item) => (

                    <div
                        key={item._id}
                        className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800"
                    >
                        <img
                            src={item.poster}
                            alt={item.name}
                            className="w-full aspect-[0.7] object-cover"
                        />

                        <div className="p-4">

                            <h2 className="font-semibold line-clamp-2">
                                {item.name}
                            </h2>

                            <p className="text-slate-400 mt-2">
                                Đã xem: {item.episode}
                            </p>

                            <p className="text-slate-500 text-sm mt-1">
                                {new Date(item.watchedAt).toLocaleString()}
                            </p>

                            <div className="flex gap-3 mt-5">

                                <Link
                                    to={`/watch/${item.slug}`}
                                    className="flex-1 bg-cyan-500 text-center text-black py-2 rounded-lg"
                                >
                                    Xem lại
                                </Link>

                                <button
                                    onClick={() => handleDelete(item.slug)}
                                    className="px-4 bg-red-600 rounded-lg cursor-pointer"
                                >
                                    Xóa
                                </button>

                            </div>

                        </div>
                    </div>

                ))}

            </div>

        </div>
    );
}

export default History;