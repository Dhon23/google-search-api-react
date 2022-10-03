import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";

test("navigation active class", () => {
  render(<NavBar />, { wrapper: BrowserRouter });

  expect(screen.getByText("Search")).toBeInTheDocument();
  expect(screen.getByText("Image")).toBeInTheDocument();
  expect(screen.getByText("News")).toBeInTheDocument();

  expect(screen.getByText("Search")).toHaveClass("active");
  fireEvent.click(screen.getByText("Image"));
  expect(screen.getByText("Image")).toHaveClass("active");
  fireEvent.click(screen.getByText("News"));
  expect(screen.getByText("News")).toHaveClass("active");
});