import React from 'react';

function Hero() {
  return (
    <div className="container border-bottom mb-5">

      <div className="row">
        <div className="col-12 text-center mt-4 mt-md-5 p-3 p-md-5">

          <h2 className="text-muted fs-3 fs-md-2">Zerodha Products</h2>

          <h3 className="text-muted mt-3 fs-6 fs-md-5">
            Sleek, modern, and intuitive trading platforms
          </h3>

          <p className="mt-3 mb-4 text-muted fs-6">
            Check out our{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              investment offerings <i className="bi bi-arrow-right"></i>
            </a>
          </p>

        </div>
      </div>

    </div>
  );
}

export default Hero;