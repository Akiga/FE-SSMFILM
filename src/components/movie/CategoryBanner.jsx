function CategoryBanner({ info }) {
  return (
    <section
      className="relative h-72 rounded-2xl overflow-hidden mb-10"
      style={{
        backgroundImage: `url(${info.banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-slate-950/70" />

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl font-bold text-white">
          {info.title}
        </h1>

        <p className="mt-4 text-slate-300 max-w-2xl">
          {info.description}
        </p>
      </div>
    </section>
  );
}

export default CategoryBanner;