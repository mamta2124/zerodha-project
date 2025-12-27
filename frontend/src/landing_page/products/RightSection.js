import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">

        {/* TEXT SECTION */}
        <div className="col-12 col-md-6 order-2 order-md-1 p-3 p-md-5 mt-3 mt-md-0">
          <h2 className="text-muted">{productName}</h2>
          <p className="text-muted fs-6 mt-3">{productDescription}</p>

          <div className="mt-3">
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn More <i className="bi bi-arrow-right"></i>
            </a>
          </div>

          {/* Optional app badges */}
          {(googlePlay || appStore) && (
            <div className="mt-4 d-flex flex-column flex-sm-row gap-3">
              {googlePlay && (
                <a href={googlePlay}>
                  <img
                    src="media/googlePlayBadge.svg"
                    alt="Google Play"
                    className="img-fluid"
                    style={{ maxWidth: "150px" }}
                  />
                </a>
              )}
              {appStore && (
                <a href={appStore}>
                  <img
                    src="media/appstoreBadge.svg"
                    alt="App Store"
                    className="img-fluid"
                    style={{ maxWidth: "150px" }}
                  />
                </a>
              )}
            </div>
          )}
        </div>

        {/* IMAGE SECTION */}
        <div className="col-12 col-md-6 order-1 order-md-2 text-center">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>

      </div>
    </div>
  );
}

export default RightSection;