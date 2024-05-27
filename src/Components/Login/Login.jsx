import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoutImg from "../../assets/log.jpg";
import { Link } from "react-router-dom";
// import { LoginContext } from "../AppContext/Context";
import Navbar from "../Navbar/Navbar";
import "./login.css";
function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  function handleLogin(e) {
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
        <form onSubmit={handleLogin}>
          <div className="login-form">
            <div className="login-items">
              <h2>Login</h2>
            </div>
            <div className="login-items">
              <p>Name</p>
              <input
                type="text"
                value={username}
                name="name"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="login-items">
              <p>Email</p>
              <input
                type="text"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="login-items">
              <p>Password</p>
              <input
                type="password"
                value={password}
                name="pwd"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="login-items">
              <button type="submit" id="logout-btn" className="btn btn-primary">
                Login
              </button>
            </div>

            <div className="login-items">
              <div className="register">
                <p>
                  If you are a new user{" "}
                  <Link to="/register">Click here to register</Link>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* <LoginContext.Provider value={username}>
        <LoginContext />
      </LoginContext.Provider> */}
    </>
  );
}
export default Login;
