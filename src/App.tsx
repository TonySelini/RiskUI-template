import { ToastContainer } from "react-toastify";
import { ErrorBoundary } from "react-error-boundary";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ErrorFallback } from "./common/ErrorFallback";
import { RiskPage } from "./components/RiskPage";
import "react-toastify/dist/ReactToastify.css";
import './App.css'
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ToastContainer />
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <RiskPage />
        </ErrorBoundary>
      </LocalizationProvider>
    </ThemeProvider>
  )
}

export default App
