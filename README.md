# Todo App with Prisma, Supabase, and Next.js

This project is a simple Todo app built using **Next.js**, **Prisma**, **Supabase**, and **Tailwind CSS**. The app allows users to add and delete todos, demonstrating basic CRUD operations.

## Features

- **Add Todo**: Add a new todo item with a title.
- **Delete Todo**: Remove a todo item from the list.
- **Database Integration**: Uses **Supabase** as the database for storing todos.
- **Prisma ORM**: Simplifies database operations with a schema-first approach.
- **Responsive UI**: Styled with **Tailwind CSS** for a clean and responsive design.

---

## Project Structure

### **Directories and Files**

- **app/**  
  Contains the core application components.
  - **action/addTodo.js**: Handles adding new todos to the database.  
  - **action/deleteTodo.js**: Handles deleting todos from the database.  
  - **fonts/**: Custom fonts for the app design.  
  - **globals.css**: Global CSS for styling.  
  - **layout.js**: Layout component for shared layouts across pages.  
  - **page.jsx**: Main entry point rendering the todo list UI.

- **prisma/**  
  Contains Prisma configuration and migrations.
  - **schema.prisma**: Defines the database schema.
  - **client.js**: Prisma client setup for database queries.

- **.env**  
  Environment variables for database connection.

- **migrations/**  
  Automatically generated files for schema changes.

- **tailwind.config.js**  
  Configuration file for Tailwind CSS.

- **next.config.mjs**  
  Configuration for the Next.js application.

---

## Installation and Setup

### Prerequisites

- Node.js (v16 or later)
- Supabase account
- Prisma CLI installed globally (`npm install -g prisma`)

### Steps to Run the Project

1. **Clone the Repository**
   ```bash
   git clone <repository_url>
   cd <repository_name>
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the root of the project and add the following:
   ```env
   DATABASE_URL
   DIRECT_URL
   ```
   read documentation on supabase prisma guide for more details

4. **Apply Prisma Migrations**
   ```bash
   npx prisma migrate dev --name init
   ```

5. **Start the Development Server**
   ```bash
   npm run dev
   ```

6. **Open in Browser**
   Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

## Usage

### Adding a Todo
1. Enter a title in the input field.
2. Click the "Add todo" button to add it to the list.

### Deleting a Todo
1. Click the "Delete" button next to a todo item to remove it from the list.

---

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation.
- **Supabase**: Postgres database with RESTful APIs and real-time subscriptions.
- **Prisma**: Modern ORM for database access.
- **Tailwind CSS**: Utility-first CSS framework for styling.

---

## Environment Variables

Ensure the following variables are set in your `.env` file:

- **DATABASE_URL**: The connection URL for your Supabase Postgres database.
- **DIRECT_URL**: Direct connection to the database. Used for migrations.
