import React from "react";

function Hero() {
  return (
    <div className="container">
      {/* Top Heading */}
      <div className="row p-3 p-md-5 mt-4 mb-4">
        <h1 className="fs-4 fs-md-2 text-center text-muted">
          We pioneered the discount broking model in India.
          <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>

      {/* Main Content */}
      <div
        className="row p-3 p-md-5 mt-4 border-top text-muted"
        style={{ lineHeight: "1.7", fontSize: "1.1em" }}
      >
        {/* LEFT SIDE */}
        <div className="col-12 col-md-6 p-3 p-md-5 text-center text-md-start">
          <p>
            We kick-started operations on the 15th of August, 2010 <br />
            with the goal of breaking all barriers that traders and <br />
            investors face in India in terms of cost, support, and <br />
            technology. We named the company Zerodha, a <br />
            combination of Zero and "Rodha", the Sanskrit word for barrier.
          </p>

          <p>
            Today, our disruptive pricing models and in-house <br />
            technology have made us the biggest stock broker in India.
          </p>

          <p>
            Over 1.6+ crore clients place billions of orders every year <br />
            through our powerful ecosystem of investment platforms, <br />
            contributing over 15% of all Indian retail trading volumes.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-12 col-md-6 p-3 p-md-5 text-center text-md-start">
          <p>
            In addition, we run a number of popular open online <br />
            educational and community initiatives to empower <br />
            retail traders and investors.
          </p>

          <p>
            <a href="#" style={{ textDecoration: "none" }}>Rainmatter</a>, our fintech
            fund and incubator, has invested in <br />
            several fintech startups with the goal of growing the Indian
            capital markets.
          </p>

          <p>
            And yet, we are always up to something new every day. <br />
            Catch up on the latest updates on our{" "}
            <a href="#" style={{ textDecoration: "none" }}>blog</a> or see what <br />
            the media is{" "}
            <a href="#" style={{ textDecoration: "none" }}>saying about us</a> or learn more
            about our <br /> business and product{" "}
            <a href="#" style={{ textDecoration: "none" }}>philosophies</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;