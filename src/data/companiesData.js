import { company, random, lorem, name, internet } from "faker";

const getRandom = array => {
  return array[Math.floor(Math.random() * array.length)];
};

const createCompanyReview = () => ({
  id: random.uuid(),
  companyName: company.companyName(),
  companySuffix: company.companySuffix(),
  numberOfEmployees: random.number(),
  description: lorem.paragraph(2),
  reviews: [],
});

const createUser = () => ({
  id: random.uuid(),
  firstName: name.firstName(),
  lastName: name.lastName(),
  email: internet.email(),
});

const MAX_RATING = 5;
const createFeedback = user => ({
  id: random.uuid(),
  userId: user.id,
  userName: `${user.firstName} ${user.lastName}`,
  rating: Math.floor(Math.random() * (MAX_RATING + 1)),
  title: lorem.words(2),
  review: lorem.paragraph(),
});

export const companies = [];
for (let i = 0; i < 2; i++) {
  companies.push(createCompanyReview());
}

const users = [];
for (let i = 0; i < 5; i++) {
  users.push(createUser());
}

for (let i = 0; i < 5; i++) {
  const feedback = createFeedback(getRandom(users));
  const randomCompany = getRandom(companies);
  randomCompany.reviews.push(feedback);
}

export const companiesData = companies.map(company => {
  const newCompany = { ...company };
  delete newCompany.reviews;
  return newCompany;
});
