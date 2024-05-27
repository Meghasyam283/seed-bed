import "../Navbar/navbar.css";
import logo from "../../assets/seedbedlogo.png";
import cart from "../../assets/shopping-cart.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ContactUs from "../Contact Us/ContactUs";

function Navbar(props) {
  const navigate = useNavigate();
  const str = props.countofItems;
  function handleLogout() {
    navigate("/login");
  }
  return (
    <>
      <div className="navbar">
        <p className="title">SeedBed</p>
        <img className="logo" src={logo} alt="Logo" />
        <ul className="navbar-items">
          <li onClick={() => (window.location.href = "/home")}>
            <Link to="/home">Home</Link>
          </li>
          <li onClick={() => (window.location.href = "/feature")}>
            <Link to="/feature">Features</Link>
          </li>
          <li>
            <Link to="/contactus">ContactUs</Link>
          </li>
        </ul>
        <img className="cart" src={cart} />
        <div className="cartItems">
          <p>{str}</p>
        </div>
        <button className="nav-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </>
  );
}
export default Navbar;
