import React from "react"
import { useState } from "react"

export default function Login() {
  const [auth, setAuth] = useState({ username:"", password:"" });

  const handleChange = (e) => {
    setAuth({
      ...auth,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(auth)
  }

  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" onChange={ handleChange }></input>
        </div>
        <div>
          <label htmlFor="username">Password:</label>
          <input type="text" id="password" name="password" onChange={ handleChange }></input>
        </div>
        <button onClick={ handleSubmit }>Login</button>
      </form>
    </div>
  )
}