import React from "react";

interface VideoPlayerProps {
  width: string;
  height: string;
}

export const VideoPlayer = React.forwardRef<HTMLVideoElement, VideoPlayerProps>(
  ({ height, width }, videoRef) => {
    return (
      <video ref={videoRef} controls width={width} height={height} muted />
    );
  }
);
