import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row p-3 p-md-5 align-items-center">

        {/* IMAGE SECTION */}
        <div className="col-12 col-md-6 mb-4 mb-md-0 text-center">
          <img
            src={imageURL}
            alt={productName}
            style={{ width: "100%", maxWidth: "450px" }}
            className="img-fluid"
          />
        </div>

        {/* TEXT SECTION */}
        <div className="col-12 col-md-6 p-3 p-md-5">
          <h2 className="text-muted">{productName}</h2>

          <p className="text-muted fs-6 mt-3">{productDescription}</p>

          {/* LINKS */}
          <div className="mt-3 d-flex flex-column flex-sm-row gap-3">
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo <i className="bi bi-arrow-right"></i>
            </a>

            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn More <i className="bi bi-arrow-right"></i>
            </a>
          </div>

          {/* BADGES */}
          <div className="mt-4 d-flex flex-column flex-sm-row gap-3">
            <a href={googlePlay}>
              <img
                src="media/googlePlayBadge.svg"
                className="img-fluid"
                style={{ maxWidth: "150px" }}
                alt="Google Play"
              />
            </a>

            <a href={appStore}>
              <img
                src="media/appstoreBadge.svg"
                className="img-fluid"
                style={{ maxWidth: "150px" }}
                alt="App Store"
              />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default LeftSection;