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
      <div className="row p-3 text-muted">

        {/* TEAM MEMBERS — Responsive Grid */}
        {[
          { role: "Co-founder & CFO" },
          { role: "CTO" },
          { role: "COO" },
          { role: "CCO" },
          { role: "Director" },
          { role: "Chief of Education" },
          { role: "Director Strategy" },
        ].map((person, index) => (
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 text-center"
            key={index}
          >
            <img
              src="media/images/nithinKamath.jpg"
              style={{ borderRadius: "100%", width: "55%" }}
              alt=""
            />
            <h5 className="mt-3">Nithin Kamath</h5>
            <h6 className="mt-2">{person.role}</h6>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;