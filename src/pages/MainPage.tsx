import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { api } from "../api/apiMethods";
import { ICourse } from "../api/entity.types";
import { Course } from "../components/course/Course";
import Masonry from "@mui/lab/Masonry";
import { mock } from "./data";
import { Pagination, Skeleton } from "@mui/lab";
import { COURSES_PER_PAGE } from "../app/constants";
import { usePagination } from "../hooks/usePaginationHook";
import { PageContainer } from "../components/UI/pageContainer/PageContainer";

const MainPage: React.FC = () => {
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [page, setPage] = useState(1);

  const _data = usePagination(courses, COURSES_PER_PAGE);
  // const _data = usePagination(courses, 40);

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setPage(page);
    _data.jump(page);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const {
          data: { courses },
        } = await api.getCourses();

        // setCourses(mock);
        setCourses(courses);
      } catch (error) {
        setCourses([]);
      }
    };

    fetchCourses();
  }, []);

  return (
    <PageContainer>
      <Typography variant="h5" component="h2">
        Available courses
      </Typography>

      <Masonry
        columns={{ xs: 1, sm: 2, md: 3 }}
        spacing={3}
        sx={{ margin: "unset" }}
      >
        {_data.currentData().length > 0
          ? _data
              .currentData()
              .map((course: ICourse) => (
                <Course key={course.id} course={course} />
              ))
          : Array.from(Array(3)).map((_, index) => (
              <Skeleton
                key={index}
                variant="rectangular"
                width={360}
                height={468}
              />
            ))}
      </Masonry>
      <Pagination
        count={Math.ceil(mock.length / COURSES_PER_PAGE)}
        page={page}
        variant="outlined"
        onChange={handleChangePage}
      />
    </PageContainer>
  );
};
export default MainPage;
