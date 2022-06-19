function ProductList(props) {
  return (
    <div className="col-3 text-dark">
      <div className="row row-cols-1 me-1 g-4">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-10 ps-0 pe-0">
                <h5 className="card-title">{props.title}</h5>
              </div>
              <div className="col-2 ps-0">
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
            <ul class="list-group">
              {props.data.map((data, i) => {
                if (i === 0) {
                  return (
                    <li className="list-group-item border-end-0 border-top-0 border-start-0">
                      <div className="row">
                        <div className="col-4">
                          <img src={props.image} alt="product" width={"70px"} />
                        </div>
                        <div
                          className="col-8"
                          style={{ backgroundColor: "#FFE7BD" }}
                        >
                          <div className="row ps-2 mt-3">{data.name}</div>
                          <div className="row">
                            <div className="col-6" style={{ fontSize: "11px" }}>
                              {data.price}
                            </div>
                            <div
                              className="col-6 ps-0"
                              style={{ fontSize: "11px" }}
                            >
                              {data.amount}
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                }
                return (
                  <li className="list-group-item">
                    <div className="row">
                      <div className="col-3">
                        <img src={props.image} alt="product" width={"40px"} />
                      </div>
                      <div className="col-9">
                        <div className="row ps-2">{data.name}</div>
                        <div className="row">
                          <div className="col-6" style={{ fontSize: "10px" }}>
                            {data.price}
                          </div>
                          <div className="col-6" style={{ fontSize: "10px" }}>
                            {data.amount}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
