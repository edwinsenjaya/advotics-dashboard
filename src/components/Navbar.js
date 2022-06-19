function Navbar() {
  return (
    <section id="nav-bar">
      <nav className="navbar navbar-light shadow-sm bg-white text-dark">
        <div className="container-fluid d-flex">
          <a className="text-end" href="#">
            <img
              src="advotics-navbar.png"
              alt="advotics"
              style={{ width: "275px", marginLeft: "20px" }}
            />
          </a>
          <div className="text-end row">
            <div className="col" style={{ paddingInlineEnd: "0px" }}>
              <div
                className="navbar-brand fs-6"
                style={{ paddingBottom: "0px" }}
              >
                Username
              </div>
              <div
                className="navbar-brand text-secondary"
                style={{ paddingTop: "0px", fontSize: "10px" }}
              >
                Company Name
              </div>
            </div>
            <a className="col d-flex align-items-center ps-0" href="#">
              <img src="profile.png" alt="profile" style={{ width: "40px" }} />
            </a>
            <a className="col d-flex align-items-center ps-0" href="#">
              <img src="logout.png" alt="profile" style={{ width: "40px" }} />
            </a>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
