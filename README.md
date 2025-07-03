# 📋 User Management System with Express & Sequelize

This is a full-stack web application developed using **Node.js**, **Express.js**, **Sequelize ORM**, and **Handlebars**. It allows you to manage users and their respective addresses with full CRUD functionality.

## 🚀 Features

- Create, read, update and delete users  
- Add and remove addresses associated with users  
- Server-side rendering using Handlebars  
- Form handling with validation for optional newsletter subscription  
- Sequelize ORM for interaction with a relational database  
- Modular architecture for scalability and maintainability  

## 🛠️ Technologies Used

- **Node.js**
- **Express.js**
- **Sequelize**
- **MySQL**
- **Express-Handlebars**

## 📦 Installation

To run the project locally, follow the steps below:

### 1. Clone the repository
    git clone https://github.com/GuillhermeHenrique/user_registration
    cd your-repo-name

### 2. Install dependencies
    npm install

### 3. Create a <code>.env</code> file

Configure your database connection:

    DB_NAME=your_database_name
    DB_USER=your_username
    DB_PASSWORD=your_password
    DB_HOST=localhost
    DIALECT=mysql

### 4. Start the server
    npm start

### 5. Visit the app

Navigate to <code>http://localhost:3000</code> in your browser.

## 📌 Routes Overview

| Method | Route              | Description                   |
|--------|--------------------|-------------------------------|
| GET    | /                  | List all users                |
| GET    | /users/create      | Show form to create a user    |
| POST   | /users/create      | Save a new user               |
| GET    | /users/:id         | View user details             |
| GET    | /users/edit/:id    | Show edit form for a user     |
| POST   | /users/update      | Update an existing user       |
| POST   | /users/delete/:id  | Delete a user                 |
| POST   | /address/create    | Add address for a user        |
| POST   | /address/delete    | Remove a user address         |


## 👨‍💻 Author

Developed by Guilherme Henrique - GitHub: GuillhermeHenrique












