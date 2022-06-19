import Sidebar from "../components/Sidebar";
import SalesTurnoverCard from "../components/SalesTurnoverCard";
import AveragePurchaseChart from "../components/AveragePurchaseChart";
import ProductList from "../components/ProductList";
import { DatePicker } from "antd";
import { useState } from "react";
const { RangePicker } = DatePicker;

function Home() {
  const bestSellingData = [
    {
      name: "[Nama Product]",
      price: "Rp XXXX",
      amount: "[jml terjual]",
    },
    {
      name: "[Nama Product]",
      price: "Rp XXXX",
      amount: "[jml terjual]",
    },
    {
      name: "[Nama Product]",
      price: "Rp XXXX",
      amount: "[jml terjual]",
    },
    {
      name: "[Nama Product]",
      price: "Rp XXXX",
      amount: "[jml terjual]",
    },
    {
      name: "[Nama Product]",
      price: "Rp XXXX",
      amount: "[jml terjual]",
    },
  ];
  const [bestSelling, setBestSelling] = useState(bestSellingData);

  const topCompetitorData = [
    {
      name: "[Nama Product]",
      price: "Rp XXXX",
      amount: "[jml terjual]",
    },
    {
      name: "[Nama Product]",
      price: "Rp XXXX",
      amount: "[jml terjual]",
    },
    {
      name: "[Nama Product]",
      price: "Rp XXXX",
      amount: "[jml terjual]",
    },
    {
      name: "[Nama Product]",
      price: "Rp XXXX",
      amount: "[jml terjual]",
    },
    {
      name: "[Nama Product]",
      price: "Rp XXXX",
      amount: "[jml terjual]",
    },
  ];
  const [topCompetitor, setTopCompetitor] = useState(topCompetitorData);

  return (
    <div className="row" style={{ position: "absolute" }}>
      <Sidebar />
      <div className="col">
        <div className="container d-flex flex-column vw-100">
          <div className="row mb-3">
            <div className="row">
              <div className="col-6">
                <h1 className="text-left text-secondary fw-bold mb-3 mt-4">
                  Dashboard
                </h1>
              </div>
              <div className="col-6">
                <h1 className="text-end text-secondary fw-bold mb-3 mt-4">
                  <RangePicker format={"DD MMMM YYYY"} />
                </h1>
              </div>
            </div>
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
                    <SalesTurnoverCard />
                    <div className="row">
                      <AveragePurchaseChart />
                      <ProductList
                        data={bestSelling}
                        title={"BEST SELLING SKU"}
                        image={"product-best-selling.png"}
                      />
                      <ProductList
                        data={bestSellingData}
                        title={"TOP COMPETITOR SKU"}
                        image={"product-top-competitor.png"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
