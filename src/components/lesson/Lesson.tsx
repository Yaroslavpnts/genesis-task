import React from "react";
import {
  LessonStyled,
  LessonTitleStyled,
  LockedBlockStyled,
  VideoControlsDescription,
} from "./lesson.styled";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { ILesson } from "../../api/entity.types";
import { VideoPlayer } from "../videoPlayer/VideoPlayer";
import { useHlsVideoHook } from "../../hooks/useHlsVideoHook";
import CustomModal from "../UI/modal/CustomModal";
import LockIcon from "@mui/icons-material/Lock";

interface ILessonProps {
  lesson: ILesson;
}

enum LessonsTypes {
  LOCKED = "locked",
  UNLOCKED = "unlocked",
}

export const Lesson: React.FC<ILessonProps> = ({ lesson }) => {
  const { isShowVideo, setIsShowVideo, videoRef } = useHlsVideoHook(
    lesson.link
  );

  const handleOpenVideo = () => {
    if (lesson.status === LessonsTypes.UNLOCKED) {
      setIsShowVideo(true);
    }
  };

  const handleCloseVideo = () => {
    setIsShowVideo(false);
  };

  return (
    <LessonStyled
      sx={{ maxWidth: 345 }}
      onClick={handleOpenVideo}
      islocked={lesson.status === LessonsTypes.LOCKED ? 1 : 0}
    >
      <CardMedia
        sx={{ height: 140 }}
        image={`${lesson.previewImageLink}/lesson-${lesson.order}.webp`}
        title="green iguana"
      ></CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {lesson.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Duration: ${lesson.duration}`}
        </Typography>
        {lesson.status === LessonsTypes.LOCKED && (
          <LockedBlockStyled>
            <LockIcon /> Locked
          </LockedBlockStyled>
        )}
      </CardContent>
      <CustomModal active={isShowVideo} handleClose={handleCloseVideo}>
        <Box>
          <VideoPlayer
            height="400px"
            width="100%"
            muted={false}
            ref={videoRef}
          />
          <LessonTitleStyled>
            {lesson.order}. {lesson.title}
          </LessonTitleStyled>
          <VideoControlsDescription>
            <Typography variant="h5" component="p">
              * you can change video playback speed:
            </Typography>
            <Typography component="span">- to increase - Alt + ↑</Typography>
            <Typography component="span">- to decrease - Alt + ↓</Typography>
          </VideoControlsDescription>
        </Box>
      </CustomModal>
    </LessonStyled>
  );
};
