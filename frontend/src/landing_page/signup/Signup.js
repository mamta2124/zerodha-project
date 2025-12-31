import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Signup({ onLoginSuccess }) {
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleError = (err) =>
    toast.error(err, { position: "bottom-left" });

  const handleSuccess = (msg) =>
    toast.success(msg, { position: "top-right" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        // "http://localhost:3002/signup",

        "https://zerodha-project-ztyt.onrender.com/signup",
        { ...inputValue },
        { withCredentials: true }
      );

      const { success, message } = data;

      if (success) {
        handleSuccess(message);
        if (onLoginSuccess) onLoginSuccess();
        setTimeout(() => navigate("/signup"), 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      handleError(
        error.response?.data?.message || "Unexpected error occurred."
      );
    }

    setInputValue({ email: "", password: "", username: "" });
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="">
          
          <form
            onSubmit={handleSubmit}
            className="p-4 border rounded shadow-sm bg-white" style={{width:"100%"}}
          >
            <h3 className="mb-1">Signup now</h3>
            <p className="text-muted mb-4">
              Or track your existing application
            </p>

            {/* Username */}
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="Username"
                placeholder="Enter username"
                ref={inputRef}
                name="username"
                value={username}
                onChange={handleOnChange}
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="Email"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={handleOnChange}
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label htmlFor="Password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="Password"
                placeholder="Enter password"
                name="password"
                value={password}
                onChange={handleOnChange}
              />
            </div>

            <button type="submit" className="btn btn-primary w-100 mb-3">
              Signup
            </button>

            <div className="text-center">
              <small>
                Already have an account?{" "}
                <Link to="/login" className="text-decoration-none">
                  Login
                </Link>
              </small>
            </div>
          </form>

        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Signup;

