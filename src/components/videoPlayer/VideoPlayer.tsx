import React from "react";

interface VideoPlayerProps {
  width: string;
  height: string;
  muted: boolean;
}

export const VideoPlayer = React.forwardRef<HTMLVideoElement, VideoPlayerProps>(
  ({ height, width, muted }, videoRef) => {
    return (
      <video
        ref={videoRef}
        controls
        width={width}
        height={height}
        muted={muted}
      />
    );
  }
);
