import { User } from "lucide-react";

function ActorList({ actors }) {
  if (!actors || actors.length === 0) return null;

  return (
    <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">

      <h2 className="text-2xl font-bold mb-6">
        Diễn viên
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">

        {actors.map((actor, index) => (

          <div
            key={index}
            className="group text-center"
          >

            <div className="w-24 h-24 mx-auto rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-cyan-500 transition">

              <User
                size={40}
                className="text-slate-300 group-hover:text-black"
              />

            </div>

            <h3 className="mt-4 font-semibold text-white group-hover:text-cyan-400 transition">

              {actor}

            </h3>

          </div>

        ))}

      </div>

    </div>
  );
}

export default ActorList;