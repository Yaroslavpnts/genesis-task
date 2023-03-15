import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContext";
import AppRoutes from "./routes/AppRoutes";

export const App = () => {
  return (
    <BrowserRouter basename="/genesis-task">
      <AuthContextProvider>
        <AppRoutes />
      </AuthContextProvider>
    </BrowserRouter>
  );
};
