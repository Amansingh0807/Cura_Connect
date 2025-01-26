import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const handleLogout = async () => {
    await axios
      .get("http://localhost:8080/api/user/patient/logout", {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        setIsAuthenticated(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const navigateTo = useNavigate();
  const location = useLocation();

  const goToLogin = () => {
    navigateTo("/login");
  };

  return (
    <>
      <nav className="container">
        <div className="logo">
          <img src="/logo.png" alt="logo" className="logo-img" height="80px" width="80px" />
        </div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            <Link
              to="/"
              onClick={() => setShow(!show)}
              className={location.pathname === "/" ? "active-link" : ""}
            >
              Home
            </Link>
            <Link
              to="/appointment"
              onClick={() => setShow(!show)}
              className={location.pathname === "/appointment" ? "active-link" : ""}
            >
              Appointment
            </Link>
            <Link
              to="/about"
              onClick={() => setShow(!show)}
              className={location.pathname === "/about" ? "active-link" : ""}
            >
              About Us
            </Link>
            <Link
              to="/chat"
              onClick={() => setShow(!show)}
              className={location.pathname === "/chat" ? "active-link" : ""}
            >
              Chat
            </Link>
            <Link
              to="/record"
              onClick={() => setShow(!show)}
              className={location.pathname === "/record" ? "active-link" : ""}
            >
              Record
            </Link>
            <Link
              to="/services"
              onClick={() => setShow(!show)}
              className={location.pathname === "/services" ? "active-link" : ""}
            >
              Services
            </Link>
          </div>
          {isAuthenticated ? (
            <button className="logoutBtn-btn" onClick={handleLogout}>
              LOGOUT
            </button>
          ) : (
            <button className="loginBtn btn" onClick={goToLogin}>
              LOGIN
            </button>
          )}
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
