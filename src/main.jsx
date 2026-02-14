import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./../public/css/index.css";
import "./../public/css/fonts.css";
import App from "./App.jsx";
import { ThemeProvider } from "./contexts/Theme.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      {" "}
      <App />
    </ThemeProvider>
  </StrictMode>,
);
