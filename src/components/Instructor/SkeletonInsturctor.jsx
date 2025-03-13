import React from "react";

export default function SkeletonInstructor() {
  return (
    <div className="flex flex-col bg-[#161616]">
      <div className="text-white font-bold text-center py-[20px] text-2xl animate-pulse">
        <div className="w-3/4 h-6 bg-gray-400 mx-auto rounded"></div>
      </div>

      <div className="px-[20px] py-[50px] flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0 animate-pulse">
          <div className="w-[300px] h-[400px] bg-gray-400 rounded-lg"></div>
        </div>

        <div className="w-full md:w-1/2 pl-[20px] animate-pulse">
          <div className="h-6 bg-gray-400 w-3/4 mb-4 rounded"></div>
          <div className="h-4 bg-gray-400 w-1/2 mb-4 rounded"></div>

          <div className="space-y-2">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="h-4 bg-gray-400 w-full rounded"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
