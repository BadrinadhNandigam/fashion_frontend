# Fashion Store – React.js E-Commerce Web Application

A responsive fashion store web application built with **React.js**. This project demonstrates reusable React components, client-side routing, REST API integration, CRUD operations, authentication flow, Redux Toolkit state management, LocalStorage persistence, and responsive CSS design.

## 🌐 Live Demo

**Live Website:**  
https://fashionfrontend-blond.vercel.app/

> **Deployment Note:** The Vercel URL hosts the frontend. During development, the project uses JSON Server as the backend. For a fully remote production setup, the Axios `baseURL` should point to a publicly deployed backend instead of `http://localhost:3000`.

---

## 📌 Project Overview

Fashion Store is a frontend e-commerce application where users can:

- Browse fashion products
- Search products by name
- Filter products by category
- Filter products by price range
- Sort products by rating
- View detailed product information
- Register and log in
- Log out
- Access protected pages after login
- Add and remove products from Favorites
- Persist login and favorite data using LocalStorage
- Create, update, view, and delete products

The application uses custom CSS for a clean and responsive user interface.

---

## ✨ Main Features

### 1. Product Management

The application supports CRUD operations for products:

- **Create** – Add a new product
- **Read** – View products and product details
- **Update** – Edit product information
- **Delete** – Remove products

Product data is handled through REST API requests using Axios and JSON Server.

---

### 2. Product Search

Users can search products by their name.

Example:

```text
Search: shirt
