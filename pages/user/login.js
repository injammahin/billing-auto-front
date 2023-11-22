import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errormsg, setErrors] = useState({});
  const [loginError, setLoginError] = useState("");

  const formValidation = () => {
    const errormsg = {};
    if (email.trim() === "") {
      errormsg.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errormsg.email = "Invalid email format";
    }
    if (password.trim() === "") {
      errormsg.password = "Password is required";
    }
    setErrors(errormsg);
    return Object.keys(errormsg).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (formValidation()) {
      try {
        const res = await axios.post("http://localhost:2000/auth/signin", {
          email,
          password,
        });
        console.log("login response:", res.data);
      } catch (error) {
        console.error("Login error:", error);
        setLoginError("An error occurred while attempting to log in.");
      }
    }
  };

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      window.location.href = "profile";
    }
  }, []);

  return (
    <div>
      <h2>Sign in to your account</h2>
      <form>
        <div>
          <label>Your email</label>
          <input
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errormsg.email && <p>{errormsg.email}</p>}
        </div>
        <div>
          <label>Your password</label>
          <input
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errormsg.password && <p>{errormsg.password}</p>}
        </div>
        <button type="submit" onClick={handleLogin}>
          Login to your account
        </button>
      </form>
    </div>
  );
}
