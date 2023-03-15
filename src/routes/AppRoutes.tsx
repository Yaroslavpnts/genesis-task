import { Route, Routes } from "react-router-dom";
import { CoursePage, MainPage, NotFoundPage } from "./routes";

import { ReactComponent as Loader } from "../assets/loader.svg";
import { useAuthContext } from "../hooks/useAuthContext";

const AppRoutes = () => {
  const { hasToken } = useAuthContext();

  if (!hasToken) {
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
