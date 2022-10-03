import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SearchInput from "./SearchInput";

test("event input empty", () => {
  render(<SearchInput type="search" searchValue="" />, {
    wrapper: BrowserRouter,
  });
  const input = screen.getByTestId("search-input");
  fireEvent.keyDown(input, { key: "Enter" });
});

test("input default value", () => {
  render(<SearchInput type="search" searchValue="car" />, {
    wrapper: BrowserRouter,
  });

  expect(screen.getByTestId("search-input").value).toEqual("car");
});

test("event input", () => {
  render(<SearchInput type="search" searchValue="car" />, {
    wrapper: BrowserRouter,
  });

  const input = screen.getByTestId("search-input");
  fireEvent.keyDown(input);
  fireEvent.change(input, { target: { value: "plane" } });
  fireEvent.keyDown(input, { key: "Enter" });
  const icon = screen.getByTestId("search-icon");
  fireEvent.click(icon);
});
