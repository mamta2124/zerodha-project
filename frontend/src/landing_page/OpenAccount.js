import React from 'react';

function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center justify-content-center">
        <div className="col-12 col-md-8">
          <h2 className="mt-5 text-muted">Open a Zerodha account</h2>
          <p className="mt-2 fs-5 text-muted">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
          </p>
          <button
            className="btn btn-primary fs-5 mt-4 mb-5 w-100 w-md-auto px-4 py-2"
            style={{ maxWidth: "300px" }}
          >
            Sign Up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;