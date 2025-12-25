import React from "react";

function Pricing() {
  return (
    <div className="container mt-5 mb-5 p-3">
      <div className="row">
        <div className="col-5">
          <h2 className="mb-4 fs-2">Unbeatable pricing</h2>
          <p className="mb-4">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See Pricing<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-7">
          <div className="row text-center">
            <div className="col p-3 border">
              <h1 className="text-warning mb-3">₹0</h1>
              <p>Free account opening</p>
            </div>
            <div className="col p-3 border">
              <h1 className="text-warning mb-3">₹0</h1>
              <p>
                Free equity delivery <br /> and direct mutual funds
              </p>
            </div>
            <div className="col p-3 border">
              <h1 className="text-warning mb-3">₹20</h1>
              <p>
                Intraday and <br /> F&O
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
