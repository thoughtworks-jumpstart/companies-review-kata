import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should render the article page", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("companies")).toBeInTheDocument();
  });
});
