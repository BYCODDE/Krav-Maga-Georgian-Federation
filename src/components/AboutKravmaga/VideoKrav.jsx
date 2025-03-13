import React, { useRef, useEffect } from "react";
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

  // const player1Ref = useRef(null);
  // const player2Ref = useRef(null);

  // const onReady = (event, playerIndex) => {
  //   if (playerIndex === 1) {
  //     player1Ref.current = event.target;
  //   } else if (playerIndex === 2) {
  //     player2Ref.current = event.target;
  //   }
  // };

  // const handlePauseOnRouteChange = () => {
  //   if (player1Ref.current) {
  //     player1Ref.current.pauseVideo();
  //   }
  //   if (player2Ref.current) {
  //     player2Ref.current.pauseVideo();
  //   }
  // };

  // useEffect(() => {
  //   return () => {
  //     handlePauseOnRouteChange();
  //   };
  // }, []);

  return (
    <div className="flex flex-col gap-4">
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={(event) => onReady(event, 1)}
      />
      <YouTube
        videoId={videoId2}
        opts={opts}
        onReady={(event) => onReady(event, 2)}
      />
    </div>
  );
};

export default VideoKrav;
