import React from "react";

const HeroImageSkeleton = () => {
  return (
    <div className="relative min-h-[calc(100vh-133px)] w-full bg-gray-300 animate-pulse">
      <div className="absolute inset-0 bg-gray-600 bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4">
        <div className="h-10 w-48 bg-gray-500 rounded mx-auto mb-4"></div>
        <div className="h-6 w-64 bg-gray-500 rounded mx-auto"></div>
      </div>
    </div>
  );
};

export default HeroImageSkeleton;
