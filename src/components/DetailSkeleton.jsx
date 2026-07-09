function DetailSkeleton() {
  return (
    <div className="min-h-screen bg-slate-950 animate-pulse">

      {/* Banner */}

      <div className="h-[500px] bg-slate-900" />

      <div className="max-w-7xl mx-auto px-6 -mt-72 relative">

        <div className="grid lg:grid-cols-3 gap-10">

          {/* Poster */}

          <div className="flex justify-center">

            <div className="w-72 h-[430px] rounded-2xl bg-slate-800" />

          </div>

          {/* Info */}

          <div className="lg:col-span-2 pt-10">

            <div className="h-10 w-96 rounded bg-slate-800 mb-5" />

            <div className="h-6 w-64 rounded bg-slate-800 mb-8" />

            {/* Badge */}

            <div className="flex flex-wrap gap-3 mb-8">

              {[...Array(5)].map((_, index) => (
                <div
                  key={index}
                  className="w-24 h-9 rounded-full bg-slate-800"
                />
              ))}

            </div>

            {/* Genres */}

            <div className="flex flex-wrap gap-3 mb-8">

              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="w-28 h-9 rounded-full bg-slate-800"
                />
              ))}

            </div>

            {/* Buttons */}

            <div className="flex gap-4 mb-10">

              <div className="w-40 h-12 rounded-xl bg-slate-800" />
              <div className="w-40 h-12 rounded-xl bg-slate-800" />
              <div className="w-40 h-12 rounded-xl bg-slate-800" />

            </div>

            {/* Description */}

            <div className="space-y-3">

              <div className="h-4 rounded bg-slate-800" />
              <div className="h-4 rounded bg-slate-800" />
              <div className="h-4 rounded bg-slate-800" />
              <div className="h-4 w-3/4 rounded bg-slate-800" />

            </div>

          </div>

        </div>

        {/* Episode */}

        <div className="mt-16">

          <div className="h-8 w-52 rounded bg-slate-800 mb-8" />

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">

            {[...Array(12)].map((_, index) => (

              <div
                key={index}
                className="h-16 rounded-xl bg-slate-800"
              />

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default DetailSkeleton;