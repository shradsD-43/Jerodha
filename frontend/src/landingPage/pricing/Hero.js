import React from "react";

function Hero() {
  return (
    <div className="container mt-5 text-center">
      <div className="row border-bottom mb-5 p-5">
        <h1 className="fs-3">Charges</h1>
        <h3 className="text-muted fs-5">List of all charges and taxes</h3>
      </div>
      <div className="row mt-5 pt-4">
        <div className="col-4 p-3">
          <img
            src="media/images/pricingEquity.svg"
            style={{ width: "80%" }}
            alt="product Image"
          />
          <h2 className="mb-4">Free equity delivery</h2>
          <p className="text-small text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-2">
          <img
            src="media/images/intradayTrades.svg"
            style={{ width: "80%" }}
            alt="product Image"
          />
          <h2 className="mb-4">Intraday and F&O trades</h2>
          <p className="text-small text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media/images/pricingMF.svg"
            style={{ width: "80%" }}
            alt="product Image"
          />
          <h2 className="mb-4">Free direct MF</h2>
          <p className="text-small text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
