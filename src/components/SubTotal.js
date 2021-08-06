import React from "react";
import { Button } from "./Button";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import "./SubTotal.scss";

function SubTotal() {
  const [{ basket }, dispatch] = useStateValue();

  const checkout = () => {
    alert("Thank you for the order");
    dispatch({ type: "CLEAR_BASKET" });
  };
  return (
    <div className="subtotal">
      <div className="subtotal-checkout">
        <div className="subtotal-text">
          Subtotal ({basket?.length} items): €{getBasketTotal(basket)}
        </div>
        {basket.length > 0 ? (
          <Button onClick={checkout}>Processed to Checkout</Button>
        ) : null}
      </div>

      <Button
        buttonStyle="btn--outline"
        onClick={() => dispatch({ type: "CLEAR_BASKET" })}
      >
        Clear Cart
      </Button>
    </div>
  );
}

export default SubTotal;
