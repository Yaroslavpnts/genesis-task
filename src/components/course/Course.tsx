import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  Chip,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { ICourse } from "../../api/entity.types";

interface ICourseProps {
  course: ICourse;
}

export const Course: React.FC<ICourseProps> = ({ course }) => {
  return (
    <Card>
      <CardActionArea>
        <Typography variant="h3" component="h3">
          {course.title}
        </Typography>
        <img
          src={`${course.previewImageLink}/cover.webp`}
          alt="previewCourseImg"
        />
        <Typography variant="subtitle2" component="span">
          {course.lessonsCount}
        </Typography>
        <Stack>
          {course.meta.skills.map((skill) => (
            <Chip label={skill} variant="outlined" />
          ))}
        </Stack>
        <Rating name="read-only" value={course.rating} readOnly />
        <img
          src={`${course.meta.courseVideoPreview.link}/cover.webp}`}
          alt=""
        />
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Show more info
        </Button>
      </CardActions>

      <video width="400" height="200" controls>
        <source
          src={course.meta.courseVideoPreview.link}
          type="application/x-mpegURL"
        />
      </video>
    </Card>
  );
};
