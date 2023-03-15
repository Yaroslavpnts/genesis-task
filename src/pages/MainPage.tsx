import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import { api } from "../api/apiMethods";
import { ICourse } from "../api/entity.types";
import { Course } from "../components/course/Course";
import Masonry from "@mui/lab/Masonry";
import { mock } from "./data";

const MainPage: React.FC = () => {
  const [courses, setCourses] = useState<ICourse[]>([]);

  // useEffect(() => {
  //   const fetchCourses = async () => {
  //     try {
  //       const {
  //         data: { courses },
  //       } = await api.getCourses();

  //       setCourses(courses);
  //     } catch (error) {
  //       console.log(error);
  //       setCourses([]);
  //     }
  //   };

  //   fetchCourses();
  // }, []);

  return (
    <Container sx={{ textAlign: "center" }}>
      <Typography variant="h5" component="h2" sx={{ my: 2 }}>
        Available courses
      </Typography>

      <Masonry
        columns={{ xs: 1, sm: 2, md: 3 }}
        spacing={3}
        sx={{ margin: "unset" }}
      >
        {mock.map((course: ICourse) => (
          <Course course={course} />
        ))}
      </Masonry>
    </Container>
  );
};
export default MainPage;
