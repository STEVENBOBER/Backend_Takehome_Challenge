# Set Up Guide (Local Dev)
- git clone 'https://github.com/STEVENBOBER/local-dev-docker-postgres' in order to have a seperate docker container running Postgres
- From within root, run `docker compose up` -- don't worry about seeding anything

# Set Up Guide (Challenge App)
- git clone this repo
- run `npm i` from root dir
- run `npx prisma migrate dev` to apply the migration stack to the up and runnning postgres db
- run `json-server --watch ./json-server/generateInsuranceQuotes.js` in order to turn on the mock server
- run `npm start` to turn the app on

- run `npm run test` to run the tests

# Usage 
Using postman or hit the POST route with a payload like this:
{
    "name": "Sam",
    "age": 35,
    "carModel": "Nissan",
    "yearsOfDrivingExperience": 15
}

This will return a userId -- hit the GET route like this: `localhost:3001/api/quotes/best-three?userId=PLANT_USER_ID`

# Challenge

# Node.js Backend Challenge: Insurance Policy Quote Integration
Scenario:
You work for CaliSafe Insurance, a fictitious insurance company in California. Your task is to create a backend service that integrates with an external insurance dispatcher API, fetches quotes based on user input, and returns the best three quotes to the front-end.

# Requirements:
Setup:
Initialize a new Node.js project using TypeScript. Set up a PostgreSQL database using your preferred ORM (e.g., TypeORM, Sequelize).

API Endpoints:
/api/quotes: POST request that takes user details (name, age, car model, years of driving experience) and fetches insurance quotes. /api/quotes/best-three: GET request that retrieves the best three quotes (lowest price) from the previously fetched quotes.

Integration:
Integrate with a mocked insurance dispatcher API. Use tools like json-server or MirageJS to mock the external API.

Database:
Store all fetched quotes in the PostgreSQL database with relevant user details.

Error Handling:
Properly handle potential errors like invalid user input, API failures, etc.

Documentation:
Provide a brief README detailing how to set up and run the project.

# Bonus (not required, but good to have):

Implement caching to speed up repeated requests.

Include unit and integration tests.

Implement a rate-limiting mechanism to avoid overloading the mocked dispatcher API.

Containerize the application using Docker.

Use an AWS service, like AWS Lambda, to showcase a serverless deployment.

# Evaluation Points (Total: 100 points):

Project Setup (20 points)

Proper TypeScript setup: 10 points.

PostgreSQL and ORM setup: 10 points.

API Endpoints (25 points)
Correct implementation of /api/quotes: 15 points.

Correct implementation of /api/quotes/best-three: 10 points.

Integration & Database (25 points)

Successful integration with the mocked API: 10 points.

Proper data storage and retrieval with PostgreSQL: 15 points.

Error Handling (10 points)

Comprehensive error handling: 10 points.

Documentation (10 points)

Clear and concise README: 10 points.

# Bonus Points (up to 10 points each):

Caching: 5 points.

Testing: 5 points.

Rate limiting: 5 points.

Docker: 5 points.

Serverless deployment with AWS: 10 points.
