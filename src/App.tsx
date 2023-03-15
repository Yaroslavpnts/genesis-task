import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContext";
import AppRoutes from "./routes/AppRoutes";
import { theme } from "./theme/theme";

export const App = () => {
  return (
    <BrowserRouter basename="/genesis-task">
      <AuthContextProvider>
        <ThemeProvider theme={theme}>
          <AppRoutes />
        </ThemeProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
};
