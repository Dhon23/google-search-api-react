import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SearchPage from "./SearchPage";

test("click bookmark button", () => {
  render(<SearchPage type="news" />, { wrapper: BrowserRouter });
  fireEvent.click(screen.getByText("Bookmark"));
});
