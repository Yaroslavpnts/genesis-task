import Hls from "hls.js";
import React, { useRef } from "react";

interface VideoPlayerProps {
  videoSrc: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSrc }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  //
  // First check for native browser HLS support
  //
  if (videoRef.current?.canPlayType("application/vnd.apple.mpegurl")) {
    videoRef.current.src = videoSrc;
    //
    // If no native HLS support, check if HLS.js is supported
    //
  } else if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource(videoSrc);
    hls.attachMedia(videoRef.current!);
  }

  return <video ref={videoRef} />;
};
