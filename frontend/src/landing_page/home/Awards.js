import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">

        {/* IMAGE LEFT (Mobile me upar, Desktop me left) */}
        <div className="col-12 col-md-6 p-3 p-md-5 text-center">
          <img
            src="media/images/largestBroker.svg"
            alt=""
            style={{ width: "80%", maxWidth: "380px" }}
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="col-12 col-md-6 p-3 p-md-5">
          <h2 className="fw-bold">Largest stock broker in India</h2>

          <p className="mb-4 text-muted" style={{ fontSize: "1.1em" }}>
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          {/* LISTS */}
          <div className="row">
            <div className="col-6">
              <ul className="p-0" style={{ listStyle: "none" }}>
                <li><p>Futures & Options</p></li>
                <li><p>Commodity derivatives</p></li>
                <li><p>Currency derivatives</p></li>
              </ul>
            </div>

            <div className="col-6">
              <ul className="p-0" style={{ listStyle: "none" }}>
                <li><p>Stocks & IPOs</p></li>
                <li><p>Direct mutual funds</p></li>
                <li><p>Bonds & Govt. securities</p></li>
              </ul>
            </div>
          </div>

          {/* PRESS LOGOS */}
          <div className="text-center text-md-start">
            <img
              src="media/images/pressLogos.png"
              alt=""
              style={{ width: "100%", maxWidth: "450px" }}
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Awards;