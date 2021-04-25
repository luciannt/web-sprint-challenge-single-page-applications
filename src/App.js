import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import OrderForm from "./components/Form";
import Home from "./components/HomePage";
import Nav from "./components/Nav";

const App = () => {
  return (
    <Router>
      <Nav />
      <Route path="/pizza" component={OrderForm} />
      <Route path="/" exact component={Home} />
    </Router>
  );
};
export default App;
