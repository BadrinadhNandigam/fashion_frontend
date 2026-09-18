
# 👗 Fashion Store - React.js E-Commerce Web Application

A responsive fashion e-commerce web application built with React.js. This project demonstrates modern frontend development concepts including reusable components, routing, CRUD operations, REST API integration, authentication, Redux Toolkit state management, LocalStorage persistence, search, filtering, sorting, and responsive CSS.

### 🌐 Live Demo
🔗 **Live Website:** https://fashionfrontend-blond.vercel.app/

---

### 📌 Project Overview
Fashion Store is a responsive e-commerce web application developed using React.js.

The application allows users to browse fashion products, search and filter products, view detailed product information, register and log in, access protected pages, and manage their favorite products.

The project also includes product management functionality using CRUD operations through Axios and JSON Server.

### 🎯 Project Objective
The main objective is to build a simple and user-friendly fashion shopping application while implementing important React and JavaScript concepts:

- Clean and responsive user interface
- Reusable React components
- Product management
- REST API integration
- Search and filtering
- Dynamic routing
- Authentication & Protected routes
- Redux state management
- LocalStorage persistence

---

### ✨ Features

#### 1. 🛍️ Product Management - CRUD Operations
- **Create:** Add new product via Add Product page `api.post("/products", data)`
- **Read:** View all products `api.get("/products")` and single product `api.get(`/products/${id}`)`
- **Update:** Edit product `api.put(`/products/${id}`, productData)`
- **Delete:** Delete product `api.delete(`/products/${id}`)`

#### 2. 🔎 Product Search
Users can search products by name using `filter()` and `includes()`:
```js
product.name.toLowerCase().includes(search.toLowerCase())
#### 3. 🏷️ Category Filtering
- All Categories, Men, Women, Unisex
category === "All" || product.category === category
#### 4. 💰 Price Filtering
- Below ₹2000, ₹2000 - ₹4000, Above ₹4000

#### 5. ⭐ Rating Sorting
- High To Low / Low To High
filteredProducts.sort((a, b) => b.rating - a.rating)
#### 6. 📄 Dynamic Product Details
Dynamic route: `/products/:id`
const { id } = useParams();
api.get(`/products/${id}`);
Includes: image, name, brand, category, price, rating, description, color, material, sizes.

#### 7. 👤 User Registration
Name, Email, Password using controlled components.
api.post("/users", user);
#### 8. 🔐 Login & 9. 🚪 Logout
Check user via `/users` endpoint. After login:
localStorage.setItem("user", JSON.stringify(user));
On logout:
localStorage.removeItem("user");
#### 10. 🛡️ Protected Routes
Reusable `ProtectedRoute` component checks LocalStorage before allowing access.
const user = JSON.parse(localStorage.getItem("user"));
if (!user) { return <Navigate to="/login" />; }
#### 11. ❤️ Favorites - Redux Toolkit
- Add to Favorites
- Prevent duplicate: `state.find(p => p.id === action.payload.id)`
- Remove: `state.filter(p => p.id !== action.payload.id)`
- Flow: ProductCard -> dispatch(addFavorite) -> favoriteSlice -> Redux State -> LocalStorage -> Favorites Page

#### 12. 💾 LocalStorage Persistence
For user session & favorites:
JSON.stringify(favorites);
JSON.parse(localStorage.getItem("favorites"));
---

### 🧩 Reusable Components
- *Navbar.jsx:* Navigation, links, logout, favorite count
- *ProductCard.jsx:* Reusable card that takes `product` and `onDelete` as props

### 🧠 React Hooks Used
- `useState()` - manage changing data
- `useEffect()` - fetch products from API
- `useNavigate()` - programmatic navigation
- `useParams()` - read dynamic route params
- `useSelector()` - read Redux state
- `useDispatch()` - dispatch Redux actions

### 🧮 JavaScript Concepts Used
- `map()` - render product list
- `filter()` - search, category, price, remove favorites
- `find()` - check duplicate favorites
- `sort()` - rating sorting
- `async/await` - API requests

### 🛣️ Routing
Main routes: `/`, `/products`, `/products/:id`, `/add-product`, `/edit-product/:id`, `/register`, `/login`, `/favorites`

### 🔌 API Integration
`services/api.js`
import axios from "axios";
const api = axios.create({ baseURL: "http://localhost:3000" });
export default api;
### 🗄️ JSON Server
Used as backend during development with endpoints `/products` and `/users`.

---

### 🏗️ Application Architecture
        USER
          ↓
      React UI
          ↓
    React Router
          ↓
  ┌───────┴────────┐
  ↓                ↓
Redux            Axios
  ↓                ↓
Favorites     JSON Server
### 📁 Project Structure
src/
├── app/store.js
├── components/Navbar.jsx, ProductCard.jsx
├── features/favoriteSlice.js
├── pages/Home.jsx, Products.jsx, ProductDetails.jsx, AddProduct.jsx, EditProduct.jsx, Register.jsx, Login.jsx, Favorites.jsx
├── routes/AppRoutes.jsx, ProtectedRoute.jsx
├── services/api.js
├── App.jsx, main.jsx, index.css

### 🛠️ Technology Stack
Technology | Purpose
React.js | Frontend UI
React Router | Navigation
Redux Toolkit | State Management
Axios | REST API
JSON Server | Development Backend
LocalStorage | Persistence
CSS3, Grid, Flexbox | Responsive Design
Vercel | Deployment
### 📱 Responsive Design
Uses CSS Grid, Flexbox, Media Queries, flexible layouts.
@media (max-width: 600px) { /* Mobile styles */ }
---

### 🔄 Complete Application Flow
`HOME -> PRODUCTS -> SEARCH/FILTER/SORT -> PRODUCT DETAILS -> FAVORITE/LOGIN -> FAVORITES`

### 🔐 Authentication Flow
`REGISTER -> POST /users -> LOGIN -> Check Email+Password -> Save User in LocalStorage -> Protected Pages`

### 🚀 Local Setup
1.  Clone: `git clone <YOUR_GITHUB_REPOSITORY_URL>`
2.  Install: `npm install`
3.  Start JSON Server: `json-server --watch db.json --port 3000`
4.  Start React App: `npm run dev`

### 🌐 Deployment Note
Frontend is on Vercel. For production, deploy JSON Server separately and update `baseURL` in `api.js`.

### 📚 Learning Outcomes
React.js, Hooks, Router, Redux Toolkit, Axios, CRUD, Authentication, LocalStorage, Responsive CSS and Reusable Components.

### 🔮 Future Enhancements
- Shopping Cart & Checkout
- Payment Gateway
- Admin Dashboard
- Product Reviews
- Image Upload & Cloud Backend

### 👨‍💻 Author
*Nandigam Badrinadh*

*Live Demo:* https://fashionfrontend-blond.vercel.app/
*Highlights:* React.js + Router + Redux Toolkit + Axios + JSON Server + LocalStorage
