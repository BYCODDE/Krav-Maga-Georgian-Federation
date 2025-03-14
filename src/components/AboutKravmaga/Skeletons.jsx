import React from "react";

export default function Skeletons() {
  return (
    <div>
      <div className="bg-[#161616] px-6 py-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <div className="h-8 bg-gray-700 w-3/4 rounded"></div>
            <div className="mt-4 h-20 bg-gray-700 w-full rounded"></div>
          </div>
          <div className="md:w-1/2 w-full rounded-lg shadow-lg min-h-[450px] bg-gray-700"></div>
        </div>

        <div className="text-center mt-10 md:text-left">
          <div className="h-8 bg-gray-700 w-3/4 rounded"></div>
          <div className="mt-4 h-20 bg-gray-700 w-full rounded"></div>

          <div className="mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((index) => (
                <div
                  key={index}
                  className="w-full h-[300px] bg-gray-700 rounded-lg animate-pulse"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
