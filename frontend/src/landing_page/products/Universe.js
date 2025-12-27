import React from 'react';

function Universe() {
  const platforms = [
    {
      img: "media/images/smallcaseLogo.png",
      width: "60%",
      desc: "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs."
    },
    {
      img: "media/images/zerodhaFundhouse.png",
      width: "50%",
      desc: "Our asset management venture that is creating simple and transparent index funds to help you save for your goals."
    },
    {
      img: "media/images/sensibullLogo.svg",
      width: "65%",
      desc: "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more."
    },
    {
      img: "media/images/streakLogo.png",
      width: "50%",
      desc: "Systematic trading platform that allows you to create and backtest strategies without coding."
    },
    {
      img: "media/images/dittoLogo.png",
      width: "40%",
      desc: "Personalized advice on life and health insurance. No spam and no mis-selling."
    },
    {
      img: "media/images/tijori.svg",
      width: "50%",
      desc: "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more."
    },
  ];

  return (
    <div className="container mt-5">
      <div className="text-center">
        <h2 className="mt-5 text-muted">The Zerodha Universe</h2>
        <p className="mt-3 text-muted fs-6 px-3 px-md-5">
          Extend your trading and investment experience even further with our partner platforms
        </p>
      </div>

      <div className="row justify-content-center mt-4">
        {platforms.map((platform, idx) => (
          <div key={idx} className="col-12 col-sm-6 col-md-4 p-3 text-center">
            <img src={platform.img} alt="" className="img-fluid" style={{ width: platform.width }} />
            <p className="text-small text-muted mt-3 px-2">{platform.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button
          className="p-2 mt-5 btn btn-primary fs-5 mb-5"
          style={{ width: "50%", maxWidth: "250px" }}
        >
          Sign Up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;