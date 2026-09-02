import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");


  async function handleSubmit(e) {

    e.preventDefault();

    try {

      const response = await api.get("/users", {
        params: {
          email: email.trim().toLowerCase(),
          password: password
        }
      });


      if (response.data.length > 0) {

        localStorage.setItem(
          "user",
          JSON.stringify(response.data[0])
        );

        alert("Login Successful");

        navigate("/");

        window.location.reload();

      } else {

        alert("Invalid Credentials");

      }

    } catch (error) {

      console.log(error);

      alert("Something went wrong");

    }
  }


  return (

    <div className="auth-container">

      <div className="auth-card">

        <h1>
          Welcome Back
        </h1>

        <p className="auth-subtitle">
          Login to Fashion Store
        </p>


        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />


          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
          />


          <button
            type="submit"
            className="submit-btn"
          >
            Login
          </button>

        </form>


        <p className="auth-footer">

          Don't have an account?

          <a href="/register">
            Register
          </a>

        </p>

      </div>

    </div>

  );
}

export default Login;