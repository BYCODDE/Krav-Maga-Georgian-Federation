import React from "react";

const FeedbackBoxSkeleton = () => {
  return (
    <div className="p-6 md:p-10 bg-[#A9A9A9]">
      <h2 className="text-center text-2xl md:text-4xl font-extrabold text-gray-800 mb-4 md:mb-6 bg-gray-300 h-8 w-48 mx-auto animate-pulse"></h2>
      <p className="text-center text-base md:text-lg text-gray-600 mb-8 md:mb-10 bg-gray-300 h-6 w-64 mx-auto animate-pulse"></p>

      <div className="relative overflow-hidden">
        <div className="mySwiper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="flex-shrink-0 w-full min-h-[200px] border border-gray-300 p-6 rounded-xl bg-white shadow-lg animate-pulse">
            <div className="mb-4 flex items-start gap-4">
              <div className="w-6 h-6 bg-gray-300 rounded-full animate-pulse"></div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-gray-300 animate-pulse"></div>
              <div className="flex-1 min-w-0">
                <div className="bg-gray-300 h-4 w-1/2 mb-2 animate-pulse"></div>
                <div className="bg-gray-300 h-4 w-3/4 animate-pulse"></div>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 w-full min-h-[200px] border border-gray-300 p-6 rounded-xl bg-white shadow-lg animate-pulse">
            <div className="mb-4 flex items-start gap-4">
              <div className="w-6 h-6 bg-gray-300 rounded-full animate-pulse"></div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-gray-300 animate-pulse"></div>
              <div className="flex-1 min-w-0">
                <div className="bg-gray-300 h-4 w-1/2 mb-2 animate-pulse"></div>
                <div className="bg-gray-300 h-4 w-3/4 animate-pulse"></div>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 w-full min-h-[200px] border border-gray-300 p-6 rounded-xl bg-white shadow-lg animate-pulse">
            <div className="mb-4 flex items-start gap-4">
              <div className="w-6 h-6 bg-gray-300 rounded-full animate-pulse"></div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-gray-300 animate-pulse"></div>
              <div className="flex-1 min-w-0">
                <div className="bg-gray-300 h-4 w-1/2 mb-2 animate-pulse"></div>
                <div className="bg-gray-300 h-4 w-3/4 animate-pulse"></div>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 w-full min-h-[200px] border border-gray-300 p-6 rounded-xl bg-white shadow-lg animate-pulse">
            <div className="mb-4 flex items-start gap-4">
              <div className="w-6 h-6 bg-gray-300 rounded-full animate-pulse"></div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-gray-300 animate-pulse"></div>
              <div className="flex-1 min-w-0">
                <div className="bg-gray-300 h-4 w-1/2 mb-2 animate-pulse"></div>
                <div className="bg-gray-300 h-4 w-3/4 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackBoxSkeleton;
