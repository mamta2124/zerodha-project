import React from "react";

// Equity.js
export default function Equity() {
  return (
    <div className="container my-4">
      {/* Responsive wrapper */}
      <div className="table-responsive">
        <table className="table table-bordered align-middle small">
          <thead className="table-light">
            <tr>
              <th></th>
              <th>Equity delivery</th>
              <th>Equity intraday</th>
              <th>F&amp;O - Futures</th>
              <th>F&amp;O - Options</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="fw-semibold">Brokerage</td>
              <td>Zero Brokerage</td>
              <td>0.03% or ₹20 / executed order</td>
              <td>0.03% or ₹20 / executed order</td>
              <td>Flat ₹20 per executed order</td>
            </tr>

            <tr className="table-secondary">
              <td className="fw-semibold">STT / CTT</td>
              <td>0.1% on buy &amp; sell</td>
              <td>0.025% on sell side</td>
              <td>0.02% on sell side</td>
              <td>
                <ul className="mb-0 ps-3">
                  <li>0.125% on intrinsic value (exercised)</li>
                  <li>0.1% on sell side (premium)</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className="fw-semibold">Transaction charges</td>
              <td>
                NSE: 0.00297% <br />
                BSE: 0.00375%
              </td>
              <td>
                NSE: 0.00297% <br />
                BSE: 0.00375%
              </td>
              <td>
                NSE: 0.00173% <br />
                BSE: 0
              </td>
              <td>
                NSE: 0.03503% <br />
                BSE: 0.0325%
              </td>
            </tr>

            <tr className="table-secondary">
              <td className="fw-semibold">GST</td>
              <td colSpan="4">
                18% on (brokerage + SEBI charges + transaction charges)
              </td>
            </tr>

            <tr>
              <td className="fw-semibold">SEBI charges</td>
              <td>₹10 / crore</td>
              <td>₹10 / crore</td>
              <td>₹10 / crore</td>
              <td>₹10 / crore</td>
            </tr>

            <tr className="table-secondary">
              <td className="fw-semibold">Stamp charges</td>
              <td>0.015% or ₹1500 / crore (buy)</td>
              <td>0.003% or ₹300 / crore (buy)</td>
              <td>0.002% or ₹200 / crore (buy)</td>
              <td>0.003% or ₹300 / crore (buy)</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile hint */}
      <p className="text-muted small d-md-none">
        👉 Swipe left/right to view full table
      </p>
    </div>
  );
}