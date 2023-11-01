import React, { useState } from "react";
import '../styles/Login.css'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [errors, setErrors] = useState({
    username: "",
    password: "Thid field is required",
  });

  return (
    <div className="main-login">
      <h1>Welcome Back</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          let formData = {
            user: username,
            pass: password,
          };
          console.log(formData);
          console.log(setErrors);
          if (password === "") {
            setShowPasswordError(true);
          }
        }}
        style={{ maxWidth: "400px" }}
        className="d-flex flex-column gap-4 mx-auto login"
      >
        <input
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          type="text"
          className="w-100 py-2"
        placeholder="  Username"/>
        <input
          onChange={(event) => {
            setPassword(event.target.value);
            setShowPasswordError(false);
          }}
          type="password"
          className="w-100 py-2"
        placeholder="  Password"/> 
        {showPasswordError && (
          <span className="text-danger">{errors.password}</span>
        )}
       
       <div className="main-div">
        <div className="checkbox">
        <input className="input" type="checkbox" name="" id="" />
        <p>Remember Password</p>
        </div>
        <button>Forget Password?</button>
       </div>
        <button className="btn mx-auto border border-dark text-white bg-primary button1">
          Login
        </button>
        <div className="ptag">
          <p>New User?</p>
          <button className="click">Click here</button>
        </div>
      </form>
    </div>
  );
};

export default Login;