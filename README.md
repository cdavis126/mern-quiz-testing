# MERN Tech Quiz with Cypress Testing

video walkthrough here: (add link)

## 📖 Description

This repository contains a fully functioning Tech Quiz application built using the MERN stack (MongoDB, Express.js, React, Node.js), enhanced with comprehensive Cypress testing for both component and end-to-end tests.

## Motivation:

This project was built to practice Cypress component and end-to-end testing, ensuring robust application performance and functionality.

## Why Build This Project?

-To gain hands-on experience with Cypress Testing
-To learn best practices for component and E2E testing
-To solidify MERN stack knowledge by integrating testing workflows

# Problems Solved:

-Implemented Cypress for automated component and E2E tests.
-Ensured reliable functionality by validating user workflows.
-Provided clear feedback through Cypress test outputs.

# What I Learned:
✅ Cypress Component Testing (React components)
✅ Cypress End-to-End Testing (real user scenarios)
✅ Integration of automated testing within a MERN environment
✅ Managing MongoDB connections and environment configurations


## 🚀 Installation

To install dependencies, navigate to the root folder and run:

```bash
npm install
```

Then, install client/server dependencies:

```bash
npm run install:all
```

Rename your `.env.example` file to `.env` and verify MongoDB connection:

```
MONGODB_URI='mongodb://127.0.0.1:27017/techquiz'
```

## 🛠️ Usage

To run the application locally (development mode):

```bash
npm run start:dev
```

- Client: [http://localhost:3000](http://localhost:3000)
- Server: [http://localhost:3001](http://localhost:3001)

To seed your MongoDB database with quiz questions:

```bash
npm run seed
```

## 🧪 Testing

Cypress testing is set up for both component and end-to-end testing.

- To run all Cypress tests:

```bash
npm run test
```

- To specifically run Component Tests:

```bash
npm run test:component
```

- To specifically run E2E Tests:

bash
npm run test:e2e


## 🖥️ Technology Stack
- MongoDB
- Express.js
- React
- Node.js
- Cypress

## 🔗 Repository

GitHub Link Here: [CHERIE DAVIS](https://github.com/cdavis126)

---

## 📝 License

This project is licensed under the MIT license.

