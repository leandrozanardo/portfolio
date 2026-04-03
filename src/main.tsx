import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import i18n, { i18nInitPromise } from "./i18n/config";
import "./styles/global.css";

void i18nInitPromise.then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </I18nextProvider>
    </StrictMode>,
  );
});
