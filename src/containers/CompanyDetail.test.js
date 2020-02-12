import React from "react";
import { render } from "@testing-library/react";
import fixtures from "../data/companiesWithReviewFixture";
jest.mock("../data/companiesData", () => {
  return {
    companies: [
      {
        id: "75e98bc1-2c52-4fe8-b684-085a0a4f647d",
        companyName: "Leuschke, Wyman and Stiedemann",
        companySuffix: "LLC",
        numberOfEmployees: 5490,
        description:
          "Voluptatem voluptatem et ut omnis nulla repellat eum. Tempore modi accusamus odit. Dolorem voluptas explicabo optio quibusdam nisi. Sed magni magni dolorem qui et aut sapiente eum vel.",
        reviews: [
          {
            id: "236b938a-6372-438b-a47f-c72363b766ef",
            userId: "98d065e6-2ef8-4ac8-8e3a-2bb329e812f0",
            username: "Justice Tromp",
            rating: 4,
            title: "magnam dolorem",
            review:
              "Sit voluptas sed ut similique aut placeat magni. Tenetur qui eligendi blanditiis voluptas. Velit consectetur labore sunt est soluta ut nam consequatur aspernatur. Atque sunt praesentium non qui repudiandae.",
          },
          {
            id: "4331d197-08a1-493d-b830-b03fee9ed566",
            userId: "1e4c18bd-219b-4a5f-a200-c2cac014d7e7",
            username: "Layla McLaughlin",
            rating: 3,
            title: "corrupti nemo",
            review:
              "Vel officiis eum. Iste velit recusandae ut commodi animi totam maxime. Enim ut est minus ea nulla facere cupiditate. Sapiente ratione soluta. Qui qui deserunt accusantium tenetur debitis quia expedita voluptatem. Exercitationem id incidunt placeat ut est quas reiciendis ducimus.",
          },
          {
            id: "221dc997-5377-4a2d-b9a2-d7ea95314eeb",
            userId: "cb59f916-72f0-4a58-867e-59e1432de728",
            username: "Reginald Wisozk",
            rating: 1,
            title: "corporis qui",
            review:
              "Perspiciatis et sed voluptas rerum. Deserunt voluptatum eos iusto sit impedit. Est laboriosam quod laborum aperiam. Dolor maxime vitae dolor laborum neque voluptas facilis aut.",
          },
        ],
      },
      {
        id: "b9b6260e-2cbf-4abe-bc83-449dffeb046e",
        companyName: "Zboncak Group",
        companySuffix: "LLC",
        numberOfEmployees: 85016,
        description:
          "Asperiores mollitia et facilis sapiente illo et at nihil. Nostrum facilis enim. Ipsa soluta ratione.",
        reviews: [
          {
            id: "965ef3f4-aaf0-4189-a468-761bbc99a4ed",
            userId: "cb59f916-72f0-4a58-867e-59e1432de728",
            username: "Reginald Wisozk",
            rating: 1,
            title: "voluptate blanditiis",
            review:
              "Inventore facere provident. Molestiae veniam velit ex at ex temporibus. Voluptatem voluptatem sed accusamus cupiditate.",
          },
          {
            id: "e77cd435-e399-4863-a2f6-38a80e204729",
            userId: "98d065e6-2ef8-4ac8-8e3a-2bb329e812f0",
            username: "Justice Tromp",
            rating: 0,
            title: "amet quod",
            review:
              "Adipisci occaecati labore sapiente perspiciatis iste officia vitae fugiat iure. In similique sed dolorem itaque soluta quis voluptas. Omnis in debitis voluptatum eos expedita quibusdam aut impedit. Incidunt facilis exercitationem ut hic quisquam. Consequatur occaecati veritatis aut id minima soluta voluptatem. Ut atque enim beatae alias magnam eius maxime.",
          },
        ],
      },
    ],
  };
});
import CompanyDetail from "./CompanyDetail";

describe.only("CompanyDetail", () => {
  let data, match, defaultProps;

  const history = {
    push: jest.fn(),
  };

  beforeEach(() => {
    data = fixtures[0];

    match = {
      params: {
        id: data.id,
      },
    };
    defaultProps = {
      match,
      history,
    };
  });

  it("should render company data", () => {
    const { getByText } = render(<CompanyDetail {...defaultProps} />);

    expect(
      getByText(`${data.companyName}, ${data.companySuffix}`),
    ).toBeInTheDocument();
    expect(
      getByText(`number of employees: ${data.numberOfEmployees}`),
    ).toBeInTheDocument();
    expect(getByText(data.description)).toBeInTheDocument();
  });

  it("should call history push to root route if id does not match", () => {
    render(
      <CompanyDetail
        {...defaultProps}
        match={{ params: { id: "wrong-id" } }}
      />,
    );
    expect(history.push).toBeCalledWith("/");
  });

  it("should render all users feedback", () => {
    const { getAllByTestId } = render(<CompanyDetail {...defaultProps} />);

    expect(getAllByTestId("user-review")).toHaveLength(data.reviews.length);
  });
});
