import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import NewsMarked from "./NewsMarked";
import store from "../store";
import { BrowserRouter } from "react-router-dom";

test("rendering news marked without data store data results", () => {
  window.localStorage.setItem("marks", `[]`);

  render(
    <Provider store={store}>
      <BrowserRouter>
        <NewsMarked />
      </BrowserRouter>
    </Provider>
  );

  expect(screen.getByTestId("bookmark-some-news")).toBeInTheDocument();
});

test("rendering news marked with data store data results", () => {
  window.localStorage.setItem(
    "marks",
    `[{"id":"CAIiEJTgkIHIYh4H0zm6Z-uHOrcqGQgEKhAIACoHCAowuKD9CjCCyvQCMILn0wU","title":"Cleaning expert Lynsey Crombie's guide to caring for a car - Wales Online","link":"https://www.walesonline.co.uk/news/uk-news/cleaning-expert-lynsey-crombies-guide-25122817","source":{"href":"https://www.walesonline.co.uk","title":"Wales Online"},"published":"Wed, 28 Sep 2022 01:50:52 GMT"}]`
  );

  render(
    <Provider store={store}>
      <BrowserRouter>
        <NewsMarked />
      </BrowserRouter>
    </Provider>
  );
  expect(screen.getByTestId("news-results-0")).toBeInTheDocument();
  fireEvent.click(screen.getByTestId("mark-0"));
});
