import React, { useState } from "react";
import "./login.scss";
import axios from "../../api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      username,
      password,
    };

    axios
      .post(`/auth/login`, user)
      .then((res) => {
        console.log(res);
        toast.success("welcome");
        localStorage.setItem(`x-auth-token`, res.data.token);
        navigate("/admin/products");
      })
      .catch((err) => {
        toast.error("Username or password incorrect");
        console.log(err);
      });
  };

  return (
    <div className="login container">
      <h1 className="login__title">Login</h1>
      <form onSubmit={handleSubmit} className="login__form" action="">
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login__form__input"
          type="text"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login__form__input"
          type="password"
        />
        <button className="login__form__btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
