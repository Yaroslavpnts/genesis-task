import {
  CardActionArea,
  CardMedia,
  Chip,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { ICourse } from "../../api/entity.types";
import { CardStyled } from "./course.styled";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import lessonImg from "../../assets/lesson.png";

interface ICourseProps {
  course: ICourse;
}

export const Course: React.FC<ICourseProps> = ({ course }) => {
  return (
    <CardStyled>
      <CardActionArea>
        <Typography variant="subtitle1" component="h3">
          {course.title}
        </Typography>
        <CardMedia
          sx={{ height: 140 }}
          image={`${course.previewImageLink}/cover.webp`}
          title="previewCourseImg"
        />
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

      {/* <video width="400" height="200" controls>
        <source
          src={course.meta?.courseVideoPreview?.link}
          type="application/x-mpegURL"
        />
      </video> */}
    </CardStyled>
  );
};
