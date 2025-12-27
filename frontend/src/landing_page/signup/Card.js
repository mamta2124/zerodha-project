import React from "react";
import '../../index.css';

function Card() {
  const data = [
    {
      img: "media/images/acop-individual.svg",
      title: "Individual Account",
      desc: "Invest in equity, mutual funds and derivatives",
    },
    {
      img: "media/images/acop-huf.svg",
      title: "HUF Account",
      desc: "Make tax-efficient investments for your family",
    },
    {
      img: "media/images/acop-nri.svg",
      title: "NRI Account",
      desc: "Invest in equity, mutual funds, debentures, and more",
    },
    {
      img: "media/images/acop-minor.svg",
      title: "Minor Account",
      desc: "Teach your little ones about money & invest for their future with them",
    },
    {
      img: "media/images/acop-corporate.svg",
      title: "Corporate / LLP / Partnership",
      desc: "Manage your business surplus and investments easily",
    },
    {
      img: "media/images/acop-minor.svg",
      title: "Minor Account",
      desc: "Teach your little ones about money & invest for their future with them",
    },
  ];

  return (
    <div className="container mt-5 text-center">
      <h3 className="mb-5">Explore different account types</h3>

      <div className="row justify-content-center">
        {data.map((item, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 mb-4">
            <div className="acc-card p-3 h-100 d-flex align-items-start">
              <img src={item.img} alt={item.title} className="me-3 img-fluid" style={{ width: "45px" }} />
              <div className="text-start">
                <h5>{item.title}</h5>
                <p className="text-muted mb-0">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;