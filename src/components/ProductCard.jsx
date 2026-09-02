import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addFavorite } from "../features/favoriteSlice";


function ProductCard({ product, onDelete }) {

  const dispatch = useDispatch();


  function handleFavorite() {

    dispatch(
      addFavorite(product)
    );

  }


  return (

    <div className="product-card">

      <img
        src={product.image}
        alt={product.name}
      />


      <div className="product-content">

        <h3>
          {product.name}
        </h3>

        <p>
          {product.brand}
        </p>

        <p className="product-price">
          ₹{product.price}
        </p>

        <p className="product-rating">
          ⭐ {product.rating}
        </p>


        <div className="card-actions">

          <Link
            className="view-btn"
            to={`/products/${product.id}`}
          >
            View Details
          </Link>


          <Link
            className="edit-btn"
            to={`/edit-product/${product.id}`}
          >
            Edit
          </Link>


          <button
            className="delete-btn"
            onClick={() =>
              onDelete(product.id)
            }
          >
            Delete
          </button>

        </div>


        <button
          className="favorite-btn"
          onClick={handleFavorite}
        >
          ❤️ Add To Favorites
        </button>

      </div>

    </div>

  );
}

export default ProductCard;