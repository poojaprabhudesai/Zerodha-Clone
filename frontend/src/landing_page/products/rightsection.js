import React from "react";
function RightSection(imageURL, productName, productDescription, learnMore) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a
              href={learnMore}
              style={{ marginLeft: "50px", textDecoration: "none" }}
            >
              Learn More
              <i className="fa fa-long-arrow-right mx-2" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col-6">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
