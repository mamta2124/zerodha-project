import React from "react";

function Hero() {
  return (
    <div className="container p-4 p-md-5 mb-5">
      <div className="row text-center justify-content-center">

        {/* HERO IMAGE */}
        <div className="col-12">
          <img
            src="media/images/homeHero.png"
            alt="Hero Image"
            className="mb-4"
            style={{ width: "70%" }}
          />
        </div>

        {/* TITLE */}
        <h2 className="mt-4 fw-semibold">
          Invest in everything
        </h2>

        {/* SUBTEXT */}
        <p className="fs-5 fs-md-4 text-muted mt-2">
          Online platform to invest in stocks, derivatives,
          mutual funds, ETFs, bonds, and more
        </p>

        {/* SIGN UP BUTTON */}
        <div className="col-12">
          <button
            className="btn btn-primary fs-5 mt-3"
            style={{
              width: "100%",
              maxWidth: "250px",
              // padding: "10px 0",
            }}
          >
            Sign Up for free
          </button>
        </div>

      </div>
    </div>
  );
}

export default Hero;