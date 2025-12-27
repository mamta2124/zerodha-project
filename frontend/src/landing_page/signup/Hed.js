import React from 'react';

function Hed() {
  return (
    <div className='p-2' style={{ backgroundColor: "#fafafa" }}>
      <div className='container'>
        <h3 className="text-center mt-5 mb-5">Steps to open a demat account with Zerodha</h3>
        <div className="row justify-content-center align-items-center">

          {/* Image Column */}
          <div className="col-md-4 col-sm-12 text-center mb-4">
            <img src="media/images/steps-acop.svg" alt="Steps" className="img-fluid" />
          </div>

          {/* Steps Column */}
          <div className="col-md-4 col-sm-12">
            <p className='border-bottom mb-3 py-2 d-flex align-items-center' style={{ fontSize: "18px" }}>
              <span className='border rounded-circle mx-2 px-3 py-1 fw-bold'>01</span>
              Enter the requested details
            </p>
            <p className='border-bottom mb-3 py-2 d-flex align-items-center' style={{ fontSize: "18px" }}>
              <span className='border rounded-circle mx-2 px-3 py-1 fw-bold'>02</span>
              Complete e-sign & verification
            </p>
            <p className='border-bottom mb-3 py-2 d-flex align-items-center' style={{ fontSize: "18px" }}>
              <span className='border rounded-circle mx-2 px-3 py-1 fw-bold'>03</span>
              Start investing!
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Hed;