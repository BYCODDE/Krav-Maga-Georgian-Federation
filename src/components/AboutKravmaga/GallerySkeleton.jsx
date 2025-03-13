import React from "react";

export default function GallerySkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {[1, 2, 3, 4].map((_, index) => (
        <div key={index} className="w-full h-[300px] bg-gray-400 rounded-lg animate-pulse"></div>
      ))}
    </div>
  );
}
