import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { BlogNav } from "./components/BlogNav";
import { BlogBody } from "./components/BlogBody";
import "./App.css";
// import Login from "./Login";
// import Register from "./Register";
// import Logout from "./Logout";
// import Home from "./Home";

function App() {
  return (
    <Router>
      <div className="App">
        <BlogNav />
        {/* Add your Route components here */}
        {/* <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/logout" component={Logout} />
          <Route path="/" component={Home} /> */}
        <BlogBody />
      </div>
    </Router>
  );
}

export default App;
