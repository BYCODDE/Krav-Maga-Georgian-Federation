import React from "react";

function PartnersBannerSkeleton() {
  return (
    <div className="w-full h-auto py-12 flex items-center justify-center px-4 bg-[#A9A9A9]">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-32 h-32 bg-gray-300 rounded-full animate-pulse" />

        <div className="w-24 h-6 bg-gray-300 animate-pulse rounded-md" />

        <div className="w-48 h-4 bg-gray-300 animate-pulse rounded-md" />
      </div>
    </div>
  );
}

export default PartnersBannerSkeleton;
