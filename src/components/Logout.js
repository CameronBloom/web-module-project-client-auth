import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.post("http://localhost:9000/api/logout", {}, {
      headers: {
        authorization: token,
      }
    })
      .then(res => {
        console.log(res);
        localStorage.removeItem("token");
        navigate("/");
      })
      .catch(err => console.error(err))
  }, []);

  return (
    <div>Cam</div>
  )
}