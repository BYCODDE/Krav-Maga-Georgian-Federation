import React from "react";

export default function VideoKrav() {
  return (
    <div className="flex justify-center items-center  mt-[4rem] animate-fadeIn">
      <div className="text-center">
        <h2 className="text-2xl text-white font-semibold mb-4">Video</h2>
        <iframe
          className="w-[800px] h-[450px] rounded-lg"
          src="https://www.youtube.com/embed/2x5fesVWhoE"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
