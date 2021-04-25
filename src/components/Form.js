import React from "react";
import { useForm } from "react-hook-form";

const OrderForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="main">
        <h2>Lambda's Famous Pizza</h2>
        <input
          name="name"
          placeholder="Order Name"
          {...register("Order Name", { required: true, minLength: 2 })}
        />
        <select>
          <option>--Please Select Pizza Size--</option>
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
            Ham
            <input type="checkbox" value="Ham" name="Ham" />
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
            Olives
            <input type="checkbox" value="Olives" name="Olives" />
          </span>
        </div>
        <textarea placeholder="Special Instructions" rows="5" cols="50" />
      </div>
      <button type="submit">Place Order</button>
    </form>
  );
};

export default OrderForm;
