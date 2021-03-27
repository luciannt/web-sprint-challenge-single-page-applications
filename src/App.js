import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import PizzaForm from "./components/PizzaForm";
import "./styles/App.css";

const App = () => {
  return (
    <Router>
      <Nav />
      <Route path="/" exact component={Home} />
      <Route path="/pizza" component={PizzaForm} />
    </Router>
  );
};
export default App;
