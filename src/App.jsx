import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage.jsx"
import ProjectDetail from "./pages/ProjectDetail.jsx"
import ScrollToTop from "./lib/scrollTop.js";
import HomeRoutes from "./routes/Routes.jsx";

function App() {
  return (
    <>
      <HomeRoutes />
    </>
  )
}

export default App
