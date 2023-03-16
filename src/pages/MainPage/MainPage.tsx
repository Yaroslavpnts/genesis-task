import React, { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import { api } from "../../api/apiMethods";
import { ICourse } from "../../api/entity.types";
import { Course } from "../../components/course/Course";
import Masonry from "@mui/lab/Masonry";
import { mock } from "../data";
import { Pagination } from "@mui/lab";
import { COURSES_PER_PAGE } from "../../app/constants";
import usePagination from "../../hooks/usePaginationHook";
import { ContainerStyled } from "./mainPage.styled";

const MainPage: React.FC = () => {
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [page, setPage] = useState(1);

  // const _data = usePagination(courses, COURSES_PER_PAGE);
  const _data = usePagination(mock, COURSES_PER_PAGE);

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setPage(page);
    _data.jump(page);
    window.scrollTo(0, 0);
  };

  // useEffect(() => {
  //   const fetchCourses = async () => {
  //     try {
  //       const {
  //         data: { courses },
  //       } = await api.getCourses();

  //       setCourses(mock);
  //     } catch (error) {
  //       console.log(error);
  //       setCourses([]);
  //     }
  //   };

  //   fetchCourses();
  // }, []);

  return (
    <ContainerStyled >
      <Typography variant="h5" component="h2" sx={{ my: 2 }}>
        Available courses
      </Typography>

      <Masonry
        columns={{ xs: 1, sm: 2, md: 3 }}
        spacing={3}
        sx={{ margin: "unset" }}
      >
        {_data.currentData().map((course: ICourse) => (
          <Course key={course.id} course={course} />
        ))}
      </Masonry>
      <Pagination
        count={Math.ceil(mock.length / COURSES_PER_PAGE)}
        page={page}
        variant="outlined"
        onChange={handleChangePage}
      />
    </ContainerStyled>
  );
};
export default MainPage;
