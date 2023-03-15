import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import { api } from "../api/apiMethods";
import { ICourse } from "../api/entity.types";

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
          <Grid key={course.id} item xs={6} md={4}>
            {course.id}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default MainPage;
