import { render, screen } from "@testing-library/react";
import { StrictMode, type ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import { beforeAll, describe, expect, it } from "vitest";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import i18n, { i18nInitPromise } from "./i18n/config";

beforeAll(async () => {
  await i18nInitPromise;
});

function Providers({
  children,
  initialEntries = ["/"],
}: {
  children: ReactNode;
  initialEntries?: string[];
}) {
  return (
    <StrictMode>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider>
          <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
        </ThemeProvider>
      </I18nextProvider>
    </StrictMode>
  );
}

describe("App", () => {
  it("renders main content landmark", () => {
    render(
      <Providers>
        <App />
      </Providers>,
    );
    const main = document.getElementById("main-content");
    expect(main).not.toBeNull();
    expect(main?.tagName.toLowerCase()).toBe("main");
  });

  it("exposes skip link to main content", () => {
    render(
      <Providers>
        <App />
      </Providers>,
    );
    const skip = screen.getByRole("link", {
      name: /Pular para o conteúdo principal|Skip to main content|Saltar al contenido/i,
    });
    expect(skip).toHaveAttribute("href", "#main-content");
  });

  it("renders primary hero heading", () => {
    render(
      <Providers>
        <App />
      </Providers>,
    );
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("renders not found page for unknown routes", () => {
    render(
      <Providers initialEntries={["/rota-que-nao-existe"]}>
        <App />
      </Providers>,
    );
    expect(
      screen.getByRole("link", {
        name: /Voltar ao início|Back to home|Volver al inicio/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("status")).toBeInTheDocument();
  });
});
