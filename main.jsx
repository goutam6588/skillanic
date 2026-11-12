import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import App from "./src/App.jsx";
import { ContentProvider } from "./src/context/ContentProvider.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <HelmetProvider>
    <ContentProvider>
      <App />
    </ContentProvider>
  </HelmetProvider>
  // </StrictMode>,
);
