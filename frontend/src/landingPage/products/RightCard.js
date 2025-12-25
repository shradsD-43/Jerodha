import React from "react";

function RightCard({
    imageURL,
    productName,
    productDescription,
    learnMore,
}) {
  return (
    <div className="container p-3 mt-5">
      <div className="row">
        <div className="col-4 mt-5 py-5">
          <h1 className="fs-3">{productName}</h1>
          <p className="mt-4" style={{ fontSize: "18px" }}>
            {productDescription}
          </p>
          <a href={learnMore}>
                Learn more<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-8 text-center">
          <img src={imageURL} style={{width:"70%"}} alt="product Image"></img>
        </div>
      </div>
    </div>
  );
}

export default RightCard;
