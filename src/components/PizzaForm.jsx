import React from "react";
import PizzaCover from "../Assets/pizza-order-cover.png";

const PizzaForm = (props) => {
  return (
    <form>
      <div className="main">
        <h2>Famous Brooklyn Pizza</h2>
        <input name="name" placeholder="Order Name" />
        <select>
          <option>Pizza Size</option>
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
          <option>Extra Large</option>
        </select>
        <div className="toppings">
          <span>
            Pepperoni
            <input type="checkbox" value="Pepperoni" name="Pepperoni" />
          </span>
          <span>
            Sausage
            <input type="checkbox" value="Sausage" name="Sausage" />
          </span>
          <span>
            Anchovies
            <input type="checkbox" value="Anchovies" name="Anchovies" />
          </span>
          <span>
            Extra Cheese
            <input type="checkbox" value="Extra Cheese" name="Extra Cheese" />
          </span>
          <span>
            Bell Peppers
            <input type="checkbox" value="Bell Peppers" name="Bell Peppers" />
          </span>
          <span>
            Pineapple
            <input type="checkbox" value="Pineapple" name="Pineapple" />
          </span>
        </div>
        <textarea placeholder="Special Instructions" rows="5" cols="50" />
      </div>
      <div className="side">
        <img src={PizzaCover} alt="" />
      </div>
    </form>
  );
};

export default PizzaForm;
