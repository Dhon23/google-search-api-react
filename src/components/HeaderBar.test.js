import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import HeaderBar from "./HeaderBar";
import SearchInput from "./SearchInput";

test("header nav active class", () => {
  const route = "/search?keyword=car&type=search";
  render(
    <MemoryRouter initialEntries={[route]}>
      <HeaderBar />
    </MemoryRouter>
  );

  expect(screen.getByText("Search")).toBeInTheDocument();
  expect(screen.getByText("Images")).toBeInTheDocument();
  expect(screen.getByText("News")).toBeInTheDocument();
  expect(screen.getByText("Bookmark")).toBeInTheDocument();

  expect(screen.getByText("Bookmark")).not.toHaveClass("active");
  expect(screen.getByText("Search")).toHaveClass("active");
  fireEvent.click(screen.getByText("Images"));
  expect(screen.getByText("Images")).toHaveClass("active");
  fireEvent.click(screen.getByText("News"));
  expect(screen.getByText("News")).toHaveClass("active");
  expect(screen.getByText("Bookmark")).toHaveClass("active");
  fireEvent.click(screen.getByText("Bookmark"));
  fireEvent.click(screen.getByTestId("logo"));
});

test("bookmark route", () => {
  const route = "/news/bookmark";
  render(
    <MemoryRouter initialEntries={[route]}>
      <HeaderBar />
    </MemoryRouter>
  );

  expect(screen.getByText("News Bookmark")).toBeInTheDocument();
  expect(screen.queryByTestId("search-input")).not.toBeInTheDocument();
});
