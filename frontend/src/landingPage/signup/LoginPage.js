import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import Hero from "./Hero";

function LoginPage() {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;

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
    if (!password) newErrors.password = "Password is required";
    // Email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
      newErrors.email = "Enter a valid email address";
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
        `${process.env.REACT_APP_BACKEND_URL}/login`,
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
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
    });
  };

  return (
    <>
      <Hero />
      <div className="container-xxl px-5 pt-5 mt-2 mb-5 mx-5">
        <div className="card p-5 mb-5">
          <h2 className="text-center mb-4">Login</h2>

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
                Login
              </button>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default LoginPage;
