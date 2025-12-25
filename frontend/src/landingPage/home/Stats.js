import React from "react";

function Stats() {
  return (
    <div
      className="container mt-5 mb-5 p-5"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="row">
        <div className="col-5 p-3 mb-4">
          <h2 className="mb-4 fs-2">Trust with confidence</h2>
          <h3 className="fs-4">Customer-first always</h3>
          <p className=" text-secondary mb-4">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>
          <h3 className="fs-4">No spam or gimmicks</h3>
          <p className=" text-secondary mb-4">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like. Our
            philosophies.
          </p>
          <h3 className="fs-4">The Zerodha universe</h3>
          <p className=" text-secondary mb-4">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h3 className="fs-4">Do better with money</h3>
          <p className=" text-secondary mb-4">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-7">
          <img
            src="media/images/ecosystem.png"
            alt="Ecosystem Image"
            style={{ width: "100%" }}
          ></img>
          <div className="text-center">
            <a href="" className="mx-5" style={{ textDecoration: "none" }}>
              Explore our products
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="" className="mx-5" style={{ textDecoration: "none" }}>
              Try Kite<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
