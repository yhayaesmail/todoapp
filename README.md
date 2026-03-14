# Todo App

A simple **Todo Application** built as my **first backend project** while learning web development.
The main goal of this project was to understand how a backend server works and how it interacts with a database and a basic frontend interface.

The application allows users to create, manage, and track their daily tasks in a simple and organized way.

## 🚀 Features

* Create new tasks
* View all tasks
* Mark tasks as completed
* Delete tasks
* Simple and clean interface

## 🛠 Tech Stack

**Backend**

* Node.js
* Express.js
* Prisma ORM

**Database**

* PostgreSQL

**DevOps / Tools**

* Docker

**Frontend**

* HTML
* CSS
* JavaScript

## 📦 Project Purpose

This project was built mainly to practice:

* Building a backend server using **Node.js and Express**
* Working with **Prisma ORM**
* Connecting an application to a **PostgreSQL database**
* Understanding **Docker containerization**
* Creating a simple full-stack workflow

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/todo-app.git
cd todo-app
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Setup environment variables

Create a `.env` file in the root directory and add your database connection:

```
DATABASE_URL="postgresql://username:password@localhost:5432/todo_db"
```

### 4️⃣ Run database migrations

```bash
npx prisma migrate dev
```

### 5️⃣ Start the application

```bash
npm start
```

### 6️⃣ Open the application

```
http://localhost:3555
```

## 📁 Project Structure

```
todo-app
│
├── prisma
│   └── schema.prisma
│
├── src
│   ├── controllers
│   ├── routes
│   ├── services
│   └── app.js
│
├── public
│
├── Dockerfile
├── package.json
└── README.md
```

## 🧠 What I Learned

* How backend APIs are built using **Express**
* Database modeling with **Prisma**
* Managing a **PostgreSQL** database
* Basic **Docker containerization**
* Connecting backend logic with a simple frontend interface

## 📌 Future Improvements

* Add authentication system
* Add task categories and priorities
* Improve UI/UX
* Deploy the application online

---

⭐ This project represents an important step in my journey toward becoming a backend developer.

