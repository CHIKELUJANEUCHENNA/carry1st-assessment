## Project Overview

This project consists of a web application for managing products. It allows users to add new products, view a list of products, and view details of a specific product.

## Usage

To use the application, follow these steps:

1. Ensure that Node.js and npm are installed on your machine.
2. Clone the project repository.
3. Navigate to the project directory in your terminal.
4. Run `yarn install` to install the project dependencies.
5. Start the development server by running `yarn run dev`.
6. Open your web browser and visit http://localhost:3000 to access the application.

## Assumptions Made

The project assumes that users have basic knowledge of web development and are familiar with using npm and Node.js.
It assumes that users have access to the internet to fetch product data from the provided API endpoint.

## Choices and Third-Party Libraries

### axios

- **Purpose**: Used for making HTTP requests to fetch and post product data from/to the API endpoint.
- **Why I Used It**: axios is a widely-used library for making HTTP requests in JavaScript applications. It provides an easy-to-use interface for handling asynchronous requests and has built-in support for handling errors and timeouts.

### react-hook-form

- **Purpose**: Used for managing form state and validation.
- **Why I Used It**: react-hook-form is a lightweight library that provides a simple and efficient way to manage forms in React applications. It offers easy-to-use hooks for handling form state, validation, and submission, reducing boilerplate code and improving performance.

### @hookform/resolvers

- **Purpose**: Provides resolver functions for various validation libraries. Used with yup in this project.
- **Why I Used It**: @hookform/resolvers is a companion library for react-hook-form that provides resolver functions for integrating with different validation libraries. In this project, I used it with yup to validate form data against schema definitions.

### yup

- **Purpose**: A schema validation library used for defining and validating form schemas.
- **Why I Used It**: yup is a powerful and flexible schema validation library for JavaScript applications. It allows us to define validation rules for form fields in a declarative and concise manner, making it easy to ensure that user input meets our application's requirements.

### Jest Testing Library

- **Purpose**: Used for testing React components and utilities.
- **Why I Used It**: Jest provides a comprehensive testing solution for React applications and it enables us to write robust and maintainable tests that ensure the reliability of our application.

## Hosting

### Deploying to Vercel

To host the application on Vercel, follow these steps:

1. **Create a Vercel Account**: If you don't already have one, sign up for a Vercel account at [vercel.com](https://vercel.com/).
2. **Initialize Git Repository**: Make sure the project is initialized as a Git repository. If not, run `git init` in your project directory.
3. **Install Required Dependencies**: Ensure that all required dependencies are listed in your `package.json` file. You can check this by running `yarn install` in your project directory.
4. **Create Vercel Project**: Visit the Vercel dashboard and click on the "Import Project" button. Choose your Git repository and follow the prompts to import your project.
5. **Configure Deployment Settings**: Vercel will detect that your project is a Next.js application and automatically configure the deployment settings. However, you can customize these settings as needed.
6. **Deploy Your Application**: Once the project is imported, click on the "Deploy" button to deploy your application to Vercel. Vercel will build and deploy your application automatically.
7. **View Deployment**: Once the deployment process is complete, you can view your live application by clicking on the provided URL.
