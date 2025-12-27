import React from "react";

function Mid() {
  const items = [
    {
      img: "media/images/stocks-acop.svg",
      title: "Stocks",
      desc: "Invest in all exchange-listed securities",
    },
    {
      img: "media/images/mf-acop.svg",
      title: "Mutual funds",
      desc: "Invest in commission-free direct mutual funds",
    },
    {
      img: "media/images/ipo-acop.svg",
      title: "IPO",
      desc: "Apply to the latest IPOs instantly via UPI",
    },
    {
      img: "media/images/fo-acop.svg",
      title: "Futures & options",
      desc: "Hedge and mitigate market risk through simplified F&O trading",
    },
  ];

  return (
    <div className="container text-center mt-5">
      <h3 className="mb-5 p-5">Investment options with Zerodha demat account</h3>

      <div className="row justify-content-center">
        {items.map((item, index) => (
          <div
            key={index}
            className="col-lg-5 col-md-6 col-sm-12 d-flex align-items-center mb-4"
          >
            <img
              src={item.img}
              width="80"
              alt={item.title}
              className="flex-shrink-0"
            />
            <div className="text-start ms-3">
              <h5>{item.title}</h5>
              <p className="text-muted mb-0">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="btn btn-primary px-5 py-2 fs-5 mt-3 mb-5">
        Explore Investments
      </button>
    </div>
  );
}

export default Mid;