import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function TopicCard({ topic }) {
  return (
    <Link
      to={topic.to}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        bg-[#151B2D]
        border
        border-slate-700
        p-6
        h-44

        flex
        flex-col
        justify-between
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-blue-500
        hover:shadow-[0_0_35px_rgba(59,130,246,.3)]
      "
    >
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-blue-500/10 via-transparent to-blue-500/5" />

      <div className="relative z-10">
        <span className="inline-block px-3 py-1 rounded-full bg-blue-600 text-xs font-semibold">
          CHỦ ĐỀ
        </span>

        <h3 className="mt-4 text-2xl font-bold text-white">
          {topic.title}
        </h3>
      </div>

      <div className="relative z-10 flex items-center gap-2 text-blue-500 font-medium">
        Khám phá
        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-2"
        />
      </div>
    </Link>
  );
}

export default TopicCard;