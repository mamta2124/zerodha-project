import React from "react";

function Team() {
  return (
    <div className="container">
      {/* People Heading */}
      <div className="row p-3">
        <h3 className="text-center text-muted">People</h3>
      </div>

      {/* Founder Section */}
      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.5", fontSize: "1.1em" }}
      >
        {/* IMAGE LEFT */}
        <div className="col-12 col-md-6 p-3 text-center">
          <img
            src="media/images/nithinkamath.jpg"
            style={{ borderRadius: "100%", width: "45%" }}
            alt=""
          />
          <h4 className="mt-4">Nithin Kamath</h4>
          <h6 className="mt-2">Founder, CEO</h6>
        </div>

        {/* TEXT RIGHT */}
        <div className="col-12 col-md-6 p-3 text-center text-md-start">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade-long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>

          <p>
            Connect on{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>

      {/* TEAM GRID */}
    </div>
  );
}

export default Team;