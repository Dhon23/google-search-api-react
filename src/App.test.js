import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { MemoryRouter } from "react-router-dom";
import { LocationDisplay } from "./components/LocationDisplay";
import NewsResults from "./components/NewsResults";
import { Provider } from "react-redux";
import store from "./store";

test("landing on a bad page", () => {
  const badRoute = "/some/bad/route";

  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText("404 Not Found")).toBeInTheDocument();
});

test("rendering a component that uses useLocation", () => {
  const route = "/image";

  render(
    <MemoryRouter initialEntries={[route]}>
      <LocationDisplay />
    </MemoryRouter>
  );

  expect(screen.getByTestId("location-display")).toHaveTextContent(route);
});

test("have component nav and search input", () => {
  const route = "/";
  render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByTestId("nav")).toBeInTheDocument();
  expect(screen.getByTestId("search-input")).toBeInTheDocument();
});

test("have component header", () => {
  const route = "/search?keyword=car&type=search";
  render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByTestId("header")).toBeInTheDocument();
  expect(screen.getByTestId("loading-animation")).toBeInTheDocument();
});