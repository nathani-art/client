import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { MainPage } from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainPage />
  </StrictMode>,
);
