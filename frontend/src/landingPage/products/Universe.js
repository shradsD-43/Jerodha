import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container p-3 mt-5 text-center">
      <div className="row">
        <h1>The Zerodha Universe</h1>
        <p className="fs-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/zerodhaFundhouse.png"
            style={{ width: "60%" }}
            alt="product Image"
          />
          <p className="text-small text-muted">Asset management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/streakLogo.png"
            style={{ width: "60%" }}
            alt="product Image"
          />
          <p className="text-small text-muted">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/sensibullLogo.svg"
            style={{ width: "60%" }}
            alt="product Image"
          />
          <p className="text-small text-muted">Option trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/smallcaseLogo.png"
            style={{ width: "60%" }}
            alt="product Image"
          />
          <p className="text-small text-muted">Thematic investing platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/goldenpiLogo.png"
            style={{ width: "60%" }}
            alt="product Image"
          />
          <p className="text-small text-muted">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/dittoLogo.png"
            style={{ width: "60%" }}
            alt="product Image"
          />
          <p className="text-small text-muted">Insurance</p>
        </div>
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

export default Universe;
