import React from "react";

function LeftCard({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appleStore,
}) {
  return (
    <div className="container p-3 mt-5">
      <div className="row">
        <div className="col-8">
          <img src={imageURL} style={{width:"70%"}} alt="product Image"></img>
        </div>
        <div className="col-4 mt-5">
          <h1 className="fs-3">{productName}</h1>
          <p className="mt-4" style={{fontSize:"18px"}}>{productDescription}</p>
          <div>
            <a href={tryDemo}>
            Try demo<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href={learnMore} className="mx-5">
                Learn more<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="mt-4">
            <a href={googlePlay}>
            <img src="media/images/googlePlayBadge.svg" alt="googlePlay Badge" />
            </a>
            <a href={appleStore} className="mx-5">
                <img src="media/images/appStoreBadge.svg" alt="apple Store Badge" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftCard;
