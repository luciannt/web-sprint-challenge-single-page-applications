import React from "react";
import { Route, Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
    </Router>
  );
};
export default App;
