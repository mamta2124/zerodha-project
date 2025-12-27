import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">

        {/* IMAGE (mobile me upar, desktop me left) */}
        <div className="col-12 col-md-6 text-center p-3">
          <img
            src="media/images/education.svg"
            style={{ width: "75%", maxWidth: "380px" }}
            alt=""
          />
        </div>

        {/* TEXT SECTION */}
        <div className="col-12 col-md-6 p-3 p-md-4 text-center text-md-start">

          <h2 className="mb-3 fs-3 fs-md-2">Free and open market education</h2>

          <p className="text-muted" style={{ fontSize: "1.1em", lineHeight: "1.6" }}>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
            <br />
            <br />
            <a href="#" style={{ textDecoration: "none" }}>
              Varsity <i className="bi bi-arrow-right"></i>
            </a>
          </p>

          <p className="mt-4 text-muted" style={{ fontSize: "1.1em", lineHeight: "1.6" }}>
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
            <br />
            <br />
            <a href="#" style={{ textDecoration: "none" }}>
              TradingQ&A <i className="bi bi-arrow-right"></i>
            </a>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Education;