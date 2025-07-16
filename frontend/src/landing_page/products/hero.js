import React from "react";
function Hero() {
  return (
    <div className="container ">
      <div className="text-center mt-5 p-5">
        <h1 className="mt-5">Zerodha Products</h1>
        <h3 className="text-muted mt-3 fs-4">
          Sleek, modern, and intuitive trading platforms
        </h3>
        <p className="mt-3">
          Check out our{""}{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings{""}
            <i className="fa fa-long-arrow-right mx-2" aria-hidden="true"></i>
          </a>{" "}
        </p>
      </div>
    </div>
  );
}

export default Hero;
