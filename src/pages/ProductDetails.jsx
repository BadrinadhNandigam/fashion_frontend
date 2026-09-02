import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

function ProductDetails() {

  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {

    api.get(`/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, [id]);


  if (!product) {
    return <div className="loading">Loading...</div>;
  }


  return (

    <div className="product-details">

      <div className="product-details-container">

        {/* LEFT - IMAGE */}

        <img
          src={product.image}
          alt={product.name}
        />


        {/* RIGHT - DETAILS */}

        <div className="product-details-info">

          <span className="category">
            {product.category}
          </span>

          <h1>
            {product.name}
          </h1>

          <h3>
            {product.brand}
          </h3>

          <p className="description">
            {product.description}
          </p>

          <p className="price">
            ₹{product.price}
          </p>

          <p className="rating">
            ⭐ {product.rating}
          </p>


          {/* Product information */}

          <div className="product-info-grid">

            <p>
              <strong>Category:</strong>{" "}
              {product.category}
            </p>

            <p>
              <strong>Type:</strong>{" "}
              {product.type}
            </p>

            <p>
              <strong>Color:</strong>{" "}
              {product.color}
            </p>

            <p>
              <strong>Material:</strong>{" "}
              {product.material}
            </p>

          </div>


          {/* Sizes */}

          <div className="size-section">

            <p>
              Available Sizes
            </p>

            <div className="size-buttons">

              {product.size.map((size) => (

                <button key={size}>
                  {size}
                </button>

              ))}

            </div>

          </div>


          {/* Stock */}

          <p className="stock">
            {product.stock} items available
          </p>


          {/* Cart */}

          <button className="add-cart-btn">
            Add to Cart
          </button>

        </div>

      </div>

    </div>

  );
}

export default ProductDetails;