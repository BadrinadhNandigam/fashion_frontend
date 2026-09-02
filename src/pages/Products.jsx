import { useEffect, useState } from "react";
import api from "../services/api";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
function Products() {

  const [products, setProducts] = useState([]);

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  const [price, setPrice] = useState("All");

  const [sort, setSort] = useState("");


  useEffect(() => {

    api.get("/products")

      .then((response) => {

        setProducts(response.data);

      })

      .catch((error) => {

        console.log(error);

      });

  }, []);


  async function deleteProduct(id) {

    try {

      await api.delete(
        `/products/${id}`
      );


      setProducts(
        products.filter(
          product =>
            product.id !== id
        )
      );

    } catch (error) {

      console.log(error);

    }

  }


  // SEARCH + FILTER

  let filteredProducts = products.filter((product) => {

    const searchMatch =
      product.name
        .toLowerCase()
        .includes(search.toLowerCase());


    const categoryMatch =
      category === "All" ||
      product.category === category;


    const priceMatch =
      price === "All" ||

      (price === "low" &&
        product.price < 2000) ||

      (price === "medium" &&
        product.price >= 2000 &&
        product.price <= 4000) ||

      (price === "high" &&
        product.price > 4000);


    return (
      searchMatch &&
      categoryMatch &&
      priceMatch
    );

  });


  // SORT BY RATING

  if (sort === "high") {

    filteredProducts.sort(
      (a, b) =>
        b.rating - a.rating
    );

  }


  if (sort === "low") {

    filteredProducts.sort(
      (a, b) =>
        a.rating - b.rating
    );

  }


  return (

    <div className="products-page">

      <h1>
        Fashion Products
      </h1>


      <Link
        to="/add-product"
        className="add-product-btn"
      >
        Add Product
      </Link>


      {/* SEARCH AND FILTERS */}

      <div className="filters">

        <input
          type="text"
          placeholder="Search Product"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />


        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
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


        <select
          value={price}
          onChange={(e) =>
            setPrice(e.target.value)
          }
        >

          <option value="All">
            All Prices
          </option>

          <option value="low">
            Below ₹2000
          </option>

          <option value="medium">
            ₹2000 - ₹4000
          </option>

          <option value="high">
            Above ₹4000
          </option>

        </select>


        <select
          value={sort}
          onChange={(e) =>
            setSort(e.target.value)
          }
        >

          <option value="">
            Sort Rating
          </option>

          <option value="high">
            High To Low
          </option>

          <option value="low">
            Low To High
          </option>

        </select>

      </div>


      {/* PRODUCTS */}

      <div className="products-container">

        {filteredProducts.map((product) => (

          <ProductCard

            key={product.id}

            product={product}

            onDelete={deleteProduct}

          />

        ))}

      </div>


      {/* NO PRODUCTS */}

      {filteredProducts.length === 0 && (

        <p className="no-products">
          No products found.
        </p>

      )}

    </div>

  );

}


export default Products;