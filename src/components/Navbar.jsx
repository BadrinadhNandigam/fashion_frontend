import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {

  const favorites = useSelector(
    state => state.favorites
  );

  const user =
    JSON.parse(
      localStorage.getItem("user")
    );

  return (

    <nav>

      <h2>
        Fashion Store
      </h2>

      <div>

        <Link to="/">
          Home
        </Link>

        <Link to="/products">
          Products
        </Link>

        <Link to="/favorites">
          Favorites ({favorites.length})
        </Link>

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

        {user && (
          <Link to="/logout">
            Logout
          </Link>
        )}

      </div>

    </nav>

  );
}

export default Navbar;