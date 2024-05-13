import { useState } from "react";
import logoutImg from "../../assets/log.jpg";
import Home from "../Home/Home";
import "./login.css";
function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    if (email === "a" && password === "a") {
      onLogin();
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
              <button type="submit" id="logout-btn">
                Login{" "}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default Login;
