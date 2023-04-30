import React from "react"
import { useState, useEffect } from "react"
import axios from "axios";

export default function FriendsList() {
  const [data, setData] = useState([])
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get("http://localhost:9000/api/friends", {
      headers: {
        authorization: token,
      }
    })
      .then(res => setData(res.data))
      .catch(err => console.error(err))
  }, []);

  return (
    <>
      <div>FriendsList</div>
      <ul>
        {
          data.map((friend, idx) => {
            return (
              <li key={idx}>{friend.name} - {friend.age} - {friend.email}</li>
            )
          })
        }
      </ul>
    </>

  )
}