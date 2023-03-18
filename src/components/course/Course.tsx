import React, { useRef, useEffect, useState } from "react";
import { CardActionArea, Chip, Rating, Stack, Typography } from "@mui/material";
import { ICourse } from "../../api/entity.types";
import { CardStyled } from "./course.styled";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import lessonImg from "../../assets/lesson.png";
import { VideoPlayer } from "../videoPlayer/VideoPlayer";
import { useNavigate } from "react-router-dom";
import { useHlsVideoHook } from "../../hooks/useHlsVideoHook";

interface ICourseProps {
  course: ICourse;
}

export const Course: React.FC<ICourseProps> = ({ course }) => {
  const { isShowVideo, setIsShowVideo, videoRef, isError } = useHlsVideoHook(
    course.meta.courseVideoPreview?.link || ""
  );

  const navigate = useNavigate();

  const onMouseEnter = () => {
    setIsShowVideo(true);
  };
  const onMouseLeave = () => {
    setIsShowVideo(false);
  };

  const handleCardClick = () => {
    navigate(`/${course.id}`);
  };

  let mediaContent;

  if (isShowVideo && !isError) {
    mediaContent = (
      <VideoPlayer height="140px" width="318px" ref={videoRef} muted={true} />
    );
  } else {
    mediaContent = (
      <img
        src={`${course.previewImageLink}/cover.webp`}
        alt="previewCourseImg"
        style={{ height: "140px" }}
      />
    );
  }

  return (
    <CardStyled
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={handleCardClick}
    >
      <CardActionArea>
        <Typography variant="subtitle1" component="h3">
          {course.title}
        </Typography>
        {mediaContent}
        <Typography variant="subtitle2" component="div">
          <img src={lessonImg} alt="" />
          Lessons: {course.lessonsCount}
        </Typography>
        <Stack spacing={0.5}>
          {course.meta.skills?.map((skill) => (
            <Chip
              key={skill}
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
