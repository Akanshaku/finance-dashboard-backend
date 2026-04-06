# finance-dashboard-backend
# Finance Data Processing & Access Control Backend

## Overview
This project implements a backend system for a finance dashboard that manages financial records with role-based access control.

The system demonstrates backend architecture design, API structuring, access control, and aggregation logic.

## Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- API Testing: Postman
- Deployment: Render
  
## Features

### User & Role Management
- Create users
- Assign roles (Viewer, Analyst, Admin)
- User status management
- Role-based permissions

### Financial Records
- Create transactions
- Update/Delete records
- Filter by category, type, date
- Secure access control

### Dashboard Analytics
- Total income
- Total expenses
- Net balance
- Aggregated financial summaries

### Security
- JWT Authentication
- Middleware-based authorization
- Input validation
- Error handling

## Setup Instructions

-Clone repository
git clone <repo-link>
cd finance-dashboard-backend

-Install Dependencies
npm install

-Create .env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret

-Run Server
npm run dev
