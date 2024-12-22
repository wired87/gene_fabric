# Gene Fabric

A modern web application built with **Next.js 15**, **Prisma**, and **TypeScript**, featuring user authentication, navigation, and a dynamic UI.

---

## Features

- User authentication with **bcrypt** for password hashing and **Prisma** for database management.
- Client-side state management using **Zustand**.
- Responsive and accessible UI built with **React**, **Shadcn/ui** and **TailwindCSS**.

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/gene_fabric.git
   cd gene_fabric

2.	**Install dependencies**:
    Use Yarn or npm:
      ```bash
      yarn install

    Or:
      npm install

3.	**Set up the database**:
	•	Configure your database in the prisma/schema.prisma file.
	•	Apply migrations:
      ```bash
      npx prisma migrate dev

      npx prisma generate


4.	Run the development server:
    ```bash
    yarn dev

    Or:
    npm run dev

## Usage

**Running the app**
	•	Navigate to the home page for an overview.
	•	Use the Sign up and Log in buttons to create and access accounts.

**Tech Stack**
	- Framework: Next.js 15
	- Backend: Prisma ORM
	- Frontend: React, TailwindCSS
	-	State Management: Zustand
	-	Database: Your choice (PostgreSQL, MySQL, SQLite, etc.)
	-	Authentication: bcrypt and custom refresh token logic
