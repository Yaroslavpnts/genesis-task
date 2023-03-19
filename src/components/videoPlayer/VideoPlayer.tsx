import React, { KeyboardEvent, useMemo } from "react";
import { VideoStyled } from "./videoPlayer.styled";
import PictureInPictureAltIcon from "@mui/icons-material/PictureInPictureAlt";
import { useElementEvent } from "../../hooks/useElementEvent";

interface VideoPlayerProps {
  width: string;
  height: string;
  muted: boolean;
}

export const VideoPlayer = React.forwardRef<HTMLVideoElement, VideoPlayerProps>(
  ({ height, width, muted }, videoRef) => {
    const togglePictureInPicture = useMemo(() => {
      return function togglePictureInPicture(
        e: React.MouseEvent<HTMLOrSVGElement>
      ) {
        e.stopPropagation();

        if (document.pictureInPictureElement) {
          document.exitPictureInPicture();
        } else if (document.pictureInPictureEnabled) {
          if (videoRef && typeof videoRef !== "function") {
            videoRef.current?.requestPictureInPicture();
          }
        }
      };
      // };
    }, [videoRef]);

    const controlPlayBackSpeedHandler = (event: Event) => {
      event.preventDefault();

      const e = event as unknown as KeyboardEvent;

      if (videoRef && typeof videoRef !== "function" && videoRef.current) {
        if (
          e.altKey &&
          e.code === "ArrowUp" &&
          videoRef.current.playbackRate < 2
        ) {
          videoRef.current.playbackRate += 0.25;
        } else if (
          e.altKey &&
          e.code === "ArrowDown" &&
          videoRef.current.playbackRate > 0.5
        ) {
          videoRef.current.playbackRate -= 0.25;
        }
      }
    };

    useElementEvent({
      element: document.body,
      event: "keydown",
      handler: controlPlayBackSpeedHandler,
    });

    return (
      <VideoStyled>
        <video
          ref={videoRef}
          controls
          width={width}
          height={height}
          muted={muted}
        />
        <PictureInPictureAltIcon onClick={togglePictureInPicture} />
      </VideoStyled>
    );
  }
);
