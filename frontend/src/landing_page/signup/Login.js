import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "https://zerodha-project-ztyt.onrender.com/login",
        // "http://localhost:3002/login",
        { email, password },
        { credentials: true }
      );

      if (data.success) {
        toast.success(data.message);
        setIsLoggedIn(true);
        setInputValue({ email: "", password: "" });
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      // toast.error("Login failed");
      // console.log(err);
    }
  };

  const goToDashboard = () => {
    window.location.href = "http://localhost:3001"; // dashboard
  };

 
  const handleLogout = () => {
    document.cookie = "token=; Max-Age=0; path=/";
    setIsLoggedIn(false);
    toast.success("Logged out successfully");
  };

  return (
    <>
      {!isLoggedIn ? (
        <form onSubmit={handleSubmit} style={{ width: "80%" }} >
          <div className="mb-3 ">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={email}
              onChange={handleOnChange}
              placeholder="Enter email"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Enter password"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      ) : (
        <div style={{ width: "80%" }} className="text-center">
          <h3 className="mb-3">You are Logged In 🎉</h3>

          <button
            className="btn btn-success w-100 mb-2"
            onClick={goToDashboard}
          >
            Go to Dashboard
          </button>

          <button
            className="btn btn-danger w-100"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}

      <ToastContainer />
    </>
  );
}

export default Login;