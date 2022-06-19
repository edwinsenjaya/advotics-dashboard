import { useState } from "react";

function SalesTurnoverCard() {
  const [turnOver, setTurnOver] = useState("Rp 3,600,000");
  const [percentage, setPercentage] = useState("13,8%");

  return (
    <div className="row">
      <div className="col-12 text-dark">
        <div className="row row-cols-1 row-cols-md-4 g-4 mb-3">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <div className="row">
                <div className="col-10">
                  <h5 className="card-title fs-6" style={{ color: "grey" }}>
                    Sales Turnover
                  </h5>
                </div>
                <div className="col-2">
                  <p className="card-text text-end">
                    <a>
                      <img
                        src="options.png"
                        alt="options"
                        style={{ width: "10px" }}
                        href="#"
                      />
                    </a>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-8 pe-0">
                  <div className="row">
                    <h5 className="card-title fw-bold">{turnOver}</h5>
                  </div>
                  <div className="row">
                    <h5 className="card-text" style={{ fontSize: "8.5px" }}>
                      <span style={{ color: "red" }}>
                        <img
                          src="down-arrow.png"
                          alt="down-arrow"
                          width={"6px"}
                        />
                        {percentage}
                      </span>{" "}
                      last period in products sold
                    </h5>
                  </div>
                </div>
                <div className="col-4 p-0">
                  <p className="card-text ms-1">
                    <img src="cart.png" alt="cart" style={{ width: "50px" }} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesTurnoverCard;
