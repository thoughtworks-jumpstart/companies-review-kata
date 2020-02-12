import React from "react";
import "./CompanyCard.css";
import { Link } from "react-router-dom";

const CompanyCard = ({ id, name, numberOfEmployees, description }) => {
  return (
    <div className="company-card" data-testid="company-card">
      <Link to={`/companies/${id}`}>
        <h1>{name}</h1>
        <p>number of employees: {numberOfEmployees}</p>
        <p>{description}</p>
      </Link>
    </div>
  );
};

export default CompanyCard;
