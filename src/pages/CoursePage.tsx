import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PageContainer } from "../components/UI/pageContainer/PageContainer";
import { api } from "../api/apiMethods";
import { ICourseDetails } from "../api/entity.types";
import { CourseDetails } from "../components/courseDetails/CourseDetails";

const CoursePage: React.FC = () => {
  const [currentCourse, setCurrentCourse] = useState<ICourseDetails>();

  const { id } = useParams();

  useEffect(() => {
    const fetchCourse = async () => {
      const { data } = await api.getCurrentCourse(id!);
      setCurrentCourse(data);
    };

    fetchCourse();
  }, [id]);

  return (
    <PageContainer>
      <CourseDetails courseDetails={currentCourse} />
    </PageContainer>
  );
};

export default CoursePage;
