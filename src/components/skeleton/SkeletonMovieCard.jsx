function SkeletonMovieCard() {
  return (
    <div className="overflow-hidden rounded-xl bg-slate-900 border border-slate-800">
      <div className="aspect-[2/3] bg-slate-800 animate-pulse" />

      <div className="p-4">
        <div className="h-4 rounded bg-slate-800 animate-pulse mb-3" />

        <div className="w-1/2 h-3 rounded bg-slate-800 animate-pulse" />
      </div>
    </div>
  );
}

export default SkeletonMovieCard;