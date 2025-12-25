import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import Hero from "./Hero";

function SignupPage() {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;

  const [errors, setErrors] = useState({});
  const [agree, setAgree] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};

    // Required validation
    if (!email) newErrors.email = "Email is required";
    if (!username) newErrors.username = "Username is required";
    if (!password) newErrors.password = "Password is required";
    // Email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
      newErrors.email = "Enter a valid email address";
    }
    // Username length
    if (username && username.length > 10) {
      newErrors.username = "Username must be max 10 characters";
    }
    // Agreement checkbox
    if (!agree) {
      newErrors.agree = "You must accept the disclaimer to continue";
    }

    // Stop if errors exist
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/signup`,
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;

      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = process.env.REACT_APP_DASHBOARD_URL; //to dashboard
        }, 2000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
      handleError("Signup failed");
    }

    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <>
      <Hero />
      <div className="container-xxl px-5 pt-5 mt-2 mb-5 mx-5">
        <div className="card p-5 mb-5">
          <h2 className="text-center mb-4">Signup Now</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="form-label fs-5">Email</label>
              <div className="input-group input-group-lg">
                <span className="input-group-text">
                  <i class="fa fa-envelope-o" aria-hidden="true"></i>
                </span>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={handleOnChange}
                />
              </div>
              {errors.email && (
                <small className="text-danger">{errors.email}</small>
              )}
            </div>

            <div className="mb-4">
              <label className="form-label fs-5">Username</label>
              <div className="input-group input-group-lg">
                <span className="input-group-text">@</span>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  value={username}
                  placeholder="Enter your username"
                  onChange={handleOnChange}
                />
              </div>
              {errors.username && (
                <small className="text-danger">{errors.username}</small>
              )}
            </div>

            <div className="mb-4">
              <label className="form-label fs-5">Password</label>
              <div className="input-group input-group-lg">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  placeholder="Enter your password"
                  onChange={handleOnChange}
                />
              </div>
              {errors.password && (
                <small className="text-danger">{errors.password}</small>
              )}
            </div>

            <div className="mb-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="agree"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="agree">
                  I understand that even though this website & following
                  dashboard looks real(and fancy), it is only a demo clone of
                  Zerodha built using dummy data and does not involve real
                  trading.
                </label>
              </div>
              {errors.agree && (
                <small className="text-danger">
                  {errors.agree}
                </small>
              )}
            </div>

            <div className="text-center mt-5">
              <button
                type="submit"
                className="p-2 btn btn-primary fs-5 align-items-center"
                style={{ width: "20%" }}
              >
                Sign Up
              </button>
            </div>

            <div className="text-center p-4 fs-5">
              Already have an account? <Link to={"/login"}>Login</Link>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default SignupPage;
