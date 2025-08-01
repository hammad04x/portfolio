import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App.jsx"
import "./css/global.css"
import "./css/navigation.css"
import "./css/hero.css"
import "./css/sections.css"
import "./css/footer.css"
import "./css/project-detail.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
