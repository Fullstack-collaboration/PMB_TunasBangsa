import logo from "../assets/svg/footer_logo.svg";
import { Navbar, Nav, Button } from "react-bootstrap";
import "./navbar.css";
import { useState, useEffect } from "react";
import { BsCaretDownFill } from "react-icons/bs";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

function NavbarComponent() {
  const [changeColor, setChangeColor] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    // Memanggil fungsi saat komponen dimount dan saat nilai changeColor berubah
    changeBackgroundColor();

    // Menambahkan event listener untuk mendengarkan perubahan posisi scroll
    window.addEventListener("scroll", changeBackgroundColor);

    // Membersihkan event listener saat komponen di-unmount
    return () => {
      window.removeEventListener("scroll", changeBackgroundColor);
    };
  }, [changeColor]);

  const handleProfile = () => {
    navigate("/profile");
  };

  const handleLogout = () => {
    localStorage.removeItem("data");
    navigate("/login");
  };

  const dataLocalStorage = localStorage.getItem("data");
  const userData = JSON.parse(dataLocalStorage);

  useEffect(() => {}, [userData]);

  const hideNavItems = location.pathname === "/admin";

  return (
    <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
      <div className="container-fluid mx-lg-5 mt-lg-2 ">
        <NavLink to="/">
          <img src={logo} alt="logo" className="w-75" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Navbar.Collapse id="navbarTogglerDemo02">
          <Nav className="me-auto mb-2 mb-lg-0">
            {!hideNavItems && (
              <>
                <Nav.Item className="nav-item mx-lg-3 text-center fw-semibold">
                  <NavLink to="/biodata" className={"btn fw-semibold"}>Biodata</NavLink>
                </Nav.Item>
                <Nav.Item className="nav-item mx-lg-3 text-center fw-semibold">
                  <NavLink to="/berkas" className={"btn fw-semibold"}>Berkas</NavLink>
                </Nav.Item>
                <Nav.Item className="nav-item mx-lg-3 text-center fw-semibold">
                  <NavLink to="/status" className={"btn fw-semibold"}>Status Pendaftaran</NavLink>
                </Nav.Item>
              </>
            )}
          </Nav>
          <Nav className=" ms-auto d-flex navbar-nav">
            {userData ? (
              <Nav.Item
                className="nav-item rounded-5 text-center font-general custom-dropdown"
                id="profil-dropdown"
              >
                <div className="dropdown">
                  <Nav.Link
                    className="nav-link fw-semibold active text-white "
                    role="button"
                    id="font-general"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      id="user-avatar"
                      className="img-fluid border border-white border-2 rounded-circle"
                      style={{ width: "30px", height: "30px" }}
                      src={userData.avatar}
                      alt="user"
                    />
                    <span id="user-name">{userData.nama}</span>
                    <BsCaretDownFill className="ms-1" />{" "}
                    {/* Icon panah ke bawah */}
                  </Nav.Link>
                  <div className="dropdown-menu text-center">
                    <div
                      className="dropdown-item text-light link-dark fw-semibold text-center"
                      style={{ cursor: 'pointer' }} 
                      onClick={handleProfile}
                    >
                      Profile
                    </div>
                    <div className="dropdown-divider"></div>
                    <div
                      className="dropdown-item text-light link-dark fw-semibold text-center"
                      style={{ cursor: 'pointer' }} 
                      onClick={handleLogout}
                    >
                      Logout
                    </div>
                  </div>
                </div>
              </Nav.Item>
            ) : (
              <>
                <Nav.Item
                  className="nav-item mt-3 text-center font-general"
                  id="login"
                >
                  <NavLink
                    className="btn btn-link text-decoration-none text-primary fw-bold"
                    to="/login"
                  >
                    Login
                  </NavLink>
                </Nav.Item>
                <Nav.Item
                  className="nav-item mt-2 text-center font-general"
                  id="register"
                >
                  <NavLink
                    className="btn btn-link text-decoration-none text-primary fw-bold"
                    to="/register"
                  >
                    <Button className="fw-bold">Daftar</Button>
                  </NavLink>
                </Nav.Item>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavbarComponent;
