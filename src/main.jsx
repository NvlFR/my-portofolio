import React from "react";
import { StrictMode } from "react";
import { createRoot, ReactDOM } from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <App />
    </MantineProvider>
  </StrictMode>
);
