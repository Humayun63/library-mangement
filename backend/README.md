# Library Management System

A library management system built with Node.js, Express.js, TypeScript, MongoDB and Mongoose. This application allows you to manage books and track borrowing activities in a library.

## Live Demo

**Live Application:** [https://library-management-gules-delta.vercel.app/](https://library-management-gules-delta.vercel.app/)

## Features

- **Book Management**
  - Add new books to the library
  - View all books with filtering and sorting options
  - Update book information
  - Delete books from the library

- **Borrowing System**
  - Borrow books with quantity tracking
  - Automatic copy deduction when books are borrowed
  - Get Borrowing summary

- **Filtering**
  - Filter books by genre
  - Sort by ascending or descending
  - Limit results


## Tech Stack
- **Backend:** Node.js, Express.js
- **Language:** TypeScript
- **Database:** MongoDB with Mongoose ODM
- **Deployment:** Vercel
- **Development:** ts-node-dev

## Project Structure

```
src/
├── app.ts                      # Main application setup
├── server.ts                   # Server configuration
├── app/
│   ├── controllers/           # Route handlers
│   │   ├── book.controller.ts
│   │   └── borrow.controller.ts
│   ├── interfaces/            # TypeScript interfaces
│   │   ├── book.interface.ts
│   │   └── borrow.interface.ts
│   └── models/               # Mongoose models
│       ├── book.model.ts
│       └── borrow.model.ts
└── config/
    └── env.ts               # Environment configuration
```

## API Endpoints

### Books API (`/api/books`)

| Method | Endpoint | Description | Query Parameters |
|--------|----------|-------------|------------------|
| GET | `/api/books` | Get all books | `filter` (genre), `limit`, `sortBy`, `sort` |
| POST | `/api/books` | Create a new book | - |
| GET | `/api/books/:bookId` | Get book by ID | - |
| PUT | `/api/books/:bookId` | Update book by ID | - |
| DELETE | `/api/books/:bookId` | Delete book by ID | - |

### Borrowing API (`/api/borrow`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/borrow` | Borrow a book |
| GET | `/api/borrow` | Get borrowing summary |

## Data Models

### Book Model
```typescript
{
  title: string,
  author: string,
  genre: 'FICTION' | 'NON_FICTION' | 'SCIENCE' | 'BIOGRAPHY' | 'FANTASY',
  isbn: string,
  description?: string,
  copies: number,
  available: boolean
}
```

### Borrow Model
```typescript
{
  book: ObjectId,
  quantity: number,
  dueDate: Date
}
```

## Getting Started

### Prerequisites

- Node.js
- Typescript
- MongoDB database
- npm

### Installation

1. **Clone the repository - For HTTPS users**
   ```bash
   git clone https://github.com/Humayun63/library-mangement.git
   cd library-mangement
   ```

   **Clone the repository - For SSH users**
   ```bash
   git clone git@github.com:Humayun63/library-mangement.git
   cd library-mangement
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   DB_USER=your_mongodb_user
   DB_PASS=your_mongodb_user_password
   DB_COLLECTION=your_collection_name
   ```

4. **Development**
   ```bash
   npm run dev
   ```

5. **Production Build**
   ```bash
   npm run build
   npm start
   ```

## Scripts

- `npm run dev` - Start development server with hot reloading
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Start production server

## License

This project is licensed under the ISC License.

## Author

**GitHub:** [Humayun63](https://github.com/Humayun63)
