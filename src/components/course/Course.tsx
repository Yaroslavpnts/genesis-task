import React, { useRef, useEffect, useState } from "react";
import Hls from "hls.js";
import {
  CardActionArea,
  CardMedia,
  Chip,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { ICourse } from "../../api/entity.types";
import { CardStyled } from "./course.styled";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import lessonImg from "../../assets/lesson.png";
import { VideoPlayer } from "../videoPlayer/VideoPlayer";

interface ICourseProps {
  course: ICourse;
}

export const Course: React.FC<ICourseProps> = ({ course }) => {
  const [isShowVideo, setIsShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    //
    // First check for native browser HLS support
    //
    if (videoRef.current?.canPlayType("application/vnd.apple.mpegurl")) {
      videoRef.current.src = course.meta.courseVideoPreview.link;
      //
      // If no native HLS support, check if HLS.js is supported
      //
    } else if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(course.meta.courseVideoPreview.link);
      hls.attachMedia(videoRef.current!);

      videoRef.current?.play();

      return () => {
        videoRef.current?.pause();
      };
    }
  }, [isShowVideo]);

  const onMouseEnter = () => {
    setIsShowVideo(true);
  };
  const onMouseLeave = () => {
    setIsShowVideo(false);
  };

  return (
    <CardStyled onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <CardActionArea>
        <Typography variant="subtitle1" component="h3">
          {course.title}
        </Typography>
        {isShowVideo ? (
          <VideoPlayer height="140px" width="100%" ref={videoRef} />
        ) : (
          <CardMedia
            sx={{ height: 140 }}
            image={`${course.previewImageLink}/cover.webp`}
            title="previewCourseImg"
          />
        )}
        {/* {isShowVideo ? (
          <CardMedia
            sx={{ height: 140 }}
            image={`${course.previewImageLink}/cover.webp`}
            title="previewCourseImg"
          />
        ) : (
          <VideoPlayer height="140px" width="100%" ref={videoRef} />
        )} */}
        <Typography variant="subtitle2" component="div">
          <img src={lessonImg} alt="" />
          Lessons: {course.lessonsCount}
        </Typography>
        <Stack spacing={0.5}>
          {course.meta.skills?.map((skill) => (
            <Chip
              label={skill}
              variant="outlined"
              icon={<EmojiObjectsIcon />}
            />
          ))}
        </Stack>
        <Rating
          name="read-only"
          value={course.rating}
          readOnly
          precision={0.5}
        />
        <img
          src={`${course.meta?.courseVideoPreview?.link}/cover.webp}`}
          alt=""
        />
      </CardActionArea>
    </CardStyled>
  );
};
