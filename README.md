# Book Store App

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Description

The Book Store App is a minimalistic full-stack web application built using the MERN (MongoDB, Express.js, React, Node.js) stack. It enables users to manage a collection of books with basic CRUD (Create, Read, Update, Delete) operations. This README focuses on the provided API endpoints for handling book-related functionalities.

## Features

- **CRUD Operations**: Perform Create, Read, Update, and Delete operations on the book collection.
- **Validation**: Server-side validation to ensure required fields are provided for book creation and updates.

## Technologies Used

- **MongoDB**: NoSQL database for storing book data.
- **Express.js**: Backend framework for building the server and handling HTTP requests.
- **Node.js**: JavaScript runtime for server-side development.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.

## Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/book-store-app.git
    ```

2. Change into the project directory:

    ```bash
    cd book-store-app
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Set up environment variables:

    Create a `.env` file in the root directory and configure the following variables:

    ```
    PORT=3001
    MONGODB_URI=your-mongodb-connection-string
    ```

    Replace `your-mongodb-connection-string` with your MongoDB connection string.

5. Run the application:

    ```bash
    npm start
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3001` (or the specified port in your `.env` file).
2. Utilize the provided API endpoints for managing books.

## API Endpoints

### Create a new Book

```http
POST /api/books/
```

Create a new book by providing the required fields: title, author, publishYear.

### Get All Books

```http
GET /api/books/
```

Retrieve a list of all books in the database.

### Get One Book by ID

```http
GET /api/books/:id
```

Retrieve details of a specific book by its ID.

### Update a Book by ID

```http
PUT /api/books/:id
```

Update details of a specific book by its ID. Provide the required fields: title, author, publishYear.

### Delete a Book by ID

```http
DELETE /api/books/:id
```

Delete a specific book by its ID.
