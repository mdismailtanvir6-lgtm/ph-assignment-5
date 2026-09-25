import React from 'react';

export default function Banner({ bannerImage, imageAlt = "Banner Image" }) {
  return (
    <section className="container mx-auto px-2 md:px-4 lg:px-0  py-12 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 font-sans bg-white">
      
      {/* Content Column */}
      <div className="flex-1 max-w-2xl text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
          Build Your Ideal
          <span className="block mt-1 bg-linear-to-r from-orange-500 via-rose-500 to-purple-600 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-slate-500 leading-relaxed max-w-xl mx-auto lg:mx-0">
          Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
          <button className="w-full lg:w-auto px-7 py-3.5 rounded-xl font-semibold text-white bg-linear-to-r from-orange-500 via-rose-500 to-pink-500 shadow-md shadow-rose-500/20 hover:shadow-lg hover:shadow-rose-500/30 active:scale-[0.98] transition-all duration-200 cursor-pointer text-sm sm:text-base">
            Explore Technologies
          </button>

          <button className="w-full lg:w-auto px-7 py-3.5 rounded-xl font-semibold text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-800 active:scale-[0.98] transition-all duration-200 cursor-pointer text-sm sm:text-base">
            Learn More
          </button>
        </div>
      </div>

      {/* Image Column */}
      <div className="flex-1 w-full max-w-md lg:max-w-lg flex justify-center items-center">
        {bannerImage && (
          <img
            src={bannerImage}
            alt={imageAlt}
            className="w-full h-60 sm:h-70 md:h-85 lg:h-110 object-contain"
          />
        )}
      </div>

    </section>
  );
}