import React from "react";

export default function SkeletonInsturctor() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <div className="bg-[#A9A9A9] w-full h-fit max-w-[300px] p-4 rounded-3xl my-5 animate-pulse flex">
          <div className="w-1/3">
            <div className="w-32 bg-gray-400 h-32 mx-auto rounded-full object-cover"></div>
          </div>
          <div className="flex-1 text-white flex flex-col gap-2 pt-2">
            <div className="h-4 bg-gray-400 w-3/4 rounded"></div>
            <div className="h-3 bg-gray-400 w-full rounded"></div>
            <div className="h-3 bg-gray-400 w-1/2 rounded"></div>
            <div className="h-3 bg-gray-400 w-1/2 rounded"></div>
            <div className="h-3 bg-gray-400 w-2/3 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
