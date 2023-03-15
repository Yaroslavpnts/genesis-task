import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import { api } from "../api/apiMethods";
import { ICourse } from "../api/entity.types";
import { Course } from "../components/course/Course";

const MainPage: React.FC = () => {
  const [courses, setCourses] = useState<ICourse[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const {
          data: { courses },
        } = await api.getCourses();

        setCourses(courses);
      } catch (error) {
        console.log(error);
        setCourses([]);
      }
    };

    fetchCourses();
  }, []);

  return (
    <Container>
      <Grid container spacing={2}>
        {courses.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </Grid>
    </Container>
  );
};
export default MainPage;
