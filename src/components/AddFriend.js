import React from "react"
import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddFriend() {
  const navigate = useNavigate();

  const [friend, setFriend] = useState({ name:"", age:"", email:"" });
  const token = localStorage.getItem("token");

  const handleChange = (e) => {
    setFriend({
      ...friend,
      [e.target.name]: e.target.value
    });
    console.log(friend);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:9000/api/friends", friend, {
      headers: {
        authorization: token,
      }
    })
    .then(res => {
      console.log(res);
      navigate("/friends");
    })
    .catch(err => console.error(err))
  }

  return (
    <div>
      <h1>AddFriend</h1>
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" onChange={ handleChange }></input>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" onChange={ handleChange }></input>
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input type="text" id="age" name="age" onChange={ handleChange }></input>
        </div>
        <button
          disabled={ friend.name.length < 1 || friend.email.length < 1 || friend.age.length < 1 }
        >Add Friend</button>
      </form>
    </div>
  )
}