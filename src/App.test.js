import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should render the article page", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("companies")).toBeInTheDocument();
  });

  describe("login flow", () => {
    it("should go to login page", () => {
      const { getByText, getByTestId, getByLabelText } = render(<App />);
      const loginLink = getByText("Login");
      fireEvent.click(loginLink);
      expect(getByTestId("login")).toBeInTheDocument();

      const loginInput = getByLabelText("login");
      const passwordInput = getByLabelText("password");

      fireEvent.change(loginInput, {
        target: { value: "ap" },
      });

      fireEvent.change(passwordInput, {
        target: { value: "password" },
      });

      fireEvent.click(getByTestId("login-button"));

      expect(getByTestId("companies")).toBeInTheDocument();
      expect(getByText("Logout")).toBeInTheDocument();
      expect(() => getByText("Login")).toThrowError();

      fireEvent.click(getByText("Logout"));
      expect(getByText("Login")).toBeInTheDocument();
    });
  });

  it("should display details page when click on company link", () => {
    const { getAllByLabelText, getByTestId } = render(<App />);
    const companyCard = getAllByLabelText("link to company")[0];

    fireEvent.click(companyCard);

    expect(getByTestId("company-detail")).toBeInTheDocument();
  });
});
