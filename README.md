# 👗 Fashion Store — React.js E-Commerce Web Application

A responsive fashion e-commerce web application built using **React.js, JavaScript, React Router, Redux Toolkit, Axios, JSON Server, HTML5, and CSS3**.

The application allows users to browse fashion products, search and filter products, sort products by rating, view detailed product information, register and log in, manage products using CRUD operations, and save products to Favorites.

---

## 🌐 Live Demo

**Frontend:**  
https://fashionfrontend-blond.vercel.app/

> **Note:** The frontend currently uses `http://localhost:3000` for the JSON Server API during local development. For a fully public production deployment, the backend/API should be deployed separately and the Axios `baseURL` should be changed to the deployed backend URL.

---

# 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Project Objective](#-project-objective)
- [Current Project Scope](#-current-project-scope)
- [Features](#-features)
- [Application Pages](#-application-pages)
- [Technology Stack](#-technology-stack)
- [Project Architecture](#-project-architecture)
- [Project Structure](#-project-structure)
- [React Hooks](#-react-hooks)
- [React Router](#-react-router)
- [Authentication System](#-authentication-system)
- [Protected Routes](#-protected-routes)
- [Redux Toolkit Favorites](#-redux-toolkit-favorites)
- [Axios API Integration](#-axios-api-integration)
- [JSON Server Backend](#-json-server-backend)
- [Product CRUD Operations](#-product-crud-operations)
- [Product Search](#-product-search)
- [Category Filtering](#-category-filtering)
- [Price Filtering](#-price-filtering)
- [Rating Sorting](#-rating-sorting)
- [Dynamic Product Details](#-dynamic-product-details)
- [Forms and Controlled Components](#-forms-and-controlled-components)
- [LocalStorage](#-localstorage)
- [Reusable Components](#-reusable-components)
- [JavaScript Concepts Used](#-javascript-concepts-used)
- [UI and CSS Design](#-ui-and-css-design)
- [Responsive Design](#-responsive-design)
- [Complete Application Workflow](#-complete-application-workflow)
- [API Endpoints](#-api-endpoints)
- [Installation and Setup](#-installation-and-setup)
- [Running the Project](#-running-the-project)
- [Git and GitHub](#-git-and-github)
- [Deployment](#-deployment)
- [Testing Checklist](#-testing-checklist)
- [Challenges and Solutions](#-challenges-and-solutions)
- [Security Considerations](#-security-considerations)
- [Future Enhancements](#-future-enhancements)
- [Learning Outcomes](#-learning-outcomes)
- [Project Highlights](#-project-highlights)
- [Author](#-author)
- [License](#-license)

---

# 📌 Project Overview

**Fashion Store** is a React.js based e-commerce web application developed to demonstrate practical frontend development concepts.

The application provides a fashion product catalog where users can:

- View products
- Search products
- Filter products by category
- Filter products by price
- Sort products by rating
- View complete product details
- Add products
- Edit products
- Delete products
- Register an account
- Login
- Logout
- Add products to Favorites
- Remove products from Favorites
- Persist Favorites using LocalStorage

The frontend communicates with a lightweight REST API created using **JSON Server**.

The application data is stored in:

```text
db.json
```

Redux Toolkit is used for global Favorites state management, while LocalStorage is used to persist Favorites and the current user session.

---

# 🎯 Project Objective

The main objective of this project is to develop a complete React-based e-commerce application and demonstrate practical knowledge of modern frontend development.

The project demonstrates:

- React component-based architecture
- JSX
- React Hooks
- React Router
- Dynamic routing
- REST API integration
- CRUD operations
- Form handling
- Authentication
- Protected routes
- Redux Toolkit
- Global state management
- LocalStorage
- Search functionality
- Filtering
- Sorting
- Reusable components
- Responsive CSS

---

# 📌 Current Project Scope

The current implementation includes:

- Product CRUD
- Product search
- Category filtering
- Price filtering
- Rating sorting
- Dynamic product details
- User registration
- User login
- User logout
- LocalStorage-based authentication session
- ProtectedRoute component
- Redux Toolkit Favorites
- Duplicate Favorite prevention
- Favorite count
- Favorite removal
- Favorites persistence
- Axios API integration
- JSON Server backend
- Reusable React components
- Responsive CSS

## Not Currently Implemented

The following features are **not currently implemented as functional features**:

- Shopping cart functionality
- Festival banners
- Festival collections

These can be added later as future enhancements.

---

# ✨ Features

## 1. 🛍️ Product Management - CRUD Operations

The application supports complete product CRUD operations.

### Create

Users can add a new product from the Add Product page.

```javascript
api.post("/products", productData);
```

### Read

Users can view all products.

```javascript
api.get("/products");
```

Users can also retrieve a single product.

```javascript
api.get(`/products/${id}`);
```

### Update

Existing products can be edited.

```javascript
api.put(`/products/${id}`, productData);
```

### Delete

Products can be deleted.

```javascript
api.delete(`/products/${id}`);
```

---

## 2. 🔍 Product Search

Users can search products by name.

Example:

```text
Search Product: Shirt
```

The search is case-insensitive.

```javascript
product.name
    .toLowerCase()
    .includes(search.toLowerCase());
```

The `filter()` method is used to return only matching products.

---

## 3. 🏷️ Category Filtering

Users can filter products by category.

Available categories:

```text
All Categories
Men
Women
Unisex
```

Filtering logic:

```javascript
category === "All" ||
product.category === category
```

When `All` is selected, all categories are displayed.

When a specific category is selected, only products belonging to that category are displayed.

---

## 4. 💰 Price Filtering

Users can filter products based on price.

Available price ranges:

```text
All Prices
Below ₹2000
₹2000 - ₹4000
Above ₹4000
```

Example logic:

```javascript
price === "low" &&
product.price < 2000
```

```javascript
price === "medium" &&
product.price >= 2000 &&
product.price <= 4000
```

```javascript
price === "high" &&
product.price > 4000
```

---

## 5. ⭐ Rating Sorting

Products can be sorted according to rating.

### High To Low

```javascript
filteredProducts.sort(
    (a, b) => b.rating - a.rating
);
```

### Low To High

```javascript
filteredProducts.sort(
    (a, b) => a.rating - b.rating
);
```

---

## 6. 👕 Dynamic Product Details

Every product has a dynamic product details page.

Example:

```text
/products/5
```

The application retrieves the ID from the URL using `useParams()`.

```javascript
const { id } = useParams();
```

The application then requests the corresponding product:

```javascript
api.get(`/products/${id}`);
```

Product information includes:

- Product image
- Product name
- Brand
- Price
- Rating
- Category
- Product type
- Description
- Color
- Material
- Stock
- Available sizes

---

## 7. ❤️ Favorites

Users can save products to Favorites.

Favorites functionality includes:

- Add Favorite
- Remove Favorite
- Duplicate prevention
- Favorite count
- Favorites page
- Redux Toolkit state management
- LocalStorage persistence

---

## 8. 🔐 Authentication

The application provides:

- User registration
- Login
- Logout
- LocalStorage session management
- Authentication checking
- ProtectedRoute component
- Conditional Navbar links

---

## 9. 📱 Responsive UI

The application uses responsive CSS so the interface can adapt to different screen sizes.

Supported layouts include:

- Desktop
- Laptop
- Tablet
- Mobile

---

# 📄 Application Pages

| Page | Route | Purpose |
|---|---|---|
| Home | `/` | Main landing page |
| Products | `/products` | Displays all products |
| Product Details | `/products/:id` | Displays individual product |
| Add Product | `/add-product` | Creates a new product |
| Edit Product | `/edit-product/:id` | Updates an existing product |
| Register | `/register` | Creates a user account |
| Login | `/login` | Authenticates the user |
| Logout | `/logout` | Ends the current session |
| Favorites | `/favorites` | Displays favorite products |

---

# 🛠️ Technology Stack

## Frontend

- React.js
- JavaScript
- HTML5
- CSS3

## Routing

- React Router DOM

## State Management

- Redux Toolkit
- React Redux

## API Communication

- Axios

## Backend

- JSON Server

## Database

- `db.json`

## Browser Storage

- LocalStorage

## Deployment

- Vercel
- Render

---

# 🏗️ Project Architecture

The project follows a component-based React architecture.

```text
                         Fashion Store
                              |
             +----------------+----------------+
             |                |                |
             ↓                ↓                ↓
           Pages         Components          Redux
             |                |                |
             +----------------+----------------+
                              |
                              ↓
                            Axios
                              |
                              ↓
                       JSON Server API
                              |
                              ↓
                           db.json
                         /         \
                        /           \
                   Products         Users
```

---

# 📁 Project Structure

```text
Fashion-Store/
│
├── src/
│   │
│   ├── app/
│   │   └── store.js
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── ProductCard.jsx
│   │
│   ├── features/
│   │   └── favoriteSlice.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── AddProduct.jsx
│   │   ├── EditProduct.jsx
│   │   ├── Register.jsx
│   │   ├── Login.jsx
│   │   ├── Logout.jsx
│   │   └── Favorites.jsx
│   │
│   ├── routes/
│   │   ├── AppRoutes.jsx
│   │   └── ProtectedRoute.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── db.json
├── package.json
├── package-lock.json
└── README.md
```

---

# 📂 Folder Responsibilities

| File / Folder | Responsibility |
|---|---|
| `src/app/store.js` | Redux store configuration |
| `src/components/` | Reusable UI components |
| `src/features/` | Redux feature logic |
| `src/pages/` | Application pages |
| `src/routes/` | React Router configuration |
| `src/services/` | Axios API configuration |
| `src/index.css` | Global CSS styling |
| `db.json` | JSON Server database |
| `package.json` | Dependencies and scripts |
| `main.jsx` | React application entry point |
| `App.jsx` | Main application component |

---

# ⚛️ React Hooks

The project uses several React Hooks.

---

## `useState()`

`useState()` is used to store component-level state.

Example:

```javascript
const [search, setSearch] = useState("");
```

Here:

```text
search
```

stores the current state value.

```text
setSearch
```

updates the state value.

Examples of state used in the application:

```text
products
search
category
price
sort
formData
user
product
```

---

## `useEffect()`

`useEffect()` is used for side effects such as API requests.

Example:

```javascript
useEffect(() => {
    api.get("/products")
        .then((response) => {
            setProducts(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
}, []);
```

The empty dependency array means the effect runs when the component initially loads.

---

## `useNavigate()`

`useNavigate()` is used for programmatic navigation.

Examples:

```javascript
navigate("/login");
```

```javascript
navigate("/products");
```

It is used after operations such as:

- Registration
- Login
- Logout
- Add Product
- Edit Product

---

## `useParams()`

`useParams()` retrieves dynamic URL parameters.

For:

```text
/products/:id
```

the following code retrieves the ID:

```javascript
const { id } = useParams();
```

For:

```text
/products/5
```

the value is:

```text
id = 5
```

---

# 🛣️ React Router

React Router DOM is used to manage navigation between pages.

Example:

```jsx
<Routes>

    <Route
        path="/"
        element={<Home />}
    />

    <Route
        path="/products"
        element={<Products />}
    />

    <Route
        path="/products/:id"
        element={<ProductDetails />}
    />

    <Route
        path="/add-product"
        element={<AddProduct />}
    />

    <Route
        path="/edit-product/:id"
        element={<EditProduct />}
    />

    <Route
        path="/register"
        element={<Register />}
    />

    <Route
        path="/login"
        element={<Login />}
    />

    <Route
        path="/logout"
        element={<Logout />}
    />

    <Route
        path="/favorites"
        element={<Favorites />}
    />

</Routes>
```

---

# 🔗 Link Component

React Router's `Link` component is used for internal navigation.

Example:

```jsx
<Link to="/products">
    Products
</Link>
```

The application uses `Link` for navigation in the Navbar and other pages.

---

# 🔐 Authentication System

The application implements a simple authentication flow using:

```text
React
+
Axios
+
JSON Server
+
LocalStorage
```

Authentication flow:

```text
                  Registration
                       ↓
                 POST /users
                       ↓
                  JSON Server
                       ↓
                    db.json

                     Login
                       ↓
                 GET /users
                       ↓
              Credential Matching
                       ↓
                LocalStorage
                       ↓
                 User Session

                    Logout
                       ↓
             Remove LocalStorage
                       ↓
                Session Ends
```

---

# 📝 Registration

The Register page maintains user data using React state.

Example:

```javascript
const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
});
```

The form uses controlled inputs.

When submitted:

```javascript
await api.post(
    "/users",
    user
);
```

After successful registration:

```javascript
navigate("/login");
```

---

# 🔄 Registration Form Handling

The application uses a common `handleChange()` function.

```javascript
function handleChange(e) {
    setUser({
        ...user,
        [e.target.name]:
            e.target.value
    });
}
```

The following fields can be updated using the same function:

```text
name
email
password
```

The spread operator:

```javascript
...user
```

keeps the existing fields.

The computed property:

```javascript
[e.target.name]
```

identifies which field needs to be updated.

---

# 🔑 Login

The Login page accepts:

```text
Email
Password
```

The application checks the users stored in JSON Server.

Conceptual flow:

```text
Login Form
     ↓
Email + Password
     ↓
GET /users
     ↓
JSON Server
     ↓
Find Matching User
     ↓
Store User in LocalStorage
     ↓
Navigate to Home
```

---

# 💾 Login Session

After successful login, the current user is stored in LocalStorage.

```javascript
localStorage.setItem(
    "user",
    JSON.stringify(user)
);
```

The user can later be retrieved using:

```javascript
const user =
    JSON.parse(
        localStorage.getItem("user")
    );
```

---

# 🚪 Logout

Logout removes the current user from LocalStorage.

```javascript
localStorage.removeItem("user");
```

The application then navigates to the Login page.

---

# 🧭 Conditional Navbar

The Navbar checks whether a user is logged in.

```javascript
const user =
    JSON.parse(
        localStorage.getItem("user")
    );
```

When the user is logged out, the Navbar can display:

```text
Home
Products
Favorites
Register
Login
```

When the user is logged in:

```text
Home
Products
Favorites
Logout
```

Conditional rendering example:

```jsx
{!user && (
    <>
        <Link to="/register">
            Register
        </Link>

        <Link to="/login">
            Login
        </Link>
    </>
)}
```

Logged-in state:

```jsx
{user && (
    <Link to="/logout">
        Logout
    </Link>
)}
```

---

# 🛡️ Protected Routes

The project contains:

```text
src/routes/ProtectedRoute.jsx
```

The component checks whether a user exists in LocalStorage.

Example:

```javascript
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

    const user =
        JSON.parse(
            localStorage.getItem("user")
        );

    if (!user) {
        return (
            <Navigate
                to="/login"
                replace
            />
        );
    }

    return children;
}

export default ProtectedRoute;
```

Flow:

```text
User Requests Protected Page
            ↓
       Check LocalStorage
            ↓
       Is User Available?
          /        \
        No          Yes
        ↓            ↓
      Login         Page
```

The component can be used around pages that require authentication.

---

# ❤️ Redux Toolkit Favorites

Redux Toolkit is used to manage Favorites as global application state.

Redux files:

```text
src/
│
├── app/
│   └── store.js
│
└── features/
    └── favoriteSlice.js
```

---

# 🏪 Redux Store

The Redux store is configured using `configureStore()`.

Example:

```javascript
import {
    configureStore
} from "@reduxjs/toolkit";

import favoriteReducer
    from "../features/favoriteSlice";

export const store =
    configureStore({
        reducer: {
            favorites:
                favoriteReducer
        }
    });
```

The Favorites state can be accessed using:

```javascript
state.favorites
```

---

# ❤️ Favorite Slice

The Favorite slice manages:

- Initial Favorites state
- Add Favorite
- Remove Favorite
- Favorite actions

The initial Favorites are loaded from LocalStorage:

```javascript
const savedFavorites =
    JSON.parse(
        localStorage.getItem(
            "favorites"
        )
    ) || [];
```

If no Favorites exist, the initial state becomes:

```javascript
[]
```

---

# ➕ Add Favorite

Before adding a product, the application checks whether the product already exists.

```javascript
const exists = state.find(
    product =>
        product.id ===
        action.payload.id
);
```

If the product does not already exist:

```javascript
state.push(
    action.payload
);
```

The updated Favorites are then stored in LocalStorage:

```javascript
localStorage.setItem(
    "favorites",
    JSON.stringify(state)
);
```

---

# 🚫 Duplicate Favorite Prevention

The application prevents the same product from being added multiple times.

Flow:

```text
User Clicks Favorite
        ↓
Check Product ID
        ↓
Already Exists?
      /       \
    Yes        No
    ↓           ↓
No Add        Add
```

The `find()` method is used to check for an existing product.

---

# 💔 Remove Favorite

The application removes a Favorite using `filter()`.

```javascript
const updatedFavorites =
    state.filter(
        product =>
            product.id !==
            action.payload
    );
```

The updated array is saved to LocalStorage:

```javascript
localStorage.setItem(
    "favorites",
    JSON.stringify(
        updatedFavorites
    )
);
```

---

# 🔎 useSelector()

`useSelector()` is used to read data from the Redux store.

Example:

```javascript
const favorites =
    useSelector(
        state => state.favorites
    );
```

---

# 📤 useDispatch()

`useDispatch()` is used to send actions to Redux.

Example:

```javascript
dispatch(
    addFavorite(product)
);
```

Remove Favorite:

```javascript
dispatch(
    removeFavorite(product.id)
);
```

---

# ❤️ Favorites Page

The Favorites page retrieves the Favorites from Redux:

```javascript
const favorites =
    useSelector(
        state => state.favorites
    );
```

If no Favorites exist, the page displays a message.

If Favorites exist, the application uses `map()` to render each product.

```javascript
favorites.map(
    product => (
        // product card
    )
)
```

Each product is displayed with:

- Product image
- Product name
- Brand
- Price
- Rating
- Category
- Type
- Remove Favorite button

---

# 🔢 Favorite Count

The Navbar displays the current Favorite count.

```jsx
Favorites ({favorites.length})
```

Example:

```text
Favorites (0)
Favorites (1)
Favorites (2)
```

The count updates automatically when Redux state changes.

---

# 🔄 Favorites Data Flow

```text
Product Card
     ↓
dispatch(addFavorite(product))
     ↓
favoriteSlice
     ↓
Check Duplicate
     ↓
Redux Store
     ↓
Navbar Favorite Count
     ↓
Favorites Page
     ↓
LocalStorage
```

---

# 🌐 Axios API Integration

Axios is used for communication between the React frontend and JSON Server backend.

The Axios configuration is stored in:

```text
src/services/api.js
```

Example:

```javascript
import axios from "axios";

const api = axios.create({
    baseURL:
        "http://localhost:3000"
});

export default api;
```

This allows the application to use:

```javascript
api.get()
api.post()
api.put()
api.delete()
```

---

# 📥 GET Request

Used to retrieve data.

```javascript
api.get("/products");
```

---

# 📤 POST Request

Used to create data.

```javascript
api.post(
    "/products",
    productData
);
```

User registration:

```javascript
api.post(
    "/users",
    user
);
```

---

# ✏️ PUT Request

Used to update existing data.

```javascript
api.put(
    `/products/${id}`,
    productData
);
```

---

# 🗑️ DELETE Request

Used to delete existing data.

```javascript
api.delete(
    `/products/${id}`
);
```

---

# 🗄️ JSON Server Backend

JSON Server provides a lightweight REST API for the project.

The main database file is:

```text
db.json
```

The main resources are:

```text
products
users
```

The architecture is:

```text
React
  ↓
Axios
  ↓
JSON Server
  ↓
db.json
```

---

# 📦 Product CRUD Operations

CRUD stands for:

```text
C = Create
R = Read
U = Update
D = Delete
```

---

## Create Product

Page:

```text
/add-product
```

API:

```javascript
api.post(
    "/products",
    productData
);
```

---

## Read Products

```javascript
api.get(
    "/products"
);
```

---

## Read Single Product

```javascript
api.get(
    `/products/${id}`
);
```

---

## Update Product

Page:

```text
/edit-product/:id
```

API:

```javascript
api.put(
    `/products/${id}`,
    productData
);
```

---

## Delete Product

```javascript
api.delete(
    `/products/${id}`
);
```

After successful deletion, the local React state is updated so the deleted product disappears from the UI.

---

# 🔎 Product Search

Search state:

```javascript
const [search, setSearch] =
    useState("");
```

Controlled input:

```jsx
<input
    type="text"
    placeholder="Search Product"
    value={search}
    onChange={(e) =>
        setSearch(
            e.target.value
        )
    }
/>
```

Search condition:

```javascript
product.name
    .toLowerCase()
    .includes(
        search.toLowerCase()
    )
```

The search is combined with the other filters.

---

# 🏷️ Category Filtering

Category state:

```javascript
const [category, setCategory] =
    useState("All");
```

Example:

```jsx
<select
    value={category}
    onChange={(e) =>
        setCategory(
            e.target.value
        )
    }
>
    <option value="All">
        All Categories
    </option>

    <option value="Men">
        Men
    </option>

    <option value="Women">
        Women
    </option>

    <option value="Unisex">
        Unisex
    </option>
</select>
```

Filtering logic:

```javascript
const categoryMatch =
    category === "All" ||
    product.category === category;
```

---

# 💰 Price Filtering

Price state:

```javascript
const [price, setPrice] =
    useState("All");
```

Available options:

```text
All Prices
Below ₹2000
₹2000 - ₹4000
Above ₹4000
```

Filtering logic:

```javascript
const priceMatch =
    price === "All" ||
    (price === "low" &&
        product.price < 2000) ||
    (price === "medium" &&
        product.price >= 2000 &&
        product.price <= 4000) ||
    (price === "high" &&
        product.price > 4000);
```

---

# ⭐ Rating Sorting

Rating sorting is applied after filtering.

High to Low:

```javascript
if (sort === "high") {
    filteredProducts.sort(
        (a, b) =>
            b.rating - a.rating
    );
}
```

Low to High:

```javascript
if (sort === "low") {
    filteredProducts.sort(
        (a, b) =>
            a.rating - b.rating
    );
}
```

---

# 🔎 Combined Search, Filter and Sort

The Products page combines multiple conditions.

```text
All Products
     ↓
Search
     ↓
Category Filter
     ↓
Price Filter
     ↓
Filtered Products
     ↓
Rating Sort
     ↓
Product Cards
```

Example:

```javascript
let filteredProducts =
    products.filter(
        (product) => {

            const searchMatch =
                product.name
                    .toLowerCase()
                    .includes(
                        search.toLowerCase()
                    );

            const categoryMatch =
                category === "All" ||
                product.category ===
                    category;

            const priceMatch =
                price === "All" ||
                (
                    price === "low" &&
                    product.price < 2000
                ) ||
                (
                    price === "medium" &&
                    product.price >= 2000 &&
                    product.price <= 4000
                ) ||
                (
                    price === "high" &&
                    product.price > 4000
                );

            return (
                searchMatch &&
                categoryMatch &&
                priceMatch
            );
        }
    );
```

---

# 🚫 No Products Found

If no product matches the search or filters, the application displays:

```text
No products found.
```

Example:

```jsx
{filteredProducts.length === 0 && (
    <p className="no-products">
        No products found.
    </p>
)}
```

---

# 👕 Dynamic Product Details

The Product Details route is:

```text
/products/:id
```

Example:

```text
/products/10
```

The ID is obtained using:

```javascript
const { id } =
    useParams();
```

The product is retrieved using:

```javascript
api.get(
    `/products/${id}`
);
```

The product information is then stored in React state.

---

# 📏 Product Sizes

Product sizes can be stored as an array.

Example:

```javascript
[
    "S",
    "M",
    "L",
    "XL"
]
```

They can be displayed dynamically:

```jsx
<div className="size-buttons">

    {product.size?.map(
        (size) => (
            <button
                key={size}
            >
                {size}
            </button>
        )
    )}

</div>
```

---

# 📝 Forms and Controlled Components

The application uses controlled React forms.

A controlled input receives its value from React state.

Example:

```jsx
<input
    type="text"
    name="name"
    value={formData.name}
    onChange={handleChange}
/>
```

The two important properties are:

```text
value
onChange
```

The state controls the input value.

---

# 🔄 Dynamic Form Handling

The application uses a common `handleChange()` function.

```javascript
function handleChange(e) {
    setFormData({
        ...formData,
        [e.target.name]:
            e.target.value
    });
}
```

Here:

```text
e.target.name
```

identifies the input field.

```text
e.target.value
```

contains the value entered by the user.

---

# ➕ Add Product Form

The Add Product page collects:

```text
Product Name
Brand
Category
Product Type
Price
Image URL
Description
Color
Material
Sizes
Rating
Stock
```

Example state:

```javascript
const [formData, setFormData] =
    useState({
        name: "",
        brand: "",
        category: "",
        type: "",
        price: "",
        image: "",
        description: "",
        color: "",
        material: "",
        size: "",
        rating: "",
        stock: ""
    });
```

---

# 🔢 Data Type Conversion

HTML form values are generally received as strings.

Before sending product data to the API, numeric fields are converted.

```javascript
const productData = {
    ...formData,
    price: Number(
        formData.price
    ),
    rating: Number(
        formData.rating
    ),
    stock: Number(
        formData.stock
    )
};
```

This ensures that:

```text
price
rating
stock
```

are stored as numbers.

---

# 📏 Size Conversion

Users can enter sizes like:

```text
S, M, L, XL
```

The application converts this string into an array:

```javascript
formData.size
    .split(",")
    .map(
        (size) =>
            size.trim()
    );
```

Result:

```javascript
[
    "S",
    "M",
    "L",
    "XL"
]
```

---

# 💾 LocalStorage

LocalStorage is used for client-side persistence.

The application uses LocalStorage for:

```text
User Session
Favorites
```

---

# 👤 User LocalStorage

Store user:

```javascript
localStorage.setItem(
    "user",
    JSON.stringify(user)
);
```

Read user:

```javascript
JSON.parse(
    localStorage.getItem("user")
);
```

Remove user:

```javascript
localStorage.removeItem(
    "user"
);
```

---

# ❤️ Favorites LocalStorage

Store Favorites:

```javascript
localStorage.setItem(
    "favorites",
    JSON.stringify(
        favorites
    )
);
```

Read Favorites:

```javascript
JSON.parse(
    localStorage.getItem(
        "favorites"
    )
);
```

---

# 🔄 JSON.stringify()

`JSON.stringify()` converts JavaScript data into a string.

Example:

```javascript
const user = {
    name: "Badri",
    email: "example@gmail.com"
};

localStorage.setItem(
    "user",
    JSON.stringify(user)
);
```

---

# 🔄 JSON.parse()

`JSON.parse()` converts the stored string back into a JavaScript object.

```javascript
const user =
    JSON.parse(
        localStorage.getItem("user")
    );
```

---

# 🧩 Reusable Components

The project uses reusable components to avoid repeating UI code.

Main reusable components:

```text
Navbar
ProductCard
ProtectedRoute
```

---

# 🧭 Navbar Component

The Navbar provides navigation links.

It uses:

```javascript
Link
useSelector
localStorage
```

The Navbar displays the Favorite count:

```jsx
Favorites ({favorites.length})
```

It also changes the displayed authentication links depending on whether a user is logged in.

---

# 🛍️ ProductCard Component

The ProductCard component is responsible for displaying product information in a reusable card format.

Instead of writing the same product UI repeatedly, the Products page passes the product as a prop.

Example:

```jsx
<ProductCard
    key={product.id}
    product={product}
    onDelete={deleteProduct}
/>
```

The component can then access:

```javascript
product.name
product.image
product.price
product.rating
```

---

# 🔑 React Props

Props are used to pass data from a parent component to a child component.

Example:

```jsx
<ProductCard
    product={product}
    onDelete={deleteProduct}
/>
```

Here:

```text
product
onDelete
```

are props.

Inside ProductCard:

```javascript
function ProductCard({
    product,
    onDelete
}) {
```

The component receives those values from the parent.

---

# 🔑 React `key`

When rendering lists, React uses `key` to identify individual items.

Example:

```jsx
{products.map(
    (product) => (
        <ProductCard
            key={product.id}
            product={product}
        />
    )
)}
```

The product ID provides a unique key.

---

# 🧠 JavaScript Concepts Used

The project demonstrates several JavaScript concepts.

---

## `map()`

Used to create UI elements from arrays.

Example:

```javascript
products.map(
    product => (
        // Product Card
    )
);
```

---

## `filter()`

Used to select items that satisfy a condition.

Example:

```javascript
products.filter(
    product =>
        product.price < 2000
);
```

---

## `find()`

Used to find an item matching a condition.

Example:

```javascript
state.find(
    product =>
        product.id ===
        action.payload.id
);
```

---

## `sort()`

Used to order an array.

Example:

```javascript
products.sort(
    (a, b) =>
        b.rating - a.rating
);
```

---

## `includes()`

Used to check whether a string contains another string.

Example:

```javascript
product.name
    .toLowerCase()
    .includes(
        search.toLowerCase()
    );
```

---

## `split()`

Used to split a string into an array.

Example:

```javascript
"S, M, L, XL"
    .split(",");
```

Result:

```javascript
[
    "S",
    " M",
    " L",
    " XL"
]
```

---

## `trim()`

Used to remove unnecessary spaces.

Example:

```javascript
size.trim()
```

---

## Spread Operator

The spread operator:

```javascript
...
```

is used to copy existing object properties.

Example:

```javascript
setFormData({
    ...formData,
    [e.target.name]:
        e.target.value
});
```

---

## Ternary Operator

The ternary operator is used for conditional rendering.

Example:

```javascript
condition
    ? componentA
    : componentB
```

Favorites page example:

```jsx
favorites.length === 0
    ? <EmptyFavorites />
    : <FavoritesList />
```

---

## Logical AND

The `&&` operator is used for conditional rendering.

Example:

```jsx
{user && (
    <Link to="/logout">
        Logout
    </Link>
)}
```

This displays Logout only when `user` exists.

---

# ⏳ Async/Await

The project uses `async` and `await` for API requests.

Example:

```javascript
async function deleteProduct(id) {

    try {

        await api.delete(
            `/products/${id}`
        );

    } catch (error) {

        console.log(error);

    }
}
```

`await` waits for the API operation to complete.

---

# ⚠️ Error Handling

API requests are handled using `try...catch` or `.catch()`.

Example:

```javascript
try {

    await api.delete(
        `/products/${id}`
    );

} catch (error) {

    console.log(error);

}
```

This prevents application errors from being silently ignored.

---

# 🎨 UI and CSS Design

The application uses custom CSS instead of Tailwind CSS.

The interface includes:

- Modern navigation
- Product cards
- Product grids
- Form layouts
- Buttons
- Search controls
- Dropdown filters
- Product detail layouts
- Authentication cards
- Favorites cards
- Responsive layouts

---

# 🏠 Home Page

The Home page provides the main introduction to the Fashion Store.

The hero section uses a fashion-related background image with an overlay.

Example concept:

```css
.hero-section {
    background:
        linear-gradient(
            rgba(255, 242, 237, 0.78),
            rgba(248, 225, 232, 0.82)
        ),
        url("fashion-image-url");

    background-size: cover;
    background-position: center;
}
```

The Home page focuses on introducing the application and directing users toward the product catalog.

---

# 🛍️ Products Page UI

The Products page contains:

- Page heading
- Add Product button
- Search input
- Category dropdown
- Price dropdown
- Rating sorting dropdown
- Product cards
- No products message

Conceptually:

```text
Fashion Products

[ Search Product ]

[ Category ]
[ Price ]
[ Sort Rating ]

--------------------------------

Product Card
Product Card
Product Card
Product Card
```

---

# 👕 Product Details UI

The Product Details page uses a two-section layout:

```text
+----------------------+----------------------+
|                      | Product Name         |
|                      | Brand                |
|     Product Image    | Price                |
|                      | Rating               |
|                      | Description          |
|                      | Sizes                |
|                      | Stock                |
+----------------------+----------------------+
```

---

# 📝 Form UI

Add Product and Edit Product pages use structured form layouts.

The form includes fields for:

```text
Name
Brand
Category
Type
Price
Image
Description
Color
Material
Size
Rating
Stock
```

---

# ❤️ Favorites UI

The Favorites page displays saved products in a responsive grid.

Each Favorite card contains:

- Product image
- Product name
- Brand
- Price
- Rating
- Category
- Type
- Remove Favorite button

---

# 🔐 Authentication UI

Authentication pages include:

```text
Register
Login
Logout
```

The Register and Login pages use centered authentication cards with styled inputs and buttons.

---

# 📱 Responsive Design

CSS media queries are used to adapt the layout to different screen sizes.

The application uses:

- CSS Grid
- Flexbox
- Flexible widths
- Responsive containers
- Media queries
- Mobile-friendly forms

---

# 📐 CSS Flexbox

Flexbox is useful for arranging elements horizontally or vertically.

Example:

```css
display: flex;
```

It is used for layouts such as:

```text
Navbar
Buttons
Product Details
Form sections
Navigation
```

---

# 📐 CSS Grid

CSS Grid is useful for product card layouts.

Example:

```css
display: grid;
grid-template-columns:
    repeat(
        auto-fit,
        minmax(250px, 1fr)
    );
```

This allows product cards to adapt to available screen width.

---

# 🔄 Complete Application Workflow

The overall application workflow is:

```text
                    Home
                      |
                      ↓
                  Products
                      |
        +-------------+-------------+
        |             |             |
        ↓             ↓             ↓
      Search       Filter        Sort
        |             |             |
        +-------------+-------------+
                      |
                      ↓
              Product Details
                      |
          +-----------+-----------+
          |                       |
          ↓                       ↓
      Favorite               Edit/Delete
          |                       |
          ↓                       ↓
      Favorites                API
```

---

# 🛍️ Product Workflow

```text
User Opens Products Page
          ↓
GET /products
          ↓
JSON Server
          ↓
Products Stored in State
          ↓
Products Displayed
          ↓
Search / Filter / Sort
          ↓
User Selects Product
          ↓
Product Details
```

---

# ➕ Add Product Workflow

```text
Add Product Page
       ↓
Enter Product Details
       ↓
Form State
       ↓
handleChange()
       ↓
handleSubmit()
       ↓
POST /products
       ↓
JSON Server
       ↓
Product Added
       ↓
Navigate to Products
```

---

# ✏️ Edit Product Workflow

```text
Products
    ↓
Select Edit
    ↓
/edit-product/:id
    ↓
Get Product ID
    ↓
GET /products/:id
    ↓
Display Existing Data
    ↓
Modify Data
    ↓
PUT /products/:id
    ↓
Navigate to Products
```

---

# 🗑️ Delete Product Workflow

```text
Product Card
     ↓
Delete Button
     ↓
deleteProduct(id)
     ↓
DELETE /products/:id
     ↓
JSON Server
     ↓
Update React State
     ↓
Product Removed From UI
```

---

# 🔐 Authentication Workflow

```text
Register
   ↓
POST /users
   ↓
User Stored in db.json
   ↓
Login
   ↓
GET /users
   ↓
Check Credentials
   ↓
Store User in LocalStorage
   ↓
Logged In
   ↓
Logout
   ↓
Remove User
```

---

# ❤️ Favorites Workflow

```text
Product Card
      ↓
Add Favorite
      ↓
dispatch(addFavorite(product))
      ↓
favoriteSlice
      ↓
Check Duplicate
      ↓
Add Product
      ↓
Redux Store
      ↓
LocalStorage
      ↓
Favorites Page
```

---

# 🔄 Complete Data Flow

```text
                         React UI
                            |
                            ↓
                      React State
                            |
                            ↓
                         Axios
                            |
                            ↓
                     JSON Server
                            |
                            ↓
                         db.json

Redux State
    ↓
Favorites
    ↓
LocalStorage
```

---

# 🌐 API Endpoints

## Products

### Get All Products

```http
GET /products
```

### Get Single Product

```http
GET /products/:id
```

### Add Product

```http
POST /products
```

### Update Product

```http
PUT /products/:id
```

### Delete Product

```http
DELETE /products/:id
```

---

## Users

### Get Users

```http
GET /users
```

### Register User

```http
POST /users
```

---

# 📊 API Summary

| Operation | Method | Endpoint |
|---|---|---|
| Get all products | GET | `/products` |
| Get single product | GET | `/products/:id` |
| Add product | POST | `/products` |
| Update product | PUT | `/products/:id` |
| Delete product | DELETE | `/products/:id` |
| Get users | GET | `/users` |
| Register user | POST | `/users` |

---

# 📦 Installation and Setup

## 1. Clone the Repository

```bash
git clone <your-github-repository-url>
```

Navigate into the project:

```bash
cd fashion_frontend
```

---

## 2. Install Dependencies

Run:

```bash
npm install
```

---

## 3. Install JSON Server

If JSON Server is not already installed:

```bash
npm install json-server
```

---

# ▶️ Running the Project

The project requires two running services:

```text
React Frontend
+
JSON Server Backend
```

---

## Start JSON Server

Run:

```bash
npx json-server --watch db.json --port 3000
```

The API will be available at:

```text
http://localhost:3000
```

Products:

```text
http://localhost:3000/products
```

Users:

```text
http://localhost:3000/users
```

---

## Start React Application

Open another terminal and run:

```bash
npm run dev
```

Vite will provide a local URL similar to:

```text
http://localhost:5173
```

Open the URL in your browser.

---

# ⚙️ Package Scripts

Example `package.json` scripts:

```json
{
    "scripts": {
        "dev": "vite",
        "build": "vite build",
        "preview": "vite preview",
        "start": "json-server --watch db.json --host 0.0.0.0 --port $PORT"
    }
}
```

The `start` script is useful when deploying the JSON Server backend to a platform such as Render.

---

# 📦 Main Dependencies

The project uses the following packages:

```text
react
react-dom
react-router-dom
axios
@reduxjs/toolkit
react-redux
json-server
```

---

# 🧪 Testing the Application

The application can be tested manually using the following checklist.

## Home Page

- [ ] Home page loads
- [ ] Navigation works
- [ ] Products link works

## Products

- [ ] Products load from API
- [ ] Search works
- [ ] Category filter works
- [ ] Price filter works
- [ ] Rating sort works
- [ ] Product details open
- [ ] Add Product works
- [ ] Edit Product works
- [ ] Delete Product works

## Authentication

- [ ] Registration works
- [ ] User is stored in JSON Server
- [ ] Login works
- [ ] Invalid login is handled
- [ ] User session is stored
- [ ] Logout works
- [ ] Navbar changes according to login state

## Favorites

- [ ] Product can be added to Favorites
- [ ] Duplicate Favorites are prevented
- [ ] Favorite count updates
- [ ] Favorites page displays saved products
- [ ] Product can be removed
- [ ] Favorites remain after page refresh

## Responsive Design

- [ ] Desktop layout works
- [ ] Tablet layout works
- [ ] Mobile layout works
- [ ] Product cards remain aligned
- [ ] Forms remain usable

---

# 🧩 Challenges and Solutions

## Challenge 1: API Integration

### Problem

The React frontend needed to communicate with a backend API.

### Solution

Axios was configured with a reusable API instance.

```javascript
const api = axios.create({
    baseURL:
        "http://localhost:3000"
});
```

This made API requests simpler throughout the application.

---

## Challenge 2: Managing Multiple Form Fields

### Problem

The Add Product and Register forms contain multiple fields.

### Solution

A single `handleChange()` function updates the appropriate field using:

```javascript
[e.target.name]
```

and:

```javascript
e.target.value
```

---

## Challenge 3: Preventing Duplicate Favorites

### Problem

The same product should not be added to Favorites multiple times.

### Solution

The application checks for an existing product using `find()` before adding it.

```javascript
const exists = state.find(
    product =>
        product.id ===
        action.payload.id
);
```

---

## Challenge 4: Persisting Favorites

### Problem

Redux state can be lost when the browser is refreshed.

### Solution

Favorites are stored in LocalStorage.

```javascript
localStorage.setItem(
    "favorites",
    JSON.stringify(
        favorites
    )
);
```

The stored Favorites are loaded when the Redux slice initializes.

---

## Challenge 5: Dynamic Product Pages

### Problem

Each product needs its own URL.

### Solution

React Router dynamic routing is used:

```text
/products/:id
```

The ID is retrieved using:

```javascript
useParams();
```

---

## Challenge 6: Search and Multiple Filters

### Problem

Users need to search and filter products simultaneously.

### Solution

The application combines multiple conditions inside `filter()`.

```text
Search
+
Category
+
Price
```

The resulting products can then be sorted by rating.

---

## Challenge 7: Production API Configuration

### Problem

The development API uses:

```text
http://localhost:3000
```

This address only refers to the local machine.

### Solution

For production deployment, the JSON Server backend needs to be deployed separately and the Axios base URL should be changed to the public backend URL.

---

# 🔒 Security Considerations

This project is designed primarily for learning and demonstration purposes.

The current authentication implementation uses JSON Server and LocalStorage.

Important considerations for a production application:

- Passwords should never be stored as plain text.
- Passwords should be hashed on the server.
- Authentication should use secure sessions or tokens.
- Sensitive information should not be stored directly in LocalStorage.
- API endpoints should have proper authorization.
- HTTPS should be used.
- Server-side validation should be implemented.
- Input validation should be performed.
- Authentication and authorization should be handled by a real backend.

The current JSON Server authentication implementation should therefore be considered a **learning/demo implementation**, not production-grade authentication.

---

# 🚀 Deployment

## Frontend Deployment

The frontend can be deployed using Vercel.

The current deployed frontend is:

```text
https://fashionfrontend-blond.vercel.app/
```

---

## Backend Deployment

JSON Server can be deployed separately using a hosting service such as Render.

The backend should listen on the platform-provided port.

Example:

```json
{
    "scripts": {
        "start": "json-server --watch db.json --host 0.0.0.0 --port $PORT"
    }
}
```

---

## Production API Configuration

During development:

```javascript
const api = axios.create({
    baseURL:
        "http://localhost:3000"
});
```

After deploying the backend:

```javascript
const api = axios.create({
    baseURL:
        "YOUR_DEPLOYED_BACKEND_URL"
});
```

This allows the deployed frontend to communicate with the deployed backend.

---

# 🌿 Git and GitHub

To initialize Git:

```bash
git init
```

Add project files:

```bash
git add .
```

Commit changes:

```bash
git commit -m "Initial Fashion Store project"
```

Add the GitHub repository:

```bash
git remote add origin <your-github-repository-url>
```

Push the project:

```bash
git branch -M main
git push -u origin main
```

---

# 🔄 Updating GitHub

After making changes:

```bash
git status
```

Add changes:

```bash
git add .
```

Commit:

```bash
git commit -m "Update Fashion Store project"
```

Push:

```bash
git push
```

---

# 📌 Recommended Git Workflow

```text
Make Changes
     ↓
git status
     ↓
git add .
     ↓
git commit -m "message"
     ↓
git push
```

---

# 📚 Learning Outcomes

This project provided practical experience with:

## React

- Components
- JSX
- Props
- State
- Hooks
- Conditional rendering
- List rendering

## React Router

- Routes
- Route
- Link
- Dynamic routes
- `useNavigate()`
- `useParams()`

## Redux Toolkit

- Store
- Slice
- Reducers
- Actions
- `useSelector()`
- `useDispatch()`
- Global state management

## API Integration

- Axios
- GET
- POST
- PUT
- DELETE
- REST API
- JSON Server

## JavaScript

- `map()`
- `filter()`
- `find()`
- `sort()`
- `includes()`
- `split()`
- `trim()`
- Spread operator
- Ternary operator
- Logical operators
- Async/Await
- Promises
- Try/Catch

## Browser Storage

- LocalStorage
- `setItem()`
- `getItem()`
- `removeItem()`
- `JSON.stringify()`
- `JSON.parse()`

## CSS

- Flexbox
- CSS Grid
- Responsive design
- Media queries
- Forms
- Cards
- Navigation
- Layout design

---

# 💡 Project Highlights

The project demonstrates the following practical development skills:

- Developed a React.js e-commerce application.
- Implemented reusable React components.
- Implemented product CRUD operations.
- Integrated Axios with a REST API.
- Used JSON Server as a lightweight backend.
- Implemented dynamic routing using React Router.
- Implemented product search.
- Implemented category filtering.
- Implemented price filtering.
- Implemented rating-based sorting.
- Implemented dynamic product details.
- Implemented user registration.
- Implemented login and logout.
- Implemented LocalStorage session management.
- Implemented authentication checking.
- Implemented ProtectedRoute functionality.
- Implemented Redux Toolkit for Favorites.
- Implemented duplicate Favorite prevention.
- Implemented persistent Favorites.
- Designed responsive layouts using CSS.
- Used JavaScript array methods extensively.
- Structured the application using separate pages, components, routes, services, and Redux features.

---

# 🧠 Key Concepts Demonstrated

```text
React
│
├── Components
├── Props
├── State
├── Hooks
├── Forms
└── Conditional Rendering

React Router
│
├── Routes
├── Route
├── Link
├── useNavigate
└── useParams

Redux Toolkit
│
├── Store
├── Slice
├── Reducers
├── Actions
├── useSelector
└── useDispatch

Axios
│
├── GET
├── POST
├── PUT
└── DELETE

JSON Server
│
├── Products
└── Users

LocalStorage
│
├── User Session
└── Favorites
```

---

# 🔄 Complete User Journey

```text
                 Open Fashion Store
                         ↓
                       Home
                         ↓
                     Products
                         ↓
          +--------------+--------------+
          |              |              |
          ↓              ↓              ↓
        Search        Category         Price
          |           Filter           Filter
          +--------------+--------------+
                         ↓
                   Rating Sort
                         ↓
                  Product Details
                         ↓
                    Add Favorite
                         ↓
                     Favorites
```

Authentication journey:

```text
Register
   ↓
Login
   ↓
User Session
   ↓
Browse Products
   ↓
Add Favorites
   ↓
View Favorites
   ↓
Logout
```

Product management journey:

```text
Add Product
     ↓
Product List
     ↓
View Product
     ↓
Edit Product
     ↓
Delete Product
```

---

# 📌 Current Feature Summary

| Feature | Status |
|---|---|
| React.js | ✅ Implemented |
| Responsive UI | ✅ Implemented |
| Product Listing | ✅ Implemented |
| Product CRUD | ✅ Implemented |
| Product Search | ✅ Implemented |
| Category Filtering | ✅ Implemented |
| Price Filtering | ✅ Implemented |
| Rating Sorting | ✅ Implemented |
| Product Details | ✅ Implemented |
| Dynamic Routing | ✅ Implemented |
| Registration | ✅ Implemented |
| Login | ✅ Implemented |
| Logout | ✅ Implemented |
| LocalStorage Authentication | ✅ Implemented |
| ProtectedRoute Component | ✅ Implemented |
| Redux Toolkit | ✅ Implemented |
| Favorites | ✅ Implemented |
| Favorite Count | ✅ Implemented |
| Duplicate Favorite Prevention | ✅ Implemented |
| Favorite Persistence | ✅ Implemented |
| Axios | ✅ Implemented |
| JSON Server | ✅ Implemented |
| Shopping Cart | ❌ Not Implemented |
| Festival Banners | ❌ Not Implemented |
| Festival Collections | ❌ Not Implemented |

---

# 🔮 Future Enhancements

The following features can be added in future versions:

## 🛒 Shopping Cart

A complete cart system could include:

- Add to Cart
- Remove from Cart
- Increase quantity
- Decrease quantity
- Cart total
- Checkout page

---

## 💳 Payment Integration

Possible payment integration:

- Razorpay
- Stripe
- Other payment gateways

---

## 🎉 Festival Offers

Future versions can include:

- Festival banners
- Festival collections
- Seasonal discounts
- Offer sections
- Promotional campaigns

---

## 👤 User Profile

Future versions can include:

- Profile page
- Edit profile
- Order history
- Saved addresses

---

## 📦 Order Management

Future functionality could include:

- Create orders
- Order history
- Order status
- Delivery tracking

---

## 🔐 Improved Authentication

A production version can use:

- Backend authentication
- Password hashing
- JWT
- Secure cookies
- Role-based authorization

---

## 🗄️ Real Database

Instead of JSON Server, the application can be connected to:

- MongoDB
- MySQL
- PostgreSQL
- Firebase

---

## 🔎 Advanced Product Features

Future versions could include:

- Brand filtering
- Size filtering
- Color filtering
- Advanced price range slider
- Multiple sorting options
- Pagination
- Product reviews
- Product ratings

---

# 🧪 Example Testing Scenarios

## Search Test

```text
Input:
Shirt

Expected:
Products containing "Shirt" in their name are displayed.
```

---

## Category Test

```text
Select:
Women

Expected:
Only Women category products are displayed.
```

---

## Price Test

```text
Select:
Below ₹2000

Expected:
Only products with price below ₹2000 are displayed.
```

---

## Rating Test

```text
Select:
High To Low

Expected:
Products are ordered from highest rating to lowest rating.
```

---

## Favorite Test

```text
Click Favorite

Expected:
Product is added to Favorites.
Favorite count increases.
```

---

## Duplicate Favorite Test

```text
Click Favorite twice

Expected:
The same product should not be added twice.
```

---

## Remove Favorite Test

```text
Click Remove Favorite

Expected:
Product is removed from Favorites.
Favorite count decreases.
```

---

## Registration Test

```text
Enter:
Name
Email
Password

Submit

Expected:
User is created in JSON Server.
User is redirected to Login.
```

---

## Login Test

```text
Enter valid:
Email
Password

Expected:
User session is created.
User is redirected to the application.
```

---

## Logout Test

```text
Click Logout

Expected:
User session is removed.
User is redirected to Login.
```

---

# 📌 Important React Concepts Used in the Project

## State

State stores information that can change during application execution.

Example:

```javascript
const [products, setProducts] =
    useState([]);
```

---

## Props

Props pass data from a parent component to a child component.

Example:

```jsx
<ProductCard
    product={product}
/>
```

---

## Component

A component is a reusable piece of UI.

Example:

```jsx
function ProductCard() {
    return (
        <div>
            Product
        </div>
    );
}
```

---

## Event Handling

Example:

```jsx
onClick={() =>
    dispatch(
        removeFavorite(
            product.id
        )
    )
}
```

---

## Conditional Rendering

Example:

```jsx
{favorites.length === 0
    ? <p>No Favorites</p>
    : <FavoritesList />
}
```

---

## List Rendering

Example:

```jsx
products.map(
    product => (
        <ProductCard
            key={product.id}
            product={product}
        />
    )
)
```

---

# 📌 Important Redux Concepts

## Store

The store contains the global Redux state.

## Slice

A slice contains state and reducers for a specific feature.

## Reducer

A reducer defines how state changes.

## Action

An action describes what happened.

## Dispatch

`dispatch()` sends an action to Redux.

## Selector

`useSelector()` reads data from Redux state.

---

# 📌 Important API Concepts

The project follows REST-style operations:

```text
GET     → Read
POST    → Create
PUT     → Update
DELETE  → Delete
```

Example:

```text
GET /products
POST /products
PUT /products/:id
DELETE /products/:id
```

---

# 📌 Why JSON Server?

JSON Server was used because it provides a simple REST API without requiring a complete backend implementation.

Advantages:

- Easy setup
- REST endpoints
- CRUD support
- JSON-based data
- Suitable for frontend learning
- Easy integration with Axios

---

# 📌 Why Redux Toolkit?

Redux Toolkit is used because Favorites are shared across multiple components.

For example:

```text
ProductCard
    ↓
Favorites State
    ↓
Navbar
    ↓
Favorites Page
```

Redux provides centralized state management for this shared data.

---

# 📌 Why LocalStorage?

LocalStorage allows selected client-side data to remain available after a browser refresh.

In this project it is used for:

```text
User session
Favorites
```

---

# 📌 Why Axios?

Axios provides a convenient way to communicate with the backend API.

Instead of repeatedly writing full URLs, the application creates a reusable API instance:

```javascript
const api = axios.create({
    baseURL:
        "http://localhost:3000"
});
```

Then requests can be written as:

```javascript
api.get("/products");
```

```javascript
api.post("/products", data);
```

```javascript
api.put(`/products/${id}`, data);
```

```javascript
api.delete(`/products/${id}`);
```

---

# 📌 Development Workflow

The project development workflow can be summarized as:

```text
Plan UI
   ↓
Create React Components
   ↓
Configure React Router
   ↓
Create JSON Server API
   ↓
Configure Axios
   ↓
Implement CRUD
   ↓
Implement Authentication
   ↓
Implement Redux Favorites
   ↓
Add Search and Filters
   ↓
Style Application
   ↓
Test Features
   ↓
Push to GitHub
   ↓
Deploy Frontend
```

---

# 👨‍💻 Author

## NANDIGAM BADRINADH

**Roll Number:** CGVI0086  
**Batch:** PFS-VSP-003

GitHub:

```text
https://github.com/BadrinadhNandigam
```

---

# 📌 Project Type

```text
Frontend Web Application
```

Domain:

```text
E-Commerce / Fashion
```

Primary Framework:

```text
React.js
```

Backend for Development:

```text
JSON Server
```

State Management:

```text
Redux Toolkit
```

API Client:

```text
Axios
```

Deployment:

```text
Vercel
```

---

# 📄 License

This project is developed for **educational and portfolio purposes**.

You are free to use the project structure and concepts for learning and development.

---

# ⭐ Final Project Summary

**Fashion Store** is a React.js e-commerce application that demonstrates the practical implementation of modern frontend development concepts.

The application combines:

```text
React.js
+
React Router
+
Redux Toolkit
+
Axios
+
JSON Server
+
LocalStorage
+
JavaScript
+
HTML5
+
CSS3
```

The project provides a complete product management workflow with CRUD operations, product search, category filtering, price filtering, rating sorting, dynamic product details, authentication, Favorites management, API integration, and responsive UI design.

The project demonstrates how different frontend technologies can work together to create a structured and functional e-commerce web application.

---

# 🚀 Fashion Store

```text
React.js
   +
React Router
   +
Redux Toolkit
   +
Axios
   +
JSON Server
   +
LocalStorage
   +
Responsive CSS
   =
Fashion Store
```

**Live Demo:**  
https://fashionfrontend-blond.vercel.app/

**Developed by:**  
**NANDIGAM BADRINADH**
