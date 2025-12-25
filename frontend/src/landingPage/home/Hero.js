import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
          style={{ width: "70%", margin: "0 auto" }}
        ></img>
        <h2 className="mt-3">Invest in everything</h2>
        <p className="fs-5 mb-5">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <Link to="/signup">
          <button
            className="p-2 btn btn-primary fs-5"
            style={{ width: "20%", margin: "0 auto" }}
          >
            Signup for free
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
