import { useEffect, useState, useMemo, useCallback } from "react";
import Card from "../components/Card";
import { useDispatch } from "react-redux";
import { fetchSearch, fetchData } from "../store/photos/action";
import debounce from "lodash.debounce";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const searchData = useMemo(() => {
    return debounce((query) => {
      dispatch(fetchSearch(query));
    }, 2000);
  }, []);

  const onQueryChange = useCallback((q) => {
    searchData(q);
  }, []);

  return (
    <div className="container d-flex flex-column vw-100">
      <div className="row mb-3">
        <h1 className="text-left text-secondary fw-bold mb-3 mt-4">
          Dashboard
        </h1>
        <div className="accordion" style={{ padding: "0px" }}>
          <div
            className="accordion-item border-0"
            style={{ backgroundColor: "#f7f7f7" }}
          >
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button text-white fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={{ backgroundColor: "#37B04C" }}
              >
                MARKET INSIGHTS
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div className="row">
                  <div className="col-12 text-dark">
                    <div className="row row-cols-1 row-cols-md-4 g-4 mb-3">
                      <div className="card" style={{ width: "20rem" }}>
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">Some quick example text</p>
                          <a href="#" className="btn btn-primary">
                            Go somewhere
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 text-dark">
                    <div className="row row-cols-1 me-1 g-4 mb-3">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">Some quick example text</p>
                          <a href="#" className="btn btn-primary">
                            Go somewhere
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3 text-dark">
                    <div className="row row-cols-1 me-1 g-4">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">Some quick example text</p>
                          <a href="#" className="btn btn-primary">
                            Go somewhere
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3 text-dark">
                    <div className="row row-cols-1 g-4">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">Some quick example text</p>
                          <a href="#" className="btn btn-primary">
                            Go somewhere
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row"></div>
    </div>
  );
}

export default Home;
