import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ErrorBoundary } from "react-error-boundary";
import './App.css'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ErrorFallback } from "./common/ErrorFallback";
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
        <div>Hello world</div>
      </ErrorBoundary>
    </ThemeProvider>
  )
}

export default App
