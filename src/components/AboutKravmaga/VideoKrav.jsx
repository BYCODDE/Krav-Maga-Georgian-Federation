import React from "react";
import YouTube from "react-youtube";

const VideoKrav = () => {
  const videoId = "2x5fesVWhoE";

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

  const onReady = (event) => {
    event.target.playVideo();
  };

  return (
    <div>
      <YouTube videoId={videoId} opts={opts} onReady={onReady} />
    </div>
  );
};

export default VideoKrav;
