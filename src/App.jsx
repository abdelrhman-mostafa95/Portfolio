import AppRouter from "./app/router"
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";


function App() {

  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
