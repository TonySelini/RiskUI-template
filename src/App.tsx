import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ErrorBoundary } from "react-error-boundary";
import './App.css'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ErrorFallback } from "./common/ErrorFallback";
import { RiskPage } from "./components/RiskPage";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <ToastContainer />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <RiskPage />
      </ErrorBoundary>
    </ThemeProvider>
  )
}

export default App
