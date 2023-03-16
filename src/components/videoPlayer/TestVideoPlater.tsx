import Hls from "hls.js";
import React, { useEffect, useRef } from "react";

export const TestVideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    //
    // First check for native browser HLS support
    //
    if (videoRef.current?.canPlayType("application/vnd.apple.mpegurl")) {
      videoRef.current.src =
        "https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/preview/AppleHLS1/preview.m3u8";
      //
      // If no native HLS support, check if HLS.js is supported
      //
    } else if (Hls.isSupported()) {
      var hls = new Hls();
      hls.loadSource(
        "https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/preview/AppleHLS1/preview.m3u8"
      );
      hls.attachMedia(videoRef.current!);
    }
  }, []);

  return (
    <video ref={videoRef} controls width={"150px"} height={"100px"} muted />
  );
};
