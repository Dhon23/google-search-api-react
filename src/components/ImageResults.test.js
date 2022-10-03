import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ImageResults from "./ImageResults";

test("rendering image data results", () => {
  const data = [
    {
      image: {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSALo8f49nU1jwEZYwEiiL4XXzqqPWMKgv_VGE1JpnBnyP2VDCJDdo12cWHI0k&s",
        alt: "",
      },
      link: {
        href: "https://www.google.com/url?q=https://www.parisinfo.com/paris-pratique/se-rendre-a-paris/en-car&sa=U&ved=2ahUKEwjH3aKYn7f6AhUmQPEDHWkXAogQr4kDegQIBBAC&usg=AOvVaw1gEbuRdNr8HO6-7di_4DHn",
        title: "Se rendre à Paris en car -...   www.parisinfo.com",
        domain: "Se rendre à Paris en car -...   www.parisinfo.com",
      },
    },
  ];

  render(<ImageResults data={data} />, { wrapper: BrowserRouter });

  expect(screen.getByTestId("image-results-0")).toBeInTheDocument();
});
