import React from "react";
import YouTube from "react-youtube";

const VideoKrav = () => {
  const videoId = "2x5fesVWhoE";
  const videoId2 = "W96OaJASYtM";

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 0,
      controls: 1,
      modestbranding: 1,
      rel: 0,
      disablekb: 1,
      showinfo: 0,
      fs: 1,
    },
  };

  return (
    <div className="flex flex-col gap-4">
      <YouTube videoId={videoId} opts={opts} />
      <YouTube videoId={videoId2} opts={opts} />
    </div>
  );
};

export default VideoKrav;
