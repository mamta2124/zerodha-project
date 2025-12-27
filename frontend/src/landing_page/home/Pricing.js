import React from "react";

function Pricing() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">

        {/* LEFT TEXT SECTION */}
        <div className="col-12 col-md-5 mb-4">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>

          <p className="text-muted" style={{ lineHeight: "1.6" }}>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>

          <a
            href="#"
            style={{ textDecoration: "none", fontSize: "1.1em" }}
          >
            See pricing <i className="bi bi-arrow-right"></i>
          </a>
        </div>

        {/* RIGHT PRICING CARDS */}
        <div className="col-12 col-md-7 mb-5">
          <div className="row text-center g-3">

            {/* CARD 1 */}
            <div className="col-12 col-sm-6 p-3 border rounded">
              <h1 className="mb-3">₹0</h1>
              <p className="text-muted">
                Free equity delivery and <br /> direct mutual funds
              </p>
            </div>

            {/* CARD 2 */}
            <div className="col-12 col-sm-6 p-3 border rounded">
              <h1 className="mb-3">₹20</h1>
              <p className="text-muted">Intraday and F&O</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;