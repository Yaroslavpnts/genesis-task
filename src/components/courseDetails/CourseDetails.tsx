import React, { useRef, useEffect } from "react";
import Hls from "hls.js";
import {
  Chip,
  Rating,
  Typography,
  Stack,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ICourseDetails } from "../../api/entity.types";
import { VideoPlayer } from "../videoPlayer/VideoPlayer";
import Grid from "@mui/material/Grid";
import {
  BoxStyled,
  PreviousPageLink,
  StatusTextColor,
} from "./courseDetails.styled";
import { LessonsBlock } from "./lessonsBlock/LessonsBlock";
import { Skeleton } from "@mui/lab";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import { useHlsVideoHook } from "../../hooks/useHlsVideoHook";

interface ICourseDetailsProps {
  courseDetails?: ICourseDetails;
}

export const CourseDetails: React.FC<ICourseDetailsProps> = ({
  courseDetails,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useHlsVideoHook(courseDetails?.meta.courseVideoPreview?.link || "");

  const listItemStatus =
    courseDetails?.status === "launched" ? (
      <ListItem>
        <ListItemIcon>
          <DoneIcon color="success" fontSize="small" />
        </ListItemIcon>
        <ListItemText
          primary={
            <>
              <span>Status: </span>
              <StatusTextColor color="#2e7d32">
                {courseDetails?.status}
              </StatusTextColor>
            </>
          }
        />
      </ListItem>
    ) : (
      <ListItem>
        <ListItemIcon>
          <CloseIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText
          primary={
            <>
              <span>Status: </span>
              <StatusTextColor color="#d32f2f">
                {courseDetails?.status}
              </StatusTextColor>
            </>
          }
        />
      </ListItem>
    );

  return (
    <BoxStyled>
      <Grid container sx={{ width: "100%" }}>
        {courseDetails ? (
          <Grid item xs={5}>
            <Stack direction="row" spacing={1}>
              {courseDetails.tags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  color="success"
                  variant="outlined"
                />
              ))}
            </Stack>
            <Typography variant="h5" component="h2">
              {courseDetails.title}
            </Typography>
            <Typography variant="subtitle1" component="p">
              {courseDetails.description}
            </Typography>
            <List>
              {listItemStatus}
              <ListItem>
                <ListItemIcon>
                  <AccessTimeIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <>
                      <span>Duration: </span>
                      <StatusTextColor>
                        {courseDetails.duration}
                      </StatusTextColor>
                    </>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CalendarMonthIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <>
                      <span>Launched: </span>
                      <StatusTextColor>
                        {new Date(
                          courseDetails.launchDate || ""
                        ).toLocaleString("en-US", { dateStyle: "medium" })}
                      </StatusTextColor>
                    </>
                  }
                />
              </ListItem>
            </List>
            <Rating
              name="read-only"
              value={courseDetails.rating}
              readOnly
              precision={0.5}
            />
          </Grid>
        ) : (
          <Grid>
            <Skeleton
              variant="rectangular"
              width={456.1}
              height={281.1}
            ></Skeleton>
          </Grid>
        )}
        <Grid item xs={5}>
          <VideoPlayer
            ref={videoRef}
            height="240px"
            width="450px"
            muted={false}
          />
        </Grid>
      </Grid>
      <LessonsBlock lessons={courseDetails?.lessons}></LessonsBlock>
      <PreviousPageLink to="../">
        <ArrowBackIcon color="action" fontSize="large" />
      </PreviousPageLink>
    </BoxStyled>
  );
};
