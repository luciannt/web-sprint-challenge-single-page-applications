import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>Lambda Eats</h1>
        <h3>Homemade pizza for hard working students</h3>
        <div className="info" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
          necessitatibus, maiores, iste aut ut debitis error dolorem adipisci
          molestias hic libero, culpa dignissimos eveniet ipsam aspernatur.
          Reiciendis consequatur blanditiis impedit porro odio cum perspiciatis
          accusamus et repellendus eligendi minima quos iusto voluptatum,
          praesentium assumenda incidunt error totam facilis eum itaque.
        </p>
        <Link to="/pizza" className="button">
          Order Now
        </Link>
      </div>
    </div>
  );
};

export default Home;
