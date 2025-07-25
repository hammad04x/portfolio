import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage.jsx"
import ProjectDetail from "./pages/ProjectDetail.jsx"
import ScrollToTop from "./lib/scrollTop.js";

function App() {
  return (
    <>
    <ScrollToTop/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
    </Routes>
    </>
  )
}

export default App
