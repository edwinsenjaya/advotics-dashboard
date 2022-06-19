function Sidebar() {
  return (
    <div
      className="col pe-0 bg-white shadow-sm"
      style={{ width: "80px", height: "100vh" }}
    >
      <div className="row">
        <a
          href="#"
          style={{
            width: "10px",
            marginInlineStart: "10px",
            marginBottom: "25px",
          }}
        >
          <img src="sidebar-options.png" alt="sidebar-options" width={"50px"} />
        </a>
      </div>
      <div className="row">
        <a
          href="#"
          style={{
            width: "10px",
            marginInlineStart: "17px",
            marginBottom: "20px",
          }}
        >
          <img src="sidebar-chart.png" alt="sidebar-chart" width={"30px"} />
        </a>
      </div>
      <div className="row">
        <a
          href="#"
          style={{
            width: "10px",
            marginInlineStart: "17px",
            marginBottom: "20px",
          }}
        >
          <img src="sidebar-chart.png" alt="sidebar-chart" width={"30px"} />
        </a>
      </div>
      <div className="row">
        <a href="#" style={{ width: "10px", marginInlineStart: "17px" }}>
          <img src="sidebar-chart.png" alt="sidebar-chart" width={"30px"} />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
