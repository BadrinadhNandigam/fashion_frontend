import {
  useDispatch,
  useSelector
} from "react-redux";

import {
  removeFavorite
} from "../features/favoriteSlice";


function Favorites() {

  const dispatch = useDispatch();


  const favorites = useSelector(
    state => state.favorites
  );


  return (

    <div className="favorites-container">

      <h1 className="page-title">
        My Favorite Products
      </h1>


      {
        favorites.length === 0 ? (

          <div className="empty-favorites">

            <h2>
              No Favorite Products
            </h2>

            <p>
              Add products from the
              Products page.
            </p>

          </div>

        ) : (

          <div className="favorites-grid">

            {
              favorites.map(product => (

                <div
                  key={product.id}
                  className="favorite-card"
                >

                  <img
                    src={product.image}
                    alt={product.name}
                  />


                  <div className="favorite-content">

                    <h2>
                      {product.name}
                    </h2>


                    <p>
                      {product.brand}
                    </p>


                    <p>
                      💰 ₹{product.price}
                    </p>


                    <p>
                      ⭐ {product.rating}
                    </p>


                    <p>
                      Category: {product.category}
                    </p>


                    <p>
                      Type: {product.type}
                    </p>


                    <button
                      className="remove-favorite-btn"
                      onClick={() =>
                        dispatch(
                          removeFavorite(product.id)
                        )
                      }
                    >
                      Remove Favorite
                    </button>

                  </div>

                </div>

              ))
            }

          </div>

        )
      }

    </div>

  );

}


export default Favorites;