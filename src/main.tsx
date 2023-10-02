import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ColorModeScript } from "@chakra-ui/react";
import { themeChakra } from "./styles/theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={themeChakra.config.initialColorMode} />
    <App />
  </React.StrictMode>
);
