import { Skeleton } from "@mui/lab";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import { ILesson } from "../../../api/entity.types";
import { Lesson } from "../../lesson/Lesson";
import { BoxLessons, GridSkeleton } from "./lessonsBlock.styled";

interface ILessonsBlock {
  lessons?: ILesson[];
}

export const LessonsBlock: React.FC<ILessonsBlock> = ({ lessons = [] }) => {
  return (
    <BoxLessons>
      <Typography variant="h5" component="h3">
        Lessons
      </Typography>
      <Grid container>
        {lessons.length > 0
          ? lessons.map((lesson) => (
              <Grid key={lesson.id} item xs={12} sm={6} lg={4}>
                <Lesson lesson={lesson} />
              </Grid>
            ))
          : Array.from(Array(3)).map((_, index) => (
              <GridSkeleton key={index} item xs={12} sm={6} lg={4}>
                <Skeleton variant="rectangular" width={345} height={267.41} />
              </GridSkeleton>
            ))}
      </Grid>
    </BoxLessons>
  );
};
