import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import ResultPage from "./ResultPage";
import store from "../store";

test("empty type", () => {
  const route = "/search?keyword=car&type=";
  render(
    <MemoryRouter initialEntries={[route]}>
      <ResultPage />
    </MemoryRouter>
  );
});

test("empty keyword", () => {
  const route = "/search?keyword=&type=search";
  render(
    <MemoryRouter initialEntries={[route]}>
      <ResultPage />
    </MemoryRouter>
  );
});

test("invalid type", () => {
  const route = "/search?keyword=car&type=someinvalidtype";
  render(
    <MemoryRouter initialEntries={[route]}>
      <ResultPage />
    </MemoryRouter>
  );

  expect(screen.getByTestId("loading-animation")).toBeInTheDocument();
});

test("render result loading", () => {
  const route = "/search?keyword=car&type=search";
  render(
    <MemoryRouter initialEntries={[route]}>
      <ResultPage />
    </MemoryRouter>
  );

  expect(screen.getByTestId("loading-animation")).toBeInTheDocument();
});

test("render search result", async () => {
  const route = "/search?keyword=car&type=search";
  render(
    <MemoryRouter initialEntries={[route]}>
      <ResultPage />
    </MemoryRouter>
  );

  expect(screen.getByTestId("loading-animation")).toBeInTheDocument();
  await waitFor(
    async () =>
      expect(await screen.findByTestId("search-results")).toBeInTheDocument(),
    { timeout: 10000 }
  );
  // const searchResults = await screen.findByTestId("search-results");
  // expect(searchResults).toBeInTheDocument();
});

test("render image result", async () => {
  const route = "/search?keyword=car&type=image";
  render(
    <MemoryRouter initialEntries={[route]}>
      <ResultPage />
    </MemoryRouter>
  );

  expect(screen.getByTestId("loading-animation")).toBeInTheDocument();
  await waitFor(
    async () =>
      expect(await screen.findByTestId("image-results")).toBeInTheDocument(),
    { timeout: 10000 }
  );
  // const searchResults = await screen.findByTestId("image-results");
  // expect(searchResults).toBeInTheDocument();
});

test("render news result", async () => {
  const route = "/search?keyword=car&type=news";
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[route]}>
        <ResultPage />
      </MemoryRouter>
    </Provider>
  );

  expect(screen.getByTestId("loading-animation")).toBeInTheDocument();
  await waitFor(
    async () =>
      expect(await screen.findByTestId("news-results")).toBeInTheDocument(),
    { timeout: 10000 }
  );
  // const searchResults = await screen.findByTestId("news-results");
  // expect(searchResults).toBeInTheDocument();
});
