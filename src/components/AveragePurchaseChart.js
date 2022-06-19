import AverageChart from "./AverageChart";

function AveragePurchaseChart() {
  return (
    <div className="col-6 text-dark">
      <div className="row row-cols-1 me-1 g-4 mb-3">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-6 mt-2">
                <h5 className="card-title ">AVERAGE PURCHASE VALUE</h5>
              </div>
              <div className="col-4" style={{ paddingInlineStart: "115px" }}>
                <div class="dropdown">
                  <button
                    class="btn btn-white dropdown-toggle border"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Last 6 months
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        Last 3 months
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Last 9 months
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Last 12 months
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-2 mt-1">
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
            <AverageChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AveragePurchaseChart;
