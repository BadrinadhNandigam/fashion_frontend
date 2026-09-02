import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {

  const navigate = useNavigate();

  useEffect(() => {

    // Remove logged-in user
    localStorage.removeItem("user");

    // Go to login page
    navigate("/login");

    // Refresh navbar
    window.location.reload();

  }, [navigate]);


  return null;
}

export default Logout;