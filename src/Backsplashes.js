import React from "react";

function Backsplashes() {
  return (
    <div className="flex justify-center items-center py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm" />
      <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        <div className="group">
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <img
              src={`${process.env.PUBLIC_URL}/images/backsplash1.jpg`}
              alt="backsplash tile"
              className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <p className="mt-6 text-3xl font-light text-center text-gray-800">
            Backsplash 1
          </p>
        </div>
        <div className="group">
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <img
              src={`${process.env.PUBLIC_URL}/images/backsplash2.jpg`}
              alt="backsplash tile"
              className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <p className="mt-6 text-3xl font-light text-center text-gray-800">
            Backsplash 2
          </p>
        </div>
        <div className="group">
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <img
              src={`${process.env.PUBLIC_URL}/images/backsplash3.jpg`}
              alt="backsplash tile"
              className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <p className="mt-6 text-3xl font-light text-center text-gray-800">
            Backsplash 3
          </p>
        </div>
        <div className="group">
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <img
              src={`${process.env.PUBLIC_URL}/images/backsplash4.jpg`}
              alt="backsplash tile"
              className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <p className="mt-6 text-3xl font-light text-center text-gray-800">
            Backsplash 4
          </p>
        </div>
      </div>
    </div>
  );
}

export default Backsplashes; 