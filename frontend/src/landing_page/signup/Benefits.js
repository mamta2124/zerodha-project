import React from 'react';

function Benefits() {
  const benefits = [
    {
      title: "Unbeatable pricing",
      desc: "Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades."
    },
    {
      title: "Best investing experience",
      desc: "Simple and intuitive trading platform with an easy-to-understand user interface."
    },
    {
      title: "No spam or gimmicks",
      desc: "Committed to transparency — no gimmicks, spam, 'gamification', or intrusive push notifications."
    },
    {
      title: "The Zerodha universe",
      desc: "More than just an app — gain free access to the entire ecosystem of our partner products."
    },
  ];

  return (
    <div className="container p-3">
      <div className="row align-items-center p-3">
        {/* Image Section */}
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img
            src="media/images/acop-benefits.svg"
            alt="Benefits"
            className="img-fluid"
            style={{ maxWidth: "80%" }}
          />
          <h2 className="fs-4 text-muted mt-4">
            Benefits of opening a Zerodha demat account
          </h2>
        </div>

        {/* Text Section */}
        <div className="col-12 col-md-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="mb-4">
              <h3 className="fs-5 text-muted mt-4">{benefit.title}</h3>
              <p className="text-muted mt-2">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Benefits;