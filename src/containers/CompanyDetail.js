import React, { useState, useEffect } from "react";
import { companies } from "../data/companiesData";
import Review from "../components/Review";
import "./CompanyDetails.css";

const CompanyDetails = ({ match, history }) => {
  const companyId = match.params.id;
  const [companyDetail, setCompanyDetail] = useState();

  useEffect(() => {
    const data = companies.find(company => company.id === companyId);

    if (data) {
      setCompanyDetail(data);
    } else {
      history.push("/");
    }
  }, [history, companyId]);

  return (
    <div>
      {companyDetail && (
        <div>
          <h1>
            {companyDetail.companyName}, {companyDetail.companySuffix}
          </h1>
          <b>number of employees: {companyDetail.numberOfEmployees}</b>
          <div>{companyDetail.description}</div>

          <div className={"user-review"}>
            {companyDetail.reviews.map(userReview => {
              const { id, userName, review, rating, title } = userReview;
              return (
                <Review
                  key={id}
                  userName={userName}
                  rating={rating}
                  title={title}
                  review={review}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyDetails;
