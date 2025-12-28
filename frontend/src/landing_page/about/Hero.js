import React from "react";

function Hero() {
  return (
    <div className="container">
      {/* Top Heading */}
      <div className="row px-3 px-md-5 mt-5 mb-4">
        <h4 className=" text-center mt-4 text-muted">
          We pioneered the discount broking model in India.
          <br />
          Now, we are breaking ground with our technology.
        </h4>
      </div>

      {/* Main Content */}
      <div
        className="row px-3 px-md-5 mt-5 border-top text-muted"
        style={{ lineHeight: "1.7", fontSize: "1.1em" }}
      >
        {/* LEFT SIDE */}
        <div className="col-12 col-md-6 px-3 px-md-5 text-center text-md-start mt-5">
          <p>
            We kick-started operations on the 15th of August, 2010 <br />
            with the goal of breaking all barriers that traders and <br />
            investors face in India in terms of cost, support, and <br />
            technology. We named the company Zerodha, a <br />
            combination of Zero and "Rodha", the Sanskrit word for<br/>
             barrier.
          </p>

          <p>
            Today, our disruptive pricing models and in-house <br />
            technology have made us the biggest stock broker in <br/>
             India.
          </p>

          <p>
            Over 1.6+ crore clients place billions of orders every year <br />
            through our powerful ecosystem of investment<br /> 
            platforms, contributing over 15% of all Indian retail <br/>
             trading volumes.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-12 col-md-6 px-3 px-md-5 text-center text-md-start mt-5">
          <p>
            In addition, we run a number of popular open online <br />
            educational and community initiatives to empower retail<br />
             traders and investors.
          </p>

          <p>
            <a href="#" style={{ textDecoration: "none" }}>Rainmatter</a>, our fintech
            fund and incubator, has invested <br />
           in several fintech startups with the goal of growing <br/>
            the Indian capital markets.
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