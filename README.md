# Role-Based Admin Panel (MERN Stack)

**🔗 Live Frontend**: [https://admin-panel-task-eight.vercel.app](https://admin-panel-task-eight.vercel.app)


This is a full-stack MERN application designed with **user authentication**, **role-based access control**, and an **admin dashboard**. It's built using **MongoDB**, **Express.js**, **React**, and **Node.js**, providing a robust and scalable solution for managing users with different access levels.

---

## 🔧 Features

* **JWT-based Authentication**: Secure user login and session management using JSON Web Tokens.
* **Role-based Access Control**: Differentiates access for **Admin** and regular **User** roles.
* **Protected Backend Routes (Express)**: Ensures only authorized users can access specific API endpoints.
* **Admin Panel for User Management**: A dedicated dashboard for administrators to view, add, update, and delete user accounts.
* **React Frontend with Protected Routes**: Client-side routing that restricts access to certain pages based on user roles and authentication status.
* **Responsive Design**: Provides an optimal viewing and interaction experience across a wide range of devices (desktops, tablets, mobile phones).
* **Basic SEO Support (using `react-helmet`)**: Helps in managing document head tags for better search engine optimization.

---

## 📁 Project Structure

### Backend (`/backend`)
Contains the server-side logic, API endpoints, and database interactions.

* `server.js` – The main entry point for the Express.js server.
* `config/` – Houses configuration files, primarily for MongoDB connection.
* `controllers/` – Contains the business logic for handling API requests and responses.
* `middleware/` – Custom Express middleware for authentication (JWT verification) and error handling.
* `models/` – Defines Mongoose schemas and models, such as the User model.
* `routes/` – Defines API route endpoints and links them to controller functions.
* `services/` – Contains specific business logic functions that can be reused across controllers.
* `utils/` – Helper functions and utilities used throughout the backend.

### Frontend (`/frontend`)
Contains the client-side React application.

* `public/` – The public folder, including the `index.html` template.
* `src/` – The core React application files.
    * `components/` – Reusable UI components used across different pages.
    * `pages/` – Individual page components (e.g., Login, Register, Dashboard, Admin Panel).
    * `services/` – Handles API calls to the backend.
    * `style/` – Contains CSS files or styling configurations.
    * `App.js` & `index.js` – The main entry points for the React application.

---

## ⚙️ Technologies Used

* **Frontend**: React.js, React Router, Axios, React Helmet
* **Backend**: Node.js, Express.js, Mongoose, JWT (jsonwebtoken), bcryptjs, dotenv
* **Database**: MongoDB

---

## 🚀 Running the Project

To get this project up and running on your local machine, follow these steps:

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/sidhdhika-banu/Admin-Panel.git](https://github.com/sidhdhika-banu/Admin-Panel.git)
    cd Admin-Panel
    ```

2.  **Install Backend Dependencies:**
    Navigate into the `backend` directory and install the necessary Node.js packages.
    ```bash
    cd backend
    npm install
    ```

3.  **Install Frontend Dependencies:**
    Navigate into the `frontend` directory and install the necessary React packages.
    ```bash
    cd ../frontend # Go back to the root and then into frontend, or simply cd frontend if you're still in the root
    npm install
    ```

4.  **Set Up Environment Variables:**
    In the `backend` directory, create a `.env` file and add your MongoDB URI and JWT secret:
    ```
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_super_secret_jwt_key
    ```
    *Replace `your_mongodb_connection_string` with your MongoDB Atlas URI or local MongoDB URI.
    `your_super_secret_jwt_key` should be a strong, random string.*

5.  **Start the Backend Server:**
    Navigate to the `backend` directory and start the server.
    ```bash
    cd ../backend # Ensure you are in the backend directory
    npm run server
    ```
    The backend server will typically run on `http://localhost:5000`.

6.  **Start the Frontend Application:**
    Navigate to the `frontend` directory and start the React development server.
    ```bash
    cd ../frontend # Ensure you are in the frontend directory
    npm start
    ```
    The frontend application will typically open in your browser at `http://localhost:3000`.

---
