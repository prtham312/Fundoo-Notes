# FundooNotes Backend

This is the backend service for the FundooNotes Application. It provides secure and RESTful APIs for user registration, login, and password reset. Built using Node.js and Express.js, it follows the MVC design pattern, uses MongoDB as the database, and implements JWT for authentication. Swagger is used to generate interactive API documentation.

---

## Features

- **User Registration** – Register new users with validation  
- **User Login** – Authenticate users with JWT token generation  
- **Password Reset** – Token-based password reset functionality  
- **Secure Routing** – Protected routes using JWT middleware  
- **API Logging** – Middleware for logging incoming requests  
- **RESTful APIs** – Follows consistent request-response patterns  
- **Swagger Integration** – Auto-generated API docs with testing interface  

---

## Technologies Used

- **Node.js** – Runtime environment for executing JavaScript on the server  
- **Express.js** – Web application framework for Node.js  
- **MongoDB** – NoSQL database for storing user data  
- **Mongoose** – ODM for MongoDB  
- **JWT (JSON Web Token)** – For authentication and secure token exchange  
- **Postman** – For testing API endpoints  
- **Swagger (OpenAPI)** – API documentation and interactive testing  
- **Logger Middleware** – For monitoring and debugging requests  
- **MVC Architecture** – Modular and maintainable code structure  

---

## Project Structure

```
backend/
├── controllers/ # Logic for user-related operations
├── models/ # Mongoose schemas and models
├── routes/ # API route definitions
├── middleware/ # Custom middleware (e.g. authentication, logging)
├── app.js # Entry point of the application
└── swagger.json # Swagger API definition
```

---

## API Endpoints

| Method | Endpoint              | Description                  |
|--------|-----------------------|------------------------------|
| POST   | `auth/SIGNUP`       | Register a new user          |
| POST   | `auth/LOGIN`          | User login with credentials  |
| POST   | `NOTES` | Create a new Note |
| PUT    | `NOTES/{ID}`          | Change Note according to ID|

---

## How to Run

1. Clone the repository:
```bash
git clone https://github.com/prtham312/Fundoo-Notes
cd fundoo-notes-backend
```
2. Install dependencies:
```bash
npm install
```
3. Start MongoDB (locally or use MongoDB Atlas)
Run the server:
``` bash
npm start
```

4. Visit Swagger docs at:
``` bash
http://localhost:3000/api-docs
```
## API Testing
- Use Postman to test endpoints.

- Send JWT token in headers (Authorization: Bearer <token>) for protected routes.

- All responses are in JSON format.

## API Documentation
Swagger UI is available for visual API exploration and testing:

``` bash
http://localhost:3000/api-docs
```
## Screenshot
![unnamed](https://github.com/user-attachments/assets/fea10ee8-812f-45af-9b76-cb2c534f890e)
