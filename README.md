# Country info app

## Clone the Repository

To get started, clone the repository to your local machine:

```bash
git clone https://github.com/Orchibald/country-info-app.git
```

## Frontend Setup

The frontend is built using Next.js, React Query, and other modern tools. Follow the steps below to run the client side.

### Steps to run locally:

1. Navigate to the `client` folder:
   ```bash
   cd client
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

### Environment Variables for Frontend

In the `client` directory, create a `.env.local` file and set the following environment variable:

```env
VITE_API_BASE_URL=http://example.com
```

Replace `http://example.com` with the URL `http://localhost:3030` if running locally.

## Backend Setup

The backend is built with NestJS. To run it locally, follow these steps:

### Steps to run locally:

1. Navigate to the `server` folder:
   ```bash
   cd server
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   npm start
   ```

In the `server` directory, create a `.env` file and set the following environment variables:

```env
DATE_NAGER_API=https://date.nager.at/api/v3
COUNTRIES_NOW_API=https://countriesnow.space/api/v0.1/countries
```