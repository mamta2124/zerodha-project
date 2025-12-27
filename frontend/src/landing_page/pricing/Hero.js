import React from "react";

function Hero() {
  return (
    <div className="container">
      
      {/* Top Heading Section */}
      <div className="row p-4 p-md-5 mt-5 border-bottom text-center">
        <h2>Charges</h2>
        <h5 className="text-muted mt-3 fs-5">List of all charges and taxes</h5>
      </div>

      {/* Cards Section */}
      <div className="row p-3 p-md-5 mt-4 text-center">

        {/* Card 1 */}
        <div className="col-lg-4 col-md-6 col-12 p-4">
          <img src="media/images/pricingEquity.svg" style={{ width: "85%" }} />
          <h3 className="text-muted mt-3">Free equity delivery</h3>
          <p className="text-muted fs-6 mt-3">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹0 brokerage.
          </p>
        </div>

        {/* Card 2 */}
        <div className="col-lg-4 col-md-6 col-12 p-4">
          <img src="media/images/intradayTrades.svg" style={{ width: "85%" }} />
          <h3 className="text-muted mt-3">Intraday and F&O trades</h3>
          <p className="text-muted fs-6 mt-3">
            Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
          </p>
        </div>

        {/* Card 3 */}
        <div className="col-lg-4 col-md-6 col-12 p-4 mx-md-auto">
          <img src="media/images/pricingMF.svg" style={{ width: "85%" }} />
          <h3 className="text-muted mt-3">Free direct MF</h3>
          <p className="text-muted fs-6 mt-3">
            All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Hero;