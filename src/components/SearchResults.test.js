import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SearchResults from "./SearchResults";

test("rendering search data results", () => {
  const data = [
    {
      title: "car-Möbel: Ihr Onlineshop für Möbel & Wohnaccessoires",
      link: "https://www.car-moebel.de/",
      description:
        "car-Möbel: Ihr Onlineshop für Möbel & Wohnaccessoireshttps://www.car-moebel.dehttps://www.car-moebel.de",
      additional_links: [
        {
          text: "car-Möbel: Ihr Onlineshop für Möbel & Wohnaccessoireshttps://www.car-moebel.de",
          href: "https://www.car-moebel.de/",
        },
        {
          text: "Accessoires",
          href: "https://www.car-moebel.de/de/wohnaccessoires--1477",
        },
        {
          text: "Schrank+Regal",
          href: "https://www.car-moebel.de/de/schrank-regal--692",
        },
        {
          text: "Für den Garten",
          href: "https://www.car-moebel.de/de/garten--694",
        },
        {
          text: "Kommoden",
          href: "https://www.car-moebel.de/de/kommoden--691",
        },
      ],
      cite: {},
    },
  ];

  render(<SearchResults data={data} />, { wrapper: BrowserRouter });

  expect(screen.getByTestId("search-results-0")).toBeInTheDocument();
});
