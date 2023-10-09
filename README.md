
## Employee Management Website Documentation

### Introduction
This Employee Management website is a web application built using React for the frontend and Spring Boot for the backend. It provides simple CRUD (Create, Read, Update, Delete) functionality for managing employee records.


- Spring Boot: https://spring.io/projects/spring-boot

### Installation
Follow these steps to set up and run the application:

#### Frontend (React)
1. Open a terminal and run the following commands:
   ```bash
   npm install
   npm start
   ```
2. The React development server will start, and you can access the web application at `http://localhost:3000` in your web browser.

#### Backend (Spring Boot)
1. Open the project in your preferred Java IDE or text editor.
2. Run the Spring Boot application. This will start the backend server on `http://localhost:8080`.

### Usage
Once the application is running, you can perform the following actions:

#### Home Page
- Access the home page at `http://localhost:3000` to view the list of employees.

#### Add Employee
- Click on "Add Employee" in the navigation bar to add a new employee to the database.

#### Edit Employee
- Click on "Edit" next to an employee's name on the home page to edit their details.

#### Delete Employee
- Click on "Delete" next to an employee's name on the home page to delete their record.

#### User Authentication
- Access the "Login" page at `http://localhost:3000/login` to log in.
- Access the "Register" page at `http://localhost:3000/register` to create a new user account.

### Routing
- The application uses React Router for routing between different views. Routes are defined in the `App.js` file.

### Dependencies
- Frontend dependencies are managed using npm and listed in the `package.json` file.
- Backend dependencies are managed using Maven and listed in the `pom.xml` file.


### License
This project is licensed under the [MIT License](LICENSE).

### Acknowledgments
- This project was created as a learning exercise and may serve as a starting point for building more complex applications.
