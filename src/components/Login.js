import React from "react"
import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({ username:"", password:"" });

  const handleChange = (e) => {
    setAuth({
      ...auth,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:9000/api/login", auth)
      .then(res => {
        localStorage.setItem("token", res.data["token"]);
        navigate("/friends");
      })
      .catch(err => console.error(err))
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" onChange={ handleChange }></input>
        </div>
        <div>
          <label htmlFor="username">Password:</label>
          <input type="text" id="password" name="password" onChange={ handleChange }></input>
        </div>
        <button
          disabled={ auth.username.length < 1 || auth.password.length < 1 }
        >Login</button>
      </form>
    </div>
  )
}