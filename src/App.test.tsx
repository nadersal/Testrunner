import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./components/TestRunner/TestRunner";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
