import "../Navbar/navbar.css";
import logo from "../../assets/seedbedlogo.png";
import cart from "../../assets/shopping-cart.png";

function Navbar(props, { onLogout }) {
  const str = props.countofItems;

  return (
    <>
      <div className="navbar">
        <p className="title">SeedBed</p>
        <img className="logo" src={logo} alt="Logo" />
        <ul className="navbar-items">
          <li onClick={() => (window.location.href = "/home")}>
            <a href="/home">Home</a>
          </li>
          <li onClick={() => (window.location.href = "/feature")}>
            <a href="/feature">Feature</a>
          </li>
          <li onClick={() => (window.location.href = "/contactus")}>
            <a href="/contactus">ContactUs</a>
          </li>
        </ul>
        <img className="cart" src={cart} />
        <div className="cartItems">
          <p>{str}</p>
        </div>
        <button
          onClick={() => (window.location.href = "/home")}
          className="nav-button"
        >
          Logout
        </button>
      </div>
    </>
  );
}
export default Navbar;
