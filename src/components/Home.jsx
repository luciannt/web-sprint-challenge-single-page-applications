import React from "react";
import { Link } from "react-router-dom";
import Cover from "../Assets/cover_image.png";

const Home = (props) => {
  return (
    <div className="home">
      <div className="title">
        <h1>Mario's Pizza Palace</h1>
        <h3>Free</h3>
        <h3>Pizza</h3>
        <h3>Delivery</h3>
        <div className="break" />
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
      <div className="side">
        <img src={Cover} alt="" className="cover" />
      </div>
    </div>
  );
};

export default Home;
