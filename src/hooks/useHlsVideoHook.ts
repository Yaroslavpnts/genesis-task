import Hls from "hls.js";
import { useState, useRef, useEffect } from "react";

export const useHlsVideoHook = (videoLink: string) => {
  const [isShowVideo, setIsShowVideo] = useState(false);
  const [isError, setIsError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    //
    // First check for native browser HLS support
    //
    if (video?.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = videoLink;
      //
      // If no native HLS support, check if HLS.js is supported
      //
    } else if (Hls.isSupported() && videoLink) {
      const hls = new Hls();

      hls.attachMedia(video!);

      hls.on(Hls.Events.MEDIA_ATTACHED, () => {
        hls.loadSource(videoLink);
      });

      const isPlaying =
        video?.currentTime &&
        video?.currentTime > 0 &&
        !video.paused &&
        !video.ended &&
        video.readyState > video.HAVE_CURRENT_DATA;

      if (isShowVideo && !isPlaying) {
        video?.play();
      }

      hls.on(Hls.Events.ERROR, function (event, data) {
        if (Hls.ErrorDetails.MANIFEST_LOAD_ERROR) {
          setIsError(true);
        }
      });

      return () => {
        hls.stopLoad();
        video?.pause();
      };
    }
  }, [isShowVideo, videoLink]);

  return { isShowVideo, setIsShowVideo, videoRef, isError };
};
