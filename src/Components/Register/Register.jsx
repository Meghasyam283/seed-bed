import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoutImg from "../../assets/log.jpg";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./register.css";
function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");

  let navigate = useNavigate();

  function handleRegister(e) {
    e.preventDefault();
    if (email === "a" && password === "a") {
      navigate("/home");
    } else {
      alert("Invalid username or password");
    }
    setUsername("");
    setEmail("");
    setPassword("");
  }
  return (
    <>
      <div className="logout-BG">
        <img src={logoutImg} alt="logout" />
        <form onSubmit={handleRegister}>
          <div className="register-form">
            <div className="register-items">
              <h2>Register</h2>
            </div>
            <div className="register-items">
              <p>Name</p>
              <input
                type="text"
                value={username}
                name="name"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="register-items">
              <p>Email</p>
              <input
                type="text"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="register-items">
              <p>Password</p>
              <input
                type="password"
                value={password}
                name="pwd"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="register-items">
              <p>Mobile</p>
              <input
                type="text"
                value={mobile}
                name="mobile"
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>

            <div className="register-items">
              <p>City</p>
              <input
                type="city"
                value={city}
                name="email"
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="register-items">
              <p>State</p>
              <input
                type="text"
                value={state}
                name="state"
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div className="register-items">
              <p>Pincode</p>
              <input
                type="text"
                value={pincode}
                name="pincode"
                onChange={(e) => setPincode(e.target.value)}
              />
            </div>
            <div className="register-items">
              <button type="submit" id="logout-btn" className="btn btn-primary">
                Login
              </button>
            </div>

            <div className="register-items">
              <div className="register">
                <p>
                  If you already have account
                  <Link to="/login"> Click here to Login</Link>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default Login;
