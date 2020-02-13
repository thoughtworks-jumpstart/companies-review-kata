import React, { useState, useEffect } from "react";
import { companies } from "../data/companiesData";
import Review from "../components/Review";
import "./CompanyDetails.css";
import ReviewModal from "../components/ReviewModal";

const CompanyDetails = ({ match, history, isLogin, username }) => {
  const companyId = match.params.id;
  const [companyDetail, setCompanyDetail] = useState();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const data = companies.find(company => company.id === companyId);

    if (data) {
      setCompanyDetail(data);
    } else {
      history.push("/");
    }
  }, [history, companyId]);

  const addReview = newReview => {
    const reviews = [
      ...companyDetail.reviews,
      {
        username: username,
        ...newReview,
        id: Math.floor(Math.random() * 100000),
      },
    ];
    setCompanyDetail({ ...companyDetail, reviews });
  };

  return (
    <div data-testid="company-detail">
      {companyDetail && (
        <div className="details-content">
          <h1>
            {companyDetail.companyName}, {companyDetail.companySuffix}
          </h1>
          <b>number of employees: {companyDetail.numberOfEmployees}</b>
          <div>{companyDetail.description}</div>

          {!!isLogin && (
            <button className="add-review" onClick={() => setShowModal(true)}>
              Add Review
            </button>
          )}

          {!!showModal && (
            <ReviewModal
              closeModal={() => setShowModal(false)}
              addReview={addReview}
            />
          )}

          <div className={"user-review"}>
            {companyDetail.reviews.map(userReview => {
              const { id, username, review, rating, title } = userReview;
              return (
                <Review
                  key={id}
                  username={username}
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
