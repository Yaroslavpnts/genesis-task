import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { api } from "../api/apiMethods";
import { getCookie, setCookie } from "../app/helpers/helperFunctions";
import { CoursePage, MainPage, NotFoundPage } from "./routes";

import { ReactComponent as Loader } from "../assets/loader.svg";

const AppRoutes = () => {
  if (!getCookie("token")) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="/:id" element={<CoursePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
