


👗 Fashion Store --- React.js E-Commerce Web Application
A responsive fashion e-commerce web application built with
React.js.
This project demonstrates modern frontend development concepts including
reusable components, routing, CRUD operations, REST API integration,
authentication, Redux Toolkit state management, LocalStorage
persistence, search, filtering, sorting, and responsive CSS.

🌐 Live Demo
🔗 Live Website
https://fashionfrontend-blond.vercel.app/

📌 Project Overview
Fashion Store is a responsive e-commerce web application developed
using React.js.

The application allows users to browse fashion products, search and
filter products, view detailed product information, register and log in,
access protected pages, and manage their favorite products.

The project also includes product management functionality using CRUD
operations through Axios and JSON Server.

🎯 Project Objective
The main objective of this project is to build a simple and
user-friendly fashion shopping application while implementing important
React and JavaScript concepts.

The application focuses on:

Clean and responsive user interface

Reusable React components

Product management

REST API integration

Search and filtering

Dynamic routing

Authentication

Protected routes

Redux state management

LocalStorage persistence

✨ Features
1. 🛍️ Product Management
The application supports complete CRUD operations for products.

Create
Users can add a new product through the Add Product page.

Add Product
     ↓
Form Data
     ↓
POST /products
     ↓
JSON Server
     ↓
Product Created
Read
Users can:

View all products

View individual product details

API examples:

api.get("/products");
api.get(`/products/${id}`);
Update
Existing products can be edited through the Edit Product page.

api.put(`/products/${id}`, productData);
Delete
Products can be deleted using:

api.delete(`/products/${id}`);
2. 🔎 Product Search
Users can search products by their name.

Example:

Search: shirt
The application dynamically filters the product list according to the
entered search text.

The project uses JavaScript's filter() method and includes() for
searching.

Example:

product.name
  .toLowerCase()
  .includes(search.toLowerCase());
3. 🏷️ Category Filtering
Products can be filtered based on category.

Available categories include:

All Categories

Men

Women

Unisex

Example:

category === "All" ||
product.category === category
4. 💰 Price Filtering
Products can be filtered based on price.

Available ranges:

Below ₹2000

₹2000 -- ₹4000

Above ₹4000

This allows users to quickly find products according to their budget.

5. ⭐ Rating Sorting
Products can be sorted according to their rating.

Available options:

High To Low

Low To High

Example:

filteredProducts.sort(
  (a, b) => b.rating - a.rating
);
6. 📄 Dynamic Product Details
Every product has its own dynamic details page.

Example URLs:

/products/1
/products/2
/products/3
React Router is used to create the dynamic route:

<Route
  path="/products/:id"
  element={<ProductDetails />}
/>
The product ID is retrieved using:

const { id } = useParams();
Then the corresponding product is fetched from the API:

api.get(`/products/${id}`);
Product Details Include
Product image

Product name

Brand

Category

Product type

Price

Rating

Description

Color

Material

Available sizes

7. 👤 User Registration
New users can create an account by entering:

Name

Email

Password

The registration form uses React controlled components.

The user is sent to the JSON Server:

api.post("/users", user);
After successful registration, the user is redirected to the Login page.

8. 🔐 Login
Registered users can log in using their email and password.

The application checks the user information through the /users
endpoint.

After successful login, the user information is stored in LocalStorage.

Example:

localStorage.setItem(
  "user",
  JSON.stringify(user)
);
9. 🚪 Logout
When the user logs out, the stored user session is removed.

localStorage.removeItem("user");
The user is then redirected to the Login page.

10. 🛡️ Protected Routes
The project contains a reusable ProtectedRoute component.

Its purpose is to prevent unauthorized access to protected pages.

Basic flow:

User opens protected page
          ↓
Check LocalStorage
          ↓
     Is user present?
       ↙         ↘
     YES          NO
      ↓            ↓
  Open page     Login Page
Example:

const user =
  JSON.parse(
    localStorage.getItem("user")
  );

if (!user) {
  return <Navigate to="/login" replace />;
}
11. ❤️ Favorites
The Favorites feature is implemented using Redux Toolkit.

Users can:

Add products to Favorites

Prevent duplicate favorites

View favorite products

Remove products from Favorites

Favorites Flow
ProductCard
     ↓
dispatch(addFavorite(product))
     ↓
favoriteSlice
     ↓
Check Duplicate
     ↓
Add Product
     ↓
Redux State Updated
     ↓
Save to LocalStorage
     ↓
Favorites Page Updated
Add Favorite
The application checks whether the product already exists:

const exists = state.find(
  product =>
    product.id === action.payload.id
);
If it does not exist:

state.push(action.payload);
Remove Favorite
The product is removed using filter():

state.filter(
  product =>
    product.id !== action.payload
);
12. 💾 LocalStorage Persistence
LocalStorage is used to persist:

Logged-in user session

Favorite products

Since LocalStorage stores data as strings, the project uses:

JSON.stringify()
Converts JavaScript data into a string.

JSON.stringify(favorites);
JSON.parse()
Converts the stored string back into JavaScript data.

JSON.parse(
  localStorage.getItem("favorites")
);
This allows favorite products and the login session to remain available
after refreshing the page.

13. 🧩 Reusable Components
The project uses reusable React components to reduce duplicate code.

Navbar.jsx
Responsible for:

Navigation

Home link

Products link

Favorites link

Register/Login links

Logout link

Favorite count

ProductCard.jsx
Responsible for displaying product information in a reusable card.

Example:

<ProductCard
  product={product}
  onDelete={deleteProduct}
/>
Here:

product is a prop containing product information.

onDelete is a prop containing the delete function.

The same ProductCard component can be reused for multiple products.

14. 🧠 React Hooks Used
useState()
Used to manage changing data.

Examples:

Products

Search text

Category

Price

Sort option

Form values

Example:

const [products, setProducts] =
  useState([]);
useEffect()
Used for operations that should happen after rendering, such as fetching
products from the API.

Example:

useEffect(() => {
  api.get("/products")
    .then((response) => {
      setProducts(response.data);
    });
}, []);
useNavigate()
Used for programmatic navigation.

Example:

navigate("/products");
useParams()
Used to read dynamic route parameters.

Example:

const { id } = useParams();
useSelector()
Used to read Redux state.

Example:

const favorites =
  useSelector(
    state => state.favorites
  );
useDispatch()
Used to dispatch Redux actions.

Example:

dispatch(
  addFavorite(product)
);
15. 🧮 JavaScript Concepts Used
The project uses several important JavaScript array methods.

map()
Used to render a list of products.

products.map(
  product => ...
);
Meaning:

Product 1 → ProductCard
Product 2 → ProductCard
Product 3 → ProductCard
filter()
Used for:

Search

Category filtering

Price filtering

Removing favorites

find()
Used to check whether a favorite already exists.

state.find(
  product =>
    product.id === action.payload.id
);
sort()
Used for rating-based sorting.

products.sort(
  (a, b) => b.rating - a.rating
);
reduce()
Used where an array needs to be processed into a single calculated
value.

async / await
Used for handling API requests.

Example:

async function deleteProduct(id) {
  try {
    await api.delete(
      `/products/${id}`
    );
  } catch (error) {
    console.log(error);
  }
}
🛣️ Routing
React Router is used for navigation between pages.

Main routes include:

/
 /products
 /products/:id
 /add-product
 /edit-product/:id
 /register
 /login
 /logout
 /favorites
Dynamic Route
/products/:id
The :id represents the selected product's ID.

🔌 API Integration
Axios is configured as a reusable API service.

services/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000"
});

export default api;
This allows the application to make requests such as:

api.get("/products");
api.post("/products", productData);
api.put(`/products/${id}`, productData);
api.delete(`/products/${id}`);
🗄️ JSON Server
JSON Server is used as the backend during development.

It provides REST API endpoints such as:

/products
/users
The product and user data are stored in the JSON Server database file.

🏗️ Application Architecture
The project follows a simple layered structure:

                    USER
                     ↓
               React UI
                     ↓
             React Router
                     ↓
          ┌──────────┴──────────┐
          ↓                     ↓
       Redux                  Axios
          ↓                     ↓
     Favorites             JSON Server
                                ↓
                           Product/User
                              Data
UI Layer
Contains pages and reusable components.

Routing Layer
Handles navigation and dynamic routes.

State Layer
Redux Toolkit manages favorite products.

Service Layer
Axios handles API communication.

Data Layer
JSON Server stores application data.

📁 Project Structure
src/
│
├── app/
│   └── store.js
│
├── components/
│   ├── Navbar.jsx
│   └── ProductCard.jsx
│
├── features/
│   └── favoriteSlice.js
│
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── ProductDetails.jsx
│   ├── AddProduct.jsx
│   ├── EditProduct.jsx
│   ├── Register.jsx
│   ├── Login.jsx
│   ├── Logout.jsx
│   └── Favorites.jsx
│
├── routes/
│   ├── AppRoutes.jsx
│   └── ProtectedRoute.jsx
│
├── services/
│   └── api.js
│
├── App.jsx
├── main.jsx
└── index.css
🛠️ Technology Stack
Technology Purpose

React.js Frontend UI development
JavaScript Application logic
React Router Navigation and routing
Redux Toolkit Favorite state management
React Redux Redux integration with React
Axios REST API communication
JSON Server Development backend
HTML5 Page structure
CSS3 Styling
CSS Grid Product layout
Flexbox Alignment and layout
Media Queries Responsive design
LocalStorage Session and favorite persistence
Vercel Frontend deployment

📱 Responsive Design
The application is designed to work across desktop and mobile devices.

The project uses:

CSS Grid

Flexbox

Media Queries

Responsive images

Flexible layouts

Custom CSS

Example:

@media (max-width: 600px) {
  /* Mobile responsive styles */
}
The responsive design adjusts:

Product grid

Form layout

Product details

Navigation

Spacing

Font sizes

Images

🔄 Complete Application Flow
                         HOME
                           │
                           ↓
                       PRODUCTS
                           │
              ┌────────────┼────────────┐
              ↓            ↓            ↓
           SEARCH       FILTER        SORT
              │            │            │
              └────────────┼────────────┘
                           ↓
                   PRODUCT DETAILS
                           │
                 ┌─────────┴─────────┐
                 ↓                   ↓
             FAVORITE              LOGIN
                 ↓                   ↓
            FAVORITES        PROTECTED ROUTES
🔐 Authentication Flow
                REGISTER
                    ↓
              POST /users
                    ↓
              User Created
                    ↓
                  LOGIN
                    ↓
          Check Email + Password
                    ↓
              Valid User?
              ↙          ↘
            YES           NO
             ↓             ↓
      Save User in      Login Error
      LocalStorage
             ↓
       Protected Pages
❤️ Favorites Architecture
                  ProductCard
                       │
                       ↓
             dispatch(addFavorite())
                       │
                       ↓
               favoriteSlice
                       │
                 ┌─────┴─────┐
                 ↓           ↓
             Check ID     Add Product
                 │           │
                 └─────┬─────┘
                       ↓
                 Redux State
                       ↓
                LocalStorage
                       ↓
                 Favorites.jsx
🧪 Error Handling
API operations are handled using try/catch where required.

Example:

try {
  await api.delete(
    `/products/${id}`
  );
} catch (error) {
  console.log(error);
}
This helps prevent the application from silently failing when an API
request encounters an error.

🚀 Local Setup
Prerequisites
Install the following:

Node.js

npm

1. Clone the Repository
git clone <YOUR_GITHUB_REPOSITORY_URL>
2. Navigate to the Project
cd <PROJECT_FOLDER>
3. Install Dependencies
npm install
4. Start JSON Server
Run the JSON Server command configured in your project.

For example:

npm start
5. Start the React Application
For a Vite React project:

npm run dev
The terminal will display the local development URL.

🌐 Deployment
The frontend is deployed using Vercel.

Live Application
https://fashionfrontend-blond.vercel.app/

Important
During local development, the Axios API configuration uses:

http://localhost:3000
A deployed frontend cannot directly access a backend running on the
developer's localhost.

For a complete production deployment, the JSON Server backend should be
deployed separately and the Axios baseURL should be changed to the
deployed backend URL.

📊 Project Workflow
User
 ↓
React Component
 ↓
User Interaction
 ↓
State / Redux / API
 ↓
Axios Request
 ↓
JSON Server
 ↓
Response
 ↓
React State Update
 ↓
UI Re-render
🧩 Implementation Challenges & Solutions
Challenge 1 --- Handling Multiple Form Fields
Problem
The application contains multiple form fields.

Solution
A single handleChange() function updates the required field using:

[e.target.name]: e.target.value
Challenge 2 --- Dynamic Product Pages
Problem
Each product needs its own details page.

Solution
Used React Router dynamic routing:

/products/:id
and useParams().

Challenge 3 --- Duplicate Favorites
Problem
The same product should not be added multiple times.

Solution
Used find() before adding the product.

Challenge 4 --- Data Persistence
Problem
Favorites and login information should remain after refresh.

Solution
Used LocalStorage with:

JSON.stringify()
and:

JSON.parse()
Challenge 5 --- Protected Access
Problem
Some pages should only be accessible to logged-in users.

Solution
Created a reusable ProtectedRoute component.

Challenge 6 --- Multiple Product Filters
Problem
Search, category and price filters need to work together.

Solution
Combined the conditions inside filter().

📚 Learning Outcomes
Through this project, I gained practical experience with:

React.js

JSX

React Components

Props

React Hooks

React Router

Dynamic Routing

Protected Routes

Redux Toolkit

Redux Store

Actions and Reducers

useSelector()

useDispatch()

Axios

REST APIs

JSON Server

CRUD Operations

Form Handling

Authentication Flow

LocalStorage

JavaScript Array Methods

Responsive CSS

CSS Grid

Flexbox

Media Queries

Reusable Components

🔮 Future Enhancements
The following features can be added in future versions:

Secure backend authentication

Password hashing

Real database integration

Cloud backend deployment

Product image upload

Shopping cart functionality

Checkout functionality

Payment gateway integration

Order management

User profile

Admin dashboard

Inventory management

Product reviews and ratings

⚠️ Current Project Scope
The current project focuses on:

Product management

Product browsing

Search

Filtering

Sorting

Product details

Authentication

Protected routes

Favorites

LocalStorage

Responsive UI

Festival banners/collections are not part of the current project.

Shopping cart functionality is not currently implemented.

These can be considered future enhancements.

👨‍💻 Author
Nandigam Badrinadh
Fashion Store -- React.js E-Commerce Web Application

Live Demo
https://fashionfrontend-blond.vercel.app/

⭐ Project Highlights
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
📄 License
This project was developed as a learning/project portfolio application.
