import React from "react";
import { render, within } from "@testing-library/react";
import Companies from "./Companies";
import { companies } from "../data/companiesData";
import { BrowserRouter } from "react-router-dom";
describe("Companies", () => {
  const renderCompanies = () =>
    render(
      <BrowserRouter>
        <Companies />
      </BrowserRouter>,
    );
  it("should render the page title", () => {
    const { getByText } = renderCompanies();
    expect(getByText("Companies")).toBeInTheDocument();
  });

  it("should contain company card", () => {
    const { getAllByTestId } = renderCompanies();
    expect(getAllByTestId("company-card")).toHaveLength(companies.length);
  });

  describe("company card", () => {
    it("should render company name", () => {
      const { companyName, description, numberOfEmployees } = companies[0];

      const { getAllByTestId } = renderCompanies();
      const card = within(getAllByTestId("company-card")[0]);

      expect(card.getByText(companyName)).toBeInTheDocument();
      expect(
        card.getByText(`number of employees: ${numberOfEmployees}`),
      ).toBeInTheDocument();
      expect(card.getByText(description)).toBeInTheDocument();
    });
  });
});
