import { LoaderCircle } from "lucide-react";

function DetailSkeleton() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="flex flex-col items-center gap-5">
        <LoaderCircle
          size={60}
          className="text-red-500 animate-spin"
        />

        <p className="text-slate-400 text-lg">
          Đang tải...
        </p>
      </div>
    </div>
  );
}

export default DetailSkeleton;