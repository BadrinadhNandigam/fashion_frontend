import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });


  function handleChange(e) {

    setUser({
      ...user,
      [e.target.name]: e.target.value
    });

  }


  async function handleSubmit(e) {

    e.preventDefault();

    await api.post(
      "/users",
      user
    );

    navigate("/login");
  }


  return (

    <div className="auth-container">

      <div className="auth-card">

        <h1>Create Account</h1>

        <p className="auth-subtitle">
          Register for Fashion Store
        </p>


        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={user.name}
            onChange={handleChange}
            required
          />


          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
            required
          />


          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            required
          />


          <button
            type="submit"
            className="submit-btn"
          >
            Register
          </button>

        </form>


        <p className="auth-footer">

          Already have an account?

          <a href="/login">
            Login
          </a>

        </p>

      </div>

    </div>

  );
}

export default Register;