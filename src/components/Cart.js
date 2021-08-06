import React from "react";
import CartItem from "./CartItem";
import { useStateValue } from "./StateProvider";
import "./Cart.scss";

function Cart() {
  const [{ basket }] = useStateValue();
  return (
    <div className="cart">
      {basket?.length === 0 ? (
        <div>You don't have any item in cart</div>
      ) : (
        <div>
          <h2>Items in your Cart</h2>
          <div className="cart-container">
            {basket.map((basket) => (
              <CartItem
                key={basket.id}
                id={basket.id}
                title={basket.title}
                image={basket.image}
                price={basket.price}
              ></CartItem>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
