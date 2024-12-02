# Savannah Interview

This is a full-stack web application using React for the frontend and Express for the backend.

## Features

- Frontend: Built with React and Vite for fast development and optimized production builds.
- Backend: Express server handling REST API endpoints.
- Deployment: Deployed on Render

## Technologies Used

- Frontend: React, Vite, React Query, Tailwindcss, shadcn
- Backend: Express, passportjs
- Database: MongoDB
- Deployment: Render

## Setup

### Prerequisites

- Node.js (v20 or higher)
- npm or yarn

## Installation

1. Clone the repository:

```bash
https://github.com/Cavein254/savannah-interview.git
```

2. Navigate to the `frontend` directory and install the dependencies:

```bash
cd frontend
npm install
```

3. Navigate to the `backend` directory and install the dependencies:

```bash
cd ../backend
npm install
```

4. Create a `.env` file in both the `frontend` and `backend` directories for environment-specific settings.

- Frontend `.env`. Create the .env file in the frontend folder and add the following keys:

```bash
VITE_SERVER_URL=http://localhost:4000
VITE_SERVER_LOGIN=http://localhost:4000/auth/google
```

- Backend

```bash
PORT=4000
SECRET=
DATABASE_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_CALLBACK_URL=http://localhost:4000/auth/google/callback
FRONTEND_REDIRECT_URL=http://localhost:5173/
LOGIN_URL=http://localhost:5173/
```

5. Build the frontend

```bash
npm run build --prefix frontend
```

5.Start the backend server

```bash
npm start
```

Now navigate to `http://localhost:4000`
