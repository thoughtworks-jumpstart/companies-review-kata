import React from "react";
import { companies } from "../data/companiesData";
import CompanyCard from "../components/CompanyCard";
import "./Companies.css";

const Companies = () => {
  return (
    <div data-testid="companies">
      <h1>Companies</h1>
      <div className="company-cards">
        {companies.map(
          ({ id, companyName, description, numberOfEmployees }) => (
            <CompanyCard
              key={id}
              id={id}
              name={companyName}
              description={description}
              numberOfEmployees={numberOfEmployees}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default Companies;
