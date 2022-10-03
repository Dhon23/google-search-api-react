import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import NewsResults from "./NewsResults";
import store from "../store";

test("rendering news data results", () => {
  window.localStorage.setItem(
    "marks",
    `[{"id":"CAIiEJTgkIHIYh4H0zm6Z-uHOrcqGQgEKhAIACoHCAowuKD9CjCCyvQCMILn0wU","title":"Cleaning expert Lynsey Crombie's guide to caring for a car - Wales Online","link":"https://www.walesonline.co.uk/news/uk-news/cleaning-expert-lynsey-crombies-guide-25122817","source":{"href":"https://www.walesonline.co.uk","title":"Wales Online"},"published":"Wed, 28 Sep 2022 01:50:52 GMT"}]`
  );
  const data = [
    {
      title:
        "Cleaning expert Lynsey Crombie's guide to caring for a car - Wales Online",
      title_detail: {
        type: "text/plain",
        language: null,
        base: "",
        value:
          "Cleaning expert Lynsey Crombie's guide to caring for a car - Wales Online",
      },
      links: [
        {
          rel: "alternate",
          type: "text/html",
          href: "https://www.walesonline.co.uk/news/uk-news/cleaning-expert-lynsey-crombies-guide-25122817",
        },
      ],
      link: "https://www.walesonline.co.uk/news/uk-news/cleaning-expert-lynsey-crombies-guide-25122817",
      id: "CAIiEJTgkIHIYh4H0zm6Z-uHOrcqGQgEKhAIACoHCAowuKD9CjCCyvQCMILn0wU",
      guidislink: false,
      published: "Wed, 28 Sep 2022 01:50:52 GMT",
      published_parsed: [2022, 9, 28, 1, 50, 52, 2, 271, 0],
      summary:
        '<a href="https://www.walesonline.co.uk/news/uk-news/cleaning-expert-lynsey-crombies-guide-25122817" target="_blank">Cleaning expert Lynsey Crombie\'s guide to caring for a car</a>&nbsp;&nbsp;<font color="#6f6f6f">Wales Online</font>',
      summary_detail: {
        type: "text/html",
        language: null,
        base: "",
        value:
          '<a href="https://www.walesonline.co.uk/news/uk-news/cleaning-expert-lynsey-crombies-guide-25122817" target="_blank">Cleaning expert Lynsey Crombie\'s guide to caring for a car</a>&nbsp;&nbsp;<font color="#6f6f6f">Wales Online</font>',
      },
      source: {
        href: "https://www.walesonline.co.uk",
        title: "Wales Online",
      },
      sub_articles: [],
    },
    {
      "title": "Police appeal after luxury car stolen from outside West Lothian home - Daily Record",
      "title_detail": {
        "type": "text/plain",
        "language": null,
        "base": "",
        "value": "Police appeal after luxury car stolen from outside West Lothian home - Daily Record"
      },
      "links": [
        {
          "rel": "alternate",
          "type": "text/html",
          "href": "https://www.dailyrecord.co.uk/news/local-news/police-appeal-after-luxury-car-28100295"
        }
      ],
      "link": "https://www.dailyrecord.co.uk/news/local-news/police-appeal-after-luxury-car-28100295",
      "id": "CAIiEEj8Uvy-lNEMl3NxvSaeGzQqGQgEKhAIACoHCAowrueiCTDmn7gCMKXUtwU",
      "guidislink": false,
      "published": "Wed, 28 Sep 2022 08:44:58 GMT",
      "published_parsed": [2022, 9, 28, 8, 44, 58, 2, 271, 0],
      "summary": "<a href=\"https://www.dailyrecord.co.uk/news/local-news/police-appeal-after-luxury-car-28100295\" target=\"_blank\">Police appeal after luxury car stolen from outside West Lothian home</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Daily Record</font>",
      "summary_detail": {
        "type": "text/html",
        "language": null,
        "base": "",
        "value": "<a href=\"https://www.dailyrecord.co.uk/news/local-news/police-appeal-after-luxury-car-28100295\" target=\"_blank\">Police appeal after luxury car stolen from outside West Lothian home</a>&nbsp;&nbsp;<font color=\"#6f6f6f\">Daily Record</font>"
      },
      "source": {
        "href": "https://www.dailyrecord.co.uk",
        "title": "Daily Record"
      },
      "sub_articles": []
    },
  ];

  render(
    <Provider store={store}>
      <NewsResults data={data} />
    </Provider>
  );

  expect(screen.getByTestId("news-results-0")).toBeInTheDocument();
  fireEvent.click(screen.getByTestId("mark-0"))
  fireEvent.click(screen.getByTestId("unmark-1"))
});
