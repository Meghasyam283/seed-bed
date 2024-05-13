import Home from "./Components/Home/Home";
import Feature from "./Components/Features/Feature";
import ContactUs from "./Components/ContactUs/ContactUs";
import Navbar from "./Components/Navbar/Navbar";
import Cactus from "./Components/Home/cactus/Cactus";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Components/Login/Login";
import { useState } from "react";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    setIsLoggedIn(true);
  }

  function handleLogout() {
    console.log("Logout clicked", isLoggedIn);
    setIsLoggedIn(false);
  }
  return (
    <>
      <div>
        {isLoggedIn ? (
          <>
            <Navbar onLogout={handleLogout} />
            <Cactus />
            {/* <Router>
              <Switch>
                <Route exact path="/" component={Login}></Route>
                <Route exact path="/home" component={Home}></Route>
                <Route exact path="/feature" component={Feature}></Route>
                <Route exact path="/contactus" component={ContactUs}></Route>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="*" component={ErrorPage}></Route>
              </Switch>
            </Router> */}
          </>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </div>
      ;
    </>
  );
}

export default App;
